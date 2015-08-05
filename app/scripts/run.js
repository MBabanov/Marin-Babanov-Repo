/**
 * Created by Miguel on 21/10/2014.
 */



estars.run(['$cookieStore', '$state', 'authService', 'SessionService', '$rootScope', 'editableOptions', '$window', 'ElectronicProgress', '$cookies', '$analytics', '$templateCache', function ($cookieStore, $state, authService, SessionService, $rootScope, editableOptions, $window, ElectronicProgress, $cookies, $analytics, $templateCache) {
    editableOptions.theme = 'bs3';
    var routesAuth = ['/game-center'];
    var routesNonAuth = ['^/register', '/', '^/login', '^/signup_confirmation'];
//    $templateCache.removeAll();
    routeCheck = function (route) {
        return _.contains(routesNonAuth, route);
    };

    // check if current location matches route
    var routeAuth = function (route) {
        return _.find(routesAuth, function (noAuthRoute) {
            return _.str.startsWith(route, noAuthRoute);
        });
    };
    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
        //console.log('state is changing'); //DEBUG
        // if route requires auth and user is not logged in
        ElectronicProgress.start();
        var url = to.url;
        $analytics.pageTrack(url);
        //console.log('url requested is: ' + url); //DEBUG
        /* site open */
        /*if (!routeCheck(url)) {
         console.log(SessionService.is_logged)
         if (!SessionService.is_logged) {
         ev.preventDefault();
         console.log("cambiamos de estado");
         $state.go('landing.index');
         }
         }*/

    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        ElectronicProgress.stop();
    })

    $rootScope.$on('$viewContentLoaded', function () {
        ElectronicProgress.stop();
        var state = $state.$current;
        if (state.scrollTo == undefined) $window.scrollTo(0, 0); else {
            var to = 0;
            if (state.scrollTo.id != undefined)
                to = $(state.scrollTo.id).offset().top;
            if ($($window).scrollTop() == to)
                return;
            if (state.scrollTo.animated)
                $(document.body).animate({scrollTop: to}); else
                $window.scrollTo(0, to);
        }
    });
}
])