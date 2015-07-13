var app = angular.module('cfApp', []);

app.directive('bgImage', function(){
	return function (scope, element, attrs) {
		attrs.$observe('bgImage', function (value) {
			element.css({
				"background" 		: "url(" + value + ")",
				"background-size"	: "cover",
				"background-position" : "center"
			});
		});
	};
});
/*<div class="circular" style="background: url({{ repo.owner.avatar_url }}); background-size: cover; background-position: center;">
			</div>*/

app.directive('myAutocomplete', function(){
	function link ($scope, element, attrs) {
		$(element).autocomplete({
			source: $scope[attrs.myAutocomplete],
			select: function (e, ui) {
				e.preventDefault();
				if (ui.item) {
					$scope.optionSelected(ui.item.value);
				};
			},
			focus: function (e, ui) {
				e.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};

	return {
		link: link
	};
});

app.controller('AjaxController', ['$scope', '$http', function($scope, $http){
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