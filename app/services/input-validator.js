define([], function() {
	'use strict';
	
	var InputValidator =  {
		
		rules: {
			required: function(value) {
				return value !== '';
			}
			date: function(date, value) {
				date = new Date(date);
				vaue = new Date(value);
				
				return date.UTC() == value.UTL();
			}
			'date_from': {
				'op': '>='
			},
			'date_to': {
				'op': '<='
			}
		},
			
		init: function(element) {
			this.element = element;
		},
			
		addValidationRule: function(rule, cb) {
			
		},
			
		validateRule: function(rule) {
			if (_this.rules[rule])
		}
	}
	
	return InputValidator;
}