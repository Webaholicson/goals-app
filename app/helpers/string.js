define(function() {
	var StringHelper = function() {
		return {
			trim: function(value) {
				return value.replace(/^\s+/, '').replace(/\s+$/, '');
			},
			
			slugify: function(value) {
				return this.trim(value)
					.replace(/\s/, '_')
					.toLowerCase();
			}
		}
	}
	
	return StringHelper;
});