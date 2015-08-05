/**
 * Created by Miguel on 19/10/2014.
 */


estars.directive('tournamentHeader', ['SessionService', function (SessionService) {
    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-header.html',
        scope: {
            current: '=',
            registered: '=',
            register: '&register',
            unregister: '&unregister',
            launch: '&launch',
            launched: '=',
            match: '='
        },
        link: function (scope, elem, attr) {
            scope.registered_tournament = SessionService.registered_tournament;
            scope.is_tournament = false;
            scope.start_at = null;
            scope.show_time = false;
            scope.$watch('match', function (val) {

                if (!_.isNull(val) && !_.isUndefined(val)) {
                    if (_.isNull(val.start_at)) {
                        scope.start_at = null;
                    } else {
                        var n = moment.utc(val.start_at).toDate();
                        scope.show_time = true;
                        scope.start_at = moment(n).valueOf();
                    }

                }
            })
            scope.$watch('launched', function (val) {
                if (val) {
                    scope.show_time = false;
                }
            })
            scope.$watch('current', function (val) {
                update_time(val);
            })
            function update_time(tournament) {
                if (!_.isUndefined(tournament)) {
                    if (_.isEqual(tournament.status, 'IN_PROGRESS')) {
                        var n = moment.utc(tournament.started).toDate();
                        scope.started = moment(n).valueOf();
                    } else if (_.isEqual(tournament.status, 'FINISHED')) {
                        var n = moment.utc(tournament.finished).toDate()
                        scope.finished = moment(n).valueOf();
                    }

                }

            }
        }
    }
}]);