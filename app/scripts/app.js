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
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/winners', {
        templateUrl: 'views/winners.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
