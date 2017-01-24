define(['app/header/controller'], function(Controller) {
	'use strict';
	
	return {
		templateUrl: 'app/header/template.html',
		controller: Controller,
		bindings: {
			showNotification: '<'
		}
	}
});