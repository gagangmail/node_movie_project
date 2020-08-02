const express=require("express");
const mongoose=require("mongoose");
const http = require('http');
const io = require('socket.io')(http);

const router=express.Router();
const MoviesModel = mongoose.model("movies");

router.get("/add", (req, res)=>{
    res.render("add");
});

router.post("/add", (req, res)=>{
    var movie = new MoviesModel();
    movie.title = req.body.title;
    movie.language = req.body.language;
    movie.director = req.body.director;
    movie.date_released = req.body.date_released;
    movie.budget = req.body.budget;
    movie.cast = req.body.cast;
    movie.save((err, doc)=>{
        if(!err){
            res.redirect("/movies/list");
        }else {
            res.send("Error Occured"+err);
            console.log(err);
        }
    });
    //res.render("add");
});

router.get("/list", (req, res)=>{
    //Getting
    MoviesModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs}); 
        }
    })
});

router.get("/list/hindi", (req, res)=>{
    //Getting
    MoviesModel.find({language:'hindi'},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs}); 
//            res.render("hindi_movies", {data: docs}); 
        }
    })
});

router.get("/list/Hindi", (req, res)=>{
    MoviesModel.find({language:'Hindi'},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs}); 
        }
    })
});

router.get("/list/english", (req, res)=>{
    MoviesModel.find({language:'english'},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs}); 
        }
    })
});

router.get("/list/English", (req, res)=>{
    MoviesModel.find({language:'English'},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs}); 
        }
    })
});

router.get("/list/regional", (req, res)=>{
    MoviesModel.find({language:'regional'},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs}); 
        }
    })
});

router.get("/list/Regional", (req, res)=>{
    MoviesModel.find({language:'Regional'},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs}); 
        }
    })
});

router.get("/message", (req, res)=>{
    res.render("message");
});

router.get("/search", (req, res)=>{
    res.render("search");
});

router.post("/search_results", (req, res)=>{
    console.log("\n\tInside search_results rendering section ...... ");
    MoviesModel.find({title:req.body.movie_title},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("search_results", {data: docs}); 
        }
    })
});

router.post("/update", (req, res)=>{
    console.log("\n\tThe selected option is: "+req.body.selectedOption);
    MoviesModel.find({title:req.body.selectedOption},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("movie_update", {data: docs}); 
        }
    })
});

router.post("/update_confirm", (req, res)=>{
    console.log("Inside to update the record and confirm");
    var movie = new MoviesModel();
    movie.title = req.body.title;
    movie.language = req.body.language;
    movie.director = req.body.director;
    movie.date_released = req.body.date_released;
    movie.budget = req.body.budget;
    movie.cast = req.body.cast;
    // movie. ((err, doc)=>{
    //     if(!err){
    //         res.redirect("/movies/list");
    //     }else {
    //         res.send("Error Occured"+err);
    //         console.log(err);
    //     }
    // });

    // MoviesModel.findOneAndUpdate();

});

module.exports = router;
