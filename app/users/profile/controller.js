define(function() {
	var Controller = function($scope) {
		var ctrl = this;
		
		ctrl.title = 'Profile';
		
		ctrl.$onInit = function() {
			ctrl.user.once('value').then(function(user) {
				ctrl.user = user.val();
				$scope.$apply();
			});
		}
	}
	
	Controller.$inject = ['$scope']
	
	return Controller;
});