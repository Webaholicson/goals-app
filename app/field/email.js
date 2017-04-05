define(function(require) {
	'use strict';
	
	return function() {
		var Field = require('app/field/field');
		var EmailField = new Field();
		
		EmailField.type = 'email';
		return EmailField;
	}
})