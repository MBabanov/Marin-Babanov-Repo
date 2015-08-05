/**
 * Created by davide on 07/11/2014.
 */
estars.directive('communityNavTabs', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {
            var panes = $scope.panes = [];

            //console.log($scope);

            $scope.select = function (pane) {
                angular.forEach(panes, function (pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            };

            this.addPane = function (pane) {
                if (panes.length === 0) {
                    $scope.select(pane);
                }
                // console.log('inside game nav tabs '+panes);
                panes.push(pane);
            };
        },
        templateUrl: 'views/layouts/directives/community/community-nav/community-nav-tabs.html'
    };
})
