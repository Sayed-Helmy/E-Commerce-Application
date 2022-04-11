const asyncWrapper = require("../middlewares/asyncwrapper");
const Order = require("../models/Order");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const checkout = asyncWrapper(async (req, res) => {
  const { _id, email, name } = req.payload;
  const order = await Order.create({ user: _id, ...req.body });
  await order.populate("products.productId", "title price");
  const session = await stripe.checkout.sessions.create({
    line_items: order.products.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productId.title,
        },
        unit_amount: item.productId.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${process.env.BASE_URL}success?id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}cancel?id={CHECKOUT_SESSION_ID}`,
  });
  order.paymentId = session.id;
  order.totalPrice = session.amount_total / 100;
  await order.save();
  res.status(201).json({ order, session });
  // res.redirect(303, session.url);
});

const checkSession = asyncWrapper(async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.id);
  if (session.payment_status === "unpaid") {
    await Order.findOneAndDelete({ paymentId: req.query.id });
    return res.status(200).json({ msg: "Payment Failed, Order Canceled!" });
  }
  const order = await Order.findOneAndUpdate(
    { paymentId: req.query.id },
    {
      status: "awaitingShipping",
      paymentStatus: "paid",
      shipping: {
        tracking: "5465432164654321",
        deliveryDate: new Date().toISOString(),
      },
    },
    { new: true }
  );
  res.status(200).json({ order, session });
});

module.exports = {
  checkout,
  checkSession,
};