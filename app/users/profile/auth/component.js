define(['app/users/profile/auth/controller'], function(Controller) {
	'use strict';
	
	return {
		templateUrl: 'app/users/profile/auth/template.html',
		controller: Controller,
		bindings: {
			model: '<',
            onUpdate: '&',
		}
	}
})