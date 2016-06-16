(function(){
  // "use strict";

  var speedometerAppFactories = angular.module('speedometerAppFactories', []);

  speedometerAppFactories.factory('Speedometer', function(){
    function speedometer() {

      this.interval = 1;

      this.generateRandomNumber = function(){
        return Math.floor(Math.random() * 100) + 1;
      };

      this.increaseInterval = function(){
        this.interval++;
        this.updateInterval();
      };

      this.decreaseInterval = function(){
        this.interval--;
        this.updateInterval();
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

}());
