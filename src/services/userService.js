const UserModel = require("../models/userModel");
const EmailSend = require("../utilities/emailHelper");
const { EncodeToken } = require("../utilities/tokenHelper");

/// SEND OTP TO REGISTERED EMAIL
const UserRegisterOTPService = async (req) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const code = Math.floor(100000 + Math.random() * 900000);

    const EmailText = `Your Verification Code is ${code}. Please use this code to verify your email and do not share your OTP with others`;
    const EmailSubject = "Email Verification";

    await UserModel.updateOne(
      {
        email: email,
      },
      {
        $set: {
          name: name,
          phone: phone,
          address: address,
          otp: code.toString(),
        },
      },
      {
        upsert: true,
      }
    );

    await EmailSend(email, EmailText, EmailSubject);
    return {
      status: "success",
      message: "6 Digit OTP has been sent successfully",
    };
  } catch (err) {
    return {
      status: "error",
      message: err.message,
    };
  }
};

/// VERIFY OTP AND REGISTER USER SET PASSWORD
const UserRegisterVerifyService = async (req) => {
  try {
    const otp = req.body.otp;
    const password = req.body.password;

    const data = await UserModel.findOne({ otp: otp });
    if (!data) {
      return {
        status: "error",
        message: "Invalid OTP. Please enter the correct OTP",
      };
    } else {
      await UserModel.updateOne(
        { otp: otp },
        { $set: { otp: "0", password: password } },
        { upsert: true }
      );
    }

    return {
      status: "success",
      message: "User Registered successfully",
    };
  } catch (err) {
    return {
      status: "error",
      message: "An error has occurred, failed to send email verification",
      error: err.message,
    };
  }
};

/// LOGIN USER AND GENERATE TOKEN
const UserLoginService = async (req) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user_id = await UserModel.findOne({
      email: email,
      password: password,
    }).select("_id");

    if (user_id === null) {
      return {
        status: "error",
        message: "No user found. Please register first",
      };
    }
    const token = EncodeToken(email, user_id["_id"].toString());

    return {
      status: "success",
      token: token,

      message: "User logged in successfully",
    };
  } catch (err) {
    return {
      status: "error",
      message: "An error has occurred, failed to login",
      error: err.message,
    };
  }
};

// const VerifyService = async (req) => {
//   try {
//     const email = req.params.email;
//     const otp = req.params.otp;
//     if (otp === 0)
//       return { status: "error", message: "Invalid verification code" };
//     // user count
//     const total = await UserModel.find({
//       email: email,
//       otp: otp,
//     }).countDocuments();
//     if (total === 1) {
//       // User id read
//       const user_id = await UserModel.find({ email: email, otp: otp }).select(
//         "_id"
//       );
//       // Token generated
//       const token = EncodeToken(email, user_id[0]["_id"].toString());
//       // update otp
//       await UserModel.updateOne(
//         { email: email },
//         { $set: { otp: "0" } },
//         { upsert: true }
//       );
//       return {
//         status: "success",
//         message: "User has been successfully verified",
//         token: token,
//       };
//     } else {
//       return { status: "error", message: "User verification error verified" };
//     }
//   } catch (err) {
//     return {
//       status: "error",
//       message: "Invalid verification code or Email Address",
//     };
//   }
// };
module.exports = {
  UserRegisterOTPService,
  UserRegisterVerifyService,
  UserLoginService,
};
