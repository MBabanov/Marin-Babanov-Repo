/**
 * Created by Miguel on 11/12/2014.
 */



estars.directive('tournamentWeeklyWinners', tournament_weekly_winners);

function tournament_weekly_winners() {
    var directive = {
        link: link,
        replace: true,
        templateUrl: 'views/layouts/directives/tournament/tournament-weekly-winners.html',
        restrict: 'EA',
        scope: {
            tournaments: '='
        }
    };
    return directive;

    function link(scope, element, attrs) {
        scope.$watchCollection("tournaments", function (newValue, oldValue) {
//            console.log("WATCH", newValue);
            set_winners()

        });
        function set_winners() {
            scope.winners = [];
            angular.forEach(scope.tournaments, function (t) {
                var winner = {
                    id: t.id,
                    name: t.name,
                    players: [],
                    type:t.cash_type
                }
                if (t.ranking.length == 1) {
                    angular.forEach(t.ranking[0].rank_players, function (p) {
                        if (p.have_prize) {
                            winner.players.push(p);
                        }
                    })
                } else {
                    angular.forEach(t.ranking, function (r) {
                        if (r.wins > 0) {
                            angular.forEach(r.rank_players, function (p) {
                                if (p.have_prize) {
                                    winner.players.push(p);
                                }
                            })
                        }

                    })
                }
                scope.winners.push(winner);
            });
        }

    }
}