const mongoose = require("mongoose");
const Faq =require("../models/faq.js");
const Category =require("../models/category.js");
const Service = require("../models/service.js");
// const User= require(".category.js");
const Worker= require("../models/worker.js");
const workerdata=require("./workers.js");
const faqdata=require("./FAQs.js");
const categorydata=require("./category.js");
const servicedata=require("./service.js");


mongoose.connect("mongodb+srv://dhakadkrish4:4N1BFdfiwMu2jUlu@cluster0.nq2ja2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("db is connected"))
.catch(()=>console.log("connection failed"));

async function initdata(){
    await Worker.deleteMany({});
    await Worker.insertMany(workerdata);
    await Faq.deleteMany({});
    await Faq.insertMany(faqdata);
    await Category.deleteMany({});
    await Category.insertMany(categorydata);
    await Service.deleteMany({});
    await Service.insertMany(servicedata);
}


initdata();