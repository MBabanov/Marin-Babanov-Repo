/**
 * Created by Miguel on 09/12/2014.
 */



estars.directive('electronicLoader', ElectronicLoader);

function ElectronicLoader() {
    var directive = {
        replace: true,
        link: link,
        templateUrl: '/views/layouts/directives/loader/loader.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
}

estars.provider('ElectronicProgress', [ function () {

    this.$get = ['$compile', '$rootScope', '$document', function ($compile, $rootScope, $document) {
        var $scope = $rootScope;
        var parent = $document.find('body')[0];
        //console.log("PARENT:", parent); //DEBUG
        // Compile the directive
        var progressbarEl = $compile('<electronic-Loader></electronic-Loader>')($scope);
        // Add the element to body
        parent.appendChild(progressbarEl[0]);
        var services = {
            start: start,
            stop: stop
        };
        return services;
        function start() {
            progressbarEl.show();
//        progressbarEl.children().css('opacity', '1');
        }

        function stop() {
            progressbarEl.hide();
//        progressbarEl.children().css('opacity', '0');
        }
    }];

}]);