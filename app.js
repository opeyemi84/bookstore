const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const { connectdb } = require("./db");
require("dotenv").config();

const bookRouter = require("./routes/books");
const authorRouter = require("./routes/author");

const app = express();

//Connect to MongoDB instance
connectdb();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

// app.get("/", (req, res) => {
//   res.send("welcome home");
// });

//Connect to express Server
app.listen(PORT, () => {
  console.log(`Server running on PORT: http://localhost: ${PORT}`);
});
