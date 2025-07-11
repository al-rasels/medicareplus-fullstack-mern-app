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

const UserDetailsService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const data = await UserModel.findOne({ _id: user_id }).select({
      _id: 1,
      name: 1,
      email: 1,
      phone: 1,
      address: 1,
      img: 1,
      password: 1,
      role: 1,
    });
    return {
      status: "success",
      data: data,
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
const UpdateUserService = async (req) => {
  try {
    const postBody = req.body;
    const user_id = req.headers.user_id || req.body._id;

    const data = await UserModel.updateOne(
      { _id: user_id },
      { $set: postBody },
      { upsert: true }
    );

    if (!data) {
      return {
        status: "error",
        message: "User not found",
      };
    }

    return {
      status: "success",
      message: "User Updated successfully",
    };
  } catch (err) {
    return {
      status: "error",
      message: "An error has occurred, failed update user",
      error: err.message,
    };
  }
};

/// LOGIN USER AND GENERATE TOKEN
const UserLoginService = async (req) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user_data = await UserModel.findOne({
      email: email,
      password: password,
    }).select({
      _id: 1,
      email: 1,
      name: 1,
      img: 1,
      role: 1,
    });

    if (user_data === null) {
      return {
        status: "error",
        message: "No user found. Please register first",
      };
    }
    const token = EncodeToken(email, user_data["_id"].toString());

    return {
      status: "success",
      token: token,
      user_id: user_data["_id"].toString(),
      data: user_data,
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
const GetUsersService = async (req) => {
  try {
    const data = await UserModel.find().select({
      _id: 1,
      email: 1,
      img: 1,
      name: 1,
      role: 1,
    });
    return {
      status: "success",
      data: data,
    };
  } catch (err) {
    return {
      status: "error",
      message: err.message,
    };
  }
};
const RemoveUserService = async (req) => {
  try {
    const userId = req.params.id;
    const data = await UserModel.deleteOne({ _id: userId });
    if (data.deletedCount === 0) {
      return {
        status: "error",
        message: "User not found",
      };
    }
    return {
      status: "success",
      data: data,
    };
  } catch (err) {
    return {
      status: "error",
      message: err.message,
    };
  }
};

module.exports = {
  UserRegisterOTPService,
  UserRegisterVerifyService,
  UserLoginService,
  UpdateUserService,
  UserDetailsService,
  GetUsersService,
  RemoveUserService,
};
