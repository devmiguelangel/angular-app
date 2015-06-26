'use strict';

/**
 * @ngdoc function
 * @name appAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appAngularApp
 */
angular.module('appAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
