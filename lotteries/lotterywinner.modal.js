(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryWinnerController', LotteryWinnerController);

		LotteryWinnerController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$state', '$uibModalInstance', 'selectedLottery'];
		function LotteryWinnerController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $state, $uibModalInstance, selectedLottery){
			var vm = this;
			vm.cancel = cancel;
			vm.recordTicket = recordTicket;
			vm.drawTicket = drawTicket;
			vm.selectedLottery = selectedLottery;
			vm.winner;
			vm.drawnTicket;

			(function initController(){
				drawTicket(selectedLottery.league_id, selectedLottery.id)
			})();

			function drawTicket(leagueId, lotteryId){
				TicketsService.TicketDrawWinner(leagueId, lotteryId, function(response){
					vm.drawnTicket = response.data;
					findBowler(response.data.bowler_id);
				});
			};

			function recordTicket(leagueId, lotteryId){
				TicketsService.TicketRecordWinner(leagueId, lotteryId, vm.winningTicket, function(response){
					if (response.status === 200){
						$uibModalInstance.close(response.data);
					}
				});
			};

			function findBowler(bowlerId){
				BowlersService.BowlersShow(bowlerId, function(response){
					vm.winner = response.data
				});
			};

			function cancel(){
			   $uibModalInstance.dismiss();
			};

		}

})();