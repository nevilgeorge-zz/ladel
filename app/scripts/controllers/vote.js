'use strict';
var ladelApp = angular.module('ladelApp', []);

/**
 * @ngdoc function
 * @name ladelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ladelApp
 */

ladelApp.controller('VoteCtrl', function ($scope) {
	/*
		dish object schema:
			name: name of dish
			image: link to image
			user: name of use who added the dish
			votes: number of total "right swipes"
	*/
    var dishes = [
    	{
    		'name': 'Cheesecake',
    		'image': 'http://upload.wikimedia.org/wikipedia/commons/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg',
    		'user': 'Mo Appalaraju',
    		'votes': 5
    	},
    	{
    		'name': 'Apple Pie',
    		'image': 'http://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg',
    		'user': 'Patrick Weston',
    		'votes': 8
    	},
    	{
    		'name': 'Cheesecake',
    		'image': 'http://upload.wikimedia.org/wikipedia/commons/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg',
    		'user': 'Mo Appalaraju',
    		'votes': 5
    	}
    ];
  });
