$(document).ready(function() {








	/*
	 * Events
	 */
	// menu animation
	$('header nav > i').click(function() {
		if( !$('header nav ul').is(':visible') ) {
			$('header nav > ul').slideDown();
		}
		else {
			$('header nav > ul').slideUp();
		}
	});
});