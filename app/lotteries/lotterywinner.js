(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryWinnerController', LotteryWinnerController);

		LotteryWinnerController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$state'];
		function LotteryWinnerController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $state){
			var vm = this;

			// vm.buyTicket = buyTicket;
			vm.drawTicket = drawTicket;
			vm.winner;
			vm.drawnTicket;

			(function initController(){
				drawTicket($stateParams.leagueId, $stateParams.lotteryId)
			})();

			function drawTicket(leagueId, lotteryId){
				TicketsService.TicketDrawWinner(leagueId, lotteryId, function(response){
					vm.drawnTicket = response.data;
					findBowler(response.data.bowler_id);
				});
			}

			function recordTicket(leagueId, lotteryId){
				TicketsService.TicketRecordWinner(leagueId, lotteryId, vm.winningTicket, function(response){
					if (response.status === 200){
						FlashService.Success('Nice! You got a payout of ' + response.data.payout, false)
					}
				});
			}

			function findBowler(bowlerId){
				BowlersService.BowlersShow(bowlerId, function(response){
					vm.winner = response.data
				});
			}

		}

})();