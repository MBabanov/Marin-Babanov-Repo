/**
 * Created by Miguel on 06/10/2014.
 */


estars.directive('userRank', ['$timeout', 'statsService', function ($timeout, statsService) {

    var directive = {
        replace: true,
        restrict: 'AC',
        templateUrl: 'views/layouts/directives/ranking/user-rank.html',
        scope: {
            player: '=',
            game: '='
        },
        link: link
    }
    return directive;

    function link($scope, $element, $attrs) {
        $scope._player = $scope.player;
        console.log($scope._player);
        var option_graph;
        var graph
        statsService.$findStatsByUserAndGame($scope.game.id, $scope._player.id).then(function (data) {
            $scope.stats = data;
//            console.log($scope.stats);
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
        })
        angular.forEach($scope._player.games_lvl, function (_g) {
            if (_g.game.id == $scope.game.id) {
                $scope.lvl = _g;
            }
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

}]);

