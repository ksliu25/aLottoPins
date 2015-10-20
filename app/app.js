'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngCookies',
    'ngRoute',
    'myApp.login',
    'myApp.register',
    'myApp.version'
  ])
  .config(config)
  // .run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'loginform'
  	})
    .when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'registerform'
    })
    .otherwise({redirectTo: '/login'});

}
