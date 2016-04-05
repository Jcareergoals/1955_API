var mongoose = require('mongoose');  

var nameSchema = new mongoose.Schema({
	name: String, 
	date: {type: Date, default: Date.now}, 
}); 

mongoose.model('Name', nameSchema); 


// file location: /server/models/name.js
