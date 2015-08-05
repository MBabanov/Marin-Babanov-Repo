/**
 * Created by Miguel on 04/12/2014.
 */


estars.directive('emailValidator', ['userValidation', function (userValidation) {
    return {
        restrict: 'AE',
        require: 'ngModel',
        link: function ($scope, elem, attrs, ngModel) {

            ngModel.$asyncValidators.emailAvailability = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                var data = {
                    email: value
                }
                return userValidation.validate_email(data);
            }
        }
    }
}]);