const WishModel = require("../models/wishModel");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const WishListService = async (req) => {
  try {
    const user_id = new ObjectID(req.headers.user_id);
    const MatchStage = { $match: { user: user_id } };

    const JoinWithCityStage = {
      $lookup: {
        from: "cities",
        localField: "doctor.city", // current field
        foreignField: "_id", // cities field
        as: "doctor.city",
      },
    };
    const JoinWithDoctorsStage = {
      $lookup: {
        from: "doctors",
        localField: "doctor", // current field
        foreignField: "_id", // cities field
        as: "doctor",
      },
    };
    const JoinWithSpecialityStage = {
      $lookup: {
        from: "specialities",
        localField: "doctor.speciality",
        foreignField: "_id",
        as: "doctor.speciality",
      },
    };
    // const JoinWithUserStage = {
    //   $lookup: {
    //     from: "users",
    //     localField: "user",
    //     foreignField: "_id",
    //     as: "user",
    //   },
    // };
    const UnwindCityStage = { $unwind: "$doctor.city" };
    const UnwindDoctorStage = { $unwind: "$doctor" };
    const UnwindSpecialityStage = { $unwind: "$doctor.speciality" };
    const ProjectionStage = {
      $project: {
        city: { _id: 0 },
        speciality: { _id: 0 },
        doctor: { _id: 0 },
      },
    };

    const data = await WishModel.aggregate([
      MatchStage,
      JoinWithDoctorsStage,
      UnwindDoctorStage,
      JoinWithSpecialityStage,
      JoinWithCityStage,
      // JoinWithUserStage,
      UnwindSpecialityStage,
      UnwindCityStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

const SaveWishService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const reqBody = req.body;
    reqBody.user = user_id;
    const data = await WishModel.updateOne(
      reqBody,
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong !" + e.message };
  }
};

const RemoveWishService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const reqBody = req.body;
    reqBody.user = user_id;
    const data = await WishModel.deleteOne(reqBody);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

module.exports = {
  WishListService,
  SaveWishService,
  RemoveWishService,
};
