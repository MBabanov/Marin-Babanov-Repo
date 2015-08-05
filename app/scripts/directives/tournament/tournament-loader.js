/**
 * Created by Miguel on 18/09/2014.
 */




estars.directive('tournamentLoader', ['$timeout', '$interval', 'tournamentService', '$rootScope', function ($timeout, $interval, tournamentService, $rootScope) {
    var sound = new Howl({
        urls: ['/effects/count.mp3']
    })

    function calcPointsCirc(cx, cy, rad, dashLength) {
        var n = rad / dashLength, alpha = Math.PI * 2 / n, pointObj = {}, points = [], i = -1;

        while (i < n) {
            var theta = alpha * i, theta2 = alpha * (i + 1);

            points.push({x: (Math.cos(theta) * rad) + cx, y: (Math.sin(theta) * rad) + cy, ex: (Math.cos(theta2) * rad) + cx, ey: (Math.sin(theta2) * rad) + cy});
            i += 4;
        }
        return points;
    }

    function getEndPoint(c1, c2, radius, angle) {
        return [c1 + Math.cos(angle) * radius, c2 + Math.sin(angle) * radius];
    }

    return{
        replace: true,
        restrict: 'A',
        templateUrl: 'views/layouts/directives/tournament/tournament-loader.html',
        scope: {
            callback: '&callback',
            init: '=',
            match: '=',
            countdown: '=',
            seconds: '='

        },
        link: {post: function link(scope, element, attrs) {

            var node = element;
            var width = 500;
            var height = 292;

            var canvas = oCanvas.create({   canvas: "#game-loader-canvas",
                background: 'transparent',
                fps: 50
            });
            var red_circle_proto = canvas.display.ellipse({ fill: "#D53A44"});
            var center = canvas.display.ellipse({
                x: canvas.width / 2, y: canvas.height / 2,
                radius: canvas.width / 20,
                fill: "transparent"
            }).add();
            canvas.addChild(center);
            var background_arc = canvas.display.arc({
                radius: 120,
                start: 0,
                end: 360,
                stroke: "25px #222",
                opacity: 0.8


            })
            center.addChild(background_arc);
            var match_text = canvas.display.text({
                x: -80,
                y: -55,

                font: "bold 20px Roboto Black",
                text: "MATCH START IN",
                fill: "#FFF"
            });

            center.addChild(match_text);

            var min_number = canvas.display.text({
                x: -55,
                y: -15,

                font: "bold 35px Roboto Black",
                text: "00",
                fill: "#D53A44"
            });

            center.addChild(min_number);
            var min_text = canvas.display.text({
                x: -70,
                y: 25,

                font: "bold 25px Roboto Black",
                text: "MINS",
                fill: "#D53A44"
            });

            center.addChild(min_text);

            var secs_number = canvas.display.text({
                x: 20,
                y: -15,

                font: "bold 35px Roboto Black",
                text: "15",
                fill: "#D53A44"
            });

            center.addChild(secs_number);
            var sec_text = canvas.display.text({
                x: 10,
                y: 25,

                font: "bold 25px Roboto Black",
                text: "SECS",
                fill: "#D53A44"
            });

            center.addChild(sec_text);
            var loader_arc = canvas.display.arc({

                radius: 120,
                start: -90,
                end: -90,
                stroke: "10px #D53A44"



            })
            center.addChild(loader_arc);

            var start_loader_arc = canvas.display.arc({

                y: -120,
                radius: 4,
                start: 0,
                end: 360,
                fill: "#D53A44"
            });

            center.addChild(start_loader_arc);
            var end_loader_arc = canvas.display.arc({
                x: 10,
                y: -120,
                radius: 4,
                start: 0,
                end: 360,
                fill: "#D53A44"

            })
            canvas.addChild(end_loader_arc);
            var end_loader_ball = canvas.display.arc({
                x: -10,
                y: -120,
                radius: 3,
                start: 0,
                end: 360,
                fill: "#FFF"

            })
            canvas.addChild(end_loader_ball);

            var pointArray = calcPointsCirc(background_arc.x, background_arc.y, 140, 1);

            var red_circles = [];
            for (p = 0; p < pointArray.length; p++) {
                var circle = canvas.display.arc({
                    origin: {
                        x: pointArray[p].x,
                        y: pointArray[p].y
                    },
                    speed: 1,
                    radius: 2,
                    start: 0,
                    end: 360,
                    fill: '#D53A44'
                })
                center.addChild(circle);
                red_circles.push(circle);

            }
            var reloz = 0;

            scope.clock = 15;
            var loop = canvas.setLoop(function () {
                if (scope.countdown) {
                    var radius = (loader_arc.end + 90 ) / 360
                    var endAngle = ((Math.PI * 2 ) * radius) - (Math.PI / 2);
                    var end_point_white = getEndPoint(center.x, center.y, 120, endAngle);
                    if (loader_arc.end < 270) {
                        loader_arc.end += 0.78;
                    }

                    var radius = (loader_arc.end + 90 ) / 360

                    var endAngle = ((Math.PI * 2 ) * radius) - (Math.PI / 2);
                    var end_point = getEndPoint(center.x, center.y, 120, endAngle);

                    end_loader_arc.moveTo(end_point[0], end_point[1]);
                    end_loader_ball.moveTo(end_point_white[0], end_point_white[1]);
                }
                for (var i = 0, l = red_circles.length; i < l; i++) {
                    red_circles[i].rotation++;

                }

            });

            function start_waiting_time() {
                min_number.text = '';
                min_text.text = '';
                secs_number.text = '';
                sec_text.text = '';
                match_text.x = -83;
                match_text.y = -8;
                match_text.text = 'CREATING MATCH';
                loop.start()
            }

            function playing_mode() {
                min_number.text = '';
                min_text.text = '';
                secs_number.text = '';
                sec_text.text = '';
                match_text.x = -70;
                match_text.y = -5;
                match_text.text = 'IN PROGRESS...';
            }

            function start() {
                min_number.text = '00';
                min_text.text = 'MINS';
                secs_number.text = '15';
                sec_text.text = 'SECS';
                match_text.x = -84;
                match_text.y = -55;
                match_text.text = 'MATCH STARTS IN';
                scope.clock = 15;
                scope.intervalId = $interval(function () {
                    if (scope.clock == 10) {
                        sound.play();
                    }
                    if (scope.clock < 10) {
                        var number = '0' + scope.clock;
                        secs_number.text = number;
                    } else {
                        secs_number.text = scope.clock;
                    }
                    if (scope.clock > 0) {
                        scope.clock = scope.clock - 1;
                    } else {
                        playing_mode();
                        scope.callback();
                        $interval.cancel(scope.intervalId);

                    }

                }, 1000);

            }

            $rootScope.$on('tournament:match:update', function (event, data) {
                var tournament = data.tournament;
                var match = data.match;
                if (!_.isNull(scope.match_detail)) {
                    if (_.isEqual(scope.match_detail.id, match.id)) {
                        scope.match_detail = match;
                    }
                }

            });
            function match_detail() {
                if (!_.isNull(scope.match)) {
                    console.log(scope.match);
                    if (_.size(scope.match.matches) > 0) {
                        tournamentService.get_tournament_match_info(scope.match.matches[0]).then(function (data) {
                            scope.match_detail = data;
                            console.log(scope.match_detail);
                        });
                    }
                }

            }

            match_detail();
            scope.$watch('init', function (val) {
                if (val) {
                    start_waiting_time();
                }
            });
            scope.$watch('countdown', function (val) {
                if (val) {
                    start();
                } else {
                    playing_mode();
                }
            })

        }} }

}]);