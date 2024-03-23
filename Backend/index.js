const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const PrescriptionRoute = require("./routes/Prescription");
//const profileRoute = require("./routes/profile");
const commentRoute = require("./routes/Appointment");
const PaymentsRoute = require("./routes/Payments");
const input_vitalRoute = require("./routes/input_vital");
// const multer = require("multer");
// const path = require("path");

dotenv.config();
app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));


app.use(cors());

app.get("/",createProxyMiiddleware({target:'http://localhost:5000'}))

mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });




app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/Prescription", PrescriptionRoute);
//app.use("/api/profile", profileRoute);
app.use("/api/Appointment", commentRoute);
app.use("/api/Payments", PaymentsRoute);
app.use("/api/input_vital", input_vitalRoute);
 app.use('/', (req, res) => {
   res.json("Hello");
 });

app.listen("5000", () => {
  console.log("Backend is running at port 5000.");
});
