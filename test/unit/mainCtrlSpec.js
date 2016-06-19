(function(){
  "use strict";

  describe("MainCtrl", function(){

    var scope, ctrl, speedometer, Speedometer, countdown, Countdown;

    beforeEach(module('speedometerApp'));

    beforeEach(inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      ctrl = $controller('MainCtrl', {$scope: scope});
    }));

    beforeEach(inject(function(_Speedometer_, _Countdown_){
      Speedometer = _Speedometer_;
      speedometer = new Speedometer();
      Countdown = _Countdown_;
      countdown = new Countdown();
    }));

    describe("Speedometer and Countdown instances", function(){

      it("should both be defined", function(){
        expect(speedometer).toBeDefined();
        expect(countdown).toBeDefined();
      });

    });

  });

}());
