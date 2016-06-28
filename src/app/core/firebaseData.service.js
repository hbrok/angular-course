(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('firebaseDataService', firebaseDataService);

    firebaseDataService.$inject = ['API_KEY'];

    function firebaseDataService(API_KEY) {
        var config = {
            apiKey: API_KEY,
            authDomain: "waitlistcourse.firebaseapp.com",
            databaseURL: "https://waitlistcourse.firebaseio.com",
            storageBucket: "waitlistcourse.appspot.com",
        };
        firebase.initializeApp(config);

        // var root = new Firebase(FIREBASE_URL);
        var root = firebase.database().ref();

        var service = {
            root: root,
            users: root.child('users'),
            emails: root.child('emails'),
            textMessages: root.child('textMessages')
        };

        return service;
    }
})();
