(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryPastController', LotteryPastController);

		LotteryPastController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$state', '$uibModal'];
		function LotteryPastController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $state, $uibModal){
			var vm = this;
			vm.drawOldTicket = drawOldTicket
			vm.winner;
			vm.pastTicket;

			(function initController(){
				drawOldTicket($stateParams.leagueId, $stateParams.lotteryId);
			})();


			function drawOldTicket(leagueId, lotteryId){
				TicketsService.TicketDrawWinner(leagueId, lotteryId, function(response){
					vm.pastTicket = response.data;
					findBowler(response.data.bowler_id);
				});
			};

			function findBowler(bowlerId){
				BowlersService.BowlersShow(bowlerId, function(response){
					vm.winner = response.data
				});
			};

		};

})();