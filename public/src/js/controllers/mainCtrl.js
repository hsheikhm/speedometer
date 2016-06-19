(function(){
  "use strict";

  angular.module('speedometerApp')
    .controller('MainCtrl', ['$scope', '$interval', '$route', 'Speedometer', 'Countdown',
      function($scope, $interval, $route, Speedometer, Countdown){

        var speedometer = new Speedometer();
        var countdown = new Countdown();

        $scope.mainNumber = speedometer.generateRandomNumber();
        $scope.mainNumberBackgroundColor = speedometer.backgroundColors[0];
        $scope.countdownDisplayOn = false;

        $scope.increase = function(){
          speedometer.increaseInterval();
          $scope.updateInteval();
        };

        $scope.decrease = function(){
          speedometer.decreaseInterval();
          $scope.updateInteval();
        };

        $scope.updateInteval = function(){
          $scope.intervalNumberParts = speedometer.updateInterval();
        };

        $scope.updateInteval();

        $scope.startTimer = function(){
          $scope.countdownDisplayOn = true;
          countdown.setTo(speedometer.interval);
          $scope.updateCountdown();
          $scope.intervalTimer = $interval($scope.changeMainNumber, speedometer.interval * 1000);
          $scope.countdownTimer = $interval($scope.startCountdown, 1000);
        };

        $scope.changeMainNumber = function(){
          $scope.mainNumber = speedometer.generateRandomNumber();
        };

        $scope.startCountdown = function(){
          countdown.play();
          $scope.updateCountdown();
        };

        $scope.updateCountdown = function(){
          if(countdown.isFinished()){
            countdown.setTo(speedometer.interval);
            $scope.changeBackgroundColor();
          }
          $scope.countdownNumberParts = countdown.updateNumber();
        };

        $scope.changeBackgroundColor = function(){
          $scope.mainNumberBackgroundColor = speedometer.chooseBackgroundColor();
        };

        $scope.stopTimer = function(){
          $interval.cancel($scope.intervalTimer);
          $interval.cancel($scope.countdownTimer);
          $scope.countdownDisplayOn = false;
        };

        $scope.refreshPage = function(){
          $route.reload();
        };

    }]);

}());
