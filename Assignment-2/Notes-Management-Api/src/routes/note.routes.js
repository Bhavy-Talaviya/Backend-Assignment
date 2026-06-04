const router = require("express").Router();

const noteController = require("../controllers/note.controller");

router.post("/", noteController.createNote);

module.exports = router;