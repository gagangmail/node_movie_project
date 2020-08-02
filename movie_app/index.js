const connection = require("./models");
const express = require("express");
const application = express();
const path = require("path");
const Handlebars = require('handlebars')
const expresshandlebars = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require("body-parser");
const MoviesController = require("./controllers/movies");
application.use(bodyparser.urlencoded({
    extended:true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir: __dirname + "/views/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

application.set("view engine", "hbs");

application.get("/", (req, res)=>{
    //res.send("<h1>Hello</h1>");
    res.render("index",{});
});

// const users = [
//     "Gagan", "Science Dep",
//     "Suraj", "Physics Dept"
// ];

// application.get("/users", (req, res)=>{
//     //res.send("<h1>Hello</h1>");
// //    res.render("index",{});
//     res.send(users);
// });


application.use("/movies", MoviesController);
application.listen('3000');
