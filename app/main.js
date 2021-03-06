define(function(require) {
    'use strict';

    // Vendors
    var $                   = require('jquery');
    var ng                  = require('angular.min');
    var Router              = require('angular-route');
    var Bootstrap           = require('bootstrap.min');
    var Config              = require('app/config');
    var _                   = require('lodash.min');

    // Services
    var FirebaseSrvc        = require('app/services/firebase');
    var UserSrvc            = require('app/services/user');
    var ModelSrvc           = require('app/services/model');

    // Models
    var UserModel           = require('app/users/user');
    var GoalModel           = require('app/goal/goal');

    // Helpers
    var StringHelper        = require('app/helpers/string');

    // Components
    var gtApp               = require('app/component');
    var gtHeader            = require('app/header/component');
    var gtLogin             = require('app/users/login/component');
    var gtRegister          = require('app/users/register/component');
    var gtForgotPassword    = require('app/users/forgotpassword/component');
    var gtProfile           = require('app/users/profile/component');
    var gtUserInfo          = require('app/users/profile/info/component');
    var gtAuthInfo          = require('app/users/profile/auth/component');
    var gtNav               = require('app/navigation/component');
    var gtNavItem           = require('app/navigation/item/component');
    var gtDashboard         = require('app/dashboard/component');
    var gtCard              = require('app/card/component');
    var gtGoalEdit          = require('app/goal/edit/component');
    var gtField             = require('app/field/component');
	
    // Initialize the app
    ng.module('GoalsApp', ['ngRoute'])
        .factory('$firebase', FirebaseSrvc)
        .factory('$user', UserSrvc)
        .factory('$model', ModelSrvc)
        .factory('$string', StringHelper)
        .factory('UserModel', UserModel)
        .factory('GoalModel', GoalModel)
        .component('gtApp', gtApp)
        .component('gtNav', gtNav)
        .component('gtNavItem', gtNavItem)
        .component('gtHeader', gtHeader)
        .component('gtLogin', gtLogin)
        .component('gtRegister', gtRegister)
        .component('gtForgotPassword', gtForgotPassword)
        .component('gtProfile', gtProfile)
        .component('gtUserInfo', gtUserInfo)
        .component('gtAuthInfo', gtAuthInfo)
        .component('gtDashboard', gtDashboard)
        .component('gtCard', gtCard)
        .component('gtGoalEdit', gtGoalEdit)
        .component('gtField', gtField)
        .config(Config);
});
