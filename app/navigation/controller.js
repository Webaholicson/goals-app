define([], function() {
	'use strict';
	
	var Controller = function($scope, $user, $location) {
		var ctrl = this;
		
		ctrl.onClick = function(navItem) {
			navItem.events.onclick();
			angular.forEach(ctrl.items, function(item) {
				item.isSelected = false;
			});
			navItem.isSelected = true;
			ctrl.moveSelectedIndicator(navItem);
		};
		
		ctrl.moveSelectedIndicator = function(navItem) {
			var index = ctrl.items.indexOf(navItem);
			var el = $('.nav-item').eq(index);
			var outerWidth = el.outerWidth();
			var innerWidth = el.innerWidth();
			var left = Math.round(outerWidth) * index;
			
			if (navItem.name === 'logout') {
				left = 0;
			}
			
			$('#menu-item-state').animate({ 
				left: left.toString()+"px"
				
			});
		}
		
		ctrl.items = [
			{
				icon: 'glyphicon-home',
				isSelected: true,
				events: {
					onclick: function() {
						return $location.url('/dashboard')
					}
				}
			},
			{
				name: 'new_goal',
				icon: 'glyphicon-plus',
				isSelected: false,
				events: {
					onclick: function() {
						return $location.url('/goal/new')
					}
				}
			},
			{
				name: 'report',
				icon: 'glyphicon-signal',
				isSelected: false,
				events: {
					onclick: function() {
						return $location.url('/goal/new')
					}
				}
			},
			{
				name: 'settings',
				icon: 'glyphicon-wrench',
				isSelected: false,
				events: {
					onclick: function() {
						return $location.url('/settings')
					}
				}
			},
			{
				name: 'profile',
				icon: 'glyphicon-user',
				isSelected: false,
				events: {
					onclick: function() {
						return $location.url('/profile')
					}
				}
			},
			{
				name: 'logout',
				icon: 'glyphicon-lock',
				isSelected: false,
				events: {
					onclick: function() {
						$user.logout().then(function(value) {
							$location.url('/login');
							ctrl.onLogout()
						})
					}
				}
			},
		];
	};
	
	Controller.$inject = ['$scope', '$user', '$location'];
	
	return Controller;
});