const express = require("express");
const mongoose = require("mongoose");
var expressLayouts = require("express-ejs-layouts");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("homepage");
});

app.listen(2000, () => {
  console.log("Server Listening on localhost:2000");
});
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost/sp20-bcs-b")
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log("Unable to connect");
  });
