const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    doctorID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    reason: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    area: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    paymentAmount: { type: Number, required: true },
    meetingLink: { type: String, required: true, default: "no link" },
    message: { type: String, required: true, default: "no message" },
    paymentMethod: { type: String, required: true, default: "e-cash" },
    paymentId: { type: String, required: true, default: "0" },
    paymentCurrency: { type: String, required: true, default: "BDT" },
    paymentError: { type: String, required: true, default: "no error" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AppointmentModel = mongoose.model("appointments", DataSchema);
module.exports = AppointmentModel;
