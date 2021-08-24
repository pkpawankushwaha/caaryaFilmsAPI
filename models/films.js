const mongoose = require("mongoose");
const Schema = mongoose.Schema

//creating data schema and model
const itemSchema=new Schema(
    {
        hello:{
            type:String
        },
        name:{
            type:String
        },
        data:{
            type:Object
        }
    }
);

const data = mongoose.model('films',itemSchema)

module.exports = data