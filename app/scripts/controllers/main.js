'use strict';

/**
 * @ngdoc function
 * @name ladelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ladelApp
 */
angular.module('ladelApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
