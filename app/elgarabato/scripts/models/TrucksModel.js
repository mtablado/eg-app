angular.module('ElGarabato.Common')
    .service('TrucksModel',
        function ($http, /*EndpointConfigService, */UtilsService) {
            var service = this,
                MODEL = '/trucks/';

            service.all = function () {
                // return $http.get(EndpointConfigService.getUrl(
                //     MODEL + EndpointConfigService.getCurrentFormat()))
                //         .then(
                //             function(result) {
                //                 return UtilsService.objectToArray(result);
                //             }
                //         );
                console.log('returning trucks');
                return service.trucks;
            };

            service.fetch = function (storyId) {
                // return $http.get(
                //     EndpointConfigService.getUrlForId(MODEL, story_id)
                // );
            };

            service.create = function (story) {
                // return $http.post(
                //     EndpointConfigService.getUrl(MODEL + EndpointConfigService.getCurrentFormat()), story
                // );
            };

            service.update = function (storyId, story) {
                // return $http.put(
                //     EndpointConfigService.getUrlForId(MODEL, story_id), story
                // );
            };

            service.destroy = function (storyId) {
                // return $http.delete(
                //     EndpointConfigService.getUrlForId(MODEL, story_id)
                // );
            };

            service.trucks = [
              {
                licensePlate: '1808HIV',
                status: 'working',
                followed: true,
                driver: {
                  name: 'Juan Pedro M'
                }
              },
                {
                  licensePlate: '0153GCN',
                  status: 'working',
                  followed: true,
                  driver: {
                    name: 'Carlos Garcia'
                  }
                },
                {
                  licensePlate: '3301BBC',
                  status: 'working',
                  followed: false,
                  driver: {
                    name: 'Grande'
                  }
                },
                {
                  licensePlate: '3712CXF',
                  status: 'idle',
                  followed: false,
                  driver: {
                    name: 'NO hay camionero'
                  }
                }
              ];

        });
