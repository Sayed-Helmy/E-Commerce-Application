const { NotFound } = require("../errors");
const asyncWrapper = require("../middlewares/asyncwrapper");
const Coupon = require("../models/Coupon");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const createCoupon = asyncWrapper(async (req, res) => {
  const coupon = await Coupon.create({ ...req.body });
  const stripeCoupon = await stripe.coupons.create({
    duration: "forever",
    id: coupon._id.toString(),
    percent_off: coupon.discount,
  });
  res.status(201).json({ coupon, stripeCoupon });
});

const getCoupon = asyncWrapper(async (req, res) => {
  const { key } = req.params;
  const coupon = await Coupon.findOne({ key });
  if (!coupon) throw new NotFound("This Coupon Is Not Exist!");
  res.status(200).json(coupon);
});

module.exports = {
  createCoupon,
  getCoupon,
};
