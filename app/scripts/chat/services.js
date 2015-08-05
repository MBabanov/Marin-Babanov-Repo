/**
 * Created by Miguel on 02/12/2014.
 */


estars.factory("chatService", ['SessionService', '$rootScope', 'Restangular', function (SessionService, $rootScope, Restangular) {
    var chats = [];
    var service = {
        select_user: select_user,
        send_new_message: send_new_message,
        new_message_recieved: new_message_recieved,
        send_message_game_channel: send_new_message_game,
        get_last_message: get_last_message_game

    };
    return service;

    function select_user(user) {
        var chat = _.find(chats, function (_chat) {
            return _chat.user.id == user.id;
        });
        if (_.isUndefined(chat)) {
            return add_new_user(user);
        } else {
            return chat;
        }
    }

    function send_new_message(message, chat) {
        var _new_message = {
            from_user: {
                id: SessionService.currentUser.id,
                avatar: SessionService.currentUser.avatar,
                username: SessionService.currentUser.username
            },
            to: chat.user.id,
            message: message,
            created_time: moment().utc()
        };

        save_new_message(_new_message).then(function (data) {

        });
        angular.forEach(chats, function (value, key) {
            if (value.user.id == chat.user.id) {
                value.messages.push(_new_message);
            }
        });
        return _new_message;

    }

    function send_new_message_game(message, game_id) {
        var data = {
            game_id: game_id.id,
            message: message
        }
        return Restangular.all('message_game').post(data);
    }

    function get_last_message_game(game_id) {
        return Restangular.all('message_game').getList({game_id: game_id});
    }

    function new_message_recieved(message) {
        var message_readed = false;
        var _new_message = {
            from_user: {
                id: message.from_user.id,
                avatar: message.from_user.avatar,
                username: message.from_user.username
            },
            to: SessionService.currentUser.id,
            message: message.message,
            created_time: message.created_time
        };
        var chat = select_user(message.from_user);
        chat.messages.push(_new_message);

    }

    function add_new_user(user) {
        var _new_chat = {
            user: {
                id: user.id,
                avatar: user.avatar,
                status: 'connected',
                username: user.username
            },
            messages: []
        };

        chats.push(_new_chat);
        return _new_chat;
    }

    function save_new_message(new_message) {
        _message = {
            to: [new_message.to],
            message: new_message.message

        }
        return Restangular.all('message').post(_message);
    }

}]);