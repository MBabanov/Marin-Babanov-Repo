/**
 * Created by Miguel on 05/09/2014.
 */



estars.service("gameService", ['Restangular', 'gameModel', function (Restangular, gameModel) {
    Restangular.extendModel('game', function (obj) {
        return angular.extend(obj, gameModel);
    });
    Restangular.extendModel('game_slug', function (obj) {
        return angular.extend(obj, gameModel);
    });
    Restangular.addElementTransformer('tournaments', function (obj) {
        obj.addRestangularMethod('register', 'post', 'register');
        return obj;
    });

    return {
        $getAll: function () {
            return Restangular.all("game").getList();
        }, $findById: function (id) {
            return Restangular.one("game", id).get();

        },
        $findBySlug: function (slug) {

            return Restangular.one("game_slug", slug).get()
        }

    };
}])

estars.service("matchService", ['Restangular', 'matchModel', function (Restangular, matchModel) {
    Restangular.extendModel('match', function (obj) {
        return angular.extend(obj, matchModel);
    });
    Restangular.addElementTransformer('tournament', function (obj) {
        obj.addRestangularMethod('userStats', 'get', 'stats');
        return obj;
    });
    return {
        $getAll: function () {
            return Restangular.all("game").getList();
        }, $findById: function (id) {
            //console.log("find match", id); //DEBUG
            return Restangular.one("match", id).get();

        }, $getTournaments: function (id) {
            return Restangular.one("game", id).getList("tournaments");
        }, $getStatsById: function (id) {
            return Restangular.one("match", id).one('stats').get();
        }

    };
}])

estars.service("tournamentService", ['Restangular', 'tournamentModel', 'SessionService', '$rootScope', function (Restangular, tournamentModel, SessionService, $rootScope) {
    Restangular.extendCollection('tournament', function (collection) {
        collection.add = function (buildData) {
            var tournament = Restangular.restangularizeElement(this.parentResource, buildData, 'tournament');
            this.push(tournament);
        };
        return collection;
    });
    Restangular.extendModel('tournament', function (obj) {
        return angular.extend(obj, tournamentModel);
    });
    Restangular.extendModel('register', function (obj) {
        return angular.extend(obj, tournamentModel);
    });
    Restangular.extendModel('registered_tournament', function (obj) {
        return angular.extend(obj, tournamentModel);
    });

    Restangular.addElementTransformer('tournament', function (obj) {
        obj.addRestangularMethod('unregister', 'post', 'unregister');
        return obj;
    });
    Restangular.addElementTransformer('tournament', function (obj) {
        obj.addRestangularMethod('userStats', 'get', 'stats');
        return obj;
    });

    return {
        $getAll: function () {
            return Restangular.all("game").getList();
        }, $findById: function (id) {
            return Restangular.one("game", id).get();
        },
        $findByTournamentId: function (id) {
            return Restangular.one("tournament", id).get();

        },
        $findByGame: function (id) {
            return Restangular.all('tournament').getList({game_id: id});
        },
        $findByGameAndMode: function (game_id, mode) {
            return Restangular.all('tournament').getList({game_id: game_id, mode: mode});
        },
        $findTicketsByGame: function (game_id) {
            return Restangular.all('tournament_tickets').getList({game_id: game_id});
        },
        $findLastTournamentsByGame: function (game_id) {
            return Restangular.all('me').all('last_tournament').all(game_id).getList();
        },
        $findLastRegisteredTournament: function () {
            return Restangular.all('me').one('registered_tournament').get()
        },
        $findLastPlayedTournamentByGame: function () {
            return Restangular.all('me').one('registered_tournament').get()
        },
        get_tournament: get_tournament,
        get_tournaments: get_tournaments_by_game_and_mode,
        regiter_tournament: register_tournament,
        unregister_tournament: unregister_tournament,
        get_matches: get_matches_details,
        share_tournament_ended: share_tournament_ended,
        get_last_winners: get_last_winners,
        get_featured_tournaments: get_featured,
        get_tournament_stats: get_tournament_stats,
        get_tournament_match_stasts: get_tournament_match_stats,
        get_tournament_match_info: get_match_detail,
        swap_team_tournament: swap_team

    }
    function get_match_detail(match_id) {
        return Restangular.one("match", match_id).get();
    }

    function get_tournament_match_stats(match_id) {
        return Restangular.one("tournament_match", match_id).one('stats').get();
    }

    function get_tournament_stats(tournament_id) {
        return Restangular.one("tournament", tournament_id).one('stats').get();
    }

    function get_tournament(tournament_id) {
        return Restangular.one("tournament", tournament_id).get();
    }

    function get_tournaments_by_game_and_mode(game_id, mode) {
        return Restangular.all('tournament').getList({game_id: game_id, mode: mode});
    }

    function register_tournament(tournament) {
        return Restangular.one('tournament', tournament.id).one('register').post().then(function (data) {
            var t = angular.extend(data, tournamentModel);
            SessionService.add_registered_tournament(t);
//            $analytics.eventTrack('registered', {  category: 'User' });
            return t;
        })
    }

    function unregister_tournament(tournament) {
        return Restangular.one('tournament', tournament.id).one('unregister').post().then(function (data) {
            SessionService.remove_tournament(tournament);
            return angular.extend(data, tournamentModel);

        })
    }

    function swap_team(tournament) {
        return Restangular.one('tournament', tournament.id).one('swap_team').post()
    }

    function get_matches_details(tournament) {
        return Restangular.one('tournament', tournament.id).all('matches').getList();
    }

    function share_tournament_ended(tournament) {
        $rootScope.$broadcast('tournament:finished', tournament);
    }

    function get_last_winners(game_id) {

        if (_.isUndefined(game_id)) {
            return Restangular.all('tournament/winners').getList();
        }
        return Restangular.all('tournament/winners').getList({game_id: game_id});
    }

    function get_featured(game_id) {

        if (_.isUndefined(game_id)) {
            return Restangular.all('tournament/featured').getList();
        }
        return Restangular.all('tournament/featured').getList({game_id: game_id});
    }
}])

