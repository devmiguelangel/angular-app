var app = angular.module('toDoListApp', ['LocalStorageModule']);

app.factory('ListService', ['localStorageService', function(localStorageService){
	var listService = {};

	listService.key = 'activities';

	if (localStorageService.get(listService.key)) {
		listService.activities = localStorageService.get(listService.key);
	} else{
		listService.activities = [];
	}

	listService.addActivity = function (newActivity) {
		listService.activities.push(newActivity);
		listService.updateActivities();
	};

	listService.updateActivities = function () {
		localStorageService.set(listService.key, listService.activities);
	};

	listService.cleanActivities = function () {
		listService.activities = [];
		listService.updateActivities();
	};

	listService.removeActivity = function (item) {
		listService.activities = listService.activities.filter(function (activity) {
			return item != activity;
		});

		listService.updateActivities();

		return listService.getActivities();
	};

	listService.getActivities = function () {
		return listService.activities;
	};

	return listService;

}]);

app.controller('toDoListController', ['$scope', 'localStorageService', 'ListService', 
	function($scope, localStorageService, ListService){
	
	$scope.newActivity 	= {
		description:	'',
		datetime:		''
	};

	$scope.activities 	= ListService.getActivities();

	$scope.addActivity = function () {
		ListService.addActivity($scope.newActivity);

		$scope.newActivity 	= {
			description:	'',
			datetime:		''
		};

	};

	$scope.cleanActivities = function() {
		ListService.cleanActivities();
		// localStorageService.remove('activities');
	};

	$scope.removeActivity = function (activity) {
		$scope.activities = ListService.removeActivity(activity);
	};

}]);