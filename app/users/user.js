define(function() {
	'use strict';
	
	var UserModel = function(Model) {
		return function() {
			var User = new Model('User', 'users');
			User.init({ 
				_fields: ['first_name', 'last_name', 'email', 'password']
			});
			return User;
		}
	}
	
	UserModel.$inject = ['$model'];
	
	return UserModel;
})