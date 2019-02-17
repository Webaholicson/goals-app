define(function(require) {
    'use strict';

    var ng = require('angular.min');

    var Controller = function() {

        var ctrl = this;

        ctrl.title = 'New Goal';

        ctrl.$init = function() {
            ctrl.goals.once('value').then(function(goals){
                ctrl.goals = goals.val();
            })
        };
    }

    return Controller;
});
