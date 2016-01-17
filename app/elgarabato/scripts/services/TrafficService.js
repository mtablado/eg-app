angular.module('ElGarabato.Common')
  .factory('TrafficService',
    function($rootScope) {
      'use strict';
      var service = this;

      service.centerTruck = function(truck) {
        console.log('Centering the truck on the map:' + truck);
        $rootScope.$broadcast('centerTruck', truck);
      };

      return service;
    }
  );
