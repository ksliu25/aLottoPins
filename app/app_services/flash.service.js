(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('FlashService', FlashService);

	FlashService.$inject = ['$rootScope'];
	function FlashService($rootScope) {
		var service = {};

		service.Success = Success;
		service.Error = Error;

		initService
	}
})