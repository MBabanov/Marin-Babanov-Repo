/**
 * invite tab in community page
 */
estars.directive('invite', ['communityInviteService', 'SessionService', function (communityInviteService, SessionService) {
    return {
        require: '^communityNavTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        controller: function ($scope) {
            $scope.invite = function () {
                communityInviteService.$invite()
            }
            $scope.deleteEmail = function () {

            }
            $scope.selectAll = function () {
                communityInviteService.$selectAll()

            }
            $scope.unSelectAll = function () {
                communityInviteService.$unSelectAll()
                ('un selecet all element in local scope')
            }
            /* test user connected to social or not */
            $scope.isUserSocialConnected = false

            $scope.isSocialConnected = function () {
                if (SessionService.currentUser.social_providers.length > 0) {
                    // $scope.isUserSocialConnected = true
                    //console.log(' user is social connected: '+ $scope.isUserSocialConnected)
                    return true
                }
                else {
                    // $scope.isUserSocialConnected = false
                    console.log(' user is social connected: ' + $scope.isUserSocialConnected)
                    return false
                }
            }
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope); //passing count and title

            //dropdown menu genre
            scope.genderDropdown = [
                {id: 'FPS', label: "FPS"},
                {id: 'RACING', label: "RACING"},
                {id: 'MOBA', label: "MOBA"},
                {id: 'PUZZLE', label: "PUZZLE"}
            ];

            //language menu location
            scope.networkDropdown = [
                {id: 'FACEBOOK', label: "FACEBOOK"},
                {id: 'TWITTER', label: "TWITTER"},
                {id: 'YOUTUBE', label: "YOUTUBE"},
                {id: 'INSTAGRAM', label: "INSTAGRAM"}
            ];

            scope.filter_settings = {showCheckAll: false, showUncheckAll: false, buttonClasses: 'btn btn-sm btn-filter', scrollable: true, externalIdProp: 'id'};
            scope._gender_filter = [];
            scope._network_filter = [];

            scope.$watch('_name_filter', function (val) {
            })
        },
        templateUrl: 'views/layouts/directives/community/community-nav/invite.html'
    };
}]);
