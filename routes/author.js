const express = require("express");

const router = express.Router();

const authors_controller = require("../controller/authorsController");

router.get("/", authors_controller.all_authors);

router.post("/", authors_controller.add_authors);

router.put("/:id", authors_controller.update_authors);

router.delete("/:id", authors_controller.del_authors);

module.exports = router;
