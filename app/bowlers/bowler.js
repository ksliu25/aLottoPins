(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('BowlerController', BowlerController);

		BowlerController.$inject = ['BowlersService', 'FlashService', '$stateParams', '$state', '$uibModal']
		function BowlerController(BowlersService, FlashService, $stateParams, $state, $uibModal){ 
			var vm = this;
			vm.open = open;
			// vm.bowlersAdd = bowlersAdd;
			// vm.bowlerShow = bowlerShow;
			// vm.bowlerId = $stateParams.bowlerId
			vm.bowlers;
			// vm.currentBowler;
			bowlersIndex();

			// function bowlersAdd(name){
			// 	BowlersService.BowlersCreate(vm.name, function(response){
			// 		if (response.status === 200){
			// 			bowlersIndex();
			// 			FlashService.Success(vm.name + ' has been successfully created!', true);
			// 			$state.go('home');
			// 		}
			// 	})
			// }

			function bowlersIndex(){
				BowlersService.BowlersIndex(function(response){
					vm.bowlers = response.data
				});
			}

			function open(size){

				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'bowlers/bowleradd.view.html',
					controller: 'BowlerAddController',
					controllerAs: 'vm',
					size: size
				})

				modalInstance.result.then(function successCallback(name) {
					bowlersIndex();
					FlashService.Success(name + ' has been successfully created!', true);
					$state.go('home');
				});

			};


			// function bowlerShow(bowlerId){
			// 	BowlersService.BowlersShow(bowlerId, function(response){
			// 		vm.currentBowler = response.data
			// 	});
			// }


		}




})();