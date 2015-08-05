/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 09/06/14
 * Time: 12:23
 * To change this template use File | Settings | File Templates.
 */

estars.controller('tournaments.match', ['$scope', '$modalInstance', 'tournament', 'clientService', 'fast_register', '$auth', '$rootScope', 'SessionService', 'matchService', 'tournamentService', function ($scope, $modalInstance, tournament, clientService, fast_register, $auth, $rootScope, SessionService, matchService, tournamentService) {
    var vm = this;
    vm.tournament = tournament;
   
    SessionService.current_tournament = vm.tournament.id;
    vm.registered_tournament = SessionService.is_registered_on(vm.tournament);
    vm.launched = false;
    vm.loading = false;
    vm.countdown = false;
    vm.show_rules = false;
    vm.show_players = true;
    vm.match_id = null;
    vm.finished = null;
    vm.server = null;
    vm.close = close;
    vm.register = register_tournament;
    vm.unregister = unregister_tournament;
    vm.launch = launch_game;
    vm.swap_team = swap_team;
    vm.show_players_box = show_players;
    vm.empties = [];
    vm.winner_wins = 0;
    vm.losser_wins = 0;

    $scope.$on('$destroy', function () {
        clean_up()
    });
    $rootScope.$on('game:tournament:update', function (event, data) {
        var tournament = data.tournament;

        if (vm.tournament.id == tournament.id) {
            vm.tournament = tournament;
            vm.show_players = true;
            vm.show_rules = false;
            update_user(vm.tournament);
        }
    });
    $rootScope.$on('registered:tournament:wait', function (event, data) {
        if (_.isEqual(data.tournament.id, vm.tournament.id)) {
            $scope.$apply(function () {
                vm.show_rules = false;
                vm.show_players = false;
                vm.loading = true;
            });
        }
    });
    $rootScope.$on('registered:tournament:start', function (event, data) {
        $scope.$apply(function () {
            if (!vm.loading) {
                vm.loading = true;
            }
            vm.server = data.server;
            vm.countdown = true;
        })

    });
    $rootScope.$on('registered:tournament:finish', function (event, data) {
        vm.tournament = data.tournament;
        vm.loading = false;
        vm.show_rules = false;
        vm.show_players = true;
        if (!vm.tournament.invalid) {
            show_match_deatil();
            tournamentService.get_tournament_stats(vm.tournament.id).then(function (data) {
                vm.stats = data;
                $scope.stats = vm.stats;
                vm.registered_tournament = null;
                SessionService.remove_tournament(tournament);
                SessionService.registered_tournament = null;
            });
            clientService.stop_game();
            tournamentService.share_tournament_ended(vm.tournament);
        }

    });
    $rootScope.$on('tournament:show:rules', function (event, data) {
        show_rules();
    })
    if (fast_register) {
        register_tournament()
    }

    function register_tournament() {
        var can_play = SessionService.currentUser.can_play(vm.tournament.config.game_name);
        if (!can_play) {
            return false;
        }
        tournamentService.regiter_tournament(vm.tournament).then(function (data) {
            vm.tournament = data;
            update_user(vm.tournament);
            vm.registered_tournament = vm.tournament;
        }, regiter_failuer);
    }

    function regiter_failuer(data) {
        if (data.data.action == 'steam') {
            swal({
                title: "Sync your steam account",
                text: "To play this game you need to synchronize your steam account , you want to do it now ?",
                type: "warning",
                showCancelButton: true,

                confirmButtonText: "Sync steam account" }, function () {
                $auth.link('steam');
            });
        } else if (data.data.action == 'updating') {
            swal({
                title: "Game Server Updating",
                text: "Sorry , you can't register now , game server is updating , wait a few minuts and try again.",
                type: "warning"});
        } else if (data.data.action == 'money') {
            swal({
                title: "No credits",
                text: "To play this game you need more credits.",
                type: "warning"});
        }
    }

    function unregister_tournament() {
        tournamentService.unregister_tournament(vm.tournament).then(function (data) {
            vm.tournament = data;
            update_user(vm.tournament);
            vm.registered_tournament = null;
        })
    }

    function launch_game() {
        clientService.launchGame("csgo", vm.server.ip + ':' + vm.server.port, vm.server.password);
        vm.launched = true;
    }

    function close() {
        angular.element('#match').find('.animated').removeClass('bounceInDown').addClass('bounceOutUp');

        $modalInstance.dismiss('cancel');

    }

    function in_progress_status() {
        vm.timeElapsed = moment().diff(moment(vm.tournament.started), 'seconds');
        vm.countdown = false;
        vm.show_players = false;
        vm.show_rules = false;
        vm.loading = true;
    }

    function is_finished(tournament) {
        if (tournament.status == 'FINISHED') {
            vm.finished = moment(tournament.started).from(moment(tournament.finished));
            show_match_deatil();

        } else if (tournament.status == 'IN_PROGRESS') {
            in_progress_status();
            if (!_.isNull(vm.registered_tournament)) {
                if (vm.registered_tournament.id == vm.tournament.id) {
                    matchService.$findById(vm.registered_tournament.matches[0]).then(function (data) {
                        vm.server = data.server;
                        vm.launched = true;
                    });
                }
            }

        }
    }

    function show_match_deatil() {
        vm.match_id = vm.tournament.matches[0];

    }

    function update_user(tournament) {
        vm.empty = [];
        angular.forEach(tournament.teams, function (team) {
            var a = [];
            var total = tournament.config.type.num_players;
            var registered = team.players.length;
            var empties = total - registered;
            for (var i = 0; i < empties; i++) {
                a.push(i);
            }
            vm.empty.push(a);
        });

    }

    function swap_team() {
        tournamentService.swap_team_tournament(vm.tournament).then(function (data) {
            vm.tournament = data;
            vm.registered_tournament = vm.tournament;
        });
    }

    function show_rules() {
        if (!vm.loading) {
            vm.show_players = false;
            vm.show_rules = true;
        }

    }

    function show_players() {
        vm.show_players = true;
        vm.show_rules = false;
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

    is_finished(vm.tournament);
    update_user(vm.tournament);
}]);
