var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose'); 

var app = express(); 

app.use(express.static(path.join('./clients'))); 
app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json());

// mongoose configurations & routes
require('./server/config/mongoose.js'); 
require('./server/config/routes.js')(app); 

app.listen(8000, function(){
	console.log("Listening at port: 8000"); 
}); 
