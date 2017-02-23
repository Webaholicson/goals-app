define(['app/form/input/controller'], function(Controller) {
	'use strict';
	
	return {
		templateUrl: 'app/form/input/template.html',
		controller: Controller,
		bindings: {
			model: '<',
			options: '<',
			label: '@',
		}
	}
});