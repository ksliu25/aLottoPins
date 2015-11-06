(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$scope','$location','$rootScope', 'BowlersService', 'FlashService', '$routeParams', '$route'];
		function HomeController($scope, $location, $rootScope, BowlersService, FlashService, $routeParams, $route){
			var vm = this;
			vm.$location = $location;
			// vm.isActive = isActive;

			// vm.items = [
			//       {path: '/login', title: 'login'},
			//       {path: '/register', title: 'register'},
			//     ];

			// function isActive(item){
	  //     if (item.path == $location.path()) {
	  //       return true;
	  //     }
	  //     return false;	
			// }

		};

})();