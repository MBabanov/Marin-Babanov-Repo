/**
 * Created by Miguel on 29/10/2014.
 */


estars.factory('CashierService', ['Restangular', 'SessionService', 'userService', '$rootScope', function (Restangular, SessionService, userService, $rootScope) {
    var services = {
        cashier_actions: get_cashier_actions,
        dayly_recharge_today: get_daily_recharge,
        dayly_recharge: do_daily_recharge,
        redeem_vouncher: redeem_vouncher
    }
    return services;
    function redeem_vouncher(code) {
        return Restangular.all('vouncher').post(code);

    }

    function get_cashier_actions() {
        return Restangular.all('cashier_actions').getList().then(function (data) {
            return data;
        })

    }

    function get_daily_recharge() {
        return Restangular.one('dayly_recharge').get();
    }

    function do_daily_recharge() {
        return Restangular.one('dayly_recharge').post();
    }

}])