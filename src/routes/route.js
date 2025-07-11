const UserController = require("../controllers/userController");
const DoctorsController = require("../controllers/doctorsController");
const Authenticator = require("../middlewares/authMiddleware");
const WishController = require("../controllers/wishController");
const AppointementController = require("../controllers/appointmentController");
const BlogController = require("../controllers/blogController");
const express = require("express");

const router = express.Router();
// User Routes
router.post("/register-user", UserController.UserRegisterOTP);
router.post("/update-user", Authenticator, UserController.UpdateUser);
router.get("/user-details", Authenticator, UserController.UserDetails);
router.post("/verify-user", UserController.VerifyRegistration);
router.post("/login-user", UserController.UserLogin);
router.get("/logout-user", UserController.UserLogout);

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
router.get("/doctors", DoctorsController.Doctors);

router.get(
  "/doctors-listed-by-keyword/:keyword",
  DoctorsController.DoctorsListedByKeyword
);
router.post(
  "/doctors-listed-by-filter",
  DoctorsController.DoctorsListedByFilter
);
router.get("/doctors-details/:doctorID", DoctorsController.DoctorsDetails);

//  Reviews
router.post("/create-review", Authenticator, DoctorsController.CreateReview);

// Appointement
router.get(
  "/user-appointment-list",
  Authenticator,
  AppointementController.AppointmentList
);
router.get(
  "/doctor-appointment-list",
  Authenticator,
  AppointementController.AppointmentListDoctor
);
router.post(
  "/create-appointment",
  Authenticator,
  AppointementController.SaveAppointment
);
router.post("/success-appointment", AppointementController.UpdateAppointment);
router.get(
  "/cancel-appointment/:appointmentID",
  Authenticator,
  AppointementController.RemoveAppointment
);
router.get(
  "/payment-appointment/:doctorID",
  Authenticator,
  AppointementController.AppointmentPayment
);
router.get(
  "/payment-failed/:tranID",
  Authenticator,
  AppointementController.AppointmentPayment
);

//Clinics
router.get("/blog-list", BlogController.BlogList);
router.get("/blog-categories", BlogController.BlogCategories);

router.get("/blog-detail/:blogID", BlogController.BlogDetails);
router.get("/blog-by-category/:category", BlogController.BlogByCategory);
router.get("/blog-by-keyword/:keyword", BlogController.BlogByKeyword);
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
