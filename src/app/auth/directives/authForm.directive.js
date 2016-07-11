(function() {
    'user strict';

    angular
        .module('app.auth')
        .directive('hbAuthForm', hbAuthForm);

    function hbAuthForm() {
        return {
            template: require('./authForm.html'),
            restrict: 'E',
            controller: AuthFormController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                error: '=', // objects
                formTitle: '@', // strings
                submitAction: '&' // function expression
            }
        };
    }

    function AuthFormController() {
        var vm = this;

        vm.user = {
            email: '',
            password: ''
        };
    }
})();
