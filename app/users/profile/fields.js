define(function() {
	'use strict';
	
	return function() {
		return {
			'first_name': {
				'attr': {
					'placeholder': 'First Name',
					'value': '',
					'class': 'form-control ',
					'id': 'first_name',
					'name': 'first_name',
				},
				'validation': {
					'required': true,
					'trim': true,
				},
				'type': 'text'
			},
			'last_name': {
				'attr': {
					'placeholder': 'Last Name',
					'value': '',
					'class': 'form-control ',
					'id': 'last_name',
					'name': 'last_name',
				},
				'validation': {
					'required': true,
					'trim': true,
				},
				'type': 'text'
			},
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
			},
			'password': {
				'attr': {
					'placeholder': 'Password',
					'value': '',
					'class': 'form-control ',
					'id': 'password',
					'name': 'password',
				},
				'validation': {
					'trim': true,
				},
				'type': 'password'
			}
		}
	}
})