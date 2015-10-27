(function(){
  'use strict';

// Declare app level module which depends on views, and components
  angular
    .module('myApp', [
      'ngCookies',
      'ngRoute',
      'ngResource',
      'myApp.version'
    ])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/bowlers/:bowlerId', {
              templateUrl: 'home/bowlershow.view.html',
              controller: 'HomeController',
              controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'login/login.view.html',
        controller: 'LoginController',
        controllerAs: 'vm'
    	})
      .when('/register', {
        templateUrl: 'register/register.view.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/login'});

  }

  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http) {
    // keep user logged in, thanks jason Watmore!!
    $rootScope.globals = $cookies.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login if not logged in and trying to acess restricted path
      var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');
      }
    });
  }

})();