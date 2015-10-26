(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('LotteriesService', LotteriesService);

		LotteriesService.$inject = ['$http'];
		function LotteriesService($http) {
			var service = {};

			service.LotteriesShow = LotteriesShow;
			service.LotteriesLeagues = LotteriesLeagues;

			return service;
		}


})();