'use strict';

xdescribe('Service: Truck', function () {

  // load the service's module
  beforeEach(module('ElGarabato'));

  // instantiate service
  var Truck;
  beforeEach(inject(function (_Truck_) {
    Truck = _Truck_;
  }));

  it('should do something', function () {
    expect(!!Truck).toBe(true);
  });

});
