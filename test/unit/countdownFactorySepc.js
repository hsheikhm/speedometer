(function(){
  "use strict";

  describe("Countdown factory", function(){

    var countdown, Countdown;

    beforeEach(module('speedometerApp'));

    beforeEach(inject(function(_Countdown_){
      Countdown = _Countdown_;
      countdown = new Countdown();
    }));

    it("should exist", function(){
      expect(Countdown).toBeDefined();
    });

    describe("countdown.number", function(){

      it("should be defined", function(){
        expect(countdown.number).toBeDefined();
      });

      it("should already be set to 0", function(){
        expect(countdown.number).toEqual(0);
      });

    });

  });

}());
