const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome home");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: http://localhost: ${PORT}`);
});
