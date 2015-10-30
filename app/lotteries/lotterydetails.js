(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryDetailsController', LotteryDetailsController);

		LotteryDetailsController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$location'];
		function LotteryDetailsController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $location){
			var vm = this;

			vm.buyTicket = buyTicket;
			vm.selectedLottery;
			vm.lotteryTickets;
			vm.ticketsBowler;
			vm.drawnTicket;
			lotteryShow($stateParams.leagueId, $stateParams.lotteryId);
			getTickets($stateParams.leagueId, $stateParams.lotteryId);


			function lotteryShow(leagueId, lotteryId){
				LotteriesService.LotteriesShow(leagueId, lotteryId, function(response){
					vm.selectedLottery = response.data;
				});
			}

			function buyTicket(leagueId, lotteryId, bowlerId, bowlerName){
				TicketsService.TicketLotteryBuy(leagueId, lotteryId, bowlerId, function(response){
					if (response.status === 200){
						FlashService.Success('Ticket bought for '+ bowlerName +'!', true);
						getTickets(leagueId, lotteryId)
					}
				});
			}

			function getTickets(leagueId, lotteryId){
				TicketsService.Tickets(leagueId, lotteryId, function(response){
					vm.lotteryTickets = response.data;
				});
			}

			function drawTicket(leagueId, lotteryId){
				TicketsService.TicketDrawWinner(leagueId, lotteryId, function(response){
					vm.drawnTicket = response.data;
				});
			}

			function recordTicket(leagueId, lotteryId, pincount){
				TicketsService.TicketRecordWinner(leagueId, lotteryId, pincount, function(response){
					if (response.status === 200){
						FlashService.Success('Nice! You got a payout of ' response.data.payout)
						getTickets(leagueId, lotteryId)
					}
				});
			}

			function findBowler(bowlerId){
				BowlersService.BowlersShow(bowlerId, function(response){
					vm.ticketsBowler = response.data
				});
			}

		}

})();