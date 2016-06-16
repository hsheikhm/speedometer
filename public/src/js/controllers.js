(function(){
  "use strict";

  var speedometerAppControllers = angular.module('speedometerAppControllers', []);

  speedometerAppControllers.controller('MainCtrl', ['$scope', '$interval', '$route',
    function($scope, $interval, $route){

    $scope.generateRandomNumber = function(){
      $scope.randomNumber = Math.floor(Math.random() * 100) + 1;
    };

    $scope.generateRandomNumber();

    $scope.startTimer = function(){
      $interval($scope.generateRandomNumber, 3000);
    };

    $scope.refreshPage = function(){
      $route.reload();
    };

    $scope.intervalNumber = 1;

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

  }]);

}());
