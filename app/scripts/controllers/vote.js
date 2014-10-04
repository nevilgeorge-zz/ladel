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
    		'image': 'http://upload.wikimedia.org/wikipedia/commons/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg',
    		'user': 'Mo Appalaraju',
    		'votes': 5,
    		'tagline': 'nom nom nom'
    	},
    	{
    		'name': 'Apple Pie',
    		'image': 'http://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg',
    		'user': 'Patrick Weston',
    		'votes': 8,
    		'tagline': 'so fruity!'
    	},
    	{
    		'name': 'Spaghetti',
    		'image': 'http://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg',
    		'user': 'Robin Brewer',
    		'votes': 3,
    		'tagline': 'great entre!'
    	}
    ];

    $scope.currentDish = dishes[getRandomInt(0, dishes.length)];


  });
