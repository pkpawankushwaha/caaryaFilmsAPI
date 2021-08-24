const people=require("../models/people")

const mongoose=require('mongoose')
const url=require('url')

const getall=(req,res,next)=>{
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject.url);
    const Schema=mongoose.Schema
    console.log("doing ittt\n\n");
    people.find({url:queryObject.url}).then((items)=>{
        console.log(items)
        res.send(items);
        
    }).catch({status:"false",films:[]})

    //res.send({status:"false"});
        // data.find({}).then(function(items){
    //     console.log(items)
    //     res.send({status:true,msg:items.data});
    // }).catch((err)=>{
    //     console.log(err);
    //     res.send({status:false,msg:err.message})
    // });
};


module.exports={
    getall
}