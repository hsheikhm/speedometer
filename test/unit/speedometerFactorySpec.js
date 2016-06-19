(function(){
  "use strict";

  describe("Speedometer factory", function(){

    var speedometer, Speedometer;

    beforeEach(module('speedometerApp'));

    beforeEach(inject(function(_Speedometer_){
      Speedometer = _Speedometer_;
      speedometer = new Speedometer();
    }));

    it("should exist", function(){
      expect(Speedometer).toBeDefined();
    });

    describe("speedometer.interval", function(){

      it("should be defined", function(){
        expect(speedometer.interval).toBeDefined();
      });

      it("should already be set to 5 seconds", function(){
        expect(speedometer.interval).toEqual(5);
      });

    });

    describe("speedometer.generateRandomNumber()", function(){

      it("should be defined", function(){
        expect(speedometer.generateRandomNumber).toBeDefined();
      });

      it("should generate a random number between 1-100", function(){
        var randomNumber = speedometer.generateRandomNumber();
        expect(randomNumber >= 1 && randomNumber <= 100).toBe(true);
      });

    });

    describe("speedometer.increaseInterval()", function(){

      it("should be defined", function(){
        expect(speedometer.increaseInterval).toBeDefined();
      });

      it("should increase the interval by 1", function(){
        speedometer.increaseInterval();
        expect(speedometer.interval).toEqual(6);
      });

    });

    describe("speedometer.decreaseInterval()", function(){

      it("should be defined", function(){
        expect(speedometer.decreaseInterval).toBeDefined();
      });

      it("should decrease the interval by 1", function(){
        speedometer.decreaseInterval();
        expect(speedometer.interval).toEqual(4);
      });

      it("should not decrease the interval if it's already at 1", function(){
        for(var i=0; i<4; i++){ speedometer.decreaseInterval(); }
        expect(speedometer.interval).toEqual(1);
        speedometer.decreaseInterval();
        expect(speedometer.interval).toEqual(1);
      });

    });

    describe("speedometer.intervalIsAboveOne()", function(){

      it("should be defined", function(){
        expect(speedometer.intervalIsAboveOne).toBeDefined();
      });

      it("should return 'true' if interval is above 1", function(){
        expect(speedometer.intervalIsAboveOne()).toEqual(true);
      });

      it("should return 'false' if interval is equal to 1", function(){
        for(var i=0; i<4; i++){ speedometer.decreaseInterval(); }
        expect(speedometer.intervalIsAboveOne()).toEqual(false);
      });

    });



  });

}());
