/**
 * Created by Miguel on 11/12/2014.
 */


estars.directive('tournamentLastScore', tournament_last_score);

function tournament_last_score() {
    var directive = {
        link: link,
        replace: true,
        templateUrl: 'views/layouts/directives/tournament/tournament-last-score.html',
        restrict: 'EA',
        scope: {
            tournaments: '='
        }
    };
    return directive;

    function link(scope, element, attrs) {
        scope.$watchCollection("tournaments", function (newValue, oldValue) {
            set_scores()

        });
        scope.scores = [];
        function set_scores() {
            scope.scores = [];
            angular.forEach(scope.tournaments, function (tournament) {
                var _tournament = {
                    id: tournament.id,
                    name: tournament.name,
                    type: tournament.cast_type,
                    ranking: []
                }

                angular.forEach(tournament.ranking, function (r) {
                    angular.forEach(r.rank_players, function (p) {
                        var player = {
                            username: p.player.user.username,
                            position: p.position,
                            prize: p.prize
                        }
                        _tournament.ranking.push(player);
                    })
                })
                _tournament.ranking = _.sortBy(_tournament.ranking, 'position');
                scope.scores.push(_tournament);

            });

        }

    }
}