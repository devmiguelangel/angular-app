'use strict';

/**
 * @ngdoc function
 * @name appAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appAngularApp
 */
angular.module('appAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
