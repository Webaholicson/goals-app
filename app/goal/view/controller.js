define(function(require) {
	'use strict';
	
	var ng = require('angular.min');
	
	var Controller = function() {
    	
		var ctrl = this;
		
		ctrl.title = 'New Goal';
		
		ctrl.$init = function() {
			ctrl.goal.once('value').then(function(goal){
				ctrl.goal = goal.val();
			});
		}
	}
	
	return Controller;
});