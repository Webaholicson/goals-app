define(function() {
	'use strict';
	
	var Controller = function() {
		var ctrl = this;
		
		var hasValidation = false;
		
		ctrl.$doCheck = function() {
			var input = $('#'+ctrl.options.id);
			if (input.length && !hasValidation) {
				for (var key in ctrl.options.validation) {
					//input.attr(key, ctrl.options.validation[key]);
				}
				hasValidation = true;
			}
		}
	}
	
	return Controller;
})