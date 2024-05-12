const mongoose =require('mongoose');

const workSchema=mongoose.Schema({
    work:{
        type: String,
        require
    },
    price: {
        type: Number,
        require
    }
});

const Work=new mongoose.model("Work",workSchema);

const serviceSchema=mongoose.Schema({
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
    services:[
        {
            service:String,
            Price:Number
        }
    ]
});


const Service=new mongoose.model("Service",workSchema);

module.exports=Service;