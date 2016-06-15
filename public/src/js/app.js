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
