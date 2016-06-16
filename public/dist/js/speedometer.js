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
