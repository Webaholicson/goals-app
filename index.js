requirejs(['config'], function (config) {
    requirejs(['angular.min', 'app/main'], function(ng) {
		ng.bootstrap(document, ['GoalsApp']);
	});
});
