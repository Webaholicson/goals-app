define(function() {
	'use strict';
	
	function GoalModel(Model) {
		Model.init('Goal', 'goals', { 
			_fields: ['title', 'description']
		});
		
		return Model;
	}
	
	GoalModel.$inject = ['$model'];
	
	return GoalModel;
})