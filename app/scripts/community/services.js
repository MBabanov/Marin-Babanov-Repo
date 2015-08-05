estars.service("communityWhoToFollowService", ['Restangular', 'userModel', function (Restangular, userModel) {
    Restangular.extendModel('me/users-to-follow', function (obj) {
        return angular.extend(obj, userModel);
    });

    return {
        $getWhoToFollowList: function () {
            return Restangular.all('me/users-to-follow').getList()
        }
    };
}])


estars.service("communityFriendsService", ['Restangular', 'userModel', function (Restangular, userModel) {
    Restangular.extendModel('me/friends', function (obj) {
        return angular.extend(obj, userModel);
    });

    return {
        $getFriendsList: function () {
            return Restangular.all('me/friends').getList()
        },
        $getFriendsRequestList: function () {
            return [
                {avatar: 'images/test/tio1.jpg', username: 'EA_Miguel', lvl: '20', follow: true, multiplier: 2, reputation: 1, location: 'Russia'},
                {avatar: 'images/test/tia2.jpg', username: 'EA_Carlos_Artur_RYU', lvl: '15', multiplier: 5, reputation: 2, location: 'Italy'},
                {avatar: 'images/test/tio1.jpg', username: 'EA_Alfred_Angeel', lvl: '10', follow: true, multiplier: 4, reputation: 3, location: 'Spain'},
                {avatar: 'images/test/tio1.jpg', username: 'EA_Alessio', lvl: '20', follow: true, multiplier: 2, reputation: 4, location: 'Ecuador'},
                {avatar: 'images/test/tia2.jpg', username: 'EA_Jordy_Devil_Sunshine', lvl: '20', multiplier: 2, reputation: 5, location: 'Russia'}
            ];
        }
    };
}]);


estars.service("communityFollowersService", ['Restangular', 'userModel', function (Restangular, userModel) {
    Restangular.extendModel('me/followers', function (obj) {
        return angular.extend(obj, userModel);
    });
    return {
        $getFollowersList: function () {
            return Restangular.all('me/followers').getList()
        }
    }
}
]);

estars.service("communityFollowingService", ['Restangular', 'userModel', function (Restangular, userModel) {
    Restangular.extendModel('me/following', function (obj) {
        return angular.extend(obj, userModel);
    });

    return {
        $getFollowingList: function () {
            return Restangular.all('me/following').getList()
        }
    };
}]);

