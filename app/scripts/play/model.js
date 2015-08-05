/**
 * Created by Miguel on 19/08/2014.
 */

estars.factory('gameEvents', ['$rootScope', 'SessionService', 'tournamentDetailService', '$timeout', function ($rootScope, SessionService, tournamentDetailService, $timeout) {
    return {
        game_callback: function (MessageEvent) {
            _msg = angular.fromJson(MessageEvent.data);
            console.log(_msg);
            if (_.isEqual(_msg.action, 'new')) {
                $rootScope.$broadcast('game:tournament:new', _msg);
            } else if (_.isEqual(_msg.action, 'update')) {
                SessionService.update_registered_tournament(_msg.tournament);
                $rootScope.$broadcast('game:tournament:update', _msg);
            } else if (_.isEqual(_msg.action, 'new_message')) {
                $rootScope.$broadcast('game:message:new', _msg.data);
            } else if (_.isEqual(_msg.action, 'wait')) {
                var registered = SessionService.is_registered_on(_msg.tournament);
                if (!_.isNull(registered)) {
                    if (registered.id != SessionService.current_tournament) {
                        $rootScope.$broadcast('close:modal');
                        tournamentDetailService.tournament_detail(_msg.tournament, false);
                        $timeout(function () {
                            $rootScope.$broadcast('registered:tournament:wait', _msg);
                        }, 2000);
                    }
                }
                $rootScope.$broadcast('registered:tournament:wait', _msg);
            } else if (_.isEqual(_msg.action, 'start')) {
                var registered = SessionService.is_registered_on(_msg.tournament);
                if (!_.isNull(registered)) {
                    $rootScope.$broadcast('registered:tournament:start', _msg);
                }

            } else if (_.isEqual(_msg.action, 'finish')) {
                var registered = SessionService.is_registered_on(_msg.tournament);
                if (!_.isNull(registered)) {
                    $rootScope.$broadcast('registered:tournament:finish', _msg);
                }
                $rootScope.$broadcast('game:tournament:update', _msg);

            } else if (_.isEqual(_msg.action, 'casting')) {
                $rootScope.$broadcast('registered:tournament:casting', _msg);

            } else if (_.isEqual(_msg.action, 'wait_match')) {
                console.log(SessionService.next_match.id)
                console.log(SessionService.next_match)
                if (_.isEqual(_msg.match.id, SessionService.next_match.id)) {
                    $rootScope.$broadcast('registered:tournament:match:wait', _msg);
                }

            } else if (_.isEqual(_msg.action, 'start_match')) {
                console.log(SessionService.next_match.id)
                console.log(SessionService.next_match)
                if (_.isEqual(_msg.match, SessionService.next_match.id)) {
                    $rootScope.$broadcast('registered:tournament:match:start', _msg);
                }

            } else if (_.isEqual(_msg.action, 'finish_match')) {
                if (_.isEqual(_msg.match.id, SessionService.next_match.id)) {
                    $rootScope.$broadcast('registered:tournament:match:finish', _msg);
                }

            } else if (_.isEqual(_msg.action, 'update_match')) {
                if (_.isEqual(_msg.tournament.id, SessionService.current_tournament)) {
                    $rootScope.$broadcast('tournament:match:update', _msg);
                }

            } else if (_.isEqual(_msg.action, 'tournament_update')) {
                SessionService.update_registered_tournament(_msg.tournament);
                $rootScope.$broadcast('registered:tournament:update', _msg);

            } else if (_.isEqual(_msg.action, 'finish_tournament')) {
                var registered = SessionService.is_registered_on(_msg.tournament);
                if (!_.isNull(registered)) {
                    $rootScope.$broadcast('registered:tournament:finish', _msg);
                }
                $rootScope.$broadcast('registered:tournament:update', _msg);

            }

        }

    }
}]);
estars.factory('gameModel', ['ngSocket', 'gameEvents', 'ELECTRONIC', function (ngSocket, gameEvents, ELECTRONIC) {
    var ws;
    this.connected = false;
    return {
        connect: function (opts) {
            ws = ngSocket(ELECTRONIC.HOST_WS + 'ws/g_' + this.id + '?subscribe-broadcast');
            ws.onMessage(gameEvents.game_callback);
            console.log("connected");
            this.connected = true;
        },
        is_connected: function () {
            return this.connected;
        },
        close: function () {
            ws.close(true)
        }
    };
}]);

