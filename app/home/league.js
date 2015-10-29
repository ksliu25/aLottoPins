(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueController', LeagueController);

		LeagueController.$inject = ['LeaguesService', 'FlashService', '$location'];
		function LeagueController(LeaguesService, FlashService, $location){
			var vm = this;
			vm.LeaguesAdd = LeaguesAdd;
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

		}




})();