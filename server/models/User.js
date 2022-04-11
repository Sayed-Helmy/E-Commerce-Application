const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Name is required."],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "You have To Provide a valid Email address!",
      ],
      unique: [true, "This Email is already exist!"],
      index: true,
    },
    password: {
      type: String,
      required: [true, "You have to provide a password."],
      trim: true,
      maxlength: [20, "Username length must be blew 20 char."],
      minlength: [6, "Password length must be above 6 char."],
    },
    avatar: {
      type: String,
      default: "",
    },
    roles: {
      type: [String],
      default: ["USER"],
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    address:{
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    cart: [
      {
        productId: {
          type: String,
          required: [true, "Cart Item must  have the product Id!"],
        },
        productName: {
          type: String,
          required: [true, "Cart Item Must have a product Name!"],
        },
        productDesc: {
          type: String,
          required: [true, "Cart Item Must have a product Description!"],
        },
        productPrice: {
          type: Number,
          required: [true, "Cart Item Must have a product Price!"],
        },
        productImage: {
          type: String,
          required: [true, "Cart Item Must have a product Image!"],
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.passwordCheck = async function (password) {
  const isPassword = await bcrypt.compare(password, this.password);
  return isPassword;
};

UserSchema.methods.createJwt = function () {
  return jwt.sign(
    { userID: this._id, name: this.name, email: this.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.Expire_Date,
    }
  );
};

module.exports = mongoose.model("User", UserSchema);
