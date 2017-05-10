define(['app/users/profile/info/controller'], function(Controller) {
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