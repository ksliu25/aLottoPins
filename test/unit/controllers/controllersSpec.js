describe("Unit: Testing Controllers", function() {
  beforeEach(module('myApp'));

  var ctrl, scope;
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('HomeController', {
        $scope: scope
      });
    }));

  // beforeEach(angular.mock.module('myApp'));

  it('should have a Login controller', function() {
    expect(myApp.LoginController).not.to.equal(null);
  });

  it('should have a Register controller', function() {
    expect(myApp.RegisterController).not.to.equal(null);
  });

  it('should have a Home controller', function() {
    expect(myApp.HomeController).not.to.equal(null);
  });

  it('should have a Bowler controller', function() {
    expect(myApp.BowlerController).not.to.equal(null);
  });

  it('should have a BowlerAdd modal controller', function() {
    expect(myApp.BowlerAddController).not.to.equal(null);
  });

  it('should have a League controller', function() {
    expect(myApp.LeagueController).not.to.equal(null);
  });

  it('should have a LeagueAdd modal controller', function() {
    expect(myApp.LeagueAddController).not.to.equal(null);
  });

  it('should have a LeagueDetails controller', function() {
    expect(myApp.LeagueDetailsController).not.to.equal(null);
  });

  it('should have a LotteryDetails controller', function() {
    expect(myApp.LotteryDetailsController).not.to.equal(null);
  });

  it('should have a LotteryBuyTicket controller', function() {
    expect(myApp.LotteryBuyTicketController).not.to.equal(null);
  });

  it('should have a LotteryWinner controller', function() {
    expect(myApp.LotteryWinnerController).not.to.equal(null);
  });

  it('should have a LotteryPastController controller', function() {
    expect(myApp.LotteryPastController).not.to.equal(null);
  });


});