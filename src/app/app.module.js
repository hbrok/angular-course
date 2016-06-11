(function () {
    'use strict';

    // Styles
    require('./sass/app.scss');
    require('materialize-css/sass/materialize.scss');
    // require('angular-material');

    // Angular
    var angular = require('angular');
    var ngRoute = require('angular-route');
    var ngAnimate = require('angular-animate');
    var Firebase = require('firebase');
    var angularfire = require('angularfire');

    // Core
    var core = require('./core/core.module.js');
    var constants = require('./core/constants.js');
    var partyService = require('./core/party.service.js');
    var firebaseData = require('./core/firebaseData.service.js');
    var textMessage = require('./core/textMessage.service.js');

    // Auth
    var auth = require('./auth/auth.module.js');
    var authConfig = require('./auth/config.route.js');
    var authController = require('./auth/auth.controller.js');
    var authService = require('./auth/auth.service.js');
    var authForm = require('./auth/directives/authForm.directive.js');

    // Landing
    var landing = require('./landing/landing.module.js');
    var landingConfig = require('./landing/config.route.js');

    // WaitList
    var waitList = require('./waitList/waitList.module.js');
    var waitListConfig = require('./waitList/config.route.js');
    var waitListController = require('./waitList/waitList.controller.js');
    var partyForm = require('./waitList/directives/partyForm.directive.js');
    var partyTable = require('./waitList/directives/partyTable.directive.js');

    // Layout
    var layout = require('./layout/layout.module.js');
    var navbar = require('./layout/navbar.directive.js');

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
