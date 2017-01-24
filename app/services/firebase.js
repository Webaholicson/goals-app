define(['firebase'], function(fb) {
	'use strict';
	
	function Firebase() {
		var firebaseConfig = {
			apiKey: "AIzaSyAXbI6xPwhwR_S8WA-TcjrOczZ-ThJ7l4U",
			authDomain: "goalsapp-7f7a5.firebaseapp.com",
			databaseURL: "https://goalsapp-7f7a5.firebaseio.com",
			storageBucket: "",
		};
		
		fb.initializeApp(firebaseConfig);
		return fb;
	}
	
	return Firebase;
});