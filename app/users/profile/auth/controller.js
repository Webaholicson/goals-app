define(function(require) {
    'use strict';

    var ng			= require('angular.min');
    var FieldList	= require('app/users/profile/auth/fields');

    var Controller = function($scope, $user, UserModel) {

        var ctrl = this;

        ctrl.fieldModels = {};

        ctrl.fields = new FieldList();

        ctrl.heading = 'Authentication';

        ctrl.addField = function(field) {
            ctrl.fieldModels[field.fid] = field
        }
		
		ctrl.save = function(form, $event) {
			var btn = ng.element(event.target).button('loading');
			
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
            
			ctrl.model.save(function(res) {
				ctrl.resultClass	= 'alert-success';
				ctrl.resultMsg		= 'Your profile has been updated.';
				ctrl.displayMsg 	= true;
				$scope.$apply();
				btn.button('reset');
			}, function(res) {
				$scope.$apply();
				btn.button('reset');
			});
		}
	}
	
	Controller.$inject = ['$scope', '$user', 'UserModel'];
	
	return Controller;
});