const CustomError = require("./CustomError");
const { StatusCodes } = require("http-status-codes");

class PaymentRequired extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.PAYMENT_REQUIRED;
  }
}

module.exports = PaymentRequired;
