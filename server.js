var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 

var app = express(); 

app.use(express.static(path.join(__dirname, '/static'))); 
app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views')); 
app.set('view engine', 'ejs'); 

var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/1955_api'); 

app.get('/', function(req, res){
	app.send('You made it this far buddy!'); 
}); 

app.listen(8000, function(){
	console.log("Listening at port: 8000"); 
}); 
