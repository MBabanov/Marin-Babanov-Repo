estars.directive('mostPlayed', function() {
    return {
        require: '^gameCenterNavTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
          //  console.log('adding pane most playes');
        },
        templateUrl: 'views/layouts/directives/game-center-nav/mostPlayed.html'
    };
});/**
 * Created by davide on 15/10/2014.
 */
