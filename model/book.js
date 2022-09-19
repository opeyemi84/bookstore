const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  year: {
    type: Number,
    required: true,
    max: [2022, "Year must be less than or equal to 2022"],
  },
  author: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("books", bookSchema);
