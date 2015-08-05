/**
 * Created by Miguel on 29/12/2014.
 */

estars.directive('tournamentPostMatchPlayerss', ['$timeout', 'statsService', function ($timeout, statsService) {
    return{
        replace: true,
        restrict: 'AC',
        templateUrl: 'views/layouts/directives/tournament/tournament-post-match-user.html',
        scope: {
            player: '=',
            tournament: '@'

        },
        link: link
    }

    function link($scope, $element, $attrs) {
        $scope._player = $scope.player.rank_players[0];
//        console.log($scope._player);
//        console.log("TORNEO DIRECTIVA", $scope.tournament);

        statsService.$findLastTournamentStatsByGame($scope.tournament.id, $scope._player.player.user.id).then(function (data) {
            $scope.stats = data;
//            console.log("STATS:", $scope.stats);

        });

        var option_graph = {
            tooltip: {
                trigger: 'axis'
            },
            color: ['#DF3B45'],
            calculable: false,
            polar: [
                {
                    indicator: [
                        {text: 'kills'},
                        {text: 'deaths'},
                        {text: 'headshots'},
                        {text: 'accuracy'},
                        {text: 'shots'},
                        {text: 'hits'}
                    ],
                    radius: 70
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
                            value: [97, 42, 88, 94, 90, 86],

                        }

                    ]
                }
            ],
            textStyle: {
                color: '#FFF'
            }
        };
        $timeout(function () {

            var graph = echarts.init($element.find('.graph')[0]);
            graph.setOption(option_graph);
        }, 0);

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
//            console.log("STATS:", $scope.stats);

        });
    }
}]);
