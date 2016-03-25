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

var nameSchema = new mongoose.Schema({
	name: String, 
	date: {type: Date, default: Date.now}, 
}); 
mongoose.model('Model', nameSchema); 
var Name = mongoose.model('Model');

// routes will eventually be delegated to a controller folder
app.get('/', function(req, res){
	Name.find({}, function(err, names){
		console.log(names); 
		res.json(names); 
	});
}); 
app.get('/new/:name', function(req, res){
	name = new Name({ name: req.params.name }); 
	name.save(); 
	res.redirect('/'); 
}); 
app.get('/remove/:name', function(req, res){
	Name.remove({name:req.params.name}, function(err){
		res.redirect('/'); 
	});
}); 
app.get('/:name', function(req, res){
	Name.findOne({name:req.params.name}, function(err, data){
		res.json(data); 
	});
}); 

app.listen(8000, function(){
	console.log("Listening at port: 8000"); 
}); 
