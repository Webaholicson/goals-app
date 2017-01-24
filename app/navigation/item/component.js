define(['app/navigation/item/controller'], function(Controller) {
	'use strict';
	
	return {
		templateUrl: 'app/navigation/item/template.html',
		controller: Controller,
		bindings: {
		    item: '<',
			onClick: '&'
  		}
	}
})