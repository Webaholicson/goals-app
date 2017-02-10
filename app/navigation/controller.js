define([], function() {
	'use strict';
	
	var Controller = function($scope, $user, $location) {
		var ctrl = this;
		
		var itemSelector = '.nav-item';
		
		ctrl.onClick = function(navItem) {
			navItem.events.onclick();
			
			angular.forEach(ctrl.items, function(item) {
				item.isSelected = false;
			});
			
			if (navItem.name === 'logout') {
				ctrl.items[0].isSelected = true;
			} else {
				navItem.isSelected = true;
			}
		};
		
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
				name: 'edit_goal',
				icon: 'glyphicon-plus',
				isSelected: false,
				events: {
					onclick: function() {
						return $location.url('/goal/edit')
					}
				}
			},
			{
				name: 'report',
				icon: 'glyphicon-signal',
				isSelected: false,
				events: {
					onclick: function() {
						return $location.url('/reports')
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
		
		ctrl.$onInit = function() {
			$(itemSelector).eq(0).css({
				background: 'linear-gradient(#ac2929, #711414);'
			})
		}
	};
	
	Controller.$inject = ['$scope', '$user', '$location'];
	
	return Controller;
});