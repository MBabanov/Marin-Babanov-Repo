/**
 * Created by Miguel on 01/09/2014.
 */
estars.controller('user.profile', ['$scope', '$rootScope', 'Restangular', 'user', '$modal' , 'userModalService', 'itsme', 'ElectronicProgress', function ($scope, $rootScope, Restangular, user, $modal, userModalService, itsme, ElectronicProgress) {
    $scope.user = user;
    $scope.itsme = itsme;
    if (_.size($scope.user.games_lvl) > 0) {
        $scope.current_game_id = $scope.user.games_lvl[0].game.id;
        $scope.last_tournament = $scope.user.games_lvl[0].last_tournament;
    } else {
        $scope.current_game_id = null;
        $scope.last_tournament = null;
    }
    $scope.doCrop = function () {
        var modalInstance = $modal.open({
            templateUrl: '/views/partials/user/crop/cover-crop.html',
            controller: 'user.profile.crop',
            windowTemplateUrl: '/views/layouts/play/modal.html',
            backdrop: 'false',
            scope: $scope

        });
        modalInstance.result.then(function (imageUrl) {
            var image = dataURLtoBlob(imageUrl);
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", image);
            Restangular.all('me/uploadCover').withHttpConfig({transformRequest: angular.identity}).post(fd, {}, {'Content-Type': undefined}).then(function (data) {
                // do on success

                $("#profile-cover").css("background-image", "url(" + data.image + ")");
                ElectronicProgress.stop();
            }, function () {
                // do on failure
            });

            $('.cover-up-wrapper').show();
        }, function () {
            $('.cover-up-wrapper').show();
        });
    }

    $scope.select_game = function (obj) {
        $scope.current_game_id = obj.game.id;
        $scope.last_tournament = obj.last_tournament;
    }
    $rootScope.$on('user:avatar:updated', function (event, avatar) {
        $scope.user.avatar = avatar;
    });
}]);

estars.controller('user.profile.crop', ['$scope', '$rootScope', '$modalInstance', '$timeout', '$modal', 'Restangular', 'ElectronicProgress', function ($scope, $rootScope, $modalInstance, $timeout, $modal, Restangular, ElectronicProgress) {

    $scope.starCrop = function () {
        $timeout(function () {
            $(".cropit-image-input").click();
        });
    };
    $scope.endCrop = function () {
        ElectronicProgress.start();
        var image = $('.profile-cover-upload').cropit('export', {
            type: 'image/jpeg',
            quality: .9,
            originalSize: true
        });

        $('.cover-options-wrapper').hide();
        $modalInstance.close(image);

    }
    $scope.startavatarCrop = function () {

        $timeout(function () {
            angular.element('.avatarCrop').click();
        });
    }
    $scope.avatarCrop = function (image) {
        var modalAvatar = $modal.open({
            templateUrl: '../../views/partials/user/crop/profile-crop.html',
            controller: 'user.avatar.crop',
            backdrop: 'static',
            scope: $scope,
            size: 'sm',
            resolve: {
                img: function () {
                    return  image;
                }
            }

        });
        modalAvatar.result.then(function (imageUrl) {
            var image = dataURLtoBlob(imageUrl);
            var fd = new FormData();
            fd.append("file", image);
            Restangular.all('me/uploadAvatar').withHttpConfig({transformRequest: angular.identity}).post(fd, {}, {'Content-Type': undefined}).then(function (data) {
                $rootScope.$broadcast('user:avatar:updated', data.image);
                $(".profile-avatar-upload .inner").css("background-image", "url(" + data.image + ")");
                ElectronicProgress.stop();
            }, function () {

            });

        }, function () {

        });

    }
    $scope.close = function () {
        $modalInstance.close();
    }
}]);

estars.controller('user.avatar.crop', ['$scope', '$modalInstance', '$timeout', 'img', 'ElectronicProgress', function ($scope, $modalInstance, $timeout, img, ElectronicProgress) {

    $timeout(function () {
        $('.image-editor').cropit({
            imageBackground: true,
            imageBackgroundBorderWidth: 20,
            imageState: {
                src: img
            }
        });
    });

    $scope.endCrop = function () {
        var image = $('.image-editor').cropit('export', {
            type: 'image/jpeg',
            quality: .9,
            originalSize: true
        });
        ElectronicProgress.start();
        $modalInstance.close(image);

    }
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }

}]);

