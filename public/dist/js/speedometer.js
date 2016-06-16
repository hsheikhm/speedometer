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
        if(countdown.isFinished()){ countdown.setTo(speedometer.interval); }
        $scope.countdownNumberParts = countdown.updateNumber();
      };

      $scope.stopTimer = function(){
        $interval.cancel($scope.intervalTimer);
        $interval.cancel($scope.countdownTimer);
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
