/**
 * Created by Miguel on 29/12/2014.
 */

estars.directive('tournamentPostTournament', ['SessionService', 'statsService', function (SessionService, statsService) {
    return{
        replace: true,
        restrict: 'AC',
        templateUrl: 'views/layouts/directives/tournament/tournament-post-tournament.html',
        scope: {
            tournament: '='
        },
        link: link
    }
    function link($scope, $element, $attrs) {
        $scope.me = SessionService.currentUser;
        $scope.type = 'T';
        $scope.$watch('tournament', check_type)

        function check_type(t) {
            if (t.config.type_cls == 'DM') {
                $scope.type = 'DM';
            } else if (t.config.type_cls == 'SE') {
                $scope.type = 'T';
            }

        }
    }

}]);
