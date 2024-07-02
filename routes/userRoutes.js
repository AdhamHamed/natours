const express = require("express");
const userController = require("./../controllers/userController");
const authEnController = require("./../controllers/authEnController");

const router = express.Router();

router.post("/signup", authEnController.signup);
router.post("/login", authEnController.login);
router.get("/logout", authEnController.logout);

router.post("/forgotPassword", authEnController.forgotPassword);
router.patch("/resetPassword/:token", authEnController.resetPassword);

// Protect all routes after this middleware
router.use(authEnController.protect);

router.patch("/updateMyPassword", authEnController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe,
);
router.delete("/deleteMe", userController.deleteMe);

router.use(authEnController.restrictTo("admin"));

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
