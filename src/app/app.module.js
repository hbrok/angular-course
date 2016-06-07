// import angular from 'angular';
// import ngRoute from 'angular-route';
// import firebase from 'firebase';

//
// export default FirebaseAdapter.extend({
//   firebase: new Firebase(config.firebase)
// });

// import '../style/app.css';

// IIFE, best practice as per johnpapa styleguide
(function () {
    'use strict';

    var angular = require('angular');
    var ngRoute = require('angular-route');
    var firebase = require('angularfire');

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
