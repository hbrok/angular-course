(function() {
    'use strict';

    angular
        .module('app.waitList')
        .directive('hbPartyForm', hbPartyForm);

    // Facotry Function -- function that returns an object
    function hbPartyForm() {
        return {
            templateUrl: 'app/waitList/directives/partyForm.html',
            restrict: 'E',
            controller: PartyFormController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                parties: '=' // two way binding
            }
        };
    }

    PartyFormController.$inject = ['partyService'];

    function PartyFormController(partyService) {
        var vm = this;

        vm.addParty = addParty;
        vm.newParty = new partyService.Party();

        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new partyService.Party();
        }
    }
})();
