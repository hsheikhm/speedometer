(function(){
  "use strict";

  var speedometerApp = angular.module('speedometerApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'speedometerAppControllers',
    'speedometerAppFactories'
  ]);

  speedometerApp.config(['$routeProvider',
    function($routeProvider){
      $routeProvider.
        when('/speedometer', {
          templateUrl: 'src/views/main-page.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        }).
        otherwise({
          redirectTo: '/speedometer'
        });
    }
  ]);

}());

// next file:
(function(){
  "use strict";

  var speedometerAppControllers = angular.module('speedometerAppControllers', []);

  speedometerAppControllers.controller('MainCtrl', ['$scope', '$interval', '$route', 'Speedometer', 'Countdown',
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
        $scope.mainNumberBackgroundColor = speedometer.backgroundColors[Math.floor(Math.random() * speedometer.backgroundColors.length)];
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

// next file:
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
