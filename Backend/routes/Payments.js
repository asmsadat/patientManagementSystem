const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Prescription");
const Payments= require("../models/Payments");

//CREATE payments

/*router.post("/id", async (req, res) => {
  const newPayments = new Payments({
    userid: req.body.userid,
    amount: req.body.amount,
    payments_method: req.body.payments_method,
  });
  try {
    const savedPayments= await newPayments.save();
    res.status(200).json(savedPayments);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
router.post("/id", async (req, res) => {
  const newPayments = new Payments(req.body);
  try {
    const savedPayments = await newPayments.save();
    res.status(200).json(savedPayments);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/id", async (req, res) => {
  try {
  let allPayments;
  const userid= req.body.userid;
  allPayments = await Payments.find({ userid});
    res.status(200).json(allPayments);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;