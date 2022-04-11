const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Provide a Product Title!"],
    },
    description: {
      type: String,
      required: [true, "Please Provide a Product description!"],
    },
    richDescription: {
      type: String,
      default: "",
    },
    images: {
      type: [String],
      required: [true, "Please Provide a Product Image!"],
    },
    brand: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    onSalePrice: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
    stock: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: [ReviewSchema],
      default: [],
    },
  },
  { timestamps: true }
);

ProductSchema.methods.getRating = function () {
  const rate = (
    this.reviews.reduce((a, b) => a + b.rating, 0) / this.reviews.length
  ).toFixed(1);
  this.rating = isFinite(rate) ? rate : 0;
};

module.exports = mongoose.model("Product", ProductSchema);
