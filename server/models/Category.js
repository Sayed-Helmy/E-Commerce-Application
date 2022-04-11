const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide a Category Name!"],
      unique: true,
    },
    description: {
      type: String,
      default: "",
    },
    images: {
      type: [String],
      default: [],
    },
    color: {
      type: String,
      default: "#FEC62E",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
