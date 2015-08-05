/**
 * Created by davide on 23/10/2014.
 */
estars.directive('gaugejs', function () {
    return {
        restrict: 'AC',
        scope: {
            'animationTime': '=',
            'value': '=',
            'options': '=',
            'maxValue': '='
        },
        controller: function ($scope, $element) {

        },
        link: function ($scope, $element) {
            var opts = {
                lines: 8, // The number of lines to draw
                angle: 0.5, // The length of each line
                lineWidth: 0.08, // The line thickness
                fontSize: 8,
                pointer: {
                    length: 0.9, // The radius of the inner circle
                    strokeWidth: 0.035, // The rotation offset
                    color: '#000000' // Fill color
                },
                limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
                percentColors: [
                    [0.0, "#A00616" ],
                    [0.50, "#f9c802"],
                    [1.0, "#ff0000"]
                ],
                colorStart: '#FF0000',   // Colors
                colorStop: '#FF0000',    // just experiment with them
                strokeColor: '#191919',   // to see which ones work best for you
                background: '#000000',
                generateGradient: true
            };
            var target = ($element[0]);
            // console.log('my target is: ');
            // console.log(target);
            $scope.donut = new Donut(target).setOptions(opts);
            $scope.donut.maxValue = $scope.maxValue;
            $scope.donut.set($scope.value);

            /* $scope.$watchCollection('[options, value]', function (newValues) {
             console.log(' value array is: '+ newValues);
             $scope.donut.setOptions(newValues[0]);
             if (!isNaN(newValues[1])) {
             $scope.donut.set(newValues[1]);
             }
             });*/
        }
    };
});