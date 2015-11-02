(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryDetailsController', LotteryDetailsController);

		LotteryDetailsController.$inject = ['TicketsService','LeaguesService','LotteriesService','BowlersService', 'FlashService', '$stateParams', '$state'];
		function LotteryDetailsController(TicketsService, LeaguesService, LotteriesService, BowlersService, FlashService, $stateParams, $state){
			var vm = this;

			vm.buyTicket = buyTicket;
			vm.drawTicket = drawTicket;
			vm.selectedLottery;
			vm.lotteryTickets;
			vm.winner;
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
						FlashService.Success('Ticket bought for '+ bowlerName +'!', false);
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
					findBowler(response.data.bowler_id);
				});
			}

			function recordTicket(leagueId, lotteryId){
				TicketsService.TicketRecordWinner(leagueId, lotteryId, vm.winningTicket, function(response){
					if (response.status === 200){
						FlashService.Success('Nice! You got a payout of ' + response.data.payout, true)
						getTickets(leagueId, lotteryId)
						$state.go('lotteriesshow', {leagueId: leagueId, lotteryId: lotteryId})
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