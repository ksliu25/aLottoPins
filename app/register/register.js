(function(){
	'use strict';

	angular
		.module('myApp.register', ['ngRoute'])
		.controller('RegisterCtrl', RegisterCtrl)

		RegisterCtrl.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
		function RegisterCtrl(UserService, $location, $rootScope, FlashService){
			var vm = this;

			vm.register = register;

			function register(){
				vm.dataLoading = true;
				UserService.Create(vm.user)
					.then(function(response){
						if (response.status === 200) {
							FlashService.Success('Registration Successful!', true);
							$location.path('/login');
						} else {
							FlashService.Error(response.message);
							vm.dataLoading = false;
						}
					});
			}
		}

})();