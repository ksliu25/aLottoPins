(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
		function LoginController($location, AuthenticationService, FlashService) {
			var vm = this;
			vm.login = login;

			(function initController(){
				AuthenticationService.ClearCredentials();
			})();

			function login(){
				vm.dataLoading = true;
				AuthenticationService.Login(vm.email, vm.password, function(response) {
					if (response.status === 200){
						AuthenticationService.SetCredentials(vm.email, vm.password);
						$location.path('/');
					} else {
						var invalid = response.status.toString() + ' Username or password is incorrect!'
						FlashService.Error(invalid)
						vm.dataLoading = false;
					}
				});
			};

		}

})();