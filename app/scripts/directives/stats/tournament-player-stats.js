/**
 * Created by Miguel on 22/01/2015.
 */


estars.directive('tournamentPlayerStats', ['matchService', function (matchService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/stats/tournament-player-stats.html',
        scope: {
            user: '=',
            match: '@'

        },
        link: link

    }
    function link($scope, elem, attr) {
//        console.log($scope.user);
//        console.log($scope.match);
    }
}]);