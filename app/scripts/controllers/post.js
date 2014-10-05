'use strict';

/**
 * @ngdoc function
 * @name ladelApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ladelApp
 */

ladelAppControllers.controller('PostCtrl', function ($scope) {
    console.log('Post new');
    
    $scope.save = function() {
    	var temp = {
    		'name': $scope.title,
    		'image': 'http://highlandercenter.org/wp-content/themes/thalliumity/images/thumbnail.png',
    		'user': $scope.user,
    		'votes': 1,
    		'tagline': $scope.tagline
    	};

    	dishes.push(temp);
    	reset();
    }

    var reset = function() {
    	$scope.title = "";
    	$scope.user = "";
    	$scope.tagline = "";
    };

    
  });
