//require depenciess

var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/portfolio";
var Session = require('express-session');
var fs = require('file-system');
var app = express();
var multer = require('multer');
var upload = multer(); 

app.set('view engine', 'ejs');

// configure app
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ '/public'));


mongoose.connect(DB_URI);
app.use(Session({secret: 'mySecretKey'}));

app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})