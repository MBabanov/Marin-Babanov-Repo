/**
 * Created by Miguel on 19/10/2014.
 */


estars.directive('tournamentElBracket', ['$timeout', '$compile', '$http', '$templateCache', function ($timeout, $compile, $http, $templateCache) {

    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-bracket.html',
        scope: {
            rounds: '=',
            teams: '=',
            matches: '=',
            winner: '='
        },
        link: {
            pre: pre_link,
            post: post_link
        }}
//            function (scope, elem, attr) {
//
//

    function pre_link(scope, elem, attr) {
        scope.total_rounds = _.size(scope.rounds);

        if (scope.total_rounds == 7) {
            scope.height = 37;
        } else if (scope.total_rounds == 6) {
            scope.height = 61;
        } else if (scope.total_rounds == 5) {
            scope.height = 100;
        } else if (scope.total_rounds <= 4) {
            scope.height = 150;
        }
        scope.team_winner = _.find(scope.teams, function (team) {
            return team.id == scope.winner;
        });

    }

    function post_link(scope, elem, attr) {

    }

}]);

estars.directive('tournamentBracketMatch', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return{
        replace: true,
        restrict: 'A',
        priority: 10,
        templateUrl: 'views/layouts/directives/tournament/tournament-bracket-match.html',
        scope: {
            round: '=',
            match: '=',
            current: '=',
            weight: '=',
            total: '='


        },
        link: {
            pre: function (scope, elem, attr) {

                angular.forEach(scope.match.teams, function (team) {
                    if (team.weight == 1) {
                        scope.team_1 = team;
                    } else {
                        scope.team_2 = team;
                    }
                })
                var height;
                if (scope.current == 1) {
                    height = scope.total * scope.current;
                } else {
                    var previus_height = elem.parent().parent().prev().find('.match').first().height();
                    height = previus_height * 2;
                }
                elem.height(height);
                elem.find('.connector').height(height);

            },
            post: function (scope, elem, attr) {
//                MATCH DIRECTIVE 2 1 1 150

                if (scope.current == 1) {
                    var previus_height = elem.parent().parent().prev().find('.match').first().height();
                }

                var con_heihgt = elem.find('.connector').height();
                var top_h = con_heihgt / 4;
                var bot_h = con_heihgt - top_h;
                var middle = con_heihgt / 2;

                var color = "#D63B45";
                if (scope.round <= 4) {
                    color = "#E2B73D";
                } else if (scope.round == 5) {
                    color = "#E3853C";
                } else if (scope.round == 4) {
                    color = "#E3853C";
                } else if (scope.round >= 6) {
                    color = "#D63B45";
                }
                var selection = "#match_" + scope.match.weight;
                var top;
                var top_right;
                var bot;
                var bot_right;
                scope.show_match_detail = show_match_details;

                $timeout(function () {
                    var svgContainer = d3.select(selection).append("svg").attr("width", '100%').attr("height", '100%');
                    top = svgContainer.append("line").attr("x1", 2).attr("y1", top_h).attr("x2", 18).attr("y2", top_h).attr("stroke-width", 2).attr("stroke", color);
                    bot = svgContainer.append("line").attr("x1", 2).attr("y1", bot_h).attr("x2", 18).attr("y2", bot_h).attr("stroke-width", 2).attr("stroke", color);

                    top_right = svgContainer.append("line").attr("x1", 18).attr("y1", top_h).attr("x2", 18).attr("y2", middle).attr("stroke-width", 2).attr("stroke", color);
                    bot_right = svgContainer.append("line").attr("x1", 18).attr("y1", middle).attr("x2", 18).attr("y2", bot_h).attr("stroke-width", 2).attr("stroke", color);

                });
                $rootScope.$on('tournament:bracket:team:hover', function (event, data) {

                    if (!_.isUndefined(scope.match.winner)) {
                        angular.forEach(scope.match.teams, function (team) {
                            if (team.team == data.team) {
                                if (team.id == scope.match.winner) {
                                    if (team.weight == 1) {
                                        top.attr("stroke", '#00FF04')
                                        top_right.attr("stroke", '#00FF04')
                                    } else {
                                        bot.attr("stroke", '#00FF04')
                                        bot_right.attr("stroke", '#00FF04')
                                    }
                                }
                            }
                        });

                    }

                });
                $rootScope.$on('tournament:bracket:team:reset', function (event, data) {
                    top.attr("stroke", color);
                    top_right.attr("stroke", color);
                    bot_right.attr("stroke", color);
                    bot.attr("stroke", color);

                });
                var total_rounds = scope.round + scope.current - 1
                if (total_rounds == scope.current) {
                    var h = elem.parent().parent().prev().find('.match').first().height();

                    $rootScope.$broadcast('tournament:bracket:winner', h * 2);
                }

                function show_match_details(match) {
//                    if (_.isEqual(match.status, 'FINISHED') || _.isEqual(match.status, 'PLAYING')) {
                    if (_.isEqual(match.status, 'FINISHED')) {
                        $rootScope.$broadcast('tournament:match:show:detail', match);
                    }
                }
            }
        }
    }
}]);
estars.directive('tournamentBracketTeam', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return{
        replace: true,
        restrict: 'A',
        priority: 9,
        templateUrl: 'views/layouts/directives/tournament/tournament-bracket-team.html',
        scope: {

            round: '=',
            match: '=',
            current: '=',
            position: '@',
            weight: '=',
            team: '='
        },
        link: {
            pre: function (scope, elem, attr) {
                if (_.isUndefined(scope.team)) {
                    scope.team_info = {
                        team_name: 'TEAM PENDING',
                        avatar: '/images/sprites/default.png',
                        result: ''
                    };
                } else {
                    var result = '';
                    if (scope.round == 0) {
                        scope.team_info = {
                            team_name: scope.team.players[0].user.username,
                            avatar: scope.team.players[0].user.avatar,
                            result: 'winner'
                        };
                    } else {
                        if (!_.isUndefined(scope.match.winner)) {
                            if (scope.match.winner == scope.team.id) {
                                result = 'winner';
                            }
                        }
                        scope.team_info = {
                            team_name: scope.team.players[0].user.username,
                            avatar: scope.team.players[0].user.avatar,
                            result: result
                        };
                    }

                }

            },
            post: function (scope, elem, attr) {

                var height = 0;
                var top = 0;
                var bot = 0;
                if (scope.round == 7) {
                    height = 9;
                } else if (scope.round == 6) {
                    height = 18;
                } else if (scope.round == 5) {
                    height = 39;
                } else if (scope.round <= 4) {
                    height = 61;
                }
                top = ((elem.parent().height() / 2 ) - height ) / 2;

                if (scope.position == 2) {
                    elem.css('bottom', top + 'px');
                } else {

                    elem.css('top', top + 'px');
                }

                scope.team_on_hover = function (team) {

                    if(!_.isUndefined(team)){
                        $rootScope.$broadcast('tournament:bracket:team:hover', team);
                    }

                }
                scope.team_on_reset = function () {
                    $rootScope.$broadcast('tournament:bracket:team:reset');
                }

            }

        }
    }
}]);
estars.directive('tournamentBracketWinner', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-bracket-winner.html',
        scope: {
            round: '=',
            team: '=',
            current: '=',
            weight: '=',
            total: '='
        },
        link: {
            pre: function (scope, elem, attr) {

            },
            post: function (scope, elem, attr) {
                $rootScope.$on('tournament:bracket:winner', function (event, data) {
                    var top = (data - 61 ) / 2;
                    elem.find('.team').css('top', top + 'px');
                });
            }
        }
    }
}]);
