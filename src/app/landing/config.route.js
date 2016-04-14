(function() {
    'use strict';
    
    // angular.module with ONLY NAME and no dependcies ([]) will return that module
    angular
        .module('app.landing')
        .config(configFunction)
    
    
    // make anything in array availbale to this function
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routerProvider) {
        $routerProvider.when('/', {
           templateUrl: 'app/landing/landing.html' 
        });
    }
    
})();
