const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    reviewFor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    reviewBy: { type: mongoose.Schema.Types.ObjectId, required: true },
    rating: { type: String, required: true },
    review: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ReviewModel = mongoose.model("reviews", DataSchema);

module.exports = ReviewModel;
