var mongoose = require('mongoose'); 

// connect or create Mongo DB
mongoose.connect('mongodb://localhost/1955_api'); 

// Name model
require('./../models/name.js'); 


// file location: /server/config/mongoose.js