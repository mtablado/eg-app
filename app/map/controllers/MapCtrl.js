'use strict';

angular.module('ElGarabato.Map')
  .controller('MapCtrl', function ($scope, NgMap, TrafficService, PlacesService) {

    var service = this;
    service.zoom = 10;
    var trafficService = TrafficService;
    var placesService = PlacesService;

    //service.home = new google.maps.LatLng(41.850033, -87.6500523);
    service.home = [37.665856, -4.951523];

    service.firm = {
      id: 'elgarabato-id',
      label: 'El garabato',
      coords: [37.665856, -4.951523]
      //coords: {
      //  longitude: 37.665856,
      //  latutude: -4.951523
      //}
    };

    service.getFarms = function() {
      return placesService.getFarms();
    };

    service.granjas = placesService.getFarms();

    service.getDestinations = function() {
      return placesService.getDestinations();
    };

    service.showStaticPOI = function(obj) {
      console.log('obj coords: ' + obj.coords);
      var long = parseFloat(obj.coords.longitude);
      var lat = parseFloat(obj.coords.latitude);
      //var coords = [long, lat];
      var coords = [37.862072, -4.763442];

      service.map.panTo(service.home);
    };

    NgMap.getMap().then(function(map) {
      //map.center = ['37.665856', '-4.951523'];
      map.zoom = service.zoom;
      service.map = map;
      service.home = map.getCenter();
      console.log('Home:' + service.home);
    });

    service.trucks = [];

    service.moveToFirm = function() {
      console.log('moveToFirm button clicked.');

      service.showStaticPOI(service.firm);
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
