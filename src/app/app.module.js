// IIFE, best practice as per johnpapa styleguide
(function () {
    'use strict';
    
    angular
        .module('app', [
            // Angular modules.
            'ngRoute',

            // Third party modules.
            'firebase',
        
            // Custom modules.
            'app.core',
            'app.landing',
            'app.waitList',
            'app.auth'
        ]);
})();

// Folders-by-Feature structure
// Folders per features they represent.
