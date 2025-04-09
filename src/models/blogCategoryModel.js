const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    categoryName: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BlogCategoryModel = mongoose.model("categories", DataSchema);

module.exports = BlogCategoryModel;
