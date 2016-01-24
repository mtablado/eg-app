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
          draggable: false,
          icon: 'app/elgarabato/images/truck-icon-9704.png'
  			},
        coords: obj.coords
  		};

      return marker;
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
