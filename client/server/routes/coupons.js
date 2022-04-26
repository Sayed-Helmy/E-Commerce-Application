const express = require("express");
const { createCoupon, getCoupon } = require("../controllers/coupons");
const router = express.Router();

router.route("/").post(createCoupon);
router.route("/check/:key").get(getCoupon);

module.exports = router;
