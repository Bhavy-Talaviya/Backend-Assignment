const router = require("express").Router();

const noteController = require("../controllers/note.controller");

router.post("/bulk", noteController.createBulkNotes);

router.post("/", noteController.createNote);

module.exports = router;