const AppointmentModel = require("../models/appointmentModel");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const AppointmentListService = async (req) => {
  try {
    const user_id = new ObjectID(req.headers.user_id);
    const matchState = { $match: { user: user_id } };

    // Join with Doctors Collection
    const JoinWithDoctorsStage = {
      $lookup: {
        from: "doctors",
        localField: "doctor", // Reference in the appointment collection
        foreignField: "_id",
        as: "doctor",
      },
    };

    const UnwindDoctorStage = { $unwind: "$doctor" };

    // Join with Specialities Collection (After unwinding doctor)
    const JoinWithSpecialityStage = {
      $lookup: {
        from: "specialities",
        localField: "doctor.speciality",
        foreignField: "_id",
        as: "doctor.speciality",
      },
    };

    // Join with Cities Collection (After unwinding doctor)
    const JoinWithCityStage = {
      $lookup: {
        from: "cities",
        localField: "doctor.city",
        foreignField: "_id",
        as: "doctor.city",
      },
    };

    const UnwindSpecialityStage = {
      $unwind: { path: "$doctor.speciality", preserveNullAndEmptyArrays: true },
    };
    const UnwindCityStage = {
      $unwind: { path: "$doctor.city", preserveNullAndEmptyArrays: true },
    };

    // Projection Stage (Only return necessary fields)
    const ProjectionStage = {
      $project: {
        "doctor._id": 1,
        "doctor.name": 1,
        "doctor.img": 1,
        "doctor.description": 1,
        "doctor.specialization": 1,
        "doctor.fee": 1,
        "doctor.rating": 1,
        "doctor.location": 1,
        "doctor.remark": 1,
        "doctor.city": 1, // Expanded city
        "doctor.speciality": 1, // Expanded speciality
        user: 1,
        phone: 1,
        message: 1,
        date: 1,
        time: 1,
      },
    };

    const data = await AppointmentModel.aggregate([
      matchState,
      JoinWithDoctorsStage,
      UnwindDoctorStage,
      JoinWithSpecialityStage,
      UnwindSpecialityStage,
      JoinWithCityStage,
      UnwindCityStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    console.error(error);
    return { status: "error", message: error.message };
  }
};

const SaveAppointmentService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.user = user_id;

    await AppointmentModel.create(reqBody);
    return {
      status: "success",
      message: "Appointment request was successfully",
    };
  } catch (err) {
    return {
      status: "fail",
      message: "Something Went Wrong with" + err.message,
    };
  }
};

const UpdateAppointmentService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const appointmentID = req.params.appointmentID;
    let reqBody = req.body;

    const data = await AppointmentModel.updateOne(
      { _id: appointmentID, user: user_id },
      { $set: reqBody }
    );
    return { status: "success", message: data };
  } catch (err) {
    return {
      status: "fail",
      message: "Something Went Wrong with" + err.message,
    };
  }
};

const RemoveAppointmentService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const appointmentID = req.params.appointmentID;

    const data = await AppointmentModel.deleteOne({
      _id: appointmentID,
      user: user_id,
    });

    return { status: "success", data: data };
  } catch (err) {
    return {
      status: "fail",
      message: "Something Went Wrong with" + err.message,
    };
  }
};

module.exports = {
  AppointmentListService,
  RemoveAppointmentService,
  SaveAppointmentService,
  UpdateAppointmentService,
};
