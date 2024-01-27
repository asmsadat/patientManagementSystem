const router = require("express").Router();
//const User = require("../models/User");
//const Post = require("../models/Prescription");
//const Payments= require("../models/Payments");
const profile= require("../models/profile");

//CREATE Input_vital

router.post("/id", async (req, res) => {
  const newprofile = new profile({
    
    userid: req.body.userid,
    email:req.body.email,
    weight: req.body.weight,
    Blood_pressure: req.body.Blood_pressure,
    Pulse: req.body.Pulse,
    Oxygen_Saturation: req.body.Oxygen_Saturation,
    
  });
  try {
    const savedprofile= await newprofile.save();
    res.status(200).json(savedprofile);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
  let allprofile;
  const userid= req.body.userid;
  allprofile = await profile.find({ userid});
    res.status(200).json(allprofile);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;