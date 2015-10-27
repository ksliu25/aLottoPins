(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['BowlersService', 'FlashService', '$routeParams'];
		function HomeController(BowlersService, FlashService, $routeParams){
			var vm = this;
			vm.bowlersAdd = bowlersAdd;
			// vm.bowlerShow = bowlerShow;
			vm.bowlers;
			vm.bowlerId = $routeParams.bowlerId
			bowlersIndex();
			// console.log(bowlersIndex())

			function bowlersAdd(name){
				BowlersService.BowlerCreate(vm.name, function(response){
					if (response.status === 200){
						FlashService.Success(vm.name + ' has been successfully created!')
						bowlersIndex();
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