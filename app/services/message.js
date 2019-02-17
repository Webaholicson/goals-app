define(function() {
    'use strict';

    /**
     * MessageService constructor function
     * 
     * @constructor
     * @return {Object} - The Message Service
     */
    function MessageService() {
        return {
            /**
             * @type Array
             * Messages container array
             */
            _messages: [],

            /**
             * Add a message.
             *
             * @param {Object} message - The message object to be added
             * @return {Object}
             */
            addMessage: function(type, message) {
                this._messages[type].push(message);
                return this;
            },

            /**
             * Remove a message.
             *
             * @param {Number} index - Index of te message to be removed
             * @return {Object}
             */
            removeMessage: function(index) {
                this._messages.splice(index, 1);
                return this;
            }

            /**
             * Retrieve all messages.
             *
             * @return {Array}
             */
            getMessages: function() {
                var messages = this._messages;
                for (var key in this._messages) {
                    if (this._messages[key].isFlash) {
                        this._messages.splice(key, 1);
                    }
                }

                return messages;
            }
    };

    return MessageService;
});
