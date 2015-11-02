(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueController', LeagueController);

		LeagueController.$inject = ['LeaguesService', 'FlashService', '$state'];
		function LeagueController(LeaguesService, FlashService, $state){
			var vm = this;
			vm.leaguesAdd = leaguesAdd;
			vm.leagues;
			vm.currentLeague;
			leaguesIndex();

			function leaguesAdd(name){
				LeaguesService.LeaguesCreate(vm.name, function(response){
					if (response.status === 200){
						leaguesIndex();
						FlashService.Success(vm.name + ' has been successfully created!', true);
						$state.go('home');
					}
				})
			}

			function leaguesIndex(){
				LeaguesService.LeaguesIndex(function(response){
					vm.leagues = response.data
				});
			}

		}




})();