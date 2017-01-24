define([], function(){
	var Controller = function($scope, $user, $location) {

		$scope.data = {};

		$scope.user = {};

		$scope.register = function() {
			$user.register(
				$scope.data['email'],
				$scope.data['password']
			).then(function(value) {
		  		
			}, function(error) {
				
			});
		};
	}
	
	Controller.$inject=['$scope', '$user', '$location'];
	
	return Controller;
});