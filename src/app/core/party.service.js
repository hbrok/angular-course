(function(){
    'use strict';
    
    angular
        .module('app.core')
        // returns JS object, so you can put your stuff there and do functions on that
        // function that's run when service is created
        .factory('partyService', partyService);
    
    partyService.$inject = ['$firebaseArray', 'firebaseDataService'];
    
    // returns object that is used througout application
    function partyService($firebaseArray, firebaseDataService) {
        var service = {
            Party: Party,
            getPartiesByUser: getPartiesByUser
        };
        
        return service;
        
        //////////////
        
        function Party() {
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false; // Has this party been served already?
            this.notified = false; // Has party gotten text message?
        }
        
        function getPartiesByUser(uid) {
            return $firebaseArray(firebaseDataService.users.child(uid).child('parties'));
        }
    }
})();