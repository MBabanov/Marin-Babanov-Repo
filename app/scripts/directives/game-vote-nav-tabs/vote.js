estars.directive('vote', function () {
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
        templateUrl: 'views/layouts/directives/game-vote-nav/vote.html'
    };
});