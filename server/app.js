const express =  require("express");
const app = express();
const mongoose = require("mongoose");

//connecting database
main()
.then(()=>{
    console.log("db is connected");
}).catch((err)=>{
    console.log("connection failed",err);
});
const url="mongodb://127.0.0.1:27017/ServiceSpace";
async function main(){
    mongoose.connect(url);
}

//get request
app.get("/",(req,res)=>{
  res.send("Home");
});


//starting the server
const port = 8080;
app.listen(port,(req,res)=>{
  console.log(`server is listening on port ${port}`);
});