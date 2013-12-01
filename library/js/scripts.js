/**
 *	Bones Scripts File
 *	Author: Eddie Machado
 *
 *	This file should contain the functional JavaScript for the theme.
 *	Plugins, and things that won't change much should be placed in the
 *	plugins.js file.
 *
 *	This file will be called automatically in the footer so as not to
 *	slow the page load.
 */


// Don't change this to $()
jQuery(document).ready(function($) {


	// Here, inside the .ready() function you can use $() instead of jQuery()


	/**
	 *	Go ahead and read up about EnquireJS
	 *	It's pretty awesome: http://wicky.nillia.ms/enquire.js
	 */

	enquire.register( "screen and (max-width: 480px)",
		{
			deferSetup : true, // Only call setup() when the mediaquery is matched

			setup : function() {
				// Call this code once, the first time the mediaquery is matched
				console.log('SETUP: 480px JS');
			},
			match : function() {
				// Call this code every time the mediaquery is matched
				console.log('Screen is 480px or smaller.');
			},
			unmatch : function() {
				// Call this code every time the mediaquery is _un_matched
				console.log('Screen is wider than 480px.');
			}
		},
		false // The `false` here means that dumb browsers (IE 6-8) will _ignore_ this code.
	);


	enquire.register( "screen and (min-width: 481px)",
		{
			deferSetup : true, // Only call setup() when the mediaquery is matched

			setup : function() {
				// Call this code once, the first time the mediaquery is matched
				console.log('SETUP: 481px JS');
			},
			match : function() {
				// Call this code every time the mediaquery is matched
				console.log('Screen is 481px or wider.');
			},
			unmatch : function() {
				// Call this code every time the mediaquery is _un_matched
				console.log('Screen is smaller than 481px.');
			}
		},
		true  // The `true` here means that dumb browsers (IE 6-8) will _always run_ this code.
	);


	/**
	 *	Always run the following code, in any browser.
	 *	Once on every page load.
	 */
	
	console.log("Always run this code!");


 
}); /* end jQuery(document).ready() */

