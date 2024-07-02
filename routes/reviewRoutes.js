const express = require("express");
const reviewController = require("./../controllers/reviewController");
const authEnController = require("./../controllers/authEnController");

const router = express.Router({ mergeParams: true });

router.use(authEnController.protect);

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authEnController.restrictTo("user"),
    reviewController.setTourUserIds,
    reviewController.createReview,
  );

router
  .route("/:id")
  .get(reviewController.getReview)
  .patch(
    authEnController.restrictTo("user", "admin"),
    reviewController.updateReview,
  )
  .delete(
    authEnController.restrictTo("user", "admin"),
    reviewController.deleteReview,
  );

module.exports = router;
