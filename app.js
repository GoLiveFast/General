const express = require("express");
const ejs = require("ejs");
const app = express();

const port = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

app.get("/", (req,res) => {
  res.render("home", { name: "something" });
});
