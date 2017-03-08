define(function() {
	'use strict';
	
	var Controller = function($scope, $user, $location) {
		var ctrl = this;
		
		var itemSelector = '.nav-item';
		
		ctrl.items = [];
		
		ctrl.currentItem = null;
		
		ctrl.addNavItem = function(item) {
			this.items.push(item);
			
			if (ctrl.currentItem) {
				return;
			}
			
			var index = 0;
			
			if ($location.url() === '/') {
				ctrl.currentItem = ctrl.items[0];
				ctrl.currentItem.isSelected = true;
			}
			
			if ($location.path() === item.url) {
				item.isSelected = true;
				ctrl.currentItem = item;
				index = ctrl.items.indexOf(item);
			}
			
			$(itemSelector).eq(index).css({
				background: 'linear-gradient(#ac2929, #711414);'
			});
		};
		
		ctrl.actions = {
			logout: function(navItem) {
				this.navigate(navItem);
				
				$(itemSelector).eq(0).css({
					background: 'linear-gradient(#ac2929, #711414);'
				});
				
				$user.logout().then(function(value) {
					$location.url('/login');
					ctrl.onLogout();
				})
			},
			
			navigate: function(navItem) {
				angular.forEach(ctrl.items, function(item) {
					item.isSelected = false;
				});
				
				if (navItem.url === '/logout') {
					ctrl.currentItem = ctrl.items[0];
					ctrl.currentItem.isSelected = true;
				} else {
					ctrl.currentItem = navItem;
					navItem.isSelected = true;
					return $location.url(navItem.url);
				}
			},
		};
	};
	
	Controller.$inject = ['$scope', '$user', '$location'];
	
	return Controller;
});