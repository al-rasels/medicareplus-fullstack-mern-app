const mongoose = require("mongoose");


const DataSchema = mongoose.Schema(
  {
      img: { type: String, required: true },
      category: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      author: { type: String, required: true },
      date: { type: Date, default: Date.now },
      doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BlogModel = mongoose.model("blogs", DataSchema);

module.exports = BlogModel;
