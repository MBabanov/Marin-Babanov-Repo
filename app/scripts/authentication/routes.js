/**
 * Created by Miguel on 28/11/2014.
 */


estars.config([ '$stateProvider', function ($stateProvider) {

    $stateProvider.state('login', {
        url: "^/login",
        parent: 'landing.index',
        data: {
            secured: false
        },
        onEnter: ['$modal', function ($modal) {
            var modalInstance = $modal.open({
                templateUrl: "views/partials/authentication/login.html",
                controller: "login.index",
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: false,
                resolve: {

                }
            });
        }]
    });
    $stateProvider.state('register', {
        url: "^/register",
        parent: 'landing.index',
        onEnter: ['$modal', function ($modal) {
            var modalInstance = $modal.open({
                templateUrl: "views/partials/authentication/register.html",
                controller: "registration.index",
                controllerAs: 'vm',
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: false,
                resolve: {
                    countries: ['locationService', function (locationService) {
                        return locationService.$get_countries();
                    }]

                }
            });
        }]

    })
    $stateProvider.state('password_reset', {
        url: "^/password/reset",
        parent: 'landing.index',
        onEnter: ['$modal', function ($modal) {
            var modalInstance = $modal.open({
                templateUrl: "views/partials/authentication/password_reset.html",
                controller: "password.reset",
                controllerAs: 'vm',
                windowTemplateUrl: '/views/layouts/play/modal.html',
                backdrop: 'false',
                keyboard: false
            });
        }]

    })
    $stateProvider.state('password_update', {
        abstract: true,
        templateUrl: "views/layouts/password/index.html"
    });
    $stateProvider.state('password_update.index', {
        url: "/pw/:username/?e",
        controller: "password.updated",
        controllerAs: 'vm',
        templateUrl: "views/partials/authentication/password_update.html"

    });
}]);