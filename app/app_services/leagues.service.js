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
			// service.LeaguesAddBowler = LeaguesAddBowler;
			// service.LeaguesBowlers = LeaguesBowlers;
			
			return service;

			function LeaguesCreate(name, callback){
				$http.post('http://bowling-api.nextcapital.com/api/leagues', {name: name})
					.then(function successCallback(response){
						callback(response);
					});
			}

			function LeaguesIndex(callback){
				$http.get('http://bowling-api.nextcapital.com/api/leagues')
					.then(function successCallback(response){
						callback(response);
					});
			}

			function LeaguesShow(bowlerId, callback){
				$http.get('http://bowling-api.nextcapital.com/api/leagues' + bowlerId)
					.then(function successCallback(response){
						callback(response);
					});
			}





		};


})();