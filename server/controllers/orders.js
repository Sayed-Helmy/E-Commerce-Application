const asyncWrapper = require("../middlewares/asyncwrapper");
const Order = require("../models/Order");

const getOrders = asyncWrapper(async (req, res) => {
  const { _id } = req.payload;
  const orders = await Order.find({ user: _id })
    .populate("products.productId")
    .select("-user")
    .sort({ createdAt: -1 });
  res.status(200).json(orders);
});

module.exports = { getOrders };
