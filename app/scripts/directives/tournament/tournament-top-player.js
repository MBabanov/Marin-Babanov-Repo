/**
 * Created by Miguel on 10/11/2014.
 */

estars.directive('tournamentTopPlayer', ['$timeout', 'userService', function ($timeout, userService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-top-player.html',
        scope: {
            tournament: '=',
            stats: '='

        },
        link: function (scope, elem, attr) {
            scope.$watch("tournament", function (tournament) {
                if (tournament.status == 'FINISHED') {
//                    console.log(tournament.ranking)
                    var players = _.sortBy(tournament.ranking[0].rank_players, function (r) {
                        return r.position;
                    });
                    scope.topPlayer = players[0].player.user
                } else if (tournament.status == 'REGISTRATION') {
                    userService.$findTopByGame(tournament.config.game_id).then(function (users) {

                        var player = users[0];
                        scope.topPlayer = {
                            username: player.username,
                            avatar: player.avatar
                        }

                    });

                }
            })

        }
    }
}]);