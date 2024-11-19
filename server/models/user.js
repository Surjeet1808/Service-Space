const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Model = mongoose.model;
const plm =require("passport-local-mongoose")

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    history:[
        {
        type: Schema.Types.ObjectId,
        ref:"order"
    }
   ],
   favorite:[
    {
        type: Schema.Types.ObjectId,
        ref:"service"
    }
   ]
})

userSchema.plugin(plm);

const User=new Model("User",userSchema);

module.exports=User;

