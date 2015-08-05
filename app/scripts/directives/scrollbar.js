/**
 * Created by Miguel on 17/09/2014.
 */


estars.directive('scrollBar', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        restrict: 'A',
        scope: {
            element: '@'
        },

        link: function (scope, element, attrs) {

            var scroller = null;
            refresh = function () {
                scope.$on('refresh', function () {
                    scroller.reinitialise()
                    //console.log('now i want to refresh')
                })
            }
            $rootScope.$on('scroller:bottom', function (event, data) {

                if (_.isEqual(data, scope.element)) {
                    scroller.mCustomScrollbar("update");
                    scroller.mCustomScrollbar("scrollTo", "bottom");
                }
            });
            $timeout(function () {
                // console.log(element);
                scroller = angular.element(element);
                scroller.mCustomScrollbar({
                    scrollInertia: 0
                });

            }, 0);
        }
    };
}]);