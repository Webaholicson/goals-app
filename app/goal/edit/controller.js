define(function(require) {
	'use strict';
	
    var ng			= require('angular.min');
    var calendar    = require('fullcalendar.min');
    var FieldList	= require('app/goal/edit/fields');
	
	var Controller = function($location, $string, $scope, GoalModel) {
    	
		var ctrl = this;
        
        var calRendered = false;
		
		ctrl.title = 'New Goal';
		
		ctrl.goalSaved = false;
		
		ctrl.goalMessage = '';
		
		ctrl.fieldModels = {};
        
        ctrl.model = GoalModel.init();
		
		ctrl.fields = new FieldList();
		
		ctrl.addField = function(fieldModel) {
			ctrl.fieldModels[fieldModel.fid] = fieldModel;
		};
		
		ctrl.$onInit = function() {
            
			if (ctrl.goal && ctrl.goal.path) {
				ctrl.goal.once('value').then(function(goal) {
					ctrl.title = 'Edit Goal: ' + goal.title;
                    ctrl.model.set(goal.val());
                    $scope.$apply();
				}).catch(function() {
                    $location.url('/goal/edit');
                    $scope.$apply();
                });
				
				return;
			}
		}
        
        ctrl.$doCheck = function() {
            if (calRendered) {
                return;
            }
            
            var calEl = ng.element('#calendar');
            
            if (calEl.length) {
                calEl.fullCalendar();
                calRendered = true;
            }
        }
		
		ctrl.saveGoal = function(form) {
			if (!form.$valid) {
				ng.forEach(ctrl.fields, function(v) {
					v.invalid = false;
					v.errorMsg = '';
				});
				
				ng.forEach(form.$error, function(v, err) {
					ng.forEach(v, function(field) {
						var key = 'ng-'+err;
						var error = ctrl.fields[field.$name].validation[key].msg;
							
						ctrl.fields[field.$name].errorMsg = error;
						ctrl.fields[field.$name].invalid = field.$invalid;
						return;
					});
				});
				
				return;
			}
			
			if (!ctrl.model.get('id')) {
				ctrl.model.set('id', $string.slugify(ctrl.model.get('title')));
				ctrl.model.save(function() {
					ctrl.goalSaved = true;
					ctrl.goalMessage = 'Goal saved!';
                    document.getElementsByTagName('form')[0].reset();
					form.$setPristine();
					form.$setUntouched();
					$scope.$apply();
				}, function(error) {
					ctrl.goalMessage = 'Goal not saved: '+error;
					$scope.$apply();
				});
				
				return;
			}
		}
	}
	
	Controller.$inject = [
        '$location', 
        '$string', 
        '$scope',  
        'GoalModel'
    ];
	
	return Controller;
});