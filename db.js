const mongoose = require("mongoose");
require("dotenv").config();

const DB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

// connect to mongodb database
const connectdb = () => {
  mongoose.connect(DB_CONNECTION_URL);

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error Connecting to MongoDB", err);
  });
};

module.exports = { connectdb };
