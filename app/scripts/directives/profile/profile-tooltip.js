/**
 * Created by Miguel on 13/10/2014.
 */



estars.directive('profileTooltip', ['$compile', 'userService', '$http', '$templateCache', function ($compile, userService, $http, $templateCache) {
    var tpl = '/views/layouts/directives/profile-tooltip/index.html';
    var linkFn;
    return{
        restrict: 'A',
        scope: {
            user: '='

        },
        link: function (scope, element, attrs) {

            userService.$getProfile(scope.user.username).then(function (profile) {
                scope.profile = profile;
                $http.get(tpl, {cache: $templateCache}).success(function (content) {
                    var linkFn = $compile(content)(scope);
                    $(element).qtip({
                        content: linkFn,
                        position: {
                            my: 'bottom center',
                            at: 'top center',
                            target: $(element)
                        },
                        hide: {
                            fixed: true,
                            delay: 300
                        }
                    });

                });
            })

        }
    }
}]);