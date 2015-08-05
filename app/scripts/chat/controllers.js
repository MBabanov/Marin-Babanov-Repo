/**
 * Created by Miguel on 02/12/2014.
 */
estars.controller('chat', ['$scope', 'SessionService', 'chatService', '$rootScope', 'notificationService', '$timeout', function ($scope, SessionService, chatService, $rootScope, notificationService, $timeout) {
    var vm = this;
    var sound = new Howl({
        urls: ['/effects/chat.mp3']
    })
    var beep = new Howl({
        urls: ['/effects/beep.mp3']
    })
    vm.messages = [];
    vm.current_id = null;
    vm.is_open = true;
    vm.connected = false;
    vm.game_channel = null;
    vm.element_id = 'chat';
    vm.select_user = select_user;
    vm.message = '';
    vm.add_message = add_new_message;
    vm.accept_friend = accept_friend;
    vm.reject_friend = reject_friend;
    vm.toggle_chat = toggle_chat;
    vm.scroller = null;
    $rootScope.$on('game:message:new', function (event, data) {
        vm.messages.push(data);
        $timeout(function () {
            $rootScope.$broadcast('scroller:bottom', 'chat');
        }, 0)

    });
    $rootScope.$on('me:message:new', function (event, data) {
        chatService.new_message_recieved(data);
        if (_.isUndefined(vm.chat_user)) {
            var friend = _.find(vm.friends, function (_friend) {
                return _friend.id == data.from_user.id;
            });
            friend.messages++;
        } else {
            if (data.from_user.id != vm.chat_user.user.id) {
                var friend = _.find(vm.friends, function (_friend) {
                    return _friend.id == data.from_user.id;
                });
                friend.messages++;
            }
        }
        sound.play();
        $scope.$broadcast('bottom', $scope)
    });
    $rootScope.$on('me:notification:new', function (event, data) {
        vm.notifications.push(data);
        beep.play();
    });
    $rootScope.$on('chat:connect:game', function (event, game) {
        if (_.isNull(vm.game_channel)) {
            vm.game_channel = game;
            vm.current_id = SessionService.currentUser.id;

            vm.connected = true;
            $rootScope.$broadcast('chat:connect:game_connected', vm.game);
            chatService.get_last_message(game.id).then(function (data) {
                angular.forEach(data, function (m) {
                    vm.messages.push(m);
                });
                $rootScope.$broadcast('scroller:bottom', 'chat');
            })
        }

    });

    function toggle_chat() {
        vm.is_open = !vm.is_open;
    }

    function add_new_message(event) {
        event.preventDefault();
        var message = chatService.send_message_game_channel(vm.message, vm.game_channel)
        vm.message = '';
        $scope.$broadcast('scroller:bottom', 'chat');
        return false;
//        vm.chat_user.message.push(message);
    }

    function select_user(user) {
        user.messages = 0;
        vm.chat_user = chatService.select_user(user);
//
    }

    function get_friends() {
        SessionService.currentUser.get_friends().then(function (data) {
            vm.friends = data;
        });
    }

    function get_notifications() {
        notificationService.get_notifications().then(function (data) {
            vm.notifications = data;
        });
    }

    function accept_friend(notification) {
        notificationService.update_notification(notification.id, 1).then(function (data) {
            _.remove(vm.notifications, function (noti) {
                return noti.id == notification.id;
            });
        });
    }

    function reject_friend(notification) {
        notificationService.update_notification(notification.id, 2).then(function (data) {

        });
    }

//    get_friends();
//    get_notifications();
}]);