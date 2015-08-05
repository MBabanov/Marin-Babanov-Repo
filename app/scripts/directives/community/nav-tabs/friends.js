/**
 * Created by davide on 07/11/2014.
 */
estars.directive('friends', ['userService', 'communityFriendsService', 'SessionService', function (userService, communityFriendsService, SessionService) {
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

            scope.friendsList = []



            communityFriendsService.$getFriendsList().then(function (data) {
                scope.friendsList = data
            })

            /*SessionService.currentUser......then(function(data){
             scope.users_request = data
             })*/

//user become friends
            scope.acceptRequest = function (user) {
                console.log(user)
                userService.send_friendship_request(user).then(function (user) {
                    //console.log('accept friendship request!');
                    scope.users_request.splice(scope.users_request.indexOf(user), 1)
                    scope.friendsList.push(user);
                })
            }


//user not become friend and the request is delete
            scope.denyRequest = function (user) {
                userService.delete_friendship_request(user).then(function (user) {
                    if (1) {
                        scope.users_request.splice(scope.users_request.indexOf(user), 1)
                        //console.log('deny friendship request!');
                        // update request list to the server
                    }
                })

            }

        },
        templateUrl: '/views/layouts/directives/community/community-nav/friends.html'
    };
}]);
