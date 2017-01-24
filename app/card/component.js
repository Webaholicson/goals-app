define(['app/card/controller'], function(Controller) {
	'use strict';
	
	return {
		templateUrl: 'app/card/template.html',
		controller: Controller,
		bindings: {
			card: '<'
		}
	}
});