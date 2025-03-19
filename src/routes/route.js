const UserController = require("../controllers/userController");
const DoctorsController = require("../controllers/doctorsController");
const Authenticator = require("../middlewares/authMiddleware");
const WishController = require("../controllers/wishController");
const AppointementController = require("../controllers/appointmentController");
const ClinicController = require("../controllers/clinicController");
const express = require("express");

const router = express.Router();
// User Routes
router.post("/register-user", UserController.UserRegisterOTP);
router.post("/verify-user", UserController.VerifyRegistration);
router.post("/login-user", UserController.UserLogin);
router.post("/logout-user", Authenticator, UserController.UserLogout);

//  filter Routes
router.get("/doctors-specialities", DoctorsController.DoctorsSpecialites);
router.get("/doctors-cities", DoctorsController.DoctorsCities);

router.get(
  "/doctors-listed-by-speciality/:specialityID",
  DoctorsController.DoctorsListedBySpeciality
);
router.get(
  "/doctors-listed-by-city/:cityID",
  DoctorsController.DoctorsListedByCity
);

router.get(
  "/doctors-listed-by-keyword/:keyword",
  DoctorsController.DoctorsListedByKeyword
);
router.get("/doctors-details/:doctorID", DoctorsController.DoctorsDetails);

//  Reviews
router.post("/create-review", Authenticator, DoctorsController.CreateReview);

// Appointement
router.get(
  "/appointment-list",
  Authenticator,
  AppointementController.AppointmentList
);
router.post(
  "/create-appointment",
  Authenticator,
  AppointementController.SaveAppointment
);
router.post(
  "/update-appointment/:appointmentID",
  Authenticator,
  AppointementController.UpdateAppointment
);
router.get(
  "/cancel-appointment/:appointmentID",
  Authenticator,
  AppointementController.RemoveAppointment
);
//Clinics
router.get("/clinic-list", Authenticator, ClinicController.ClinicList);
router.get(
  "/clinic-details/:clinicID",
  Authenticator,
  ClinicController.ClinicDetails
);
router.get(
  "/clinic-list/:cityID",
  Authenticator,
  ClinicController.ClinicByCity
);
router.get(
  "/clinic-list/:keyword",
  Authenticator,
  ClinicController.ClinicByKeyword
);
// wish list
router.post("/save-wish", Authenticator, WishController.SaveWish);
router.post("/remove-wish", Authenticator, WishController.RemoveWish);
router.get("/wish-list", Authenticator, WishController.WishList);

// // Service/ features
// router.get("/service-list");
// router.get("/legals/:type");
// router.post("/contact-us");
// router.get("/contact-us");
module.exports = router;
