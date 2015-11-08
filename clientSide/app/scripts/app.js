'use strict';

/**
 * @ngdoc overview
 * @name clientSideApp
 * @description
 * # clientSideApp
 *
 * Main module of the application.
 */
angular
  .module('clientSideApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/parking', {
        templateUrl: 'views/parking.html',
        controller: 'ParkingCtrl',
        controllerAs: 'parking'
      })
      .when('/meters', {
        templateUrl: 'views/meters.html',
        controller: 'MetersCtrl',
        controllerAs: 'meters'
      })
      .when('/bluebadge', {
        templateUrl: 'views/bluebadge.html',
        controller: 'BluebadgeCtrl',
        controllerAs: 'bluebadge'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

