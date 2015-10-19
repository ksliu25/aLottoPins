'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.register',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
	})
  .when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  })
  .otherwise({redirectTo: '/login'});

}]);
