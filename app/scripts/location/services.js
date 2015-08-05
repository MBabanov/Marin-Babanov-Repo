/**
 * Created by Miguel on 25/11/2014.
 */


estars.service("locationService", ['Restangular', function (Restangular) {

    return {
        $get_countries: function () {
            return Restangular.all("countries").getList();
        }, $get_cities_by_country: function (id) {
//            console.log("find match", id);
            return Restangular.one("countries", id).all('cities').getList();

        }, $getTournaments: function (id) {
            return Restangular.one("game", id).getList("tournaments");
        }, $getStatsById: function (id) {
            return Restangular.one("match", id).one('stats').get();
        }, $getStatsByIdandPlayer: function (id) {
            return Restangular.one("match", id).one('stats').get();
        }

    };
}])
