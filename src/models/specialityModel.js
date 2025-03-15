const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SpecialityModel = mongoose.model("specialities", DataSchema);

module.exports = SpecialityModel;
