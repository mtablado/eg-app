(function() {
  'use strict';

  describe('PlacesModel', function() {

      var service;

      beforeEach(module('ElGarabato.Common'));

      beforeEach(inject(function (_PlacesModel_) {
          service = _PlacesModel_;
      }));


      describe('The PlacesModel structure', function() {

        it('should contain a getFarms function', function() {
          expect(typeof service.getFarms).toBe('function');
        });


        it('should contain a getDestinations function', function() {
          expect(typeof service.getDestinations).toBe('function');
        });

      });

      it('should return an array when getFarms is invoked', function() {
        var farms = service.getFarms();
        expect(Array.isArray(farms)).toBeTruthy();
      });

      it('should return an array when getDestinations is invoked', function() {
        var destinations = service.getDestinations();
        expect(Array.isArray(destinations)).toBeTruthy();
      });
  });
}());
