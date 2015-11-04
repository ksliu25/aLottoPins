(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('BowlerAddController', BowlerAddController);

		BowlerAddController.$inject = ['BowlersService', 'FlashService', '$stateParams', '$state', '$uibModalInstance'];
		function BowlerAddController(BowlersService, FlashService, $stateParams, $state, $uibModalInstance){
			var vm = this;
			vm.bowlersAdd = bowlersAdd;
			// vm.bowlerShow = bowlerShow;
			// vm.bowlerId = $stateParams.bowlerId
			// vm.bowlers;
			// vm.currentBowler;
			// bowlersIndex();

			function bowlersAdd(name){
				BowlersService.BowlersCreate(vm.name, function(response){
					if (response.status === 200){
						$uibModalInstance.close(vm.name);
						// bowlersIndex();
						// FlashService.Success(vm.name + ' has been successfully created!', true);
						// $state.go('home');
					}
				})
			}

			// function bowlersIndex(){
			// 	BowlersService.BowlersIndex(function(response){
			// 		vm.bowlers = response.data
			// 	});
			// }


			// function bowlerShow(bowlerId){
			// 	BowlersService.BowlersShow(bowlerId, function(response){
			// 		vm.currentBowler = response.data
			// 	});
			// }


		}




})();