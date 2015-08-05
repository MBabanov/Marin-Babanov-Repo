estars.directive('backImg', ['$sce', function ($sce) {
    return function (scope, element, attrs) {
        var url = attrs.backImg;
        element.css({
            'background-image': 'linear-gradient(to bottom, transparent 60%, #020202 100%), url(' + $sce.trustAsResourceUrl(url) + ')',
            'background-size': 'cover'
        });
    };
}]);
