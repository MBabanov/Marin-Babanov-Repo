/**
 * Created by Miguel on 20/08/2014.
 */


estars.service("userService", ['Restangular', 'userModel', 'meModel', function (Restangular, userModel, meModel) {
    Restangular.extendModel('me', function (obj) {
        return angular.extend(obj, meModel);
    });
    Restangular.extendModel('user', function (obj) {
        return angular.extend(obj, userModel);
    })
    return {
        $me: function () {
            return Restangular.one("me").get();

        }, $findById: function (id) {
            return Restangular.one("user", id).get();
        }, $findUserStats: function (id) {
            return Restangular.one("user", id).one('stats').get()
        }, $findAllbyGamelvl: function (id) {
            return Restangular.all('ranking').one(id).getList()
        }, $findTopByGame: function (id) {
            return Restangular.all('ranking_top').all(id).getList()
        }, $getProfile: function (username) {
            return Restangular.one('user', username).one('profile').get()
        }, $findUser: function (username) {
            return Restangular.all('user').getList({username: username});
        },
        update_password: change_password,
        update_password_token: change_password_with_token,
        reset_password_code: reset_password_code

    };
    function change_password(data) {
        return Restangular.all('me/update_password').post(data);
    }

    function reset_password_code(data) {
        return Restangular.all('password/reset').post(data);
    }

    function change_password_with_token(data) {
        return Restangular.all('password/update').post(data);
    }

}])

estars.service("statsService", ['Restangular', function (Restangular) {
    return {
        $findLastTournamentStatsByGame: function (tournament_id, user_id) {
            return Restangular.one("tournament", tournament_id).one("stats").get({user_id: user_id});
        },
        $findStatsByUserAndGame: function (game, user_id) {
            return Restangular.one("user", user_id).one("stats", game).get();
        },
        $getDataGraph: function (game, user_id, type) {
            return Restangular.one("user", user_id).one("stats", game).one("graphs").get({type: type});
        }

    };
}])

estars.service("userModalService", ['$modal', function ($modal) {
    return {
        open_modal: function (page) {
            var modalInstance = $modal.open({
                templateUrl: 'views/layouts/user/modal.html',
                controller: 'user.modal',
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: false,
                resolve: {
                    page: function () {
                        return  page;
                    }
                }
            });
        }
    }
}]);

estars.factory("userValidation", ['Restangular', function (Restangular) {
    var services = {
        validate_user: validate_user,
        validate_email: validate_email
    }
    return services;
    function validate_user(username) {
        return Restangular.all('validate/user').post(username);
    }

    function validate_email(email) {
        return Restangular.all('validate/email').post(email);
    }
}]);