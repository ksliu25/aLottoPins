(function(){
	'use strict';

	angular
		.module('myApp.login', ['ngRoute'])
		.controller('LoginCtrl', LoginCtrl);

		LoginCtrl.$inject = ['$location', 'AuthenticationService'];
		function LoginCtrl($location, AuthenticationService) {
			var form = this;
			form.login = login;

			(function initController(){
				AuthenticationService.ClearCredentials();
			})();

			function login(){
				form.dataLoading = true;
				AuthenticationService.Login(form.email, form.password, function(response) {
					if (response.success){
						AuthenticationService.SetCredentials(form.email, form.password);
						$location.path('/');
					} else {
						form.dataLoading = false;
					}
				});
			};

		}

})();