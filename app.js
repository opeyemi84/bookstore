const express = require("express");
const mongoose = require("mongoose");

const { connectdb } = require("./db");
require("dotenv").config();

const app = express();

//Connect to MongoDB instance
connectdb();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome home");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: http://localhost: ${PORT}`);
});
