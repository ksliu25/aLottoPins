(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryDetailsController', LotteryDetailsController);

		LotteryDetailsController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$state', '$uibModal'];
		function LotteryDetailsController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $state, $uibModal){
			var vm = this;
			vm.openBuyModal = openBuyModal;

			vm.selectedLottery;
			vm.lotteryTickets;
			lotteryShow($stateParams.leagueId, $stateParams.lotteryId);
			getTickets($stateParams.leagueId, $stateParams.lotteryId);


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
					FlashService.Success('Ticket bought for '+bowlerName, false);
				});

			};

			function openDrawModal(size){

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

		};

})();