var app = angular.module('toDoListApp', ['LocalStorageModule']);

app.controller('toDoListController', ['$scope', 'localStorageService', function($scope, localStorageService){
	
	$scope.newActivity 	= {
		description:	'',
		datetime:		''
	};

	$scope.activities 	= [];

	if (localStorageService.get('activities')) {
		$scope.activities = localStorageService.get('activities');
	}

	$scope.addActivity = function () {
		$scope.activities.push($scope.newActivity);
		// localStorageService.set('activities', $scope.activities);

		$scope.newActivity 	= {
			description:	'',
			datetime:		''
		};

	};

	$scope.cleanActivities = function() {
		$scope.activities 	= [];
		localStorageService.remove('activities');
	};

	$scope.$watchCollection('activities', function (newCollection, oldCollection) {
		localStorageService.set('activities', newCollection);
	});

}]);