const express = require("express")
const app=express()
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
const films_api=require('./routes/api')
//connect to mongodb
const password="137P@$$w0r4"
const url = `mongodb+srv://learntothrive:${password}@restra.iqs6x.mongodb.net/caarya?retryWrites=true&w=majority`

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        app.listen(process.env.port|| 3000,()=>{
            console.log("listening at port 3000");
        })
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello, welcome to caarya api")
})

app.use("/api/",films_api)