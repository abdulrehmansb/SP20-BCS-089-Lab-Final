const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  title: String,
  body: String,
  tags: [String],
});

const Posts = mongoose.model("Posts", postsSchema);
module.exports = Posts;
