var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose'); 

var app = express(); 

app.use(express.static(path.join(__dirname, '/static'))); 
app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views')); 
app.set('view engine', 'ejs'); 

mongoose.connect('mongodb://localhost/1955_api'); 



// routes will eventually be delegated to a controller folder
app.get('/', function(req, res){
	res.send('will serve up the full collection of people born in 1955.'); 
}); 
app.get('/new/:name', function(req, res){
	res.send('will add '+req.params.name+' into the database.'); 
}); 
app.get('/remove/:name', function(req, res){
	res.send('will delete '+req.params.name+' from the database.'); 
}); 
app.get('/:name', function(req, res){
	res.send('will bring up the document of that particular person: '+req.params.name); 
})

app.listen(8000, function(){
	console.log("Listening at port: 8000"); 
}); 
