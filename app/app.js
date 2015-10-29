(function(){
  'use strict';

// Declare app level module which depends on views, and components
  angular
    .module('myApp', [
      'ngCookies',
      'ngRoute',
      'ui.router',
      'myApp.version'
    ])
    .config(config)
    .run(run);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login/login.view.html',
        controller: 'LoginController',
        controllerAs: 'vm'
    	})
      .state('register', {
        url: '/register',
        templateUrl: 'register/register.view.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      })
      .state('bowlersadd', {
        url: '/bowlers/add',
        templateUrl: 'home/bowleradd.view.html',
        controller: 'BowlerController',
        controllerAs: 'vm'
      })
      .state('bowlersshow', {
        url: '/bowlers/:bowlerId',
        templateUrl: 'home/bowlershow.view.html',
        controller: 'BowlerController',
        controllerAs: 'vm'
      })
      .state('leagues', {
        url: '/leagues',
        templateUrl: 'home/home.view.html',
        controller: 'LeagueController',
        controllerAs: 'vm'
      })
      .state('leaguesadd', {
        url: '/leagues/add',
        templateUrl: 'home/leagueadd.view.html',
        controller: 'LeagueController',
        controllerAs: 'vm'
      })
      .state('leaguesshow', {
        url: '/leagues/:leagueId',
        templateUrl: 'home/leagueshow.view.html',
        controller: 'LeagueDetailsController',
        controllerAs: 'vm'
      })

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