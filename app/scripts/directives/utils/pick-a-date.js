/**
 * Created by Miguel on 05/12/2014.
 */


estars.directive('pickADate', ['$timeout', function ($timeout) {
    return {
        restriction: 'A',
        link: function (scope, element, attributes) {
            $timeout(function () {
                $(element).pickadate({
                    selectYears: true,
                    selectMonths: true,
                    selectYears: 90,
                    firstDay: 1,
                    min: [1930, 1, 01],
                    max: [2009, 12, 31]
                })
            }, 0);
        }
    }
}]);