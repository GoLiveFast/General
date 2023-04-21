const { Note } = require("./database");
let noteData;
async function getNoteData() {
  noteData = await Note.find({});
  return noteData;
}

module.exports={getNoteData};

