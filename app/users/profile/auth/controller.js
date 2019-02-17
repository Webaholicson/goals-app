define(function(require) {
    'use strict';

    var ng			= require('angular.min');
    var FieldList	= require('app/users/profile/auth/fields');

    var Controller = function($scope, $user, $firebase) {

        var ctrl = this;

        ctrl.fieldModels = {};

        ctrl.fields = new FieldList();

        ctrl.heading = 'Authentication';

        ctrl.addField = function(field) {
            ctrl.fieldModels[field.fid] = field
        }

        ctrl.save = function(form, $event) {
            var btn = ng.element(event.target).button('loading');

            if (form.password.$modelValue !== form.confirm_password.$modelValue) {
                form.$setValidity('password_match', false, form.password);
            } else {
                form.$setValidity('password_match', true, form.password);
                ctrl.fieldModels['password'].invalid = false;
            }

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

            $user.authenticate(
                form.email.$modelValue, 
                form.current_password.$modelValue
            ).then(function(user) {
                user.updatePassword(form.password.$modelValue)
                    .then(function() {
                        ctrl.resultClass	= 'alert-success';
                        ctrl.resultMsg		= 'Your credentials has been updated.';
                        ctrl.displayMsg 	= true;

                        ctrl.onUpdate({section: ctrl});
                        btn.button('reset');
                    }).catch(function(error) {
                        ctrl.resultClass	= 'alert-danger';
                        ctrl.resultMsg		= error.message;
                        ctrl.displayMsg 	= true;

                        ctrl.onUpdate({section: ctrl});
                        btn.button('reset');
                    });
            }).catch(function (error) {
                ctrl.resultClass	= 'alert-danger';
                ctrl.resultMsg		= error.message;
                ctrl.displayMsg 	= true;

                ctrl.onUpdate({section: ctrl});
                btn.button('reset');
            });
        }
    }

    Controller.$inject = ['$scope', '$user', '$firebase'];

    return Controller;
});
