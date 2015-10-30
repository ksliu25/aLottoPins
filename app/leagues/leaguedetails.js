(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueDetailsController', LeagueDetailsController);

		LeagueDetailsController.$inject = ['LotteriesService', 'LeaguesService', 'FlashService', '$stateParams', '$location'];
		function LeagueDetailsController(LotteriesService, LeaguesService, FlashService, $stateParams, $location){
			var vm = this;
			vm.leagueBowlerAdd = leagueBowlerAdd;
			vm.selectedLeague;
			vm.leagueBowlers;
			vm.leagueLotteries;
			leagueShow($stateParams.leagueId);
			leaguesBowlers($stateParams.leagueId);
			leagueLotteries($stateParams.leagueId);


			function leagueShow(leagueId){
				LeaguesService.LeaguesShow(leagueId, function(response){
					vm.selectedLeague = response.data
				});
			}

			function leaguesBowlers(leagueId){
				LeaguesService.LeaguesBowlers(leagueId, function(response){
					vm.leagueBowlers = response.data
				});
			}

			function leagueBowlerAdd(leagueId, bowlerId, bowlerName){
				LeaguesService.LeaguesAddBowler(leagueId, bowlerId, function(response){
					if (response.status === 200){
						LeaguesBowlers(leagueId);
						FlashService.Success('Bowler '+ bowlerName +' has been successfully added!', true);
						$location.path('/');
					}
				});
			}

			function leagueLotteries(leagueId){
				LotteriesService.LotteriesLeagues(leagueId, function(response){
					vm.leagueLotteries = response.data
				});
			}


		}

})();