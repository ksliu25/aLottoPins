(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LotteryDetailsController', LotteryDetailsController);

		LotteryDetailsController.$inject = ['LeaguesService','LotteriesService', 'FlashService', '$stateParams', '$location'];
		function LotteryDetailsController(LeaguesService, LotteriesService, FlashService, $stateParams, $location){
			var vm = this;
			vm.selectedLottery;
			LotteryShow($stateParams.leagueId, $stateParams.lotteryId);
			// vm.leagueLotteries;
			// LeagueLotteries($stateParams.leagueId)

			function LotteryShow(leagueId, lotteryId){
				LotteriesService.LotteriesShow(leagueId, lotteryId, function(response){
					vm.selectedLottery = response.data
				});
			}

			// function LeagueLotteries(leagueId){
			// 	LeaguesService.LeaguesBowlers(leagueId, function(response){
			// 		vm.leagueLotteries = response.data
			// 	});
			// }

		}

})();