(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryDetailsController', LotteryDetailsController);

		LotteryDetailsController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$state', '$uibModal'];
		function LotteryDetailsController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $state, $uibModal){
			var vm = this;
			vm.openBuyModal = openBuyModal;
			vm.openDrawModal = openDrawModal;
			vm.selectedLottery;
			vm.lotteryTickets;

			(function initController(){
				lotteryShow($stateParams.leagueId, $stateParams.lotteryId);
				getTickets($stateParams.leagueId, $stateParams.lotteryId);
			})();


			function lotteryShow(leagueId, lotteryId){
				LotteriesService.LotteriesShow(leagueId, lotteryId, function(response){
					vm.selectedLottery = response.data;
				});
			};

			function getTickets(leagueId, lotteryId){
				TicketsService.Tickets(leagueId, lotteryId, function(response){
					vm.lotteryTickets = response.data;
				});
			};

			function openBuyModal(size){

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
					FlashService.Success('Ticket bought for ' + bowlerName, false);
				});

			};

			function openDrawModal(size){

				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'lotteries/lotterywinner.view.html',
					controller: 'LotteryWinnerController',
					controllerAs: 'vm',
					size: size,
					resolve: {
						selectedLottery: function(){
							return vm.selectedLottery
						}
					}
				})

				modalInstance.result.then(function successCallback(ticket) {
					FlashService.Success('Nice! You got a payout of ' + ticket.payout + '!', true)
					$state.go('leaguesshow', {leagueId: $stateParams.leagueId})
				});

			};

		};

})();