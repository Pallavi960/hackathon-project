const express = require("express");
const { connectMongoDB } = require("./connection");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://hackathon-project-pi-eight.vercel.app"
  ],
  credentials: true
}));

app.use(cookieParser());
app.use("/user", userRoute);

// connectMongoDB etc...
