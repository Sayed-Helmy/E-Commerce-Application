const { CustomError } = require("../errors");

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.code && err.code === 11000) {
    const [[key, value]] = Object.entries(err.keyValue);
    return res
      .status(400)
      .json({ message: `This ${key}: ${value} is already exist!` });
  }
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
};

module.exports = errorHandler;
