/**
 * Created by Miguel on 20/02/2015.
 */


estars.factory('NewsRestangular', ['Restangular', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://esports.electronicstars.com/api');
        RestangularConfigurer.setRequestSuffix('');

        RestangularConfigurer.setDefaultHeaders({Authorization: undefined});
    });
}]);

estars.factory("newsService", ['NewsRestangular', function (NewsRestangular) {
    return {
        news: get_last_news
    };
    function get_last_news() {
        return NewsRestangular.one('get_category_posts').get({category_slug: 'noticias'});

    }
}]);