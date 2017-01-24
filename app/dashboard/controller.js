define([], function() {
	'use strict';
	
	function Controller($animate) {
		var ctrl = this;
		
		ctrl.cards = [];
		
		ctrl.addCard = function(card) {
			this.cards.push(card);
		}
		
		ctrl.addCards = function(cards) {
			for (var i = 0; i < cards.length; i++) {
				ctrl.addCard(cards[i]);
			}
		}
		
		ctrl.$onInit = function() {
			this.addCards([
				{
					title: 'Goal Title',
					icon: 'glyphicon-star',
					description: 'Lorem ipsum dolor sit amet, consectetur \
					adipiscing elit. Nulla quis interdum enim. Curabitur a \
					magna nec ipsum commodo ultrices. Nullam blandit justo eu \
					ultricies laoreet.'
				}
			]);
		}
	};
	
	return Controller;
});