(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('LeaguesService', LeaguesService);

		LeaguesService.$inject = ['$http'];
		function LeaguesService($http) {
			var service = {};

			service.LeaguesCreate = LeaguesCreate;
			service.LeaguesIndex = LeaguesIndex;
			service.LeaguesShow = LeaguesShow;
			service.LeaguesAddBowler = LeaguesAddBowler;
			service.LeaguesBowlers = LeaguesBowlers;



			return service;
		}


})();