'use strict';
//var ladelApp = angular.module('ladelApp', []);
var ladelAppControllers = angular.module('ladelAppControllers', []);
var getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};
/**
 * @ngdoc function
 * @name ladelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ladelApp
 */

ladelAppControllers.controller('VoteCtrl', function ($scope) {
	/*
		dish object schema:
			name: name of dish
			image: link to image
			user: name of use who added the dish
			votes: number of total "right swipes"
			tagline: short sentence to describe the dish
	*/
    var dishes = [
    	{
    		'name': 'Cheesecake',
    		'image': 'http://2.bp.blogspot.com/-kP7u_edswCg/UO0_npAOPMI/AAAAAAAAJXc/5Qd05mUBTC4/s640/IMG_20130109_165752.jpg',
    		'user': 'Mo Appalaraju',
    		'votes': 5,
    		'tagline': 'nom nom nom'
    	},
    	{
    		'name': 'Apple Pie',
    		'image': 'http://kathdedon.files.wordpress.com/2013/07/instagram-cinnamon-crumble-apple-pie.jpg',
    		'user': 'Patrick Weston',
    		'votes': 8,
    		'tagline': 'so fruity!'
    	},
    	{
    		'name': 'Spaghetti',
    		'image': 'https://c1.staticflickr.com/9/8394/8705344125_4133b3c367_z.jpg',
    		'user': 'Robin Brewer',
    		'votes': 3,
    		'tagline': 'great entre!'
    	}
    ];

    $scope.currentDish = dishes[getRandomInt(0, dishes.length)];


  });
