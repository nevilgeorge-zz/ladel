'use strict';
var ladelApp = angular.module('ladelApp', ['ngRoute', 'ngResource', 'ladelAppControllers']);

/**
 * @ngdoc overview
 * @name ladelApp
 * @description
 * # ladelApp
 *
 * Main module of the application.
 */
ladelApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/vote.html',
        controller: 'VoteCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
