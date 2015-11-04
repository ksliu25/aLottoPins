(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueAddBowlersController', LeagueAddBowlersController);

		LeagueAddBowlersController.$inject = ['BowlersService','LotteriesService', 'LeaguesService', 'FlashService', '$stateParams', '$state', '$uibModalInstance', 'selectedLeague'];
		function LeagueAddBowlersController(BowlersService, LotteriesService, LeaguesService, FlashService, $stateParams, $state, $uibModalInstance, selectedLeague){
			var vm = this;
			vm.leagueBowlerAdd = leagueBowlerAdd;
			vm.selectedLeague = selectedLeague;
			vm.allBowlers;
			allBowlers();


			function allBowlers(){
				BowlersService.BowlersIndex(function(response){
					vm.allBowlers = response.data
				});
			}

			function leagueBowlerAdd(leagueId, bowlerId, bowlerName){
				LeaguesService.LeaguesAddBowler(leagueId, bowlerId, function(response){
					if (response.status === 200){
						$uibModalInstance.close(bowlerName);
					}
				});
			}

		}

})();