const express = require("express");
const { getOrders, getAllOrders } = require("../controllers/orders");
const auth = require("../middlewares/authentication");
const router = express.Router();

router.route("/").get(auth, getOrders);
router.route("/admin").get(getAllOrders);

module.exports = router;
