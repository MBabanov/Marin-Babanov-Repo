/**
 * Created by bigpig on 19/06/14.
 */

estars.controller('login.index', ['$scope', 'AuthenticationService', '$state', '$modalInstance', '$rootScope', function ($scope, AuthenticationService, $state, $modalInstance, $rootScope) {
    $scope.join = function (user) {
        AuthenticationService.login(user).then(function (loggedUser) {
        }, function (data) {

        });
    };
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $modalInstance.close();
    });
}]);

estars.controller('login.landing', ['$scope', 'AuthenticationService', '$state', function ($scope, AuthenticationService, $state) {
    $scope.user = {
        username: '',
        password: ''
    }
    $scope.remeber = false;
    $scope.join = function (user) {
        AuthenticationService.login(user, $scope.remember).then(function (loggedUser) {

        }, function (data) {

        })
    }
    AuthenticationService.login_remember_me();

}]);

estars.controller('password.reset', ['$scope', 'vcRecaptchaService', 'userService', 'messageService', '$state', '$modalInstance', 'ELECTRONIC', function ($scope, vcRecaptchaService, userService, messageService, $state, $modalInstance, ELECTRONIC) {
    var vm = this;
    vm.key = ELECTRONIC.G_CAPTHA;
    vm.request_code = request_code_change_password;
    vm.close = close;
    function request_code_change_password() {
        var response = '12345678';
        var data = {
            email: vm.email,
            captcha: response
        }
        userService.reset_password_code(data).then(successfull_requested_code, failure_requested_code);

    }

    function successfull_requested_code() {
        messageService.recovery_success_password();
        $modalInstance.close()
        $state.go('landing.index');
    }

    function failure_requested_code() {
        messageService.recovery_fail_password()
        vm.email = '';
        vcRecaptchaService.reload();
    }

    function close() {
        $modalInstance.close();
        $state.go('landing.index');
    }

}]);

estars.controller('password.updated', ['$scope', 'userService', '$stateParams', '$state', 'messageService', function ($scope, userService, $stateParams, $state, messageService) {
    var vm = this;
    if (_.isUndefined($stateParams.e)) {
        $state.go('landing.index');
    }

    vm.user = {
        username: $stateParams.username,
        token: $stateParams.e,
        password: '',
        repeated_password: ''
    }
    vm.request_code = update_password_with_token;
    function update_password_with_token() {
        userService.update_password_token(vm.user).then(updated_success, update_failure);
    }

    function updated_success() {
        messageService.updated_success_password();
        $state.go('landing.index');
    }

    function update_failure(data) {

    }

}]);