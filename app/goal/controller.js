define([], function() {
	'use strict';
	
	var Controller = function($firebase) {
    	
		var ctrl = this;
		
		ctrl.goal = {};

    	ctrl.data = {};
	}
	
	Controller.$inject = ['$firebase'];
	
	return Controller;
});