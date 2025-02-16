const express =  require("express");
const app = express();
const mongoose = require("mongoose");
const Faq =require("./models/faq.js");
const cors=require("cors");
const Category =require("./models/category.js");
const Service = require("./models/service.js");
const User= require("./models/user.js");
const Worker= require("./models/worker.js");
const ExpressSession = require("express-session")
require('dotenv').config();


const passport =require("passport");


app.use(ExpressSession({
  resave: false,
  saveUninitialized: false,
  secret: "secret",
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));


//connecting database
const url=process.env.DB_URI;
main()
.then(()=>{
    console.log("db is connected");
}).catch((err)=>{
    console.log("connection failed",err);
});
async function main(){
    mongoose.connect(url);
}

//get category
app.get("/data",async(req,res)=>{
  const category = await Category.find({});
  console.log(category);
  res.json(category);
});

//get service
app.get("/data/:id",async(req,res)=>{
  const {id}=req.params;
  let service={};
  if(id){
  service = await Service.find({id:`${id}`});
  }
  console.log(service);
  res.json(service);
});

//faqs
app.get("/faqs",async(req,res)=>{
  const faqs= await Faq.find({});
  res.json(faqs);
})

//register
app.post("/signup",async (req,res)=>{
  console.log(req.body);
  const {username,password,email}=req.body;
  console.log({username,email,password});
  const user=new User({username,email,password});
  await user.save();
  res.json(user);
})


//login
app.post("/login",async (req,res)=>{
  console.log(req.body);
  const {username,password}=req.body;
  let user=await User.find({username});
  if(user){
  console.log("user login successfully");
  res.json(user);
  }
  else{
    console.log("user does not exist");
    res.json(user);
  }
})

//get worker data
app.get("/workers",async(req,res)=>{
   const workers=await Worker.find({});
   res.json(workers);
});

//starting the server
const port = 8080;
app.listen(port,(req,res)=>{
  console.log(`server is listening on port ${port}`);
});