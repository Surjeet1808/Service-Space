const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Model = mongoose.model;

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=new Model("User",userSchema);

module.exports=User;

