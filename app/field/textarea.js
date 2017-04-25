define(function(require) {
	'use strict';
	
	return function() {
		var Field = require('app/field/field');
		var TextareaField = new Field();
		
		TextareaField.tag = '<textarea></textarea>';
		
		TextareaField.tagName = 'textarea';
		
		TextareaField.element = $('\
			<div class="form-group" ng-class="{\'has-error\': $ctrl.invalid}"> \
				<textarea ng-model-options="{ getterSetter: true }" ng-model="$ctrl.val"></textarea> \
				<span \
					ng-show="$ctrl.invalid" \
					class="help-block"> \
					{{$ctrl.msg}} \
				</span> \
			</div>'
		);
		
		return TextareaField;
	}
})