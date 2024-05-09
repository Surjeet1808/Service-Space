const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Model = mongoose.model;

const workerSchema=new Schema({
   name:{
    type:String,
    require
   },
   photo:{
    type: String,
    require
   },
   skill:{
    type: String,
    require
   },
   contect:{
    type: Number,
    require
   },
   location:{
    type: String,
    require
   },
   ratting:{
    type: Number,
    default: 6,
    require
   }
});

const Worker = new Model("Worker",workerSchema);

module.exports = Employee;