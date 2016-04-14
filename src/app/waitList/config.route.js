(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/waitlist', {
            templateUrl: 'app/waitList/waitList.html',
            controller: 'WaitListController',
            controllerAs: 'vm' // should be same as 'this' in the controller
        });
    }
})();