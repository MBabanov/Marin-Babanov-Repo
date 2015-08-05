estars.controller('games.index', ['$scope', 'Restangular', 'games', '$timeout', function ($scope, Restangular, games, $timeout) {
    $scope.games = games;
// dropdown menu genere
    $scope.genereDropdown = [
        {id: 'FPS', label: "FPS"},
        {id: 'RACING', label: "RACING"},
        {id: 'MOBA', label: "MOBA"},
        {id: 'PUZZLE', label: "PUZZLE"}
    ]
    $scope.filter_settings = {showCheckAll: false, showUncheckAll: false, buttonClasses: 'btn btn-sm btn-filter', scrollable: true, externalIdProp: 'id'};
    $scope._genere_filter = [];
    $scope._freeplay_filter = [];
    $scope._ratings_filter = [];
    $scope._language_filter = [];

    /* slider stuff */
    /* my stuff */
    $scope.slidesData = [
        {
            src: 'images/test/test1.png',
            mimeType: "image/png"
        },
        {
            src: 'multimedia/promo.mp4',
            mimeType: "video/mp4",
            duration: 164
        },
        {
            src: 'images/test/test2.png',
            mimeType: "image/png"
        },
        {
            src: 'images/test/test3.png',
            mimeType: "image/png"
        },
//        {
//            src: 'images/test/COvideo.mp4',
//            mimeType: "video/mp4",
//            duration: 134
//        },
        {
            src: 'images/test/test2.png',
            mimeType: "image/png"
        },
        {
            src: 'images/test/test1.png',
            mimeType: "image/png"
        },
//        {
//            src: 'images/test/FIFAvideo.mp4',
//            mimeType: "video/mp4",
//            duration: 164
//        },
        {
            src: 'images/test/test3.png',
            mimeType: "image/png"
        }
    ]
    $scope.unit = 10;
    $scope.onDirectiveInit = function () {
        $('.slick-slide.slick-active').find('video').each(playVideo);
    };
    // TRY uncommenting these out to support more video types

    /*$scope.isImage = function(media) {
     return media.mimeType === 'image/png' || media.mimeType === 'image/jpeg';
     }

     $scope.isVideo = function(media) {
     return media.mimeType === 'video/mp4';
     }*/

    //* angular timer *//*
    $scope.timerRunning = true;
    $scope.startTimer = function () {
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };
    $scope.stopTimer = function () {
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };
    // receive event from timer
    $scope.$on('timer-stopped', function (event, data) {
//        console.log('Timer Stopped - data = ', data);
    });

    $scope.counter = 0;
    $scope.myIntervalTime = 100; // slide image timer
    $scope.intervalSlider = $scope.myIntervalTime; //standard end slide time for image 200/20 = 10 sec
    // from view
    $scope.sliderPrev = function () {
        $scope.unit = 10;
        $scope.counter = 0;
        $scope.intervalSlider = $scope.myIntervalTime;
        $scope.$broadcast('sliderPrev');
        $scope.slickPrev();
    }
    // from view
    $scope.sliderNext = function () {
        $scope.unit = 10;
        $scope.counter = 0;
        $scope.intervalSlider = $scope.myIntervalTime;
        $scope.$broadcast('sliderNext');
        $scope.slickNext();
    }
    $scope.onTimeout = function () {
        $scope.counter = $scope.counter + $scope.unit;
        // logg //
        // console.log('counter is:', +$scope.counter);
        // console.log('unit is:', +$scope.unit);
        // console.log('unitmax time is:', +$scope.intervalSlider);
        //end log
        if ($scope.counter == $scope.intervalSlider) {
            // console.log('stopping counting and reset counter');
            $scope.counter = 0;
            $scope.sliderNext();
        }
        mytimeout = $timeout($scope.onTimeout, 1000);
    }
//auto start
    var mytimeout = $timeout($scope.onTimeout, 1000);
    $scope.slickConfig = {
        onAfterChange: function (slick, index) {
            var slides = $('.slick-track').children().not('.slick-cloned');
            if (index >= slides.length) return;
            $(slides[index]).find('video').each(playVideo);
        }
    };
    $scope.slickHandle = {

    };
    $scope.slickNext = function () {
//        console.log('slickNext() ');
        $scope.slickHandle.slickNext();

    }
    $scope.slickPrev = function () {
//        console.log('slickPrev() ');
        $scope.slickHandle.slickPrev();

    }
    var playVideo = function (index, video) {
        var jqVideo = $(video);
        // Pause the carousel for the duration of the video
        $scope.slickHandle.slickPause();
        //when controller load video it take the duration from metadata and set an attribute in the video tag

        // console.log('my video duration is: ' + video.duration);
        $scope.intervalSlider = video.duration; //duration video
        $scope.unit = parseFloat(100 / $scope.intervalSlider); //new counter
        //   console.log('unit is '+$scope.unit);
        // Using jQuery element instead, otherwise the native releaseEventHandler on 'ended' doesn't
        // work as intended
        jqVideo.bind('ended', function () {
            //      console.log('receiving ended')
            $scope.slickHandle.slickPlay();
            $scope.sliderNext()
            jqVideo.unbind('ended');
        });
        video.isPlaying = true
        video.play();

        $scope.$on('sliderNext', function () {
            if (video.isPlaying) {
                video.isPlaying = false
                video.pause()
                $scope.$broadcast('ended')
                video.load();
                //     console.log('video ended')
            }
        })
        $scope.$on('sliderPrev', function () {
            if (video.isPlaying) {
                video.isPlaying = false
                video.pause()
                $scope.$broadcast('ended')
                video.load();
                //       console.log('video ended')
            }
        })
    };
    // end my slider timer stuff//

    $scope.$on('$destroy', function () {
        $timeout.cancel(mytimeout);
    })

}]);

