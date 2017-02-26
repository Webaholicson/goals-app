define(function() {
	'use strict';
	
	var Controller = function($scope, $compile) {
		var ctrl = this;
		
		var hasValidation = false;
		
		ctrl.$doCheck = function() {
			var input = $('#'+ctrl.options.id);
			if (input.length && !hasValidation && ctrl.options.validation) {
				for (var key in ctrl.options.validation) {
					input.attr(key, ctrl.options.validation[key]);
				}
				$compile(input)($scope);
				hasValidation = true;
			}
		}
	}
	
	Controller.$inject = ['$scope', '$compile'];
	return Controller;
})