estars.factory('matchEvents', ['$rootScope', 'SessionService', function ($rootScope, SessionService) {
    return {
        match_callback: function (MessageEvent) {
            _msg = angular.fromJson(MessageEvent.data);
            if (_.isEqual(_msg.action, 'waiting')) {
                $rootScope.$broadcast('registered:tournament:match:wait', _msg);
            } else if (_.isEqual(_msg.action, 'start')) {
                $rootScope.$broadcast('registered:tournament:match:start', _msg);
            } else if (_.isEqual(_msg.action, 'finish')) {
                $rootScope.$broadcast('registered:tournament:match:finish', _msg);
            }
        }
    }
}]);
estars.factory('matchModel', ['matchEvents', 'ngSocket', 'ELECTRONIC', function (matchEvents, ngSocket, ELECTRONIC) {
    var ws;
    var connected = false;
    return {
        connect: function () {
            ws = ngSocket(ELECTRONIC.HOST_WS + 'ws/m_' + this.id + '?subscribe-broadcast')
            ws.onMessage(matchEvents.match_callback);
            this.connected = true;
        },
        is_connected: function () {
            return connected;
        },
        close: function () {
            ws.close(true)
        },
        copyFromWsObject: function (obj) {
            this;
            for (var value in obj) {
                if (typeof value != "function" && typeof value != 'undefined')
                    this[value] = obj[value];
            }
            return this;
        }
    };
}]);

estars.factory('tournamentEvents', ['$rootScope', 'SessionService', 'tournamentDetailService', '$timeout', function ($rootScope, SessionService, tournamentDetailService, $timeout) {
    return {
        tournament_callback: function (MessageEvent) {
            _msg = angular.fromJson(MessageEvent.data);

            if (_.isEqual(_msg.action, 'wait')) {
                var registered = SessionService.is_registered_on(_msg.tournament);
                if (!_.isNull(registered)) {
                    if (registered.id != SessionService.current_tournament) {
                        $rootScope.$broadcast('close:modal');
                        tournamentDetailService.tournament_detail(_msg.tournament, false);
                        $timeout(function () {
                            $rootScope.$broadcast('registered:tournament:wait', _msg);
                        }, 2000);
                    }
                }
                $rootScope.$broadcast('registered:tournament:wait', _msg);
            } else if (_.isEqual(_msg.action, 'start')) {
                $rootScope.$broadcast('registered:tournament:start', _msg);
            } else if (_.isEqual(_msg.action, 'finish')) {
                $rootScope.$broadcast('registered:tournament:finish', _msg);
            } else if (_.isEqual(_msg.action, 'casting')) {
                $rootScope.$broadcast('registered:tournament:casting', _msg);
            } else if (_.isEqual(_msg.action, 'update')) {
                SessionService.update_registered_tournament(_msg.tournament);
                $rootScope.$broadcast('registered:tournament:update', _msg);
            }

        }
    }

}]);
estars.factory('tournamentModel', ['Restangular', 'ngSocket', 'tournamentEvents', 'ELECTRONIC', function (Restangular, ngSocket, tournamentEvents, ELECTRONIC) {

    this.ws = null;
    this.connected = false;
    this.modified = '';
    return {
        connect: function () {
            this.ws = ngSocket(ELECTRONIC.HOST_WS + 'ws/t_' + this.id + '?subscribe-broadcast')
            this.ws.onMessage(tournamentEvents.tournament_callback);
            this.connected = true;
        },
        close: function () {
            try {
                this.ws.close(true);
            } catch (e) {

            }

        },
        is_connected: function () {
            return this.connected;
        },
        copyFromWsObject: function (obj) {
            this;
            for (var value in obj) {
                if (typeof value != "function" && typeof value != 'undefined')
                    this[value] = obj[value];
            }
            return this;
        },
        get_matches: function () {
            return Restangular.one("tournament", this.id).all('matches').getList();
        },
        unregister: function () {
            return Restangular.one("tournament", this.id).post('unregister');
        },
        get_match_stats_by_User: function (match_id, user_id) {
            return Restangular.one("match", match_id).one('stats').get({user_id: user_id})
        },
        get_modified: function () {
            return this.modified;
        },
        get_entry_type: function () {
            var amount = parseFloat(this.register_amount)
            if (_.isEqual(this.cash_type, 'FAKE_CASH')) {
                if (amount > 0 && amount <= 300) {
                    return "micro";
                } else if (amount > 300 && amount <= 1000) {
                    return "small";
                } else if (amount > 1000 && amount <= 3500) {
                    return "medium";
                } else if (amount > 3500) {
                    return "high";
                }
            } else {
                if (amount > 0 && amount <= 3) {
                    return "micro";
                } else if (amount > 3 && amount <= 10) {
                    return "small";
                } else if (amount > 10 && amount <= 35) {
                    return "medium";
                } else if (amount > 35) {
                    return "high";
                }
            }
        }
    };

}]);




