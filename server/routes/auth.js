const express = require("express");
const {
  createUser,
  login,
  logout,
  changePassword,
  getUser,
  updateCart,
  updateUser,
} = require("../controllers/auth");
const validator = require("../middlewares/validator");
const userValidator = require("../helpers/validation/userValidator");
const auth = require("../middlewares/authentication");
const multerUploader = require("../middlewares/multer");
const router = express.Router();

router.route("/signup").post(validator(userValidator), createUser);
router.post("/changePassword", auth, changePassword);
router.get("/validate", auth);
router.route("/signin").post(login);
router.route("/logout").get(logout);
router.put("/updateCart", auth, updateCart);
router.patch("/updateUser", auth, multerUploader, updateUser);

module.exports = router;
