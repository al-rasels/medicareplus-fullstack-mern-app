const AppointmentModel = require("../models/appointmentModel");
const mongoose = require("mongoose");
const InvoiceModel = require("../models/invoiceModel");
const ObjectID = mongoose.Types.ObjectId;

const AppointmentListService = async (req) => {
  try {
    const user_id = new ObjectID(req.headers.user_id);
    const matchState = { $match: { userID: user_id } };

    // Join with Doctors Collection
    const JoinWithDoctorsStage = {
      $lookup: {
        from: "doctors",
        localField: "doctorID", // Reference in the appointment collection
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
        // Expanded city
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
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    console.error(error);
    return { status: "error", message: error.message };
  }
};
const AppointmentListDoctorService = async (req) => {
  try {
    const user_id = new ObjectID(req.headers.user_id);
    const matchState = { $match: { doctorID: user_id } };

    // Join with Doctors Collection
    const JoinWithUsersStage = {
      $lookup: {
        from: "users",
        localField: "userID", // Reference in the appointment collection
        foreignField: "_id",
        as: "user",
      },
    };

    const UnwindUserStage = { $unwind: "$user" };

    // Join with Specialities Collection (After unwinding doctor)

    // Projection Stage (Only return necessary fields)
    const ProjectionStage = {
      $project: {
        "user.password": 0,
        "user.role": 0,
        "user._id": 0,
        "user.otp": 0,
        "user.updatedAt": 0,

        // Expanded speciality
      },
    };

    const data = await AppointmentModel.aggregate([
      matchState,
      JoinWithUsersStage,
      UnwindUserStage,
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
    const reqBody = req.body;

    const data = await AppointmentModel.updateOne(
      { userID: req.headers.user_id, doctorID: reqBody.doctorID },
      { $set: reqBody },
      { upsert: true }
    );

    if (data.upsertedCount > 0 || data.modifiedCount > 0) {
      return {
        status: "success",
        data: data,
        message: "Appointment request was successfully",
      };
    }
  } catch (err) {
    return {
      status: "fail",
      message: "Something Went Wrong with" + err.message,
    };
  }
};

const UpdateAppointmentService = async (req) => {
  try {
    const reqBody = req.body;
    const receiptObject = {
      transaction_id: reqBody.tran_id,
      transaction_date: reqBody.tran_date,
      card_type: reqBody.card_type,
      bank_transaction_id: reqBody.bank_tran_id,
      amount_paid: reqBody.amount,
      store_amount: reqBody.store_amount,
      status: reqBody.status,
      currency: reqBody.currency,
      currency_rate: reqBody.currency_rate,
      card_issuer: reqBody.card_issuer,
      issuer_country: reqBody.card_issuer_country,
      risk_level: reqBody.risk_title,
      store_id: reqBody.store_id,
      message: "Thank you for your payment!",
    };

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MediCare+ Payment Receipt</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    @media print {
  #printBtn {
    display: none;
  }
}

  </style>
</head>
<body class="bg-blue-50 font-sans p-6">
  <div id="receipt" class="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
    <h2 class="text-center text-2xl font-semibold text-blue-700 mb-6">MediCare+ Payment Receipt</h2>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <div class="text-gray-600 font-medium">Transaction ID</div>
        <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.tran_id}</div>
      </div>
      <div>
        <div class="text-gray-600 font-medium">Status</div>
        <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.status}</div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <div class="text-gray-600 font-medium">Date</div>
        <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.tran_date}</div>
      </div>
      <div>
        <div class="text-gray-600 font-medium">Amount</div>
        <div class="bg-gray-100 rounded p-2 text-sm">৳${reqBody.amount}</div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <div class="text-gray-600 font-medium">Store Amount</div>
        <div class="bg-gray-100 rounded p-2 text-sm">৳${reqBody.store_amount}</div>
      </div>
      <div>
        <div class="text-gray-600 font-medium">Card Type</div>
        <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.card_type}</div>
      </div>
    </div>

    <div class="mb-4">
      <div class="text-gray-600 font-medium">Bank Transaction ID</div>
      <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.bank_tran_id}</div>
    </div>

    <div class="mb-4">
      <div class="text-gray-600 font-medium">Card Issuer</div>
      <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.card_issuer}</div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <div class="text-gray-600 font-medium">Currency</div>
        <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.currency}</div>
      </div>
      <div>
        <div class="text-gray-600 font-medium">Currency Rate</div>
        <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.currency_rate}</div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <div class="text-gray-600 font-medium">Issuer Country</div>
        <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.card_issuer_country}</div>
      </div>
      <div>
        <div class="text-gray-600 font-medium">Risk Level</div>
        <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.risk_title}</div>
      </div>
    </div>

    <div class="mb-4">
      <div class="text-gray-600 font-medium">Store ID</div>
      <div class="bg-gray-100 rounded p-2 text-sm">${reqBody.store_id}</div>
    </div>

    <div class="text-center text-sm text-gray-500 mt-6">Thank you for your payment!</div>

    <div class="mt-4 flex justify-between items-center">
  
 
  <a href="#" id="downloadBtn" download class="text-blue-600 hover:underline">Download Receipt</a>

</div>

  </div>




</body>
</html>

`;

    await InvoiceModel.updateOne(
      { tran_id: reqBody.tran_id },
      {
        reciept: JSON.stringify(receiptObject),
        payment_status: "successfully paid",
      }
    );
    return { status: "success", data: data };
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
  AppointmentListDoctorService,
  RemoveAppointmentService,
  SaveAppointmentService,
  UpdateAppointmentService,
};