estars.controller('user.modal', ['$scope', '$modalInstance', 'page', '$rootScope', function ($scope, $modalInstance, page, $rootScope) {
    $scope.page = page;
    $scope.date = null;

    $scope.date_options = {
        editable: true,
        selectYears: true,
        selectMonths: true,
        format: 'yyyy-mm-dd', // ISO formatted date
        onClose: function (e) {
            // do something when the picker closes
        }
    }
    $scope.menuItem = page.split('.')[1]
    $scope.go_to = function (page_selected) {
        $scope.page = page_selected;
    }
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
    $scope.close = function () {
        $modalInstance.close()
    }
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $modalInstance.close()
    })
}])

estars.controller('user.modal.profile.edit', ['$scope', 'SessionService', '$timeout', 'userService', 'Restangular', 'locationService', '$auth', '$rootScope', function ($scope, SessionService, $timeout, userService, Restangular, locationService, $auth, $rootScope) {
    locationService.$get_countries().then(function (data) {
        $scope.countries = data;
    })

    userService.$me().then(function (data) {
        $scope.user = data;
//        console.log($scope.user);
        if ($scope.user.installed_client) {
            $scope.user.sync();
        }
        angular.forEach($scope.user.social_providers, function (value, key) {

            angular.forEach($scope.networks, function (net) {
                if (net.provider == value) {
                    net.connected = true;
//                    net.name = $scope.user[value].username;
                }

            });

        });

    })
    $timeout(function () {
        $('.age').pickadate({
            selectYears: true,
            selectMonths: true,
            selectYears: 90,
            set: function (thingSet) {
                console.log(thingSet);
                $scope.user.birth_date = thingSet.select;
            },

//            firstDay: 1,
            min: [1930, 1, 01],
            max: [2009, 12, 31]
        })
    }, 0);
    $scope.updateData = function (data) {
        var update_data = {}
        if (data == 'name') {
            update_data = {first_name: $scope.user.first_name, last_name: $scope.user.last_name}
        } else if (data == 'age') {
//            console.log($scope.user.birth_date);
//            age = moment($scope.user.birth_date, "DD MMMM,YYYY").utc().toDate();
//            console.log(age);
            update_data = {birth_date: $scope.user.birth_date }
        } else if (data == 'nacionality') {
            update_data = {nacionality: $scope.user.nacionality.id }
        } else if (data == 'address') {
            update_data = {
                address: {
                    country: $scope.user.address.country.id,
                    city: $scope.user.address.city.id,
                    address: $scope.user.address.address,
                    postal_code: $scope.user.address.potal_code
                }

            }
        }

        Restangular.one('me').customPUT(update_data).then(function (data) {

        })

    }
    $scope.updateCities = function (item, model) {
        locationService.$get_cities_by_country(model.id).then(function (cities) {
            $scope.cities = cities;
        })

    }
    $scope.sincronize = sincronize_social;
    $scope.networks = [
        {
            connected: false,
            name: '',
            provider: 'facebook'
        },
        {
            connected: false,
            name: '',
            provider: 'twitter'
        },
        {
            connected: false,
            name: '',
            provider: 'steam'
        },
        {
            connected: false,
            name: '',
            provider: 'google'
        },
        {
            connected: false,
            name: '',
            provider: 'twitch'
        }
    ];

    $rootScope.$on('user:sync', function (event, data) {
        if (data) {
            $scope.user.sincronized = data;
        }
    });

    function sincronize_social(provider) {
        $auth.link(provider).then(function (response) {
            angular.forEach($scope.networks, function (net, key) {
                if (provider == net.provider) {
                    $scope.networks[key].connected = true;
                    $scope.networks[key].name = response.data.username;

                }
            });
        });
    }

}]);

estars.controller('user.modal.profile.password', ['$scope', 'userService', function ($scope, userService) {
    var vm = this;
    vm.user = {
        old_password: '',
        password: '',
        repeated_password: ''
    }
    vm.messages = [];
    vm.update_password = change_password;
    vm.close_message = close_message;
    function change_password() {
        var data = {
            old_password: vm.user.old_password,
            password: vm.user.password
        };
        userService.update_password(data).then(function (data) {
            $scope.passwordForm.$setPristine();
            vm.user = {
                old_password: '',
                password: '',
                repeated_password: ''
            }
            var message = {
                type: 'success',
                msg: 'You successfully change your passwrod.'
            }
            add_message(message);
        }, function (data) {
            console.log(data);
        });
    }

    function add_message(message) {
        vm.message = [];
        vm.messages.push(message);
    }

    function close_message(index) {
        vm.messages.splice(index, 1);
    }

}]);