const AppointmentModel = require("../models/appointmentModel");
const mongoose = require("mongoose");
const InvoiceModel = require("../models/invoiceModel");
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
  <title>Payment Receipt</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 600px;
      margin: auto;
      background: #f9f9f9;
    }
    .receipt {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .receipt h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }
    .section {
      margin-bottom: 15px;
    }
    .section-title {
      font-weight: bold;
      margin-bottom: 5px;
      color: #555;
    }
    .section-content {
      padding: 10px;
      border: 1px solid #e0e0e0;
      background-color: #fafafa;
      border-radius: 5px;
    }
    .two-column {
      display: flex;
      justify-content: space-between;
    }
    .two-column div {
      width: 48%;
    }
    .footer {
      text-align: center;
      font-size: 0.9em;
      color: #888;
      margin-top: 20px;
    }
    @media print {
      #printBtn {
        display: none;
      }
    }
  </style>
</head>

<body>
  <div class="receipt">
    <h2>Payment Receipt</h2>

    <div class="section two-column">
      <div>
        <div class="section-title">Transaction ID:</div>
        <div class="section-content">${reqBody.tran_id}</div>
      </div>
      <div>
        <div class="section-title">Status:</div>
        <div class="section-content">${reqBody.status}</div>
      </div>
    </div>

    <div class="section two-column">
      <div>
        <div class="section-title">Date:</div>
        <div class="section-content">${reqBody.tran_date}</div>
      </div>
      <div>
        <div class="section-title">Amount:</div>
        <div class="section-content">৳${reqBody.amount}</div>
      </div>
    </div>

    <div class="section two-column">
      <div>
        <div class="section-title">Store Amount:</div>
        <div class="section-content">৳${reqBody.store_amount}</div>
      </div>
      <div>
        <div class="section-title">Card Type:</div>
        <div class="section-content">${reqBody.card_type}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Bank Transaction ID:</div>
      <div class="section-content">${reqBody.bank_tran_id}</div>
    </div>

    <div class="section">
      <div class="section-title">Card Issuer:</div>
      <div class="section-content">${reqBody.card_issuer}</div>
    </div>

    <div class="section two-column">
      <div>
        <div class="section-title">Currency:</div>
        <div class="section-content">${reqBody.currency}</div>
      </div>
      <div>
        <div class="section-title">Currency Rate:</div>
        <div class="section-content">${reqBody.currency_rate}</div>
      </div>
    </div>

    <div class="section two-column">
      <div>
        <div class="section-title">Issuer Country:</div>
        <div class="section-content">${reqBody.card_issuer_country}</div>
      </div>
      <div>
        <div class="section-title">Risk Level:</div>
        <div class="section-content">${reqBody.risk_title}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Store ID:</div>
      <div class="section-content">${reqBody.store_id}</div>
    </div>
       <div class="footer">
      Thank you for your payment!
    </div>
  </div>

  
</body>
</html>
`;
    await InvoiceModel.updateOne(
      {
        tran_id: reqBody.tran_id,
      },
      {
        set: {
          payment_status: "success",
          payment_details: receiptObject,
        },
      },
      { upsert: true }
    );
    return { status: "success", data: html };
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
