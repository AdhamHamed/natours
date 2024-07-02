const express = require("express");
const viewController = require("../controllers/viewController");
const authEnController = require("../controllers/authEnController");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.get(
  "/",
  bookingController.createBookingCheckout,
  authEnController.isLoggedIn,
  viewController.getOverview,
);

router.get("/tour/:slug", authEnController.isLoggedIn, viewController.getTour);
router.get("/login", authEnController.isLoggedIn, viewController.getLoginForm);
router.get("/me", authEnController.protect, viewController.getAccount);
router.get("/my-tours", authEnController.protect, viewController.getMyTours);

router.post(
  "/submit-user-data",
  authEnController.protect,
  viewController.updateUserData,
);

module.exports = router;
