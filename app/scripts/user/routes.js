/**
 * Created by Miguel on 28/11/2014.
 */



estars.config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('user', {
        abstract: true,
        templateUrl: "views/layouts/user/index.html"


    });
    $stateProvider.state('user.profile', {
        controller: "user.profile",
        url: "/user/:id",
        templateUrl: "views/partials/user/profile.html",
        resolve: {
            user: ['userService', '$stateParams', function (userService, $stateParams) {
                return userService.$findById($stateParams.id);
            }], itsme: ['SessionService', '$stateParams', function (SessionService, $stateParams) {
                if (SessionService.is_logged) {
                    if (SessionService.currentUser.username == $stateParams.id) {
                        return true;
                    }
                }
                return false;
            }]
        }
    })
//    $stateProvider.state('profile', {
//        abstract: true,
//        url: "/profile",
//        templateUrl: "views/layouts/user/index.html",
//        resolve: {
//            user: ['SessionService', function (SessionService) {
//                return SessionService.currentUser;
//            }]
//        }
//    })

//    $stateProvider.state('profile.show', {
//        controller: "user.profile",
//        templateUrl: "views/partials/user/profile.html",
//        resolve: {
//            itsme: [ function () {
//                return true;
//            }]
//        }
//    })
}])