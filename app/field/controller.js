define(function(require) {
	'use strict';
	
	var TextField = require('app/field/text');
	var PasswordField = require('app/field/password');
	var EmailField = require('app/field/email');
	var TextareaField = require('app/field/textarea');
	
	var Controller = function($scope, $compile) {
		
        var _val = '';
        
		var ctrl = this;
		
        var validationMsg = {
            'required':          'This field is required',
            'minlength':         'The minimum length for this field is %d',
            'maxlength':         'The maximum length for this field is %d',
            'email':             'Please enter a valid email address.',
            'password_match':    'The password fields do not match.',
        };
		
		var rendered = false;
        
        var field = null;
		
		ctrl.invalid = false;
		
		ctrl.msg = '';
		
        ctrl.confirmVal = null;
        
		ctrl.val = function(newValue) {
			if (arguments.length) {
				ctrl.model.set(ctrl.fid, newValue);
			}
            
            if (!ctrl.model) {
                return '';
            }
            
			return ctrl.model.get(ctrl.fid);
		}
		
		ctrl.$onInit = function() {
			if (!ctrl.type && ctrl.options.type) {
				ctrl.type = ctrl.options.type
			}
			
			ctrl.onInitField({fieldModel: ctrl});
		}
		
		ctrl.$doCheck = function() {
			var element = $('#field-'+ctrl.fid);

			if (element.length && !rendered) {
				element.append(ctrl.render());
				$compile(element)($scope);
				rendered = true;
			}
		}
		
		ctrl.render = function() {
			switch (ctrl.options.type) {
				case 'text':
					field = new TextField();
					break;
				case 'email':
					field = new EmailField();
					break;
				case 'password':
					field = new PasswordField();
					break;
				case 'textarea':
					field = new TextareaField();
					break;
			}
			
			if (field) {
				return field.render(ctrl.options);
			}
			
			return '';
		}
		
		ctrl.invalidate = function(error) {
            //field.invalidate(error);
			ctrl.invalid = true;
			ctrl.msg = validationMsg[error];
		}
		
        ctrl.reset = function() {
            ctrl.invalid = false;
    		ctrl.msg = '';
            ctrl.confirmVal = null;
            ctrl.val('');
        }
        
        ctrl.$onDestroy = function() {
            ctrl.reset();
        }
	}
	
	Controller.$inject = ['$scope', '$compile'];
	
	return Controller;
});