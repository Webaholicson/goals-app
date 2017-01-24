/**
 * GoalTracker main app component
 * @constructor
 * @param	{Function} 	Controller - Controller constructor function
 * @return	{Object}  	GoalTracker component object 
 */
define(['app/controller'], function(Controller) {
	'use strict';
	
	return  {
		templateUrl: 'app/template.html',
		controller: Controller
	}
})