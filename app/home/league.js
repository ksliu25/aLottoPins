(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueController', LeagueController);

		LeagueController.$inject = ['LeaguesService', 'FlashService', '$stateParams', '$location'];
		function LeagueController(LeaguesService, FlashService, $stateParams, $location){
			var vm = this;
			vm.LeaguesAdd = LeaguesAdd;
			vm.LeagueShow = LeagueShow;
			vm.leagueId = $stateParams.leagueId
			vm.leagues;
			vm.currentLeague;
			LeaguesIndex();

			function LeaguesAdd(name){
				LeaguesService.LeaguesCreate(vm.name, function(response){
					if (response.status === 200){
						LeaguesIndex();
						FlashService.Success(vm.name + ' has been successfully created!', true);
						$location.path('/');
					}
				})
			}

			function LeaguesIndex(){
				LeaguesService.LeaguesIndex(function(response){
					vm.leagues = response.data
				});
			}


			function LeagueShow(leagueId){
				LeaguesService.LeaguesShow(leagueId, function(response){
					vm.currentLeague = response.data
				});
			}


		}




})();