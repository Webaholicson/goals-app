define(['angular.min', 'app/goals/controller', 'angular-route'],
	function(ng, GoalCtrl) {
		'use strict';
		
		var GoalModule = ng.module('Goal', ['ngRoute'])
			.controller('GoalCtrl', GoalCtrl)
			.config(function($routeProvider) {
				$routeProvider.when('/goals', {
					'template': 'app/goals/index.html',
					'controller': 'GoalCtrl'
				})
			});
	}
);