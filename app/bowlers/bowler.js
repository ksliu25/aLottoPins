(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('BowlerController', BowlerController);

		BowlerController.$inject = ['BowlersService', 'FlashService', '$stateParams', '$state', '$uibModal']
		function BowlerController(BowlersService, FlashService, $stateParams, $state, $uibModal){ 
			var vm = this;
			vm.open = open;
			vm.bowlers;
			bowlersIndex();

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

		}

})();