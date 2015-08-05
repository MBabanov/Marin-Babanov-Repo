/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 10/06/14
 * Time: 16:44
 * To change this template use File | Settings | File Templates.
 */


estars.controller('registration.index', ['$scope', 'countries', '$timeout', 'RegisterService', '$rootScope', '$modalInstance', '$state', 'sharedEmail', 'LanguageService', 'userService', function ($scope, countries, $timeout, RegisterService, $rootScope, $modalInstance, $state, sharedEmail, LanguageService, userService) {
    var vm = this;

    vm.registration_submitted_success = false;
    vm.countries = countries;
    vm.user = {};
    vm.register = register;
    vm.close = close;
    vm.find_users = retrieve_users;
    vm.get_email = get_email;
    vm.get_language = get_language;
    // change to use this 2 function instead the up 2
    vm.user.language = LanguageService.get_language();
    vm.user.email = sharedEmail.get_email();
    sharedEmail.remove_email();

    /* end */
    function get_email() {
        vm.user.email = sharedEmail.get_email();
    }

    function get_language() {
        vm.user.language = LanguageService.get_language();
    }

    function register() {
        RegisterService.register(vm.user).then(function (data) {
            vm.registration_submitted_success = true;
        }, function (error) {

        })
    }

    function close() {
        $state.go('landing.index');
    }

    function retrieve_users(username) {
        var users = [];
        return userService.$findUser(username).then(function (data) {
            return data
        });
        return users;
    }

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $modalInstance.close()
    })

}]);