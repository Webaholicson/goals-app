define([], function() {
	'use strict';
	
	var ForgotPasswordCtrl = function(scope, $firebase) {
		var ctrl = this;
		
	    ctrl.data = {};

	    ctrl.user = {};

	    ctrl.lookup = function() {
	      $scope.user.auth = $firebase.auth().sendPasswordResetEmail(
	        $scope.data['email']
	      );
	    };
	}
	
	ForgotPasswordCtrl.$inject=['$scope', '$firebase'];
	
	return ForgotPasswordCtrl;
});