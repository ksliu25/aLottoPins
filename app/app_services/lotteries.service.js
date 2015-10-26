(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('LeaguesService', LeaguesService);

		LeaguesService.$inject = ['$http'];
		function LeaguesService($http) {
			var service = {};

			service.LotteriesShow = LotteriesShow;
			service.LotteriesLeagues = LotteriesLeagues;

			return service;
		}


})();