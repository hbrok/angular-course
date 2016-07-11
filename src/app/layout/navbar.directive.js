(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('weNavbar', weNavbar);

    function weNavbar() {
        // Returns directive definition object.
        return {
            template: require('./navbar.html'),
            restrict: 'E',
            scope: {},
            controller: NavbarController,
            controllerAs: 'vm'
        };
    }

    NavbarController.$inject = ['$location', 'authService'];

    function NavbarController($location, authService) {
        var vm = this;

        vm.isLoggedIn = authService.isLoggedIn;
        vm.logout = logout;

        function logout() {
            authService.logout();
            $location.path('/');
        }
    }

})();
