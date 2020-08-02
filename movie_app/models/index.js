const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviedb',{ useUnifiedTopology: true
, useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log("Connected to Product Interface..!!");
    }else{
        console.log("Error connecting to database.");
        console.log(error);
    }
});

const course = require("./movies.model");

