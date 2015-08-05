/**
 * Created by davide on 15/10/2014.
 */
estars.directive('results', function () {
    return {
        require: '^gameCenterNavTabs', //looking for controller in directive
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        controller: function ($scope) {
            $scope.gamesVote = [
                {name: 'counter strike', countVote: 80},
                {name: 'super mario bros', countVote: 120},
                {name: 'star wars', countVote: 240},
                {name: 'fifa 2015', countVote: 199}
            ];
            $scope.val = 90;
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
            //   console.log('adding pane my games');
        },
        templateUrl: 'views/layouts/directives/game-vote-nav/results.html'
    };
});