/**/
/**
 *this directive create a slide list taking a string with the structure Created by davide on 19/12/2014.
 *//*

estars.directive('esslides', ['$compile', 'landingData', function ($compile, landingData) {
    return {
        restrict: 'A',

        link: function (scope, element, attr) {
            scope.topSlider = landingData.$getTopSlider()
            // console.log(' directive esSlides takes data');
            // console.log(scope.topSlider);
            angular.forEach(scope.topSlider, function (val, key) {
                // console.log('my object in slider: ');
                // console.log(val)
                var slide = $compile(val.htmlString)(scope)
                element.append(slide)
            })

        }
    }
}])*/