estars.service("communityInviteService", ['Restangular', 'userModel', '$rootScope', function (Restangular, userModel, $rootScope) {
    Restangular.extendModel('me/users-to-invite', function (obj) {
        return angular.extend(obj, userModel);
    }); //we will not menage invite sent here
    var socialFriends = [];
    var selected = []
    var unselected = [];
    var emailList = [];
    return {
        $getSocialFriendsList: function () {
            var socialFriends = [];
            return Restangular.all('me/users-to-invite').getList().then(function (socialFriendsFromServer) {
                if (socialFriends.length == 0) //only init
                    angular.forEach(socialFriendsFromServer, function (val, key) {
                        val.isSelected = false
                        socialFriends = socialFriendsFromServer.slice();
                        unselected = socialFriendsFromServer.slice()
                        $rootScope.$broadcast('update-unselectedUsers', unselected)
                        $rootScope.$broadcast('update-selectedUsers', selected)
                    })

                return socialFriendsFromServer
            })

            /* socialFriendsFromServer = [
             {avatar: 'images/test/tio1.jpg', username: 'EA_Miguel', location: 'Russia', provider: 'twitter'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Carlos', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alfred', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alessio', location: 'Ecuador', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Jordy_', location: 'Russia', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Russia', provider: 'twitter'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'France', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Italy', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Italy', provider: 'twitter'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Miguel', location: 'Russia', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Carlos_Artur_RYU', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'popopopopo', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alessio', location: 'Ecuador', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Jordy', location: 'Russia', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Russia', provider: 'twitter'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'France', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Italy', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Miguel', location: 'Russia', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Carlos', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alfred', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alessio', location: 'Ecuador', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Russia', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'France', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Italy', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Spain', provider: 'twitter'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Miguel', location: 'Russia', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Carlos', location: 'Italy', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alfred', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alessio', location: 'Ecuador', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Jordy_Devil_', location: 'Russia', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Russia', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'France', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Italy', provider: 'twitter'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard', location: 'Spain', provider: 'twitter'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Miguel', location: 'Russia', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Carlos_', location: 'Italy', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alfred', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Alessio', location: 'Ecuador', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Jordy_Devil', location: 'Russia', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Russia', provider: 'twitter'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'France', provider: 'twitter'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Italy', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_Eduard_aZ99', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tia2.jpg', username: 'EA_Mike', location: 'Spain', provider: 'facebook'},
             {avatar: 'images/test/tio1.jpg', username: 'EA_David', location: 'Spain', provider: 'facebook'}
             ];*/
        },
        $getSelectedUsers: function () {
            return selected;
        },
        $getUnselectedUsers: function () {
            return unselected;
        },
        //if selected
        //else if unselected
        $selectUser: function (user) {
            user.isSelected = true
            selected.push(user)
            var item = unselected.splice(unselected.indexOf(user), 1)
            /*  console.log('removing item from unselected list: ')
             console.log(item)
             console.log("BROADCASTING: select user function: ")
             console.log("select list:  ")
             console.log("s> " + selected.length)
             console.log("u> " + unselected.length)
             console.log("unselected list:  ")*/
            $rootScope.$broadcast('update-unselectedUsers', unselected)
            $rootScope.$broadcast('update-selectedUsers', selected)

            return user
        },
        $unselectUser: function (user) {//no send to server
            user.isSelected = false
            unselected.push(user)
            var item = selected.splice(selected.indexOf(user), 1)
            /*  console.log("s> " + selected.length)
             console.log("u> " + unselected.length)
             console.log('removing item from selected list: ' + item)*/
            $rootScope.$broadcast('update-unselectedUsers', unselected)
            $rootScope.$broadcast('update-selectedUsers', selected) //implicit send the scope as second argument

            return user
        },
        /* double way binding. need this array updated in this scope*/
        $getEmailList: function () {
            return emailList;
        },
        $deleteEmailList: function () {
            emailList = [];
            return 'empty';
        },

        /* send to server all the date sel;ect and inserted by the user
         selected user and email list in separated array. For each array send to different API in base of provider (facebook, twitter, google, ecc)
         */
        $invite: function () {
            // prepare array with data
            var facebookList = []
            var twitterList = []
            var googleList = []
            angular.forEach(selected, function (val, key) {
                val.isSelected = false
                switch (val.provider) {
                    case 'facebook':
                        facebookList.push(val)
                        break;
                    case 'twitter':
                        twitterList.push(val)
                        break;
                    case 'google':
                        googleList.push(val)
                        break;
                }
            })
//            console.log('array with facebook user: ' + facebookList)
//            console.log('array with twitter user: ' + twitterList)
//            console.log('array with google user: ' + googleList)
            /* returnn from server calll this to update front end data
             */

            /*updateClient = function () {
             socialFriends = _.difference(socialFriends, selected)
             unselected = socialFriends.slice()
             selected = []
             $rootScope.$broadcast('update-selectedFriends', selected)
             $rootScope.$broadcast('update-socialFriends', socialFriends)
             $rootScope.$broadcast('update-unselectedFriends', unselected)
             }*/
            //send all to server
            return true
        },
        $selectAll: function () {
            selected = []
            angular.forEach(socialFriends, function (val, key) {
                // val.inviteSent = true
                val.isSelected = true
                selected.push(val)
            })
            unselected = []
            $rootScope.$broadcast('update-selectedFriends', selected)
            $rootScope.$broadcast('update-socialFriends', socialFriends)
            $rootScope.$broadcast('update-unselectedFriends', unselected)
        },
        $unSelectAll: function () {
            selected = []
            angular.forEach(socialFriends, function (val, key) {
                // val.inviteSent = true
                val.isSelected = false
                unselected.push(val)
            })
            unselected = []
            $rootScope.$broadcast('update-selectedFriends', selected)
            $rootScope.$broadcast('update-socialFriends', socialFriends)
            $rootScope.$broadcast('update-unselectedFriends', unselected)
        }
    }
}
])

