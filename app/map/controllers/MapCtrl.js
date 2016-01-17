'use strict';

angular.module('ElGarabato.Map')
  .controller('MapCtrl', function ($scope, NgMap, TrafficService) {

    var service = this;
    service.zoom = 10;
    var trafficService = TrafficService;

    //service.home = new google.maps.LatLng(41.850033, -87.6500523);
    service.home = [37.665856, -4.951523];
    service.firm = {
      id: 'elgarabato-id',
      label: 'El garabato',
      coords: [37.665856, -4.951523]
    };

    // service.createFirmMarker = function(firm) {
    //   return this.markerService.createMarker(firm);
    // };
    //
    // var firmMarker = service.createFirmMarker($scope.firm);
    // console.log('Firm marker created:' + firmMarker);

    NgMap.getMap().then(function(map) {
      //map.center = ['37.665856', '-4.951523'];
      map.zoom = service.zoom;
      service.map = map;
      service.home = map.getCenter();
      console.log('Home:' + service.home);
    });

    //$scope.map.markers.push(firmMarker);
    // console.log('Marker:' + $scope.map.markers[0].options.label);

    service.trucks = [];

    service.moveToFirm = function() {
      console.log('moveToFirm button clicked.');

      service.map.panTo(service.home);
    };

    service.zoomIn = function() {
      service.zoom++;
      service.map.setZoom(service.zoom);
      console.log('Updated zoom:' + service.zoom);
    };

    service.zoomOut = function() {
      service.zoom--;
    };

    service.getCenter = function() {
      return service.map.getCenter();
    };

    service.getZoom = function() {
      return service.map.getZoom();
    };

    $scope.$on('centerTruck', function(truck) {
      console.log('Centering truck event received for truck' + truck);
      // TODO move to Truck coords
      service.moveToFirm();
    });
  });
