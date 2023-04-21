const app = require("./server");
const { connect } = require("./database");
const { getNoteData } = require("./note");

main().catch((err) => console.log(err));
async function main() {
  await connect();
  const noteData = await getNoteData();
  console.log(noteData);

  app.get("/5", (req, res) => {
    res.render("home", { name: noteData });
  });
}
