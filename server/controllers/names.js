var mongoose = require('mongoose'); 
var Name = mongoose.model('Name');  

module.exports = {
	show: function(req, res){
		Name.find({}, function(err, respond){
			res.json(respond); 
		});
	},
	create: function(req, res){
		urlName = decodeURI(req.params.name); // replaces any %20 with space 
		name = new Name({ name: urlName }); 
		name.save(); 
		Name.find({}, function(err, respond){
			res.json(respond);
		}); 
	}, 
	delete: function(req, res){
		Name.remove({_id:req.params.name}, function(err){
			Name.find({}, function(err, respond){
				res.json(respond); 
			}); 
		});
	} 
	// showOne: function(req, res){
	// 	urlName = decodeURI(req.params.name); // replaces any %20 with space 
	// 	Name.findOne({name:urlName}, function(err, data){
	// 		res.json(data); 
	// 	});
	// }
}