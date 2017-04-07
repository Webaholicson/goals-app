define(function(require) {
	'use strict';
	
	var ng = require('angular.min');
	
	var Controller = function($firebase, $string, $scope) {
    	
		var ctrl = this;
		
		ctrl.title = 'New Goal';
		
		ctrl.goalSaved = false;
		
		ctrl.goalMessage = '';
		
		ctrl.fieldModels = {},
		
		ctrl.fields = {
			'title': {
				'type': 'text',
				'attr': {
					'placeholder': 'Title',
					'value': '',
					'class': 'form-control ',
					'id': 'title',
					'name': 'title',
				},
				'validation': {
					'required': true,
					'trim': true,
				},
			},
			
			'description': {
				'type': 'textarea',
				'attr': {
					'placeholder': 'Description',
					'class': 'form-control ',
					'id': 'description',
					'name': 'description',
					'rows': "5",
				}
			}
		};
		
		ctrl.addField = function(fieldModel) {
			ctrl.fieldModels[fieldModel.fid] = fieldModel;
		};
		
		ctrl.$onInit = function() {
			if (ctrl.goal && ctrl.goal.path) {
				ctrl.goal.once('value').then(function(goal) {
					ctrl.goal = goal.val();
					ctrl.title = 'Edit Goal: ' + ctrl.goal.title;
					$scope.$apply();
				});
				
				return;
			}
			
			ctrl.goal = {
				id: null,
				title: '',
				description: '',
				schedule: {},
			};
		};
		
		ctrl.saveGoal = function(form) {
			if (!form.$valid) {
				ng.forEach(ctrl.fields, function(v) {
					v.invalid = false;
					v.errorMsg = '';
				});
				
				ng.forEach(form.$error, function(v, err) {
					ng.forEach(v, function(field) {
						var key = 'ng-'+err;
						var error = ctrl.fields[field.$name].validation[key].msg;
							
						ctrl.fields[field.$name].errorMsg = error;
						ctrl.fields[field.$name].invalid = field.$invalid;
						return;
					});
				});
				
				return;
			}
			
			if (!ctrl.goal.id) {
				ctrl.goal.id = $string.slugify(ctrl.goal.title);
				var goal = $firebase.database().ref('goals/'+ctrl.goal.id);
				goal.set(ctrl.goal).then(function() {
					ctrl.goalSaved = true;
					ctrl.goalMessage = 'Goal saved!';
					form.$setPristine();
					form.$setUntouched();
					document.getElementsByTagName('form')[0].reset();
					$scope.$apply();
				}).catch(function(error) {
					ctrl.goalMessage = 'Goal not saved: '+error;
					$scope.$apply();
				});
				
				return;
			}
			
			var goal = $firebase.database().ref('goals/'+ctrl.goal.id);
			goal.set(ctrl.goal);
		};
	}
	
	Controller.$inject = ['$firebase', '$string', '$scope'];
	
	return Controller;
});