/**
 * Created by Miguel on 11/11/2014.
 */
estars.directive('tournamentDetail', ['$rootScope', function ($rootScope) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-detail.html',
        scope: {
            tournament: '='

        },
        link: function (scope, elem, attr) {

            scope.menuItem = '2';
            scope.toggleMenu = function (item) {
                if (_.isEmpty(scope.menuItem)) {
                    scope.menuItem = item;
                } else {
                    if (scope.menuItem == item) {
                        scope.menuItem = "";
                    } else {
                        scope.menuItem = item;
                    }
                }

            }
            scope.show_rules = show_rules;
            function show_rules() {
                $rootScope.$broadcast("tournament:show:rules")
            }
        }
    }
}]);