const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json());
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts");
const categorieRoute = require("./routes/categories")
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,"hello.jpg")
    }
})
const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file da upload");
})

mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("connected to mongodb"))
.catch((err) => console.log(err));

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category",categorieRoute);
app.listen("6000",()=>{
    console.log("server running");
})