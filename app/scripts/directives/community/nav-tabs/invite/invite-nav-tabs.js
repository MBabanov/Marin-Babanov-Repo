/**
 * Created by davide on 07/11/2014.
 */
estars.directive('inviteNavTabs', ['communityInviteService', function (communityInviteService) {
    return {
        restrict: 'E',
        transclude: true,

        scope: {

        },
        controller: function ($scope) {
            // $scope.counter = communityInviteService.$getCountSelectedUsers()
            //  console.log($scope.counter)
            var panes = $scope.panes = [];

            $scope.select = function (pane) {
                angular.forEach(panes, function (pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            };

            this.addPane = function (pane) { //pane is scope
                if (panes.length === 0) {
                    $scope.select(pane);

                }
                //  console.log(pane)
                //  pane.counter = communityInviteService.$getCountSelectedUsers()
                panes.push(pane);
            };

        },
        link: function (scope, elem, attr) {

        },
        templateUrl: 'views/layouts/directives/community/community-nav/invite/invite-nav-tabs.html'
    };
}])

