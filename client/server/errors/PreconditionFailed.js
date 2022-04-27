const CustomError = require("./CustomError");
const { StatusCodes } = require("http-status-codes");

class PreconditionFailed extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.PRECONDITION_FAILED;
  }
}

module.exports = PreconditionFailed;
