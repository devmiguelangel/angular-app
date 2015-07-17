var app = angular.module('cfApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			controller : 'HomeController',
			templateUrl : 'templates/home.html'
		})
		.when('/repo/:name', {
			controller : 'RepoController',
			templateUrl : 'templates/repo.html'
		});
}]);