/**
 * Created by Miguel on 20/10/2014.
 */


estars.directive('tournamentStats', [ function () {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-stats.html',
        scope: {
            stats: '='

        },
        link: function (scope, elem, attr) {

            scope.$watch('stats', function (val) {
                scope.stats = val;

            })
        }
    }
}]);