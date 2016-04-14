(function() {
    'use strict';
    
    angular
        .module('app.auth')
        .service('authService', authService);
    
    authService.$inject = ['$firebaseAuth', 'firebaseDataService'];
    
    function authService($firebaseAuth, firebaseDataService) {
        var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);
        
        var service = {
            register: register,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn
        };
        
        return service;
        
        ///////////////
        
        function register(user) {
            return firebaseAuthObject.$createUser(user);
        }
        
        function login(user) {
            return firebaseAuthObject.$authWithPassword(user);
        }
        
        function logout() {
            firebaseAuthObject.$unauth();
            console.log('logout');
        }
        
        function isLoggedIn() {
            return firebaseAuthObject.$getAuth();
        }
    }
})();