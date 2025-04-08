const {
  UserRegisterOTPService,
  UserRegisterVerifyService,
  UserLoginService,
  UpdateUserService,
  UserDetailsService,
} = require("../services/userService");
exports.UserRegisterOTP = async (req, res) => {
  const result = await UserRegisterOTPService(req);
  return res.status(200).json(result);
};
exports.UpdateUser = async (req, res) => {
  const result = await UpdateUserService(req);
  return res.status(200).json(result);
};
exports.UserDetails = async (req, res) => {
  const result = await UserDetailsService(req);
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
    res.cookie("user_id", result["user_id"], cookieOption);
  }
  return res.status(200).json(result);
};

exports.UserLogout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ status: "success" });
};
