estars.directive('multiplier-same-size', ['$timeout', function ($timeout) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: '/views/layouts/directives/user/multiplier-same-size.html',
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
