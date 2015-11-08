'use strict';

/**
 * @ngdoc function
 * @name clientSideApp.controller:BluebadgeCtrl
 * @description
 * # BluebadgeCtrl
 * Controller of the clientSideApp
 */
angular.module('clientSideApp')
  .controller('BluebadgeCtrl', function ($scope,$http) {
    var meter_data = $http.get('http://localhost:3000/bluebadge');
    meter_data.then(function (result){

      $scope.bluebadge = result.data;
    });
  });
