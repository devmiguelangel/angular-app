var cfApp = angular.module('cfApp', []);

cfApp.filter('removeHtml', function () {
	return function (text) {
		return String(text).replace(/<[^>]*>?/g, '');
	};
});

cfApp.controller('filtersController', ['$scope', function($scope){
	$scope.moneda = '<p>3</p>'
}]);
