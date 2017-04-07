define([], function() {
	'use strict';
	
	/**
	 * UserService constructor function
	 * 
	 * @constructor
	 * @param {Firebase} $firebase - The Firebase service
	 * @param {Object} $window - The Angular window service
	 * @param {Object} $location - The Angular location service
	 * @return {Object} - The User Service
	 */
	function UserService($firebase, $window, $location) {
		return {
			/**
			 * Current User object
			 */
			currentUser: {
				uid: 0
			},
			
			/**
			 * Flag if the user is authenticated with firebase
			 */
			isLoggedIn: $window.localStorage.getItem('isLoggedIn') || false,
			
			/**
			 * Retrieves the current user id
			 * @return {Number}
			 */
			getCurrentUserId: function() {
				return  this.currentUser.uid || false;
			},
			
			/**
			 * Authenticate the user with Firebase
			 * @param {String} email - The users email address
			 * @param {String} password - The users password
			 * @return {firebase.Promise}
			 */
			authenticate: function(email, password) {
				var parent = this;
				return $firebase.auth()
					.signInWithEmailAndPassword(email, password)
					.then(function(value) {
						$window.localStorage.setItem(
							'isLoggedIn', 
							true
						);
						parent.isLoggedIn = true;
						parent.currentUser = value;
					});
			},
			
			/**
			 * Registers the user on firebase
			 * 
			 * @param {String} email - Users email address
			 * @param {String} password - Users email address
			 * @return {firebase.Promise}
			 */
			register: function(email, password) {
				return $firebase.auth()
					.createUserWithEmailAndPassword(email, password);
			},
			
			/**
			 * Termintes the users session.
			 * @return firebase.Promise
			 */
			logout: function() {
				var parent = this;
				return $firebase.auth().signOut().then(function(value) {
					$window.localStorage.removeItem('isLoggedIn');
					parent.isLoggedIn = false;
				});
			},
		}
	};
	
	UserService.$inject = ['$firebase', '$window', '$location'];
	
	return UserService;
});