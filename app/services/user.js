define(function() {
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
				return  this.getCurrentUser().uid;
			},
			
			/**
			 * Retrieves the current user id
			 * @return {firebase.User|Object}
			 */
			getCurrentUser: function() {
				if (this.currentUser.uid) {
					return this.currentUser;
				}
				
				var user = $window.localStorage.getItem('currentUser');
				
				if (user) {
					this.currentUser = JSON.parse(user);
				}
				
				return this.currentUser;
			},
			
			/**
			 * Authenticate the user with Firebase
			 * @param {String} email - The users email address
			 * @param {String} password - The users password
			 * @return {firebase.Promise}
			 */
			authenticate: function(email, password) {
				var parent = this;
				var res = $firebase.auth()
					.signInWithEmailAndPassword(email, password);
				
                res.then(function(user) {
                    if (!user.emailVerified) {
                        return;
                    }
                    
					$window.localStorage.setItem(
						'isLoggedIn', 
						true
					);
					
					parent.currentUser.uid = user.uid;
					parent.currentUser.email = user.email;
                    parent.currentUser.isVerified = user.emailVerified;
					
					$window.localStorage.setItem(
						'currentUser', 
						JSON.stringify(parent.currentUser)
					);
					
					parent.isLoggedIn = true;
				});
                
                return res;
			},
			
			/**
			 * Registers the user on firebase
			 * 
			 * @param {String} email - Users email address
			 * @param {String} password - Users email address
			 * @return {firebase.Promise}
			 */
			register: function(email, password) {
                var parent = this;
				return $firebase.auth()
					.createUserWithEmailAndPassword(email, password)
                    .then(function(user) {
                        user.sendEmailVerification();
                        
                        parent.currentUser.uid = user.uid;
						parent.currentUser.email = user.email;
						
						$window.localStorage.setItem(
							'currentUser', 
							JSON.stringify(parent.currentUser)
						);
                    });
			},
			
			/**
			 * Termintes the users session.
			 * @return firebase.Promise
			 */
			logout: function() {
				var parent = this;
				return $firebase.auth().signOut().then(function(value) {
					$window.localStorage.removeItem('isLoggedIn');
					$window.localStorage.removeItem('uid');
					parent.isLoggedIn = false;
				});
			},
            
            /**
			 * Update the users credential on firebase
			 * 
			 * @param {String} email - Users email address
			 * @param {String} pass - Users current password
             * @param {String} pass - Users new password
			 * @return {firebase.Promise}
			 */
            updateCredentials: function(email, pass, new_pass, success, error) {
                return $firebase.auth()
					.signInWithEmailAndPassword(email, pass)
                    .then(function(user) {
                        var cred = $firebase.Auth.EmailAuthProvider.credential(
                            email,
                            new_pass
                        );
                        
                        return user.reauthenticateWithCredential(cred);
                    });
            }
		}
	};
	
	UserService.$inject = ['$firebase', '$window', '$location'];
	
	return UserService;
});