const {
  AppointmentListService,
  SaveAppointmentService,
  UpdateAppointmentService,
  RemoveAppointmentService,
} = require("../services/appointmentService");

exports.AppointmentList = async (req, res) => {
  const result = await AppointmentListService(req);
  return res.status(200).json(result);
};

exports.SaveAppointment = async (req, res) => {
  const result = await SaveAppointmentService(req);
  return res.status(200).json(result);
};
exports.UpdateAppointment = async (req, res) => {
  const result = await UpdateAppointmentService(req);
  return res.status(200).json(result);
};
exports.RemoveAppointment = async (req, res) => {
  const result = await RemoveAppointmentService(req);
  return res.status(200).json(result);
};
