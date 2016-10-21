var firebaseConfig = {
  apiKey: "AIzaSyAXbI6xPwhwR_S8WA-TcjrOczZ-ThJ7l4U",
  authDomain: "goalsapp-7f7a5.firebaseapp.com",
  databaseURL: "https://goalsapp-7f7a5.firebaseio.com",
  storageBucket: "",
};

firebase.initializeApp(firebaseConfig);

var GoalsApp = angular.module('GoalsApp', ['User']);

GoalsApp.factory('firebase', function() {
  return firebase;
});
