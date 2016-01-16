angular.module('ElGarabato.TruckBoard')
  .controller('TruckBoardCtrl', function($scope, TRUCK_STATUSES, _TrucksModel_) {

    var truckboard = this;
    var TrucksModel = _TrucksModel_;
    truckboard.statuses = TRUCK_STATUSES;

    console.log('$scope', $scope);

    console.log('Initializing TruckBoardCtrl');

    truckboard.getTrucks = function() {
      console.log('TruckBoard controller getting trucks');
      return TrucksModel.all();
    };

    truckboard.setDriver = function(truck, driver) {

    };

    truckboard.removeDriver = function(truck) {

    };


    console.log('trucks:' + truckboard.getTrucks());
  });
