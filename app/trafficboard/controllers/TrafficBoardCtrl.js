angular.module('ElGarabato.TrafficBoard')
  .controller('TrafficBoardCtrl', function($scope, TRUCK_STATUSES, _TrucksModel_) {

    var traffic = this;
    var TrucksModel = _TrucksModel_;
    traffic.statuses = TRUCK_STATUSES;

    traffic.getTrucks = function() {
      console.log('TrafficBoard controller getting trucks');
      return TrucksModel.all();
    };

    traffic.setDriver = function(truck, driver) {

    };

    traffic.removeDriver = function(truck) {

    };


  });
