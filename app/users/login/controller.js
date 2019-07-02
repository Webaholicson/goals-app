define(function(require) {
    'use strict';

    var ng          = require('angular.min');
    var FieldList   = require('app/users/login/fields');

    var Controller = function($scope, $location, $user, UserModel) {

        var ctrl = this;

        ctrl.resultClass = '';

        ctrl.resultMsg = '';

        ctrl.displayMsg = false;

        ctrl.fieldModels = {};

        ctrl.model = UserModel.init();

        ctrl.fields = new FieldList();

        ctrl.addField = function(field) {
            ctrl.fieldModels[field.fid] = field
        }

        ctrl.$onInit = function() {
            if ($user.getCurrentUser().uid && $location.search().registered) {
                ctrl.resultClass    = 'alert-success';
                ctrl.resultMsg      = 'An email verification has been sent to your email.';
                ctrl.displayMsg     = true;
            }
        }

        ctrl.authenticate = function(form, $event) {
            var btn = angular.element($event.target).button('loading');

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
                ctrl.model.get('email'),
                ctrl.model.get('password')
            ).then(function() {
                if ($user.isLoggedIn) {
                    ctrl.$appctrl.login();
                    $location.url('/dashboard');
                    $scope.$apply();
                } else {
                    ctrl.resultClass	= 'alert-danger';
                    ctrl.resultMsg		= 'Your email has not yet been verified.';
                    ctrl.displayMsg		= true;
                    btn.button('reset');
                    $scope.$apply();
                }
            }, function(error) {
                ctrl.resultClass	= 'alert-danger';
                ctrl.resultMsg		= error.message;
                ctrl.displayMsg		= true;
                $scope.$apply();
                btn.button('reset');
            });
        }
    }

    Controller.$inject = ['$scope', '$location', '$user', 'UserModel'];

    return Controller;
});
