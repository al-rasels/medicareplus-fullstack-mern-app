const BlogCategoryModel = require("../models/blogCategoryModel");
const ClinicDetailsModel = require("../models/blogDetailModel");
const BlogModel = require("../models/blogModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const BlogByKeywordService = async (req) => {
  try {
    const SearchRegex = { $regex: req.params.keyword, $options: "i" };
    const SearchParams = [
      { title: SearchRegex },
      { description: SearchRegex },
      { category: SearchRegex },
      { author: SearchRegex },
    ];
    const SearchQuery = { $or: SearchParams };

    const MatchStage = {
      $match: SearchQuery,
    };

    const ProjectionStage = {
      $project: { _id: 0 },
    };

    const data = await BlogModel.aggregate([MatchStage, ProjectionStage]);

    return {
      status: "success",
      data: data,
    };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};

const BlogByCategoryService = async (req) => {
  try {
    const SearchRegex = { $regex: req.params.category, $options: "i" };
    const SearchParams = [{ category: SearchRegex }];
    const SearchQuery = { $or: SearchParams };

    const MatchStage = {
      $match: SearchQuery,
    };

    const ProjectionStage = {
      $project: { _id: 0 },
    };

    const data = await BlogModel.aggregate([MatchStage, ProjectionStage]);

    return {
      status: "success",
      data: data,
    };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const BlogListService = async (req) => {
  try {
    const MatchStage = {
      $match: {},
    };

    const data = await BlogModel.aggregate([MatchStage]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const BlogCategoryService = async (req) => {
  try {
    const MatchStage = {
      $match: {},
    };

    const data = await BlogCategoryModel.aggregate([MatchStage]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const BlogDetailsService = async (req) => {
  try {
    const blogID = new ObjectId(req.params.blogID);

    const MatchStage = {
      $match: {
        _id: blogID,
      },
    };

    const data = await ClinicDetailsModel.aggregate([MatchStage]);
    return {
      status: "success",
      data: data,
    };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
module.exports = {
  BlogByKeywordService,
  BlogByCategoryService,
  BlogListService,
  BlogDetailsService,
  BlogCategoryService,
};
