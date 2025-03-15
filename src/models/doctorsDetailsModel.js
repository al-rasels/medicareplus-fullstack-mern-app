const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    shortDesc: { type: String, required: true },
    experience: { type: String, required: true },
    contact: { type: String, required: true },
    fee: { type: String, required: true },
    about: { type: String, required: true },
    speciality: { type: mongoose.Schema.Types.ObjectId, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, required: true },
    clinic: { type: mongoose.Schema.Types.ObjectId, required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DoctorsDetailsModel = mongoose.model("doctor_details", DataSchema);

module.exports = DoctorsDetailsModel;
