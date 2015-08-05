estars.service("facebookService", ['Restangular', function (Restangular) {
    return {
        $getAll: function () {
            return Restangular.all('social/facebook').getList();
        }

    };
}]);
estars.service("twitterService", ['Restangular', function (Restangular) {
    return {
        $getAll: function () {
            return Restangular.all('social/twitter').getList();
        }

    };
}])