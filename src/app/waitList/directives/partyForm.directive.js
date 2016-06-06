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
            bindToController: true, // binds properties in scope the this contoller, without this you have to inject scope service and access parties through that service.
            scope: {
                parties: '=' // two way binding
            } // isolated scope, breaks connections between this and parent scope, look at nav bar directive video
        };
    }
    
    PartyFormController.$inject = ['partyService'];
    
    function PartyFormController(partyService) {
        var vm = this;
        
        vm.newParty = new partyService.Party();
        vm.addParty = addParty;
        
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new partyService.Party();
        }
    }
})();