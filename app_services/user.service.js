(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('UserService', UserService);

	UserService.$inject = ['$http'];
	function UserService($http) {
		var service = {};

		service.Create = Create;
		return service;

		function Create(user, callback) {
			$http.post('http://bowling-api.nextcapital.com/api/users', user)
				.then(function(response){
					callback(response);
				});
		}

	}

})();