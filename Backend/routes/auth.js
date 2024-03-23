const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    //!user && res.status(400).json("Wrong credentials!");

    // Compare passwords using the comparePasswords function
    const passwordMatch = comparePasswords(req.body.password, user.password);
    if (!passwordMatch) {
        return res.status(400).json("Wrong credentials!");
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
} catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
