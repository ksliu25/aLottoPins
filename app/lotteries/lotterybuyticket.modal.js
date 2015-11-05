(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryBuyTicketController', LotteryBuyTicketController);

		LotteryBuyTicketController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$state', '$uibModalInstance','selectedLottery', 'leagueId'];
		function LotteryBuyTicketController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $state, $uibModalInstance, selectedLottery, leagueId){
			var vm = this;
			vm.cancel = cancel;
			vm.selectedLottery = selectedLottery;
			vm.leagueBowlers;
			getLeaguesBowlers(leagueId);

			vm.buyTicket = buyTicket;

			function buyTicket(leagueId, lotteryId, bowlerId, bowlerName){
				TicketsService.TicketLotteryBuy(leagueId, lotteryId, bowlerId, function(response){
					if (response.status === 200){
						$uibModalInstance.close(bowlerName);
					}
				});
			};

			function getLeaguesBowlers(leagueId){
				LeaguesService.LeaguesBowlers(leagueId, function(response){
					vm.leagueBowlers = response.data
				});
			};

			function cancel(){
			   $uibModalInstance.dismiss();
			};


		}

})();