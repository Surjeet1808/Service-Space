const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Model = mongoose.model;
const Service = require("./service.js");

const categorySchema=new Schema({
    category:{
     type:String,
     require
    },
    services:[
        {
        type:String,
        require
        }
    ]
 });
 
 const Category = new Model("Category",categorySchema);
 
 module.exports = Category;
