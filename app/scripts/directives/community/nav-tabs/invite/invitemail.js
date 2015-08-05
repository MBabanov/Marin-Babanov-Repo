/**
 * Created by davide on 07/11/2014.
 */
estars.directive('invitemail', ['communityInviteService', function (communityInviteService) {
    return {
        require: ['^inviteNavTabs', '^invite'],

        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            type: '@'
        },
        controller: function ($scope) {
            $scope.emailList = []

            /// that is to have double binding with emailList coz when i send data from different tab this field need to be aupdated

            $scope.emailList = communityInviteService.$getEmailList()
            /*$scope.inviteByEmail = function () {
             console.log('sending invitation to: ' + $scope.emailTags)
             communityInviteService.$inviteAllSelectedUsers().then(function(data){
             console.log('invite sended from button in inviteMail tab')
             $scope.emailTags = [];
             })
             }*/
        },

        link: function (scope, element, attrs, controllers) {
            controllers[0].addPane(scope);
        },
        templateUrl: '/views/layouts/directives/community/community-nav/invite/invitemail.html'
    };
}]);
