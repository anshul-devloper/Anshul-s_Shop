const { Mongoose } = require("mongoose");
const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // MONGODB ERROR
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //  Mongoose DUPLICATE KEY ERROR
  if (err.code == 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // WRONG JWT ERROR
  if (err.code == "JsonWebTokenError") {
    const message = `Json web token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE ERROR
  if (err.code == "TokenExpiredError") {
    const message = `Json web token is Expired , try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
