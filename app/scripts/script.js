$(document).ready(function() {





	/*
	 * Events
	 */
	// menu animation
	$('header nav i').click(function() {
		if( !$('header nav ul').is(':visible') ) {
			$('header nav ul').slideDown();
		}
		else {
			$('header nav ul').slideUp();
		}
	});
	// close menu navbar
	$('header nav ul li a').click(function() {
		setTimeout(function() {
			$('header nav ul').slideUp();
		}, 1000);
	});
	// tinder finger swiping
	$('div#vote div.item-info').touchwipe({
	     wipeLeft: function() { 
	     	alert("left");
	     },
	     wipeRight: function() {
	     	alert("right"); 
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