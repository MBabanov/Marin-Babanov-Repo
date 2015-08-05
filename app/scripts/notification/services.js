/**
 * Created by Miguel on 03/12/2014.
 */


estars.factory("notificationService", ['SessionService', '$rootScope', 'Restangular', function (SessionService, $rootScope, Restangular) {
    var chats = [];
    var service = {
        get_notifications: get_notifications,
        update_notification: update_notification,
        new_message_recieved: new_message_recieved

    };
    return service;

    function get_notifications() {
        return Restangular.all('me').all('notification').getList()
    }

    function update_notification(id, action) {
        var data = {
            action: action
        }
//        console.log(data);
        return Restangular.all('me/notification/' + id).post(data)
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