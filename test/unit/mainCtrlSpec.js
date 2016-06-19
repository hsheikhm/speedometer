(function(){
  "use strict";

  describe("MainCtrl", function(){

    var scope, ctrl, speedometer, Speedometer, countdown, Countdown;

    beforeEach(module('speedometerApp'));

    beforeEach(inject(function($rootScope, $controller, _Speedometer_, _Countdown_){
      Speedometer = _Speedometer_;
      Countdown = _Countdown_;
      speedometer = new Speedometer();
      countdown = new Countdown();
      scope = $rootScope.$new();
      ctrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));

    describe("Speedometer and Countdown instances", function(){

      it("should both be defined", function(){
        expect(speedometer).toBeDefined();
        expect(countdown).toBeDefined();
      });

    });

    describe("$scope.mainNumber", function(){

      it("should be defined", function(){
        expect(scope.mainNumber).toBeDefined();
      });

      it("should be set to a random number between 1-100", function(){
        expect(scope.mainNumber >= 1 && scope.mainNumber <= 100).toBe(true);
      });

    });

    describe("$scope.mainNumberBackgroundColor", function(){

      it("should be defined", function(){
        expect(scope.mainNumberBackgroundColor).toBeDefined();
      });

      it("should be set to the first color in the speedometer.backgroundColors array", function(){
        expect(scope.mainNumberBackgroundColor).toEqual('#ef5350');
      });

    });

    describe("$scope.countdownDisplayOn", function(){

      it("should be defined", function(){
        expect(scope.countdownDisplayOn).toBeDefined();
      });

      it("should be set to 'false' on page load", function(){
        expect(scope.countdownDisplayOn).toBe(false);
      });

    });

    describe("$scope.increase()", function(){

      it("should be defined", function(){
        expect(scope.increase).toBeDefined();
      });

      it("should increase the scope.intervalNumberParts by 1", function(){
        expect(scope.intervalNumberParts).toEqual(['0', '5']);
        scope.increase();
        expect(scope.intervalNumberParts).toEqual(['0', '6']);
      });

    });

    describe("$scope.decrease()", function(){

      it("should be defined", function(){
        expect(scope.decrease).toBeDefined();
      });

      it("should decrease the scope.intervalNumberParts by 1", function(){
        expect(scope.intervalNumberParts).toEqual(['0', '5']);
        scope.decrease();
        expect(scope.intervalNumberParts).toEqual(['0', '4']);
      });

    });

  });

}());
