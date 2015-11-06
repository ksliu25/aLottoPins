(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueController', LeagueController);

		LeagueController.$inject = ['LeaguesService', 'FlashService', '$state', '$uibModal'];
		function LeagueController(LeaguesService, FlashService, $state, $uibModal){
			var vm = this;
			vm.open = open;
			vm.leagues;
			vm.currentLeague;
			leaguesIndex();

			function leaguesIndex(){
				LeaguesService.LeaguesIndex(function(response){
					vm.leagues = response.data
				});
			};

			function open(size){

				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'leagues/leagueadd.view.html',
					controller: 'LeagueAddController',
					controllerAs: 'vm',
					size: size
				})

				modalInstance.result.then(function successCallback(name) {
					leaguesIndex();
					FlashService.Success(name + ' has been successfully created!', true);
					$state.go('home');
				});

			};

		}

})();