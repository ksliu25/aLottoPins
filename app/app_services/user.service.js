(function() {
	'use strict';

	angular.module('myApp')
	.factory('UserService', UserService);

	UserService.$inject = ['$http'];
	function UserService($http) {
		var service = {};

		service.Create = Create;
		return service;

		function Create(user) {
			return $http.post('http://bowling-api.nextcapital.com/api/users', user).then(handleSuccess, handleError('Error creating user'));
		}

		function handleSuccess(res) {
			return res.data
		}

		function handleError(error){
			return function(){
				return { success: false, message: error};
			};
		}
	}

})();