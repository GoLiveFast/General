const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  await mongoose.connect(process.env.DB_URI);
}

const notesSchema = new mongoose.Schema({
  name: String,
  content: String,
});

const Note = mongoose.model("Note", notesSchema);

module.exports = { connect, Note };
