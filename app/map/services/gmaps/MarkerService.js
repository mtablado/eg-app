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

    markerService.createTruckMarker = function(obj) {
      var marker = this.createMarker(obj);
      marker.options.icon = 'images/delivery13-24px.png';
    };

    markerService.createMarkers = function(id, arrayObject) {
      // if (!Array.isArray(arrayObject)) {
      //   console.log('');
      // }

      var markersArray = [];
      for	(var index = 0; index < arrayObject.length; index++) {
        var marker = this.createMarker(arrayObject[index]);
        markersArray.push(marker);
      }

      var markers = {
        models: markersArray,
        id: id
      };

      return markers;
    };


  });
