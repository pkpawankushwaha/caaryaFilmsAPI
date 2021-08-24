const data=require("../models/films")
const mongoose=require('mongoose')
const url=require('url')

const getall=(req,res,next)=>{
    
    const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);
  
    const Schema=mongoose.Schema
    console.log("doing ittt\n\n");
    data.find({}).then((items)=>{
        var resToSend={}
        if(items[0]){
            const films=items[0].data;
            const list=[]
            for(var x=0;x<films.count;x++){
                var k={}
                k["title"]=films.results[x].title;
                k["director"]=films.results[x].director;
                k["producer"]=films.results[x].producer;
                k["release_date"]=films.results[x].release_date;
                k["url"]=films.results[x].url
                list[x]=k
            }

            resToSend={
                status:"true",
                films:list
            }
        }
        
        
        res.send(resToSend);
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