/**
 * Created by davide on 15/10/2014.
 */
estars.directive('myGames', function() {
    return {
        require: '^gameCenterNavTabs', //looking for controller in directive
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
         //   console.log('adding pane my games');
        },
        templateUrl: 'views/layouts/directives/game-center-nav/myGames.html'
    };
});