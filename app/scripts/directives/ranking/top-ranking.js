/**
 * Created by Miguel on 10/10/2014.
 */
estars.directive('topGameRanking', ['SessionService', function (SessionService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/ranking/top-ranking.html',
        scope: {
            users: '='


        },
        link: function ($scope, $element, $attrs) {
            $scope.me = SessionService.currentUser;
        }
    }
}]);