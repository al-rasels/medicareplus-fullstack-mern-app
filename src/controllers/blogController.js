const {
  BlogByKeywordService,
  BlogByCategoryService,
  BlogListService,
  BlogDetailsService,
  BlogCategoryService,
} = require("../services/blogService");

exports.BlogByKeyword = async (req, res) => {
  const result = await BlogByKeywordService(req);
  return res.status(200).json(result);
};
exports.BlogByCategory = async (req, res) => {
  const result = await BlogByCategoryService(req);
  return res.status(200).json(result);
};
exports.BlogList = async (req, res) => {
  const result = await BlogListService(req);
  return res.status(200).json(result);
};
exports.BlogCategories = async (req, res) => {
  const result = await BlogCategoryService(req);
  return res.status(200).json(result);
};

exports.BlogDetails = async (req, res) => {
  const result = await BlogDetailsService(req);
  return res.status(200).json(result);
};
