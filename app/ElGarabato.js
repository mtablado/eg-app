'use strict';

var myModule = angular.module('ElGarabato', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngMap',
  'ElGarabato.Common',
  'ElGarabato.TrafficBoard',
  'ElGarabato.TruckBoard',
  'ElGarabato.Map'
]);

myModule.config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'elgarabato/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'elgarabato/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/traffic', {
        templateUrl: 'trafficboard/tmpl/trafficboard.html'
      })
      .when('/truckboard', {
        templateUrl: 'truckboard/tmpl/truckboard.html'
      })
      .otherwise({
        redirectTo: '/'
      });
});

myModule.value('TRUCK_STATUSES', [
    {text: 'Trabajando', code: 'wokring'},
    {text: 'Parado', code: 'idle'}
]);
