/**
 * Created by Miguel on 11/11/2014.
 */
estars.directive('profile', ['SessionService', 'userModalService', function (SessionService, userModalService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/user/profile.html',
        scope: {
            user: '='

        }, link: function (scope, elem, attr) {
            scope.itsme = false;
            scope.loged = SessionService.is_logged;
            if (SessionService.is_logged) {
                if (SessionService.currentUser.id == scope.user.id) {
                    scope.itsme = true;
                }
            }
            if (SessionService.is_logged) {
                if (!scope.itsme) {
                    its_followed()
                    its_friends()
                }
            }
            scope.edit_profile = edit_profile;

            function edit_profile() {
                userModalService.open_modal('profile.edit');
            }

            function follow_user() {
                scope.user.follow().then(function (data) {
                    its_followed();
                });
            }

            function unfollow_user() {

            }

            function its_followed() {
                scope.followed = scope.user.is_followed()
//                console.log(scope.followed)
            }

            function its_friend() {
                scope.its_friends = scope.user.is_friend()
            }

        }
    }
}]);