(function() {
    'use strict';

    angular
        .module('app.waitList')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/waitlist', {
            template: require('./waitList.html'),
            controller: 'WaitListController',
            controllerAs: 'vm',
            resolve: {
                user: resolveUser
            }
        });

        resolveUser.$inject = ['authService'];

        function resolveUser(authService) {
            return authService.firebaseAuthObject.$requireSignIn();
        }
    }
})();
