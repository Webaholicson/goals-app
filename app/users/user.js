define(function() {
	'use strict';
	
	function UserModel(Model) {
		Model.init('User', 'users', { 
			_fields: ['first_name', 'last_name', 'email', 'location', 'bio']
		});
		
		return Model;
	}
	
	UserModel.$inject = ['$model'];
	
	return UserModel;
})