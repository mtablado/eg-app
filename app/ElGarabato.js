'use strict';

var myModule = angular.module('ElGarabato', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'uiGmapgoogle-maps',
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
        templateUrl: 'trafficboard/tmpl/trafficboard.html',
        controller: 'TrafficBoardCtrl',
        controllerAs: 'traffic'
      })
      .when('/truckboard', {
        templateUrl: 'truckboard/tmpl/truckboard.html',
        controller: 'TruckBoardCtrl',
        controllerAs: 'truckboard'
      })
      .otherwise({
        redirectTo: '/'
      });
});

myModule.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});

myModule.value('TRUCK_STATUSES', [
    {text: 'Trabajando', code: 'wokring'},
    {text: 'Parado', code: 'idle'}
]);
