define(function() {
	'use strict';
	
	return function() {
		return {
			'email': {
				'attr': {
					'placeholder': 'Email',
					'value': '',
					'class': 'form-control ',
					'id': 'email',
					'name': 'email',
				},
				'validation': {
					'required': true,
					'trim': true,
				},
				'type': 'email'
			}
		}
	}
})