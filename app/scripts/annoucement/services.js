/**
 * Created by Miguel on 09/12/2014.
 */


estars.factory("AnnonService", ['Restangular', function (Restangular) {

    var service = {
        get_announcements: get_annoucements_page
    };
    return service;

    function get_annoucements_page(page) {

        return Restangular.all('annoucement/' + page).getList();
    }

}]);