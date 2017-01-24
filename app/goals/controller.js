define([], function() {
	'use strict';
	
	var GoalController = function($scope, firebase) {
    	
		$scope.goal = {};

    	$scope.data = {};
		
	}
	
	GoalController.$inject=['$scope', 'firebase'];
	
	return GoalController;
});