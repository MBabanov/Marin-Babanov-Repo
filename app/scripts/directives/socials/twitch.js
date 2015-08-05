/**
 * Created by epintor on 15/10/2014.
 */
estars.directive('twitch', [ function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: false,

        templateUrl: 'views/layouts/directives/social/twitch.html',
        controller: function ($scope, twitterService) {

        },
        link: function (scope, elem, iAttrs, $timeout) {

        }
    };
}]);
