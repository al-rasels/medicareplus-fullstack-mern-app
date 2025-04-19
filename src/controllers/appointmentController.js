const {
  AppointmentListService,
  SaveAppointmentService,
  UpdateAppointmentService,
  RemoveAppointmentService,
} = require("../services/appointmentService");
const { CreateInvoiceService } = require("../services/invoiceService");
exports.AppointmentPayment = async (req, res) => {
  await CreateInvoiceService(req, res);
};

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
  return res.end(result["data"]);
};
exports.RemoveAppointment = async (req, res) => {
  const result = await RemoveAppointmentService(req);
  return res.status(200).json(result);
};
