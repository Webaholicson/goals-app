define(function(require) {
	'use strict';
	
	return function() {
		var Field = require('app/field/field');
		var PasswordField = new Field();
		
		PasswordField.type = 'password';
		return PasswordField;
	}
})