const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: {
      type: String,
      required: true,
      default: "https://placehold.co/150",
    },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    otp: { type: String, required: true, default: "0" },
    password: { type: String, required: true, default: "0" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", DataSchema);
module.exports = UserModel;

