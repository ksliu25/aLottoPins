(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueDetailsController', LeagueDetailsController);

		LeagueDetailsController.$inject = ['LeaguesService', 'FlashService', '$stateParams', '$location'];
		function LeagueDetailsController(LeaguesService, FlashService, $stateParams, $location){
			var vm = this;
			vm.selectedLeague;
			LeagueShow($stateParams.leagueId);
			// vm.LeaguesAdd = LeaguesAdd;
			// vm.LeagueShow = LeagueShow;
			// vm.leagueId = $stateParams.leagueId
			// vm.leagues;
			// vm.currentLeague;
			// LeaguesIndex();

			function LeagueShow(leagueId){
				LeaguesService.LeaguesShow(leagueId, function(response){
					vm.selectedLeague = response.data
				});
			}


		}

})();