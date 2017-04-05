define([], function(Controller) {
	'use strict';
	
	return {
		template: 'app/users/profile.html',
		controller: Controller,
		bindings: {
			model: '<'
		}
	}
})