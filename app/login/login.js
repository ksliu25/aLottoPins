(function(){
	'use strict';

	angular
		.module('myApp.login', ['ngRoute'])
		.controller('LoginCtrl', LoginCtrl);

		LoginCtrl.$inject = ['$location', 'AuthenticationService', 'FlashService'];
		function LoginCtrl($location, AuthenticationService, FlashService) {
			var loginform = this;
			loginform.login = login;

			(function initController(){
				AuthenticationService.ClearCredentials();
			})();

			function login(){
				loginform.dataLoading = true;
				AuthenticationService.Login(loginform.email, loginform.password, function(response) {
					if (response.status === 200){
						AuthenticationService.SetCredentials(loginform.email, loginform.password);
						$location.path('/');
					} else {
						FlashService.Error("Error!")
						loginform.dataLoading = false;
					}
				});
			};

		}

})();