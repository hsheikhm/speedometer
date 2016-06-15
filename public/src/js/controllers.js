(function(){
  "use strict";

  var speedometerAppControllers = angular.module('speedometerAppControllers', []);

  speedometerAppControllers.controller('MainCtrl', ['$scope', function($scope){

    $scope.generateRandomNumber = function(){
      return Math.floor(Math.random() * 100) + 1;
    };

    $scope.randomNumber = $scope.generateRandomNumber();

  }]);

}());
