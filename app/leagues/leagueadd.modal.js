(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LeagueAddController', LeagueAddController);

		LeagueAddController.$inject = ['LeaguesService', 'FlashService', '$state', '$uibModalInstance'];
		function LeagueAddController(LeaguesService, FlashService, $state, $uibModalInstance){
			var vm = this;
			vm.cancel = cancel;
			vm.leaguesAdd = leaguesAdd;

			function leaguesAdd(name){
				LeaguesService.LeaguesCreate(vm.name, function(response){
					if (response.status === 200){
						$uibModalInstance.close(vm.name);
					}
				})
			};

			function cancel(){
			   $uibModalInstance.dismiss();
			}


		}

})();