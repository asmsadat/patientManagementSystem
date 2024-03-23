const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema(
  {
    
    
    userid: {
      type: String,
     // required: true,
     //unique: true,
    },
    Medicine:
    {
      type: String,
     // required: true,
    },
    Test:
    {
      type: String,
    //  required: true,
    }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", PrescriptionSchema);
