'use strict';

angular.module('ElGarabato.Map')
  .controller('MapCtrl', function ($scope, _MarkerService_, uiGmapGoogleMapApi) {

    var service = this;
    service.markerService = _MarkerService_;

    $scope.gmapController = {};

    $scope.firm = {
      id: 'elgarabato-id',
      label: 'El garabato',
      coords: {
        latitude: 37.665856,
        longitude: -4.951523
      }
    };

    service.createFirmMarker = function(firm) {
      return this.markerService.createMarker(firm);
    };

    var firmMarker = service.createFirmMarker($scope.firm);

    $scope.map = {
      center: { latitude: 37.665856, longitude: -4.951523 },
      zoom: 12,
      options: {scrollwheel: false},
      markers: []
    };

    $scope.map.markers.push(firmMarker);
    console.log('Marker:' + $scope.map.markers[0].options.label);

    $scope.trucks = [];

    uiGmapGoogleMapApi.then(function(maps) {
      console.log('Map controller:' + maps.control);
    });

    $scope.moveToFirm = function() {
      console.log('moveToFirm button clicked.');
      console.log('Map controller:' + $scope.gmapController);

      $scope.gmapController.refresh({
        latitude: $scope.firm.latitude,
        longitude: $scope.firm.longitude
      });
    };

    /*var _firmMarker = {
      id: 0,
      coords: {
        latitude: 37.665856,
        longitude: -4.951523
      },
      options: { draggable: false,
        labelClass:'marker-labels',
        labelAnchor:'12 60',
        labelContent:'El garabato ttes'
      },
    };*/
    $scope.map.markers.push(firmMarker);

  });
