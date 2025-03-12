const UserController = require("../controllers/userController");
const express = require("express");

const router = express.Router();
router.post("/register-user", UserController.UserRegisterOTP);
router.post("/verify-registration", UserController.VerifyRegistration);
router.post("/login-user", UserController.UserLogin);

module.exports = router;
