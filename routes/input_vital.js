const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Prescription");
const Payments= require("../models/Payments");
const input_vital= require("../models/input_vital");

//CREATE Input_vital

router.post("/vital", async (req, res) => {
  const newinput_vital = new input_vital({
    
    userid: req.body.userid,
    weight: req.body.weight,
    Blood_pressure: req.body.Blood_pressure,
    Pulse: req.body.Pulse,
    Oxygen_Saturation: req.body.Oxygen_Saturation,
    
  });
  try {
    const savedinput_vital= await newinput_vital.save();
    res.status(200).json(savedinput_vital);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
  let allinput_vital;
  const userid= req.body.userid;
  allinput_vital = await input_vital.find({ userid});
    res.status(200).json(allinput_vital);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;