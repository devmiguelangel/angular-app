var app = angular.module('toDoListApp', ['LocalStorageModule']);

app.service('ListService', ['localStorageService', function(localStorageService){
	this.key = 'activities';

	if (localStorageService.get(this.key)) {
		this.activities = localStorageService.get(this.key);
	} else{
		this.activities = [];
	}

	this.addActivity = function (newActivity) {
		this.activities.push(newActivity);
		this.updateActivities();
	};

	this.updateActivities = function () {
		localStorageService.set(this.key, this.activities);
	};

	this.cleanActivities = function () {
		this.activities = [];
		this.updateActivities();
	};

	this.removeActivity = function (item) {
		this.activities = this.activities.filter(function (activity) {
			return item != activity;
		});

		this.updateActivities();

		return this.getActivities();
	};

	this.getActivities = function () {
		return this.activities;
	};
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