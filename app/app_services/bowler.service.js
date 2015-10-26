(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('BowlersService', BowlersService);

		BowlersService.$inject = ['$http'];
		function BowlersService($http) {
			var service = {};

			service.BowlerCreate = BowlerCreate;
			service.BowlersIndex = BowlersIndex;
			service.BowlersShow = BowlersShow;


			return service;

			function BowlerCreate(name, callback){
				$http.post('http://bowling-api.nextcapital.com/api/bowlers', {name: name})
					.then(function successCallback(response){
						callback(response);
					});
			}

			function BowlersIndex(){
				$http.get('http://bowling-api.nextcapital.com/api/bowlers')
					// .then(function successCallback(response){
					// 	callback(response);
					// });
			}

			function BowlersShow(bowlerId, callback){
				$http.get('http://bowling-api.nextcapital.com/api/bowlers' + bowlerId)
					.then(function successCallback(response){
						callback(response);
					});
			}

		};

})();