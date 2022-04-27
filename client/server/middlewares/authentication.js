const jwt = require("jsonwebtoken");
const { Unauthenticated, CustomError } = require("../errors");
const User = require("../models/User");
const auth = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) throw new Unauthenticated("Authentication Token Required.");
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.userID);
    if (req.route.path === "/validate") {
      const result = user.toObject();
      delete result._id;
      delete result.password;
      return res.status(200).json(result);
    }
    req.roles = user.roles;
    req.payload = user;
    next();
  } catch (error) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ msg: error.message });
    }
    res.status(401).json({ msg: "Authentication Faild!" });
  }
};

module.exports = auth;
