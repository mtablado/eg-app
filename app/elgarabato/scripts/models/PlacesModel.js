angular.module('ElGarabato.Common')
    .service('PlacesModel',
        function ($http, UtilsService) {
          'use strict';
          var service = this;
          //var MODEL = '/places/';

            var farms = [
              {
                id: '1',
                name: 'La Reina',
                type: 'farm',
                coords: {
                 latitude: 37.831369,
                 longitude: -4.868883
                }
              },
              {
                id: '2',
                name: 'Judio',
                type: 'farm',
                coords: {
                 latitude: 37.862072,
                 longitude: -4.763442
                }
              },
              {
                id: '3',
                name: 'Judío',
                type: 'farm',
                coords: {
                 latitude: 37.862072,
                 longitude: -4.763442
                }
              },
              {
                id: '4',
                name: 'Torre Mocha',
                type: 'farm',
                coords: {
                 latitude: 37.850744,
                 longitude: -4.736397
                }
              },
              {
                id: '5',
                name: 'Estebanias',
                type: 'farm',
                coords: {
                 latitude: 37.858481,
                 longitude: -4.756415
                }
              },
              {
                id: '6',
                name: 'Doña Sol',
                type: 'farm',
                coords: {
                 latitude: 37.869059,
                 longitude: -4.738757
                }
              },
              {
                id: '7',
                name: 'El Pireo',
                type: 'farm',
                coords: {
                 latitude: 37.869991,
                 longitude: 37.869991
                }
              },
              {
                id: '8',
                name: 'La Morena',
                type: 'farm',
                coords: {
                 latitude: 37.869935,
                 longitude: -4.724167
                }
              },
              {
                id: '9',
                name: 'El Rubio',
                type: 'farm',
                coords: {
                 latitude: 37.871426,
                 longitude: -4.723824
                }
              }];

              var destinations = [
                {
                  id: '1',
                  name: 'Dafisa',
                  type: 'destination',
                  coords: {
                   latitude: 37.663890,
                   longitude: -4.953118
                 }
                },
                {
                  id: '2',
                  name: 'San Antonio',
                  type: 'destination',
                  coords: {
                   latitude: 37.530031,
                   longitude: -5.124284
                 }
                },
                {
                  id: '3',
                  name: 'Cerelales Astigi',
                  type: 'destination',
                  coords: {
                   latitude: 37.524859,
                   longitude: -5.117170
                 }
                },
                {
                  id: '4',
                  name: 'Pastas Gallo',
                  type: 'destination',
                  coords: {
                   latitude: 37.939533,
                   longitude: -4.485241
                 }
                },
                {
                  id: '5',
                  name: 'Puerto Sevilla',
                  type: 'destination',
                  coords: {
                   latitude: 37.367697,
                   longitude: -5.993828
                 }
                },
                {
                  id: '6',
                  name: 'Puerto Málaga',
                  type: 'destination',
                  coords: {
                   latitude: 36.710556,
                   longitude: -4.423616
                 }
                },
                {
                  id: '7',
                  name: 'Koipe',
                  type: 'destination',
                  coords: {
                   latitude: 37.932390,
                   longitude: -4.675054
                 }
                }];

              service.getFarms = function() {
                return farms;
              };

              service.getDestinations = function() {
                return destinations;
              };


        });
