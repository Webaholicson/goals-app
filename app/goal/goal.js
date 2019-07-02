define(function() {
    'use strict';

    function GoalModel(Model, $user) {
        return {
            init: function() {
                Model.init('Goal', 'goals/'+$user.getCurrentUser().uid, {
                    _fields: ['title', 'description', 'slug']
                });

                return Model;
            }
        }
    }

    GoalModel.$inject = ['$model', '$user'];

    return GoalModel;
})