estars.factory("tournamentDetailService", ['$modal', 'SessionService', 'Restangular', function ($modal, SessionService, Restangular) {
    return {
        tournament_details_match: function (tournament, fast) {
            var modalInstance = $modal.open({
                templateUrl: 'views/partials/play/tournament/lobby-match.html',
                controller: 'tournaments.match',
                controllerAs: '_lobby',
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: false,
                resolve: {
                    tournament: function () {
                        return tournament;

                    },
                    fast_register: function () {
                        return fast;
                    }
                }
            });
        },
        tournament_details_deathmatch: function (tournament, fast) {
            var modalInstance = $modal.open({
                templateUrl: 'views/partials/play/tournament/lobby-free_for_all.html',
                controller: 'tournaments.free_for_all',
                controllerAs: '_lobby',
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: false,
                resolve: {
                    tournament: function () {
                        return tournament;
                    },
                    fast_register: function () {
                        return fast;
                    }
                }
            });
        },
        tournament_details_tournament: function (tournament, fast) {
            var modalInstance = $modal.open({
                templateUrl: 'views/partials/play/tournament/lobby-tournament.html',
                controller: 'tournaments.tournament',
                controllerAs: '_lobby',
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: false,
                resolve: {
                    tournament: function () {
                        return tournament;
                    },
                    fast_register: function () {
                        return fast;
                    }
                }
            });
        },
        tournament_detail: function (tournament, fast) {

            if (tournament.config_cls == 'SE') {
                this.tournament_details_tournament(tournament, fast);
            } else if (tournament.config_cls == 'S') {
                this.tournament_details_match(tournament, fast);
            } else if (tournament.config_cls == 'DM') {
                this.tournament_details_deathmatch(tournament, fast);
            }

        },
        tournaments_registered: function () {
            var modalInstance = $modal.open({
                templateUrl: 'views/partials/play/registered_tournaments.html',
                controller: 'tournaments.registereds',
                controllerAs: '_tour',
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: false,
                resolve: {
                    tournaments: function () {
                        return  SessionService.registered_tournaments;
                    }
                }
            });
        }
    }
}])

estars.factory("rankingDetailService", ['$modal', 'userService', function ($modal, userService) {
    var services = {
        ranking_details: show_ranking
    }
    return services;
    function show_ranking(game) {
        var modalInstance = $modal.open({
            templateUrl: 'views/partials/ranking/index.html',
            controller: 'ranking',
            controllerAs: 'vm',
            windowTemplateUrl: '/views/layouts/play/modal.html',
            backdrop: 'false',
            keyboard: true,
            resolve: {
                players: function () {
                    return userService.$findTopByGame(game.id);
                },
                game: function () {
                    return game;
                }
            }
        });
    }

}
]);
estars.service("clientService", ['$modal', function ($modal) {
    return {
        launchGame: function (game, ip, pass) {
            var response = false;

            if (location.href = "estars://launch/" + game + "/" + ip + "/" + pass) {
                response = true;
            }
            return response;
        }, login: function (username, uid) {
            var response = false;
            //console.log("estars://login/", username) //DEBUG
            if (location.href = "estars://login/" + username + '/' + uid) {
                response = true;
            }
            return response;
        }, hardware: function () {
            var response = false;
            if (location.href = "estars://systeminfo") {
                response = true;
            }
            return response;
        }, ping: function (ip) {
            var response = false;
//            console.log("estars://ping/" + ip)
            if (location.href = "estars://ping/" + ip) {
                response = true;
            }
            return response;
        },
        downloadDialog: function () {
            var modalInstance = $modal.open({
                templateUrl: 'views/partials/download/index.html',
                controller: 'download.index',
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: true
            });
        },
        stop_game: function () {
            var response = false;

            if (location.href = "estars://kill") {
                response = true;
            }
            return response;
        }
    }
}]);


