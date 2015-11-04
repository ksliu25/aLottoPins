(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('BowlerAddController', BowlerAddController);

		BowlerAddController.$inject = ['BowlersService', 'FlashService', '$stateParams', '$state', '$uibModalInstance'];
		function BowlerAddController(BowlersService, FlashService, $stateParams, $state, $uibModalInstance){
			var vm = this;
			vm.bowlersAdd = bowlersAdd;

			function bowlersAdd(name){
				BowlersService.BowlersCreate(vm.name, function(response){
					if (response.status === 200){
						$uibModalInstance.close(vm.name);
					}
				})
			}

		}

})();