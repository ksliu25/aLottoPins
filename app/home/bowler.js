(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('BowlerController', BowlerController);

		BowlerController.$inject = ['BowlersService', 'FlashService', '$routeParams', '$location'];
		function BowlerController(BowlersService, FlashService, $routeParams, $location){
			var vm = this;
			vm.bowlersAdd = bowlersAdd;
			// vm.bowlerShow = bowlerShow;
			vm.bowlers;
			vm.bowlerId = $routeParams.bowlerId
			bowlersIndex();
			// console.log(bowlersIndex())

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


			// function bowlerShow(){

			// }


		}




})();