/**
 * Created by Miguel on 11/12/2014.
 */



estars.directive('tournamentFeatured', tournament_featured);

function tournament_featured() {
    var directive = {
        link: link,
        replace: true,
        templateUrl: 'views/layouts/directives/tournament/tournament-featured.html',
        restrict: 'EA',
        scope: {
            tournaments: '='
        }
    };
    return directive;

    function link(scope, element, attrs) {

    }
}