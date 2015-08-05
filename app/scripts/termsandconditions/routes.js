estars.config([ '$stateProvider', function ($stateProvider) {
    $stateProvider.state('termsandconditions', {
        abstract: true,
        templateUrl: "views/layouts/termsandconditions/index.html"
    });
    $stateProvider.state('termsandconditions.index', {
        url: "/terms_and_conditions",
        controller: "termsandconditions.index",
        templateUrl: "views/partials/termsandconditions/termsandconditions.html"
    })
}]);
