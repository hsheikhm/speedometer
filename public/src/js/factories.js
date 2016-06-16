(function(){

  var speedometerAppFactories = angular.module('speedometerAppFactories', []);

  speedometerAppFactories.factory('Speedometer', function(){
    function speedometer(){

      this.interval = 1;

      this.generateRandomNumber = function(){
        return Math.floor(Math.random() * 100) + 1;
      };

      this.increaseInterval = function(){
        this.interval++;
        this.updateInterval();
      };

      this.decreaseInterval = function(){
        if(this.intervalIsAboveOne()){ this.interval--; }
        this.updateInterval();
      };

      this.intervalIsAboveOne = function(){
        return this.interval !== 1;
      };

      this.formatInterval = function(){
        var num = this.interval;
        return (num < 10) ? '0' + num.toString() : num.toString();
      };

      this.updateInterval = function(){
        return this.formatInterval().split("");
      };

    }
    return speedometer;
  });

  speedometerAppFactories.factory('Countdown', function(){
    function countdown(){

      this.number = 0;

      this.setTo = function(number){
        this.number = number;
      };

      this.play = function(){
        this.number--;
      };

      this.isFinished = function(){
        return this.number === 0;
      };

      this.formatNumber = function(){
        var num = this.number;
        return (num < 10) ? '0' + num.toString() : num.toString();
      };

      this.updateNumber = function(){
        return this.formatNumber().split("");
      };

    }
    return countdown;
  });

}());
