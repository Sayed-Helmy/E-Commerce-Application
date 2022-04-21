const express = require("express");
const { getOrders } = require("../controllers/orders");
const auth = require("../middlewares/authentication");
const router = express.Router();

router.route("/").get(auth, getOrders);

module.exports = router;
