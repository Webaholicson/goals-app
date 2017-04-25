define(['firebase'], function(fb) {
	'use strict';
	
	function Firebase() {
		var firebaseConfig = {
			apiKey: window.localStorage.getItem('api_key'),
			authDomain: window.localStorage.getItem('auth_domain'),
			databaseURL: window.localStorage.getItem('db_url'),
			storageBucket: "",
		};
		
		fb.initializeApp(firebaseConfig);
		return fb;
	}
	
	return Firebase;
});