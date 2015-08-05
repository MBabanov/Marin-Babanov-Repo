/**
 * Created by Miguel on 29/12/2014.
 */


estars.directive('tournamentPostMatch', ['$timeout', function ($timeout) {
    return{
        replace: true,
        restrict: 'AC',
        templateUrl: 'views/layouts/directives/tournament/tournament-post-match.html',
        scope: {
            tournament: '='
        },
        link: {
            pre: pre_link,
            post: post_link
        }
    }
    function pre_link($scope, $element, $attrs) {

        $scope.single = false;
        $scope.$watch('tournament', function (t) {
//            console.log(t);
            if (!_.isNull(t)) {
                if (t.config.type.num_teams == 2) {
                    $scope.single = true;
                } else {
                    $scope.single = false;
                }
            }
        })

    }

    function post_link($scope, $element, $attrs) {

    }
}]);