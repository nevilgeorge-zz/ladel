'use strict';


/* 
 * Data
 */

// List of dishes 
var dishes = [
    {
        'name': 'Cheesecake',
        'image': 'http://2.bp.blogspot.com/-kP7u_edswCg/UO0_npAOPMI/AAAAAAAAJXc/5Qd05mUBTC4/s640/IMG_20130109_165752.jpg',
        'user': 'Mo Appalaraju',
        'votes': 23,
        'tagline': 'nom nom nom'
    },
    {
        'name': 'Apple Pie',
        'image': 'http://kathdedon.files.wordpress.com/2013/07/instagram-cinnamon-crumble-apple-pie.jpg',
        'user': 'Patrick Weston',
        'votes': 27,
        'tagline': 'so fruity!'
    },
    {
        'name': 'Spaghetti',
        'image': 'https://c1.staticflickr.com/9/8394/8705344125_4133b3c367_z.jpg',
        'user': 'Robin Brewer',
        'votes': 18,
        'tagline': 'great entree!'
    },
    {
        'name': 'Waffles',
        'image': 'http://cdn.buzznet.com/assets/users16/audrey/default/home-made-waffles--large-msg-133493449108.jpg',
        'user': 'Jon Rovira',
        'votes': 89,
        'tagline': 'perfect fluffiness!'
    },
    {
        'name': 'Croissants',
        'image': 'http://gironadeliciousandbeautiful.files.wordpress.com/2012/11/310.jpg',
        'user': 'Nevil George',
        'votes': 88,
        'tagline': 'on va parler francais!'
    }
];


/*
 * Functions
 */

// Returns a random integer between min and max
var getRandomInt = function(min, max) {
    // placeholder for minimize
	return Math.floor(Math.random() * (max - min)) + min;
};



/*
 * Events that don't deal with controller
 */

$(document).ready(function() {
    // menu animation on click
    $('header nav i').click(function() {
        if( !$('header nav ul').is(':visible') ) {
            $('header nav ul').slideDown();

            $('header nav ul li a').click(function() {
                setTimeout(function() {
                    $('header nav ul').slideUp();
                }, 1000);
            });
        }
        else {
            $('header nav ul').slideUp();
        }
    });
});



/*
 * Angular controller: VoteCtrl
 */

ladelAppControllers.controller('VoteCtrl', function ($scope) {

    // Get random dish
    $scope.currentDish = dishes[getRandomInt(0, dishes.length)];

    /*
     * Events that do deail with controller
     */

    $(document).ready(function() {


        // tinder finger swiping
        $('div#vote div.item-info').touchwipe({
             wipeLeft: function() { 
                var newIndex = getRandomInt(0, dishes.length);
                $scope.currentDish = dishes[newIndex];
             },
             wipeRight: function() {
                $scope.currentDish.votes += 1;
                var newIndex = getRandomInt(0, dishes.length);
                $scope.currentDish = dishes[newIndex];

             },
             wipeUp: function() { 
                
             },
             wipeDown: function() { 
                
             },
             min_move_x: 20,
             min_move_y: 20,
             preventDefaultEvents: true
        });
});

  });
