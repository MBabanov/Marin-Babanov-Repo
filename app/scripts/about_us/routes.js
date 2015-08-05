estars.config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('about_us', {
        abstract: true,
        templateUrl: "views/layouts/about_us/index.html"
    });
    $stateProvider.state('about_us.index', {
        url: "/about_us",
        //controller: "signup_comnfirmation.index",
        templateUrl: "views/partials/about_us/about_us.html"
    })

}]);
/**
 * Created by davide on 15/01/2015.
 */
