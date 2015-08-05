/**
 * Created by Miguel on 29/12/2014.
 */

estars.directive('tournamentPostMatchPlayer', ['$timeout', 'statsService', function ($timeout, statsService) {
    return{
        replace: true,
        restrict: 'AC',
        templateUrl: 'views/layouts/directives/tournament/tournament-post-match-user.html',
        scope: {
            player: '=',
            tournament: '='

        },
        link: link
    }

    function link($scope, $element, $attrs) {
        $scope._player = $scope.player.rank_players[0];

        var game_id = $scope.tournament.config.game_id;
        var user_levels = $scope._player.player.user.games_lvl;
        $scope.user_level = _.find(user_levels, function (lvl) {
            return lvl.game.id == game_id;
        });

        statsService.$findLastTournamentStatsByGame($scope.tournament.id, $scope._player.player.user.id).then(function (data) {
            $scope.stats = data;
            option_graph = {
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#DF3B45'],
                calculable: true,
                polar: [
                    {
                        indicator: [
                            {text: 'kills', max: 100000},
                            {text: 'deaths', max: 100000},
                            {text: 'headshots', max: 100000},
                            {text: 'accuracy', max: 100},
                            {text: 'shots', max: 1000000},
                            {text: 'hits', max: 1000000}
                        ],
                        radius: '70%',
                        name: {

                            textStyle: {color: '#FFF'}
                        }
                    }
                ],
                series: [
                    {
                        type: 'radar',
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                }
                            }
                        },
                        data: [
                            {
                                value: [data.kills, data.deaths, data.headshots, parseFloat(data.acuracy), data.shots_fired, data.shots_hit],
                                name: $scope._player.username
                            }

                        ]
                    }
                ],
                textStyle: {
                    color: '#FFFFFF'
                }
            };
            $timeout(function () {
                graph = echarts.init($element.find('.graph')[0]);
                graph.setOption(option_graph);
            }, 0);

        });

        var options = {
            flipDuration: ($attrs.flipDuration) ? $attrs.flipDuration : 400,
            timingFunction: 'ease-in-out'
        };

        // setting flip options
        angular.forEach(['player-front', 'player-back'], function (name) {
            var el = $element.find(name);
            if (el.length == 1) {
                angular.forEach(['', '-ms-', '-webkit-'], function (prefix) {
                    angular.element(el[0]).css(prefix + 'transition', 'all ' + options.flipDuration / 1000 + 's ' + options.timingFunction);
                });
            }
        });

        /**
         * behaviour for flipping effect.
         */
        $scope.flip = function () {
            $element.toggleClass('flipped');
        }
    }

    function reload() {
        $scope._player = $scope.player.rank_players[0];
        statsService.$findLastTournamentStatsByGame($scope.tournament, $scope._player.player.user.id).then(function (data) {
            $scope.stats = data;

        });
    }
}]);
