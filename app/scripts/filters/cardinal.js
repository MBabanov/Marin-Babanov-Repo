/**
 * Created by Miguel on 09/10/2014.
 */


estars.filter('cardinal', function () {

    function getGetOrdinal(n) {
        var s = ["th", "st", "nd", "rd"], v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    return function (input) {
        return getGetOrdinal(input);
    };
})
estars.filter('hours', function () {
    function get_hours_played(n) {
        
        var mins = parseFloat(n);

        return Math.floor(mins / 3600);
    }

    return function (input) {
        return get_hours_played(input);
    };
})