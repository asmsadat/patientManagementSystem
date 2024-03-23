const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Prescription");
const Comment = require("../models/Appointment");

//CREATE Appointment

router.post("/id", async (req, res) => {
  const newComment = new Comment({
    
    username: req.body.username,
    Date: req.body.Date,
  });
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
  let allcomments;
  const username = req.body.username;
  allcommentscomments = await Comment.find({ username });
    res.status(200).json(allcomments);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;