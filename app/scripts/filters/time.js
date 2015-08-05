/**
 * Created by Miguel on 23/03/2015.
 */


estars.filter('timeAgo', function () {

    function getHumanizedTime(n) {
        n = moment.utc(n).toDate();
//        time = moment().from(n)
        return n;
    }

    return function (input) {
        return getHumanizedTime(input);
    };
})