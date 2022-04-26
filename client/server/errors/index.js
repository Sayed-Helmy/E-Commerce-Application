const BadRequest = require("./BadRequest");
const CustomError = require("./CustomError");
const Forbidden = require("./Forbidden");
const NotFound = require("./NotFound");
const PaymentRequired = require("./PaymentRequired");
const PreconditionFailed = require("./PreconditionFailed");
const Unauthenticated = require("./Unauthenticated");

module.exports = {
  PreconditionFailed,
  Unauthenticated,
  PaymentRequired,
  CustomError,
  BadRequest,
  Forbidden,
  NotFound,
};
