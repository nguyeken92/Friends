var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return{
		index: function(req, res){
			User.find({}, function(err, users){
				res.json(users)
			})
		},
		getOne: function(req, res){
			User.findOne({_id: req.params.id}, function(err, user){
				res.json(user)
			})
		},
		delete: function(req, res){
			User.remove({_id: req.params.id}, function(err){
				res.json({status: true})
			})
		},
		update: function(req, res){
			User.findOne({_id: req.body._id}, function(err, user){
				user.name = req.body.name;
				user.save(function(err){
					res.json({status: true})
				})
			})
		}
	}
})();