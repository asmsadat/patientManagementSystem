const router = require("express").Router();
const User = require("../models/User");

const Prescription = require("../models/Prescription");


//CREATE Prescription
router.post("/id", async (req, res) => {
  const newPrescription = new Prescription(req.body);
  try {
    const savedPrescription = await newPrescription.save();
    res.status(200).json(savedPrescription);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE Prescription
router.put("/:id", async (req, res) => {
  try {
    const Prescription = await Prescription.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Prescription.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPrescription);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Prescription
router.delete("/:id", async (req, res) => {
  try {
    const Prescription = await Prescription.findById(req.params.id);
    if (Prescription.username === req.body.username) {
      try {
        await Prescription.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Prescription
router.get("/:id", async (req, res) => {
  try {
    const Prescription = await Prescription.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all Prescription
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let Prescriptions;
    if (username) {
      Prescriptions= await Prescription.find({ username });
    } else if (catName) {
      Prescriptions = await Prescription.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      Prescriptions = await Prescription.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
/*
router.post("/id", async (req, res) => {
  const newPrescription = new Prescription(req.body);
  try {
    const savedPrescription = await newPrescription.save();
    res.status(200).json(savedPrescription);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
  let allPrescription;
  const userid= req.body.userid;
  allPrescription = await Prescription.find({ userid});
    res.status(200).json(allPrescription);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
*/
