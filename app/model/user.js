define(['app/model/core'], function(Model) {
    'use strict';

    function UserModel() {
        var model = new Model();

        model.init('User', 'users', {
            _fields: [
                'first_name',
                'last_name',
                'email',
                'dob',
                'location',
                'bio'
            ]
        });

        return model;
    }

    return UserModel;
})
