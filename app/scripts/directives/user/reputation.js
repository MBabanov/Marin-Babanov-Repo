/**
 * Created by Miguel on 28/09/2014.
 */
estars.directive('reputation', ['$timeout', function ($timeout) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/user/reputation.html',
        scope: {
            reputation: '@'
        },
        link: function ($scope, $element, $attrs) {
            $scope.value = parseInt($scope.reputation);
            $scope.value = 4;
            $scope.stars = []
            for (i = 0; i < $scope.value; i++) {
                $scope.stars.push(i);
            }
        }
    }
}]);