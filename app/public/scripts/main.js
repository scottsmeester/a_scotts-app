(function () {

'use strict';

  angular.module('SmeestersRepo', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          // templateUrl: "/index",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
      // $routeProvider
      //   .when("/smeester", {
      //     templateUrl: "./views/trackIt",
      //     controller: "MainController"
      //   })
      //   .otherwise({
      //      redirectTo: '/'
      //   });
    }
  ]);

  //Load controller
  angular.module('SmeestersRepo')

  .controller('MainController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
    }
  ]);

}());