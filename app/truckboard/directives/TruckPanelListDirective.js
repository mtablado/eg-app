angular.module('ElGarabato.TruckBoard')
  .directive('truckPanel', function(){
    var linker = function (scope, element, attrs) {
        // element
        //     .mouseover(function () {
        //         element.css({ 'opacity': 0.9 });
        //     })
        //     .mouseout(function () {
        //         element.css({ 'opacity': 1.0 })
        //     });
    };

    var controller = function () {
        var truckPanelCtrl = this;
    };

    return {
        restrict: 'AE',
        controller: controller,
        controllerAs: 'truckPanelCtrl',
        link: linker,
        scope: {
          trucks: '=' // We need bidirectional scope to be used at ng-repeat
        },
        replace: true,
        //template: '<p>miguel</p>'
        templateUrl: 'truckboard/tmpl/truck_panel_list_directive.html'
    };

  });
