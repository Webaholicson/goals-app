define(function() {
    var StringHelper = function() {
        return {
            trim: function(value) {
                return _.trim(value);
            },

            slugify: function(value) {
                return _.toLower(_.replace(_.trim(value), /\s/g, '_'));
            }
        }
    }

    return StringHelper;
});
