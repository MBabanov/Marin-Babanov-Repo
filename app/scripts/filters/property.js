/**
 * Created by Miguel on 29/09/2014.
 */


estars.filter('property', function () {
    function parseString(input) {
        return input.split(".");
    }

    function getValue(element, propertyArray) {
        var value = element;

        _.forEach(propertyArray, function (property) {
            value = value[property];
        });

        return value;
    }

    return function (array, propertyString, target) {

        return function (array, propertyString, target) {
            var properties = parseString(propertyString);

            return _.filter(array, function (item) {
                return getValue(item, properties) == target;
            });
        }
    };
});