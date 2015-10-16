(function() {
	'use strict';

	angular.module('myApp.authenticate')
	.factory('UserService', UserService);

	UserService.$inject = ['$http', '$cookieStore', '$rootScope', 'UserService'];

})();