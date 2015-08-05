/**
 * Created by Miguel on 22/09/2014.
 */


estars.controller('download.index', ['$scope', '$modalInstance', '$rootScope', function ($scope, $modalInstance, $rootScope) {
    $scope.toggleMenu = function (item) {
        if (_.isEmpty($scope.menuItem)) {
            $scope.menuItem = item;
        } else {
            if ($scope.menuItem == item) {
                $scope.menuItem = "";
            } else {
                $scope.menuItem = item;
            }
        }

    }
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    }
    $rootScope.$on('me:sync', function (event, msg) {
        $modalInstance.dismiss('cancel');
    });
}]);
