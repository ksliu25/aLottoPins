(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['BowlersService', 'FlashService'];
		function HomeController(BowlersService, FlashService){
			var vm = this;
			vm.bowlers = BowlersService.BowlersIndex();
			vm.bowlersAdd = bowlersAdd;
			// vm.bowlerShow = bowlerShow;

			function bowlersAdd(name){
				BowlersService.BowlerCreate(vm.name, function(response){
					if (response.status === 200){
						FlashService.Success(vm.name + ' has been successfully created!')
					}
				})
			}

			// function bowlerShow(){

			// }


		}



})();