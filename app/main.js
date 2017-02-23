define(function(require) {
	'use strict';
	
	var $ 					= require('jquery');
	var ng 					= require('angular.min');
	var Router 				= require('angular-route');
	var Bootstrap 			= require('bootstrap.min');
	var Config 				= require('app/config');
	
	var FirebaseSrvc 		= require('app/services/firebase');
	var UserSrvc 			= require('app/services/user');
	
	var gtApp 				= require('app/component');
	var gtHeader 			= require('app/header/component');
	var gtFooter 			= require('app/footer/component');
	var gtLogin 			= require('app/users/login/component');
	var gtRegister 			= require('app/users/register/component');
	var gtForgotPassword 	= require('app/users/forgotpassword/component');
	var gtNav 				= require('app/navigation/component');
	var gtNavItem 			= require('app/navigation/item/component');
	var gtDashboard 		= require('app/dashboard/component');
	var gtCard 				= require('app/card/component');
	var gtGoal 				= require('app/goal/component');
	var gtInput				= require('app/form/input/component');
	
	ng.module('GoalsApp', ['ngRoute'])
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
		.component('gtGoal', gtGoal)
		.component('gtInput', gtInput)
		.config(Config);
});