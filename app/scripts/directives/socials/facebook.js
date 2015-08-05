estars.directive('facebook', [ 'facebookService', function (facebookService) {
    return {
        restrict: 'EA',
        replace: true,
        scope: false,
        templateUrl: 'views/layouts/directives/social/facebook.html',

        link: function (scope, elem, iAttrs) {
            scope.facebook = [];
            scope.getFacebookData = function () {
                facebookService.$getAll().then(function (data) {
                    scope.facebook = data;

                })
            };
            scope.getFacebookData();
        }
    }
}
]);

