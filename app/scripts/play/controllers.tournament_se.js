/**
 * Created by Miguel on 02/04/2015.
 */
estars.controller('tournaments.tournament', ['$scope', '$modalInstance', 'tournament', 'clientService', 'fast_register', '$auth' , '$timeout', 'matchService', '$rootScope', 'SessionService', 'tournamentService', function ($scope, $modalInstance, tournament, clientService, fast_register, $auth, $timeout, matchService, $rootScope, SessionService, tournamentService) {
    var vm = this;
    vm.tournament = tournament;
    SessionService.current_tournament = vm.tournament.id;
    vm.registered_tournament = SessionService.is_registered_on(vm.tournament);
    vm.launched = false;
    vm.loading = false;
    vm.countdown = false;
    vm.on_brackets = true;
    vm.on_lobby = false;
    vm.stats = null;
    vm.title = 'REGISTERED TEAMS';
    vm.matches = [];
    vm.rounds = [];
    vm.winner = null;
    vm.match = null;
    vm.show_match_detail = false;
    vm.next_match = null;
    vm.server = null;
    vm.next_play = null;
    vm.close = close;
    vm.register = register_tournament;
    vm.unregister = unregister_tournament;
    vm.launch = launch_game;
    vm.go_lobby = show_lobby;
    vm.go_brackets = show_bracket;
    $scope.$on('$destroy', function () {
        clean_up()
    });
    $rootScope.$on('registered:tournament:casting', function (event, data) {
        console.log("registered:tournament:casting", data)
        vm.rounds = _.groupBy(data.matches, function (m) {
            return m.round;
        });
        vm.matches = data.matches;
        vm.go_brackets();
        if (is_registered()) {
            find_next_match(vm.tournament.current_round);
            var timer = $timeout(function () {
                vm.go_lobby();
                $timeout.cancel(timer);
            }, 15000);
        }

    });
    $rootScope.$on('registered:tournament:update', function (event, data) {
        console.log("registered:tournament:update", data)
        vm.rounds = _.groupBy(data.matches, function (m) {
            return m.round;
        });
        vm.matches = data.matches;
        vm.tournament = data.tournament;
        angular.forEach(vm.matches, function (match) {
            if (_.isEqual(match.id, SessionService.next_match.id)) {
                SessionService.next_match = match;
                vm.next_match = match;
            }
        })

    });
    $rootScope.$on('registered:tournament:finish', function (event, data) {
        console.log("registered:tournament:finish", data)
        vm.rounds = _.groupBy(data.matches, function (m) {
            return m.round;
        });
        vm.matches = data.matches;
        vm.tournament = data.tournament;
        set_tournament_winner();
    });
    $rootScope.$on('registered:tournament:match:wait', function (event, data) {
        console.log("registered:tournament:match:wait", data);
        tournamentService.get_tournament_match_info(SessionService.next_match.id).then(function (match) {
            vm.stats = null;
            $scope.stats = null;
            vm.next_match = match;
            vm.match = match;
            vm.go_lobby();
            vm.loading = true;
            vm.countdown = false;
        });

    });
    $rootScope.$on('registered:tournament:match:start', function (event, data) {
        console.log("registered:tournament:match:start", data)
        vm.server = data.server;
        init_match();

    });
    $rootScope.$on('registered:tournament:match:finish', function (event, data) {
        console.log("registered:tournament:match:finish", data)
        vm.loading = false;
        vm.launched = false;
        vm.countdown = false;
        var next_id = data.next_id;
        vm.match = data.match;
        vm.show_match_detail = true;

        tournamentService.get_tournament_match_stasts(data.match.id).then(function (stats) {
            vm.stats = stats;
            $scope.stats = vm.stats;
            if (stats.position.win) {
                if (_.isNull(next_id)) {
                    swal("Good job!", "You win! , you won the tournament", "success")
                    vm.registered_tournament = null
                    SessionService.registered_tournament = null;
                } else {
                    swal("Good job!", "You win! , you pass to next round.", "success")
                    matchService.$findById(next_id).then(function (match) {
                        SessionService.next_match = match;
                        vm.next_match = match;
//                        vm.next_match = match;
                    });
                }
            } else {
                vm.registered_tournament = null
                SessionService.next_match = null;
                SessionService.registered_tournament = null;
                swal("Soory men! Maybe next Time", "you lost...", "error");
            }
        });

    });
    $rootScope.$on('tournament:match:show:detail', function (event, match) {
        show_lobby_detail(match);
    });

    function register_tournament() {
//        var can_play = SessionService.currentUser.can_play(vm.tournament.config.game_name);
//        if (!can_play) {
//            return false;
//        }
        tournamentService.regiter_tournament(vm.tournament).then(function (data) {
            vm.tournament = data;
//            update_user(vm.tournament);
            vm.registered_tournament = vm.tournament;
        }, regiter_failuer);
    }

    function regiter_failuer(data) {
        if (data.data.action == 'steam') {
            swal({
                title: "Sync your steam account",
                text: "To play this game you need to sincronizes your steam account , you want to do it now ?",
                type: "warning",
                showCancelButton: true,

                confirmButtonText: "Sync steam account" }, function () {
                $auth.link('steam');
            });
        }
    }

    function unregister_tournament() {
        tournamentService.unregister_tournament(vm.tournament).then(function (data) {
            vm.tournament = data;
            vm.registered_tournament = null;
        })
    }

    function close() {
        $modalInstance.dismiss('cancel');
    }

    function launch_game() {
        clientService.launchGame("csgo", vm.server.ip + ':' + vm.server.port, vm.server.password);
        vm.launched = true;
    }

    function find_next_match(round) {
        angular.forEach(vm.rounds[round], function (match, key) {
            if (!_.isUndefined(match)) {
                angular.forEach(match.teams, function (team, key) {
                    angular.forEach(team.players, function (p, key) {
                        if (p.user.username == SessionService.currentUser.username) {
                            tournamentService.get_tournament_match_info(match.id).then(function (data) {
                                console.log("LOL:", data);
                                SessionService.next_match = data;
                                vm.match = data;
                                vm.next_match = data;
                                console.log("MATCH ENCONTRADO", data);

                            });
                        }
                    })
                })
            }
        });
    }

    function find_current_match(round) {
        angular.forEach(vm.rounds[round], function (match, key) {
            if (!_.isUndefined(match)) {
                angular.forEach(match.teams, function (team, key) {
                    angular.forEach(team.players, function (p, key) {
                        if (p.user.username == SessionService.currentUser.username) {
                            tournamentService.get_tournament_match_info(match.id).then(function (data) {
                                if (_.isEqual(data.status, 'FINISHED')) {
                                } else {
                                    init_disconnect_match(data);
                                }

                            });
                        }
                    })
                })
            }
        });
    }

    function show_lobby() {
        vm.match = vm.next_match;
        vm.title = 'LOBBY MATCH';
        vm.on_lobby = true;
        vm.on_brackets = false;
        vm.stats = vm.tmp;

    }

    function show_lobby_detail(match) {
        vm.match = match;
        if (_.isEqual(match.status, 'PLAYING')) {
            vm.loading = true;
            vm.countdown = false;
        } else {
            vm.show_match_detail = true;
        }
        vm.title = 'LOBBY MATCH';
        vm.on_lobby = true;
        vm.on_brackets = false;
    }

    function show_bracket() {
        vm.title = 'PLAYOFF BRACKET';
        vm.on_lobby = false;
        vm.show_match_detail = false;
        vm.match = null;
        vm.on_brackets = true;
        $scope.stats = null;
        vm.stats = null;
    }

    function init_match() {
        $scope.$apply(function () {
            if (!vm.loading) {
                vm.loading = true;
            }
            vm.countdown = true;
        })
    }

    function init_disconnect_match(match) {
        vm.stats = null;
        $scope.stats = null;
        vm.tmp = null;
        vm.server = match.server;
        vm.next_match = match;
        SessionService.next_match = match;
        vm.go_lobby();
        vm.loading = true;
        vm.launched = true;
        vm.countdown = false;
    }

    function is_registered() {
        if (_.isNull(vm.registered_tournament)) {
            return false;
        }
        return _.isEqual(vm.tournament.id, vm.registered_tournament.id);
    }

    function is_finished(tournament) {
        if (tournament.status != 'REGISTRATION') {
            tournamentService.get_matches(tournament).then(function (data) {
                vm.rounds = _.groupBy(data, function (m) {
                    return m.round;
                });
                vm.matches = data;
                if (is_registered()) {
                    find_current_match(tournament.current_round);
                }
            });
        }
    }

    function clean_up() {
        $rootScope.$$listeners['registered:tournament:wait'] = [];
        $rootScope.$$listeners['registered:tournament:start'] = [];
        $rootScope.$$listeners['registered:tournament:finish'] = [];
        vm.tournament = null;
        vm.registered_tournament = null
        vm.launched = null;
        vm.loading = null;
        vm.countdown = null;
        vm.finished = null;
        vm.server = null;
        vm.close = null;
        vm.register = null;
        vm.unregister = null;
        vm.launch = null;
        vm.empties = null;
        SessionService.current_tournament = null;
    }

    function set_tournament_winner() {
        if (vm.tournament.status == 'FINISHED') {
            var winner = _.max(vm.tournament.ranking, 'wins');
            vm.winner = winner.team.id;
        }
    }

    if (fast_register) {
        register_tournament()
    }
    is_finished(vm.tournament);
    set_tournament_winner();

}]);
