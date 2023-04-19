const express = require("express");
const ejs = require("ejs");
const app = express();
require("dotenv").config();
//<< mongoose part
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URI);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const ralph = new Kitten({
  name:"ralphas4"
});

ralph.save();

//mangoose part>>
const port = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

app.get("/", (req,res) => {
  res.render("home", { name: "something" });
});
