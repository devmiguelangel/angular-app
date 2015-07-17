app.controller('HomeController', ['$scope', '$http', function($scope, $http){
	$scope.repos = [];
	$scope.posts = [];

	$http.get('https://api.github.com/users/djmiguelarango/repos')
		.success(function (data) {
			$scope.posts = data;

			for (var i = data.length - 1; i >= 0; i--) {
				var repo = data[i];
				$scope.repos.push(repo.name);

			};

			console.log(data);
		})
		.error(function (err) {
			console.log(err);
		});

	$scope.optionSelected = function (data) {
		$scope.$apply(function() {
			$scope.main_repo = data;
		});
	};
}]);

app.controller('RepoController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$scope.post = [];
	
	$http.get('https://api.github.com/repos/djmiguelarango/' + $routeParams.name)
		.success(function (data) {
			$scope.post = data;

			console.log(data);
		})
		.error(function (err) {
			console.log(err);
		});
}]);