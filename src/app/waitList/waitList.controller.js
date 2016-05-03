(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    // $inject amkes angular look for the dependenccies defined in array
    // Positional -- names in controller fn don't have to match, only the order does
    WaitListController.$inject = ['textMessageService', 'partyService', 'user']

    function WaitListController(textMessageService, partyService, user) {
        var vm = this;

        // Add functions to view model
        vm.newParty = new partyService.Party();
        vm.parties = partyService.getPartiesByUser(user.uid);
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;
        vm.toggleDone = toggleDone;

        // Function definitions
        // Add party to parties array
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new partyService.Party();
        }

        // Removes specified party from parties array
        function removeParty(party) {
            vm.parties.$remove(party);
        }

        function sendTextMessage(party) {
            textMessageService.sendTextMessage(party, vm.parties);
        }

        function toggleDone(party) {
            vm.parties.$save(party);
        }
    }

})();
