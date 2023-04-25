const express = require("express");
const router = express.Router();
const { Note } = require("../database");

router.get("/post/:addparam", (req, res) => {
  const addData = req.params.addparam;
  const note = new Note({
    name: addData
  });
  note.save();
  res.send("Note saved successfully"); // send a response to the client
});

module.exports = router;