/**
 * Created by Miguel on 07/02/2015.
 */
estars.directive('lobbyNav', ['SessionService', 'userModalService', 'tournamentDetailService', function (SessionService, userModalService, tournamentDetailService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/lobby_nav.html',
        scope: {
            games: '='

        },
        link: function (scope, elem, attr) {

            scope.menuItem = '2';
            scope.toggleMenu = toggle;
            scope.is_logged = is_logged;
            scope.wallet = open_wallet;
            scope.registered_tournaments = open_registered_tournaments;
            function is_logged() {
                return SessionService.is_logged;
            }

            function open_wallet() {
                userModalService.open_modal('profile.cashier');
            }

            function open_registered_tournaments() {
                tournamentDetailService.tournaments_registered(SessionService.registered_tournaments);
            }

            function toggle(item) {
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
        }
    }
}]);