const express=require("express");
const {connectMongoDB}=require("./connection");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute=require("./routes/user");


const  app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173", // ⚠️ change to your frontend URL
    credentials: true
}));

app.use(cookieParser());


app.use("/user",userRoute);





connectMongoDB("mongodb://localhost:27017/project").then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});

let port=7000;
app.listen(port,()=>
{
    console.log(`server is running on the ${port}`);
})