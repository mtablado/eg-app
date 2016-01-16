angular.module('ElGarabato.Map')
  .directive('egMap', function() {
    var linker = function (scope, element, attrs) {
        // element
        //      .mouseover(function () {
        //          element.css({ 'opacity': 0.9 });
        //      })
        //      .mouseout(function () {
        //          element.css({ 'opacity': 1.0 })
        //      });
    };

    var controller = function () {
        var mapController = this;
    };

    return {
        restrict: 'E',
        controller: controller,
        controllerAs: 'mapController',
        link: linker,
        scope: true,
        replace: true,
        templateUrl: 'map/tmpl/map_directive_tmpl.html'
    };

  });
