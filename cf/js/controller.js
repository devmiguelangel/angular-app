var app = angular.module('cfApp', []);

app.controller('FirstController', ['$scope', function($scope){
	$scope.comment_new = {
		comment: 	"",
		user:		""
	};

	$scope.comments = [
		{
			comment:	'Buen Tutorial',
			user:		'miguel'
		},
		{
			comment:	'Mal Tutorial',
			user:		'juan'
		}
	];

	$scope.newComment = function () {
		$scope.comments.push($scope.comment_new);
		$scope.comment_new = {
			comment: 	"",
			user:		""
		};
	};

}]);

app.controller('AjaxController', ['$scope', '$http', function($scope, $http){
	$scope.newPost = {
		title:	'',
		body:	''
	};

	$scope.posts = [];
	$scope.loader = true;

	$http.get('http://jsonplaceholder.typicode.com/posts')
		.success(function (data) {
			$scope.posts = data;

			console.log(data);
			$scope.loader = false;
		})
		.error(function (err) {
			$scope.loader = false;
		});

	$scope.addPost = function () {
		$http.post('http://jsonplaceholder.typicode.com/posts', {
			title:	$scope.newPost.title,
			body:	$scope.newPost.body,
			userId:	1,
		})
			.success(function (data, status, headers, config) {
				console.log(data);
				$scope.posts.push(data);
			})
			.error(function (err, status, headers, config) {
				console.log(err);
			});
	};
}]);