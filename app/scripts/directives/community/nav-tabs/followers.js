/**
 * Created by davide on 07/11/2014.
 */
estars.directive('followers', ['userService', 'SessionService', 'communityFollowersService' , function (userService, SessionService, communityFollowersService) {
    return {
        require: '^communityNavTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'

        }, controller: function ($scope) {

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
            //dropdown menu freq
            scope.frequencyDropdown = [
                {id: 'FPS', label: "FPS"},
                {id: 'RACING', label: "RACING"},
                {id: 'MOBA', label: "MOBA"},
                {id: 'PUZZLE', label: "PUZZLE"}
            ];

            //dropdown menu gender
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

            //scope.followersList = []

            communityFollowersService.$getFollowersList().then(function (data) {
                scope.followersList = data
                //   console.log('ARRAY with followers is:')
                //  console.log(scope.followersList)
            });

            // console.log('My user is: ')
            // console.log(SessionService.currentUser)


            scope.isRequestSended = function (user) {
                // console.log('my user in repeat is: ')
                //  console.log(user)
                return _.contains(SessionService.currentUser.request_sended, user.id);
            }

            scope.followUser = function (user) {
                //send update to the server
                // console.log(user)
                user.follow_user().then(function (data) {

                    if (user.id == data) {
                        var index = scope.followersList.indexOf(user)
                        //console.log(index)
                        scope.followersList.splice(index, 1)
                    }
                })
            }
            scope.sendRequestAsAFriend = function (user) {
                //send request to become friend
                console.log(user);
                user.send_friendship_request().then(function (data) {
                    if (data == user.id) {
                        console.log('OK: send request to become friend ' + data);
                        user.inviteSent = true
                    } else {
                        console.log('ERR: send request to become friend ' + data);
                    }
                })
            }
            scope.deleteRequestAsAFriend = function (user) {
                //send request to become friend
                //success
                if (1) {
                    console.log('send request to become friend' + user.username);
                    user.inviteSent = false
                }
            }
        },
        templateUrl: 'views/layouts/directives/community/community-nav/followers.html'
    };
}]);

