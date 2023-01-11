const express = require("express");
const router = express.Router();
const Posts = require("../models/posts");

router.get("/", async (req, res) => {
  const pageTitle = "List of Cars";
  const posts = await Posts.find();
  res.render("posts/list", { pageTitle, posts });
});
