/**
 * Created by davide on 07/11/2014.
 */
estars.directive('unselected', ['communityInviteService', '$rootScope', function (communityInviteService, $rootScope) {
    return {
        require: ['^inviteNavTabs', '^invite'],
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            type: '@'

        },
        link: function (scope, element, attrs, controllers) {
            controllers[0].addPane(scope);
            //then use promise
            scope.unselectedUsers = communityInviteService.$getUnselectedUsers()


            $rootScope.$on('update-unselectedUsers', function (event, unselected) {
                //  console.log('ON:unselected controller function: unselected list is: ')
                scope.unselectedUsers = unselected;
                // console.log(scope.unselectedUsers)
            })

            scope.selectUser = function (user) {
                //   console.log('removing user from unselecting list');
                //  console.log(user)
                communityInviteService.$selectUser(user)
            }
            scope.$watch(
                function (scope) {
                    // This becomes the value we're "watching".
                    return(scope.unselectedUsers);
                },
                function (newValue) {
                    scope.$broadcast('refresh', scope)

                })
            //tremove user from socialFriends
            scope.unselectUser = function (user) {
                communityInviteService.$unselectUser(user)
            }

        },
        templateUrl: '/views/layouts/directives/community/community-nav/invite/unselected.html'
    };
}]);
