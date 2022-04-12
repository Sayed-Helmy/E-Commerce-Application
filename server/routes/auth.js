const express = require("express");
const {
  createUser,
  login,
  logout,
  updateUser,
  getUser,
  updateCart,
} = require("../controllers/auth");
const validator = require("../middlewares/validator");
const userValidator = require("../helpers/validation/userValidator");
const auth = require("../middlewares/authentication");
const router = express.Router();

router.route("/signup").post(validator(userValidator), createUser);
router.post("/changePassword", auth, updateUser);
router.get("/validate", auth);
router.route("/signin").post(login);
router.route("/logout").get(logout);
router.put("/updateCart", auth, updateCart);

module.exports = router;
