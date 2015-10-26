(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('BowlersService', BowlersService);

		BowlersService.$inject = ['$http'];
		function BowlersService($http) {
			var service = {};

			service.BowlerCreate = BowlerCreate;
			service.BowlersIndex = BowlersIndex;
			service.BowlersShow = BowlersShow;


			return service;
		}

		function BowlerCreate(name){
			$http.post
		}


})();