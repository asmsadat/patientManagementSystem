const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    
    // name
    username: {
      type: String,
      //required: true,
    },
    // cause
    Date: {
      type: String,
     // required: true,
    }
  },
  //time
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", PostSchema);
