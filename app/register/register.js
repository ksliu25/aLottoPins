(function(){
	'use strict';

	angular
		.module('myApp.register', ['ngRoute'])
		.controller('RegisterCtrl', RegisterCtrl)

		RegisterCtrl.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
		function RegisterCtrl(UserService, $location, $rootScope, FlashService){
			var registerform = this;

			registerform.register = register;

			function register(){
				registerform.dataLoading = true;
				UserService.Create(registerform.user)
					.then(function(response){
						if (response.success) {
							FlashService.Success('Registration Successful!', true);
							$location.path('/login');
						} else {
							FlashService.Error(response.message);
							registerform.dataLoading = false;
						}
					});
			}
		}

})();