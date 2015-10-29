(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueDetailsController', LeagueDetailsController);

		LeagueDetailsController.$inject = ['LeaguesService', 'FlashService', '$stateParams', '$location'];
		function LeagueDetailsController(LeaguesService, FlashService, $stateParams, $location){
			var vm = this;
			vm.LeagueBowlerAdd = LeagueBowlerAdd;
			vm.selectedLeague;
			vm.leaguebowlers;
			LeagueShow($stateParams.leagueId);
			LeaguesBowlers($stateParams.leagueId);

			// vm.LeagueShow = LeagueShow;
			// vm.leagues;
			// vm.currentLeague;
			// LeaguesIndex();

			function LeagueShow(leagueId){
				LeaguesService.LeaguesShow(leagueId, function(response){
					vm.selectedLeague = response.data
				});
			}

			function LeaguesBowlers(leagueId){
				LeaguesService.LeaguesBowlers(leagueId, function(response){
					vm.leaguebowlers = response.data
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


		}

})();