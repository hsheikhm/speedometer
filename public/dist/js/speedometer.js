(function(){
  "use strict";

  var speedometerApp = angular.module('speedometerApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'speedometerAppControllers'
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

  speedometerAppControllers.controller('MainCtrl', ['$scope', '$interval', '$route',
    function($scope, $interval, $route){

    $scope.generateRandomNumber = function(){
      $scope.randomNumber = Math.floor(Math.random() * 100) + 1;
    };

    $scope.generateRandomNumber();

    $scope.intervalNumber = 1;

    $scope.startTimer = function(){
      $scope.countdownNumber = $scope.intervalNumber;
      $scope.updateCountdownNumber();
      $scope.timer = $interval($scope.generateRandomNumber, $scope.intervalNumber * 1000);
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
        $scope.countdownNumber = $scope.intervalNumber;
      }
      $scope.countdownNumberParts = $scope.formatNumber($scope.countdownNumber).split("");
    };

    $scope.refreshPage = function(){
      $route.reload();
    };

    $scope.formatNumber = function(num){
      return (num < 10) ? '0' + num.toString() : num.toString();
    };

    $scope.updateIntervalNumber = function(){
      $scope.intervalNumberParts = $scope.formatNumber($scope.intervalNumber).split("");
    };

    $scope.updateIntervalNumber();

    $scope.increaseInterval = function(){
      $scope.intervalNumber++;
      $scope.updateIntervalNumber();
    };

    $scope.decreaseInterval = function(){
      $scope.intervalNumber--;
      $scope.updateIntervalNumber();
    };

  }]);

}());
