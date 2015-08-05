/**
 * Created by davide on 07/11/2014.
 */
estars.directive('following', ['userService', 'SessionService', 'communityFollowingService', function (userService, SessionService, communityFollowingService) {
    return {
        require: '^communityNavTabs',
        restrict: 'E',
        transclude: true,

        scope: {
            title: '@'
        },
        controller: function ($scope) {
            $scope.orderByField = 'user';
            $scope.reverseSort = false;
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
            //  console.log('adding pane most playes');
            // dropdown menu game
            scope.gameDropdown = [
                {id: 'CSGO', label: "CS.GO"},
                {id: 'RFACTOR', label: "RFACTOR"},
                {id: 'DOTA 2', label: "DOTA 2"},
                {id: 'TETRIS', label: "TETRIS"}
            ];
//dropdown menu freplay
            scope.frequencyDropdown = [
                {id: 'FPS', label: "FPS"},
                {id: 'RACING', label: "RACING"},
                {id: 'MOBA', label: "MOBA"},
                {id: 'PUZZLE', label: "PUZZLE"}
            ];

            //dropdown menu genre
            scope.genreDropdown = [
                {id: 'FPS', label: "FPS"},
                {id: 'RACING', label: "RACING"},
                {id: 'MOBA', label: "MOBA"},
                {id: 'PUZZLE', label: "PUZZLE"}
            ];

            //language menu location
            scope.nationalDropdown = [
                {id: 'SPAIN', label: "SPAIN"},
                {id: 'ITALY', label: "ITALY"},
                {id: 'FRENCH', label: "FRENCH"},
                {id: 'RUSSIA', label: "RUSSIA"}
            ];

            scope.filter_settings = {showCheckAll: false, showUncheckAll: false, buttonClasses: 'btn btn-sm btn-filter', scrollable: true, externalIdProp: 'id'};
            scope._genre_filter = [];
            scope._frequency_filter = [];
            scope._game_filter = [];
            scope._national_filter = [];
            scope.$watch('_name_filter', function (val) {
            })

            /* rest angular */
            scope.followingList = []

            communityFollowingService.$getFollowingList().then(function (data) {
                scope.followingList = data
                // console.log('im following this: ');
                // console.log(scope.followingList);
                // console.log('current user is: ');
                // console.log(SessionService.currentUser);
            });

            scope.isRequestSended = function (user) {
                //console.log('my user in repeat is: ')
                // console.log(user)
                return _.contains(SessionService.currentUser.request_sended, user.id);
            }

            scope.sendRequestAsAFriend = function (user) {
                //send request to become friend
                //console.log(user);
                user.send_friendship_request().then(function (data) {
                    if (data == user.id) {
                        // console.log('OK: send request to become friend' + data);
                        user.inviteSent = true
                    } else {
                        //console.log('ERR: send request to become friend' + data);
                    }
                })
            }

            scope.deleteRequestAsAFriend = function (user) {
                //delete req to become friend
                if (1) {
                    //console.log('send request to become friend' + user.name);
                    user.inviteSent = false
                }
            }

            scope.unfollowUser = function (user) {
                //send update to the server
                // console.log(user)
                user.unfollow_user().then(function (data) {
                    //console.log('remove user id:' + data)
                    if (user.id == data) {
                        var index = scope.followingList.indexOf(user)
                        //console.log(index)
                        scope.followingList.splice(index, 1)
                    }
                })
            }
        },
        templateUrl: '/views/layouts/directives/community/community-nav/following.html'
    };
}]);

