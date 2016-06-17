(function(){

  var speedometerAppFactories = angular.module('speedometerAppFactories', []);

  speedometerAppFactories.factory('Speedometer', function(){
    function speedometer(){

      this.interval = 5;

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

      this.backgroundColors =  ['#ef5350', '#ec407a', '#880e4f', '#9c27b0', '#512da8', '#3949ab', '#2196f3', '#0097a7', '#00897b', '#388e3c', '#ff9800', '#6d4c41', '#607d8b', '#000000'];

      this.chooseBackgroundColor = function(){
        return this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
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
