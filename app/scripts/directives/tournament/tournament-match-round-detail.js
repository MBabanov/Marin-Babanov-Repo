/**
 * Created by Miguel on 11/12/2014.
 */



estars.directive('tournamentMatchRoundDetail', ['tournamentService', tournament_match_round_details]);

function tournament_match_round_details(tournamentService) {
    var directive = {
        link: link,
        replace: true,
        templateUrl: 'views/layouts/directives/tournament/tournament-match-round-detail.html',
        restrict: 'EA',
        scope: {
            match: '='
        }
    };
    return directive;

    function link(scope, element, attrs) {
        scope.$watch("match", function (match) {
            if (!_.isUndefined(match)) {
                console.log("MATCH DE ROUND DETAILS", match)
                tournamentService.get_tournament_match_info(scope.match).then(function (data) {
                    scope.match_detail = data;
                    angular.forEach(scope.match.ranking, function (r) {
                        if (r.wins == 1) {
                            scope.winner = top_player(r);
                        } else {
                            scope.losser = top_player(r);
                        }
                    })
                });
            }
        })

        function top_player(team) {
            var ranking = team.rank_players;
            var top = _.max(team.rank_players, 'points');

            return top;
        }
    }
}