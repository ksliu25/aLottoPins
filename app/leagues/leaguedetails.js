(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueDetailsController', LeagueDetailsController);

		LeagueDetailsController.$inject = ['LotteriesService', 'LeaguesService', 'FlashService', '$stateParams', '$state', '$uibModal'];
		function LeagueDetailsController(LotteriesService, LeaguesService, FlashService, $stateParams, $state, $uibModal){
			var vm = this;
			vm.open = open;
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

			function leagueLotteries(leagueId){
				LotteriesService.LotteriesLeagues(leagueId, function(response){
					vm.leagueLotteries = response.data
				});
			}


			function open(size){

				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'leagues/leagueaddbowlers.view.html',
					controller: 'LeagueAddBowlersController',
					controllerAs: 'vm',
					size: size,
					resolve: {
						selectedLeague: function(){
							return vm.selectedLeague
						} 
					}
				})

				modalInstance.result.then(function successCallback(bowlerName) {
					leaguesBowlers($stateParams.leagueId);
					FlashService.Success('Bowler '+ bowlerName +' has been successfully added!', false);
				});

			};


		}

})();