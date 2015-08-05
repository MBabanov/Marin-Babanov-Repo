/**
 * Created by davide on 15/10/2014.
 */
estars.directive('twitter', ['twitterService', function (twitterService) {
    return {
        restrict: 'EA',
        replace: true,
        scope: false,
        templateUrl: 'views/layouts/directives/social/twitter.html',

        link: {
            post: post_link
        }
    }
    function post_link(scope, elem, iAttrs) {
        scope.twitter = [];
        scope.getTwitterData = function () {
            twitterService.$getAll().then(function (data) {
                scope.twitter = data;

                angular.forEach(scope.twitter, function (value, key) {
                    scope.twitter[key].created_at = moment(scope.twitter[key].created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').format();

                })
            })
        };
        scope.getTwitterData();

        scope.$on('twitter_done', function () {
            //console.log(elem)
            var spanTexts = elem.find('.tweet-text');
            //console.log("POST LINK: spanTexts -> ", spanTexts)
            angular.forEach(spanTexts, function (value, key) {
                var text = value.innerText;
                var textArray = text.split(" ");
                // console.log("POST LINK: textArray -> ", textArray)
                angular.forEach(textArray, function (value, key) {
                    if (value.match(/@/) || value.match(/^#/) || value.match(/^http/)) {
                        //console.log('my value ' + value); //DEBUG
                        textArray[key] = '<span class="text-red">' + value.toString() + '</span>';
                        //console.log('string insert ' + strArray[key]);//DEBUG
                    }
                    if (value.match(/^http/)) {
                        //console.log('my link is ' + value); //DEBUG
                        textArray[key] = '<a class="text-red" rel="external" href="' + value.toString() + '">' + value.toString() + '</a>';
                        //console.log('string insert ' + textArray[key]); //DEBUG
                    }
                });
                spanTexts[key].innerHTML = textArray.join(' ');
            });
            //using jquery to link to external page
            elem.find('a[rel="external"]').attr('target', '_blank');
        })
    }
}]);
