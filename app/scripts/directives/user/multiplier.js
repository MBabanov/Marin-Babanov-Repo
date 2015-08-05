/**
 * Created by Miguel on 28/09/2014.
 */
estars.directive('multiplier', ['$timeout', function ($timeout) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/user/multiplier.html',
        scope: {
            callback: '&callback',
            init: '=',
            multiplier: '@'
        },
        link: function (scope, elem, att) {
            // console.log('multiplier level is: ' + scope.multiplier);
        }
    }
}]);