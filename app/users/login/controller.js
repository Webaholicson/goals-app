define([], function() {
	'use strict';
	
	var Controller = function($scope, $location, $user) {
		
		var ctrl = this;
		
	    ctrl.user = {};
		
	    ctrl.data = {};
		
		ctrl.loginClass = '';
		
	    ctrl.loginMsg = '';
		
	    ctrl.displayMsg = false;
		
	    ctrl.loginAttempted = false;
		
	    ctrl.authenticate = function(form, $event) {
			ctrl.loginAttempted = true;

			if (!form.$valid) {
				return false;
			}
			
			var btn = angular.element(event.target).button('loading');
			
			$user.authenticate(
				ctrl.data['email'],
				ctrl.data['password']	
			).then(function(value) {
				ctrl.user = angular.copy(ctrl.data);
				ctrl.reset();
				ctrl.$appctrl.login();
				$location.url('/dashboard');
				$scope.$apply();
			}, function(reason) {
				ctrl.loginClass	= 'alert-danger';
				ctrl.loginMsg     = 'Invalid username or password.';
				ctrl.displayMsg   = true;
				$scope.$apply();
				btn.button('reset');
			});
		};
		
		ctrl.reset = function(form, btn) {
			if (form) {
				form.$setPristine();
				form.$setUntouched();
			}

			if (btn) {
				btn.button('reset');
			}

			ctrl.displayMsg = false;
			ctrl.data = {};
			ctrl.user = {};
		};
	}
	
	Controller.$inject = ['$scope', '$location', '$user'];
	
	return Controller;
});