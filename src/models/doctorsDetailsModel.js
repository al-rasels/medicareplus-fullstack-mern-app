const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    workDay: { type: String, required: true },
    consultingFee: { type: Number, required: true },
    contact: { type: String, required: true },
    aboutMe: { type: String, required: true },
    serviceDes: { type: String, required: true },
    speciality: { type: mongoose.Schema.Types.ObjectId, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DoctorsDetailsModel = mongoose.model("doctor_details", DataSchema);

module.exports = DoctorsDetailsModel;
