'use strict';

/**
 * @ngdoc function
 * @name ladelApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ladelApp
 */
angular.module('ladelApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
