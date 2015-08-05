estars.controller('landing.index', ['$scope', 'Restangular', '$sce', '$state', 'sharedEmail' , 'annoucements', function ($scope, Restangular, $sce, $state, sharedEmail, annoucements) {

    $scope.emailform = {};
    $scope.value = true;
    $scope.messages = [


    ];
    $scope.annoucements = annoucements;
    $scope.requestInvitation = function () {
        $scope.messages = [];
        var data = {
            email: $scope.email
        }
        Restangular.all("invitations/").post(angular.toJson(data)).then(function (data) {
            $scope.email = null;
            $scope.addMessage("Felicidades , tu invitacion ha sido registrado.", "success")
        }, function (data) {
            $scope.email = null;
            $scope.addMessage("Lo sentimos ese email ya esta registrado", "danger")
        })
    }
    $scope.closeMessage = function (index) {
        $scope.messages.splice(index, 1);
    };
    $scope.addMessage = function (message, type) {
        $scope.messages.push({msg: message, type: type});
    }


//no more than 8 slide to show it correctly
    $scope.tournamentSlides = [
        {src: 'images/landing/tournament-slider/counter_strike_crown_map_electronicstars.jpg', alt: 'mirage map counter strike electronic stars'},
        {src: 'images/landing/tournament-slider/counter_strike_dust2_map_electronic_stars.jpg', alt: 'overpass map counter strike electronic stars'}

    ];
    $scope.video = [
        {src: $sce.trustAsResourceUrl('images/test/video.mp4'), type: "video/mp4"}
    ];

    $scope.tournamentList = [
        { date: '01/02', name: 'Multi 1v1', playersNumber: '02/50', prize: 2000 },
        { date: '02/02', name: 'AIM Deathmatch', playersNumber: '02/32', prize: 2500 },
        { date: '03/02', name: 'APW Deathmatch', playersNumber: '03/32', prize: 1500 },
        { date: '04/02', name: 'Dust2 Deathmatch', playersNumber: '02/32', prize: 500 },
        { date: '05/02', name: 'Arms Race', playersNumber: '05/32', prize: 1000 },
        { date: '06/02', name: 'Gun Game', playersNumber: '09/32', prize: 200 },
        { date: '07/02', name: 'Elimination', playersNumber: '02/40', prize: 10000 }

    ]


    $scope.open_modal = function () {
        // check email
        if ($scope.emailform.registration_email == undefined) {
            //console.log('email required')
        } else {
            //console.log('email is correct')
            sharedEmail.set_email($scope.emailform.registration_email)
            $state.go('register')
        }
    }
}]);
