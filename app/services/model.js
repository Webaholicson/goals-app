define(function(require) {
	'use strict';
	
	var Model = function(singularName, refName) {
		
		this._singularName = '';
		
		this._refName = ''
		
		this._fields = [];
		
		this._ref = '';
		
		this._data = {};
		
		this._id = '';
		
		this._saved = false;
		
		this.init = function(defaults) {
			this._singularName = singularName;
			this._refName = refName;
			
			for (var key in defaults) {
				this[key] = defaults[key];
			}
			
			if (!this._fields.length) {
				throw 'EmptyFields';
			}
			
			if (!this._singularName) {
				throw 'InvalidSingularName';
			}
			
			if (!this._refName) {
				throw 'InvalidRefName';
			}
		}
		
		this.save = function(onSuccess, onError) {
			this._saved = false;
			
			if (this._data.length) {
				this._ref = $firebase.db().ref(this._refName).push();
				this._ref.set(this._data)
					.then(function(res) {
						this._saved = true;
						if (onSuccess) onSuccess(res);
					})
					.catch(function(error) {
						if (onError) onError(error);
					});
			}
			
			return this;
		};
		
		this.find = function(id) {
			return $firebase.db().ref(this._refName+'/'+id).once()
				.then(function(data) {
					if (data) {
						this._data = data.val();
					}
				}).catch(function() {
					
				});
		};
		
		this.delete = function() {
			return this._ref.remove();
		};
		
		this.set = function(key, value) {
			if (!key || !value) {
				throw 'InvalidParams';
			}
			
			if (this._fields.indexOf(key) === -1) {
				throw 'InvalidProperty';
			}
			
			this._data[key] = value;
			
			return this;
		};
		
		this.get = function(key) {
			if (!key) {
				return this._data;
			}
			
			return this._data[key] || null;
		};
	}
	
	return function(singularName, refName) {
		var BaseModel = new Model(singularName, refName)
		BaseModel.init();
		return BaseModel;
	}
});