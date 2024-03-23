const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    
    // name
    userid: {
      type: String,
      //required: true,
    },
    amount:{
      type:Number,
      //required: true,
    },
    payments_method: {
      type: String,
      //required: true,
    }
  },
  //time
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
