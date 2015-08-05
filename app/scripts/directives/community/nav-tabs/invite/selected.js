/**
 * Created by davide on 07/11/2014.
 */
estars.directive('selected', ['communityInviteService', '$rootScope' , function (communityInviteService, $rootScope) {
    return {
        require: ['^inviteNavTabs', '^invite'],
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            counter: '@',
            type: '@'
        },
        link: function (scope, element, attrs, controllers) {
            controllers[0].addPane(scope);
            //then use promise
            scope.selectedUsers = communityInviteService.$getSelectedUsers()

            //select user from socialfriends
            $rootScope.$on('update-selectedUsers', function (scope, selected) {
                //console.log('ON:selected controller function: selected list is: ')
                scope.selectedUsers = selected;
                // console.log(scope.selectedUsers);
            })

            scope.selectUser = function (user) {
                communityInviteService.$selectUser(user)
            }
            scope.$watch(
                function (scope) {
                    // This becomes the value we're "watching".
                    return(scope.selectedUsers);
                },
                function (newValue) {
                    scope.$broadcast('refresh', scope)

                }
            );

            //tremove user from socialFriends
            scope.unselectUser = function (user) {
                communityInviteService.$unselectUser(user)
            }
        },
        templateUrl: '/views/layouts/directives/community/community-nav/invite/selected.html'
    };
}]);
