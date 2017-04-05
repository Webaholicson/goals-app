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
			template: '<gt-goal-edit></gt-goal-edit>'
		});
		
		$routeProvider.when('/goal/edit/:goalid', {
			template: '<gt-goal-edit goal="$resolve.goal"></gt-goal-edit>',
			resolve: {
				goal: function($firebase, $route) {
					return $firebase.database()
						.ref('goals/'+$route.current.params.goalid)
				}
			}
		});
		
		$routeProvider.when('/goal', {
			template: '<gt-goal-list></gt-goal-list>'
		});
		
		$routeProvider.when('/profile', {
			template: '<gt-card><gt-profile user="$resolve.user"></gt-profile></gt-card>',
			resolve: {
				user: function($firebase) {
					var user = $firebase.auth().current;
					return;
				}
			}
		})
	}
	
	Config.$inject = ['$routeProvider', '$locationProvider'];
	
	return Config;
})