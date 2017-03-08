define(['app/navigation/item/controller'], function(Controller) {
	'use strict';
	
	return {
		templateUrl: 'app/navigation/item/template.html',
		controller: Controller,
		require: {
			navCtrl: '^gtNav'
		},
		bindings: {
			action: '@',
			icon: '@',
			url: '@',
		}
		
	}
})