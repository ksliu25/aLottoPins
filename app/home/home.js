(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$rootScope', 'BowlersService', 'FlashService', '$routeParams'];
		function HomeController($rootScope, BowlersService, FlashService, $routeParams){
			var vm = this;
			// vm.globals = $rootScope.globals;
			// vm.loggedIn = true;

			// console.log(vm.globals);

		};



})();