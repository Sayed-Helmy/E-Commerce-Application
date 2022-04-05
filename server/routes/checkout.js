const express = require("express");
const { checkout, checkSession } = require("../controllers/checkout");
const auth = require("../middlewares/authentication");
const router = express.Router();

router.route("/").post(auth, checkout).get(checkSession);

module.exports = router;
