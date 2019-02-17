define(function(require) {
    'use strict';

    return function() {
        var Field = require('app/field/field');
        var PasswordField = new Field();

        PasswordField.type = 'password';

        PasswordField.confirm = false;

        PasswordField.render = function(options) {

            if (typeof options.confirm != 'undefined') {
                this.confirm = options.confirm;
            }

            if (this.confirm) {
                this.element = $('\
                    <div class="form-group" ng-class="{\'has-error\': $ctrl.invalid}"> \
                        <input ng-model-options="{ getterSetter: true }" ng-model="$ctrl.val"/> \
                        <span \
                            ng-show="$ctrl.invalid" \
                            class="help-block"> \
                            {{$ctrl.msg}} \
                        </span> \
                    </div> \
                    <div class="form-group" ng-class="{\'has-error\': $ctrl.invalid}"> \
                        <input ng-model="$ctrl.confirmVal" name="confirm_password" \
                            id="confirm_password" \
                            type="password" \
                            placeholder="Confirm Password" \
                            class="form-control" \
                        /> \
                    </div>'
                );
            }

            for (var key in options) {
                this.setup(key, options[key]);
            }

            if (this.type) {
                this.element.find(this.tagName).attr('type', this.type);
            }

            return this.element;
        };

        return PasswordField;
    }
})
