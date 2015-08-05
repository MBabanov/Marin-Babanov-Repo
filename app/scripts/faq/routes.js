estars.config([ '$stateProvider', function ($stateProvider) {

    $stateProvider.state('faq', {
        abstract: true,
        templateUrl: "views/layouts/faq/index.html",
        resolve: {
            categories: ['cmsCategoryService', function (cmsCategoryService) {
                return cmsCategoryService.find_category_by_section('faq');
            }]

        }
    });
    $stateProvider.state('faq.index', {
        url: "/faq",
        controller: "faq.index",
        controllerAs: '_faq',
        templateUrl: "views/partials/faq/faq.html"
    })
}]);
