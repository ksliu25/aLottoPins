(function(){
	'use strict';

	angular
		.module('myApp.register', ['ngRoute'])
		.controller('RegisterCtrl', RegisterCtrl)

		RegisterCtrl.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
		function RegisterCtrl(UserService, $location, $rootScope, FlashService){
			var form = this;

			form.register = register;

			function register(){
				form.dataLoading = true;
				UserService.create(form.user)
					.then(function(response){
						if (response.success) {
							FlashService.Success('Registration Successful!', true);
							$location.path('/login');
						} else {
							FlashService.Error(response.message);
							form.dataLoading = false;
						}
					});
			}
		}

})();