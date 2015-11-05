(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryDetailsController', LotteryDetailsController);

		LotteryDetailsController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$state', '$uibModal'];
		function LotteryDetailsController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $state, $uibModal){
			var vm = this;
			vm.open = open;

			// vm.buyTicket = buyTicket;
			vm.selectedLottery;
			vm.lotteryTickets;
			lotteryShow($stateParams.leagueId, $stateParams.lotteryId);
			getTickets($stateParams.leagueId, $stateParams.lotteryId);


			function lotteryShow(leagueId, lotteryId){
				LotteriesService.LotteriesShow(leagueId, lotteryId, function(response){
					vm.selectedLottery = response.data;
				});
			}

			// function buyTicket(leagueId, lotteryId, bowlerId, bowlerName){
			// 	TicketsService.TicketLotteryBuy(leagueId, lotteryId, bowlerId, function(response){
			// 		if (response.status === 200){
			// 			FlashService.Success('Ticket bought for '+ bowlerName +'!', false);
			// 			getTickets(leagueId, lotteryId)
			// 		}
			// 	});
			// }

			function getTickets(leagueId, lotteryId){
				TicketsService.Tickets(leagueId, lotteryId, function(response){
					vm.lotteryTickets = response.data;
				});
			}

			function open(size){

				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'lotteries/lotterybuyticket.view.html',
					controller: 'LotteryBuyTicketController',
					controllerAs: 'vm',
					size: size,
					resolve: {
						selectedLottery: function(){
							return vm.selectedLottery
						},
						leagueId: function(){
							return vm.selectedLottery.league_id
						}
					}
				})

				modalInstance.result.then(function successCallback(bowlerName) {
					getTickets($stateParams.leagueId, $stateParams.lotteryId);
					FlashService.Success('Ticket bought for '+bowlerName, false);
				});

			};



		}

})();