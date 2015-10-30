(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueDetailsController', LeagueDetailsController);

		LeagueDetailsController.$inject = ['LotteriesService', 'LeaguesService', 'FlashService', '$stateParams', '$location'];
		function LeagueDetailsController(LotteriesService, LeaguesService, FlashService, $stateParams, $location){
			var vm = this;
			vm.LeagueBowlerAdd = LeagueBowlerAdd;
			vm.selectedLeague;
			vm.leagueBowlers;
			vm.leagueLotteries;
			LeagueShow($stateParams.leagueId);
			LeaguesBowlers($stateParams.leagueId);
			LeagueLotteries($stateParams.leagueId);


			function LeagueShow(leagueId){
				LeaguesService.LeaguesShow(leagueId, function(response){
					vm.selectedLeague = response.data
				});
			}

			function LeaguesBowlers(leagueId){
				LeaguesService.LeaguesBowlers(leagueId, function(response){
					vm.leagueBowlers = response.data
				});
			}

			function LeagueBowlerAdd(leagueId, bowlerId, bowlerName){
				LeaguesService.LeaguesAddBowler(leagueId, bowlerId, function(response){
					if (response.status === 200){
						LeaguesBowlers(leagueId);
						FlashService.Success('Bowler '+ bowlerName +' has been successfully added!', true);
						$location.path('/');
					}
				});
			}

			function LeagueLotteries(leagueId){
				LotteriesService.LotteriesLeagues(leagueId, function(response){
					vm.leagueLotteries = response.data
				});
			}


		}

})();