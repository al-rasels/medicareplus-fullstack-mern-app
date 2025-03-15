const {
  SaveWishService,
  RemoveWishService,
  WishListService,
} = require("../services/wishService");

exports.SaveWish = async (req, res) => {
  const result = await SaveWishService(req);
  return res.status(200).json(result);
};
exports.RemoveWish = async (req, res) => {
  const result = await RemoveWishService(req);
  return res.status(200).json(result);
};
exports.WishList = async (req, res) => {
  const result = await WishListService(req);
  return res.status(200).json(result);
};
