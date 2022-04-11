const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      string: String,
      enum: ["awaitingVerification", "verified"],
      default: "awaitingVerification",
    },
    gateway: {
      type: String,
      default: "stripe",
    },
    type: {
      type: String,
      default: "Token",
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
