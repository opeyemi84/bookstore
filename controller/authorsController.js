const authors = require("../model/author");

//Perform CRUD operations
//GET all Authors
exports.all_authors = (req, res) => {
  authors
    .find({})
    .then((authors) => {
      res.status(200).send(authors);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

//GET Authors with ID

//CREATE/ADD Authors
exports.add_authors = (req, res) => {
  const author = req.body;
  //   console.log(author);
  authors
    .create(author)
    .then((author) => {
      res
        .status(200)
        .send({ message: "New author added succesfully", data: author });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: "Error! No new author added", data: [] });
    });
};

//UPDATE
exports.update_authors = (req, res) => {
  const id = req.params.id;
  const updAuthor = req.body;
  authors
    .findByIdAndUpdate(id, updAuthor, { new: true })
    .then((author) => {
      res
        .status(200)
        .send({ message: "Author details has been updated", data: author });
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

//DELETE
exports.del_authors = (req, res) => {
  const id = req.params.id;
  authors
    .findByIdAndDelete(id)
    .then((author) => {
      res.status(200).send({
        message: "Author has been deleted Successfully",
      });
    })
    .catch((err) => {
      res.staus(400).send(err.message);
    });
};
