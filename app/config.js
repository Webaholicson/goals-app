define(function() {
	'use strict';
	
	function Config($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		
		$routeProvider.when('/login', {
			template: '<gt-login $appctrl="$resolve.app"></gt-login>',
			resolve: {
				app: function($rootScope) {
					return $rootScope.$$childHead.$ctrl;
				}
			}
		});
		
		$routeProvider.when('/register', {
			template: '<gt-register></gt-register>'
		});
		
		$routeProvider.when('/forgot-password', {
			template: '<gt-forgot-password></gt-forgot-password>'
		});
		
		$routeProvider.when('/dashboard', {
			template: '<gt-dashboard></gt-dashboard>'
		});
		
		$routeProvider.when('/goal/edit', {
			template: '<gt-goal goal="$resolve.goal" template="edit"></gt-goal>',
			resolve: {
				goal: function($firebase) {
					return $firebase.database().ref('goals');
				}
			}
		});
		
		$routeProvider.when('/goal/edit/:goalid', {
			template: '<gt-goal goal="$resolve.goal" template="edit"></gt-goal>',
			resolve: {
				goal: function($firebase, $routeParams) {
					return $firebase.database()
						.ref('goals/'+$routeParams.goalid);
				}
			}
		});
		
		$routeProvider.when('/goal', {
			template: '<gt-goal template="index"></gt-goal>'
		});
	}
	
	Config.$inject = ['$routeProvider', '$locationProvider'];
	
	return Config;
})