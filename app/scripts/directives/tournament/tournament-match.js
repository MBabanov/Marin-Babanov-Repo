/**
 * Created by Miguel on 28/10/2014.
 */


estars.directive('tournamentMatch', ['matchService', function (matchService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-match.html',
        scope: {
            match: '=',
            stats: '='

        },
        link: function (scope, elem, attr) {
            scope.$watch('match', function (val) {
                if (!_.isUndefined(val)) {
                    scope.match = val;
                }

            })

        }
    }
}]);