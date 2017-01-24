define([
		'require', 'jquery', 'angular.min', 'angular-route', 'angular-animate',
		'bootstrap.min', 'app/services/firebase', 
		'app/services/user', 'app/config', 'app/component', 
		'app/dashboard/component', 'app/footer/component', 
		'app/header/component', 'app/navigation/component',
		'app/navigation/item/component',
		'app/users/login/component', 'app/users/register/component',
		'app/users/forgotpassword/component', 'app/card/component'
	],
	function(require, $, ng) {
		'use strict';
		
		var FirebaseSrvc = require('app/services/firebase');
		var UserSrvc = require('app/services/user');
		var Config = require('app/config');
		var gtApp = require('app/component');
		var gtHeader = require('app/header/component');
		var gtFooter = require('app/footer/component');
		var gtLogin = require('app/users/login/component');
		var gtRegister = require('app/users/register/component');
		var gtForgotPassword = require('app/users/forgotpassword/component');
		var gtNav = require('app/navigation/component');
		var gtNavItem = require('app/navigation/item/component');
		var gtDashboard = require('app/dashboard/component');
		var gtCard = require('app/card/component');
		
		ng.module('GoalsApp', ['ngRoute', 'ngAnimate'])
			.factory('$firebase', FirebaseSrvc)
			.factory('$user', UserSrvc)
			.component('gtApp', gtApp)
			.component('gtNav', gtNav)
			.component('gtNavItem', gtNavItem)
			.component('gtHeader', gtHeader)
			.component('gtFooter', gtFooter)
			.component('gtLogin', gtLogin)
			.component('gtRegister', gtRegister)
			.component('gtForgotPassword', gtForgotPassword)
			.component('gtDashboard', gtDashboard)
			.component('gtCard', gtCard)
			.config(Config);
	}
);