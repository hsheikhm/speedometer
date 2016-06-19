(function(){

  angular.module('speedometerApp')
    .factory('Countdown', function(){
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
