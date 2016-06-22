(function () {
    'use strict';

    // Styles
    require('./sass/app.scss');
    require('materialize-css/sass/materialize.scss');
    // require('angular-material');

    // Angular
    require('angular');
    require('angular-route');
    require('angular-animate');
    require('firebase');
    require('angularfire');

    // Core
    require('./core/core.module.js');
    require('./core/constants.js');
    require('./core/party.service.js');
    require('./core/firebaseData.service.js');
    require('./core/textMessage.service.js');

    // Auth
    require('./auth/auth.module.js');
    require('./auth/config.route.js');
    require('./auth/auth.controller.js');
    require('./auth/auth.service.js');
    var authForm = require('./auth/directives/authForm.directive.js');

    // Landing
    require('./landing/landing.module.js');
    require('./landing/config.route.js');

    // WaitList
    require('./waitList/waitList.module.js');
    require('./waitList/config.route.js');
    require('./waitList/waitList.controller.js');
    require('./waitList/directives/partyForm.directive.js');
    require('./waitList/directives/partyTable.directive.js');

    // Layout
    require('./layout/layout.module.js');
    require('./layout/navbar.directive.js');

    angular
        .module('app', [
            // Angular modules.
            'ngRoute',
            'ngAnimate',

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
        });
    }

})();
