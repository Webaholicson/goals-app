define(function() {
	'use strict';
	
	function Model($firebase) {
		return {
			_singularName: '',
			
			_refName: '',
			
			_fields: [],
			
			_ref: null,
			
			_data: {},
			
			_id: '',
			
			_saved: false,
			
			init: function(singularName, refName, defaults) {
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
			},
			
			save: function(onSuccess, onError, refId) {
				this._saved = false;
				
				if (!Object.keys(this._data).length) {
					throw 'InvalidData';
				}
				
				if (!this._ref) {
					this._ref = $firebase.database().ref(this._refName);
					if (!refId) {
						this._ref = this._ref.push();
					} else {
						this._ref = this._ref.child(refId);
					}
				}
				
				var that = this;
				this._ref.set(this._data)
					.then(function(res) {
						that._saved = true;
						if (onSuccess) onSuccess(res);
					})
					.catch(function(error) {
						if (onError) onError(error);
					});
					
				return this._ref;
			},
			
			find: function(id) {
				var that = this;
				this._ref = $firebase.database().ref(this._refName+'/'+id);
				return this._ref.once('value')
					.then(function(data) {
						if (data) {
							that._data = data.val();
							that._id = id;
						}
					}).catch(function(error) {
						console.log(error);
					});
			},
			
			delete: function() {
				if (this._ref) {
					return this._ref.remove();
				}
			},
			
			set: function(key, value) {
				if (!key || (!value && typeof key !== 'object')) {
					throw 'InvalidParams';
				}
				
				if (key === 'id') {
					this._id = value;
					this._data.id = value;
					return this;
				}
				
				if (typeof key === 'object') {
					for (var k in key) {
						if (this._fields.indexOf(k) === -1) {
							throw 'InvalidProperty';
						}
						
						this._data[k] = key[k];
					}
					
					return this;
				}
				
				if (this._fields.indexOf(key) === -1) {
					throw 'InvalidProperty';
				}
				
				this._data[key] = value;
				
				return this;
			},
			
			get: function(key) {
				if (!key) {
					return this._data;
				}
				
				return this._data[key] || null;
			},
			
			getFields: function() {
				return this._fields;
			}
		}
	}
	
	Model.$inject = ['$firebase'];
	
	return Model;
});