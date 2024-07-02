const express = require("express");
const bookingController = require("../controllers/bookingController");
const authEnController = require("../controllers/authEnController");

const router = express.Router();

router.get(
  "/checkout-session/:tourID",
  authEnController.protect,
  bookingController.getCheckoutSession,
);

router.use(authEnController.protect);

router.get("/checkout-session/:tourId", bookingController.getCheckoutSession);

router.use(authEnController.restrictTo("admin", "lead-guide"));

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
