'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
	})
  .when('/view2', {
    templateUrl: 'register/view2.html',
    controller: 'View2Ctrl'
  })
  .otherwise({redirectTo: '/login'});

}]);
