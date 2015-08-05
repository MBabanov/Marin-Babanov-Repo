/**
 * Created by Miguel on 14/09/2014.
 */


estars.controller('home.index', ['$scope', 'annoucements', 'news', 'winners', 'featured', 'tournamentService', 'tournamentDetailService', function ($scope, annoucements, news, winners, featured, tournamentService, tournamentDetailService) {
    var vm = this;
    vm.adverts = annoucements;
    vm.home_top_slider = [];
    vm.promotions = [];
    vm.news_promotionals = [];
    angular.forEach(vm.adverts, function (advert) {
        if (advert.zone == 'slider') {
            vm.home_top_slider.push(advert);
        } else if (advert.zone == 'news_features') {
            vm.promotions.push(advert)
        } else if (advert.zone == 'promotional') {
            vm.news_promotionals.push(advert)
        }
    });
    vm.news = news.posts;
    vm.last_tournaments_winners = winners;
    vm.featured = featured;
    vm.featured_detail = show_tournament_featured_detail;
    vm.featured_images = [
        'images/tournament/featured/crown_635x260.jpg', 'images/tournament/featured/dust2_635x260.jpg', 'images/tournament/featured/inferno_635x260.jpg', 'images/tournament/featured/mirage_635x260.jpg', 'images/tournament/featured/nuke_635x260.jpg', 'images/tournament/featured/overpass_635x260.jpg', 'images/tournament/featured/season_635x260.jpg', 'images/tournament/featured/traing_635x260.jpg'
    ]
    angular.forEach(vm.featured, function (f) {
        f.featured = vm.featured_images[get_random_featured_image()];
    })
    function get_random_featured_image() {
        return Math.floor(Math.random() * 7);
    }
    function show_tournament_featured_detail(tournament_id) {
        tournamentService.get_tournament(tournament_id).then(function (tournament) {
            tournamentDetailService.tournament_detail(tournament, false);
        });
    }

}]);