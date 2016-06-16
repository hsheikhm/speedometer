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

// next file:
(function(){
  // "use strict";

  var speedometerAppFactories = angular.module('speedometerAppFactories', []);

  speedometerAppFactories.factory('Speedometer', function(){
    function speedometer() {

      this.interval = 1;

      this.generateRandomNumber = function(){
        return Math.floor(Math.random() * 100) + 1;
      };

      this.formatInterval = function(){
        var num = this.interval;
        return (num < 10) ? '0' + num.toString() : num.toString();
      };

      this.updateInterval = function(){
        return this.formatInterval().split("");
      };

      this.increaseInterval = function(){
        this.interval++;
        this.updateInterval();
      };

      this.decreaseInterval = function(){
        this.interval--;
        this.updateInterval();
      };

    }
    return speedometer;
  });

}());
