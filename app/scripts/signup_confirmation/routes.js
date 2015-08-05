estars.config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('signup_confirmation', {
        abstract: true,
        templateUrl: "views/layouts/signup_confirmation/index.html"
    });
    $stateProvider.state('signup_confirmation.index', {
        url: "/signup_confirmation",
        //controller: "signup_comnfirmation.index",
        templateUrl: "views/partials/signup_confirmation/signup_confirmation.html"
    })

}]);