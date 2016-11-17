app.factory('friendFactory', function($http){
	var factory = {};
	factory.friends = [];

	factory.delete = function(id, cb){
		$http.get('/friend/delete/' + id).success(function(output){
			cb()
		})
	}

	factory.update = function(user, cb){
		$http.post('/friend/update/', user).success(function(output){
			cb()
		})
	}



	factory.getFriends = function(cb){
		$http.get('/friends/all').success(function(output){
			factory.friends = output;
			cb(output)		
		})	
	}

	factory.getOne = function(id, cb){
		$http.get('/friend/getone/' +  id).success(function(output){
			cb(output)
		})
	}



	return factory;
})