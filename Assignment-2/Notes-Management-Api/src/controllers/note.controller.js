const Note = require("../models/note.model");

exports.createNote = async (req, res) => {
  try {

    const note = await Note.create(req.body);

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });

  }
};