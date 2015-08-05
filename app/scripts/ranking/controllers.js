/**
 * Created by Miguel on 05/01/2015.
 */


estars.controller('ranking', ['$scope', 'SessionService', 'players', 'game', '$modalInstance', function ($scope, SessionService, players, game, $modalInstance) {
    var vm = this;
    vm.players = players;
    vm.game = game;
    vm.close = close;

    function close() {
        $modalInstance.close();
    }

}]);