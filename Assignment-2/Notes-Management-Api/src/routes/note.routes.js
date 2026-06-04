const router = require("express").Router();

const noteController = require("../controllers/note.controller");

/* BULK ROUTES FIRST */

router.post("/bulk", noteController.createBulkNotes);

router.delete("/bulk", noteController.deleteBulkNotes);

/* CRUD */

router.post("/", noteController.createNote);

router.get("/", noteController.getAllNotes);

router.get("/:id", noteController.getNoteById);

module.exports = router;