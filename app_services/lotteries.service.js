(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('LotteriesService', LotteriesService);

		LotteriesService.$inject = ['$http'];
		function LotteriesService($http) {
			var service = {};

			service.LotteriesShow = LotteriesShow;
			service.LotteriesLeagues = LotteriesLeagues;

			return service;

			function LotteriesLeagues(leagueId, callback){
				$http.get('http://bowling-api.nextcapital.com/api/leagues/'+leagueId+'/lotteries')
					.then(function successCallback(response){
						callback(response)
					});
			}

			function LotteriesShow(leagueId, lotteryId, callback){
				$http.get('http://bowling-api.nextcapital.com/api/leagues/'+leagueId+'/lotteries/'+lotteryId)
					.then(function successCallback(response){
						callback(response)
					});
			}

		};

})();