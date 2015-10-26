(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('BowlingAPIService', BowlingAPIService);

		BowlingAPIService.$inject = ['$http'];
		function BowlingAPIService($http) {
			var service = {};

			service.BowlerCreate = BowlerCreate;
			service.BowlersIndex = BowlersIndex;
			service.BowlersShow = BowlersShow;
			service.LeaguesCreate = LeaguesCreate;
			service.LeaguesIndex = LeaguesIndex;
			service.LeaguesShow = LeaguesShow;
			service.LeaguesAddBowler = LeaguesAddBowler;
			service.LeaguesBowlers = LeaguesBowlers;
			service.LotteriesShow = LotteriesShow;
			service.LotteriesLeagues = LotteriesLeagues;
			service.TicketBuy = TicketBuy;
			service.TicketLottery = TicketLottery;
			service.TicketWinner = TicketWinner;
			service.TicketRecord = TicketRecord;



			return service;
		}


})();