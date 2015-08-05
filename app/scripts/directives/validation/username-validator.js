/**
 * Created by Miguel on 04/12/2014.
 */


estars.directive('usernameValidator', ['userValidation', function (userValidation) {
    return {
        restrict: 'AE',
        require: 'ngModel',
        link: function ($scope, elem, attrs, ngModel) {
            ngModel.$validators.username_sintax = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                return  /^[A-Za-z0-9_]{4,24}$/i.test(value);

            }
            ngModel.$asyncValidators.usernameAvailability = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                var data = {
                    username: value
                }

                return userValidation.validate_user(data);
            }
        }
    }
}]);