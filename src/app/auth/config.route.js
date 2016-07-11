(function() {
    'use strict';

    angular
        .module('app.auth')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/register', {
            template: require('./register.html'),
            controller: 'AuthController',
            controllerAs: 'vm'
        });

        $routeProvider.when('/login', {
            template: require('./login.html'),
            controller: 'AuthController',
            controllerAs: 'vm'
        });
    }
}());
