'use strict';

/**
 * @ngdoc service
 * @name ElGarabato.Marker
 * @description
 * # Truck
 * Factory in the ElGarabato.
 */
angular.module('ElGarabato.Common')
  .service('MarkerService', function () {

      this.createMarker = function(obj) {
        var marker = {
          id: obj.id,
    			options: {
    				labelAnchor:'12 60',
    				labelClass:'marker-labels',
            labelContent: obj.label,
            draggable: false
    			},
          coords: {
      			latitude: obj.coords.latitude,
      			longitude: obj.coords.longitude
          }
    		};

        return marker;
      };
  });
