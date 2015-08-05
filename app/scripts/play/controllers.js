/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 09/06/14
 * Time: 12:23
 * To change this template use File | Settings | File Templates.
 */
estars.controller('tournaments', ['$scope', 'tournamentService', 'game', 'tournaments' , '$modal', '$rootScope', 'tickets', 'users', 'top_users', 'last_played_tournaments', 'gameService', 'tournamentDetailService', 'rankingDetailService', 'SessionService', 'featured', '$timeout', function ($scope, tournamentService, game, tournaments, $modal, $rootScope, tickets, users, top_users, last_played_tournaments, gameService, tournamentDetailService, rankingDetailService, SessionService, featured, $timeout) {
    var vm = this;
    vm.game = game;
    vm.connected_channel = false;
    vm.timer_chat = null;
    vm.featured = featured
    SessionService.connect_game(vm.game.id);
    vm.last_tournaments = last_played_tournaments;
    vm.last_tournament = null;
    vm.tickets = tickets;
    vm.top_players = top_users;
    vm.tournaments = tournaments;
    vm.current_mode = "REAL_CASH";
    vm.filter_settings = {showCheckAll: false, showUncheckAll: false, buttonClasses: 'btn btn-sm btn-filter', scrollable: true, externalIdProp: 'id'};
    vm._name_filter = [];
    vm._config_filter = [];
    vm._player_filter = [];
    vm._entry_filter = [];
    vm._order_table_head = null;
    vm._order_table_revese = false;
    vm._status = {
        open: false,
        finish: false,
        progress: false
    };
    vm.lang_filter_name = {
        selectAll: "Tick all",
        selectNone: "Tick none",
        reset: "Undo all",
        search: "Type here to search...",
        nothingSelected: "TRACK"
    }
    vm.lang_filter_config = {
        selectAll: "Tick all",
        selectNone: "Tick none",
        reset: "Undo all",
        search: "Type here to search...",
        nothingSelected: "TYPE"
    }
    vm.lang_filter_players = {
        selectAll: "Tick all",
        selectNone: "Tick none",
        reset: "Undo all",
        search: "Type here to search...",
        nothingSelected: "PLAYERS"
    }
    vm.lang_filter_entry = {
        selectAll: "Tick all",
        selectNone: "Tick none",
        reset: "Undo all",
        search: "Type here to search...",
        nothingSelected: "ENTRY"
    }
    vm.tournaments_player_filter = [
        { id: 1, label: "1vs1", icon: "<img src='/images/tournament/types/1v1.png'/>", selected: false },
        { id: 2, label: "2vs2", icon: "<img src='/images/tournament/types/2v2.png'/>", selected: false },
        { id: 3, label: "3vs3", icon: "<img src='/images/tournament/types/3v3.png'/>", selected: false },
        { id: 4, label: "4vs4", icon: "<img src='/images/tournament/types/4v4.png'/>", selected: false },
        { id: 5, label: "5vs5", icon: "<img src='/images/tournament/types/5v5.png'/>", selected: false }
    ]
    vm.tournaments_bet_filter = [
        { id: 'micro', label: "Micro (0-300)", selected: false },
        { id: 'small', label: "Small (301-1000)", selected: false },
        { id: 'medium', label: "Medium (1001-3500)", selected: false },
        { id: 'high', label: "High (3500>)", selected: false }

    ]

    vm.tournaments_name_filter = array_to_select_data(_.uniq(_.pluck(tournaments, 'name')));
    vm.tournaments_configs_filter = array_to_select_data(_.uniq(_.pluck(tournaments, 'modality')));
    vm.registered_filter = false;
    vm._filter_by_name = filter_by_name;
    vm._filter_by_config = filter_by_config;
    vm._filter_by_players = filter_by_players;
    vm._filter_by_status = filter_by_status;
    vm._filter_by_entry = filter_by_entry;
    vm._filter_by_registered = filter_by_registered_players;
    vm.order_by_status = order_by_status;
    vm.show_rank = show_game_ranking;
    vm.tournament_detail = tournament_detail;
    vm.reload_tournament_mode = reload_tournaments;
    vm.featured_detail = show_tournament_featured_detail;
    vm.order_table = order_by_table_head;
    vm.order_by_paramenter = order_by_parameter;

    vm.featured_images = [
        'images/tournament/featured/crown_635x260.jpg', 'images/tournament/featured/dust2_635x260.jpg', 'images/tournament/featured/inferno_635x260.jpg', 'images/tournament/featured/mirage_635x260.jpg', 'images/tournament/featured/nuke_635x260.jpg', 'images/tournament/featured/overpass_635x260.jpg', 'images/tournament/featured/season_635x260.jpg', 'images/tournament/featured/traing_635x260.jpg'
    ]
    angular.forEach(vm.featured, function (f) {
        f.featured = vm.featured_images[get_random_featured_image()];
    })
    function get_random_featured_image() {
        return Math.floor(Math.random() * 7);
    }

    function array_to_select_data(collection) {
        var _tmp = []

        angular.forEach(collection, function (val) {

            var _element = {
                id: val, label: val
            }
            _tmp.push(_element);
        })
        return _tmp;
    }

    function filter_by_name(item) {
        if (_.isEmpty(vm._name_filter)) {
            return true;
        }
        var a = _.pluck(vm._name_filter, 'id');

        var b = _.contains(a, item.name);

        return _.contains(_.pluck(vm._name_filter, 'id'), item.name);

    }

    function filter_by_config(item) {
        if (_.isEmpty(vm._config_filter)) {
            return true;
        }
        var a = _.pluck(vm._config_filter, 'id');

        var b = _.contains(a, item.modality);

        return _.contains(_.pluck(vm._config_filter, 'id'), item.modality);

    }

    function filter_by_players(item) {

        if (_.isEmpty(vm._player_filter)) {
            return true;
        }
        var a = _.pluck(vm._player_filter, 'id');

        return _.contains(a, item.config.type.num_players);

    }

    function filter_by_status(item) {
        if (!vm._status.open && !vm._status.progress && !vm._status.finish) {
            return true;
        }
        if (item.status == 'IN_PROGRESS' && vm._status.progress) {
            return true;
        }
        if (item.status == 'REGISTRATION' && vm._status.open) {
            return true;
        }
        if (item.status == 'FINISHED' && vm._status.finish) {
            return true;
        }
        return false;

    }

    function filter_by_entry(item) {
        if (_.isEmpty(vm._entry_filter)) {
            return true;
        }
        var a = _.pluck(vm._entry_filter, 'id');
        return _.contains(a, item.get_entry_type());
    }

    function filter_by_registered_players(item) {
        if (!vm.registered_filter) {
            return true;
        }
        if (item.registered_players > 0) {
            return true;
        }
        return false;
    }

    function order_by_status(t) {
        if (t.status == 'REGISTRATION') {
            return 1;
        } else if (t.status == 'IN_PROGRESS') {
            return 2;
        } else if (t.status == 'FINISHED') {
            return 3;
        }
    }

    function order_by_table_head(input) {
        if (_.isEqual(input, vm._order_table_head)) {
            vm._order_table_revese = !vm._order_table_revese
        } else {
            vm._order_table_head = input
        }

    }

    function order_by_parameter(input) {
        if (_.isEqual(vm._order_table_head, 'name')) {
            return input.name
        } else if (_.isEqual(vm._order_table_head, 'entry')) {
            return parseFloat(input.register_amount);
        } else if (_.isEqual(vm._order_table_head, 'prize')) {
            return parseFloat(input.public_prize);
        } else if (_.isEqual(vm._order_table_head, 'type')) {
            return input.modality;
        } else if (_.isEqual(vm._order_table_head, 'players')) {
            return parseFloat(input.registered_players);
        }
    }

    function show_game_ranking() {
        rankingDetailService.ranking_details(vm.game);
    }

    function tournament_detail(tournament, fast) {
        tournamentDetailService.tournament_detail(tournament, fast);
    }

    function pull_last_tournament(t) {
        if (_.size(t) > 0) {
            vm.last_tournament = t[0];

        }

    }

    function update_last_played_tournaments(t) {
        var tmp = [];
        tmp.push(t);
        var size = _.size(vm.last_tournaments);
        for (i = 1; i < size; i++) {
            tmp.push(vm.last_tournaments[i]);
        }
        vm.last_tournaments = tmp;
        pull_last_tournament(vm.last_tournaments);
    }

    function reload_tournaments(mode) {
        if (!_.isEqual(mode, vm.current_mode)) {
            vm.current_mode = mode;

            tournamentService.get_tournaments(game.id, vm.current_mode).then(function (data) {
                vm.tournaments = data;
            });
        }

    }

    function show_tournament_featured_detail(tournament_id) {
        tournamentService.get_tournament(tournament_id).then(function (tournament) {
            tournamentDetailService.tournament_detail(tournament, false);
        });
    }

    $rootScope.$on('tournament:finished', function (event, tournament) {
        update_last_played_tournaments(tournament);
    });
    $scope.$on('tournament:ended', function (event, tournament) {
        $scope.last_tournament = $scope.get_score_by_tournament(tournament);
    });
    $rootScope.$on('game:tournament:new', function (event, data) {
//        console.log(data);
        vm.tournaments.add(data.tournament)
        if (data.tournament.featured) {
            data.tournament.featured = vm.featured_images[get_random_featured_image()];
            vm.feautred.add(data.tournament);
        }
    });
    $rootScope.$on('game:tournament:update', function (event, data) {
        var updated_tournament = data.tournament;
        var remove_key = null;
        angular.forEach(vm.featured, function (tournament, key) {
            if (tournament.id == updated_tournament.id) {
                if (updated_tournament.status == "IN_PROGRESS") {
                    remove_key = key;
                }
            }
        });

        if (!_.isNull(remove_key)) {
            vm.featured.splice(remove_key, 1);
        }
        angular.forEach(vm.tournaments, function (tournament, key) {
            console.log(tournament.modified);
            if (tournament.id == updated_tournament.id) {
                $scope.$apply(function () {
                    var registered = vm.tournaments[key].registered_players;
                    vm.tournaments[key] = vm.tournaments[key].copyFromWsObject(updated_tournament);
                    if (registered > vm.tournaments[key].registered_players) {
                        vm.tournaments[key].modified = 'less';
                    } else if (registered < vm.tournaments[key].registered_players) {
                        vm.tournaments[key].modified = 'more';
                    } else {
                        vm.tournaments[key].modified = '';
                    }
//                    $rootScope.$broadcast('update:current_tournament', vm.tournaments[key]);
                });
                return false
            }
        });
    });
    $rootScope.$on('chat:connect:game_connected', function (event, data) {

        $timeout.cancel(vm.timer_chat);
    });
    function connect_game_chat_channgel() {
        vm.timer_chat = $timeout(function () {
            console.log("Envio peticion");
            $rootScope.$broadcast('chat:connect:game', vm.game);
        }, 1000);

    }

    pull_last_tournament(vm.last_tournaments);
    connect_game_chat_channgel();
}
]);

