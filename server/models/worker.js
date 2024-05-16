const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Model = mongoose.model;

const workerSchema=new Schema({
   name:{
    type:String,
    require
   },
   Skill:{
    type: String,
    require
   },
   Location:{
      type: String,
      require
     },
   Contact:{
    type: Number,
    require
   }
});

const Worker = new Model("Worker",workerSchema);

module.exports = Worker;