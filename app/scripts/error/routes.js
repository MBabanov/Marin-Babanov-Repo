estars.config([ '$stateProvider', function ($stateProvider) {

    $stateProvider.state('error', {
        abstract: true,
        templateUrl: "views/layouts/error/index.html"
    });
    $stateProvider.state('error.index', {
        url: "/error",
        //controller: "error.index",
        templateUrl: "views/partials/error/error.html"
    })
}]);
/**
 * Created by davide on 13/01/2015.
 */
