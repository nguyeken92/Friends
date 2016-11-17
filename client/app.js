var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/logReg',{
		templateUrl: 'partials/logReg.html'
	})
	.when('/dash',{
		templateUrl: 'partials/dashboard.html'
	})
	.when('/show/:id',{
		templateUrl: 'partials/show.html'
	})
	.when('/edit/:id',{
		templateUrl: 'partials/edit.html'
	})
	.otherwise({
		redirectTo: '/logReg'
	})
})

