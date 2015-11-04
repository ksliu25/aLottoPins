(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['BowlersService', 'FlashService', '$routeParams'];
		function HomeController(BowlersService, FlashService, $routeParams){
			var vm = this;

		}



})();