'use strict';

xdescribe('Controller: MapCtrl', function () {

  // load the controller's module
  beforeEach(module('ElGarabato'));

  var MapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapCtrl = $controller('MapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a map to the scope', function () {
    expect(MapCtrl.map).toBeTruthy();
  });

  it('should attach a list of trucks to the scope', function() {
    expect(MapCtrl.trucks).toBeTruthy();
  });

  it('should attach a firm to the scope', function() {
    expect(MapCtrl.firm).toBeTruthy();
  });

});
