/**
 * Created by Miguel on 30/01/2015.
 */


estars.directive('userHardware', ['SessionService', '$rootScope', function (SessionService, $rootScope) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/user/user-hardware.html',
        scope: {
            user: '='
        },
        link: link
    }
    function link($scope, $element, $attrs) {
        $scope.its_current_user = false;
        $scope.have_hardware = false;
        $scope.sync = false;
        $scope.get_hardware = request_user_hardware;
        if (SessionService.is_logged) {
            if (SessionService.currentUser.username == $scope.user.username) {
                $scope.its_current_user = true;
            }
        }
        if ($scope.its_current_user) {
            $scope.sync = SessionService.currentUser.sincronized;
        }
        if (!_.isUndefined($scope.user.hardware.so)) {
            $scope.have_hardware = true;
        }
        function request_user_hardware() {
            SessionService.currentUser.detect_hardware();
        }

        $rootScope.$on('me:hardware:sync', function (event, data) {

            $scope.user.hardware = data;
            $scope.have_hardware = true;
        });
        $rootScope.$on('me:sync', function (event, msg) {
            $scope.sync = true;

        });
    }

}]);