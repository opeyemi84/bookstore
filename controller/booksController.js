const books = require("../model/book");

//READ ALL BOOKS
exports.read_books = (req, res) => {
  books
    .find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
};

// Reading BOOKS WITH ID
exports.read_books_id = (req, res) => {
  const id = req.params.id;
  books
    .findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      res.status(400).send({ message: "Book cannot be found!" });
    });
};

//CREATE
exports.create_books = (req, res) => {
  const book = req.body;
  //console.log(book);
  books
    .create(book)
    .then((book) => {
      res.status(200).send({ message: "Book Added Successfully", data: book });
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

//UPDATE
exports.update_books = (req, res) => {
  const id = req.params.id;
  const book = req.body;
  books
    .findByIdAndUpdate(id, book, { new: true })
    .then((book) => {
      res.status(200).send({ message: `Book with ID: ${id} has been updated` });
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

//DELETE
exports.delete_books = (req, res) => {
  const id = req.params.id;
  books
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ message: "Book has been deleted Successfully" });
    })
    .catch((err) => {
      res.staus(400).send(err.message);
    });
};
