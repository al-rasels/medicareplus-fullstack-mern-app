const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    img: { type: String, required: true },
    name: { type: String, unique: true, required: true },
    rating: { type: String, required: true },
    location: { type: String, required: true },
    schedule: { type: String, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ClinicModel = mongoose.model("clinic", DataSchema);

module.exports = ClinicModel;
