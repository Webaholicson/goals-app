define(function(require) {
	'use strict';
	
	var ng = require('angular.min');
	
	var Controller = function($firebase) {
    	
		var ctrl = this;
		
		ctrl.title = 'New Goal';
		
		ctrl.fields = {
			label: {
				type: 'text',
				placeholder: 'Label',
				value: '',
				class: 'form-control ',
				id: 'label',
				name: 'label',
				validation: {
					'ng-required': true,
					'ng-trim': true,
				},
				invalid: false,
			}
		};
		
		ctrl.$onInit = function() {
			if (ctrl.goal) {
				ctrl.title = 'Edit Goal: ' + ctrl.goal.name;
			} else {
				ctrl.goal = {
					title: 'New goal title'
				};
			}
		};
		
		ctrl.saveGoal = function(form) {
			if (form.$valid) {
				
			} else {
				ng.forEach(ctrl.fields, function(v) {
					v.invalid = false;
				});
				
				ng.forEach(form.$error, function(v) {
					ng.forEach(v, function(field) {
						ctrl.fields[field.$name].invalid = field.$invalid;
					});
				});
			}
		};
	}
	
	Controller.$inject = ['$firebase'];
	
	return Controller;
});