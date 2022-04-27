const { BadRequest, NotFound, Unauthenticated } = require("../errors");
const asyncWrapper = require("../middlewares/asyncwrapper");
const User = require("../models/User");
const path = require("path");
const { unlink } = require("fs/promises");

const createUser = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body);
  const Token = user.createJwt();
  res.cookie("token", Token, { maxAge: 1000 * 60 * 60 * 24 * 30 });
  const result = user.toObject();
  delete result.password;
  res.status(201).json(result);
});

const changePassword = asyncWrapper(async (req, res) => {
  const { _id } = req.payload;
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(_id);
  const isPssword = await user.passwordCheck(currentPassword);
  if (!isPssword) throw new BadRequest("Wrong Password Please Try Again!");
  user.password = newPassword;
  await user.save();
  res.status(201).json({ msg: "Password Changed successfuly." });
});

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new BadRequest("You have to Enter Email and password");
  const user = await User.findOne({ email });
  if (!user) throw new NotFound("This Email dosn't exist!");
  const checkPassword = await user.passwordCheck(password);
  if (!checkPassword) throw new Unauthenticated("That password is incorrect.");
  const Token = user.createJwt();
  res.cookie("token", Token, { maxAge: 1000 * 60 * 60 * 24 * 30 });
  const result = user.toObject();
  delete result.password;
  res.status(200).json(result);
});

const updateCart = asyncWrapper(async (req, res) => {
  const user = req.payload;
  user.cart = req.body.cart;
  await User.findByIdAndUpdate(
    user._id,
    { cart: req.body.cart },
    { new: true }
  );
  res.status(201).json({ cart: user.cart });
});
const updateUser = asyncWrapper(async (req, res) => {
  const userId = req.payload._id;
  const { name, country, city, state, phone, avatar, street } = req.body;
  const user = await User.findById(userId);
  if (name) user.name = name;
  if (avatar) {
    const avatarPath = path.join(process.cwd(), "public", user.avatar);
    if (avatarPath) unlink(avatarPath);
    user.avatar = avatar;
  }
  user.address = {
    country,
    city,
    state,
    phone,
    street,
  };
  await user.save();
  const { password, roles, ...newUser } = user.toObject();
  res.status(201).json(newUser);
});

const logout = asyncWrapper(async (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.json({ msg: "logging out" });
});

module.exports = {
  createUser,
  login,
  logout,
  changePassword,
  updateCart,
  updateUser,
};
