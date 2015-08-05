/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 09/06/14
 * Time: 12:23
 * To change this template use File | Settings | File Templates.
 */



estars.controller('invitation.home', ['$scope', 'Restangular', function ($scope, Restangular) {
    //  $scope.email;
    $scope.messages = [

    ];
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

}]);