/**
 * Created by Miguel on 28/11/2014.
 */


estars.config([ '$stateProvider', function ($stateProvider) {

    $stateProvider.state('game', {
        abstract: true,
        templateUrl: "views/layouts/play/index.html",
        resolve: {
            games: ['gameService', function (gameService) {
                return gameService.$getAll();
            }]
        }
    });
    $stateProvider.state('game.index', {
        controller: "games.index",
        url: "/game-center",
        templateUrl: "views/partials/game-center/index.html",
        resolve: {

        }

    });

}]);