define([], function() {
	'use strict';
	
	var Controller = function() {
		var ctrl = this;
		
		ctrl.click = function() {
			ctrl.onClick(ctrl.item);
		}
	};
	
	return Controller;
})