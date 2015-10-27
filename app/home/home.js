(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['BowlersService', 'FlashService'];
		function HomeController(BowlersService, FlashService){
			var vm = this;
			vm.bowlersAdd = bowlersAdd;
			vm.bowlers;
			bowlersIndex();
			// console.log(bowlersIndex())
			// vm.bowlerShow = bowlerShow;

			function bowlersAdd(name){
				BowlersService.BowlerCreate(vm.name, function(response){
					if (response.status === 200){
						FlashService.Success(vm.name + ' has been successfully created!')
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