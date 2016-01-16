angular.module('ElGarabato.TruckBoard')
  .directive('truck', function(){
    var linker = function (scope, element, attrs) {
        element
             .mouseover(function () {
                 element.css({ 'opacity': 0.9 });
             })
             .mouseout(function () {
                 element.css({ 'opacity': 1.0 })
             });
    };

    var controller = function () {
        var truckController = this;
        truckController.switchFollow = function(truck) {
          console.log('Swithing followed status from: ' + truck.followed + ' to ' + !truck.followed);
          truck.followed = !truck.followed;
        };

        truckController.startWork = function(truck) {
          // TODO inject STATUSES
          truck.status = 'working';
          // By default when a truck is enabled it means that you want to follow it.
          truck.followed = true;
        };

        truckController.stopWork = function(truck) {
          // TODO inject STATUSES
          truck.status = 'idle';
          truck.followed = false;
        };
    };

    return {
        restrict: 'A',
        controller: controller,
        controllerAs: 'truckController',
        link: linker,
        scope: true,
        replace: true,
        templateUrl: 'truckboard/tmpl/truck_directive_tmpl.html'
        //template: '<li class="list-group-item"><div class="row"><div class="col-xs-6 col-sm-2 col-md-4"><p><strong>{{truck.licensePlate}}</strong><br/>{{truck.driver.name}}</p></div><div class="col-md-4"><div class="btn-group"><button type="button" class="btn btn-default btn-sm" ng-show="{{truck.followed == true}}" class="ng-hide" onclick="truckController.switchFollow(truck)"><span class="glyphicon glyphicon-remove"></span> Ocultar </button><button type="button" class="btn btn-default btn-sm" ng-show="{{truck.status == \'working\' && truck.followed == false}}" class="ng-hide" onclick="truckController.switchFollow(truck)"><span class="glyphicon glyphicon-remove"></span> Seguir </button><div></div></div></li>'
    };

  });
