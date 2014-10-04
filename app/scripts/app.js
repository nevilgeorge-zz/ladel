'use strict';

/**
 * @ngdoc overview
 * @name ladelApp
 * @description
 * # ladelApp
 *
 * Main module of the application.
 */
angular
  .module('ladelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/vote.html',
        controller: 'MainCtrl'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
