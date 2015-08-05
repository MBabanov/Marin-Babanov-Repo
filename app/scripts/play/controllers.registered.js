/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 09/06/14
 * Time: 12:23
 * To change this template use File | Settings | File Templates.
 */

estars.controller('tournaments.registereds', ['$scope', 'tournamentService', 'tournaments' , '$modalInstance', '$rootScope', 'tournamentDetailService', function ($scope, tournamentService, tournaments, $modalInstance, $rootScope, tournamentDetailService) {
    var vm = this;

    vm.tournaments = tournaments;

    vm.tournament_detail = tournament_detail;
    vm.close = close;
    function tournament_detail(tournament, fast) {
        close();
        tournamentDetailService.tournament_detail(tournament, fast);
    }

    function close() {
        $modalInstance.dismiss('cancel');
    }

    $rootScope.$on('me:tournament:unregister', function (event, msg) {
        var tmp = [];
        angular.forEach(vm.tournaments, function (t, v) {
            if (t.id == msg.tournament.id) {
                tmp.push(v);
            }
        })
        angular.forEach(tmp, function (v) {
            vm.tournaments.splice(v, 1);
        })
    });
    $rootScope.$on('game:tournament:update', function (event, data) {
        var updated_tournament = data.tournament;
        var remove_key = null;
        angular.forEach(vm.tournaments, function (tournament, key) {
            if (tournament.id == updated_tournament.id) {
                if (updated_tournament.status == "FINISHED") {
                    remove_key = key;
                }
                $scope.$apply(function () {
                    var registered = vm.tournaments[key].registered_players;
                    vm.tournaments[key] = vm.tournaments[key].copyFromWsObject(updated_tournament);
                    if (registered > vm.tournaments[key].registered_players) {
                        vm.tournaments[key].modified = 'less';
                    } else if (registered < vm.tournaments[key].registered_players) {
                        vm.tournaments[key].modified = 'more';
                    } else {
                        vm.tournaments[key].modified = '';
                    }
                });
                return false
            }
        });
        if (!_.isNull(remove_key)) {
            vm.tournaments.splice(remove_key, 1);
        }

    });
    function remove_finished_tournaments() {
        var tmp = [];
        angular.forEach(vm.tournaments, function (t, v) {
            if (_.isEqual(t.status, 'FINISHED')) {
                tmp.push(v);
            }
        })
        angular.forEach(tmp, function (v) {
            vm.tournaments.splice(v, 1);
        })

    }

    remove_finished_tournaments();
}]);
