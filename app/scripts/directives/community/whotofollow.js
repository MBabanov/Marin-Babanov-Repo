estars.directive('whotofollow', ['communityWhoToFollowService', function (communityWhoToFollowService) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {},
        controller: function ($scope, communityWhoToFollowService) {

        },
        link: function (scope, element, attrs) {

            //scope.whoToFollowUsers =[]
            communityWhoToFollowService.$getWhoToFollowList().then(function (data) {
                scope.whoToFollowUsers = data
                // console.log(scope.whoToFollowUsers)
            })
            // console.log('whoToFollowUsers is now ')
            /*
             function to follow an user from the estars user
             */
            scope.followUser = function (user) {
                //send update to the server
                // console.log(user)
                user.follow_user().then(function (data) {

                    if (user.id == data) {
                        var index = scope.whoToFollowUsers.indexOf(user)
//                        console.log(index)
                        scope.whoToFollowUsers.splice(index, 1)
                    }
                })

            }
        },
        templateUrl: 'views/layouts/directives/community/whotofollow.html'
    };
}]);
