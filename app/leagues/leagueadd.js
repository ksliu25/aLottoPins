(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueAddController', LeagueAddController);

		LeagueAddController.$inject = ['LeaguesService', 'FlashService', '$state', '$uibModalInstance'];
		function LeagueAddController(LeaguesService, FlashService, $state, $uibModalInstance){
			var vm = this;
			vm.leaguesAdd = leaguesAdd;
			// vm.leagues;
			// vm.currentLeague;
			// leaguesIndex();

			function leaguesAdd(name){
				LeaguesService.LeaguesCreate(vm.name, function(response){
					if (response.status === 200){
						$uibModalInstance.close();
						// leaguesIndex();
						// FlashService.Success(vm.name + ' has been successfully created!', true);
						// $state.go('home');
					}
				})
			}

			// function leaguesIndex(){
			// 	LeaguesService.LeaguesIndex(function(response){
			// 		vm.leagues = response.data
			// 	});
			// }

		}




})();