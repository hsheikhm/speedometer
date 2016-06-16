(function(){
  "use strict";

  var speedometerAppControllers = angular.module('speedometerAppControllers', []);

  speedometerAppControllers.controller('MainCtrl', ['$scope', '$interval', '$route', 'Speedometer',
    function($scope, $interval, $route, Speedometer){

      var speedometer = new Speedometer();

      $scope.mainNumber = speedometer.generateRandomNumber();

      $scope.increase = function(){
        speedometer.increaseInterval();
        $scope.update();
      };

      $scope.decrease = function(){
        speedometer.decreaseInterval();
        $scope.update();
      };

      $scope.update = function(){
        $scope.intervalNumberParts = speedometer.updateInterval();
      };

      $scope.update();



      // $scope.updateIntervalNumber = function(){
      //   $scope.intervalNumberParts = $scope.formatNumber($scope.intervalNumber).split("");
      // };
      //
      // $scope.updateIntervalNumber();


      // $scope.generateRandomNumber = function(){
      //   $scope.mainNumber = Math.floor(Math.random() * 100) + 1;
      // };
      //
      // $scope.generateRandomNumber();

      // $scope.intervalNumber = 1;

      $scope.startTimer = function(){
        $scope.countdownNumber = speedometer.interval;
        $scope.updateCountdownNumber();
        $scope.timer = $interval(function(){
          $scope.mainNumber = speedometer.generateRandomNumber();
        }, speedometer.interval * 1000);
        $scope.countdownTimer = $interval($scope.startCountdown, 1000);
      };

      $scope.stopTimer = function(){
        $interval.cancel($scope.timer);
        $interval.cancel($scope.countdownTimer);
      };

      $scope.startCountdown = function(){
        $scope.countdownNumber--;
        $scope.updateCountdownNumber();
      };

      $scope.updateCountdownNumber = function(){
        if($scope.countdownNumber === 0){
          $scope.countdownNumber = speedometer.interval;
        }
        $scope.countdownNumberParts = $scope.formatNumber($scope.countdownNumber).split("");
      };

      $scope.refreshPage = function(){
        $route.reload();
      };

      $scope.formatNumber = function(num){
        return (num < 10) ? '0' + num.toString() : num.toString();
      };

  }]);

}());
