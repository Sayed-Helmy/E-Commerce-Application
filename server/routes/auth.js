const express = require("express");
const {
  createUser,
  login,
  logout,
  updateUser,
} = require("../controllers/auth");
const validator = require("../middlewares/validator");
const userValidator = require("../helpers/validation/userValidator");
const auth = require("../middlewares/authentication");
const router = express.Router();

router.route("/signup").post(validator(userValidator), createUser);
router.post("/changePassword", auth, updateUser);
router.route("/signin").post(login);
router.route("/logout").get(logout);

module.exports = router;
