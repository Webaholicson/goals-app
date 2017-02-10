define(['app/goal/controller'], function(Controller) {
	'use strict';
	
	return {
		controller: Controller,
		templateUrl: function($element, $attrs) {
			return 'app/goal/templates/'+$attrs.template+'.html';
		}
	};
});