'use strict';

angular.module('ElGarabato.Map')
  .controller('MapCtrl', function ($scope, uiGmapGoogleMapApi, MarkerService, TrafficService, PlacesService) {

    var service = this;
    service.zoom = 10;
    var trafficService = TrafficService;
    var placesService = PlacesService;
    var markerService = MarkerService;

    service.firm = {
      id: 'elgarabato-id',
      name: 'El garabato',
      coords: {
       latitude: 37.665856,
       longitude: -4.951523
      }
    };

    var firmMarker = markerService.createFirmMarker(service.firm);
    service.getFirmMarker = function() {
      return firmMarker;
    };

    var farms = placesService.getFarms();
    var farmsMarkers = markerService.createFarmsMarkers(farms);

    service.getFarms = function() {
      return farms;
    };

    service.getFarmsMarkers = function() {
      return farmsMarkers;
    };

    var destinations = placesService.getDestinations();
    var destinationMarkers =
      markerService.createDestinationMarkers(destinations);

    service.getDestinations = function() {
      return placesService.getDestinations();
    };

    service.getDestinationsMarkers = function() {
      return destinationMarkers;
    };

    service.showStaticPOI = function(obj) {
      console.log('obj coords: ' + obj.coords);
    };

    service.map = {
      center: {
        latitude: service.firm.coords.latitude,
        longitude: service.firm.coords.longitude
      },
      zoom: 12
    };

    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
      console.log('Google maps initialized:' + maps);
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
