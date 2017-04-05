define(function(require) {
	'use strict';
	
	return function() {
		var Field = require('app/field/field');
		var TextareaField = new Field();
		
		TextareaField.tag = '<textarea></textarea>';
		
		TextareaField.tagName = 'textarea';
		
		TextareaField.element = $('\
			<div class="form-group" ng-class="{\'has-error\': $ctrl.invalid}"> \
				<textarea ng-model="$ctrl.model[$ctrl.fid]"></textarea> \
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