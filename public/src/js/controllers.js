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
      $scope.timer = $interval($scope.generateRandomNumber, $scope.intervalNumber * 1000);
    };

    $scope.stopTimer = function(){
      $interval.cancel($scope.timer);
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
