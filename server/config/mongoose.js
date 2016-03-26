var mongoose = require('mongoose'); 

// connect or create Mongo DB
mongoose.connect('mongodb://localhost/1955_api'); 
	console.log('db connected');

// require Name model
require('./../models/name.js'); 
	console.log('model required in mongoose.js'); 