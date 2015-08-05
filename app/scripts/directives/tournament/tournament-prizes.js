/**
 * Created by Miguel on 04/11/2014.
 */


estars.directive('tournamentPrizes', ['$timeout', function ($timeout) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-prizes.html',
        scope: {
            tournament: '='


        },
        link: function (scope, elem, attr) {
            console.log(scope.tournament);
            scope.champion = _.filter(scope.tournament.pool_prizes, {'position': 1})[0];
//            console.log(scope.champion );
            scope.prize_details = false;
            scope.show_prize_detail = function () {
                scope.prize_details = !scope.prize_details;
                console.log(scope.prize_details )
            }
        }
    }
}]);