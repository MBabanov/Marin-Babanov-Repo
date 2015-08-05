/**
 * Created by Miguel on 28/11/2014.
 */


estars.config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('landing', {
        abstract: true,
        templateUrl: "views/layouts/landing/index.html"
    });
    $stateProvider.state('landing.index', {
        url: "/",
        controller: "landing.index",
        templateUrl: "views/partials/landing/landing.html",
        resolve: {
            annoucements: ['AnnonService', function (AnnonService) {
                return AnnonService.get_announcements('landing');
//                return "";
            }]

        }
    })

}]);