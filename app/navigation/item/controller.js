define([], function() {
	'use strict';
	
	var Controller = function() {
		var ctrl = this;
		
		ctrl.click = function() {
			ctrl.navCtrl.actions[ctrl.action](ctrl);
		}
		
		ctrl.$onInit = function() {
			ctrl.navCtrl.addNavItem(this);
		}
	};
	
	return Controller;
})