const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
      img: { type: String, required: true },
      category: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      content: { type: String, required: true },
      author: { type: String, required: true },
      date: { type: Date, default: Date.now },
      doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
      tags: { type: [String], default: [] },
      comments: [
          {
              user: String,
              comment: String,
              date: { type: Date, default: Date.now },
          },
      ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BlogDetailModel = mongoose.model("blog_detail", DataSchema);

module.exports = BlogDetailModel;
