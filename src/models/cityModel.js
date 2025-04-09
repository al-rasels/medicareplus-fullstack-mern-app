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

const CityModel = mongoose.model("cities", DataSchema);

module.exports = CityModel;
