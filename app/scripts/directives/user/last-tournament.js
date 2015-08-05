/**
 * Created by Miguel on 12/11/2014.
 */
estars.directive('lastTournament', ['statsService', function (statsService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/user/last-tournament.html',
        scope: {
            user: "@",
            tournament: "="
        },
        link: function (scope, elem, attr) {
            scope.have_data = false;
//            console.log("LAST_TOURNAMNET", scope.tournament)
            scope.$watch('tournament', function (val) {

                if (!_.isEmpty(val)) {
                    statsService.$findLastTournamentStatsByGame(val, scope.user).then(function (data) {
                        scope.stats = data;
                        scope.have_data = true
                    })
                } else {
                    scope.have_data = false
                }

            })
        }
    }
}]);