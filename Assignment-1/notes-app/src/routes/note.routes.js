const express = require("express");

const router = express.Router();

const {
createNote,
bulkCreate,
getNotes,
getNote,
replaceNote,
updateNote,
deleteNote,
bulkDelete
} = require("../controllers/note.controller");

router.post("/", createNote);

router.post("/bulk", bulkCreate);

router.get("/", getNotes);

router.get("/:id", getNote);

router.put("/:id", replaceNote);

router.patch("/:id", updateNote);

router.delete("/:id", deleteNote);

router.delete("/bulk", bulkDelete);

module.exports = router;