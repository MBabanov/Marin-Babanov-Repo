/**
 * Created by Miguel on 25/09/2014.
 */
estars.controller('cashier.user.index', ['$scope', 'SessionService', 'CashierService', function ($scope, SessionService, CashierService) {
    var vm = this;
    vm.cashier = SessionService.currentUser.cashier;
    vm.code = null;
    vm.reedem = reedeem_code;
    function reedeem_code() {
        var data = {
            code: vm.code
        }
        CashierService.redeem_vouncher(data).then(function (data) {
            vm.code = null;
        }, function (error) {

        });
    }
}]);

estars.controller('cashier.user.credits', ['$scope', 'SessionService', 'CashierService', '$timeout', function ($scope, SessionService, CashierService, $timeout) {
    var vm = this;
    vm.cashier = SessionService.currentUser.cashier;
    vm.charge = do_recharge;
    vm.can_recharge = false;

    function get_today_recharges() {
        CashierService.dayly_recharge_today().then(function (data) {
            vm.total_recharges = data.total;
            recharges_left()
        })
    }

    function recharges_left() {
        vm.recharges_left = 2 - vm.total_recharges;
        if (vm.cashier.points <= 100) {
            vm.can_recharge = true;
        }
        if (vm.recharges_left == 0) {
            vm.can_recharge = false;
        }

    }

    function do_recharge() {
        CashierService.dayly_recharge().then(function (data) {
            vm.total_recharges = data.total;

            $timeout(function () {
                recharges_left()
            }, 500);
        }, function (data) {

        });
    }

    get_today_recharges();

}]);
estars.controller('cashier.user.history', ['$scope', 'SessionService', 'CashierService', function ($scope, SessionService, CashierService) {
    var vm = this;
    vm.actions = [];

    function get_actions() {
        CashierService.cashier_actions().then(function (data) {
            vm.actions = data;
        });
    }

    get_actions();
}]);