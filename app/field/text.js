define(function(require) {
	'use strict';
	
	return function() {
		var Field = require('app/field/field');
		var TextField = new Field();
		
		TextField.type = 'text';
		return TextField;
	}
})