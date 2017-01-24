define([], function() {
	var Controller = function($animate) {
		
		var ctrl = this;
		
		ctrl.title = '';
		
		ctrl.icon = '';
		
		ctrl.description = '';
		
		ctrl.$onInit = function() {
			$('.slide').fadeIn();
		};
	}
	
	Controller.$inject = ['$animate'];
	
	return Controller;
});