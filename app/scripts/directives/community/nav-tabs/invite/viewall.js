estars.directive('viewall', ['communityInviteService', function (communityInviteService) {
    return {
        require: ['^inviteNavTabs'],
        restrict: 'E',
        transclude: true,

        scope: { // creating new isolated scope
            title: '@',
            type: '@'
        },
        controller: function ($scope, $rootScope) {
            //then use promise
            $scope.socialFriends = communityInviteService.$getSocialFriendsList()

            $rootScope.$on('update-socialFriends', function (scope, socialFriends) {
                $scope.socialFriends = socialFriends;
                //console.log($scope.socialFriends)
            })

        },
        link: function (scope, element, attrs, controllers, $rootScope) {
            controllers[0].addPane(scope); //adding tab to tabs controller
            scope.selectUser = function (user) {
                communityInviteService.$selectUser(user)
            }

            //tremove user from socialFriends
            scope.unselectUser = function (user) {
                communityInviteService.$unselectUser(user)
            }

        },
        templateUrl: '/views/layouts/directives/community/community-nav/invite/viewall.html'
    };
}]);
