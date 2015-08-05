estars.directive('recentlyPlayed', function () {
    return {
        require: '^gameCenterNavTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
            //   console.log('adding pane reclayedentlyp');
        },
        templateUrl: 'views/layouts/directives/game-center-nav/recentlyPlayed.html'
    };
});

estars.directive('electronicGames', function () {
    return {
        require: '^gameCenterNavTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            games: '='
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
            //   console.log('adding pane reclayedentlyp');
        },
        templateUrl: 'views/layouts/directives/game-center-nav/games.html'
    };
});