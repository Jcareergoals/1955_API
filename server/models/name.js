var mongoose = require('mongoose'); 

var nameSchema = new mongoose.Schema({
	name: String, 
	date: {type: Date, default: Date.now}, 
}); 
	console.log('model schema created'); 
mongoose.model('Name', nameSchema); 
	console.log('model created'); 

var Name = mongoose.model('Name');