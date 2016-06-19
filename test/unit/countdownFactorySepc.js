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

    describe("countdown.setTo()", function(){

      it("should be defined", function(){
        expect(countdown.setTo).toBeDefined();
      });

      it("should set the countdown.number to the number provided", function(){
        countdown.setTo(10);
        expect(countdown.number).toEqual(10);
      });

    });

    describe("countdown.play()", function(){

      it("should be defined", function(){
        expect(countdown.play).toBeDefined();
      });

      it("should decrease the countdown.number by 1", function(){
        countdown.setTo(10);
        countdown.play();
        expect(countdown.number).toEqual(9);
      });

    });

    describe("countdown.isFinished()", function(){

      it("should be defined", function(){
        expect(countdown.isFinished).toBeDefined();
      });

      it("should return 'true' if countdown.number is 0", function(){
        countdown.setTo(1);
        countdown.play();
        expect(countdown.isFinished()).toBe(true);
      });

      it("should return 'false' if countdown.number is not 0", function(){
        countdown.setTo(2);
        countdown.play();
        expect(countdown.isFinished()).toBe(false);
      });

    });

    describe("countdown.formatNumber()", function(){

      it("should be defined", function(){
        expect(countdown.formatNumber).toBeDefined();
      });

      it("should return the countdown.number in string format", function(){
        countdown.setTo(2);
        expect(countdown.formatNumber()).toEqual('02');
      });

    });

    describe("countdown.updateNumber()", function(){

      it("should be defined", function(){
        expect(countdown.updateNumber).toBeDefined();
      });

      it("should return the countdown.number as an array of strings", function(){
        countdown.setTo(2);
        expect(countdown.updateNumber()).toEqual(['0', '2']);
      });

    });

  });

}());
