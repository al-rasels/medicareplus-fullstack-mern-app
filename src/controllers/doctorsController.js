const {
  DoctorsSpecialitiesService,
  DoctorsCitiesService,
  ListedBySpecialityService,
  ListedByCityService,
  ListedByKeywordService,
  DoctorsDetailsService,
  CreateReviewService,
  DoctorsService,
  ListedByFilterService,
} = require("../services/doctorsService");


exports.DoctorsSpecialites = async (req, res) => {
  const result = await DoctorsSpecialitiesService();
  return res.status(200).json(result);
};

exports.DoctorsCities = async (req, res) => {
  const result = await DoctorsCitiesService();
  return res.status(200).json(result);
};

exports.DoctorsListedBySpeciality = async (req, res) => {
  const result = await ListedBySpecialityService(req);
  return res.status(200).json(result);
};
exports.Doctors = async (req, res) => {
  const result = await DoctorsService(req);
  return res.status(200).json(result);
};
exports.DoctorsListedByCity = async (req, res) => {
  const result = await ListedByCityService(req);
  return res.status(200).json(result);
};

exports.DoctorsListedByKeyword = async (req, res) => {
  const result = await ListedByKeywordService(req);
  return res.status(200).json(result);
};
exports.DoctorsListedByFilter = async (req, res) => {
  const result = await ListedByFilterService(req);
  return res.status(200).json(result);
};
exports.DoctorsDetails = async (req, res) => {
  const result = await DoctorsDetailsService(req);
  return res.status(200).json(result);
};
exports.CreateReview = async (req, res) => {
  const result = await CreateReviewService(req);
  return res.status(200).json(result);
};
