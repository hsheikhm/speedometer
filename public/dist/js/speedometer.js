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

    $scope.updateIntervalNumberParts = function(){
      $scope.intervalNumberParts = $scope.formatNumber($scope.intervalNumber).split("");
    };

    $scope.updateIntervalNumberParts();

    $scope.increaseInterval = function(){
      $scope.intervalNumber++;
      $scope.updateIntervalNumberParts();
    };

  }]);

}());
