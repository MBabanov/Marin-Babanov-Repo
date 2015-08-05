/**
 * Created by Miguel on 17/04/2015.
 */
estars.service("cmsCategoryService", ['Restangular', 'categoryModel', function (Restangular, categoryModel) {
    Restangular.extendModel('cms/category', function (obj) {
        return angular.extend(obj, categoryModel);
    });
    return {
        find_category_by_section: find_category_by_section_name
    }
    function find_category_by_section_name(name) {
        return Restangular.all('cms/category').getList({s: name});
    }
}]);