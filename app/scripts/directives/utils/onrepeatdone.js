// utils directive used by facebook and twitter. emit when ng-repeater finish to render data
estars.directive('onRepeatDone',['$timeout',function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    //console.log("on repeat done sendind emit")
                   scope.$emit(attr.data); //attr.data is twitter_done or facebook_done
                });
            }
        }
    }
}]);

