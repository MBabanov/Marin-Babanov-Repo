/**
 * Created by Miguel on 09/10/2014.
 */


estars.filter('mem', function () {

    function getMemory(n) {
        n = parseFloat(n);
        return Math.ceil(n / 1024);
    }

    return function (input) {
        return getMemory(input);
    };
})