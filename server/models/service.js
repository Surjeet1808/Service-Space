const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Model = mongoose.model;


const serviceSchema=Schema({
    id:String,
    title:{
        type: String,
        require
    },
    image:[
        {
            type:String,
            require
        }
    ],
    availible:{
        type: Boolean,
        default: true
    },
    work:[
        {
            service:String,
            price:Number
        }
    ]
});


const Service=new Model("Service",serviceSchema);

module.exports=Service;