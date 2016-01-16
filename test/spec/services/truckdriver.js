'use strict';

xdescribe('Service: TruckDriver', function () {

  // load the service's module
  beforeEach(module('ElGarabato'));

  // instantiate service
  var TruckDriver;
  beforeEach(inject(function (_TruckDriver_) {
    TruckDriver = _TruckDriver_;
  }));

  it('should do something', function () {
    expect(!!TruckDriver).toBe(true);
  });

});
