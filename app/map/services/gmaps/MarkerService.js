'use strict';

angular.module('ElGarabato.Map')
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
