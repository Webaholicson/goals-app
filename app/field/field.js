define(function(require) {
	'use strict';
	
	var $ = require('jquery');
	
	return function() {
		
		this.type = ''
		
		this.tag = '<input />'
		
		this.tagName = 'input';
		
		this.element = $('\
			<div class="form-group" ng-class="{\'has-error\': $ctrl.invalid}"> \
				<input ng-model-options="{ getterSetter: true }" ng-model="$ctrl.val"/> \
				<span \
					ng-show="$ctrl.invalid" \
					class="help-block"> \
					{{$ctrl.msg}} \
				</span> \
			</div>'
		);
		
		this.render = function(options) {
			for (var key in options) {
				this.setup(key, options[key]);
			}
			
			if (this.type) {
				this.element.find(this.tagName).attr('type', this.type);
			}
			
			return this.element;
		};
		
		this.setup = function(key, options) {
			switch (key) {
				case 'attr':
					this.setupAttributes(options);
					break;
					
				case 'validation':
					this.setupValidation(options);
					break;
			}
		};
		
		this.setupAttributes = function(options) {
			var input	= this.element.find(this.tagName);
			var span	= this.element.find('span');
			
			for (var key in options) {
				input.attr(key, options[key]);
				
				if (key === 'id') {
					input.attr('aria-describedby', "help-block-"+options[key]);
					span.attr('id', "help-block-"+options[key]);
				}
			}
		};
		
		this.setupValidation = function(options) {
			var input = this.element.find(this.tagName);
			
			for (var key in options) {
				if (key === 'trim' || key === 'required') {
					input.attr('ng-'+key, options[key]);
				} else {
					input.attr(key, options[key]);
				}
			}
		};
	}
});