'use strict';

/**
 * @ngdoc function
 * @name clientSideApp.controller:MetersCtrl
 * @description
 * # MetersCtrl
 * Controller of the clientSideApp
 */
angular.module('clientSideApp')
  .controller('MetersCtrl', function ($scope, $http) {
   var meter_data = $http.get('http://localhost:3000/meters');
    meter_data.then(function (result){

      $scope.meters = result.data;
    });
  });
