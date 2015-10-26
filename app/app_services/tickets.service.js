(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('LeaguesService', LeaguesService);

		LeaguesService.$inject = ['$http'];
		function LeaguesService($http) {
			var service = {};

			service.TicketBuy = TicketBuy;
			service.TicketLottery = TicketLottery;
			service.TicketWinner = TicketWinner;
			service.TicketRecord = TicketRecord;



			return service;
		}


})();