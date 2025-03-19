const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    shortDesc: { type: String, required: true },
    contact: { type: String, required: true },
    about: { type: String, required: true },
    services: { type: String, required: true },
    review: { type: String, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, required: true },
    clinic: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ClinicDetailsModel = mongoose.model("clinic_details", DataSchema);

module.exports = ClinicDetailsModel;
