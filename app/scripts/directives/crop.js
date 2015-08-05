/**
 * Created by Miguel on 12/09/2014.
 */


estars.directive('crop', ['$timeout', function ($timeout) {
    var crop;

    function link(scope, element, attrs) {
        $timeout(function () {
            $(element).cropit({ $preview: $(element).find('.user-cover'), onImageLoaded: function () {
//                console.log("image loaded");
                $(element).find('.inner').hide();
                $('.cover-up-wrapper').hide();
                $('.cover-options-wrapper').show();

            }, onFileChange: function () {
//                console.log("file changed");
            }});

        }, 0);

    }

    return {
        restrict: "EA",
        transclude: false,
        link: link,
        scope: true

    };

}]);

estars.directive('file', function () {
    return {
        restrict: 'A',
        scope: {
            callback: '='
        },
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var files = event.target.files;
                var file = files[0];

                var reader = new FileReader()
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
//                        console.log(loadEvent.target.result);
                        scope.callback(loadEvent.target.result);
                    });
                }
                reader.readAsDataURL(file);

            });
        }
    };
});