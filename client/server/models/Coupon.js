const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: [true, "You Have To Provide The Coupon Key!"],
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", CouponSchema);
