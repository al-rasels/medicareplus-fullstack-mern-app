const {
  ClinicByKeywordService,
  ClinicByCityService,
  ClinicListService,
  ClinicDetailsService,
} = require("../services/clinicService");

exports.ClinicByKeyword = async (req, res) => {
  const result = await ClinicByKeywordService(req);
  return res.status(200).json(result);
};
exports.ClinicByCity = async (req, res) => {
  const result = await ClinicByCityService(req);
  return res.status(200).json(result);
};
exports.Clinics = async (req, res) => {
  const result = await ClinicListService(req);
  return res.status(200).json(result);
};

exports.ClinicDetails = async (req, res) => {
  const result = await ClinicDetailsService(req);
  return res.status(200).json(result);
};
