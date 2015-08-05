/**
 * Created by Miguel on 09/12/2014.
 */
estars.config([ '$stateProvider', function ($stateProvider) {

    $stateProvider.state('home', {
        abstract: true,
        templateUrl: "views/layouts/home/index.html"
    });
    $stateProvider.state('home.index', {
        url: "/home",
        controller: "home.index",
        controllerAs: '_home',
        templateUrl: "views/partials/home/home.html",
        resolve: {
            annoucements: ['AnnonService', function (AnnonService) {
                return AnnonService.get_announcements('home');

            }],
            news: ['newsService', function (newsService) {
                return newsService.news();
                return [];
            }],
            winners: ['tournamentService', function (tournamentService) {
                return tournamentService.get_last_winners();
            }],
            featured: ['tournamentService', function (tournamentService) {
                return tournamentService.get_featured_tournaments();
            }]

        }
    });
}]);