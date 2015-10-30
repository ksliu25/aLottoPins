(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('RegisterController', RegisterController)

		RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
		function RegisterController(UserService, $location, $rootScope, FlashService){
			var vm = this;

			vm.register = register;

			function register(){
				vm.dataLoading = true;
				UserService.Create(vm.user, function(response){
					if (response.status === 200) {
						FlashService.Success('Registration Successful for '+vm.user.name+'!', true);
						$location.path('/login');
					} else {
						FlashService.Error(response.message);
						vm.dataLoading = false;
					}
				})
			};
			
		}

})();