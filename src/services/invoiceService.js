const mongoose = require("mongoose");

const AppointmentModel = require("../models/appointmentModel");
const SSLCommerzPayment = require("sslcommerz-lts");
const InvoiceModel = require("../models/invoiceModel");
const PaymentSettingModel = require("../models/paymentSettingModel");
const { v4: uuidv4 } = require("uuid");
const ObjectID = mongoose.Types.ObjectId;

const CreateInvoiceService = async (req, res) => {
  try {
    const doctorID = ObjectID(req.body.doctorID);
    const userID = req.headers.user_id;
    const {
      store_id,
      store_passwd,
      currency,
      success_url,
      fail_url,
      cancel_url,
      ipn_url,
      init_url,
      islive,
    } = await PaymentSettingModel.findOne();
    const {
      area,
      city,
      country,
      postalCode,
      date,
      email,
      fullName,
      paymentAmount,
      paymentCurrency,
      paymentError,
      paymentId,
      paymentMethod,
      paymentStatus,
      phone,

      status,
    } = await AppointmentModel.findOne({
      userID: userID,
      doctorID: doctorID,
    });
    const tran_id = `TXN-${uuidv4().toUpperCase().slice(0, 12)}`;
    const sslData = {
      total_amount: paymentAmount,
      currency: paymentCurrency || currency,
      tran_id: tran_id, // use unique tran_id for each api call
      success_url: success_url,
      fail_url: fail_url,
      cancel_url: cancel_url,
      ipn_url: ipn_url,
      shipping_method: "None",
      product_name: "Consultation",
      product_category: "Healthcare Sevice",
      product_profile: "general",

      cus_name: fullName,
      cus_email: email,
      cus_add1: area,
      cus_add2: area,
      cus_city: city,
      cus_state: city,
      cus_postcode: postalCode,
      cus_country: country,
      cus_phone: phone,
      cus_fax: phone,
      ship_name: fullName,
      ship_add1: area,
      ship_add2: area,
      ship_city: city,
      ship_state: city,
      ship_postcode: postalCode,
      ship_country: country,
    };

    const sslPaymentData = {
      userID: userID, // Example ObjectId string
      doctorID: doctorID, // Example ObjectId string
      cus_details: `Name: ${fullName} \nEmail: ${email} \nPhone: ${phone} \nArea: ${area} \nCity: ${city} \nPostalCode: ${postalCode} \nCountry: ${country}`, // Example stringfullName,

      ship_details: `Area: ${area} \nCity: ${city} \nPostalCode: ${postalCode} \nCountry: ${country}`,
      tran_id: tran_id,
      date: date,
      payment_status: "pending",
      total: paymentAmount,
    };
    await InvoiceModel.updateOne(
      {
        userID: userID,
        doctorID: doctorID,
      },
      { $set: sslPaymentData },

      {
        upsert: true,
      }
    );
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, false);

    const apiResponse = await sslcz.init(sslData);
    const GatewayPageURL = apiResponse.GatewayPageURL;

    if (GatewayPageURL) {
      return res.status(200).json({
        status: "success",
        url: GatewayPageURL,
      });
    } else {
      return res.status(500).json({
        status: "fail",
        message: "Payment URL not generated",
      });
    }
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong" + err.message };
  }
};

const PaymentCanceledService = async (req) => {
  try {
    const trxID = req.params.trxID;
    await InvoiceModel.updateOne(
      { tran_id: trxID },
      { payment_status: "cancel" }
    );
    return { status: "success" };
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong" + err.message };
  }
};

const PaymentIPNService = async (req) => {
  try {
    const trxID = req.params.trxID;
    let status = req.body["status"];
    await InvoiceModel.updateOne(
      { tran_id: trxID },
      { payment_status: status }
    );
    return { status: "success" };
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong" + err.message };
  }
};

const PaymentSuccessService = async (req) => {
  try {
    const trxID = req.params.trxID;
    await InvoiceModel.updateOne(
      { tran_id: trxID },
      { payment_status: "success" }
    );
    return { status: "success" };
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong" + err.message };
  }
};

const PaymentFailedService = async (req) => {
  try {
    const trxID = req.params.trxID;
    await InvoiceModel.updateOne(
      { tran_id: trxID },
      { payment_status: "fail" }
    );
    return { status: "success" };
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong" + err.message };
  }
};
const InvoiceListService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const invoice = await InvoiceModel.find({ userID: user_id });
    return { status: "success", data: invoice };
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong" + err.message };
  }
};
const InvoiceProductListService = async (req) => {
  try {
    // const user_id = new ObjectID(req.headers.user_id);
    const invoice_id = new ObjectID(req.params.invoice_id);
    const matchStage = { $match: { invoiceID: invoice_id } };
    // const matchStage = {$match: {userID: user_id, invoiceID: invoice_id}}
    const JoinProductStage = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    };
    const UnwindProductStage = { $unwind: "$product" };
    // Finding Product from user Cart
    const products = await InvoiceProductModel.aggregate([
      matchStage,
      JoinProductStage,
      UnwindProductStage,
    ]);
    return { status: "success", data: products };
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong" + err.message };
  }
};

module.exports = {
  CreateInvoiceService,
  PaymentFailedService,
  PaymentCanceledService,
  PaymentIPNService,
  PaymentSuccessService,
  InvoiceListService,
  InvoiceProductListService,
};
