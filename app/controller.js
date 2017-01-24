define([], function(){
	'use strict';
	
	var Controller = function($scope, $location, $user) {
		var ctrl = this;
		
		ctrl.$onInit = function() {
			if ($user.isLoggedIn) {
				ctrl.isLoggedIn = true;
				return $location.url('/dashboard');
			}
			
			return $location.url('/login');
		}
		
		ctrl.login = function() {
			ctrl.isLoggedIn = true;
			$scope.$apply();
		}
		
		ctrl.logout = function() {
			ctrl.isLoggedIn = false;
			$scope.$apply()
		}
		
		ctrl.isLoggedIn = false;
	};
	
	Controller.$inject = ['$scope', '$location', '$user'];
	
	return Controller;
});