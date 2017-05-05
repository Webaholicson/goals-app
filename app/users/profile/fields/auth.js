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
            'location': {
				'attr': {
					'placeholder': 'Location',
					'value': '',
					'class': 'form-control ',
					'id': 'location',
					'name': 'location',
				},
				'type': 'text'
			},
            'dob': {
				'attr': {
					'placeholder': 'Date of Birth',
					'value': '',
					'class': 'form-control ',
					'id': 'dob',
					'name': 'dob',
				},
				'validation': {
					'required': true,
					'trim': true,
				},
				'type': 'text'
			},
            'bio': {
				'attr': {
					'placeholder': 'Bio',
					'value': '',
					'class': 'form-control ',
					'id': 'bio',
					'name': 'bio',
				},
				'type': 'textarea'
			},
		}
	}
})