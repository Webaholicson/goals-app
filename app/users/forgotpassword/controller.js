define(function(require) {
    'use strict';

    var ng			= require('angular.min');
    var FieldList	= require('app/users/forgotpassword/fields');

    var ForgotPasswordCtrl = function($scope, $firebase, UserModel) {

        var ctrl = this;

        ctrl.resultClass = '';

        ctrl.resultMsg = '';

        ctrl.displayMsg = false;

        ctrl.fieldModels = {};

        ctrl.model = UserModel;

        ctrl.fields = new FieldList();

        ctrl.addField = function(field) {            
            ctrl.fieldModels[field.fid] = field
        }

        ctrl.lookup = function(form, $event) {
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

            $firebase.auth().sendPasswordResetEmail(
                ctrl.model.get('email')
            ).then(function(res) {
                ctrl.resultClass    = 'alert-danger';
                ctrl.resultMsg      = error.message;
                ctrl.displayMsg     = true;
                $scope.$apply();
                btn.button('reset');
            }, function(error) {
                ctrl.resultClass    = 'alert-danger';
                ctrl.resultMsg      = error.message;
                ctrl.displayMsg     = true;
                $scope.$apply();
                btn.button('reset');
            });
        };
    }

    ForgotPasswordCtrl.$inject = ['$scope', '$firebase', 'UserModel'];

    return ForgotPasswordCtrl;
});
