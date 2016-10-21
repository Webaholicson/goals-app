var UserModule = angular.module('User', []);

UserModule.controller('LoginController', ['$scope', 'firebase',
  function($scope, firebase) {
    $scope.user = {};

    $scope.data = {};

    $scope.loginResult = '';

    $scope.loginMsg = '';

    $scope.displayMsg = false;

    $scope.loginAttempted = false;

    $scope.authenticate = function(form, $event) {
      $scope.loginAttempted = true;

      if (!form.$valid) {
        return false;
      }

      var btn = angular.element(event.target).button('loading');

      var user = firebase.auth().signInWithEmailAndPassword(
        $scope.data['email'],
        $scope.data['password']
      );

      console.log(user);

      user.then(function(value) {
        $scope.user = angular.copy($scope.data);
        $scope.reset();
      }, function(reason) {
        $scope.loginResult  = 'alert-danger';
        $scope.loginMsg     = reason.message;
        $scope.displayMsg   = true;
        btn.button('reset');
      });
    };

    $scope.reset = function(form, btn) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }

      if (btn) {
        btn.button('reset');
      }

      $scope.displayMsg = false;

      $scope.data = {};
      $scope.user = {};
    };
  }
]);

UserModule.controller('RegisterController', ['$scope', 'firebase',
  function($scope, firebase) {
    $scope.data = {};

    $scope.user = {};

    $scope.register = function() {
      $scope.user.auth = firebase.auth().createUserWithEmailAndPassword(
        $scope.data['email'],
        $scope.data['password']
      );

      $scope.user.data = firebase.database()
        .ref('users/'+user.email)
        .set($scope.data);
    };
  }
]);
