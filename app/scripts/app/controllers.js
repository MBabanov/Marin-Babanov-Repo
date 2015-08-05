/**
 * Created by Miguel on 20/08/2014.
 */


estars.controller('app.main', ['$scope', '$rootScope', 'userService', '$state', 'SessionService', 'tournamentService', 'tournamentDetailService', 'SessionService', '$rootScope', 'userModalService', '$translate', 'gameService', 'LanguageService', function ($scope, $rootScope, userService, $state, SessionService, tournamentService, tournamentDetailService, SessionService, $rootScope, userModalService, $translate, gameService, LanguageService) {
    var vm = this;
    vm.is_logged = is_logged;
    vm.me = undefined;
    vm.change_app_language = change_app_language;
    vm.language = LanguageService.language;
    vm.open_registered_tournaments = open_registered_tournaments;
    vm.open_wallet = open_wallet;
    vm.languages = [
        {name: 'ENGLISH', flag: 'gb', key: 'en'},
        {name: 'SPANISH', flag: 'es', key: 'es'},
        {name: 'FRENCH', flag: 'fr', key: 'fr'}

    ]
    vm.logout = logout;

    function set_User(user) {
        vm.me = user;
        vm.me.generate_uid();
        vm.me.connect();

        vm.me.in_progress_tournament().then(function (data) {
            if (!_.isUndefined(data)) {
                angular.forEach(data, function (t) {
                    SessionService.registered_tournaments.push(t);
                    SessionService.is_tournament_connected(t);
                    SessionService.connect_game(t.config.game_id);
                });
                if (_.size(SessionService.registered_tournaments) > 0) {
                    tournamentDetailService.tournaments_registered(SessionService.registered_tournaments);
                }
            }
        });
        if (vm.me.installed_client) {
            vm.me.sync();
        }
    }

    function is_logged() {
        return SessionService.is_logged;
    }

    function get_games() {
        gameService.$getAll().then(function (data) {
            vm.games = data;
            SessionService.games = vm.games;
        })
    }

    function change_app_language(language) {
        //vm.language = language;
        LanguageService.set_language(language);
        vm.language = LanguageService.language;

        $translate.use(language.key);
    }

    function open_registered_tournaments() {
        tournamentDetailService.tournaments_registered();
    }

    function open_wallet() {
        userModalService.open_modal('profile.cashier');
    }

    function logout() {
        SessionService.logout();
        vm.me = undefined;
        $state.go('landing.index')
    }

    $rootScope.$on('me:sync', function (event, msg) {
        vm.me.sincronized = true;
        if (msg.games.lenght > 0) {
            vm.me.add_games(msg.games);
            SessionService.currentUser.add_games(msg.games);
        }
        SessionService.currentUser.sincronized = true;
    });
    $rootScope.$on('me:cashier:update', function (event, msg) {
        vm.me.update_cashier(msg);
    });
    $rootScope.$on('user:logged', function (event, user) {
        set_User(user);
        angular.forEach(vm.games, function (g) {
            if (g.protocol == 'csgo') {
                $state.go('tournaments.list', { game_slug: g.slug })

            }
        });

    });
    $rootScope.$on('user:avatar:updated', function (event, avatar) {
        vm.me.avatar = avatar;
    });
    $rootScope.$on('me:tournament:unregister', function (event, msg) {
        SessionService.remove_tournament(msg.tournament);
    });
    get_games();
}]);

estars.controller('app.head', ['userService', '$scope', 'AuthenticationService', 'SessionService', 'messageService', function (userService, $scope, AuthenticationService, SessionService, messageService) {
    var vm = this;
    vm.user = {
        username: '',
        password: ''
    };
    vm.remeber = false;
    vm.find_users = retrieve_users;
    vm.join = join;
    vm.logout = logout;

    function retrieve_users(username) {
        var users = [];
        return userService.$findUser(username).then(function (data) {
            return data
        });
        return users;
    }

    function join(user) {
        AuthenticationService.login(user, vm.remember);
    }

    function logout() {

    }

    function login_remember_me() {
        if (!SessionService.is_logged) {
            AuthenticationService.login_remember_me();
        }
    }

    login_remember_me();

}]);
