define(['app/navigation/controller'], function(Controller) {
    'use strict';

    return  {
        templateUrl: 'app/navigation/template.html',
        controller: Controller,
        transclude: true,
        bindings: {
            onLogout: '&'
        }
    }
})
