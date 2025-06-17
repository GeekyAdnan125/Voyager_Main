const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const connectDB = require("./config/database");
const { connectClodinary } = require("./config/cloudinary");
const authroutes  = require("./routes/authroute")
const placeroutes = require("./routes/placeroute")
dotenv.config();

// Connect to Database & Cloudinary
connectDB();
connectClodinary();
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Routes
app.get("/", (req, res) => {
    res.send(" Voyager API Server is Running");
});

app.use("/api/users", authroutes);
app.use("/api/places", placeroutes);    

 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
