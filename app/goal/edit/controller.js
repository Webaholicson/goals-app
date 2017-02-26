define(function(require) {
	'use strict';
	
	var ng = require('angular.min');
	
	var Controller = function($firebase, $string, $scope) {
    	
		var ctrl = this;
		
		ctrl.title = 'New Goal';
		
		ctrl.goalSaved = false;
		
		ctrl.goalMessage = '';
		
		ctrl.fields = {
			title: {
				type: 'text',
				placeholder: 'Title',
				value: '',
				class: 'form-control ',
				id: 'title',
				name: 'title',
				validation: {
					'ng-required': true,
					'ng-trim': true,
				},
				invalid: false,
				errorMsg: 'This field is required.',
			},
			
			description: {
				placeholder: 'Description',
				text: '',
				class: 'form-control ',
				id: 'description',
				name: 'description',
				rows: "5",
				validation: null,
				invalid: false,
				errorMsg: '',
			}
		};
		
		ctrl.$onInit = function() {
			if (ctrl.goal && ctrl.goal.path) {
				ctrl.goal.once('value').then(function(goal) {
					ctrl.goal = goal.val();
					ctrl.title = 'Edit Goal: ' + ctrl.goal.title;
					$scope.$apply();
				});
			} else {
				ctrl.goal = {
					id: null,
					title: '',
					description: '',
					schedule: {},
				};
			}
		};
		
		ctrl.saveGoal = function(form) {
			if (form.$valid) {
				if (!ctrl.goal.id) {
					ctrl.goal.id = $string.slugify(ctrl.goal.title);
					var goal = $firebase.database().ref('goals/'+ctrl.goal.id);
					goal.set(ctrl.goal).then(function() {
						ctrl.goalSaved = true;
						ctrl.goalMessage = 'Goal saved!';
					}).catch(function(error) {
						ctrl.goalMessage = 'Goal not saved: ';
					});;
				} else {
					var goal = $firebase.database().ref('goals/'+ctrl.goal.id);
					goal.set(ctrl.goal);
				}
			} else {
				ng.forEach(ctrl.fields, function(v) {
					v.invalid = false;
				});
				
				ng.forEach(form.$error, function(v) {
					ng.forEach(v, function(field) {
						console.log(field);
						ctrl.fields[field.$name].invalid = field.$invalid;
					});
				});
			}
		};
	}
	
	Controller.$inject = ['$firebase', '$string', '$scope'];
	
	return Controller;
});