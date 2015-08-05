/**
 * Created by Miguel on 21/10/2014.
 */


estars.config(['RestangularProvider', '$locationProvider', '$authProvider', '$translateProvider', 'ELECTRONIC', '$analyticsProvider', function (RestangularProvider, $locationProvider, $authProvider, $translateProvider, ELECTRONIC, $analyticsProvider) {
    RestangularProvider.setBaseUrl(ELECTRONIC.HOST + 'api');
//    $locationProvider.html5Mode(true);
    RestangularProvider.setRequestSuffix('/');
    $analyticsProvider.firstPageview(true);

    $analyticsProvider.withAutoBase(true);

    $authProvider.httpInterceptor = false;
    $authProvider.facebook({
        url: ELECTRONIC.HOST + 'api/sync/facebook/',
        clientId: ELECTRONIC.FACEBOOK_CLIENT,
        authorizationEndpoint: 'https://www.facebook.com/dialog/oauth',
        redirectUri: window.location.protocol + '//' + window.location.host + '/',
        scope: ['email', 'user_friends'],
        scopeDelimiter: ',',
        requiredUrlParams: ['display', 'scope'],
        display: 'popup',
        type: '2.0',
        popupOptions: { width: 481, height: 269 }
    });
    $authProvider.oauth2({
        name: 'steam',
        authorizationEndpoint: ELECTRONIC.HOST + 'login/oi',
        url: ELECTRONIC.HOST + 'api/sync/steam/',
        requiredUrlParams: ['id'],
        id: 'http://steamcommunity.com/openid',
        popupOptions: { width: 559, height: 519 }
    });
    $authProvider.oauth2({
        name: 'twitch',
        redirectUri: window.location.protocol + '//' + window.location.host + '/',
        clientId: ELECTRONIC.TWITCH_CLIENT,
        authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
        url: ELECTRONIC.HOST + 'api/sync/twitch/',
        scope: ['user_read', 'channel_read'],
        scopeDelimiter: ' ',
        requiredUrlParams: ['scope'],
        popupOptions: { width: 559, height: 519 }

    });
    $authProvider.twitter({
        url: ELECTRONIC.HOST + 'api/sync/twitter/',
        type: '1.0',
        popupOptions: { width: 495, height: 645 }
    });
    $authProvider.google({
        clientId: '358023882218-820r4btb6dch6msje85uljtnol60jdt6.apps.googleusercontent.com',
        url: ELECTRONIC.HOST + 'api/sync/google/',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
        redirectUri: window.location.protocol + '//' + window.location.host + '/',
        scope: ['profile', 'email', 'https://www.googleapis.com/auth/contacts.readonly'],
        scopePrefix: 'openid',
        scopeDelimiter: ' ',
        requiredUrlParams: ['scope'],
        optionalUrlParams: ['display'],
        display: 'popup',
        type: '2.0',
        popupOptions: { width: 452, height: 633 }
    });

    $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'es'], {
        'en_US': 'en',
        'en_UK': 'en',
        'de_DE': 'en',
        'de_CH': 'en',
        'es_ES': 'es',
        'it_IT': 'en',
        'fr_FR': 'fr'
    })

    $translateProvider.useUrlLoader('http://devapi.electronicstars.com/api/cms/translation/');
    $translateProvider.preferredLanguage('ES');

}]);
