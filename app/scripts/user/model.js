/**
 * Created by Miguel on 20/08/2014.
 */


estars.factory('meEvents', ['$rootScope', 'SessionService', function ($rootScope, SessionService) {
    var services = {
        me_callback: me_callback
    };
    return services;
    function me_callback(MessageEvent) {
        _msg = angular.fromJson(MessageEvent.data);
        console.log("ME", _msg);
        if (_.isEqual(_msg.action, 'new_message')) {
            $rootScope.$broadcast('me:message:new', _msg.data);
        } else if (_.isEqual(_msg.action, 'new_notification')) {
            $rootScope.$broadcast('me:notification:new', _msg.data);
        } else if (_.isEqual(_msg.action, 'update')) {
            $rootScope.$broadcast('game:tournament:update', _msg);
        } else if (_msg.action == 'sync_client') {
            $rootScope.$broadcast('me:sync', _msg);
        } else if (_.isEqual(_msg.action, 'hardware')) {
            $rootScope.$broadcast('me:hardware:sync', _msg.hardware);
        } else if (_.isEqual(_msg.action, 'cashier')) {
            $rootScope.$broadcast('me:cashier:update', angular.fromJson(_msg.data));
        } else if (_.isEqual(_msg.action, 'unregister')) {
            $rootScope.$broadcast('me:tournament:unregister', angular.fromJson(_msg));
        }
    }

}]);

estars.factory('meModel', ['ngSocket', 'Restangular', 'clientService', 'meEvents', 'messageService', 'ELECTRONIC', function (ngSocket, Restangular, clientService, meEvents, messageService, ELECTRONIC) {
    var ws;
    var connected = false;

    return {
        connect: function () {
            ws = ngSocket(ELECTRONIC.HOST_WS + 'ws/u_' + this.id + '?subscribe-broadcast')
//            ws = ngSocket('ws://localhost:8000/ws/u_' + this.id + '?subscribe-broadcast')
            ws.onMessage(meEvents.me_callback);
            this.connected = true;
        },
        close: function () {
            try {
                ws.close(true);
            } catch (err) {

            }

        },
        in_progress_tournament: function () {
            return Restangular.one("me").all('registered_tournament').getList();
        },
        can_play: function (game) {
            if (this.installed_client && this.sincronized) {

                var found = _.contains(this.games, game);

                if (!found) {
                    clientService.downloadDialog();
                    return false
                } else {
                    this.send_ping("5.57.224.145");
                    return true;
                }
            } else {
                clientService.downloadDialog();
                return false;
            }
        },
        sync: function () {
            clientService.login(this.username, this.uid);
        },
        send_ping: function (ip) {
            if (this.installed_client && this.sincronized) {
                clientService.ping(ip);
            }
        },
        generate_uid: function () {
            this.uid = _.uniqueId(_.random(100000000000000000))
        },
        get_profile: function () {
            Restangular.one('user', this.username).one('profile').get()
        },
        full_name: function () {
            if (this.first_name == null) {
                return ''
            } else {
                return this.first_name + ' ' + this.last_name;
            }

        },
        detect_hardware: function () {
            clientService.hardware()
        },
        get_friends: get_Friends,
        update_cashier: update_cashier,
        add_games: add_games

    };
    function get_Friends() {
        return Restangular.one('me').all('friends').getList();
    }

    function update_cashier(action) {
        var cashier = this.cashier;
        if (_.isEqual(action.type, 'REAL_CASH')) {
            if (action.only_play) {
                var actual = parseFloat(cashier.play_money);
                var total = actual + parseFloat(action.amount);
                this.cashier.play_money = total;
                this.cashier.total_money = this.cashier.play_money + parseFloat(this.cashier.money);
            } else {
                var actual = parseFloat(cashier.money);
                var total = actual + parseFloat(action.amount);
                this.cashier.money = total;
                this.cashier.total_money = parseFloat(this.cashier.play_money) + parseFloat(this.cashier.money);
            }

        } else {
            var actual = parseFloat(cashier.points);
            var total = actual + parseFloat(action.amount);
            this.cashier.points = total;
        }
        if (_.isEqual(action.action, 'WIN')) {
            messageService.win_tournament_dialog(action);
        } else if (_.isEqual(action.action, 'DAILY_RECHARGE')) {
            messageService.dayly_recharge_dialog(action);
        } else if (_.isEqual(action.action, 'RECHARGE_BONUS')) {
            messageService.bonus_success(action);
        }
    }

    function add_games(detected_games) {
        angular.forEach(detec_games, function (g) {
            this.games.push(g);
        })
    }
}]);

estars.factory('userModel', ['Restangular', 'SessionService', function (Restangular, SessionService) {
    var service = {
        unfollow_user: unfollow_user,
        follow_user: follow_user,
        is_friend: is_friend,
        is_followed: is_followed,
        is_friendship_request_sended: is_friendship_request_sended,
        send_friendship_request: send_friendship_request
    };
    return service;
    function unfollow_user() {
        return Restangular.one('user', this.id).one('unfollow').post().then(function (data) {
            _.pull(SessionService.currentUser.following, data.id);
            return data.id;
        });
    }

    function follow_user() {
        return Restangular.one('user', this.id).one('follow').post().then(function (data) {
            SessionService.currentUser.following.push(data.id);
            return data.id;
        });
    }

    function is_friendship_request_sended() {
        var request = SessionService.currentUser.request_sended;
        var user_id = String(this.id);
        return _.contains(request_sended, user_id);
    }

    function is_friend() {
        var friends = SessionService.currentUser.friends;
        var user_id = String(this.id);
        return _.contains(friends, user_id);
    }

    function is_followed() {
        var following = SessionService.currentUser.following;
        var user_id = String(this.id);
        return _.contains(following, user_id);

    }

    function send_friendship_request() {
        return Restangular.one('user', this.id).one('request').post().then(function (data) {
            SessionService.currentUser.request_sended.push(data.id);
            return data.id;
        });
    }

}]);