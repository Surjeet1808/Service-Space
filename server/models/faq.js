const mongoose=require('mongoose');

const faqSchema=mongoose.Schema({
   question:{
    type:String,
    require
   },
   answer:{
    type: String,
    require
   }
});

const Faq =new mongoose.model("Faq",faqSchema);

module.exports=Faq;