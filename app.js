var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    sassMiddleware = require('node-sass-middleware');//loading the node-sass-middleware module


//requiring routes
var indexRoutes      = require("./routes/index");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// adding sass middleware
app.use('/stylesheets', sassMiddleware({
         src: __dirname + '/sass', 
         dest: __dirname + '/public/stylesheets',
        outputStyle: 'nested',
        debug: true,
        force: true,
        sourceMap: true
     })
  ); 
app.use(express.static(__dirname + '/public')); 
app.use(methodOverride("_method"));

// The static middleware must come after the sass middleware

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Javier Farre's CV webpage has started...");
});