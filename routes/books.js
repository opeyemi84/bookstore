const express = require("express");
const router = express.Router();

const book_controller = require("../controller/booksController");

router.get("/", book_controller.read_books);

router.get("/:id", book_controller.read_books_id);

router.post("/", book_controller.create_books);

router.put("/:id", book_controller.update_books);

router.delete("/:id", book_controller.delete_books);

module.exports = router;
