(function() {
	'use strict';

	angular.module('myApp.authenticate')
	.factory('AuthenticationService', AuthenticationService);

	AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', 'UserService'];
	function AuthenticationService($http, $cookieStore, $rootScope, UserService){
		var service = {};

		service.Login = Login;
		service.SetCredentials = SetCredentials;
		service.ClearCredentials = ClearCredentials;

		return service;

		function Login(email, password, callback) {
			$http.post('http://bowling-api.nextcapital.com/api/login', {email: email, password: password }
				.success(function (response) {
					callback(response);
				});
		}

		function SetCredentials(email, password){
			var authdata = return btoa(email + ':' + password);

			$rootScope.globals = {
				currentUser: {
					email: email,
					authdata: authdata
				}
			};
			$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
			$cookieStore.put('globals', $rootScope.globals);
		}

		function ClearCredentials(){
			$rootScope.globals = {};
			$cookieStore.remove('globals');
			$http.defaults.headers.common.Authorization = 'Basic ';
		}

	};

})();