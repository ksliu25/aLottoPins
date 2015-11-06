(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('RegisterController', RegisterController)

		RegisterController.$inject = ['UserService', '$state', '$rootScope', 'FlashService'];
		function RegisterController(UserService, $state, $rootScope, FlashService){
			var vm = this;

			vm.register = register;

			function register(){
				vm.dataLoading = true;
				UserService.Create(vm.user, function(response){
					if (response.status === 200) {
						FlashService.Success('Registration Successful for '+vm.user.email+'!', true);
						$state.go('login');
					} else {
						FlashService.Error(response.message);
						vm.dataLoading = false;
					}
				})
			};
			
		}

})();