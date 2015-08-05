/**
 * Created by Miguel on 28/09/2014.
 */
estars.directive('miniUserResum', ['$timeout', function ($timeout) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/user/mini-user.html',
        scope: {
            user: '='
        },
        link: function (scope, elem, attr) {

        }
    }
}]);