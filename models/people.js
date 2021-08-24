const mongoose = require("mongoose");
const Schema = mongoose.Schema

//creating data schema and model
const itemSchema=new Schema(
    {
        "name": {type:String},
            "height":  {type:String}, 
            "mass":  {type:String}, 
            "hair_color":  {type:String}, 
            "skin_color":  {type:String}, 
            "eye_color":  {type:String}, 
            "birth_year":  {type:String}, 
            "gender":  {type:String}, 
            "homeworld":  {type:String}, 
            "films":  {type:Array}, 
            "species": {type:Array}, 
            "vehicles": {type:Array}, 
            "starships": {type:Array}, 
            "created": {type:String}, 
            "edited": {type:String}, 
            "url": {type:String}
    }
);

const people = mongoose.model('people',itemSchema)

module.exports = people