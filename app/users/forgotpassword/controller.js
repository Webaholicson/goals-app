define([], function() {
	
	var ForgotPasswordCtrl = function(scope, $firebase) {
	    $scope.data = {};

	    $scope.user = {};

	    $scope.lookup = function() {
	      $scope.user.auth = $firebase.auth().sendPasswordResetEmail(
	        $scope.data['email']
	      );
	    };
	}
	
	ForgotPasswordCtrl.$inject=['$scope', '$firebase'];
	
	return ForgotPasswordCtrl;
});