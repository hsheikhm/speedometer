(function(){
  "use strict";

  describe("MainCtrl", function(){

    var scope, ctrl, $intervalSpy;

    beforeEach(module('speedometerApp'));

    beforeEach(inject(function($rootScope, $controller, _$interval_){
      scope = $rootScope.$new();
      $intervalSpy = jasmine.createSpy('$interval', _$interval_);
      ctrl = $controller('MainCtrl', {
        $scope: scope,
        $interval: $intervalSpy
      });
    }));

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

    describe("scope.startTimer()", function(){

      it("should be defined", function(){
        expect(scope.startTimer).toBeDefined();
      });

      it("should set $scope.countdownDisplayOn to 'true'", function(){
        scope.startTimer();
        expect(scope.countdownDisplayOn).toBe(true);
      });

      it("should start the $scope.intervalTimer and $scope.countdownTimer", function(){
        scope.increase();
        scope.startTimer();
        expect($intervalSpy).toHaveBeenCalledWith(scope.changeMainNumber, 6000);
        expect($intervalSpy).toHaveBeenCalledWith(scope.startCountdown, 1000);
      });

    });

  });

}());
