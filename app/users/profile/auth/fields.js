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
                    'readonly': true,
				},
				'validation': {
					'required': true,
					'trim': true,
				},
				'type': 'email',
			},
            'current_password': {
				'attr': {
					'placeholder': 'Current Password',
					'value': '',
					'class': 'form-control ',
					'id': 'current_password',
					'name': 'current_password',
				},
				'type': 'password',
			},
			'password': {
				'attr': {
					'placeholder': 'New Password',
					'value': '',
					'class': 'form-control ',
					'id': 'password',
					'name': 'password',
				},
				'type': 'password',
                'confirm': true,
			},
		}
	}
})