app.factory('sessionFactory', function($http, $location){
	var factory = {};
	factory.checkSess = function(cb){
		$http.get('/checksess').success(function(output){
			if(!output){
				$location.url('/logReg')
			}else{
				cb(output)
			}
		})
	}
	factory.login = function(user){
		$http.post('/login', user).success(function(output){
			if(output.status){
				$location.url('/dash')
			}else{
				alert('Something went wrong. Please check your information and try again.')
			}
		})
	}
	return factory;
})