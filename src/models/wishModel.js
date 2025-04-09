const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DoctorsDetailsModel = mongoose.model("wishes", DataSchema);

module.exports = DoctorsDetailsModel;
