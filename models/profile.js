const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
     // required: true,
     // unique: true,
    },
    email: {
      type: String,
      //required: true,
      //unique: true,
    },
    
      weight: {
        type: String,
       // required: true,
        
      },
      Blood_pressure: {
        type: String,
        //required: true,
      },
      Pulse: {
          type: String,
          //required: true,
          
        },
        Oxygen_Saturation: {
          type: String,
          //required: true,
          
        },
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", ProfileSchema);
