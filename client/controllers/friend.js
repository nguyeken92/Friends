app.controller('friendController', function($scope, $routeParams,$location, friendFactory){
		friendFactory.getFriends(function(data){
			$scope.friends = data;
		})

		if($routeParams.id){
			friendFactory.getOne($routeParams.id, function(data){
				$scope.showOne = data;
				console.log(data)
			})
		}

		$scope.delete = function(id){
			friendFactory.delete(id, function(){
				friendFactory.getFriends(function(data){
				$scope.friends = data;
				})
			});

		}

		$scope.update = function(user){
			friendFactory.update(user, function(){
				$location.url('/dash')
			})
		}



})