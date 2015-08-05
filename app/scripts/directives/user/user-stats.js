/**
 * Created by Miguel on 12/11/2014.
 */
estars.directive('userStats', ['statsService', function (statsService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/user/user-stats.html',
        scope: {
            user: '@',
            game: '@'
        },
        link: function (scope, elem, attr) {
            scope.options = {
                chart: {
                    type: 'cumulativeLineChart',
                    height: 310,
                    margin: {
                        top: 40,
                        right: 0,
                        bottom: 20,
                        left: 70
                    },
                    x: function (d) {
                        return d[0];
                    },
                    y: function (d) {
                        return d[1];
                    },
                    useVoronoi: false,
                    clipEdge: false,
                    transitionDuration: 500,
                    useInteractiveGuideline: true,

                    yAxis: {
                        tickFormat: function (d) {
                            return d3.format(',.2f')(d);
                        }
                    }
                }
            };
            scope.type_graph = '';

            scope.data = []
            scope.data_graph = function (type) {
                if (type != scope.type_graph) {
                    statsService.$getDataGraph(scope.game, scope.user, type).then(function (data) {
                        scope.data = [
                            {
                                'key': data.key,
                                'values': data.values
                            }
                        ];
                    });
                    scope.type_graph = type;
                }

            }
            scope.$watch('game', function (val) {
                if (!_.isEmpty(val)) {
                    scope.have_data = true
                    statsService.$findStatsByUserAndGame(val, scope.user).then(function (data) {
                        scope.stats = data;
                        scope.stats.lvl = 1
                        scope.data_graph('kills')

                    })
                } else {
                    scope.have_data = false
                }

            })
        }
    }
}]);