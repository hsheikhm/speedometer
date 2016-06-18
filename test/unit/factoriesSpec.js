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

  });

}());
