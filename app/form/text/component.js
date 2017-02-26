define(['app/form/text/controller'], function(Controller) {
	'use strict';
	
	return {
		templateUrl: 'app/form/text/template.html',
		controller: Controller,
		bindings: {
			model: '<',
			options: '<',
			label: '@',
		}
	}
});