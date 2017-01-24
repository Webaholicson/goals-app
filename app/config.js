define([], function(){
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
		}).when('/register', {
			template: '<gt-register></gt-register>'
		}).when('/forgot-password', {
			template: '<gt-forgot-password></gt-forgot-password>'
		}).when('/dashboard', {
			template: '<gt-dashboard></gt-dashboard>'
		});
	}
	
	Config.$inject = ['$routeProvider', '$locationProvider'];
	
	return Config;
})