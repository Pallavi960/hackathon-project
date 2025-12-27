const express=require("express");
const userRoute=express.Router();
const { register}=require("../controllers/user")

userRoute.post("/register",register);

module.exports=userRoute;