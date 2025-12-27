require("dotenv").config();
const mongoose = require("mongoose");

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (err) {
        console.log("Error connecting to MongoDB:", err.message);
    }
}

module.exports = { connectMongoDB };
