'use strict';

angular.module('ElGarabato.Map')
  .service('MarkerService', function () {

    var markerService = this;

    markerService.createMarker = function(obj) {
      var marker = {
        id: obj.id,
  			options: {
  				labelAnchor:'12 60',
  				labelClass:'marker-labels',
          labelContent: obj.name,
          draggable: false
  			},
        coords: obj.coords
  		};

      return marker;
    };

    markerService.createFirmMarker = function(obj) {
      var marker = this.createMarker(obj);
      marker.options.icon = 'images/industrial2-24px.png';
      return marker;
    };

    markerService.createFarmMarker = function(obj) {
      var marker = this.createMarker(obj);
      marker.options.icon = 'images/wind3-24px.png';
      return marker;
    };

    markerService.createDestinationMarker = function(obj) {
      var marker = this.createMarker(obj);
      marker.options.icon = 'images/industrial26-24px.png';
      return marker;
    };

    markerService.createTruckMarker = function(obj) {
      var marker = this.createMarker(obj);
      marker.options.icon = 'images/delivery13-24px.png';
      return marker;
    };

    markerService.createMarkers = function(id, arrayObject) {
      // if (!Array.isArray(arrayObject)) {
      //   console.log('');
      // }

      var markersArray = [];
      for	(var index = 0; index < arrayObject.length; index++) {
        var marker = this.createFarmMarker(arrayObject[index]);
        markersArray.push(marker);
      }

      var markers = {
        models: markersArray,
        id: id
      };

      return markers;
    };


  });
