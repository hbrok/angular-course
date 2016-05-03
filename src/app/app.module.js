// IIFE, best practice as per johnpapa styleguide
(function () {
    'use strict';
    
    angular
        .module('app', [
            // Angular modules.
            'ngRoute',

            // Third party modules.
            'firebase',
        
            // Custom modules.
            'app.core',
            'app.landing',
            'app.waitList',
            'app.auth',
            'app.layout'
        ])
        .config(configFunction)
        .run(runFunction);
        
    configFunction.$inject = ['$routeProvider'];
        
    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/' 
        });
    }
    
    runFunction.$inject = ['$rootScope', '$location'];

    function runFunction($rootScope, $location) {
        // Redirect users to landing page if not logged in
        $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
            if (error === 'AUTH_REQUIRED') {
                $location.path('/');
            }
        })
    }
    
})();

// Folders-by-Feature structure
// Folders per features they represent.
