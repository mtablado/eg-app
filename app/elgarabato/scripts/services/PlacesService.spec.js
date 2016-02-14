(function() {
  'use strict';

  describe('PlacesService', function() {

      var service;
      var placesModel;
      var emptyArray = [];

      beforeEach(module('ElGarabato.Common'));

      beforeEach(inject(function (_PlacesService_, _PlacesModel_) {
          service = _PlacesService_;
          placesModel = _PlacesModel_;

          spyOn(placesModel, 'getFarms').and.returnValue(emptyArray);
          spyOn(placesModel, 'getDestinations').and.returnValue(emptyArray);
      }));


      describe('The PlacesService structure', function() {

        it('should contain a getFarms function', function() {
          expect(typeof service.getFarms).toBe('function');
        });


        it('should contain a getDestinations function', function() {
          expect(typeof service.getDestinations).toBe('function');
        });

      });

      it('should delegate to places model getFarms is invoked', function() {
        var farms = service.getFarms();
        expect(placesModel.getFarms).toHaveBeenCalled();
        expect(farms).toEqual(emptyArray);
      });

      it('should delegate to places model getDestinations is invoked', function() {
        var destinations = service.getDestinations();
        expect(placesModel.getDestinations).toHaveBeenCalled();
        expect(destinations).toEqual(emptyArray);
      });

  });
}());
