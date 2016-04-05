var mongoose = require('mongoose'); 
var Controller = require('./../controllers/names.js'); 

module.exports = function(app){
	app
		.get('/names', function(req, res){
			Controller.show(req, res) 
		}) 
		.get('/new/:name', function(req, res){
			Controller.create(req, res) 
		})
		.get('/remove/:name', function(req, res){
			Controller.delete(req, res)
		})
	// app.get('/:name', function(req, res){
	// 	Controller.showOne(req, res); 
	// }); 
}
