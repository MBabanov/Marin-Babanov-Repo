/**
 * Created by bigpig on 19/06/14.
 */

estars.factory('AuthenticationService', ['$rootScope', 'Restangular', 'SessionService', 'userService', 'messageService', '$analytics', function ($rootScope, Restangular, SessionService, userService, messageService, $analytics) {

    return {
        login: login,
        login_remember_me: login_with_remember_me,
        isLoggedIn: is_logged_in,
        logout: logout
    };
    function login(param, remember) {
        return Restangular.all("api-token-auth").post(param).then(function (data) {
            SessionService.setToken(data.token, remember);
            return userService.$me().then(function (user) {

                SessionService.currentUser = user;
                ga('set', 'userId', user.id);
                $rootScope.$broadcast('user:logged', user);
                $analytics.eventTrack('Logging', {  category: 'User' });
                return user;
            })
        }, function (data) {

            messageService.error_message('LOGIN ERROR', data.data.non_field_errors[0]);
            return false;
        });
    }

    function login_with_remember_me() {
        var token = SessionService.getToken();
        if (!_.isUndefined(token)) {
            SessionService.setToken(token, true);
            return userService.$me().then(function (user) {
                SessionService.currentUser = user;
                ga('set', 'userId', user.id);
                $rootScope.$broadcast('user:logged', user);
                $analytics.eventTrack('Logging', {  category: 'User' });
                return user;
            })
        }
    }

    function is_logged_in() {
        return SessionService.currentUser !== null;
    }

    function logout() {

    }
}]);

estars.factory('SessionService', ['Restangular', '$http', '$cookieStore', 'LanguageService', '$sessionStorage', function (Restangular, $http, $cookieStore, LanguageService, $sessionStorage) {
    'use strict';
    return {
        setToken: set_token,
        getToken: get_token,
        currentUser: null,
        is_logged: false,
        currentToken: null,
        registered_tournament: null,
        registered_tournaments: [],
        games: [],
        next_match: null,
        current_tournament: null,
        is_registered_on: is_registered_tournament,
        is_tournament_connected: connect_tournament,
        connect_game: connect_game,
        add_registered_tournament: add_new_registered_tournament,
        remove_tournament: remove_tournament,
        update_registered_tournament: update_registered_tournament,
        logout: logout
        //favorite_language: get_language
    };

    function get_language() {
        return LanguageService.get_language()
    }

    function get_token() {
        if (_.isUndefined($sessionStorage.user_id)) {
            return $cookieStore.get('user_id');
        } else {
            return $sessionStorage.user_id;
        }
    }

    function set_token(token, remember) {
        Restangular.setDefaultHeaders({Authorization: 'Token ' + token});
        $http.defaults.headers.common['Authorization'] = 'Token ' + token;
        this.is_logged = true;
        if (remember) {
            $cookieStore.put('user_id', token);
        }
        $sessionStorage.user_id = token;
    }

    function update_registered_tournament(tournament) {
        var tmp = null
        var finded = _.find(this.registered_tournaments, function (t, key) {
            return t.id == tournament.id;
        });
        if (!_.isUndefined(finded)) {
            angular.forEach(this.registered_tournaments, function (t, key) {
                if (finded.id == t.id) {
                    tmp = key;
                }
            });

            this.registered_tournaments[tmp] = this.registered_tournaments[tmp].copyFromWsObject(tournament);
        }
    }

    function is_registered_tournament(tournament) {
        var finded = _.find(this.registered_tournaments, function (t) {
            return t.id == tournament.id;
        });
        if (_.isUndefined(finded)) {
            return null;
        }
        return finded;
    }

    function connect_tournament(tournament) {
        if (!tournament.is_connected()) {
            tournament.connect();

        }
    }

    function connect_game(game_id) {
        console.log("tring to connect", game_id, this.games);
        var finded = _.find(this.games, function (g) {
            return g.id == game_id;
        });
        if (!_.isUndefined(finded)) {
            if (!finded.is_connected()) {
                finded.connect();
            }
        }
    }

    function add_new_registered_tournament(tournament) {
        this.registered_tournaments.push(tournament);
    }

    function remove_tournament(tournament) {
        _.remove(this.registered_tournaments, function (t) {
            return t.id == tournament.id;
        });
    }

    function logout() {
        Restangular.setDefaultHeaders({Authorization: undefined});
        $http.defaults.headers.common['Authorization'] = undefined;
        $cookieStore.remove('user_id');
        $sessionStorage.$reset();
        this.registered_tournaments = [];
        this.current_tournament = null;
        this.is_logged = false;
        this.currentUser = null;
    }
}])

estars.factory('RegisterService', ['Restangular', 'SessionService', 'userService', '$rootScope', '$analytics', function (Restangular, SessionService, userService, $rootScope, $analytics) {
    var services = {
        register: register
    }
    return services;
    function register(user) {
        var data = {
            username: user.username,
            password: user.password,
            email: user.email,
            nacionality: user.nacionality.id,
            language: user.language,
            birth_date: user.birth_date

        }
        return Restangular.all('register').post(data).then(register_waiting_callback);
    }

    function register_waiting_callback(data) {
        $analytics.eventTrack('Register', {  category: 'User' });
        return data;
    }

    function register_join_callback(data) {
        SessionService.setToken(data.token, false);
        return userService.$me().then(function (user) {
            SessionService.currentUser = user;
            $rootScope.$broadcast('user:logged', user);
            return user;
        })
    }
}])