const data=require("../models/films")
const mongoose=require('mongoose')
const url=require('url')

const getall=(req,res,next)=>{
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject.url);
    const Schema=mongoose.Schema
    console.log("doing ittt\n\n");
    data.find({}).then((items)=>{
        console.log(items)
        const dataArr=items[0].data.results
        for(i=0;i<dataArr.length;i++){
            if(dataArr[i].url===queryObject.url)
            res.send({film:queryObject.url,characters:dataArr[i].characters});
        }
        
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