define(function(require) {
    'use strict';

    var ng = require('angular.min');

    var Controller = function($scope, $user, UserModel) {

        var ctrl = this;

        ctrl.resultClass = '';

        ctrl.resultMsg = '';

        ctrl.displayMsg = false;

        ctrl.model = UserModel.init();

        ctrl.title = 'Profile';

        ctrl.$onInit = function() {
            if (ctrl.user) {
                ctrl.user.once('value').then(function(user) {
                    ctrl.model.set(user.val());
                    $scope.$apply();
                });
            } else {
                ctrl.model.set('email', $user.getCurrentUser().email);
            }
        }
        
        ctrl.onUpdate = function(section) {
            ctrl.resultClass    = section.resultClass;
            ctrl.resultMsg      = section.resultMsg;
            ctrl.displayMsg     = section.displayMsg;
            $scope.$apply();
        }
	}
	
	Controller.$inject = ['$scope', '$user', 'UserModel'];
	
	return Controller;
});