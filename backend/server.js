const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", (err) => {
  console.log("Error : " + err.message);
  console.log("Shutting down the server due to uncaught Exception");
  process.exit(1);
});

// CONFIG

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// DATABASE CONNECTION

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log("Server is Working at PORT " + process.env.PORT);
});

// UNHANLED PROMISE REJECTION

process.on("unhandledRejection", (err) => {
  console.log("Error : " + err.message);
  console.log("Shutting down the server due to unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
