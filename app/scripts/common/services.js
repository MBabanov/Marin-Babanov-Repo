/**
 * Created by Miguel on 21/10/2014.
 */
estars.service('SplitArrayService', function () {
    return {
        SplitArray: function (array, columns) {
            if (array.length <= columns) {
                return [array];
            }
            ;

            var rowsNum = Math.ceil(array.length / columns);

            var rowsArray = new Array(rowsNum);

            for (var i = 0; i < rowsNum; i++) {
                var columnsArray = new Array(columns);
                for (j = 0; j < columns; j++) {
                    var index = i * columns + j;

                    if (index < array.length) {
                        columnsArray[j] = array[index];
                    } else {
                        break;
                    }
                }
                rowsArray[i] = columnsArray;
            }
            return rowsArray;
        }
    }
});

estars.service('messageService', ['$translate', function ($translate) {
    var services = {
        win_tournament_dialog: win_tournament_dialog,
        dayly_recharge_dialog: daily_recharge_dialog,
        error_message: error_message,
        bonus_success: bonus_recharge,
        recovery_success_password: recovery_password_successfull,
        recovery_fail_password: recovery_password_failure,
        updated_success_password: update_password_successfull
    }
    return services;

    function win_tournament_dialog(action) {
        var title = ""
        var text = ""
        if (_.isEqual(action.type, 'REAL_CASH')) {
            swal("Good job!", "You win! You've earned " + action.amount + " euros.","success")
        } else {
            swal("Good job!", "You win! You've earned " + action.amount + " points", "success")
        }

    }

    function daily_recharge_dialog(action) {
        swal("CREDIT RECHARGED SUCCESSFUL!", "You have successfuly recharged your PLAY CREDIT account with +500. Game on", "success");
    }

    function error_message(title, message) {
        swal(title, message, "error");
    }

    function bonus_recharge(action) {
        swal("BONUS RECHARGED SUCCESSFUL!", "You have successfuly recharged your MONEY CREDIT account" + action.amount + " € .", "success")
    }

    function no_cash() {
        swal({
            title: "UN",
            text: "To play this game you need to sincronizes your steam account , you want to do it now ?",
            type: "warning",
            showCancelButton: true,

            confirmButtonText: "Sync steam account" }, function () {
            $auth.link('steam');
        });
    }

    function update_password_successfull() {
        $translate(['PASSWORD_UPDATE.MESSAGE_TITLE_SUCCESS_UPDATE', 'PASSWORD_UPDATE.MESSAGE_SUCCESS_UPDATE']).then(function (translations) {
            swal(translations['PASSWORD_UPDATE.MESSAGE_TITLE_SUCCESS_UPDATE'], translations['PASSWORD_UPDATE.MESSAGE_SUCCESS_UPDATE'], "success")
        });

    }

    function recovery_password_successfull() {
        $translate(['PASSWORD_RESET.MESSAGE_TITLE_SUCCESS_UPDATE', 'PASSWORD_RESET.MESSAGE_SUCCESS_UPDATE']).then(function (translations) {

            swal(translations['PASSWORD_RESET.MESSAGE_TITLE_SUCCESS_UPDATE'], translations['PASSWORD_RESET.MESSAGE_SUCCESS_UPDATE'], "success")
        });

    }

    function recovery_password_failure() {
        $translate(['PASSWORD_RESET.MESSAGE_TITLE_ERROR_UPDATE', 'PASSWORD_RESET.MESSAGE_ERROR_UPDATE']).then(function (translations) {
            swal(translations['PASSWORD_RESET.MESSAGE_TITLE_ERROR_UPDATE'], translations['PASSWORD_RESET.MESSAGE_ERROR_UPDATE'], "error")
        });
    }
}]);