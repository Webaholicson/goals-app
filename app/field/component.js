define(['app/field/controller'], function(Controller) {
    'use strict';

    return {
        controller: Controller,
        template: '<div id="field-{{$ctrl.fid}}"></div>',
        bindings: {
            model: '<',
            options: '<',
            onInitField: '&',
            fid: '<',
        }
    }
});
