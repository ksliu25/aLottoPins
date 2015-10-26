(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('LeaguesService', LeaguesService);

		LeaguesService.$inject = ['$http'];
		function LeaguesService($http) {
			var service = {};

			service.BowlerCreate = BowlerCreate;
			service.BowlersIndex = BowlersIndex;
			service.BowlersShow = BowlersShow;


			return service;
		}


})();