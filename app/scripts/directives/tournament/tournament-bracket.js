/**
 * Created by Miguel on 19/10/2014.
 */


estars.directive('tournamentBracket', ['$timeout', function ($timeout) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/brackets.html',
        scope: {
            rounds: '=',
            teams: '=',
            matches: '='
        },
        link: function (scope, elem, attr) {
            scope.$watch('rounds', function (val) {

            });
        }
    }
}]);