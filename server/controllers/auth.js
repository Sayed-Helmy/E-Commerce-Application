const { BadRequest, NotFound, Unauthenticated } = require("../errors");
const asyncWrapper = require("../middlewares/asyncwrapper");
const User = require("../models/User");

const createUser = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body);
  const Token = user.createJwt();
  res.cookie("token", Token, { maxAge: 1000 * 60 * 60 * 24 * 30 });
  const result = user.toObject();
  delete result.password;
  res.status(201).json(result);
});

const updateUser = asyncWrapper(async (req, res) => {
  const { email } = req.payload.email;
  const { password } = req.body;
  const user = await User.findOne({ email });
  user.password = password;
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

const getUser = asyncWrapper(async (req, res) => {
  if (req.payload) res.status(200).json(req.payload);
});

const logout = asyncWrapper(async (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.json({ msg: "logging out" });
});

module.exports = { createUser, login, logout, updateUser, getUser };
