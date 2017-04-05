define(function(require) {
	'use strict';
	
	var ng			= require('angular.min');
	var User		= require('app/users/user');
	var FieldList	= require('app/users/register/fields');
	
	var Controller = function($scope, $user, $location) {
		
		var ctrl = this;
		
		ctrl.registerClass = '';
		
	    ctrl.registerMsg = '';
		
	    ctrl.displayMsg = false;
		
		ctrl.fieldModels = {};
		
		ctrl.model = new User();
		
		ctrl.addField = function(field) {
			ctrl.fieldModels[field.fid] = field
		}
		
		ctrl.fields = new FieldList(),
		
		ctrl.register = function(form, $event) {
			var btn = angular.element(event.target).button('loading');
			
			if (!form.$valid) {
				btn.button('reset');
				ng.forEach(ctrl.fieldModels, function(v) {
					v.invalid = false;
					v.msg = '';
				});
				
				ng.forEach(form.$error, function(v, err) {
					ng.forEach(v, function(field) {
						ctrl.fieldModels[field.$name].invalidate(err);
						return;
					});
				});
				
				return;
			}
			
			$user.register(
				ctrl.model['email'],
				ctrl.model['password']
			).then(function(value) {
		  		
			}, function(error) {
				ctrl.registerClass		= 'alert-danger';
				ctrl.registerMsg		= error.message;
				ctrl.displayMsg			= true;
				$scope.$apply();
				btn.button('reset');
			});
		};
	}
	
	Controller.$inject = ['$scope', '$user', '$location'];
	
	return Controller;
});