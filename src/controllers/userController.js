const {
  UserRegisterOTPService,
  UserRegisterVerifyService,
  UserLoginService,
} = require("../services/userService");
exports.UserRegisterOTP = async (req, res) => {
  const result = await UserRegisterOTPService(req);
  return res.status(200).json(result);
};

exports.VerifyRegistration = async (req, res) => {
  const result = await UserRegisterVerifyService(req);
  return res.status(200).json(result);
};

exports.UserLogin = async (req, res) => {
  const result = await UserLoginService(req);
  if (result.status === "success") {
    // Cookie settings
    const cookieOption = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: false,
    };
    // Set Cookie to the Browser
    res.cookie("token", result["token"], cookieOption);
  }
  return res.status(200).json(result);
};

exports.UserLogout = async (req, res) => {
  const cookieOption = {
    expires: new Date(Date.now() - 1000 * 60 * 60 * 24),
    httpOnly: false,
  };
  res.cookie("token", "", cookieOption);
  return res.status(200).json({ status: "success" });
};
