/**
 * Created by Miguel on 21/10/2014.
 */

estars.config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('invitation_request', {
        url: "/invitation",
        controller: "invitation.home",
        templateUrl: "views/partials/invitation/home.html"
    }).state('invitation_register', {
        url: "/register/:key",
        controller: "registration.home",
        templateUrl: "views/partials/registration/home.html",
        resolve: {
            invite: ['Restangular', '$stateParams', function (Restangular, $stateParams) {
                return Restangular.one("invitations", $stateParams.key).get();
            }]
        }
    })
        .state('cashier', {
            templateUrl: "views/layouts/cashier/index.html",
            abstract: true,
            resolve: {
                user: [function () {
                    return '';
                }]
            }
        }).state('cashier.user', {
            url: "/cashier",
            controller: "cashier.user",
            templateUrl: "views/partials/cashier/index.html"
        }).state('comunity', {
            templateUrl: "views/layouts/cashier/index.html",
            abstract: true,
            resolve: {
                user: [function () {

                    return '';
                }]
            }
        }).state('comunity.index', {
            url: "/community",
            controller: "cashier.user",
            templateUrl: "views/partials/cashier/index.html"
        }).state('cashform', {
            templateUrl: "views/layouts/cashform/index.html",
            abstract: true,
            resolve: {
                user: [function () {
                    return '';
                }]
            }
		})

    $urlRouterProvider.when('', '/');
//HANDLE ERROR WRONG ADDRESS, later active redirect to home
    // $urlRouterProvider.otherwise('/');

}]);