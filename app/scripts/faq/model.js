/**
 * Created by Miguel on 17/04/2015.
 */
estars.factory('categoryModel', ['Restangular', function (Restangular) {

    this.opened = false;
    return {
        get_articles: get_articles

    };
    function get_articles() {
        return Restangular.all('cms/article').getList({c: this.id});
    }
}]);