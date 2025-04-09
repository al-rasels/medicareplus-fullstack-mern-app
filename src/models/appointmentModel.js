const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    location: { type: String, required: true },
    patientName: { type: String, required: true },
    patientGender: { type: String, required: true },
    patientEmail: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: Date, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AppointmentModel = mongoose.model("appointments", DataSchema);
module.exports = AppointmentModel;
