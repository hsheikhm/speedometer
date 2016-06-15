(function(){
  "use strict";

  var speedometerAppControllers = angular.module('speedometerAppControllers', []);

  speedometerAppControllers.controller('MainCtrl', ['$scope', function($scope){

    $scope.test = "Hello this is a test to see that everything works";

  }]);

}());
