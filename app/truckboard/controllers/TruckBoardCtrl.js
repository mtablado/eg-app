angular.module('ElGarabato.TruckBoard')
  .controller('TruckBoardCtrl', function($scope, TRUCK_STATUSES, _TrucksModel_) {
    'use strict';

    var truckboard = this;
    var TrucksModel = _TrucksModel_;
    truckboard.statuses = TRUCK_STATUSES;

    console.log('$scope', $scope);

    console.log('Initializing TruckBoardCtrl');

    truckboard.getTrucks = function() {
      console.log('TruckBoard controller getting trucks');
      return TrucksModel.all();
    };

  });
