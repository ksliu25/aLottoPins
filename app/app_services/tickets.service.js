(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('TicketsService', TicketsService);

		TicketsService.$inject = ['$http'];
		function TicketsService($http) {
			var service = {};

			service.TicketLotteryBuy = TicketLotteryBuy;
			service.Tickets = Tickets;
			service.TicketDrawWinner = TicketDrawWinner;
			service.TicketRecordWinner = TicketRecordWinner;

			return service;

			function TicketLotteryBuy(leagueId, lotteryId, bowlerId, callback){
				$http.post('http://bowling-api.nextcapital.com/api/leagues/'+leagueId+'/lotteries/'+lotteryId+'/tickets', {bowler_id: bowlerId})
					.then(function successCallback(response){
						callback(response)
					});
			}

			function Tickets(leagueId, lotteryId, callback){
				$http.get('http://bowling-api.nextcapital.com/api/leagues/'+leagueId+'/lotteries/'+lotteryId+'/tickets')
					.then(function successCallback(response){
						callback(response)
					});
			}

			function TicketDrawWinner(leagueId, lotteryId, callback){
				$http.get('http://bowling-api.nextcapital.com/api/leagues/'+leagueId+'/lotteries/'+lotteryId+'/roll')
					.then(function successCallback(response){
						callback(response)
					});
			}

			function TicketRecordWinner(leagueId, lotteryId, callback){
				$http.put('http://bowling-api.nextcapital.com/api/leagues/'+leagueId+'/lotteries/'+lotteryId+'/roll')
					.then(function successCallback(response){
						callback(response)
					});
			}

		};


})();