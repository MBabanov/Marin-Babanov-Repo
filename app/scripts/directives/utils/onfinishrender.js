estars.directive('onFinishRender', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                return scope.$evalAsync(attr.onFinishRender);
            }
        }
    };
});
/**
 * Created by davide on 05/11/2014.
 */
