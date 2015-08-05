/**
 * Created by Miguel on 09/12/2014.
 */
estars.config([ '$stateProvider', function ($stateProvider) {
    $stateProvider.state('tournaments', {
        url: "/game-center/:game_slug",
        templateUrl: "views/layouts/play/index.html",
        resolve: {
            game: ['gameService', '$stateParams', function (gameService, $stateParams) {
                return gameService.$findBySlug($stateParams.game_slug);
            }]
        }
    });
    $stateProvider.state('tournaments.list', {
        controller: "tournaments",
        controllerAs: '_tour',
        templateUrl: "views/partials/play/tournamentList.html",
        url: '/lobby',
        resolve: {
            tournaments: ['tournamentService', 'game', function (tournamentService, game) {
                return tournamentService.get_tournaments(game.id, 'FAKE_CASH');
            }],
            tickets: ['tournamentService', 'game', function (tournamentService, game) {
                return tournamentService.get_last_winners(game.id);
            }],
            users: ['userService', 'game', function (userService, game) {
                return [];
                return userService.$findAllbyGamelvl(game.id);
            }],
            top_users: ['userService', 'game', function (userService, game) {
                return userService.$findTopByGame(game.id);
            }],
            last_played_tournaments: ['tournamentService', 'game' , function (tournamentService, game) {
                return tournamentService.$findLastTournamentsByGame(game.id);
            }],
            featured: ['tournamentService', 'game', function (tournamentService, game) {
                return tournamentService.get_featured_tournaments(game.id);
            }]

        }

    })
}]);