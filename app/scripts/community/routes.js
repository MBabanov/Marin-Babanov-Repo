estars.config([ '$stateProvider', function ($stateProvider) {
    $stateProvider.state.state('community', {
        abstract: true,
        templateUrl: "views/layouts/community/index.html"
    })
        .state('community.index', {
            url: "/community",
            controller: "community.index",
            templateUrl: "views/partials/community/index.html"
        })
    /**
     * Created by davide on 13/01/2015.
     */
}]);
