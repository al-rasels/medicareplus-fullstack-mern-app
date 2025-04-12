const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    reasonForAppointment: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: Date, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    paymentAmount: { type: Number, required: true },
    status: { type: String, required: true, default: "pending" },
    paymentMethod: { type: String, required: true, default: "cash" },
    paymentStatus: { type: String, required: true, default: "pending" },
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
