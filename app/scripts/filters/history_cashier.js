/**
 * Created by Miguel on 07/02/2015.
 */


estars.filter('history_action', function () {

    function getHtmlAction(action) {
        var result;
        if (_.isEqual(action.action, 'DAILY_RECHARGE')) {
            result = "<span class='dayly'>+500</span>";
        }
        return result;

    }

    return function (input) {
        return getHtmlAction(input);
    };
})