(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    // $inject makes angular look for the dependenccies defined in array.
    // Positional -- names in controller function don't have to match, but the order does.
    WaitListController.$inject = ['partyService', 'user']

    function WaitListController(partyService, user) {
        var vm = this;
        vm.parties = partyService.getPartiesByUser(user.uid);
    }
})();
