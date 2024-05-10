const express =  require("express");
const app = express();
const mongoose = require("mongoose");
const Faq =require("./models/faq.js");
const cors=require("cors");


app.use(express.json());
app.use(cors());


//connecting database
const url="mongodb://127.0.0.1:27017/ServiceSpace";
main()
.then(()=>{
    console.log("db is connected");
}).catch((err)=>{
    console.log("connection failed",err);
});
async function main(){
    mongoose.connect(url);
}

console.log(Faq);
//get request
app.get("/",async(req,res)=>{
  const faqs= await Faq.find({});
  console.log(faqs);
  res.json(faqs);
});


//starting the server
const port = 8080;
app.listen(port,(req,res)=>{
  console.log(`server is listening on port ${port}`);
});