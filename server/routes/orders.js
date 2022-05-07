const express = require("express");
const {
  getOrders,
  getAllOrders,
  orderStatistics,
  updateOrder,
} = require("../controllers/orders");
const auth = require("../middlewares/authentication");
const router = express.Router();

router.route("/").get(auth, getOrders);
router.route("/:id").patch(auth, updateOrder);
router.route("/admin").get(getAllOrders);
router.route("/admin/states").get(orderStatistics);

module.exports = router;
