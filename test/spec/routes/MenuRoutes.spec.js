describe('Menu routes', function () {
    var $route,
        $rootScope,
        $location,
        url = 'login';

    // Inject and assign the $route and $rootScope services.
    // Put the template in template cache.

    beforeEach(module('ElGarabato'));

    beforeEach(inject(function (_$location_, _$route_, $templateCache, _$rootScope_) {
        $route = _$route_;
        $rootScope = _$rootScope_;
        $location = _$location_;

        $templateCache.put('elgarabato/views/main.html', '');
    }));

    it('main page should be defined with correct controller and templateUrl', function() {
        $location.path("/");
        $rootScope.$digest();

        expect($route.current.controller).toEqual('MainCtrl');
        expect($route.current.controllerAs).toEqual('main');
        expect($route.current.templateUrl).toEqual('elgarabato/views/main.html');
    });

    it('about page should be defined with correct controller and templateUrl', function() {
        $location.path("about");
        $rootScope.$digest();

        expect($route.current.controller).toEqual('AboutCtrl');
        expect($route.current.controllerAs).toEqual('about');
        expect($route.current.templateUrl).toEqual('elgarabato/views/about.html');
    });

    it('traffic page should be defined with correct controller and templateUrl', function() {
        $location.path("traffic");
        $rootScope.$digest();

        expect($route.current.controller).toEqual('TrafficBoardCtrl');
        expect($route.current.controllerAs).toEqual('traffic');
        expect($route.current.templateUrl).toEqual('trafficboard/tmpl/trafficboard.html');
    });

    it('truckboard page should be defined with correct controller and templateUrl', function() {
        $location.path("truckboard");
        $rootScope.$digest();

        expect($route.current.controller).toEqual('TruckBoardCtrl');
        expect($route.current.controllerAs).toEqual('truckboard');
        expect($route.current.templateUrl).toEqual('truckboard/tml/truckboard.html');
    });

});
