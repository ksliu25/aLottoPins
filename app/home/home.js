(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$scope','$location','$rootScope', 'BowlersService', 'FlashService', '$routeParams', '$route'];
		function HomeController($scope, $location, $rootScope, BowlersService, FlashService, $routeParams, $route){
			var vm = this;
			vm.$location = $location;
		};

})();