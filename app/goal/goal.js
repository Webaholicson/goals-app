define(function() {
    'use strict';

    function GoalModel(Model) {
        return {
            init: function() {
                Model.init('Goal', 'goals', {
                    _fields: ['title', 'description']
                });

                return Model;
            }
        }
    }

    GoalModel.$inject = ['$model'];

    return GoalModel;
})
