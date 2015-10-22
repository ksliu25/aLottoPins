(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('AuthenticationService', AuthenticationService);

	AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope'];
	function AuthenticationService($http, $cookieStore, $rootScope){
		var service = {};

		service.Login = Login;
		service.SetCredentials = SetCredentials;
		service.ClearCredentials = ClearCredentials;

		return service;

		function Login(email, password, callback) {
			var authdata = btoa(email + ':' + password);
			$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
			$http.post('http://bowling-api.nextcapital.com/api/login', {email: email, password: password })
				.success(function (response) {
					callback(response);
				});
		}

		function SetCredentials(email, password){
			var authdata = btoa(email + ':' + password);

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