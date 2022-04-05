const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: {
      type: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      required: [true, "You must have at least one Product To Make this order"],
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "Pending",
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      default: null,
    },
    paymentStatus: {
      type: String,
      default: "Waiting",
    },
    paymentId: {
      type: String,
      default: null,
    },
    shipping: {
      address: {
        street: {
          type: String,
          required: [true, "Please Provide Your Street!"],
        },
        city: {
          type: String,
          required: [true, "Please Provide Your City!"],
        },
        state: {
          type: String,
          required: [true, "Please Provide Your State!"],
        },
        country: {
          type: String,
          required: [true, "Please Provide Your country!"],
        },
        zip: {
          type: String,
          required: [true, "Please Provide Your Zip!"],
        },
      },
      carrier: {
        type: String,
        default: "DHL",
      },
      tracking: {
        type: String,
        default: null,
      },
      deliveryDate: {
        type: Date,
        default: null,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
