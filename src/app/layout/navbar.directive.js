(function(){
    'use strict';
    
    angular
        .module('app.layout')
        .directive('weNavbar', weNavbar);
    
    function weNavbar() {
        // Returns directive definition object
        return {
            templateUrl: 'app/layout/navbar.html',
            // Tells Angular how we are going to use this directive
            restrict: 'E',
            // Isolates scope, allows directive to ONLY access data defined in this controller and nothing else. Without this, if it is nested inside a parent controller, it can access data in the parent controller. This is bad, because you could accidentally modify the data on accident, and data you need isn't clear.
            // If you need data from parent, explicily pass in the data you need.
            // scope: { data: data, ... }
            // person using this knows exactly what data it needs to work
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