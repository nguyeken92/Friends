app.controller('sessionController', function($scope, sessionFactory){
	sessionFactory.checkSess(function(data){
		$scope.cur_user = data;
	})

	$scope.login = function(){
		if(!$scope.logReg ||$scope.logReg.name.length < 3 ){
			alert('Please fill this out correctly')
		}else{
			sessionFactory.login($scope.logReg)
		}

	}
})
