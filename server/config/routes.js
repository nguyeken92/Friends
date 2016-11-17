var session = require('./../controllers/session.js');
var friend = require('./../controllers/friend.js');
console.log(friend)
module.exports = function(app){
	app.post('/login', function(req, res){
		session.login(req, res);
	})
	app.get('/checksess', function(req, res){
		session.checkSess(req, res);
	})
	app.get('/logout', function(req, res){
		session.logout(req, res);
	})

	app.get('/friends/all', function(req, res){
		friend.index(req, res);
	})
	app.get('/friend/getone/:id', function(req, res){
		friend.getOne(req, res);
	})
	app.get('/friend/delete/:id', function(req, res){
		friend.delete(req, res);
	})
	app.post('/friend/update/', function(req, res){
		friend.update(req, res);
	})
}