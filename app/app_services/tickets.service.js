(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('TicketsService', TicketsService);

		TicketsService.$inject = ['$http'];
		function TicketsService($http) {
			var service = {};

			service.TicketBuy = TicketBuy;
			service.TicketLottery = TicketLottery;
			service.TicketWinner = TicketWinner;
			service.TicketRecord = TicketRecord;



			return service;
		}


})();