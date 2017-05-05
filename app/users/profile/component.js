define(['app/users/profile/controller'], function(Controller) {
	'use strict';
	
	return {
		templateUrl: 'app/users/profile/template.html',
		controller: Controller,
		bindings: {
			user: '<'
		}
	}
})