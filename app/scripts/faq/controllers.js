estars.controller('faq.index', ['$scope', 'categories', function ($scope, categories) {

    var vm = this;
    vm.categories = categories;
    console.log(categories);
    $scope.toggleMenu = function (item) {
        if (_.isEmpty($scope.menuItem)) {
            $scope.menuItem = item;
        } else {
            if ($scope.menuItem == item) {
                $scope.menuItem = "";
            } else {
                $scope.menuItem = item;
            }
        }

    }
}]);
