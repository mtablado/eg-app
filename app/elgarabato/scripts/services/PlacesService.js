angular.module('ElGarabato.Common')
  .factory('PlacesService',
    function(PlacesModel) {
      'use strict';
      var service = this;
      var placesModel = PlacesModel;

      service.getFarms = function() {
        return placesModel.getFarms();
      };

      service.getDestinations = function() {
        return placesModel.getDestinations();
      };

      return service;
    }
  );
