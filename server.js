const express = require("express");
const ejs = require("ejs");
const app = express();
const port = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.listen(port, () => {
  console.log(`sever is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.render("home", { name: port });
});

module.exports = app;
