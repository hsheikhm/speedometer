(function(){
  "use strict";

  var speedometerAppControllers = angular.module('speedometerAppControllers', []);

  speedometerAppControllers.controller('MainCtrl', ['$scope', '$interval',
    function($scope, $interval){

    $scope.generateRandomNumber = function(){
      $scope.randomNumber = Math.floor(Math.random() * 100) + 1;
    };

    $scope.generateRandomNumber();

    $scope.interval = 5;

    $scope.startTimer = function(){
      $interval($scope.generateRandomNumber, 3000);
    };

  }]);

}());
