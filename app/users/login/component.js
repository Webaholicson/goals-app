define(['app/users/login/controller'], function(Controller) {
	return {
		controller: Controller,
		templateUrl: 'app/users/login/template.html',
		bindings: {
			$appctrl: '<'
		}
	}
})