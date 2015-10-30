(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('BowlerController', BowlerController);

		BowlerController.$inject = ['BowlersService', 'FlashService', '$stateParams', '$location'];
		function BowlerController(BowlersService, FlashService, $stateParams, $location){
			var vm = this;
			vm.bowlersAdd = bowlersAdd;
			vm.bowlerShow = bowlerShow;
			vm.bowlerId = $stateParams.bowlerId
			vm.bowlers;
			vm.currentBowler;
			bowlersIndex();

			function bowlersAdd(name){
				BowlersService.BowlersCreate(vm.name, function(response){
					if (response.status === 200){
						bowlersIndex();
						FlashService.Success(vm.name + ' has been successfully created!', true);
						$location.path('/');
					}
				})
			}

			function bowlersIndex(){
				BowlersService.BowlersIndex(function(response){
					vm.bowlers = response.data
				});
			}


			function bowlerShow(bowlerId){
				BowlersService.BowlersShow(bowlerId, function(response){
					vm.currentBowler = response.data
				});
			}


		}




})();