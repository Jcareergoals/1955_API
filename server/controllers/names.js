var mongoose = require('mongoose'); 
var Name = mongoose.model('Name');  

module.exports = {
	show: function(req, res){
		Name.find({}, function(err, names){
			res.json(names); 
		});
	}, 
	create: function(req, res){
		urlName = decodeURI(req.params.name); // replaces any %20 with space 
		name = new Name({ name: urlName }); 
		name.save(); 
		res.redirect('/'); 
	}, 
	delete: function(req, res){
		Name.remove({name:req.params.name}, function(err){
			res.redirect('/'); 
		});
	}, 
	showOne: function(req, res){
		urlName = decodeURI(req.params.name); // replaces any %20 with space 
		Name.findOne({name:urlName}, function(err, data){
			res.json(data); 
		});
	}
}