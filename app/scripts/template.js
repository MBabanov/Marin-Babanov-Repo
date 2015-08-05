angular.module('coreWebApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/layouts/about_us/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view class=\"main-section\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/cashform/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view></div>"
  );


  $templateCache.put('views/layouts/cashform/modal.html',
    "<div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/cashier/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view></div>"
  );


  $templateCache.put('views/layouts/community/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view></div>\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/community-nav-tabs.html',
    "<div class=\"community-center-box\">\r" +
    "\n" +
    "    <!-- nav tab -->\r" +
    "\n" +
    "    <ul class=\"nav nav-tabs main-tabs\">\r" +
    "\n" +
    "        <li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">\r" +
    "\n" +
    "            <a href=\"\" ng-click=\"select(pane)\">{{pane.title}}\r" +
    "\n" +
    "                <span data-ng-if=\"pane.title == 'INVITE'\" class=\"fa fa-facebook-square facebook-tab-icon\"></span>\r" +
    "\n" +
    "                <!-- this tab show delete button, the other no -->\r" +
    "\n" +
    "                <span ng-if='!_app.is_logged()' data-ng-if=\"pane.title == 'FOLLOWERS'\" class=\"counter-icon-big\">9+</span>\r" +
    "\n" +
    "                <span ng-if='!_app.is_logged()' data-ng-if=\"pane.title == 'FRIENDS'\" class=\"counter-icon-small\">5</span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"tab-content md-col-8 community-box-content\" ng-transclude>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/followers.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"community-tab\">\n" +
    "        <div class=\"community-search-bar\">\n" +
    "\n" +
    "            <div class=\"secundary-filter-box\">\n" +
    "                <form class=\"form-inline\" role=\"form\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"filter-label\">FILTER BY</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"gameDropdown\"\n" +
    "                             selected-model=\"_game_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'GAME'}\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"frequencyDropdown\"\n" +
    "                             selected-model=\"_frequency_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'FREQUENCY'}\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"nationalDropdown\"\n" +
    "                             selected-model=\"_national_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'NATIONAL'}\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group pull-right\">\n" +
    "                        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"FIND FRIENDS\" name=\"srch-term\"\n" +
    "                               id=\"srch-term\" ng-model=\"query\">\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"table-box\">\n" +
    "            <div class=\"table-content community-content\">\n" +
    "                <table class=\"table-friends-head\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='username'; reverseSort = !reverseSort\">\n" +
    "                                    USERNAME <span ng-show=\"orderByField == 'user'\">\n" +
    "                                    <span ng-show=\"!reverseSort\">^</span>\n" +
    "                                    <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='lvl'; reverseSort = !reverseSort\">\n" +
    "                                    LEVEL <span ng-show=\"orderByField == 'level'\">\n" +
    "                                      <span ng-show=\"!reverseSort\">^</span>\n" +
    "                                      <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='reputation'; reverseSort = !reverseSort\">\n" +
    "                                    REPUTATION <span ng-show=\"orderByField == 'reputation'\">\n" +
    "                                     <span ng-show=\"!reverseSort\">^</span>\n" +
    "                                     <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='location'; reverseSort = !reverseSort\">\n" +
    "                                    LOCATION <span ng-show=\"orderByField == 'location'\">\n" +
    "                                     <span ng-show=\"!reverseSort\">^</span>\n" +
    "                                     <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                </table>\n" +
    "                <div class=\"table-friends-scrollable\" data-ng-attr=\"{followersList.length > 16} ? scroll-bar\">\n" +
    "                    <table>\n" +
    "                        <tbody class=\"table-container\">\n" +
    "                        <tr data-ng-if=\"followersList.length == 0\">\n" +
    "                            <td>\n" +
    "                                <div>\n" +
    "                                    you have no followers\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr data-ng-if=\"followersList.length > 0\"\n" +
    "                            data-ng-repeat=\"user in followersList | filter:{username: query} | orderBy:orderByField:reverseSort  track by $index\">\n" +
    "                            <td>\n" +
    "                                <!-- invite to become friend altready send -->\n" +
    "                                <div data-ng-if=\"isRequestSended(user)\" class=\"user-community-info\">\n" +
    "                                    <img class=\"user-circle\" data-ng-src=\"{{user.avatar}}\">\n" +
    "\n" +
    "                                    <div class=\"user-container\">\n" +
    "                                        <div class=\"user-name\">{{user.username}}</div>\n" +
    "                                        <div class=\"user-level\">LEVEL{{user.lvl}}</div>\n" +
    "                                        <div class=\"user-multiplier\">\n" +
    "                                            <div multiplier-same-size=\"{{user.multiplier}}\">\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div data-ng-show=\"isRequestSended(user)\">\n" +
    "                                            <button class=\"user-follow-btn user-waiting-status\"\n" +
    "                                                    >\n" +
    "                                                WAITING\n" +
    "                                            </button>\n" +
    "                                        </div>\n" +
    "                                        <div data-ng-hide=\"isRequestSended(user)\">\n" +
    "                                            <button class=\"user-follow-btn\" data-ng-click=\"sendRequestAsAFriend(user)\">\n" +
    "                                                INVITE\n" +
    "                                            </button>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"level-col\">{{user.lvl}}</div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"reputation-col\">\n" +
    "                                    <div reputation=\"{{user.reputation}}\"></div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td data-ng-class=\"{scrollbarSize:followersList.length > 5} \">\n" +
    "                                <div class=\"location-col\">{{user.location}}</div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/following.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"community-tab\">\n" +
    "        <div class=\"community-search-bar\">\n" +
    "\n" +
    "            <div class=\"secundary-filter-box\">\n" +
    "                <form class=\"form-inline\" role=\"form\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"filter-label\">FILTER BY</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"gameDropdown\"\n" +
    "                             selected-model=\"_game_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'GAME'}\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"frequencyDropdown\"\n" +
    "                             selected-model=\"_frequency_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'FREQUENCY'}\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"nationalDropdown\"\n" +
    "                             selected-model=\"_national_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'NATIONAL'}\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group pull-right\">\n" +
    "                        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"FIND FRIENDS\" name=\"srch-term\"\n" +
    "                               id=\"srch-term\" ng-model=\"query\">\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"table-box\">\n" +
    "            <div class=\"table-content community-content\">\n" +
    "                <table class=\"table-friends-head\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='user'; reverseSort = !reverseSort\">\n" +
    "                                    USERNAME <span ng-show=\"orderByField == 'user'\">\n" +
    "                            <span ng-show=\"!reverseSort\">^</span>\n" +
    "                            <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='level'; reverseSort = !reverseSort\">\n" +
    "                                    LEVEL <span ng-show=\"orderByField == 'level'\">\n" +
    "                            <span ng-show=\"!reverseSort\">^</span>\n" +
    "                            <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='reputation'; reverseSort = !reverseSort\">\n" +
    "                                    REPUTATION <span ng-show=\"orderByField == 'reputation'\">\n" +
    "                            <span ng-show=\"!reverseSort\">^</span>\n" +
    "                            <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='location'; reverseSort = !reverseSort\">\n" +
    "                                    LOCATION <span ng-show=\"orderByField == 'location'\">\n" +
    "                            <span ng-show=\"!reverseSort\">^</span>\n" +
    "                            <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                </table>\n" +
    "                <div class=\"table-friends-scrollable\" scroll-bar>\n" +
    "                    <table>\n" +
    "                        <tbody class=\"table-container\">\n" +
    "                        <tr data-ng-if=\"followingList.length == 0\">\n" +
    "                            <td>\n" +
    "                                <div>\n" +
    "                                    u are not following noone\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr data-ng-if=\"followingList.length > 0\"\n" +
    "                            ng-repeat=\"user in followingList | filter:{name: query}  | orderBy:orderByField:reverseSort track by $index\">\n" +
    "                            <td>\n" +
    "                                <div class=\"user-community-info\">\n" +
    "                                    <img class=\"user-circle\" data-ng-src=\"{{user.avatar}}\">\n" +
    "\n" +
    "                                    <div class=\"user-container\">\n" +
    "                                        <div class=\"user-name\">{{user.username}}</div>\n" +
    "                                        <div class=\"user-level\">LEVEL{{user.lvl}}</div>\n" +
    "                                        <div class=\"user-multiplier\">\n" +
    "                                            <div multiplier-same-size=\"{{user.multiplier}}\">\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div data-ng-show=\"isRequestSended(user)\">\n" +
    "                                            <button class=\"user-follow-btn user-waiting-status\">\n" +
    "                                                WAITING\n" +
    "                                            </button>\n" +
    "                                        </div>\n" +
    "                                        <div data-ng-hide=\"isRequestSended(user)\">\n" +
    "                                            <button class=\"user-follow-btn \" data-ng-click=\"sendRequestAsAFriend(user)\">\n" +
    "                                                INVITE\n" +
    "                                            </button>\n" +
    "                                        </div>\n" +
    "                                        <button class=\"user-deny-btn\" data-ng-click=\"unfollowUser(user)\">UNFOLLOW\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"level-col\"> {{user.lvl}}</div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"reputation-col\">\n" +
    "                                    <div reputation=\"{{user.reputation}}\"></div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td data-ng-class=\"{scrollbarSize:followingList.length > 5} \">\n" +
    "                                <div class=\"location-col\">{{user.location}}</div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/friends.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"community-tab\">\n" +
    "        <div class=\"community-search-bar\">\n" +
    "\n" +
    "            <div class=\"secundary-filter-box\">\n" +
    "                <form class=\"form-inline\" role=\"form\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"filter-label\">FILTER BY</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"gameDropdown\"\n" +
    "                             selected-model=\"_game_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'GAME'}\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"frequencyDropdown\"\n" +
    "                             selected-model=\"_frequency_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'FREQUENCY'}\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"nationalDropdown\"\n" +
    "                             selected-model=\"_national_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'NATIONAL'}\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group pull-right\">\n" +
    "                        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"FIND FRIENDS\" name=\"srch-term\"\n" +
    "                               id=\"srch-term\" ng-model=\"query\">\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"table-box\">\n" +
    "            <div class=\"table-content community-content\">\n" +
    "                <table class=\"table-friends-head\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='username'; reverseSort = !reverseSort\">\n" +
    "                                    USERNAME <span ng-show=\"orderByField == 'user'\">\n" +
    "                                <span ng-show=\"!reverseSort\">^</span>\n" +
    "                                <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='lvl'; reverseSort = !reverseSort\">\n" +
    "                                    LEVEL <span ng-show=\"orderByField == 'level'\">\n" +
    "                            <span ng-show=\"!reverseSort\">^</span>\n" +
    "                            <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='reputation'; reverseSort = !reverseSort\">\n" +
    "                                    REPUTATION <span ng-show=\"orderByField == 'reputation'\">\n" +
    "                            <span ng-show=\"!reverseSort\">^</span>\n" +
    "                            <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            <div>\n" +
    "                                <a ng-click=\"orderByField='location'; reverseSort = !reverseSort\">\n" +
    "                                    LOCATION <span ng-show=\"orderByField == 'location'\">\n" +
    "                            <span ng-show=\"!reverseSort\">^</span>\n" +
    "                            <span ng-show=\"reverseSort\">v</span></span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </th>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                </table>\n" +
    "                <div class=\"table-friends-scrollable\" scroll-bar>\n" +
    "                    <table>\n" +
    "                        <tbody class=\"table-container\">\n" +
    "                        <tr data-ng-if=\"users_request.length > 0\"\n" +
    "                            data-ng-repeat=\"user in users_request | filter:{name: query} | orderBy:orderByField:reverseSort\"\n" +
    "                            data-ng-class=\"($last==true) ? 'lastRow' : ''\">\n" +
    "                            <td>\n" +
    "                                <div class=\"user-community-info\">\n" +
    "                                    <img class=\"user-circle\" ng-src=\"{{user.avatar}}\">\n" +
    "\n" +
    "                                    <div class=\"img-request\"></div>\n" +
    "                                    <div class=\"user-container\">\n" +
    "                                        <div class=\"user-name\">{{user.username}}</div>\n" +
    "                                        <div class=\"user-level\">LEVEL{{user.lvl}}</div>\n" +
    "                                        <div class=\"user-multiplier\">\n" +
    "                                            <div multiplier-same-size=\"{{user.multiplier}}\">\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <button class=\"user-follow-btn\" data-ng-click=\"acceptRequest(user)\">ACCEPT\n" +
    "                                        </button>\n" +
    "                                        <button class=\"user-deny-btn\" data-ng-click=\"denyRequest(user)\">DENY</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"level-col\">{{user.lvl}}</div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"reputation-col\">\n" +
    "                                    <div reputation=\"{{user.reputation}}\"></div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td data-ng-class=\"{scrollbarSize:friendsList.length + users_request.length > 5}  \">\n" +
    "                                <div class=\"location-col\">{{user.location}}</div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "\n" +
    "                        <tr data-ng-if=\"friendsList.length > 0\"\n" +
    "                            ng-repeat=\"user in friendsList | filter:{username: query} |orderBy:orderByField:reverseSort  track by $index\">\n" +
    "                            <td>\n" +
    "                                <div class=\"user-community-info friend\">\n" +
    "                                    <img class=\"user-circle\" data-ng-src=\"{{user.avatar}}\">\n" +
    "\n" +
    "                                    <div class=\"user-name\">{{user.username}}</div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"level-col\"> {{user.lvl}}</div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"reputation-col\">\n" +
    "                                    <div reputation=\"{{user.reputation}}\"></div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"location-col\">{{user.location}}</div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr data-ng-if=\"friendsList.length == 0\">\n" +
    "                            <td>\n" +
    "                                <div>\n" +
    "                                    you have no friend.\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/invite.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"community-tab\">\n" +
    "        <div class=\"community-search-bar\">\n" +
    "            <div class=\"secundary-filter-box\">\n" +
    "                <form class=\"form-inline\" role=\"form\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"filter-label\">FILTER BY</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"networkDropdown\"\n" +
    "                             selected-model=\"_network_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'NETWORK'}\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div dropdown-multiselect options=\"genderDropdown\"\n" +
    "                             selected-model=\"_gender_filter\"\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\n" +
    "                             translation-texts=\"{buttonDefaultText: 'GENDER'}\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <a class=\"filter-button\" data-ng-click=\"selectAll()\">select all</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <a class=\"filter-button\" data-ng-click=\"unSelectAll()\">unselect all</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group pull-right\">\n" +
    "                        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"FIND FRIENDS\" name=\"srch-term\"\n" +
    "                               id=\"srch-term\" ng-model=\"query\">\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div data-ng-if=\"isUserSocialConnected\"> <!-- profile connected -->\n" +
    "            <invite-nav-tabs>\n" +
    "                <viewall title=\"VIEW ALL\" type=\"social\">\n" +
    "                </viewall>\n" +
    "                <selected title=\"SELECTED\" type=\"social\">\n" +
    "                </selected>\n" +
    "                <unselected title=\"UNSELECTED\" type=\"social\">\n" +
    "                </unselected>\n" +
    "                <invitemail title=\"INVITE\" type=\"email\">\n" +
    "                </invitemail>\n" +
    "            </invite-nav-tabs>\n" +
    "        </div>\n" +
    "\n" +
    "        <div data-ng-if=\"!isUserSocialConnected\"> <!-- profile NOT connected -->\n" +
    "            <invite-nav-tabs>\n" +
    "                <invitesocial title=\"INVITE\" type=\"social\">\n" +
    "                </invitesocial>\n" +
    "                <invitemail title=\"INVITE\" type=\"email\">\n" +
    "                </invitemail>\n" +
    "            </invite-nav-tabs>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/invite/invite-nav-tabs.html',
    "<div class=\"community-invite-tabs\">\n" +
    "    <!-- nav tabs -->\n" +
    "    <ul class=\"nav nav-tabs invite-nav\">\n" +
    "        <li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">\n" +
    "            <div class=\"tab-container\">\n" +
    "                <a href=\"\" ng-click=\"select(pane)\">{{pane.title}}\n" +
    "                    <i class=\"fa\"\n" +
    "                       data-ng-class=\"{true:'fa-envelope-o', false:'fa-facebook-square'}[pane.type == 'email'] \"></i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"tab-content invite-tab\" ng-transclude>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- footer -->\n" +
    "    <div class=\"invite-footer\">\n" +
    "        <hr class=\"separator\">\n" +
    "        <div class=\"pull-right btn-container\">\n" +
    "            <a href=\"\" class=\"invite-selection\" data-ng-click=\"invite()\">\n" +
    "                <span>INVITE</span>\n" +
    "            </a>\n" +
    "            <!-- TO DO show this button only in invite by email -->\n" +
    "            <a href=\"\" class=\"cancel-selection\"\n" +
    "               data-ng-click=\"deleteEmail()\">\n" +
    "                <span>CANCEL</span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/invite/invitemail.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"invite-content\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"invite-by-email\">\n" +
    "                <p>Invite friends to Electronic Stars by email:</p>\n" +
    "\n" +
    "                <div class=\"inner-container\">\n" +
    "                    <!-- <div class=\"fuck\"> tab for scroolbar-->\n" +
    "                        <tags-input ng-model=\"emailList\" type=\"text\" add-on-enter=\"true\" placeholder=\"insert email\"\n" +
    "                                    add-on-space=\"true\">\n" +
    "                        </tags-input>\n" +
    "                    <!-- </div> -->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"invite-multiplier\">\n" +
    "                <img src=\"images/home/home-images-assassin.jpg\" alt=\"win star multiplier\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/invite/invitesocial.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\r" +
    "\n" +
    "    <div class=\"invite-content\">\r" +
    "\n" +
    "        <div ng-if='_app.is_logged()' class=\"sync-social-container\">\r" +
    "\n" +
    "            <img src=\"images/community/sync_social.jpg\">\r" +
    "\n" +
    "            <span>OH NO!</span>\r" +
    "\n" +
    "            <span>YOU HAVE NO FRIENDS TO INVITE. CLICK ON THE BUTTON BELOW TO SYNC YOUR SOCIAL NETWORKS AND INVITE FRIENDS TO ELECTRONIC STARS.</span>\r" +
    "\n" +
    "            <a>SYNC PROFILE</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div ng-if='_app.is_logged()' class=\"sync-social-container\">\r" +
    "\n" +
    "            <img src=\"images/community/sync_social.jpg\">\r" +
    "\n" +
    "            <span>OH NO!</span>\r" +
    "\n" +
    "            <span>YOU HAVE NO FRIENDS TO INVITE. CLICK ON THE BUTTON BELOW TO REGISTER IN OUR SOCIAL NETWORK AND ENJOY ELECTRONIC STARS.</span>\r" +
    "\n" +
    "            <a ui-sref=\"register\" class=\"btn btn-block btn-danger\" role=\"button\">\r" +
    "\n" +
    "                SIGN UP NOW!\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/invite/selected.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"invite-content\" scroll-bar>\n" +
    "        <div class=\"tab-scrollable-max-size\">\n" +
    "            <div class=\"span1 list-friends\" data-ng-repeat=\"user in selectedUsers\">\n" +
    "                <a data-ng-click=\"unselectUser(user)\"> <!--if is not true selectedUsers delete user -->\n" +
    "                    <div class=\"item-container\">\n" +
    "                        <img class=\"img-responsive\" data-ng-src=\"{{user.avatar}}\">\n" +
    "                        <span class=\"item-name\">{{user.username}}</span>\n" +
    "                        <span class=\"item-location\">{{user.provider}}</span>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</section>\n"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/invite/unselected.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"invite-content\" scroll-bar>\n" +
    "        <div class=\"tab-scrollable-max-size\">\n" +
    "            <div class=\"span1 list-friends\" data-ng-repeat=\"user in unselectedUsers\">\n" +
    "                <a data-ng-click=\"selectUser(user)\">\n" +
    "                    <div class=\"item-container\">\n" +
    "                        <img class=\"img-responsive\" data-ng-src=\"{{user.avatar}}\">\n" +
    "                        <span class=\"item-name\">{{user.username}}</span>\n" +
    "                        <span class=\"item-location\">{{user.provider}}</span>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n"
  );


  $templateCache.put('views/layouts/directives/community/community-nav/invite/viewall.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"invite-content\" scroll-bar>\n" +
    "        <div class=\"span1 list-friends\" data-ng-repeat=\"user in socialFriends \">\n" +
    "            <a data-ng-if=\"!user.isSelected\" data-ng-click=\"selectUser(user)\">\n" +
    "                <div data-ng-class=\"{true: 'item-selected'}[user.isSelected] \" class=\"item-container\">\n" +
    "                    <img class=\"img-responsive\" data-ng-src=\"{{user.avatar}}\">\n" +
    "                    <span class=\"item-name\">{{user.username}}</span>\n" +
    "                    <span class=\"item-location\">{{user.provider}}</span>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "            <a data-ng-if=\"user.isSelected\" data-ng-click=\"unselectUser(user)\">\n" +
    "                <div data-ng-class=\"{true: 'item-selected'}[user.isSelected] \" class=\"item-container\">\n" +
    "                    <img class=\"img-responsive\" data-ng-src=\"{{user.avatar}}\">\n" +
    "                    <span class=\"item-name\">{{user.username}}</span>\n" +
    "                    <span class=\"item-location\">{{user.provider}}</span>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n"
  );


  $templateCache.put('views/layouts/directives/community/whotofollow.html',
    "<section class=\"box-with-header who-to-follow\">\n" +
    "    <div class=\"box-header\">\n" +
    "        <i class=\"fa fa-users\"></i>\n" +
    "\n" +
    "        <h3>WHO TO FOLLOW</h3>\n" +
    "    </div>\n" +
    "    <div class=\"box-content\">\n" +
    "        <ul>\n" +
    "            <li data-ng-repeat=\"user in whoToFollowUsers track by $index\">\n" +
    "                <div class=\"user-community-info\">\n" +
    "                    <img class=\"user-circle\" ng-src=\"{{user.avatar}}\">\n" +
    "\n" +
    "                    <div class=\"user-container\">\n" +
    "                        <span class=\"user-name\">{{user.username}}</span>\n" +
    "                        <span class=\"user-level\">LEVEL {{user.level}}</span>\n" +
    "\n" +
    "                        <div class=\"user-multiplier\">\n" +
    "                            <div multiplier-same-size=\"{{user.multiplier}}\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <button class=\"user-follow-btn\" data-ng-click=\"followUser(user)\">follow</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/game-center-nav/gameCenterNavTabs.html',
    "<div class=\"games-center-box\">\n" +
    "    <!-- nav tab -->\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">\n" +
    "            <a class=\"game-tab\" ng-click=\"select(pane)\">{{pane.title}}</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"game-box-divider\"></div>\n" +
    "    <div class=\"tab-content md-col-8 game-box-content\" ng-transclude>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/game-center-nav/games.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"game-boxes\" ng-class=\"{'bigger':$first,'smaller':!$first}\" ng-repeat=\"game in games\">\r" +
    "\n" +
    "            <div class=\"box-header\" ng-show=\"$first\">\r" +
    "\n" +
    "                <i class=\"fa fa-gamepad\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h3>{{title}}</h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"box-content\">\r" +
    "\n" +
    "                <div class=\"game-container\">\r" +
    "\n" +
    "                    <div class=\"game-header\">\r" +
    "\n" +
    "                        <img src=\"/images/logos/logo_trans.png\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <img ng-src=\"{{game.box}}\" ui-sref=\"tournaments.list({game_slug: game.slug})\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"game-description\">\r" +
    "\n" +
    "                    {{game.name}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"box-footer\">\r" +
    "\n" +
    "                <div class=\"rating\">\r" +
    "\n" +
    "                    <rating ng-model=\"rate\" state-on=\"'fa fa-star'\" state-off=\"'fa fa-star-o'\" max=\"5\"\r" +
    "\n" +
    "                            readonly=\"false\"></rating>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"play\">\r" +
    "\n" +
    "                    <button class=\"btn btn-danger btn-sm btn-block\" ui-sref=\"tournaments.list({game_slug: game.slug})\">\r" +
    "\n" +
    "                        PLAY\r" +
    "\n" +
    "                        <i class=\"fa fa-chevron-right\"></i>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--<div class=\"game-boxes smaller\">-->\r" +
    "\n" +
    "        <!--<div class=\"box-content\">-->\r" +
    "\n" +
    "        <!--<div class=\"game-container\">-->\r" +
    "\n" +
    "        <!--<div class=\"game-header\">-->\r" +
    "\n" +
    "        <!--<img src=\"/images/logos/logo_trans.png\">-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--<img src=\"images/test/counter_strike.jpg\">-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"game-description\">-->\r" +
    "\n" +
    "        <!--Counter Strike GO-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"box-footer\">-->\r" +
    "\n" +
    "        <!--<div class=\"rating\">-->\r" +
    "\n" +
    "        <!--<rating ng-model=\"rate\" state-on=\"'fa fa-star'\" state-off=\"'fa fa-star-o'\" max=\"5\"-->\r" +
    "\n" +
    "        <!--readonly=\"true\"></rating>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"play\">-->\r" +
    "\n" +
    "        <!--<button class=\"btn btn-danger btn-sm btn-block\">-->\r" +
    "\n" +
    "        <!--PLAY-->\r" +
    "\n" +
    "        <!--<i class=\"fa fa-chevron-right\"></i>-->\r" +
    "\n" +
    "        <!--</button>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"game-boxes smaller\">-->\r" +
    "\n" +
    "        <!--<div class=\"box-content\">-->\r" +
    "\n" +
    "        <!--<div class=\"game-container\">-->\r" +
    "\n" +
    "        <!--<div class=\"game-header\">-->\r" +
    "\n" +
    "        <!--<img src=\"/images/logos/logo_trans.png\">-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--<img src=\"images/test/counter_strike.jpg\">-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"game-description\">-->\r" +
    "\n" +
    "        <!--Counter Strike GO-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"box-footer\">-->\r" +
    "\n" +
    "        <!--<div class=\"rating\">-->\r" +
    "\n" +
    "        <!--<rating ng-model=\"rate\" state-on=\"'fa fa-star'\" state-off=\"'fa fa-star-o'\" max=\"5\"-->\r" +
    "\n" +
    "        <!--readonly=\"true\"></rating>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"play\">-->\r" +
    "\n" +
    "        <!--<button class=\"btn btn-danger btn-sm btn-block\">-->\r" +
    "\n" +
    "        <!--PLAY-->\r" +
    "\n" +
    "        <!--<i class=\"fa fa-chevron-right\"></i>-->\r" +
    "\n" +
    "        <!--</button>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/game-center-nav/mostPlayed.html',
    "<section class=\"game-tab\" ng-show=\"selected\">\n" +
    "    most played\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/game-center-nav/myGames.html',
    "<section class=\"game-tab\" ng-show=\"selected\" >\n" +
    "    <div class=\"md-col-4\">\n" +
    "        my games\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/game-center-nav/recentlyPlayed.html',
    "<section class=\"tab-pane\" ng-show=\"selected\" id=\"recentlyplayed\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"game-boxes\" ng-class=\"{'bigger':$first,'smaller':!$first}\" ng-repeat=\"game in games\">\n" +
    "            <div class=\"box-header\">\n" +
    "                <i class=\"fa fa-gamepad\"></i>\n" +
    "\n" +
    "                <h3>{{title}}</h3>\n" +
    "            </div>\n" +
    "            <div class=\"box-content\">\n" +
    "                <div class=\"game-container\">\n" +
    "                    <div class=\"game-header\">\n" +
    "                        <img src=\"/images/logos/logo_trans.png\">\n" +
    "                    </div>\n" +
    "\n" +
    "                    <img src=\"images/test/counter_strike.jpg\">\n" +
    "                </div>\n" +
    "                <div class=\"game-description\">\n" +
    "                    Counter Strike GO\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"box-footer\">\n" +
    "                <div class=\"rating\">\n" +
    "                    <rating ng-model=\"rate\" state-on=\"'fa fa-star'\" state-off=\"'fa fa-star-o'\" max=\"5\"\n" +
    "                            readonly=\"true\"></rating>\n" +
    "                </div>\n" +
    "                <div class=\"play\">\n" +
    "                    <button class=\"btn btn-danger btn-sm btn-block\">\n" +
    "                        PLAY\n" +
    "                        <i class=\"fa fa-chevron-right\"></i>\n" +
    "                    </button>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <!--<div class=\"game-boxes smaller\">-->\n" +
    "        <!--<div class=\"box-content\">-->\n" +
    "        <!--<div class=\"game-container\">-->\n" +
    "        <!--<div class=\"game-header\">-->\n" +
    "        <!--<img src=\"/images/logos/logo_trans.png\">-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <!--<img src=\"images/test/counter_strike.jpg\">-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<div class=\"game-description\">-->\n" +
    "        <!--Counter Strike GO-->\n" +
    "        <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<div class=\"box-footer\">-->\n" +
    "        <!--<div class=\"rating\">-->\n" +
    "        <!--<rating ng-model=\"rate\" state-on=\"'fa fa-star'\" state-off=\"'fa fa-star-o'\" max=\"5\"-->\n" +
    "        <!--readonly=\"true\"></rating>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<div class=\"play\">-->\n" +
    "        <!--<button class=\"btn btn-danger btn-sm btn-block\">-->\n" +
    "        <!--PLAY-->\n" +
    "        <!--<i class=\"fa fa-chevron-right\"></i>-->\n" +
    "        <!--</button>-->\n" +
    "\n" +
    "        <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<div class=\"game-boxes smaller\">-->\n" +
    "        <!--<div class=\"box-content\">-->\n" +
    "        <!--<div class=\"game-container\">-->\n" +
    "        <!--<div class=\"game-header\">-->\n" +
    "        <!--<img src=\"/images/logos/logo_trans.png\">-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <!--<img src=\"images/test/counter_strike.jpg\">-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<div class=\"game-description\">-->\n" +
    "        <!--Counter Strike GO-->\n" +
    "        <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<div class=\"box-footer\">-->\n" +
    "        <!--<div class=\"rating\">-->\n" +
    "        <!--<rating ng-model=\"rate\" state-on=\"'fa fa-star'\" state-off=\"'fa fa-star-o'\" max=\"5\"-->\n" +
    "        <!--readonly=\"true\"></rating>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<div class=\"play\">-->\n" +
    "        <!--<button class=\"btn btn-danger btn-sm btn-block\">-->\n" +
    "        <!--PLAY-->\n" +
    "        <!--<i class=\"fa fa-chevron-right\"></i>-->\n" +
    "        <!--</button>-->\n" +
    "\n" +
    "        <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/game-vote-nav/recent-additions.html',
    "<section class=\"game-tab\" ng-show=\"selected\">\n" +
    "    recent additions\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/game-vote-nav/results.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"md-col-8 vote\">\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <div class=\"indicator-container\">\n" +
    "                <div class=\"circle-dotted\">\n" +
    "                    <span>{{val}}%</span>\n" +
    "                    <canvas height=\"125\" width=\"125\" class=\"donut-canvas\" gaugejs value=\"val\" max-value=\"100\"\n" +
    "                            animation-time=\"5000\"></canvas>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"game-container result-game-container\">\n" +
    "            <div class=\"box-cover\"></div>\n" +
    "                <img src=\"images/test/counter_strike.jpg\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <div class=\"indicator-container\">\n" +
    "                <div class=\"circle-dotted\">\n" +
    "                    <span>73%</span>\n" +
    "                    <canvas class=\"donut-canvas\" height=\"125\" width=\"125\" gaugejs value=\"73\" max-value=\"100\"\n" +
    "                            animation-time=\"5000\"></canvas>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"game-container result-game-container\">\n" +
    "            <div class=\"box-cover\"></div>\n" +
    "                <img src=\"images/test/dota2.jpg\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <div class=\"indicator-container\">\n" +
    "                <div class=\"circle-dotted\">\n" +
    "                    <span>25%</span>\n" +
    "                    <canvas class=\"donut-canvas\" height=\"125\" width=\"125\" gaugejs value=\"25\" max-value=\"100\"\n" +
    "                            animation-time=\"5000\"></canvas>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"game-container result-game-container\">\n" +
    "            <div class=\"box-cover\"></div>\n" +
    "                <img src=\"images/test/assassin-3.jpg\">\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <div class=\"indicator-container\">\n" +
    "                <div class=\"circle-dotted\">\n" +
    "                    <span>42%</span>\n" +
    "                    <canvas class=\"donut-canvas\" height=\"125\" width=\"125\" gaugejs value=\"42\" max-value=\"100\"\n" +
    "                            animation-time=\"5000\"></canvas>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"game-container result-game-container\">\n" +
    "            <div class=\"box-cover\"></div>\n" +
    "                <img src=\"images/test/rfactor2.jpg\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"red-box-bar\">\n" +
    "            <span>VOTING ENDS ON 4TH OCTOBER 2014</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/game-vote-nav/vote.html',
    "<section class=\"tab-pane\" ng-show=\"selected\">\n" +
    "    <div class=\"md-col-8 vote\">\n" +
    "\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <div class=\"game-container\">\n" +
    "                <div class=\"box-cover\"></div>\n" +
    "                <img src=\"images/test/counter_strike.jpg\">\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <span class=\"game-title\">FIFA 2015</span><br>\n" +
    "                <span class=\"game-description\">Loren ipsum dolorem sit amet</span>\n" +
    "            </div>\n" +
    "            <span class=\"little-box-red\">\n" +
    "                <a href=\"\">VOTE </a>\n" +
    "                <i class=\"fa fa-chevron-right\"></i>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <div class=\"game-container\">\n" +
    "                <div class=\"box-cover\"></div>\n" +
    "                <img src=\"images/test/rfactor2.jpg\">\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <span class=\"game-title\">rFactor</span><br>\n" +
    "                <span class=\"game-description\">Loren ipsum dolorem sit amet</span>\n" +
    "            </div>\n" +
    "            <span class=\"little-box-red\">\n" +
    "                <a href=\"\">VOTE </a>\n" +
    "                <i class=\"fa fa-chevron-right\"></i>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <div class=\"game-container\">\n" +
    "                <div class=\"box-cover\"></div>\n" +
    "                <img src=\"images/test/fifa2015.jpg\">\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <span class=\"game-title\">FIFA 2015</span><br>\n" +
    "                <span class=\"game-description\">Loren ipsum dolorem sit amet</span>\n" +
    "            </div>\n" +
    "            <span class=\"little-box-red\">\n" +
    "                <a href=\"\">VOTE </a>\n" +
    "                <i class=\"fa fa-chevron-right\"></i>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <div class=\"game-container\">\n" +
    "                <div class=\"box-cover\"></div>\n" +
    "                <img src=\"images/test/dota2.jpg\">\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <span class=\"game-title\">DOTA 2</span><br>\n" +
    "                <span class=\"game-description\">Loren ipsum dolorem sit amet</span>\n" +
    "            </div>\n" +
    "            <span class=\"little-box-red\">\n" +
    "                <a href=\"\">VOTE </a>\n" +
    "                <i class=\"fa fa-chevron-right\"></i>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"red-box-bar\">\n" +
    "            <span>VOTING ENDS ON 4TH OCTOBER 2014</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/game/game-loader.html',
    "<div class=\"loader-wrapper\">\n" +
    "    <canvas class=\"game-loader-canvas\" width=\"450\" height=\"292\"></canvas>\n" +
    "</div>\n"
  );


  $templateCache.put('views/layouts/directives/loader/loader.html',
    "<div class=\"electronic-loader\">\r" +
    "\n" +
    "    <div class=\"back-drop\"></div>\r" +
    "\n" +
    "    <div class=\"wrapper-el-loader\">\r" +
    "\n" +
    "        <div class=\"main_img_loader animated infinite pulse\"></div>\r" +
    "\n" +
    "        <div class=\"main_loader\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/multidropdown.html',
    "<div class=\"multiselect-parent btn-group dropdown-multiselect\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"dropdown-toggle\" ng-class=\"settings.buttonClasses\" ng-click=\"toggleDropdown()\">\r" +
    "\n" +
    "        {{getButtonText()}}&nbsp;<span class=\"caret\"></span></button>\r" +
    "\n" +
    "    <ul class=\"dropdown-menu dropdown-menu-form\"\r" +
    "\n" +
    "        ng-style=\"{display: open ? 'block' : 'none', height : settings.scrollable ? settings.scrollableHeight : 'auto' }\"\r" +
    "\n" +
    "        style=\"overflow: scroll\">\r" +
    "\n" +
    "        <li ng-hide=\"!settings.showCheckAll || settings.selectionLimit > 0\">\r" +
    "\n" +
    "            <a data-ng-click=\"selectAll()\">\r" +
    "\n" +
    "                <span class=\"glyphicon glyphicon-ok\"></span>\r" +
    "\n" +
    "                {{texts.checkAll}}\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        <li ng-show=\"settings.showUncheckAll\"><a data-ng-click=\"deselectAll();\"><span\r" +
    "\n" +
    "                class=\"glyphicon glyphicon-remove\"></span> {{texts.uncheckAll}}</a></li>\r" +
    "\n" +
    "        <li ng-hide=\"(!settings.showCheckAll || settings.selectionLimit > 0) && !settings.showUncheckAll\"\r" +
    "\n" +
    "            class=\"divider\"></li>\r" +
    "\n" +
    "        <li ng-show=\"settings.enableSearch\">\r" +
    "\n" +
    "            <div class=\"dropdown-header\"><input type=\"text\" class=\"form-control\" style=\"width: 100%;\"\r" +
    "\n" +
    "                                                ng-model=\"searchFilter\" placeholder=\"{{texts.searchPlaceholder}}\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li ng-show=\"settings.enableSearch\" class=\"divider\"></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <li ng-if=\"groups\" ng-repeat=\"option in orderedItems | filter: searchFilter\"\r" +
    "\n" +
    "            ng-show=\"getPropertyForObject(option, settings.groupBy) !== getPropertyForObject(orderedItems[$index - 1], settings.groupBy)\"\r" +
    "\n" +
    "            role=\"presentation\" class=\"dropdown-header\">{{ getGroupTitle(getPropertyForObject(option, settings.groupBy))\r" +
    "\n" +
    "            }}\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <li ng-if=\"!groups\" role=\"presentation\" ng-repeat=\"option in options | filter: searchFilter\">\r" +
    "\n" +
    "            <a role=\"menuitem\" tabindex=\"-1\" ng-if=\"checkboxes\"\r" +
    "\n" +
    "               ng-click=\"setSelectedItem(getPropertyForObject(option,settings.idProp))\">\r" +
    "\n" +
    "                <div class=\"checkbox\"><label><input class=\"checkboxInput\" type=\"checkbox\"\r" +
    "\n" +
    "                                                    ng-click=\"checkboxClick($event, getPropertyForObject(option,settings.idProp))\"\r" +
    "\n" +
    "                                                    ng-checked=\"isChecked(getPropertyForObject(option,settings.idProp))\"/>\r" +
    "\n" +
    "                    {{getPropertyForObject(option, settings.displayProp)}}</label>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "            <a role=\"menuitem\" tabindex=\"-1\" ng-if=\"!checkboxes\"\r" +
    "\n" +
    "               ng-click=\"setSelectedItem(getPropertyForObject(option,settings.idProp))\">\r" +
    "\n" +
    "            <span\r" +
    "\n" +
    "                    data-ng-class=\"{'glyphicon glyphicon-ok': isChecked(getPropertyForObject(option,settings.idProp))}\"></span>\r" +
    "\n" +
    "                {{getPropertyForObject(option, settings.displayProp)}}\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <li class=\"divider\" ng-show=\"settings.selectionLimit > 1\"></li>\r" +
    "\n" +
    "        <li role=\"presentation\" ng-show=\"settings.selectionLimit > 1\"><a role=\"menuitem\">{{selectedModel.length}}\r" +
    "\n" +
    "            {{texts.selectionOf}} {{settings.selectionLimit}} {{texts.selectionCount}}</a></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/profile-tooltip/index.html',
    "<div class=\"electronic-card\">\n" +
    "    <img class=\"cover\" ng-src=\"{{profile.cover}}\" alt=\"{{profile.username}}\">\n" +
    "\n" +
    "    <div class=\"profile-card-mini\">\n" +
    "        <a ui-sref=\"user.profile({id: profile.username})\" class=\"profile-card-mini-avatar\">\n" +
    "            <img ng-src=\"{{profile.avatar}}\"\n" +
    "                 alt=\"{{profile.username}}\">\n" +
    "        </a>\n" +
    "\n" +
    "        <div class=\"profile-card-mini-details\">\n" +
    "            <div class=\"profile-card-name\">\n" +
    "                <a class=\"profile-name\">\n" +
    "                    {{profile.username}}\n" +
    "                </a>\n" +
    "\n" +
    "                <div reputation user=\"\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"profile-card-last-game\">\n" +
    "                <span>Most played : Counter Strike Go</span>\n" +
    "            </div>\n" +
    "            <div class=\"profile-card-name-multiplier\">\n" +
    "                <div multiplier></div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"profile-card-info\">\n" +
    "        <div class=\"games-card-info\">\n" +
    "            <h2>Games</h2>\n" +
    "            <ul class=\"game-card-list\">\n" +
    "                <li ng-repeat=\"g in profile.level_games\">\n" +
    "                    <a>\n" +
    "                        <img ng-src=\"{{g.game.box}}\"/>\n" +
    "                        <span>Level {{g.lvl}}</span>\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"friends-card-info\">\n" +
    "            <h2>Friends (12)</h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div class=\"info\">-->\n" +
    "    <!--<div class=\"title\">-->\n" +
    "    <!--<a ui-sref=\"user.profile({id: user.username})\">{{user.username}}</a>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div class=\"description\">-->\n" +
    "    <!--<ul class=\"games-lvl\">-->\n" +
    "    <!--<li>-->\n" +
    "    <!--<a href=\"\">-->\n" +
    "    <!--<img src=\"/images/gaming/css/mini.jpg\"/>-->\n" +
    "    <!--<span class=\"lvl\">Level</span>-->\n" +
    "    <!--<br>-->\n" +
    "    <!--<span class=\"value\">01</span>-->\n" +
    "\n" +
    "    <!--</a>-->\n" +
    "    <!--</li>-->\n" +
    "    <!--</ul>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "    <div class=\"bottom\">\n" +
    "        <a href=\"\" class=\"btn  btn-social-action \">\n" +
    "            ADD FRIEND\n" +
    "        </a>\n" +
    "        <a href=\"\" rel=\"publisher\" class=\"btn  btn-social-action \">\n" +
    "            FOLLOW\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/layouts/directives/ranking/top-ranking.html',
    "<div>\r" +
    "\n" +
    "    <ul class=\"g-ranking\">\r" +
    "\n" +
    "        <li ng-repeat=\"p in users\">\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <h3>{{$index +1 |cardinal}}</h3>\r" +
    "\n" +
    "                <img ng-src=\"{{p.avatar}}\"\r" +
    "\n" +
    "                     class=\"img-circle connected-status\"/>\r" +
    "\n" +
    "                <span>{{p.username}} </span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/ranking/user-rank.html',
    "<div class=\"col-md-3 player\" ng-click=\"flip()\">\r" +
    "\n" +
    "    <player-front>\r" +
    "\n" +
    "        <div class=\"electronic-post-match-card\">\r" +
    "\n" +
    "            <img class=\"cover\" ng-src=\"{{_player.cover}}\" alt=\"{{_player.username}}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"player-info\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-3 col-xs-3 col-sm-3\">\r" +
    "\n" +
    "                        <img class=\"img-responsive avatar\" ng-src=\"{{_player.avatar}}\"\r" +
    "\n" +
    "                             alt=\"{{_player.username}}\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-3 col-xs-3 col-sm-3 description\">\r" +
    "\n" +
    "                        <div class=\"description-name\">\r" +
    "\n" +
    "                            <div class=\"name\">{{_player.username}}</div>\r" +
    "\n" +
    "                            <div reputation=\"{{_player.reputation}}\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"description-game\">\r" +
    "\n" +
    "                            <div class=\"name\">\r" +
    "\n" +
    "                                {{lvl.game.name}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"lvl\">\r" +
    "\n" +
    "                                {{lvl.lvl}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"description-progress\" tooltip=\"{{lvl.percent}}%\">\r" +
    "\n" +
    "                            <progressbar animate=\"false\" value=\"lvl.percent\" type=\"danger\"></progressbar>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"player-graph\">\r" +
    "\n" +
    "                <div class=\"graph\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </player-front>\r" +
    "\n" +
    "    <player-back>\r" +
    "\n" +
    "        <div class=\"electronic-post-match-card\">\r" +
    "\n" +
    "            <div class=\"player-stats\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-3 col-xs-3 col-sm-3\">\r" +
    "\n" +
    "                        <div class=\"stats\">\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-kill\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">KILLS</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.kills}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-kill-hs\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">HEADSHOTS</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.headshots}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-shot-fired\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">SHOTS FIRED</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.shots_fired}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-damage\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">DMG DONE</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.damage_done }}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-deaths\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">DEADS</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.deaths}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-bombs\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">PLANTED C4</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.defused_bombs}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-most-effective-weapon\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">TOP WEAPON</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.planted_bombs}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-3 col-xs-3 col-sm-3\">\r" +
    "\n" +
    "                        <div class=\"stats\">\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-kill-ratio\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">KILL RATIO</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.kill_ratio}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-average-kill-rate-respawn\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">HS RATIO</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.headshots_ratio}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-shot-hits\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">SHOTS HITS</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.shots_hit}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-accuracy-attack\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">ACCURACY</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.acuracy }}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-deaths-ratio\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">DEAD RATIO</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.death_ratio}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-bombs_defused\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">DEFUSED C4</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.defused_bombs}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <i class=\"esi-30  esi-best-map\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">TOP MAP</span>\r" +
    "\n" +
    "                                    <span class=\"value\">de_dust</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </player-back>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/social/facebook.html',
    "<section class=\"box-with-header\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <i class=\"fa fa-facebook-square\"></i>\r" +
    "\n" +
    "        <h3>FACEBOOK</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content facebook\" scroll-bar>\r" +
    "\n" +
    "        <div class=\"facebook_container\">\r" +
    "\n" +
    "             <!--   <span ng-repeat=\"fbItem in facebook\" on-repeat-done=\"ngRepeatFinished\" data=\"facebook_done\">-->\r" +
    "\n" +
    "            <span ng-repeat=\"fbItem in facebook\" >\r" +
    "\n" +
    "                    <span>\r" +
    "\n" +
    "                        <img class=\"profile\" ng-src=\"{{fbItem.picture}}\">\r" +
    "\n" +
    "                        <span class=\"title\">{{fbItem.from.name}}</span><br>\r" +
    "\n" +
    "                        <a class=\"link-text\" rel=\"external\" ng-href=\"{{fbItem.link}}\">\r" +
    "\n" +
    "                            <span ng-show=\"fbItem.story != 'undefined'\" class=\"text\">{{fbItem.story}}</span>\r" +
    "\n" +
    "                            <span ng-show=\"fbItem.message != 'undefined'\" class=\"text\">{{fbItem.message}}</span>\r" +
    "\n" +
    "                            <!-- <span ng-if=\"fbItem.link != 'undefined'\">\r" +
    "\n" +
    "                                 <img class=\" thumbnail\" ng-src=\"{{fbItem.link}}\">\r" +
    "\n" +
    "                             </span>-->\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <br>\r" +
    "\n" +
    "                        <span class=\"date\">{{fbItem.created_time | date:'shortTime'}}</span>\r" +
    "\n" +
    "                        <br>\r" +
    "\n" +
    "                        <div class=\"row comment\">\r" +
    "\n" +
    "                            <div class=\"col-md-3\"><!-- fb like box -->\r" +
    "\n" +
    "                                <span ng-if=\"fbItem.likes == undefined\">\r" +
    "\n" +
    "                                     <i class=\"fa fa-thumbs-o-up\"></i>\r" +
    "\n" +
    "                                    <span>be the first to like this</span>\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <span ng-if=\"fbItem.likes.data.length > 0\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-thumbs-o-up\"></i>\r" +
    "\n" +
    "                                    <span>{{fbItem.likes.data.length}} likes this</span>\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!-- to do you commented\r" +
    "\n" +
    "                                <div ng-if=\"fbItem.likes.data.length > 0\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-thumbs-o-up\"></i>\r" +
    "\n" +
    "                                    <span>you and {{fbItem.likes.data.length - 1}}others likes this</span>\r" +
    "\n" +
    "                                </div>-->\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-md-3 \">\r" +
    "\n" +
    "                                <span ng-if=\" fbItem.comments !== undefined\">\r" +
    "\n" +
    "                                   <i class=\"fa fa-comment\"></i>\r" +
    "\n" +
    "                                   <span>{{fbItem.comments.data.length}} comments</span>\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                                 <span ng-if=\"fbItem.comments == undefined\">\r" +
    "\n" +
    "                                       <i class=\"fa fa-comment\"></i>\r" +
    "\n" +
    "                                       <span>0 comments</span>\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <hr class=\"separator\">\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "               </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('views/layouts/directives/social/twitch.html',
    "<section class=\"box-with-header\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <i class=\"fa fa-twitch\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h3>TWITCH </h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content twitch\" scroll-bar>\r" +
    "\n" +
    "        <div class=\"col-md-6\">\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <!--<object type=\"application/x-shockwave-flash\"-->\r" +
    "\n" +
    "                    <!--height=\"250\"-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--id=\"live_embed_player_flash\"-->\r" +
    "\n" +
    "                    <!--data=\"http://www.twitch.tv/widgets/live_embed_player.swf?channel=machinima\"-->\r" +
    "\n" +
    "                    <!--bgcolor=\"#000000\">-->\r" +
    "\n" +
    "                <!--<param name=\"allowFullScreen\"-->\r" +
    "\n" +
    "                       <!--value=\"true\"/>-->\r" +
    "\n" +
    "                <!--<param name=\"allowScriptAccess\"-->\r" +
    "\n" +
    "                       <!--value=\"always\"/>-->\r" +
    "\n" +
    "                <!--<param name=\"allowNetworking\"-->\r" +
    "\n" +
    "                       <!--value=\"all\"/>-->\r" +
    "\n" +
    "                <!--<param name=\"movie\"-->\r" +
    "\n" +
    "                       <!--value=\"http://www.twitch.tv/widgets/live_embed_player.swf\"/>-->\r" +
    "\n" +
    "                <!--<param name=\"flashvars\"-->\r" +
    "\n" +
    "                       <!--value=\"hostname=www.twitch.tv&channel=machinima&auto_play=true&start_volume=25\"/>-->\r" +
    "\n" +
    "            <!--</object>-->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/social/twitter.html',
    "<section class=\"box-with-header\"><!-- parent is col-md-2 of conteiner -->\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <i class=\"fa fa-twitter\"></i>\r" +
    "\n" +
    "        <h3>TWEETS </h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content tweets\" scroll-bar>\r" +
    "\n" +
    "        <div class=\"tweets-container\">\r" +
    "\n" +
    "          <span ng-repeat=\"item in twitter\" on-repeat-done=\"ngRepeatFinished\" data=\"twitter_done\">\r" +
    "\n" +
    "                     <a ng-href=\"{{item.user.entities.url.urls.url}}\" alt=\"link to the post\">\r" +
    "\n" +
    "                         <img class=\"profile\" ng-src=\"{{item.user.profile_image_url}}\">\r" +
    "\n" +
    "                     </a>\r" +
    "\n" +
    "                     <div class=\"tweet-text-container col-md-offset-2\">\r" +
    "\n" +
    "                         <span class=\"tweet-name\">{{item.user.name}}</span><br><!-- twitter.js parse this dom. if you change it will not work -->\r" +
    "\n" +
    "                         <span class=\"tweet-text\">{{item.text}}</span><br>\r" +
    "\n" +
    "                         <span class=\"date\">{{item.created_at | date:'shortTime'}}</span>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                <hr class=\"separator\">\r" +
    "\n" +
    "          </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/stats/tournament-player-stats.html',
    "<div class=\"tournament-detail-stats\">\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-3\">\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <i class=\"fa fa-bar-chart\"></i>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">Kills</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.kills}}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <i class=\"fa fa-bar-chart\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">headshots</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.headshots}}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <i class=\"fa fa-bar-chart\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">deaths</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.deaths}}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <i class=\"fa fa-bar-chart\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">K/D Ratio</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.kill_ratio | number:2}}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <i class=\"fa fa-bar-chart\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">Accuracy</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.acuracy|number:2}}%</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-3\">\r" +
    "\n" +
    "                <div class=\"user-position\">\r" +
    "\n" +
    "                    <h3 ng-if=\"stats.position.win\">YOU WON</h3>\r" +
    "\n" +
    "                    <h4 ng-if=\"stats.position.win\">{{stats.position.prize}} POINTS!</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <h3 ng-if=\"!stats.position.win\" class=\"lost\">YOU LOST</h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"position-wrapper\">\r" +
    "\n" +
    "                    <div class=\"position\">\r" +
    "\n" +
    "                        YOU RANKED {{stats.position.ranked |cardinal}}\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"soldier-sprite\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/brackets.html',
    "<div class=\"brackets\">\n" +
    "\n" +
    "<ul class=\"bracket-round\" ng-repeat=\"r in rounds \">\n" +
    "<div class=\"round-identifier\">\n" +
    "    <div class=\"text\">\n" +
    "        Round {{$index +1}}\n" +
    "    </div>\n" +
    "</div>\n" +
    "<li ng-repeat=\"m in r\">\n" +
    "<div ng-if=\"m.teams.length == 2\">\n" +
    "    <div class=\"bracket-team\" ng-if=\"m.teams[0].players.length ==0\">\n" +
    "        <span class=\"arrow-alt\"></span>\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\"circle\"\n" +
    "                 src=\"/images/bgs/teams.png\" alt=\"user\">\n" +
    "            <h4>TEAM {{m.teams[0].name}}</h4>\n" +
    "            <h5>MATCH PENDING</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\">\n" +
    "            <div class=\"status\">\n" +
    "                PENDING\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                USER PENDING\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bracket-team registered\" ng-if=\"m.teams[0].players.length ==1\"\n" +
    "         ng-class=\"{'winner':m.winner==m.teams[0].id,'loss':m.winner!=m.teams[0].id && m.winner!=''}\"\n" +
    "         ng-init=\"p=m.teams[0].players[0]\">\n" +
    "        <span class=\"arrow-alt\"></span>\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\" circle\"\n" +
    "                 ng-src=\"{{p.user.avatar}}\">\n" +
    "            <h4>TEAM {{m.teams[0].name}}</h4>\n" +
    "            <h5>{{p.user.username}}</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\"\n" +
    "             ng-class=\"{'winner':m.winner==m.teams[0].id,'loss':m.winner!=m.teams[0].id && m.winner!=''}\">\n" +
    "            <div class=\"status\">\n" +
    "                LVL {{p.user.lvl}}\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                <span ng-if=\"m.winner==m.teams[0].id\">WINNER</span>\n" +
    "                <span ng-if=\"m.winner!=m.teams[0].id &&m.winner!=''\">ELIMINATED</span>\n" +
    "                <span ng-if=\"m.winner==''\">WAITING</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bracket-separator\">\n" +
    "        <br>\n" +
    "\n" +
    "        <div class=\"circle\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"bracket-team\" ng-if=\"m.teams[1].players.length ==0\">\n" +
    "        <span class=\"arrow\"></span>\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\" circle\"\n" +
    "                 src=\"/images/bgs/teams.png\" alt=\"user\">\n" +
    "            <h4>TEAM {{m.teams[1].name}}</h4>\n" +
    "            <h5>MATCH PENDING</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\">\n" +
    "            <div class=\"status\">\n" +
    "                PENDING\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                USER PENDING\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bracket-team registered\"\n" +
    "         ng-class=\"{'winner':m.winner==m.teams[1].id,'loss':m.winner!=m.teams[1].id && m.winner!=''}\"\n" +
    "         ng-if=\"m.teams[1].players.length ==1\"\n" +
    "         ng-init=\"p=m.teams[1].players[0]\">\n" +
    "        <span class=\"arrow\"></span>\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\" circle\"\n" +
    "                 ng-src=\"{{p.user.avatar}}\">\n" +
    "            <h4>TEAM {{m.teams[1].name}}</h4>\n" +
    "            <h5>{{p.user.username}}</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\"\n" +
    "             ng-class=\"{'winner':m.winner==m.teams[1].id,'loss':m.winner!=m.teams[1].id && m.winner!=''}\">\n" +
    "            <div class=\"status\">\n" +
    "                LVL {{p.user.lvl}}\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                <span ng-if=\"m.winner==m.teams[1].id\">WINNER</span>\n" +
    "                <span ng-if=\"m.winner!=m.teams[1].id && m.winner!=''\">ELIMINATED</span>\n" +
    "                <span ng-if=\"m.winner==''\">WAITING</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-if=\"m.teams.length == 0\">\n" +
    "    <div class=\"bracket-team\">\n" +
    "        <span class=\"arrow-alt\"></span>\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\" circle\"\n" +
    "                 src=\"/images/bgs/teams.png\" alt=\"user\">\n" +
    "            <h4>TEAM {{m.teams[0].name}}</h4>\n" +
    "            <h5>MATCH PENDING</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\">\n" +
    "            <div class=\"status\">\n" +
    "                PENDING\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                WAITING\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"bracket-separator\">\n" +
    "        <br>\n" +
    "\n" +
    "        <div class=\"circle\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"bracket-team\">\n" +
    "        <span class=\"arrow\"></span>\n" +
    "        <!--<span class=\"arrow-alt\"></span>-->\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\" circle\"\n" +
    "                 src=\"/images/bgs/teams.png\" alt=\"user\">\n" +
    "            <h4>TEAM {{m.teams[1].name}}</h4>\n" +
    "            <h5>MATCH PENDING</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\">\n" +
    "            <div class=\"status\">\n" +
    "                PENDING\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                WAITING\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-if=\"m.teams.length == 1\">\n" +
    "    <div class=\"bracket-team\" ng-if=\"m.teams[0].players.length ==0\">\n" +
    "        <span class=\"arrow-alt\"></span>\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\"circle\"\n" +
    "                 src=\"/images/bgs/teams.png\" alt=\"user\">\n" +
    "            <h4>TEAM {{m.teams[0].name}}</h4>\n" +
    "            <h5>MATCH PENDING</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\">\n" +
    "            <div class=\"status\">\n" +
    "                PENDING\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                USER PENDING\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"bracket-team registered\" ng-if=\"m.teams[0].players.length ==1\"\n" +
    "         ng-class=\"{'winner':m.winner==m.teams[0].id,'loss':m.winner!=m.teams[0].id && m.winner!=''}\"\n" +
    "         ng-init=\"p=m.teams[0].players[0]\">\n" +
    "        <span class=\"arrow-alt\"></span>\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\" circle\"\n" +
    "                 ng-src=\"{{p.user.avatar}}\">\n" +
    "            <h4>TEAM {{m.teams[0].name}}</h4>\n" +
    "            <h5>{{p.user.username}}</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\"\n" +
    "             ng-class=\"{'winner':m.winner==m.teams[0].id,'loss':m.winner!=m.teams[0].id && m.winner!=''}\">\n" +
    "            <div class=\"status\">\n" +
    "                LVL {{p.user.lvl}}\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                <span ng-if=\"m.winner==m.teams[0].id\">WINNER</span>\n" +
    "                <span ng-if=\"m.winner!=m.teams[0].id &&m.winner!=''\">ELIMINATED</span>\n" +
    "                <span ng-if=\"m.winner!=''\">WAITING</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"bracket-separator\">\n" +
    "        <br>\n" +
    "\n" +
    "        <div class=\"circle\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"bracket-team\">\n" +
    "        <span class=\"arrow\"></span>\n" +
    "        <!--<span class=\"arrow-alt\"></span>-->\n" +
    "\n" +
    "        <div class=\"bracket-team-content\">\n" +
    "            <img class=\" circle\"\n" +
    "                 src=\"/images/bgs/teams.png\" alt=\"user\">\n" +
    "            <h4>TEAM {{m.teams[1].name}}</h4>\n" +
    "            <h5>MATCH PENDING</h5>\n" +
    "        </div>\n" +
    "        <div class=\"bracket-team-footer\">\n" +
    "            <div class=\"status\">\n" +
    "                PENDING\n" +
    "            </div>\n" +
    "            <div class=\"members\">\n" +
    "                WAITING\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/tournament/lobby_nav.html',
    "<div class=\"tournament-option-box\">\r" +
    "\n" +
    "    <div class=\"options\">\r" +
    "\n" +
    "        <ul class=\"actions-menu\">\r" +
    "\n" +
    "            <li ng-if=\"is_logged()\">\r" +
    "\n" +
    "                <a ng-click=\"wallet()\">\r" +
    "\n" +
    "                    <i class=\"fel fel-fel_money_euro\"></i>\r" +
    "\n" +
    "                    <span class=\"title\" translate=\"COMMON.NAVIGATION.CASHIER\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                     </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-if=\"is_logged()\">\r" +
    "\n" +
    "                <a ng-click=\"registered_tournaments()\">\r" +
    "\n" +
    "                    <i class=\"fa fa-ticket\"></i>\r" +
    "\n" +
    "                    <span class=\"title\" translate=\"COMMON.NAVIGATION.TICKETS\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                     </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-class=\"{'active':menuItem=='1'}\">\r" +
    "\n" +
    "                <a ng-click=\"toggleMenu('1')\">\r" +
    "\n" +
    "                    <i class=\"fel fel-fel_games\"></i>\r" +
    "\n" +
    "                    <span class=\"title\" translate=\"COMMON.NAVIGATION.GAMES\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                     </span>\r" +
    "\n" +
    "                    <span class=\"arrow\"></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                    <div class=\"games-boxes\">\r" +
    "\n" +
    "                        <li ng-repeat=\"game in games\">\r" +
    "\n" +
    "                            <a ui-sref=\"tournaments.list({ game_slug: game.slug })\">\r" +
    "\n" +
    "                                <div class=\"game-box\">\r" +
    "\n" +
    "                                    <img ng-src=\"{{game.miniature}}\"/>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-bracket-match.html',
    "<div class=\"match match-{{round}}\" ng-click=\"show_match_detail(match)\" ng-class=\"{'finished':match.status=='FINISHED'}\">\r" +
    "\n" +
    "    <div tournament-bracket-team match=\"match\" round=\"round\" position=\"1\" current=\"current\" team=\"team_1\"\r" +
    "\n" +
    "         weight=\"weight\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div tournament-bracket-team match=\"match\" round=\"round\" position=\"2\" current=\"current\" team=\"team_2\"\r" +
    "\n" +
    "         weight=\"weight\"></div>\r" +
    "\n" +
    "    <div class=\"connector\" id=\"match_{{match.weight}}\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-bracket-team.html',
    "<div class=\"team\" ng-mouseover=\"team_on_hover(team)\" ng-mouseleave=\"team_on_reset()\"\r" +
    "\n" +
    "     ng-class=\"{'winner_t':round==0 &&team_info.result!=''}\">\r" +
    "\n" +
    "    <div class=\"overlay\" ng-if=\"team_info.result=='' && match.status=='FINISHED'\"></div>\r" +
    "\n" +
    "    <div ng-if=\"round==7\">\r" +
    "\n" +
    "            <span class=\"team-name\">\r" +
    "\n" +
    "                {{team_info.team_name}}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-if=\"round==6\">\r" +
    "\n" +
    "            <span class=\"team-name\">\r" +
    "\n" +
    "                {{team_info.team_name}}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        <span class=\"result\" ng-if=\"team_info.result!=''\">\r" +
    "\n" +
    "        WINNER\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-if=\"round==5\">\r" +
    "\n" +
    "        <div class=\"avatar-container\">\r" +
    "\n" +
    "            <div class=\"avatar\" back-img={{team_info.avatar}}></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"team-description\">\r" +
    "\n" +
    "            <span class=\"team-name\">\r" +
    "\n" +
    "           {{team_info.team_name}}\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "           <span class=\"result\" ng-if=\"team_info.result!=''\">\r" +
    "\n" +
    "        WINNER\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-if=\"round<5\">\r" +
    "\n" +
    "        <div class=\"avatar-container\">\r" +
    "\n" +
    "            <div class=\"avatar\" back-img={{team_info.avatar}}></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"team-description\">\r" +
    "\n" +
    "            <span class=\"team-name\">\r" +
    "\n" +
    "           {{team_info.team_name}}\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "            <span class=\"result\" ng-if=\"team_info.result!=''\">\r" +
    "\n" +
    "        WINNER\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-bracket-winner.html',
    "<div class=\"match match-{{round}}\">\r" +
    "\n" +
    "    <div tournament-bracket-team round=\"round\" position=\"1\" team=\"team\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-bracket.html',
    "<div class=\"ngBracket\" id=\"bracketRoot\">\r" +
    "\n" +
    "    <div class=\"singleElimination\">\r" +
    "\n" +
    "        <div class=\"description\">\r" +
    "\n" +
    "            <div ng-repeat=\"m in rounds\" class=\"round round-{{total_rounds - $index}}\" id=\"round-{{$index+1}}\">\r" +
    "\n" +
    "                <div class=\"roundHeader\">\r" +
    "\n" +
    "                    <span class=\"roundTitle\">Round {{ $index+1 }} </span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"round round-final\">\r" +
    "\n" +
    "                <div class=\"roundHeader\">\r" +
    "\n" +
    "                    <span class=\"roundTitle\">Winner</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"matches\" ng-init=\"max=total_rounds\">\r" +
    "\n" +
    "            {{total_rounds}}\r" +
    "\n" +
    "            <div ng-repeat=\"m in rounds\" class=\"round round-{{total_rounds - $index}}\"\r" +
    "\n" +
    "                 id=\"round-{{$index+1}}\" ng-init=\"round=total_rounds - $index;current=$index+1;\">\r" +
    "\n" +
    "                <div class=\"matchWrapper\" ng-repeat=\"match in m | orderBy:'weight'\" id=\"{{ match.id }}\">\r" +
    "\n" +
    "                    <div tournament-bracket-match match=\"match\" round=\"round\" current=\"current\" total=\"height\"\r" +
    "\n" +
    "                         weight=\"$index+1\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"round round-final\">\r" +
    "\n" +
    "                <div class=\"matchWrapper\" ng-init=\"round=0;current=total_rounds+1\">\r" +
    "\n" +
    "                    <div tournament-bracket-winner current=\"current\" team=\"team_winner\" total=\"height\" round=\"round\"\r" +
    "\n" +
    "                         id=\"winner\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-detail.html',
    "<div class=\"tournament-detail-info\">\r" +
    "\n" +
    "    <div class=\"details\">\r" +
    "\n" +
    "        <ul class=\"tournament-detail-menu\">\r" +
    "\n" +
    "            <li ng-class=\"{'active':menuItem=='1'}\">\r" +
    "\n" +
    "                <a ng-click=\"toggleMenu('1')\">\r" +
    "\n" +
    "                    <i class=\"fa fa-square\"></i>\r" +
    "\n" +
    "                                <span class=\"title\" translate=\"LOBBY.RULES.MAP\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                    <span class=\"arrow\"></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                    <li ng-repeat=\"map in tournament.maps\">\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"map\">\r" +
    "\n" +
    "                                <img class=\"img-responsive\" ng-src=\"{{map.miniature}}\"/>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-class=\"{'active':menuItem=='2'}\">\r" +
    "\n" +
    "                <a ng-click=\"toggleMenu('2')\">\r" +
    "\n" +
    "                    <i class=\"fa fa-square\"></i>\r" +
    "\n" +
    "                    <span class=\"title\" translate=\"LOBBY.RULES.RULES\"></span>\r" +
    "\n" +
    "                    <span class=\"arrow\"></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div class=\"title\" translate=\"LOBBY.RULES.REGISTRATION_PRIZE\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                {{tournament.register_amount|number:2}} <i class=\"\"\r" +
    "\n" +
    "                                                                           ng-class=\"{'fel fel-fel_money_electornic':tournament.cash_type=='FAKE_CASH','fel fel-fel_money_euro':tournament.cash_type=='REAL_CASH'}\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div class=\"title\" translate=\"LOBBY.RULES.TOTAL_PLAYERS\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                {{tournament.config.type.num_players * tournament.config.type.num_teams}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div class=\"title\" translate=\"LOBBY.RULES.TOTAL_SETS\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                {{tournament.config.matches_num}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div class=\"title\" translate=\"LOBBY.RULES.TOTAL_ROUNDS\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                {{tournament.config.rounds_num}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div class=\"title\" translate=\"LOBBY.RULES.ROUND_TIME\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                {{tournament.config.round_time}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div class=\"title\" translate=\"LOBBY.RULES.BUYING_TIME\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                {{tournament.config.freeze_time}} {{'LOBBY.LABEL.SECONDS'|translate}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div class=\"title\" translate=\"LOBBY.RULES.TIME_TO_ENTER\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                {{tournament.config.secs_to_validate_match/60}} {{'LOBBY.LABEL.MINUTES'|translate}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <button class=\"btn btn-lg btn-danger\" ng-click=\"show_rules()\"\r" +
    "\n" +
    "                                        translate=\"LOBBY.RULES.VIEW_EXTENDED_RULES\"></button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <li ng-class=\"{'active':menuItem=='3'}\">\r" +
    "\n" +
    "                <a class=\"prize\" ng-click=\"toggleMenu('3')\">\r" +
    "\n" +
    "                    <i class=\"fa fa-trophy\"></i>\r" +
    "\n" +
    "                                <span class=\"title\" translate=\"LOBBY.RULES.GRAND_PRIZE\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                    <span class=\"prize\">{{tournament.public_prize | number:2}} <i class=\"\"\r" +
    "\n" +
    "                                                                                  ng-class=\"{'fel fel-fel_money_electornic':tournament.cash_type=='FAKE_CASH','fel fel-fel_money_euro':tournament.cash_type=='REAL_CASH'}\"></i></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                    <li ng-repeat=\"prize in tournament.pool_prizes\">\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <div class=\"title\">{{prize.position|cardinal}} {{'LOBBY.RULES.POSITION'|translate}}</div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                {{prize.type.amount|number:2}} <i class=\"\"\r" +
    "\n" +
    "                                                                  ng-class=\"{'fel fel-fel_money_electornic':prize.type_cls=='FAKE_CASH','fel fel-fel_money_euro':prize.type_cls=='REAL_CASH'}\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-featured.html',
    "<slick dots='true' arrows='true' infinite=true class=\"slide\" slidesToShow=\"1\"\r" +
    "\n" +
    "       fade=\"true\"\r" +
    "\n" +
    "       autoplay=\"true\"\r" +
    "\n" +
    "       autoplaySpeed=\"3500\">\r" +
    "\n" +
    "    <div ng-repeat=\"t in tournaments\" class=\"advert\">\r" +
    "\n" +
    "        <img src=\"images/banners/ES_death_match_tournament_banner_715x230_cs1.jpg\" class=\"img-responsive\"/>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</slick>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-header.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-4 col-xs-4\">\r" +
    "\n" +
    "        <!--<h3>-->\r" +
    "\n" +
    "            <!--{{current.name}}-->\r" +
    "\n" +
    "            <!--<span>({{current.registered_players}}/{{current.config.type.num_players * current.config.type.num_teams}})</span>-->\r" +
    "\n" +
    "        <!--</h3>-->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-2 col-xs-2\" ng-if=\"current.status == 'REGISTRATION'\">\r" +
    "\n" +
    "        <div class=\"time-left\">\r" +
    "\n" +
    "            ({{current.registered_players}}/{{current.config.type.num_players\r" +
    "\n" +
    "            *current.config.type.num_teams}})\r" +
    "\n" +
    "            {{'LOBBY.LABEL.PLAYERS'|translate}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"join\" ng-if=\"current.status == 'REGISTRATION'\">\r" +
    "\n" +
    "            <button class=\"btn btn-block btn-lg btn-danger\" ng-click=\"register()\"\r" +
    "\n" +
    "                    ng-if=\"registered.id!=current.id\">\r" +
    "\n" +
    "                {{'LOBBY.BUTTON.REGISTER_GAME'|translate}} <i class=\"fa fa-angle-right\"></i>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button class=\"btn btn-block btn-lg btn-danger\" ng-click=\"unregister()\"\r" +
    "\n" +
    "                    ng-if=\"registered.id==current.id\">\r" +
    "\n" +
    "                {{'LOBBY.BUTTON.UNREGISTER_GAME'|translate}} <i class=\"fa fa-angle-right\"></i>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-2 col-xs-2\" ng-if=\"current.status == 'IN_PROGRESS'\">\r" +
    "\n" +
    "        <div class=\"time-elapsed\" ng-if=\"registered.id !=current.id\">\r" +
    "\n" +
    "            <p translate=\"LOBBY.LABEL.TIME_ELAPSED\"></p>\r" +
    "\n" +
    "            <timer start-time=\"started\">{{hhours}}:{{mminutes}}:{{sseconds}}</timer>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"time-elapsed\" ng-if=\"registered.id ==current.id && show_time\">\r" +
    "\n" +
    "            <div ng-if=\"start_at\">\r" +
    "\n" +
    "                <p translate=\"LOBBY.LABEL.NEXT_MATCH_TIME\"></p>\r" +
    "\n" +
    "                <timer end-time=\"start_at\">{{mminutes}}:{{sseconds}}</timer>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"!start_at\">\r" +
    "\n" +
    "                <p translate=\"LOBBY.LABEL.WAITING_ROUND_FINISH\"></p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"reconnect\" ng-if=\"registered.id ==current.id && launched\" ng-click=\"launch()\">\r" +
    "\n" +
    "            {{'LOBBY.BUTTON.RECONNECT'|translate}} <i class=\"fa fa-angle-right\"></i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-2 col-xs-2\" ng-if=\"current.status == 'FINISHED'\">\r" +
    "\n" +
    "        <div class=\"time-elapsed\">\r" +
    "\n" +
    "            <p translate=\"LOBBY.LABEL.TIME_FINISHED\"></p>\r" +
    "\n" +
    "            <span>{{finished| date:'HH:mm'}}</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-last-score.html',
    "<div class=\"tournament-shot-box\">\r" +
    "\n" +
    "    <div class=\"row\" ng-if=\"tournaments!=null\">\r" +
    "\n" +
    "        <div class=\"col-xs-2 col-sm-2 col-md-2\">\r" +
    "\n" +
    "            <div class=\"shot-title\">\r" +
    "\n" +
    "                <img src=\"images/logos/shotter_logo.png\" class=\"img-responsive\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h3 class=\"scoreboard\" translate=\"LOBBY.TITLES.SCOREBOARD\"></h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-4 col-sm-4 col-md-4\">\r" +
    "\n" +
    "            <div class=\"shot-info-scoreboard\">\r" +
    "\n" +
    "                <div ng-repeat=\"t in scores\">\r" +
    "\n" +
    "                    <div class=\"tournament-wrapper\">\r" +
    "\n" +
    "                        <span class=\"title\">#{{t.name}} : </span>\r" +
    "\n" +
    "                        <span>\r" +
    "\n" +
    "                            <a ng-repeat=\"p in t.ranking\" ui-sref=\"user.profile({id: p.username})\">\r" +
    "\n" +
    "                                <span class=\"position\">{{p.position |cardinal}}</span><span class=\"user\"> {{p.username}} -</span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-loader.html',
    "<div class=\"tournament-detail-loader\" ng-show=\"init\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6 text-center\">\r" +
    "\n" +
    "            <div class=\"loader-wrapper\">\r" +
    "\n" +
    "                <canvas id=\"game-loader-canvas\" width=\"450\" height=\"292\"></canvas>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6 \">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"registered_teams transparent\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-3\" ng-repeat=\"t in match.teams\" ng-if=\"match.teams.length > 1\">\r" +
    "\n" +
    "                        <ul class=\"teams full\">\r" +
    "\n" +
    "                            <li class=\"col-md-6\" ng-init=\"outerIndex = $index\">\r" +
    "\n" +
    "                                <div class=\"result\" ng-class=\"{'pull-left':outerIndex==1,'pull-right':outerIndex==0}\"\r" +
    "\n" +
    "                                     ng-repeat=\"team in match_detail.ranking\" ng-if=\"team.team.id == t.id\">\r" +
    "\n" +
    "                                    <div class=\"total-rounds-win \"\r" +
    "\n" +
    "                                         ng-class=\"{'pull-left':outerIndex==1,'pull-right':outerIndex==0}\">\r" +
    "\n" +
    "                                        {{team.t_wins + team.ct_wins}}\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"round-sets\"\r" +
    "\n" +
    "                                         ng-class=\"{'pull-left':outerIndex==1,'pull-right':outerIndex==0}\">\r" +
    "\n" +
    "                                        <div class=\"round\">\r" +
    "\n" +
    "                                            <img src=\"/images/tournament/csgo/teams/terrorist.png\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"value\">\r" +
    "\n" +
    "                                                {{team.t_wins}}\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"round\">\r" +
    "\n" +
    "                                            <img src=\"/images/tournament/csgo/teams/counter.png\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"value\">\r" +
    "\n" +
    "                                                {{team.ct_wins}}\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li class=\"col-md-6\" ng-repeat=\"p in t.players\">\r" +
    "\n" +
    "                                <div class=\"bracket-team loss\">\r" +
    "\n" +
    "                                    <div class=\"bracket-team-content\">\r" +
    "\n" +
    "                                        <img class=\" circle\"\r" +
    "\n" +
    "                                             ng-src=\"{{p.user.avatar}}\" alt=\"user\">\r" +
    "\n" +
    "                                        <h4>{{'LOBBY.LABEL.TEAM'|translate}} {{t.name}}</h4>\r" +
    "\n" +
    "                                        <h5>{{p.user.username}}</h5>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"bracket-team-footer loss\">\r" +
    "\n" +
    "                                        <div class=\"status\">\r" +
    "\n" +
    "                                            LVL {{p.lvl}}\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"members\">\r" +
    "\n" +
    "                                            {{'LOBBY.LABEL.PLAYING'|translate}}\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-offset-1 col-md-4\" ng-if=\"match.teams.length == 1\">\r" +
    "\n" +
    "                        <ul class=\"teams full\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <li class=\"col-md-offset-1 col-md-4\" ng-repeat=\"p in match.teams[0].players\">\r" +
    "\n" +
    "                                <div class=\"bracket-team loss\">\r" +
    "\n" +
    "                                    <div class=\"bracket-team-content\">\r" +
    "\n" +
    "                                        <img class=\" circle\"\r" +
    "\n" +
    "                                             ng-src=\"{{p.user.avatar}}\" alt=\"user\">\r" +
    "\n" +
    "                                        <h4>{{p.user.username}}</h4>\r" +
    "\n" +
    "                                        <h5><br></h5>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"bracket-team-footer loss\">\r" +
    "\n" +
    "                                        <div class=\"status\">\r" +
    "\n" +
    "                                            LVL {{p.lvl}}\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"members\">\r" +
    "\n" +
    "                                            {{'LOBBY.LABEL.PLAYING'|translate}}\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-match-round-detail.html',
    "<div class=\"tournament-match-round-details\">\r" +
    "\n" +
    "    <div class=\"wrapper-details\" ng-if=\"match!=null\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\">\r" +
    "\n" +
    "                <div class=\"team-wrap winner\" ng-repeat=\"team in match.ranking\"\r" +
    "\n" +
    "                     ng-class=\"{'winner':team.wins==1,'losser':team.wins==0}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"team-avatar\" ng-class=\"{'one':team.team.name=='1','two':team.team.name=='2'}\"></div>\r" +
    "\n" +
    "                    <div class=\"total-rounds-win\">\r" +
    "\n" +
    "                        {{team.t_wins + team.ct_wins}}\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"round-sets\">\r" +
    "\n" +
    "                        <div class=\"round\">\r" +
    "\n" +
    "                            <img src=\"/images/tournament/csgo/teams/terrorist.png\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"value\">\r" +
    "\n" +
    "                                {{team.t_wins}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"round\">\r" +
    "\n" +
    "                            <img src=\"/images/tournament/csgo/teams/counter.png\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"value\">\r" +
    "\n" +
    "                                {{team.ct_wins}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"top-player\" ng-if=\"!match.invalid\">\r" +
    "\n" +
    "                        <h4>MEJOR JUGADOR</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"player\" ng-if=\"team.wins==1\">\r" +
    "\n" +
    "                            <img ng-src=\"{{winner.player.user.avatar}}\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"player\" ng-if=\"team.wins==0\">\r" +
    "\n" +
    "                            <img ng-src=\"{{losser.player.user.avatar}}\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"team-status\">\r" +
    "\n" +
    "                        <div class=\"team-name\">\r" +
    "\n" +
    "                            {{'LOBBY.LABEL.TEAM'|translate}} {{team.team.name}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"position\">\r" +
    "\n" +
    "                            <span ng-if=\"team.wins==1\">\r" +
    "\n" +
    "                                <i class=\"fa fa-thumbs-up\"></i> {{'LOBBY.LABEL.WINNER'|translate}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            <span ng-if=\"team.wins==0 && !match.invalid\">\r" +
    "\n" +
    "                                <i class=\"fa fa-thumbs-down\"></i> {{'LOBBY.LABEL.LOSSER'|translate}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                             <span ng-if=\"team.wins==0 && match.invalid\">\r" +
    "\n" +
    "                                <i class=\"fa fa-meh-o\"></i> {{'LOBBY.LABEL.DRAW'|translate}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-match.html',
    "<div>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-3 col-xs-3\" ng-repeat=\"team in match.teams\" ng-if=\"match.status !='FINISHED'\">\r" +
    "\n" +
    "            <div class=\"tournament-team-detail-box\" ng-class=\"{second_team:$index==1}\">\r" +
    "\n" +
    "                <div class=\"team-header\">\r" +
    "\n" +
    "                    <h3>Team {{team.name}}</h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"table-box\">\r" +
    "\n" +
    "                    <table class=\"table table-match\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <th>R</th>\r" +
    "\n" +
    "                            <th>PLAYER NAME</th>\r" +
    "\n" +
    "                            <th>L</th>\r" +
    "\n" +
    "                            <th class='hidden-xs'>M</th>\r" +
    "\n" +
    "                            <th>S</th>\r" +
    "\n" +
    "                            <th>PING</th>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                        <tr ng-repeat=\"p in team.players\">\r" +
    "\n" +
    "                            <td class=\"rank\">-</td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <div mini-user-resum user=\"p.user\"></div>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"lvl\">{{p.lvl}}</td>\r" +
    "\n" +
    "                            <td class='hidden-xs'>\r" +
    "\n" +
    "                                <div reputation=\"{{p.user.reputation}}\"></div>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"score\">-</td>\r" +
    "\n" +
    "                            <td>{{p.latency}}</td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-md-3 col-xs-3\" ng-repeat=\"r in match.ranking\" ng-if=\"match.status =='FINISHED'\">\r" +
    "\n" +
    "            <div class=\"tournament-team-detail-box\" ng-class=\"{second_team:$index==1}\">\r" +
    "\n" +
    "                <div class=\"overlay\" ng-if=\"r.position == 2\"></div>\r" +
    "\n" +
    "                <div class=\"team-header\" ng-class=\"{winner:r.position == 1}\">\r" +
    "\n" +
    "                    <h3>Team {{r.team.name}}</h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"table-box\">\r" +
    "\n" +
    "                    <table class=\"table table-match\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <th>R</th>\r" +
    "\n" +
    "                            <th>PLAYER</th>\r" +
    "\n" +
    "                            <th>L</th>\r" +
    "\n" +
    "                            <th>M</th>\r" +
    "\n" +
    "                            <th>S</th>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                        <tr ng-repeat=\"p in r.rank_players\">\r" +
    "\n" +
    "                            <td class=\"rank\">{{p.position | cardinal}}</td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <div mini-user-resum user=\"p.player.user\"></div>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"lvl\">{{p.player.lvl}}</td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <div reputation=\"{{p.player.user.reputation}}\"></div>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"score\">{{p.points|number:2}}</td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-post-match-user.html',
    "<div class=\"col-md-3 player\" ng-click=\"flip()\">\r" +
    "\n" +
    "    <player-front>\r" +
    "\n" +
    "        <div class=\"electronic-post-match-card\">\r" +
    "\n" +
    "            <img class=\"cover\" ng-src=\"{{_player.player.user.cover}}\" alt=\"{{_player.player.user.username}}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"player-info\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-3\">\r" +
    "\n" +
    "                        <img class=\"img-responsive avatar\" ng-src=\"{{_player.player.user.avatar}}\"\r" +
    "\n" +
    "                             alt=\"{{_player.player.user.username}}\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-3 description\">\r" +
    "\n" +
    "                        <div class=\"description-name\">\r" +
    "\n" +
    "                            <div class=\"name\">{{_player.player.user.username}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div reputation=\"{{_player.player.user.reputation}}\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"description-game\">\r" +
    "\n" +
    "                            <div class=\"name\">\r" +
    "\n" +
    "                                {{user_level.game.name}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"lvl\">\r" +
    "\n" +
    "                                {{user_level.lvl}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"description-progress\" tooltip=\"{{user_level.percent}}%\">\r" +
    "\n" +
    "                            <progressbar animate=\"false\" value=\"user_level.percent\" type=\"danger\"></progressbar>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"player-graph\">\r" +
    "\n" +
    "                <div class=\"graph\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </player-front>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <player-back>\r" +
    "\n" +
    "        <div class=\"electronic-post-match-card\">\r" +
    "\n" +
    "            <div class=\"player-stats\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-3 col-xs-3 col-sm-3\">\r" +
    "\n" +
    "                        <div class=\"stats\">\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-kill\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">KILLS</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.kills}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-kill-hs\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">HEADSHOTS</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.headshots}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-shot-fired\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">SHOTS FIRED</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.shots_fired}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-damage\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">DMG DONE</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.damage_done }}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-deaths\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">DEADS</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.deaths}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-bombs\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">PLANTED C4</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.defused_bombs}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-most-effective-weapon\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">TOP WEAPON</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.planted_bombs}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-3 col-xs-3 col-sm-3\">\r" +
    "\n" +
    "                        <div class=\"stats\">\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-kill-ratio\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">KILL RATIO</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.kill_ratio}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-average-kill-rate-respawn\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">HS RATIO</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.headshots_ratio}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-shot-hits\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">SHOTS HITS</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.shots_hit}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-accuracy-attack\"></div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">ACCURACY</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.acuracy }}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-deaths-ratio\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">DEAD RATIO</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.death_ratio}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-bombs_defused\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">DEFUSED C4</span>\r" +
    "\n" +
    "                                    <span class=\"value\">{{stats.defused_bombs}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"line\">\r" +
    "\n" +
    "                                <i class=\"esi-30  esi-best-map\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <span class=\"title\">TOP MAP</span>\r" +
    "\n" +
    "                                    <span class=\"value\">de_dust</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </player-back>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-post-match.html',
    "<div class=\"post-match-box\">\r" +
    "\n" +
    "    <div class=\"header\">\r" +
    "\n" +
    "        <h3>{{tournament.name}} <span>POST MATCH RANKING</span></h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\" ng-if=\"single\">\r" +
    "\n" +
    "        <div ng-repeat=\"rank in tournament.ranking | orderBy:'position'\" tournament-post-match-player player=\"rank\"\r" +
    "\n" +
    "             tournament=\"tournament\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\" ng-if=\"!single\">\r" +
    "\n" +
    "        <div tournament-post-tournament tournament=\"tournament\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-post-tournament.html',
    "<div class=\"table-box col-md-6\">\r" +
    "\n" +
    "    <table class=\"table table-ranking\">\r" +
    "\n" +
    "        <thead>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th style=\"width: 18%\">RANK</th>\r" +
    "\n" +
    "            <th style=\"width: 45%\">PLAYER</th>\r" +
    "\n" +
    "            <th style=\"width: 10%\">LEVEL</th>\r" +
    "\n" +
    "            <th>REPORT</th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        </thead>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "    <div class=\"table-content-scrollable\" scroll-bar>\r" +
    "\n" +
    "        <table class=\"table table-ranking\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "            <tr ng-repeat=\"t in tournament.ranking| orderBy:'position'\"\r" +
    "\n" +
    "                ng-class=\"{'me':me.id == t.rank_players[0].player.user.id}\" ng-if=\"type=='T'\">\r" +
    "\n" +
    "                <td class=\"red\" style=\"width: 18%\">{{t.position | cardinal}}</td>\r" +
    "\n" +
    "                <td style=\"width: 45%\">\r" +
    "\n" +
    "                    <div mini-user-resum user=\"t.rank_players[0].player.user\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div reputation=\"4\" class=\"pull-right\"></div>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td style=\"width: 10%\">{{t.rank_players[0].player.lvl}}1</td>\r" +
    "\n" +
    "                <td>\r" +
    "\n" +
    "                    <button class=\"btn btn-danger\" ng-if=\"me.id != t.rank_players[0].player.user.id\">REPORT</button>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "            <tr ng-repeat=\"t in tournament.ranking[0].rank_players| orderBy:'position'\"\r" +
    "\n" +
    "                ng-class=\"{'me':me.id == t.player.user.id}\" ng-if=\"type=='DM'\">\r" +
    "\n" +
    "                <td class=\"red\" style=\"width: 18%\">{{t.position | cardinal}}</td>\r" +
    "\n" +
    "                <td style=\"width: 45%\">\r" +
    "\n" +
    "                    <div mini-user-resum user=\"t.player.user\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div reputation=\"{{t.player.user.reputation}}\" class=\"pull-right\"></div>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td style=\"width: 10%\">{{t.player.lvl}}</td>\r" +
    "\n" +
    "                <td>\r" +
    "\n" +
    "                    <button class=\"btn btn-danger\" ng-if=\"me.id != t.player.user.id\">REPORT</button>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-prizes.html',
    "<div class=\"tournament-prizes\">\r" +
    "\n" +
    "    <div class=\"prizes-list\" ng-show=\"prize_details\">\r" +
    "\n" +
    "        <h2>\r" +
    "\n" +
    "            <i class=\"fa fa-trophy\"></i>\r" +
    "\n" +
    "        </h2>\r" +
    "\n" +
    "        <ul class=\"prize-ul\">\r" +
    "\n" +
    "            <li ng-repeat=\"p in tournament.pool_prizes | orderBy:'position'\">\r" +
    "\n" +
    "                <div class=\"position\">{{p.position |cardinal}} PLACE</div>\r" +
    "\n" +
    "                <div class=\"prize-position\"> {{p.amount|number:2}}\r" +
    "\n" +
    "                    <i ng-class=\"{'fel fel-fel_money_electornic':tournament.cash_type=='FAKE_CASH','fel fel-fel_money_euro':tournament.cash_type=='REAL_CASH'}\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"prize-detail\">\r" +
    "\n" +
    "        <div class=\"prize-text\">\r" +
    "\n" +
    "            <h2>{{tournament.name}}</h2>\r" +
    "\n" +
    "            <h3>GRAND CASH PRIZE</h3>\r" +
    "\n" +
    "            <h1>\r" +
    "\n" +
    "                {{champion.amount|number:2}}\r" +
    "\n" +
    "                <i ng-class=\"{'fel fel-fel_money_electornic':tournament.cash_type=='FAKE_CASH','fel fel-fel_money_euro':tournament.cash_type=='REAL_CASH'}\"></i>\r" +
    "\n" +
    "            </h1>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"prize-details\">\r" +
    "\n" +
    "            <button class=\"btn btn-prize pull-right\" ng-click=\"show_prize_detail()\">\r" +
    "\n" +
    "                <span>VIEW FULL PRIZE LIST</span>\r" +
    "\n" +
    "                <i class=\"fa fa-chevron-right\"></i>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-stats.html',
    "<div class=\"tournament-detail-stats\" ng-if=\"stats\">\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-3\">\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <div class=\" esi-30 esi-total-kill\"></div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">Kills</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.kills}}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <div class=\" esi-30 esi-total-hs\"></div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">headshots</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.headshots}}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <div class=\" esi-30 esi-total-deaths\"></div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">deaths</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.deaths}}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <div class=\" esi-30 esi-average-kill-rate-respawn\"></div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">K/D </span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.kill_dead_ratio | number:2}}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <div class=\" esi-30 esi-accuracy-attack\"></div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <span class=\"title\">Acurracy</span>\r" +
    "\n" +
    "                        <span class=\"value\">{{stats.acuracy|number:2}}%</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-3\">\r" +
    "\n" +
    "                <div class=\"user-position\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <h3 ng-if=\"stats.position.win\">{{'LOBBY.LABEL.YOU_WON'|translate}}</h3>\r" +
    "\n" +
    "                    <h4 ng-if=\"stats.position.win\">{{stats.position.prize.amount}}\r" +
    "\n" +
    "                        <i ng-class=\"{'fel fel-fel_money_electornic':stats.position.prize.type=='FAKE_CASH','fel fel-fel_money_euro':stats.position.prize.type=='REAL_CASH'}\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <h3 ng-if=\"!stats.position.win\" class=\"lost\">{{'LOBBY.LABEL.YOU_LOST'|translate}}</h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"position-wrapper\">\r" +
    "\n" +
    "                    <div class=\"position\">\r" +
    "\n" +
    "                        {{'LOBBY.LABEL.YOU_RANKED'|translate}}< {{stats.position.ranked |cardinal}}\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"soldier-sprite\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-top-player.html',
    "<div class=\"row tournament-detail-content\">\r" +
    "\n" +
    "    <div class=\"light-detail-finished\" ng-class=\"{'finished':stats!=null}\" ng-if=\"tournament.status == 'FINISHED'\">\r" +
    "\n" +
    "        <div class=\"top-player-wrapper\" ng-if=\"!tournament.invalid\">\r" +
    "\n" +
    "            <div class=\"top-player\">\r" +
    "\n" +
    "                <h4>TOP PLAYER FOR THIS MATCH </h4>\r" +
    "\n" +
    "                <img class=\"circle white\"\r" +
    "\n" +
    "                     ng-src=\"{{topPlayer.avatar}}\"/>\r" +
    "\n" +
    "                <span class=\"username\">{{topPlayer.username }}</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"invalid-match-wrapper\" ng-if=\"tournament.invalid\">\r" +
    "\n" +
    "            <div class=\"invalid\">\r" +
    "\n" +
    "                <h4>INVALID TOURNAMENT</h4>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournmanet-description\" ng-if=\"tournament.status == 'REGISTRATION'\">\r" +
    "\n" +
    "        <img src=\"images/logos/shotter_logo.png\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--<div class=\"type\">-->\r" +
    "\n" +
    "        <!--<br>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"description-type\">-->\r" +
    "\n" +
    "        <!--<br>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"light-detail\" ng-if=\"tournament.status == 'REGISTRATION'\">\r" +
    "\n" +
    "        <div class=\"top-player-wrapper\">\r" +
    "\n" +
    "            <div class=\"top-player\">\r" +
    "\n" +
    "                <h4>TOP GLOBAL PLAYER</h4>\r" +
    "\n" +
    "                <img class=\"circle white\" ng-src=\"{{topPlayer.avatar}}\"/>\r" +
    "\n" +
    "                <span class=\"username\">{{topPlayer.username }}</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/tournament/tournament-weekly-winners.html',
    "<div class=\"tournament-shot-box\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-2 col-sm-2 col-md-2\">\r" +
    "\n" +
    "            <div class=\"shot-title\">\r" +
    "\n" +
    "                <img src=\"images/logos/shotter_logo.png\" class=\"img-responsive\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h3 translate=\"LOBBY.TITLES.WEEKLY_WINNERS\"></h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-4 col-sm-4 col-md-4\">\r" +
    "\n" +
    "            <div class=\"shot-info\">\r" +
    "\n" +
    "                <div ng-repeat=\"winner in winners\" class=\"winner\">\r" +
    "\n" +
    "                        <span ng-repeat=\"p in winner.players\">\r" +
    "\n" +
    "                            <a ui-sref=\"user.profile({id: p.player.user.username})\">\r" +
    "\n" +
    "                                <span> {{p.player.user.username}}</span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            won <span>{{p.prize|number:2}} <i class=\"\"\r" +
    "\n" +
    "                                                              ng-class=\"{'fel fel-fel_money_electornic':winner.type=='FAKE_CASH','fel fel-fel_money_euro':winner.type=='REAL_CASH'}\"></i> ,</span>\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                    at tournament\r" +
    "\n" +
    "                    <a>#{{winner.name}}</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/user/last-tournament.html',
    "<div class=\"game-box-last-game\">\r" +
    "\n" +
    "    <div class=\"game-box-last-game-container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-2 pull-right\" ng-if=\"have_data\">\r" +
    "\n" +
    "                <div class=\"stats\">\r" +
    "\n" +
    "                    <div class=\"line\">\r" +
    "\n" +
    "                        <div class=\" esi-30 esi-total-kill\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"title\">Kills</span>\r" +
    "\n" +
    "                            <span class=\"value\">{{stats.kills}}</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"line\">\r" +
    "\n" +
    "                        <div class=\" esi-30 esi-total-hs\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"title\">headshots</span>\r" +
    "\n" +
    "                            <span class=\"value\">{{stats.headshots}}</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"line\">\r" +
    "\n" +
    "                        <div class=\" esi-30 esi-total-deaths\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"title\">deads</span>\r" +
    "\n" +
    "                            <span class=\"value\">{{stats.deaths}}</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"line\">\r" +
    "\n" +
    "                        <div class=\" esi-30 esi-average-kill-rate-respawn\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"title\">HS Ratio</span>\r" +
    "\n" +
    "                            <span class=\"value\">{{stats.headshots_ratio | number:2}}%</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"line\">\r" +
    "\n" +
    "                        <div class=\" esi-30 esi-accuracy-attack\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"title\">Accuracy</span>\r" +
    "\n" +
    "                            <span class=\"value\">{{stats.acuracy|number:2}}%</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"line\">\r" +
    "\n" +
    "                        <div class=\" esi-30 esi-shot-fired\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"title\">Shots Fired</span>\r" +
    "\n" +
    "                            <span class=\"value\">{{stats.shots_fired}}</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"line\">\r" +
    "\n" +
    "                        <div class=\" esi-30 esi-shot-hits\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"title\">Shots hits</span>\r" +
    "\n" +
    "                            <span class=\"value\">{{stats.shots_hit}}</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-3 pull-right\" ng-if=\"!have_data\">\r" +
    "\n" +
    "                <div class=\"no-stats\">\r" +
    "\n" +
    "                    <p>Low on stats? <br> Play now to increase your stats!</p>\r" +
    "\n" +
    "                    <a class=\"btn btn-danger\">Play Now</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\">\r" +
    "\n" +
    "                <div class=\"game-box-last-game-footer\">\r" +
    "\n" +
    "                    <h3 class=\"title\">LATEST GAME STATS</h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/user/mini-user.html',
    "<div class=\"profile-resum\">\r" +
    "\n" +
    "    <img ng-src=\"{{user.avatar}}\" user=\"user\"\r" +
    "\n" +
    "         class=\"img-circle\"/>\r" +
    "\n" +
    "    <span>{{user.username}}</span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/user/multiplier-same-size.html',
    "<div class=\"multiplier-wrapper text-center\">\n" +
    "    <div class=\"multiplier\">\n" +
    "        <ul class=\"signal-same-size\">\n" +
    "            <li ng-class=\"{activated:user.activity==1}\">\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/user/multiplier.html',
    "<div class=\"multiplier-wrapper text-center\">\n" +
    "    <div class=\"multiplier\">\n" +
    "        <ul class=\"signal\">\n" +
    "            <li ng-class=\"{activated:user.activity==1}\">\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div></div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/user/profile.html',
    "<div class=\"profile-box\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{user.username}}</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div reputation=\"{{user.reputation}}\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-3\">\r" +
    "\n" +
    "                <img ng-src='{{user.avatar}}'\r" +
    "\n" +
    "                     class=\"img-responsive avatar\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-3 social-info\">\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <span class=\"label\">FRIENDS</span><span>{{user.friends.length}}</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <span class=\"label\">FOLLOWERS</span><span>{{user.followers.length}}</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <span class=\"label\">FOLLOWING</span><span>{{user.following.length}}</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line-button\" ng-if=\"itsme\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-social-action btn-block btn-sm\" ng-click=\"edit_profile()\">EDIT\r" +
    "\n" +
    "                        PROFILE\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line-button\" ng-if=\"!itsme && loged\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-social-action btn-block btn-sm\" ng-if=\"!its_friends()\">ADD\r" +
    "\n" +
    "                        FRIEND\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line-button\" ng-if=\"!itsme && loged\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-social-action btn-block btn-sm\" ng-click=\"follow_user()\"\r" +
    "\n" +
    "                            ng-if=\"!followed\">\r" +
    "\n" +
    "                        FOLLOW\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-social-action btn-block btn-sm\" ng-click=\"unfollow_user()\"\r" +
    "\n" +
    "                            ng-if=\"followed\">\r" +
    "\n" +
    "                        UNFOLLOW\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"user-resume col-md-6\">\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-3\">\r" +
    "\n" +
    "                            <div class=\"nacionality\">\r" +
    "\n" +
    "                                <strong>Nationality</strong>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"flag\">\r" +
    "\n" +
    "                                    <span class=\"el-flag \" ng-class=\"user.nacionality.tld\"></span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-3\">\r" +
    "\n" +
    "                            <div multiplier></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line\">\r" +
    "\n" +
    "                    <strong>Member since</strong> {{user.date_joined|date:'MMMM yyyy'}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\" line\">\r" +
    "\n" +
    "                    <strong>Hardware</strong> 6-Core Processor, Asus M5A97\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\" line\">\r" +
    "\n" +
    "                    <strong>Achievements</strong>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"line-no-border\">\r" +
    "\n" +
    "                    <div class=\"social-sites\">\r" +
    "\n" +
    "                        <i class=\"fa \" ng-class=\"{'fa-facebook-square':provider=='facebook',\r" +
    "\n" +
    "                        'fa-twitter-square':provider=='twitter',\r" +
    "\n" +
    "                        'fa-google-plus-square':provider=='google',\r" +
    "\n" +
    "                        'fa-steam-square':provider=='steam',\r" +
    "\n" +
    "                        'fa-twitch':provider=='twitch'}\" ng-repeat=\"provider in user.social_providers\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-3\" ng-if=\"!itsme && loged\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default btn-danger btn-block btn-sm\">REPORT</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-3\">\r" +
    "\n" +
    "                            <!--<span class=\"pull-right\">VIEW MORE ></span>-->\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/user/reputation.html',
    "<div class=\"reputation-box\"\r" +
    "\n" +
    "     ng-class=\"{'one':value == 1,'two':value == 2,'three':value == 3,'four':value == 4,'five':value == 5}\">\r" +
    "\n" +
    "    <i class=\"fa fa-star\" ng-repeat=\"star in stars\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/user/user-hardware.html',
    "<div class=\"player-hardware-box\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <i class=\"fa fa-line-chart\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h3>HARDWARE</h3>\r" +
    "\n" +
    "        <button class=\"btn btn-danger\" ng-disabled=\"!sync\" ng-if=\"its_current_user\"\r" +
    "\n" +
    "                ng-click=\"get_hardware()\" style=\"margin-top: -10px\">\r" +
    "\n" +
    "            Detect Computer Hardware\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <ul ng-if=\"have_hardware\">\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                {{user.hardware.so}}\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                {{user.hardware.cpu}}\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                {{user.hardware.gpu}}\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                {{user.hardware.mem | mem}} GB RAM\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "        <img src=\"images/avatar/noHardware.jpg\" class=\"img-responsives\" ng-if=\"!have_hardware\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/directives/user/user-stats.html',
    "<div class=\"player-stats-box\">\r" +
    "\n" +
    "<div class=\"box-header\">\r" +
    "\n" +
    "    <i class=\"fa fa-line-chart\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3>PLAYER STATS</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"box-content\">\r" +
    "\n" +
    "<slick ng-if=\"have_data\">\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <div class=\"player-stats-box-content-image\">\r" +
    "\n" +
    "        <div class=\"player-stats-box-container\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-2 pull-right\">\r" +
    "\n" +
    "                    <div class=\"stats\">\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <!--<i class=\"fa fa-bar-chart\"></i>-->\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-user-lvl\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">USER LVL</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.lvl}} </span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\"esi-30 esi-total-matches\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL MATCHES PLAYED</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.match_played}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\"esi-30 esi-total-matches-won\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL MATCHES WON</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.matches_win}}/{{stats.match_played}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\"esi-30 esi-total-matches-lost\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL MATCHES LOST</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.matches_lost}}/{{stats.match_played}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\"esi-30 esi-total-tournaments-played\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOURNAMENTS PLAYED</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.tournaments_played}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\"esi-30 esi-total-tournaments-played\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL HOURS PLAYED</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.time_played|hours}} HOURS</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\"esi-30 esi-best-map\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">MOST PLAYED MAP</span>\r" +
    "\n" +
    "                                <span class=\"value\">DE_AZTEC</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <div class=\"player-stats-box-content-no-image\">\r" +
    "\n" +
    "        <div class=\"player-stats-box-container player-margin\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <div class=\"stats\">\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-total-kill\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL KILLS</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.kills}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-total-kill-hs\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL KILLS HEADSHOTS</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.kills_headshot}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-total-hs\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL HEADSHOTS</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.headshots}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-total-kill-grenade\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL KILL WITH GRENADES</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.kills_grenade }}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-total-deaths\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL DEATHS</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.deaths}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-total-bombs_defused\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL DEFUSED BOMBS</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.defused_bombs}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-total-bombs\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">TOTAL PLANTED BOMBS</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.planted_bombs}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <div class=\"stats\">\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-shot-fired\"></div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">SHOTS FIRED</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.shots_fired}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-shot-hits\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">SHOTS HITS</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.shots_hit}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-accuracy-attack\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">ACCURACY</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.acuracy | number:2}}%</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-kill-ratio\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">KILL RATIO</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.kill_ratio | number:2}}%</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-average-kill-rate-respawn\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">HEADSHOT RATIO</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.headshots_ratio|number:2}}%</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-average-kill-rate-respawn\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">KILLS / MIN</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.kill_ratio_min|number:2}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"line\">\r" +
    "\n" +
    "                            <div class=\" esi-30 esi-total-hs\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <span class=\"title\">HEADSHOT / MIN</span>\r" +
    "\n" +
    "                                <span class=\"value\">{{stats.headshots_ratio_min|number:2}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <div class=\"player-stats-box-content-no-image\">\r" +
    "\n" +
    "        <div class=\"player-stats-box-container\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-4\">\r" +
    "\n" +
    "                    <nvd3 options=\"options\" data=\"data\"></nvd3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-md-2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <ul class=\"nav nav-stats\">\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a ng-click=\"data_graph('kills')\" ng-class=\"{'active':type_graph=='kills'}\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-kill\"></div>\r" +
    "\n" +
    "                                <div class=\"stats-name\"> average kill</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a ng-click=\"data_graph('headshots')\" ng-class=\"{'active':type_graph=='headshots'}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-hs\"></div>\r" +
    "\n" +
    "                                <div class=\"stats-name\"> average headshots</div>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a ng-click=\"data_graph('deaths')\" ng-class=\"{'active':type_graph=='deaths'}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-deaths\"></div>\r" +
    "\n" +
    "                                <div class=\"stats-name\"> TOTAL DEATHS</div>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a ng-click=\"data_graph('time')\" ng-class=\"{'active':type_graph=='time'}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-total-tournaments-played\"></div>\r" +
    "\n" +
    "                                <div class=\"stats-name\"> average time played</div>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a ng-click=\"data_graph('acuracy')\" ng-class=\"{'active':type_graph=='acuracy'}\">\r" +
    "\n" +
    "                                <div class=\" esi-30 esi-accuracy-attack\"></div>\r" +
    "\n" +
    "                                <div class=\"stats-name\">ACCURACY ATTACK</div>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</slick>\r" +
    "\n" +
    "<div ng-if=\"!have_data\">\r" +
    "\n" +
    "    <div class=\"player-stats-box-content-image\">\r" +
    "\n" +
    "        <div class=\"player-stats-box-container\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3 pull-right\">\r" +
    "\n" +
    "                    <div class=\"no-stats\">\r" +
    "\n" +
    "                        <p>Low on stats? <br> Play now to increase your stats!</p>\r" +
    "\n" +
    "                        <a class=\"btn btn-danger\">Play Now</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-6\">\r" +
    "\n" +
    "        <div class=\"player-stats-box-footer-container\">\r" +
    "\n" +
    "            <h3 class=\"title\">TOTAL</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/error/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view class=\"main-section\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/faq/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view class=\"main-wrapper\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/home/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view class=\"main-wrapper\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/landing/footer.html',
    "<footer class=\"footer_background_container_landing\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-3 col-sm-4 col-xs-6\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-6\">\r" +
    "\n" +
    "                        <ul class=\"footer-menu\">\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a>\r" +
    "\n" +
    "                                    <img src=\"images/logos/logo_loader2.jpg\"/>\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a ui-sref=\"about_us.index\">{{'COMMON.NAVIGATION.ABOUT_US' | translate}}</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a ui-sref=\"termsandconditions.index\">{{'COMMON.NAVIGATION.TERMS_CONDITIONS' |\r" +
    "\n" +
    "                                    translate}}</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a ui-sref=\"faq.index\">HELP</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-6\">\r" +
    "\n" +
    "                        Copyright © 2015 Electronicstars. All rights reserved.\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-2 col-sm-2 col-xs-6\">\r" +
    "\n" +
    "                <ul class=\"footer-social-menu\">\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"https://www.facebook.com/electronicstarsES\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-facebook-square\"></i>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"https://twitter.com/ESeSports_ES\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-twitter-square\"></i></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"http://steamcommunity.com/groups/Electronic-Stars\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-steam-square\"></i></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"https://plus.google.com/118279218561825885927/posts\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-google-plus-square\"></i></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"http://www.twitch.tv/electronicstars\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-twitch\"></i></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-1\">\r" +
    "\n" +
    "                <!--<div class=\"language\">-->\r" +
    "\n" +
    "                    <!--<ui-select ng-model=\"_app.language.selected\" theme=\"bootstrap\" ng-disabled=\"disabled\"-->\r" +
    "\n" +
    "                               <!--on-select=\"_app.change_app_language($item, $model)\">-->\r" +
    "\n" +
    "                        <!--<ui-select-match placeholder=\"{{_app.language.name}}\">-->\r" +
    "\n" +
    "                            <!--{{$select.selected.name}}-->\r" +
    "\n" +
    "                        <!--</ui-select-match>-->\r" +
    "\n" +
    "                        <!--<ui-select-choices repeat=\"item in _app.languages\">-->\r" +
    "\n" +
    "                            <!--<span ng-bind-html=\"item.name \"></span>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!--<div class=\"el-flag {{item.flag}} pull-right\"></div>-->\r" +
    "\n" +
    "                        <!--</ui-select-choices>-->\r" +
    "\n" +
    "                    <!--</ui-select>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</footer>"
  );


  $templateCache.put('views/layouts/landing/header.html',
    "<header class=\"navbar navbar-fixed-top el-nav\" ng-controller=\"login.landing\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"col-md-2\">\r" +
    "\n" +
    "            <a href=\"/\" class=\"navbar-brand\">\r" +
    "\n" +
    "                <img src=\"/images/logos/logo.png\"/>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-4 col-sm-4\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <form class=\"navbar-form navbar-left header-form\" novalidate=\"novalidate\" name=\"UserRegisterForm\"\r" +
    "\n" +
    "                      autocomplete=\"off\" ng-submit=\"join(user)\">\r" +
    "\n" +
    "                    <div class=\"form-group col-md-2 col-sm-2\">\r" +
    "\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"user.username\" placeholder=\"Username..\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"checkbox loggedin\">\r" +
    "\n" +
    "                            <input type=\"checkbox\" ng-model=\"remember\" id=\"checkbox-icon\"/>\r" +
    "\n" +
    "                            <label for=\"checkbox-icon\"></label>\r" +
    "\n" +
    "                            <span class=\"checkbox-text\">Keep me logged in</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group col-md-2 col-sm-2\">\r" +
    "\n" +
    "                        <input type=\"password\" class=\"form-control\" ng-model=\"user.password\" placeholder=\"Password..\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"checkbox\">\r" +
    "\n" +
    "                            <label class=\"header-text\">\r" +
    "\n" +
    "                                <a>\r" +
    "\n" +
    "                                    Forgot Password?\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group col-md-1 col-sm-1\">\r" +
    "\n" +
    "                        <button type=\"submit\" class=\"btn btn-block btn-danger\">LOGIN</button>\r" +
    "\n" +
    "                        <div class=\"checkbox\">\r" +
    "\n" +
    "                            <label class=\"header-text\">\r" +
    "\n" +
    "                                <a ui-sref=\"register\">\r" +
    "\n" +
    "                                    <span>Create Account</span>\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</header>"
  );


  $templateCache.put('views/layouts/landing/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view class=\"main-wrapper\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/landing/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/main/footer.html',
    "<footer class=\"footer_background_container\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-3 col-sm-4 col-xs-6\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-6\">\r" +
    "\n" +
    "                        <ul class=\"footer-menu\">\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a>\r" +
    "\n" +
    "                                    <img src=\"images/logos/logo_loader.png\"/>\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a ui-sref=\"about_us.index\">{{'COMMON.NAVIGATION.ABOUT_US' | translate}}</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a ui-sref=\"termsandconditions.index\">{{'COMMON.NAVIGATION.TERMS_CONDITIONS' |\r" +
    "\n" +
    "                                    translate}}</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a ui-sref=\"faq.index\">HELP</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-6\">\r" +
    "\n" +
    "                        Copyright © 2015 Electronicstars. All rights reserved.\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-2  col-sm-2 col-xs-6\">\r" +
    "\n" +
    "                <ul class=\"footer-social-menu\">\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a class=\"\"\r" +
    "\n" +
    "                           href=\"https://www.facebook.com/electronicstarsES\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-facebook-square\"></i>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a class=\" \" href=\"https://twitter.com/ESeSports_ES\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-twitter-square\"></i></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a class=\" \" href=\"http://steamcommunity.com/groups/Electronic-Stars\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-steam-square\"></i></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a class=\" \" href=\"https://plus.google.com/118279218561825885927/posts\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-google-plus-square\"></i></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a class=\"\" href=\"http://www.twitch.tv/electronicstars\"\r" +
    "\n" +
    "                           target=\"_blank\"><i\r" +
    "\n" +
    "                                class=\"fa fa-twitch\"></i></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--<li>-->\r" +
    "\n" +
    "                    <!--<a ui-sref=\"faq.index\" href=\"#/faq\">-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--<i class=\"fa fa-question-circle\"></i>-->\r" +
    "\n" +
    "                    <!--</a>-->\r" +
    "\n" +
    "                    <!--</li>-->\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <!--    <a href=\"\" target=\"_blank\"> <i class=\"fa fa-instagram\"></i></a>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-1\">\r" +
    "\n" +
    "                <!--<div class=\"language\">-->\r" +
    "\n" +
    "                    <!--<ui-select ng-model=\"_app.language.selected\" theme=\"bootstrap\" ng-disabled=\"disabled\"-->\r" +
    "\n" +
    "                               <!--on-select=\"_app.change_app_language($item, $model)\">-->\r" +
    "\n" +
    "                        <!--<ui-select-match placeholder=\"{{_app.language.name}}\">{{$select.selected.name}}-->\r" +
    "\n" +
    "                        <!--</ui-select-match>-->\r" +
    "\n" +
    "                        <!--<ui-select-choices repeat=\"item in _app.languages\">-->\r" +
    "\n" +
    "                            <!--<span ng-bind-html=\"item.name \"></span>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!--<div class=\"el-flag {{item.flag}} pull-right\"></div>-->\r" +
    "\n" +
    "                        <!--</ui-select-choices>-->\r" +
    "\n" +
    "                    <!--</ui-select>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</footer>"
  );


  $templateCache.put('views/layouts/main/header.html',
    "<header class=\"navbar navbar-fixed-top el-nav\" ng-controller=\"app.head as _header\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "<section class=\"el-nav\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"col-xs-1 visible-xs button-separator\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"navbar-toggle\">\r" +
    "\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-2  col-md-1 col-sm-2 col-lg-1\">\r" +
    "\n" +
    "            <a href=\"/#/\" class=\"navbar-brand\">\r" +
    "\n" +
    "                <img src=\"/images/logos/logo.png\"/>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-offset-1 col-sm-2 col-md-3 hidden-xs\">\r" +
    "\n" +
    "            <div class=\"support\">\r" +
    "\n" +
    "                <script type=\"text/ng-template\" id=\"avatar_search.html\">\r" +
    "\n" +
    "                    <a ui-sref=\"user.profile({id: match.model.username})\">\r" +
    "\n" +
    "                        <img ng-src=\"{{match.model.avatar}}\"\r" +
    "\n" +
    "                             width=\"16\">\r" +
    "\n" +
    "                        <span>{{match.model.username}}</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </script>\r" +
    "\n" +
    "                <input type=\"text\" ng-model=\"_header.asyncSelected\"\r" +
    "\n" +
    "                       typeahead=\"user for user in _header.find_users($viewValue)\" class=\"form-control search\"\r" +
    "\n" +
    "                       typeahead-template-url=\"avatar_search.html\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <i class=\"fa fa-search fs20px\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-1 col-sm-2  pull-right hidden-xs\">\r" +
    "\n" +
    "            <div class=\"mainMenu\">\r" +
    "\n" +
    "                <ul class=\"nav navbar-play navbar-right \">\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a ui-sref=\"home.index\">\r" +
    "\n" +
    "                            <div><span>HO</span>ME</div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li dropdown>\r" +
    "\n" +
    "                        <a class=\"dropdown-toggle\" dropdown-toggle>\r" +
    "\n" +
    "                            <div><span>PL</span>AY</div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <ul class=\"dropdown-menu games-menu\">\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <ul>\r" +
    "\n" +
    "                                    <!--<li-->\r" +
    "\n" +
    "                                    <!--ng-repeat=\"game in _app.me.games_lvl | orderBy:'lvl':true\"-->\r" +
    "\n" +
    "                                    <!--ng-if=\"_app.is_logged()\">-->\r" +
    "\n" +
    "                                    <!--<a ui-sref=\"tournaments.list({ game_slug: game.game.slug })\">{{g.name}}-->\r" +
    "\n" +
    "                                    <!--<img ng-src=\"{{game.game.miniature}}\"/>-->\r" +
    "\n" +
    "                                    <!--<span class=\"lvl\">Level</span>-->\r" +
    "\n" +
    "                                    <!--<br>-->\r" +
    "\n" +
    "                                    <!--<span class=\"value\">{{game.lvl}}</span>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <!--</a>-->\r" +
    "\n" +
    "                                    <!--</li>-->\r" +
    "\n" +
    "                                    <li ng-repeat=\"game in _app.games\">\r" +
    "\n" +
    "                                        <a ui-sref=\"tournaments.list({ game_slug: game.slug })\">\r" +
    "\n" +
    "                                            <img ng-src=\"{{game.miniature}}\"/>\r" +
    "\n" +
    "                                            <span class=\"lvl\">PLAY</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </li>\r" +
    "\n" +
    "                                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <!--<li class=\"game-center\">-->\r" +
    "\n" +
    "                            <!--<a ui-sref=\"game.index\">Game Center <i class=\"fa fa-angle-right\"></i></a>-->\r" +
    "\n" +
    "                            <!--</li>-->\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <!--<li><a>\r" +
    "\n" +
    "                        <div><span>CL</span>ANS</div>\r" +
    "\n" +
    "                    </a></li>-->\r" +
    "\n" +
    "                    <!--<li><a ui-sref=\"community.index\">-->\r" +
    "\n" +
    "                    <!--<div><span>CO</span>MMUNITY</div>-->\r" +
    "\n" +
    "                    <!--</a>-->\r" +
    "\n" +
    "                    <!--</li>-->\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "                <!--<ul class=\"nav navbar-comnunity  navbar-right \">\r" +
    "\n" +
    "                    <li><a class=\"soon\">Shop </a></li>\r" +
    "\n" +
    "                    <li><a class=\"soon\">Forum</a></li>\r" +
    "\n" +
    "                </ul>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<section ng-if='_app.is_logged()' class=\"hidden-xs el-profile-nav\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"col-md-2 col-sm-2 br-grey\">\r" +
    "\n" +
    "            <div class=\"mini-profile\">\r" +
    "\n" +
    "                <a ui-sref=\"user.profile({id: _app.me.username})\">\r" +
    "\n" +
    "                    <img ng-src=\"{{_app.me.avatar}}\"\r" +
    "\n" +
    "                         class=\"img-circle connected-status\"/>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"profile-info\">\r" +
    "\n" +
    "                    <a ui-sref=\"user.profile({id: _app.me.username})\" class=\"username\">{{_app.me.username}} </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"status\">\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"currently\" translate=\"COMMON.HEADER.USER.APP_STATUS\"></span>\r" +
    "\n" +
    "                             <span class=\"sync \" ng-class=\"{'sincronized':_app.me.sincronized == true}\">\r" +
    "\n" +
    "                                Syncing                                    <span class=\"icon-sync\"></span>\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <span class=\"currently\" translate=\"COMMON.HEADER.USER.STATUS\"></span>\r" +
    "\n" +
    "                            <span class=\"dropdown\" dropdown>\r" +
    "\n" +
    "                                <a dropdown-toggle class=\"dropdown-toggle connected\">\r" +
    "\n" +
    "                                    ONLINE\r" +
    "\n" +
    "                                    <span class=\"caret\"></span>\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "                                <ul class=\"dropdown-menu user-menu\">\r" +
    "\n" +
    "                                    <li>\r" +
    "\n" +
    "                                        <a ui-sref=\"user.profile({id: _app.me.username})\"\r" +
    "\n" +
    "                                           translate=\"COMMON.HEADER.NAVIGATION.PROFILE\"></a>\r" +
    "\n" +
    "                                    </li>\r" +
    "\n" +
    "                                    <li>\r" +
    "\n" +
    "                                        <a ng-click=\"_app.open_wallet()\"\r" +
    "\n" +
    "                                           translate=\"COMMON.HEADER.NAVIGATION.CASHIER\"></a>\r" +
    "\n" +
    "                                    </li>\r" +
    "\n" +
    "                                    <li>\r" +
    "\n" +
    "                                        <a ng-click=\"_app.logout()\" translate=\"COMMON.HEADER.NAVIGATION.LOGOUT\"></a>\r" +
    "\n" +
    "                                    </li>\r" +
    "\n" +
    "                                </ul>\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <!--<div class=\"multiplier-wrapper text-center pull-right hidden-sm\">-->\r" +
    "\n" +
    "                <!--<div class=\"multiplier\">-->\r" +
    "\n" +
    "                <!--<ul class=\"signal\">-->\r" +
    "\n" +
    "                <!--<li>-->\r" +
    "\n" +
    "                <!--<div></div>-->\r" +
    "\n" +
    "                <!--</li>-->\r" +
    "\n" +
    "                <!--<li>-->\r" +
    "\n" +
    "                <!--<div></div>-->\r" +
    "\n" +
    "                <!--</li>-->\r" +
    "\n" +
    "                <!--<li>-->\r" +
    "\n" +
    "                <!--<div></div>-->\r" +
    "\n" +
    "                <!--</li>-->\r" +
    "\n" +
    "                <!--<li>-->\r" +
    "\n" +
    "                <!--<div></div>-->\r" +
    "\n" +
    "                <!--</li>-->\r" +
    "\n" +
    "                <!--<li>-->\r" +
    "\n" +
    "                <!--<div></div>-->\r" +
    "\n" +
    "                <!--</li>-->\r" +
    "\n" +
    "                <!--</ul>-->\r" +
    "\n" +
    "                <!--<span>My Star Multiplier</span>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-1 col-sm-1 br-grey\">\r" +
    "\n" +
    "            <div class=\"money-box\">\r" +
    "\n" +
    "                <div class=\"text-center\">\r" +
    "\n" +
    "                    <i class=\"fel fel-fel_money_electornic\"></i>\r" +
    "\n" +
    "                    <span>{{_app.me.cashier.points|number:2}} </span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-1 col-sm-1 br-grey\">\r" +
    "\n" +
    "            <div class=\"money-box\">\r" +
    "\n" +
    "                <div class=\"text-center\">\r" +
    "\n" +
    "                    <i class=\"fel fel-fel_money_euro \"></i>\r" +
    "\n" +
    "                    <span>{{_app.me.cashier.total_money|number:2}} </span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-1 col-sm-1\">\r" +
    "\n" +
    "            <a class=\"btn btn-lg btn-danger btn-block\" ng-click=\"_app.open_wallet()\"\r" +
    "\n" +
    "               translate=\"COMMON.HEADER.BUTTONS.TOP_UP\"></a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-1 col-sm-1\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a class=\"btn btn-lg btn-block btn-tickets\" ng-click=\"_app.open_registered_tournaments()\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <i class=\"fa fa-ticket\"></i>\r" +
    "\n" +
    "                {{'COMMON.HEADER.BUTTONS.TICKETS' | translate}}\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!-- user is not logged -->\r" +
    "\n" +
    "<section ng-if='!_app.is_logged()' class=\"hidden-xs el-profile-nav\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"col-md-2 col-sm-3\">\r" +
    "\n" +
    "            <form class=\"navbar-form  header-form\" novalidate=\"novalidate\" name=\"UserLoginForm\"\r" +
    "\n" +
    "                  autocomplete=\"off\" ng-submit=\"_header.join(_header.user)\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"form-group col-md-3 col-sm-4\">\r" +
    "\n" +
    "                        <input type=\"text\" class=\"form-control\" tabindex=1 ng-model=\"_header.user.username\"\r" +
    "\n" +
    "                               placeholder=\"{{'COMMON.HEADER.LOGIN.USERNAME' | translate}}\" required>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"checkbox col-md-3 col-sm-2 loggedin\">\r" +
    "\n" +
    "                        <input type=\"checkbox\" ng-model=\"_header.remember\" tabindex=3 id=\"checkbox-icon\"/>\r" +
    "\n" +
    "                        <label for=\"checkbox-icon\"></label>\r" +
    "\n" +
    "                        <span class=\"checkbox-text\" translate=\"COMMON.HEADER.LOGIN.REMEMBER_ME\"></span>\r" +
    "\n" +
    "                        <a ui-sref=\"password_reset\" class=\"forgot-link\"\r" +
    "\n" +
    "                           translate=\"COMMON.HEADER.LOGIN.FORGOT_PASSWORD\"></a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"form-group col-md-3 col-sm-4\">\r" +
    "\n" +
    "                        <input type=\"password\" class=\"form-control\" tabindex=2 ng-model=\"_header.user.password\"\r" +
    "\n" +
    "                               placeholder=\"{{'COMMON.HEADER.LOGIN.PASSWORD' | translate}}\" required>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-3 col-sm-2\">\r" +
    "\n" +
    "                        <button type=\"submit\" class=\"btn btn-block btn-danger\" tabindex=4\r" +
    "\n" +
    "                                ng-disabled=\"UserLoginForm.$invalid\">\r" +
    "\n" +
    "                            LOGIN\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-1 col-sm-2 pull-right\">\r" +
    "\n" +
    "            <a ui-sref=\"register\" class=\"btn btn-block btn-danger btn-xl\" role=\"button\"\r" +
    "\n" +
    "               translate=\"COMMON.HEADER.BUTTONS.REGISTER\"></a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "</header>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/layouts/password/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view class=\"main-wrapper\"></div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/layouts/play/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "<div ui-view class=\"main-wrapper\"></div>\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>\r" +
    "\n"
  );


  $templateCache.put('views/layouts/play/modal.html',
    "<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\"\r" +
    "\n" +
    "     ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"container-model-tournament\" ng-transclude></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/layouts/signup_confirmation/header.html',
    "<header class=\"navbar signup_confirmatiion_header \">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-2\">\r" +
    "\n" +
    "                <a href=\"/\" class=\"navbar-brand\">\r" +
    "\n" +
    "                    <img src=\"images/logos/logo.png\"/>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</header>"
  );


  $templateCache.put('views/layouts/signup_confirmation/index.html',
    "<div ng-include=\"'/views/layouts/signup_confirmation/header.html'\"></div><!-- this contain a simple header -->\r" +
    "\n" +
    "<div ui-view class=\"main-section\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/termsandconditions/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ui-view class=\"main-wrapper\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/user/index.html',
    "<div ng-include=\"'/views/layouts/main/header.html'\"></div>\r" +
    "\n" +
    "<div ui-view class=\"main-wrapper\"></div>\r" +
    "\n" +
    "<div ng-include=\"'/views/layouts/main/footer.html'\"></div>"
  );


  $templateCache.put('views/layouts/user/modal.html',
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-2\">\r" +
    "\n" +
    "            <div class=\"profile-menu-box\">\r" +
    "\n" +
    "                <div class=\"options\">\r" +
    "\n" +
    "                    <ul class=\"edit-profile-menu\">\r" +
    "\n" +
    "                        <li ng-class=\"{'active':menuItem=='edit'}\">\r" +
    "\n" +
    "                            <a ng-click=\"toggleMenu('edit')\">\r" +
    "\n" +
    "                                <span class=\"title\">\r" +
    "\n" +
    "                            EDIT PROFILE\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                                <span class=\"arrow\"></span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a ng-class=\"{'active':page=='profile.edit'}\" ng-click=\"go_to('profile.edit')\">\r" +
    "\n" +
    "                                        Personal Detail\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a ng-class=\"{'active':page=='profile.password'}\"\r" +
    "\n" +
    "                                       ng-click=\"go_to('profile.password')\">\r" +
    "\n" +
    "                                        Change Password\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <!--<li>-->\r" +
    "\n" +
    "                                <!--<a>-->\r" +
    "\n" +
    "                                <!--Privacy Settings-->\r" +
    "\n" +
    "                                <!--</a>-->\r" +
    "\n" +
    "                                <!--</li>-->\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li ng-class=\"{'active':menuItem=='cashier'}\">\r" +
    "\n" +
    "                            <a ng-click=\"toggleMenu('cashier')\">\r" +
    "\n" +
    "                                <span class=\"title\">\r" +
    "\n" +
    "                            WALLET\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                                <span class=\"arrow\"></span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a ng-class=\"{'active':page=='profile.cashier'}\"\r" +
    "\n" +
    "                                       ng-click=\"go_to('profile.cashier')\">\r" +
    "\n" +
    "                                        My Cash\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a ng-class=\"{'active':page=='profile.cashier.historic'}\"\r" +
    "\n" +
    "                                       ng-click=\"go_to('profile.cashier.historic')\">\r" +
    "\n" +
    "                                        Transaction History\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-4\">\r" +
    "\n" +
    "            <div ng-switch=\"page\">\r" +
    "\n" +
    "                <div ng-switch-when=\"profile.edit\">\r" +
    "\n" +
    "                    <div ng-include=\"'/views/partials/user/edit/personal.html'\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-switch-when=\"profile.password\">\r" +
    "\n" +
    "                    <div ng-include=\"'/views/partials/user/edit/password.html'\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-switch-when=\"profile.cashier\">\r" +
    "\n" +
    "                    <div ng-include=\"'/views/partials/cashier/index.html'\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-switch-when=\"profile.cashier.play_credits\">\r" +
    "\n" +
    "                    <div ng-include=\"'/views/partials/cashier/play-recharge.html'\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-switch-when=\"profile.cashier.historic\">\r" +
    "\n" +
    "                    <div ng-include=\"'/views/partials/cashier/historic.html'\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/about_us/about_us.html',
    "<section>\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\">\r" +
    "\n" +
    "                <div class=\"about_us_container\">\r" +
    "\n" +
    "                    <h2>{{'ABOUT_US.COMPANY_CONTENT.TITLE' | translate}}</h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>{{'ABOUT_US.COMPANY_CONTENT.FIRSTP' | translate}}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>{{'ABOUT_US.COMPANY_CONTENT.SECONDP' | translate}}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>{{'ABOUT_US.COMPANY_CONTENT.THIRTDP' | translate}}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>{{'ABOUT_US.COMPANY_CONTENT.FOURTHP' | translate}}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>{{'ABOUT_US.COMPANY_CONTENT.FIVETHP' | translate}}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>{{'ABOUT_US.COMPANY_CONTENT.SIXTHP' | translate}}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <h2>{{'ABOUT_US.PERSON_CONTENT.TITLE' | translate}}</h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"person-box\">\r" +
    "\n" +
    "                        <h4>{{'ABOUT_US.PERSON_CONTENT.PERSON1.NAME' | translate}}</h4>\r" +
    "\n" +
    "                        <h5>{{'ABOUT_US.PERSON_CONTENT.PERSON1.ROLE' | translate}}</h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <p> {{'ABOUT_US.PERSON_CONTENT.PERSON1.DESCRIPTION' | translate}}</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"person-box\">\r" +
    "\n" +
    "                        <h4>{{'ABOUT_US.PERSON_CONTENT.PERSON2.NAME' | translate}}</h4>\r" +
    "\n" +
    "                        <h5>{{'ABOUT_US.PERSON_CONTENT.PERSON2.ROLE' | translate}}</h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <p> {{'ABOUT_US.PERSON_CONTENT.PERSON2.DESCRIPTION' | translate}}</p></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"person-box\">\r" +
    "\n" +
    "                        <h4>{{'ABOUT_US.PERSON_CONTENT.PERSON3.NAME' | translate}}</h4>\r" +
    "\n" +
    "                        <h5>{{'ABOUT_US.PERSON_CONTENT.PERSON3.ROLE' | translate}}</h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <p> {{'ABOUT_US.PERSON_CONTENT.PERSON3.DESCRIPTION' | translate}}</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"person-box\">\r" +
    "\n" +
    "                        <h4>{{'ABOUT_US.PERSON_CONTENT.PERSON4.NAME' | translate}}</h4>\r" +
    "\n" +
    "                        <h5>{{'ABOUT_US.PERSON_CONTENT.PERSON4.ROLE' | translate}}</h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <p> {{'ABOUT_US.PERSON_CONTENT.PERSON4.DESCRIPTION' | translate}}</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <h4>ELECTRONIC STARS LTD</h4>\r" +
    "\n" +
    "                    <h6>Unit 2040, KBIC, Kordin</h6>\r" +
    "\n" +
    "                    <h6> Paola, PLA 3000</h6>\r" +
    "\n" +
    "                    <h6> Malta</h6>\r" +
    "\n" +
    "                    <h6> p: (00356)21808766</h6>\r" +
    "\n" +
    "                    <br>\r" +
    "\n" +
    "                    <h5>{{'ABOUT_US.COMPANY_INFO_CONTENT.INQUIRIES.TITLE' | translate}}</h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <P>{{'ABOUT_US.COMPANY_INFO_CONTENT.INQUIRIES.MEDIA' | translate}}\r" +
    "\n" +
    "                        community@electronicstars.com </P><br>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <P>{{'ABOUT_US.COMPANY_INFO_CONTENT.INQUIRIES.SALES' | translate}}\r" +
    "\n" +
    "                        marketing@electronicstars.com </P><br>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <P>{{'ABOUT_US.COMPANY_INFO_CONTENT.INQUIRIES.AFFILIATES' | translate}}\r" +
    "\n" +
    "                        performance@electronicstars.com </P><br>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <P>{{'ABOUT_US.COMPANY_INFO_CONTENT.INQUIRIES.ACCOUNTING' | translate}}\r" +
    "\n" +
    "                        accounting@electronicstars.com </P><br>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('views/partials/authentication/login.html',
    "<div class=\"container\">\n" +
    "    <div class=\"btn-close-wrapper\">\n" +
    "        <button class=\"btn btn-close\" ng-click=\"close()\">x</button>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 col-md-4 col-md-offset-1\">\n" +
    "            <div class=\"user-login-box\">\n" +
    "                <div class=\"header-box\">\n" +
    "                    <h3>ELECTRONIC STARS LOGIN</h3>\n" +
    "                </div>\n" +
    "                <div class=\"content-box\">\n" +
    "                    <form novalidate=\"novalidate\" name=\"UserRegisterForm\" autocomplete=\"off\" ng-submit=\"join(user)\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"username\">Username</label>\n" +
    "                            <input type=\"text\" class=\"form-control\" ng-model=\"user.username\" id=\"username\"\n" +
    "                                   placeholder=\"Introduce tu username\" required>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"password\">Password</label>\n" +
    "                            <input type=\"password\" class=\"form-control\" ng-model=\"user.password\" id=\"password\"\n" +
    "                                   placeholder=\"Password\" required>\n" +
    "                        </div>\n" +
    "                        <div class=\"checkbox\">\n" +
    "                            <label>\n" +
    "                                <input type=\"checkbox\">Remember me\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-1 pull-right\">\n" +
    "                                <button type=\"reset\" class=\"btn-block btn btn-cancel\">CANCEL</button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-1 pull-right\">\n" +
    "                                <button type=\"submit\" class=\"btn-block btn btn-danger\">LOGIN</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                    <div class=\"divider\"></div>\n" +
    "                    <h5> OR LOG IN USING:</h5>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <a class=\"btn btn-social-icon btn-facebook\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "                            <a class=\"btn btn-social-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                            <a class=\"btn btn-social-icon btn-google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "                            <a class=\"btn btn-social-icon btn-steam\"><i class=\"fa fa-steam\"></i></a>\n" +
    "                            <a class=\"btn btn-social-icon btn-twitch\"><i class=\"fa fa-twitch\"></i></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"divider\"></div>\n" +
    "                    <h5>\n" +
    "                        DON'T HAVE AN ACCOUNT?\n" +
    "                    </h5>\n" +
    "\n" +
    "                    <p>Create a new account! It's free to join and easy to use. Sign up now to create your Electronic\n" +
    "                        Stars account and get the app. Game on!</p>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-2\">\n" +
    "                            <a type=\"submit\" class=\"btn-block btn btn-danger\" ui-sref=\"register\">JOIN ELECTRONIC\n" +
    "                                STARS</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"divider\"></div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <h5>FORGOT YOUR ACCOUNT NAME?</h5>\n" +
    "                            <button class=\"btn btn-cancel\">CLICK HERE</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <h5>FORGOT YOUR PASSWORD?</h5>\n" +
    "                            <button class=\"btn btn-reset\">CLICK HERE</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/partials/authentication/password_reset.html',
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-6 col-md-4 col-md-offset-1\">\r" +
    "\n" +
    "            <div class=\"user-login-box\">\r" +
    "\n" +
    "                <div class=\"header-box register\">\r" +
    "\n" +
    "                    <h3 class=\"registration_effect\" ng-show=\"!registration_submitted\"\r" +
    "\n" +
    "                        translate=\"PASSWORD_RESET.TITLE\"></h3>\r" +
    "\n" +
    "                    <a class=\"pull-right\" ng-click=\"vm.close()\">\r" +
    "\n" +
    "                        <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"content-box\">\r" +
    "\n" +
    "                    <form novalidate=\"novalidate\" ng-show=\"!registration_submitted\" name=\"resetPasswordForm\"\r" +
    "\n" +
    "                          autocomplete=\"off\"\r" +
    "\n" +
    "                          ng-submit=\"vm.request_code()\">\r" +
    "\n" +
    "                        <div class=\"form-group\"\r" +
    "\n" +
    "                             ng-class=\"{'has-error':resetPasswordForm.username.$error && resetPasswordForm.username.$touched }\">\r" +
    "\n" +
    "                            <label translate=\"PASSWORD_RESET.EMAIL_LABEL\"> </label>\r" +
    "\n" +
    "                            <input type=\"email\" class=\"form-control\" ng-model=\"vm.email\" name=\"email\"\r" +
    "\n" +
    "                                   placeholder=\"{{'PASSWORD_RESET.EMAIL_PLACEHOLDER' | translate}}\" required>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div ng-messages=\"resetPasswordForm.email.$error\"\r" +
    "\n" +
    "                                 ng-if=\"resetPasswordForm.email.$touched\">\r" +
    "\n" +
    "                                <div ng-message=\"required\" class=\"help-block\">{{'COMMON.ERROR.REQUIRED_TEXT' |\r" +
    "\n" +
    "                                    translate}}\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div ng-message=\"email\" class=\"help-block\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                                    {{'COMMON.ERROR.INVALID_EMAIL' | translate}}\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div vc-recaptcha theme=\"'dark'\" key=\"vm.key\" on-success=\"vm.capcha_response(response)\"></div>\r" +
    "\n" +
    "                        <div class=\"divider\"></div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-3 pull-right\">\r" +
    "\n" +
    "                                <button type=\"submit\" ng-disabled=\"resetPasswordForm.$invalid\"\r" +
    "\n" +
    "                                        class=\"btn btn-lg btn-danger pull-right\"\r" +
    "\n" +
    "                                        translate=\"PASSWORD_RESET.RESET_ACTION\">\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/partials/authentication/password_update.html',
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-6 col-md-4 col-md-offset-1\">\r" +
    "\n" +
    "            <div class=\"user-recover-box\">\r" +
    "\n" +
    "                <div class=\"header-box register\">\r" +
    "\n" +
    "                    <h3 class=\"registration_effect\" translate=\"PASSWORD_UPDATE.TITLE\"></h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"content-box\">\r" +
    "\n" +
    "                    <form novalidate=\"novalidate\" name=\"resetPasswordForm\"\r" +
    "\n" +
    "                          autocomplete=\"off\" ng-submit=\"vm.request_code()\">\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-6\">\r" +
    "\n" +
    "                                <div class=\"form-group\"\r" +
    "\n" +
    "                                     ng-class=\"{'has-error':resetPasswordForm.password.$error && resetPasswordForm.password.$touched }\">\r" +
    "\n" +
    "                                    <label translate=\"PASSWORD_UPDATE.NEW_PASSWORD_LABEL\"></label>\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" name=\"password\"\r" +
    "\n" +
    "                                           placeholder=\"{{'PASSWORD_UPDATE.NEW_PASSWORD_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                                           minlength=\"8\" required ng-model=\"vm.user.password\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div ng-messages=\"resetPasswordForm.password.$error\"\r" +
    "\n" +
    "                                         ng-if=\"resetPasswordForm.password.$touched\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\" class=\"help-block\">\r" +
    "\n" +
    "                                            <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                                            {{'COMMON.ERROR.REQUIRED_TEXT' |\r" +
    "\n" +
    "                                            translate}}\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-message=\"minlength\" class=\"help-block\">\r" +
    "\n" +
    "                                            <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                                            {{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_ERROR_MINLENGHT' |\r" +
    "\n" +
    "                                            translate}}\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"form-group\"\r" +
    "\n" +
    "                                     ng-class=\"{'has-error':resetPasswordForm.repeated_password.$error && resetPasswordForm.repeated_password.$touched }\">\r" +
    "\n" +
    "                                    <label translate=\"PASSWORD_UPDATE.REPEAT_NEW_PASSWORD_LABEL\"></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" name=\"repeated_password\"\r" +
    "\n" +
    "                                           ui-validate=\"{check:'$value==vm.user.password'}\"\r" +
    "\n" +
    "                                           ui-validate-watch=\" 'vm.user.password' \"\r" +
    "\n" +
    "                                           placeholder=\"{{'PASSWORD_UPDATE.REPEAT_NEW_PASSWORD_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                                           required ng-model=\"vm.user.repeated_password\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div ng-messages=\"resetPasswordForm.repeated_password.$error\"\r" +
    "\n" +
    "                                         ng-if=\"resetPasswordForm.repeated_password.$touched\">\r" +
    "\n" +
    "                                        <div class=\"help-block\" ng-message=\"check\">\r" +
    "\n" +
    "                                            <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                                            {{'PASSWORD_UPDATE.UPDATE_PASSWORD_ACTION' | translate}}\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"divider\"></div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-6 pull-right\">\r" +
    "\n" +
    "                                <button type=\"submit\" ng-disabled=\"resetPasswordForm.$invalid\"\r" +
    "\n" +
    "                                        class=\"btn btn-lg btn-danger pull-right\"\r" +
    "\n" +
    "                                        translate=\"PASSWORD_UPDATE.UPDATE_PASSWORD_ACTION\">\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/partials/authentication/register.html',
    "<div class=\"container\">\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "<div class=\"col-sm-6 col-md-4 col-md-offset-1\">\r" +
    "\n" +
    "<div class=\"user-login-box\" ng-if=\"!vm.registration_submitted_success\">\r" +
    "\n" +
    "<div class=\"header-box register\">\r" +
    "\n" +
    "    <h3 class=\"registration_effect\" ng-show=\"!registration_submitted\">{{'REGISTER_POPUP.TITLE' |\r" +
    "\n" +
    "        translate}}</h3>\r" +
    "\n" +
    "    <a class=\"pull-right\" ng-click=\"vm.close()\">\r" +
    "\n" +
    "        <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"content-box\">\r" +
    "\n" +
    "<form novalidate=\"novalidate\" ng-show=\"!registration_submitted\" name=\"UserRegisterForm\" autocomplete=\"off\"\r" +
    "\n" +
    "      ng-submit=\"vm.register()\">\r" +
    "\n" +
    "<!--<form class=\"registration_effect\" ng-show=\"!registration_submitted\" novalidate=\"novalidate\r" +
    "\n" +
    "      name=\"UserRegisterForm\"\r" +
    "\n" +
    "      autocomplete=\"off\">\"-->\r" +
    "\n" +
    "<div class=\"form-group\"\r" +
    "\n" +
    "     ng-class=\"{'has-error':UserRegisterForm.username.$error && UserRegisterForm.username.$touched }\">\r" +
    "\n" +
    "    <label>{{'REGISTER_POPUP.REGISTRATION_FORM.USERNAME' | translate}}\r" +
    "\n" +
    "    </label>\r" +
    "\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"vm.user.username\" name=\"username\"\r" +
    "\n" +
    "           placeholder=\"{{'REGISTER_POPUP.REGISTRATION_FORM.USERNAME_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "           required\r" +
    "\n" +
    "           minlength=\"4\" username-validator>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-messages=\"UserRegisterForm.username.$error\" ng-if=\"UserRegisterForm.username.$touched\">\r" +
    "\n" +
    "        <div ng-message=\"required\" class=\"help-block\">{{'COMMON.ERROR.REQUIRED_TEXT' | translate}}</div>\r" +
    "\n" +
    "        <div ng-message=\"minlength\" class=\"help-block\">\r" +
    "\n" +
    "            <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "            {{'REGISTER_POPUP.REGISTRATION_FORM.USERNAME_ERROR_MINLENGHT'\r" +
    "\n" +
    "            | translate}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div ng-message=\"username_sintax\" class=\"help-block\">\r" +
    "\n" +
    "            <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "            {{'REGISTER_POPUP.REGISTRATION_FORM.USERNAME_ERROR_SINTAX' |\r" +
    "\n" +
    "            translate}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div ng-message=\"usernameAvailability\" class=\"help-block\">\r" +
    "\n" +
    "            <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "            {{'REGISTER_POPUP.REGISTRATION_FORM.USERNAME_ERROR_AVAIBLE' | translate}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"divider\"></div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <div class=\"form-group\"\r" +
    "\n" +
    "             ng-class=\"{'has-error':UserRegisterForm.password.$error && UserRegisterForm.password.$touched }\">\r" +
    "\n" +
    "            <label>{{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD' | translate}}</label>\r" +
    "\n" +
    "            <input type=\"password\" class=\"form-control\" name=\"password\"\r" +
    "\n" +
    "                   placeholder=\"{{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                   minlength=\"8\" required ng-model=\"vm.user.password\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ng-messages=\"UserRegisterForm.password.$error\"\r" +
    "\n" +
    "                 ng-if=\"UserRegisterForm.password.$touched\">\r" +
    "\n" +
    "                <div ng-message=\"required\" class=\"help-block\">\r" +
    "\n" +
    "                    <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                    {{'COMMON.ERROR.REQUIRED_TEXT' |\r" +
    "\n" +
    "                    translate}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-message=\"minlength\" class=\"help-block\">\r" +
    "\n" +
    "                    <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                    {{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_ERROR_MINLENGHT' |\r" +
    "\n" +
    "                    translate}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\"\r" +
    "\n" +
    "             ng-class=\"{'has-error':UserRegisterForm.repeated_password.$error && UserRegisterForm.repeated_password.$touched }\">\r" +
    "\n" +
    "            <label>{{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_REPEAT' | translate}}</label>\r" +
    "\n" +
    "            <input type=\"password\" class=\"form-control\" name=\"repeated_password\"\r" +
    "\n" +
    "                   ui-validate=\"{check:'$value==vm.user.password'}\"\r" +
    "\n" +
    "                   ui-validate-watch=\" 'vm.user.password' \"\r" +
    "\n" +
    "                   placeholder=\"{{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                   required\r" +
    "\n" +
    "                   ng-model=\"vm.user.repeated_password\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ng-messages=\"UserRegisterForm.repeated_password.$error\"\r" +
    "\n" +
    "                 ng-if=\"UserRegisterForm.repeated_password.$touched\">\r" +
    "\n" +
    "                <div class=\"help-block\" ng-message=\"check\">\r" +
    "\n" +
    "                    <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                    {{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_ERROR_MISMATCH' | translate}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <div password-strength=\"vm.user.password\"></div>\r" +
    "\n" +
    "            <div class=\"password-streght-labels\">\r" +
    "\n" +
    "                <span>{{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_WEAK' | translate}}</span>\r" +
    "\n" +
    "                <span class=\"pull-right\"> {{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_STRONG' | translate}}</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <br>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p translate=\"REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_HELP_TEXT\"></p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"divider\"></div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <div class=\"form-group\"\r" +
    "\n" +
    "             ng-class=\"{'has-error':UserRegisterForm.email.$error && UserRegisterForm.email.$touched }\">\r" +
    "\n" +
    "            <label>{{'REGISTER_POPUP.REGISTRATION_FORM.EMAIL' | translate}}</label>\r" +
    "\n" +
    "            <input type=\"email\" class=\"form-control\" name=\"email\"\r" +
    "\n" +
    "                   placeholder=\"{{'REGISTER_POPUP.REGISTRATION_FORM.EMAIL_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                   required\r" +
    "\n" +
    "                   ng-model=\"vm.user.email\" email-validator>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ng-messages=\"UserRegisterForm.email.$error\"\r" +
    "\n" +
    "                 ng-if=\"UserRegisterForm.email.$touched\">\r" +
    "\n" +
    "                <div ng-message=\"required\" class=\"help-block\">\r" +
    "\n" +
    "                    <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                    {{'COMMON.ERROR.REQUIRED_TEXT' |\r" +
    "\n" +
    "                    translate}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-message=\"emailAvailability\" class=\"help-block\">\r" +
    "\n" +
    "                    <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                    {{'REGISTER_POPUP.REGISTRATION_FORM.EMAIL_ERROR_NOTAVAIBLE' | translate}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\"\r" +
    "\n" +
    "             ng-class=\"{'has-error':UserRegisterForm.repeated_email.$error && UserRegisterForm.repeated_email.$touched }\">\r" +
    "\n" +
    "            <label>{{'REGISTER_POPUP.REGISTRATION_FORM.EMAIL_REPEAT' | translate}}</label>\r" +
    "\n" +
    "            <input type=\"email\" class=\"form-control\" name=\"repeated_email\"\r" +
    "\n" +
    "                   ui-validate=\"{check:'$value==vm.user.email'}\"\r" +
    "\n" +
    "                   ui-validate-watch=\" 'vm.user.email' \"\r" +
    "\n" +
    "                   placeholder=\"{{'REGISTER_POPUP.REGISTRATION_FORM.EMAIL_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                   required\r" +
    "\n" +
    "                   ng-model=\"vm.user.repeated_email\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ng-messages=\"UserRegisterForm.repeated_email.$error\"\r" +
    "\n" +
    "                 ng-if=\"UserRegisterForm.repeated_email.$touched && UserRegisterForm.repeated_email.$error\">\r" +
    "\n" +
    "                <div class=\"help-block\" ng-message=\"check\">\r" +
    "\n" +
    "                    <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                    {{'REGISTER_POPUP.REGISTRATION_FORM.EMAIL_ERROR_MISSMATCH'\r" +
    "\n" +
    "                    | translate}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <div class=\"form-group email-text\">\r" +
    "\n" +
    "            <p>{{'REGISTER_POPUP.REGISTRATION_FORM.EMAIL_TEXT' | translate}}\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"divider\"></div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label>{{'REGISTER_POPUP.REGISTRATION_FORM.DOB' | translate}}\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control\" pick-a-date\r" +
    "\n" +
    "                   placeholder=\"{{'REGISTER_POPUP.REGISTRATION_FORM.DOB_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                   ng-model=\"vm.user.birth_date\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <div class=\"form-group \"\r" +
    "\n" +
    "             ng-class=\"{'has-error':UserRegisterForm.country.$error && UserRegisterForm.country.$touched }\">\r" +
    "\n" +
    "            <label>{{'REGISTER_POPUP.REGISTRATION_FORM.NATIONALITY' | translate}}</label>\r" +
    "\n" +
    "            <ui-select ng-model=\"vm.user.nacionality\" theme=\"bootstrap\" name=\"country\" ng-required=\"true\">\r" +
    "\n" +
    "                <ui-select-match\r" +
    "\n" +
    "                        placeholder=\"{{'REGISTER_POPUP.REGISTRATION_FORM.NATIONALITY_PLACEHOLDER' | translate}}\">\r" +
    "\n" +
    "                    {{$select.selected.name}}\r" +
    "\n" +
    "                </ui-select-match>\r" +
    "\n" +
    "                <ui-select-choices\r" +
    "\n" +
    "                        repeat=\"country in vm.countries | orderBy:'name' | filter: $select.search \">\r" +
    "\n" +
    "                    <span ng-bind-html=\"country.name | highlight: $select.search\"></span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </ui-select-choices>\r" +
    "\n" +
    "            </ui-select>\r" +
    "\n" +
    "            <div ng-messages=\"UserRegisterForm.country.$error\"\r" +
    "\n" +
    "                 ng-if=\"UserRegisterForm.country.$touched\">\r" +
    "\n" +
    "                <div class=\"help-block\" ng-message=\"required\">\r" +
    "\n" +
    "                    <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                    {{'COMMON.ERROR.REQUIRED_TEXT' | translate}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"divider\"></div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <p>LOLAZO</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label>Usuario Referido</label>\r" +
    "\n" +
    "            <script type=\"text/ng-template\" id=\"avatar_search.html\">\r" +
    "\n" +
    "                <a ui-sref=\"user.profile({id: match.model.username})\">\r" +
    "\n" +
    "                    <img ng-src=\"{{match.model.avatar}}\"\r" +
    "\n" +
    "                         width=\"16\">\r" +
    "\n" +
    "                    <span>{{match.model.username}}</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </script>\r" +
    "\n" +
    "            <input type=\"text\" ng-model=\"vm.asyncSelected\"\r" +
    "\n" +
    "                   typeahead=\"user for user in vm.find_users($viewValue)\" class=\"form-control search\"\r" +
    "\n" +
    "                   typeahead-template-url=\"avatar_search.html\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"divider\"></div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-6\">\r" +
    "\n" +
    "        <p>\r" +
    "\n" +
    "            {{'REGISTER_POPUP.REGISTRATION_FORM.TERMS_TEXT.TEXT1' | translate}} <a\r" +
    "\n" +
    "                href=\"/#/terms_and_conditions\"\r" +
    "\n" +
    "                target=\"_blank\">{{'REGISTER_POPUP.REGISTRATION_FORM.TERMS_TEXT.LINK'\r" +
    "\n" +
    "            | translate}}</a>\r" +
    "\n" +
    "            {{'REGISTER_POPUP.REGISTRATION_FORM.TERMS_TEXT.TEXT2' | translate}}\r" +
    "\n" +
    "        </p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <div ng-class=\"{'has-error':UserRegisterForm.accept.$error && UserRegisterForm.accept.$touched }\">\r" +
    "\n" +
    "            <div class=\"checkbox\">\r" +
    "\n" +
    "                <label>\r" +
    "\n" +
    "                    <input type=\"checkbox\" required name=\"accept\" ng-model=\"accept\">\r" +
    "\n" +
    "                    {{'REGISTER_POPUP.REGISTRATION_FORM.TERMS_TEXT.CHECKBOX_TEXT' | translate}}\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-3\">\r" +
    "\n" +
    "        <button type=\"submit\" ng-disabled=\"UserRegisterForm.$invalid\"\r" +
    "\n" +
    "                class=\"btn btn-lg btn-danger pull-right\">{{'REGISTER_POPUP.REGISTRATION_FORM.BUTTON' |\r" +
    "\n" +
    "            translate}}\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <!-- <button ng-click=\"vm.register()\" class=\"btn btn-lg btn-danger pull-right\">CREATE\r" +
    "\n" +
    "             ACCOUNT\r" +
    "\n" +
    "         </button>-->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</form>\r" +
    "\n" +
    "<!--  message for registration in case of success-->\r" +
    "\n" +
    "<!--<div class=\"registration_submitted registration_effect\" ng-if=\"registration_submitted\">-->\r" +
    "\n" +
    "<!--<div ng-if=\"registration_submitted_success\"> &lt;!&ndash; in case of success&ndash;&gt;-->\r" +
    "\n" +
    "<!--<p><span-->\r" +
    "\n" +
    "<!--class=\"text_big\">{{'REGISTER_POPUP.REGISTRATIION_SUCCESS.TEXT.TEXT_BIG' | translate}}</span>-->\r" +
    "\n" +
    "<!--{{'REGISTER_POPUP.REGISTRATIION_SUCCESS.TEXT.TEXT1' | translate}}-->\r" +
    "\n" +
    "<!--</p>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--<p> {{'REGISTER_POPUP.REGISTRATIION_SUCCESS.TEXT.TEXT2' | translate}}-->\r" +
    "\n" +
    "<!--<a href=\"mailto:community@electronicstars.com?Subject=Confirm%20your%20account\"-->\r" +
    "\n" +
    "<!--target=\"_top\">{{'REGISTER_POPUP.REGISTRATIION_SUCCESS.TEXT.EMAIL' | translate}}</a>.-->\r" +
    "\n" +
    "<!--</p>-->\r" +
    "\n" +
    "<!--<i class=\"fa fa-check\"></i>-->\r" +
    "\n" +
    "<!--</div>-->\r" +
    "\n" +
    "<!--<div ng-if=\"!registration_submitted_success\"> &lt;!&ndash; in case of error&ndash;&gt;-->\r" +
    "\n" +
    "<!--<p><span class=\"text_big\">{{'REGISTER_POPUP.REGISTRATIION_ERROR.TEXT_BIG' | translate}}</span>-->\r" +
    "\n" +
    "<!--{{'REGISTER_POPUP.REGISTRATIION_ERROR.TEXT' | translate}}-->\r" +
    "\n" +
    "<!--</p>-->\r" +
    "\n" +
    "<!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"user-login-box\" ng-if=\"vm.registration_submitted_success\">\r" +
    "\n" +
    "    <div class=\"header-box register\">\r" +
    "\n" +
    "        <h3 class=\"registration_effect\">\r" +
    "\n" +
    "            {{'REGISTER_POPUP.TITLE_SUCCESS' |\r" +
    "\n" +
    "            translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"vm.close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"content-box\">\r" +
    "\n" +
    "        <div class=\"registration_submitted registration_effect\">\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <span\r" +
    "\n" +
    "                            class=\"text_big\">{{'REGISTER_POPUP.REGISTRATIION_SUCCESS.TEXT.TEXT_BIG' | translate}}</span>\r" +
    "\n" +
    "                    {{'REGISTER_POPUP.REGISTRATIION_SUCCESS.TEXT.TEXT1' | translate}}\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p> {{'REGISTER_POPUP.REGISTRATIION_SUCCESS.TEXT.TEXT2' | translate}}\r" +
    "\n" +
    "                    <a href=\"mailto:community@electronicstars.com?Subject=Confirm%20your%20account\"\r" +
    "\n" +
    "                       target=\"_top\">{{'REGISTER_POPUP.REGISTRATIION_SUCCESS.TEXT.EMAIL' | translate}}</a>.\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <i class=\"fa fa-check\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!--<div ng-if=\"!registration_submitted_success\"> &lt;!&ndash; in case of error&ndash;&gt;-->\r" +
    "\n" +
    "            <!--<p><span class=\"text_big\">{{'REGISTER_POPUP.REGISTRATIION_ERROR.TEXT_BIG' | translate}}</span>-->\r" +
    "\n" +
    "            <!--{{'REGISTER_POPUP.REGISTRATIION_ERROR.TEXT' | translate}}-->\r" +
    "\n" +
    "            <!--</p>-->\r" +
    "\n" +
    "            <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/partials/cashform/index.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashform.index as _cashform\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHFORM.INDEX.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-6 cash-box-left\">\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"cash-heading\">\r" +
    "\n" +
    "\t\t\t\t\t\t<h3>My cash</h3>\r" +
    "\n" +
    "\t\t\t\t\t\t<button class=\"close-button\">x</button>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>Real cash</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div><span>Balance</span><input type=\"number\" value=\"\" placeholder=\"100\" /></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div><span>Available</span><input type=\"number\" value=\"\" placeholder=\"100\" /></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div><span>Clan cash</span><input type=\"number\" value=\"\" placeholder=\"100\" /><button>top up</button></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div><span>Total</span><input type=\"number\" value=\"\" placeholder=\"100\" /></div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>Play credit</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div><span>Balance</span><input type=\"number\" value=\"\" placeholder=\"100\" /></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div><span>Available</span><input type=\"number\" value=\"\" placeholder=\"100\" /></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div><span>Total</span><input type=\"number\" value=\"\" placeholder=\"100\" /></div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\t\t\t\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"actions-btns\">\r" +
    "\n" +
    "                    <div class=\"col-md-3\">\r" +
    "\n" +
    "                        <button class=\"btn btn-block btn-large btn-danger\">Top up now!\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-3\">\r" +
    "\n" +
    "                        <button class=\"btn btn-block btn-large btn-default\"\r" +
    "\n" +
    "                                ng-click=\"go_to('profile.cashier.play_credits')\">\r" +
    "\n" +
    "                            Recharge!\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"wallet-box-fotter\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\">\r" +
    "\n" +
    "                <div class=\"stars-detail\">\r" +
    "\n" +
    "                    <i class=\"fa fa-star\"></i>\r" +
    "\n" +
    "\t\t\t\t\t<span>star points collected to date</span>\r" +
    "\n" +
    "                    <span class=\"value\">{{_cashier.cashier.frecuenly_player_points|number:2}}</span>\r" +
    "\n" +
    "\t\t\t\t\t<span>more info</span>\r" +
    "\n" +
    "                    <span class=\"detail\">{{'CASHIER.INDEX.FOOTER' | translate}}e</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashform/mastercard-payment.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashform.user.index as _cashform\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHFORM.PAYMENT.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-6 cash-box-left\">\r" +
    "\n" +
    "\t\t\t\t\t<form method=\"post\" id=\"mastercard-payment\">\r" +
    "\n" +
    "\t\t\t\t\t\t<fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"\">Choose card</label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>New card</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>Existing card</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"\">Card number</label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"text\" id=\"cardNumber\" name=\"cardNumber\" value=\"\" pattern=\"[\\d\\ ]{12,}\" placeholder=\"xxxxxxxxxxxx\" required />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\tExpires\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"expMonth\"></label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>01</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>02</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>03</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>04</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>05</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>06</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>07</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>08</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>09</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>10</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>11</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>12</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"expYear\"></label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>15</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>16</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>17</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>18</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>19</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>20</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>21</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"cardCode\">CVC</label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"text\" id=\"cardCode\" name=\"\" value=\"\" size=\"3\" required />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"storeCard\"></label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"storeCard\" name=\"\" value=\"\" /> Store card details\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t</fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div>Deposit  with MasterCard </div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<img ng-src=\"{{cashform.mastercardimg}}\" alt=\"MasterCard\" title=\"MasterCard\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<button>Deposit</button>\r" +
    "\n" +
    "\t\t\t\t\t</form>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashform/neteller-payment.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashform.user.index as _cashform\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHFORM.PAYMENT.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-6 cash-box-left\">\r" +
    "\n" +
    "\t\t\t\t\t<form method=\"post\" id=\"neteller-payment\">\r" +
    "\n" +
    "\t\t\t\t\t\t<fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t</fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div>Deposit  with Neteller </div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<img ng-src=\"{{cashform.netellerimg}}\" alt=\"Neteller\" title=\"Neteller\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<button>Deposit</button>\r" +
    "\n" +
    "\t\t\t\t\t</form>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashform/paypal-payment.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashform.user.index as _cashform\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHFORM.PAYMENT.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-6 cash-box-left\">\r" +
    "\n" +
    "\t\t\t\t\t<form method=\"post\" id=\"paypal-payment\">\r" +
    "\n" +
    "\t\t\t\t\t\t<fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t</fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div>Deposit  with PayPal </div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<img ng-src=\"{{cashform.paypalimg}}\" alt=\"PayPal\" title=\"PayPal\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<button>Deposit</button>\r" +
    "\n" +
    "\t\t\t\t\t</form>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashform/select-payment.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashform.index as _cashform\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHFORM.INDEX.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-6 cash-box-left\">\r" +
    "\n" +
    "\t\t\t\t\t<form method=\"post\" id=\"select-cash-payment\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div>Select payment method</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<fieldset ng-repeat=\"paymethod in paymethods\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"paymethod.methodId\"><img ng-src=\"{{paymethod.image}}\" alt=\"paymethod.name\" title=\"paymethod.name\" /></label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"radio\" id=\"paymethod.methodId\" name=\"selectPayment\" value=\"paymethod.methodValue\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>Select amount</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<fieldset ng-repeat=\"payamount in payamounts\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"payamount.amountId\"><i class=\"fa fa-gbp\"></i>25</label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"radio\" id=\"payamount.amountId\" name=\"selectAmount\" value=\"payamount.amountValue\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"chosenAmount\">Deposit: </label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"number\" id=\"chosenAmount\" value=\"\" placeholder=\"\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<button>Next</button>\r" +
    "\n" +
    "\t\t\t\t\t</form>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashform/skrill-payment.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashform.user.index as _cashform\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHFORM.PAYMENT.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-6 cash-box-left\">\r" +
    "\n" +
    "\t\t\t\t\t<form method=\"post\" id=\"skrill-payment\">\r" +
    "\n" +
    "\t\t\t\t\t\t<fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t</fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div>Deposit  with Skrill </div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<img ng-src=\"{{cashform.skrillimg}}\" alt=\"Skrill\" title=\"Skrill\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<button>Deposit</button>\r" +
    "\n" +
    "\t\t\t\t\t</form>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashform/thank-you-clan-cash.html',
    ""
  );


  $templateCache.put('views/partials/cashform/thank-you-real-cash.html',
    ""
  );


  $templateCache.put('views/partials/cashform/ukash-payment.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashform.user.index as _cashform\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHFORM.PAYMENT.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-6 cash-box-left\">\r" +
    "\n" +
    "\t\t\t\t\t<form method=\"post\" id=\"ukash-payment\">\r" +
    "\n" +
    "\t\t\t\t\t\t<fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t</fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div>Deposit  with Ukash </div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<img ng-src=\"{{cashform.ukashimg}}\" alt=\"Ukash\" title=\"Ukash\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<button>Deposit</button>\r" +
    "\n" +
    "\t\t\t\t\t</form>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashform/visa-payment.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashform.user.index as _cashform\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHFORM.PAYMENT.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-6 cash-box-left\">\r" +
    "\n" +
    "\t\t\t\t\t<form method=\"post\" id=\"visa-payment\">\r" +
    "\n" +
    "\t\t\t\t\t\t<fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"\">Choose card</label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>New card</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>Existing card</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"\">Card number</label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"text\" id=\"cardNumber\" name=\"cardNumber\" value=\"\" pattern=\"[\\d\\ ]{12,}\" placeholder=\"xxxxxxxxxxxx\" required />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\tExpires\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"expMonth\"></label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>01</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>02</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>03</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>04</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>05</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>06</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>07</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>08</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>09</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>10</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>11</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>12</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"expYear\"></label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>15</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>16</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>17</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>18</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>19</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>20</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<option>21</option>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</select>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"cardCode\">CVC</label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"text\" id=\"cardCode\" name=\"\" value=\"\" size=\"3\" required />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t\t<label for=\"storeCard\"></label>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"storeCard\" name=\"\" value=\"\" /> Store card details\r" +
    "\n" +
    "\t\t\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t\t\t</fieldset>\r" +
    "\n" +
    "\t\t\t\t\t\t<div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div>Deposit  with Visa </div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<img ng-src=\"{{cashform.visaimg}}\" alt=\"Visa\" title=\"Visa\" />\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<button>Deposit</button>\r" +
    "\n" +
    "\t\t\t\t\t</form>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashier/historic.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashier.user.history as _cashier\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHIER.HISTORY.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <table class=\"table table-striped table-wallet-history\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <th style=\"width: 20%\">{{'CASHIER.HISTORY.COL1' | translate}}</th>\r" +
    "\n" +
    "                            <th style=\"width: 35%\">{{'CASHIER.HISTORY.COL2' | translate}}</th>\r" +
    "\n" +
    "                            <th style=\"width: 25%\">{{'CASHIER.HISTORY.COL3' | translate}}</th>\r" +
    "\n" +
    "                            <th style=\"width: 15%\">{{'CASHIER.HISTORY.COL4' | translate}}</th>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                    <div class=\"table-content-scrollable\" scroll-bar>\r" +
    "\n" +
    "                        <table class=\"table table-striped table-wallet-history\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                            <tr ng-repeat=\"action in _cashier.actions|orderBy:'-date'\">\r" +
    "\n" +
    "                                <td class=\"blacked\" style=\"width: 21%\">{{action.date | date:\"dd/MM/yyyy\"}}</td>\r" +
    "\n" +
    "                                <td style=\"width: 38%\">{{action.action}}</td>\r" +
    "\n" +
    "                                <td class=\"blacked\" style=\"width: 20%\">{{action.amount}}\r" +
    "\n" +
    "                                    <i class=\"\"\r" +
    "\n" +
    "                                       ng-class=\"{'fel fel-fel_money_electornic':action.cash_type=='FAKE_CASH','fel fel-fel_money_euro':action  .cash_type=='REAL_CASH'}\"></i>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td></td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--<div class=\"wallet-box-fotter\">-->\r" +
    "\n" +
    "    <!--<div class=\"row\">-->\r" +
    "\n" +
    "    <!--<div class=\"col-md-6\">-->\r" +
    "\n" +
    "    <!--<div class=\"stars-detail\">-->\r" +
    "\n" +
    "    <!--<i class=\"fa fa-star\"></i>-->\r" +
    "\n" +
    "    <!--<span class=\"value\">{{_cashier.cashier.frecuenly_player_points|number:2}}</span>-->\r" +
    "\n" +
    "    <!--<span class=\"detail\">star points collected to date</span>-->\r" +
    "\n" +
    "    <!--</div>-->\r" +
    "\n" +
    "    <!--</div>-->\r" +
    "\n" +
    "    <!--</div>-->\r" +
    "\n" +
    "    <!--</div>-->\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashier/index.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashier.user.index as _cashier\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>{{'CASHIER.INDEX.TITLE' | translate}}</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <table class=\"table table-wallet\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <th colspan=\"2\" class=\"red\">{{'CASHIER.INDEX.COL1' | translate}}</th>\r" +
    "\n" +
    "                            <th colspan=\"2\">{{'CASHIER.INDEX.COL2' | translate}}</th>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td class=\"blacked\">{{'CASHIER.INDEX.COL4' | translate}}</td>\r" +
    "\n" +
    "                            <td>{{_cashier.cashier.money|number:2}} <i class=\"fel fel-fel_money_euro\"></i></td>\r" +
    "\n" +
    "                            <td class=\"blacked\">{{'CASHIER.INDEX.COL3' | translate}}</td>\r" +
    "\n" +
    "                            <td>{{_cashier.cashier.points|number:2}} <i class=\"fel fel-fel_money_electornic\"></i></td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td class=\"blacked\">Tournament money</td>\r" +
    "\n" +
    "                            <td>{{_cashier.cashier.play_money|number:2}} <i class=\"fel fel-fel_money_euro\"></i></td>\r" +
    "\n" +
    "                            <td class=\"blacked\">{{'CASHIER.INDEX.COL4' | translate}}</td>\r" +
    "\n" +
    "                            <td> {{_cashier.cashier.points|number:2}} <i class=\"fel fel-fel_money_electornic\"></i></td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td class=\"blacked\">{{'CASHIER.INDEX.COL5' | translate}}</td>\r" +
    "\n" +
    "                            <td>{{_cashier.cashier.total_money|number:2}} <i class=\"fel fel-fel_money_euro\"></i></td>\r" +
    "\n" +
    "                            <td class=\"blacked\">{{'CASHIER.INDEX.COL5' | translate}}</td>\r" +
    "\n" +
    "                            <td>{{_cashier.cashier.points|number:2}} <i class=\"fel fel-fel_money_electornic\"></i></td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"actions-btns\">\r" +
    "\n" +
    "                    <div class=\"col-md-3\">\r" +
    "\n" +
    "                        <button class=\"btn btn-block btn-large btn-danger\">\r" +
    "\n" +
    "                            {{'CASHIER.INDEX.BUTTON.TOPUP' | translate}}\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-3\">\r" +
    "\n" +
    "                        <button class=\"btn btn-block btn-large btn-default\"\r" +
    "\n" +
    "                                ng-click=\"go_to('profile.cashier.play_credits')\" translate=\"CASHIER.INDEX.BUTTON.GET_PLAY_CREDITS\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <br><br>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <p>If you have a money bonus , you can redeem here , enter you code.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <form class=\"form-inline\" novalidate=\"novalidate\" ng-submit=\"_cashier.reedem()\" name=\"CodeForm\">\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"col-md-5\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" ng-model=\"_cashier.code\"\r" +
    "\n" +
    "                                           placeholder=\"Enter Reedem Code\" require>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <button type=\"submit\" class=\"btn btn-default btn-danger\" ng-disabled=\"CodeForm.$invalid\">\r" +
    "\n" +
    "                                Reedem Code\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"wallet-box-fotter\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\">\r" +
    "\n" +
    "                <div class=\"stars-detail\">\r" +
    "\n" +
    "                    <i class=\"fa fa-star\"></i>\r" +
    "\n" +
    "                    <span class=\"value\">{{_cashier.cashier.frecuenly_player_points|number:2}}</span>\r" +
    "\n" +
    "                    <span class=\"detail\">{{'CASHIER.INDEX.FOOTER' | translate}}e</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/cashier/play-recharge.html',
    "<div class=\"edit-profile-box\" ng-controller=\"cashier.user.credits as _cashier\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <h3>GET PLAY CREDITS</h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\" ngCloak>\r" +
    "\n" +
    "        <div class=\"wallet-box\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <ul class=\"play-recharges\">\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <div class=\"used\"></div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <div ng-class=\"{'used':_cashier.recharges_left<=1}\"></div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <div ng-class=\"{'used':_cashier.recharges_left==0}\"></div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <p>\r" +
    "\n" +
    "                        {{'CASHIER.RECHARGE.TEXT1' | translate}} {{_cashier.recharges_left}} {{'CASHIER.RECHARGE.TEXT2'\r" +
    "\n" +
    "                        | translate}}\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>\r" +
    "\n" +
    "                        {{'CASHIER.RECHARGE.TEXT3' | translate}}\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p class=\"red\">\r" +
    "\n" +
    "                        You can get play credits when your balance is under 100 <i\r" +
    "\n" +
    "                            class=\"fel fel-fel_money_electornic\"></i> up to 2 times per day\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"actions-btns\">\r" +
    "\n" +
    "                    <div class=\"col-md-3\">\r" +
    "\n" +
    "                        <button class=\"btn btn-block btn-large btn-danger\" ng-click=\"_cashier.charge()\"\r" +
    "\n" +
    "                                ng-disabled=\"!_cashier.can_recharge\">\r" +
    "\n" +
    "                            GET PLAY CREDITS\r" +
    "\n" +
    "                            <small>(+500 <i class=\"fel fel-fel_money_electornic\"></i>)</small>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/chat/index.html',
    "<section ng-controller=\"chat as _chat\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"chat-box\" ng-class=\"{'opened':_chat.is_open}\">\r" +
    "\n" +
    "        <div class=\"chat-header\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-2\">\r" +
    "\n" +
    "                    <div class=\"opener\" ng-click=\"_chat.toggle_chat()\" ng-class=\"{'opened':_chat.is_open}\">\r" +
    "\n" +
    "                        <i class=\" fa fa-comment-o\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-md-4\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--<div class=\"divider\">-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <div class=\"chat-message-box\">\r" +
    "\n" +
    "            <div class=\"chat-message-header\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>{{_chat.game_channel.name}}</h4>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"chat-message-content\" scroll-bar element=\"chat\">\r" +
    "\n" +
    "                <ul>\r" +
    "\n" +
    "                    <li class=\"clearfix\" ng-repeat=\"message in _chat.messages|orderBy :'created_time'\"\r" +
    "\n" +
    "                        ng-class=\"{'left':message.from_user.id==_chat.current_id,'right':message.from_user.id!=_chat.current_id}\">\r" +
    "\n" +
    "                        <div class=\"user-img \"\r" +
    "\n" +
    "                             ng-class=\"{'pull-left':message.from_user.id==_chat.current_id,'pull-right':message.from_user.id!=_chat.current_id}\">\r" +
    "\n" +
    "                            <img ng-src=\"{{message.from_user.avatar}}\"\r" +
    "\n" +
    "                                 alt=\"User Avatar\"/></div>\r" +
    "\n" +
    "                        <div class=\"chat-body clearfix\">\r" +
    "\n" +
    "                            <p ng-bind-html=\"message.message | emoticons:{link:true,linkTarget:'_blank'}\"></p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"header\">\r" +
    "\n" +
    "                                <span class=\"name\">{{message.from_user.username}} <i class=\"fa fa-clock-o\"></i> {{message.created_time|timeAgo | date:'HH:mm'}}</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <!--<li class=\"right clearfix\">-->\r" +
    "\n" +
    "                    <!--<span class=\"user-img pull-right\">-->\r" +
    "\n" +
    "                    <!--<img src=\"https://electronics3.s3.amazonaws.com/avatars/406000482616011220143537.png\"-->\r" +
    "\n" +
    "                    <!--alt=\"User Avatar\">-->\r" +
    "\n" +
    "                    <!--</span>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--<div class=\"chat-body clearfix\">-->\r" +
    "\n" +
    "                    <!--<div class=\"header\">-->\r" +
    "\n" +
    "                    <!--<span class=\"name\">Anton Durant</span>-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                    <!--<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare-->\r" +
    "\n" +
    "                    <!--dolor, quis ullamcorper ligula sodales. </p>-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                    <!--</li>-->\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"chat-message-writter\">\r" +
    "\n" +
    "                <div class=\"wrapper-writter\">\r" +
    "\n" +
    "                    <textarea ng-model=\"_chat.message\" msd-elastic ui-keypress=\"{13:'_chat.add_message($event)'}\"\r" +
    "\n" +
    "                              placeholder=\"Write Your Message Here\" rows=\"1\"\r" +
    "\n" +
    "                              class=\"form-control\">\r" +
    "\n" +
    "                    </textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('views/partials/community/index.html',
    "<div class=\"cover-slider\">\n" +
    "    <img src=\"images/community/community-home.png\">\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <whotofollow></whotofollow>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <community-nav-tabs>\n" +
    "                <friends title=\"FRIENDS\">\n" +
    "                </friends>\n" +
    "\n" +
    "                <followers title=\"FOLLOWERS\">\n" +
    "                </followers>\n" +
    "\n" +
    "                <following title=\"FOLLOWING\">\n" +
    "                </following>\n" +
    "\n" +
    "                <invite title=\"INVITE\">\n" +
    "                </invite>\n" +
    "            </community-nav-tabs>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <section class=\"box-with-header recruit-me\">\n" +
    "                <div class=\"box-header\">\n" +
    "                    <i class=\"fa fa-users\"></i>\n" +
    "\n" +
    "                    <h3>RECRUIT ME</h3>\n" +
    "                </div>\n" +
    "                <div class=\"box-content\">\n" +
    "\n" +
    "                </div>\n" +
    "            </section>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <section class=\"recruitment-forum\">\n" +
    "                <div class=\"box-header\">\n" +
    "                    <i class=\"fa fa-users\"></i>\n" +
    "\n" +
    "                    <h3>RECRUITMENT FORUM</h3>\n" +
    "                </div>\n" +
    "                <div class=\"box-content\"></div>\n" +
    "            </section>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <twitter></twitter>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <facebook></facebook>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/partials/download/index.html',
    "<div class=\"container\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"btn-close-wrapper\">\r" +
    "\n" +
    "        <button class=\"btn btn-close\" ng-click=\"close()\">x</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-2\">\r" +
    "\n" +
    "            <div class=\"tournament-detail-info\">\r" +
    "\n" +
    "                <div class=\"details\">\r" +
    "\n" +
    "                    <ul class=\"detail-menu\">\r" +
    "\n" +
    "                        <li ng-class=\"{'active':menuItem=='5'}\" ng-click=\"toggleMenu('5')\">\r" +
    "\n" +
    "                            <a>\r" +
    "\n" +
    "                                <i class=\"fa fa-square\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <span class=\"title\">\r" +
    "\n" +
    "                            TECHICAL SPECS\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                                <span class=\"arrow\"></span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\r" +
    "\n" +
    "                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\r" +
    "\n" +
    "                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\r" +
    "\n" +
    "                                    It has survived not only five centuries, but also the leap into electronic\r" +
    "\n" +
    "                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with\r" +
    "\n" +
    "                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently\r" +
    "\n" +
    "                                    with desktop publishing software like Aldus PageMaker including versions of Lorem\r" +
    "\n" +
    "                                    Ipsum.</p>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li ng-class=\"{'active':menuItem=='6'}\" ng-click=\"toggleMenu('6')\">\r" +
    "\n" +
    "                            <a>\r" +
    "\n" +
    "                                <i class=\"fa fa-square\"></i>\r" +
    "\n" +
    "                                <span class=\"title\">\r" +
    "\n" +
    "                            EULA\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                                <span class=\"arrow\"></span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\r" +
    "\n" +
    "                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\r" +
    "\n" +
    "                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\r" +
    "\n" +
    "                                    It has survived not only five centuries, but also the leap into electronic\r" +
    "\n" +
    "                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with\r" +
    "\n" +
    "                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently\r" +
    "\n" +
    "                                    with desktop publishing software like Aldus PageMaker including versions of Lorem\r" +
    "\n" +
    "                                    Ipsum.\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li ng-class=\"{'active':menuItem=='7'}\" ng-click=\"toggleMenu('7')\">\r" +
    "\n" +
    "                            <a>\r" +
    "\n" +
    "                                <i class=\"fa fa-square\"></i>\r" +
    "\n" +
    "                                <span class=\"title\">\r" +
    "\n" +
    "                            TERMS OF SERVICE\r" +
    "\n" +
    "                                 </span>\r" +
    "\n" +
    "                                <span class=\"arrow\"></span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <ul class=\"actions-sub-menu\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\r" +
    "\n" +
    "                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\r" +
    "\n" +
    "                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\r" +
    "\n" +
    "                                    It has survived not only five centuries, but also the leap into electronic\r" +
    "\n" +
    "                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with\r" +
    "\n" +
    "                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently\r" +
    "\n" +
    "                                    with desktop publishing software like Aldus PageMaker including versions of Lorem\r" +
    "\n" +
    "                                    Ipsum.\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-md-4\">\r" +
    "\n" +
    "            <div class=\"download-box\">\r" +
    "\n" +
    "                <div class=\"detail-img\"></div>\r" +
    "\n" +
    "                <div class=\"detail-footer\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-4\">\r" +
    "\n" +
    "                            <div class=\"info\">\r" +
    "\n" +
    "                                <h4>DOWNLOAD APP</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Install our client app and introduce your account details to compete in\r" +
    "\n" +
    "                                    Electronicstars.\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-2 \">\r" +
    "\n" +
    "                            <div class=\"download-link-box\">\r" +
    "\n" +
    "                                <a class=\"btn btn-block btn-lg btn-cancel\"\r" +
    "\n" +
    "                                   href=\"https://s3-eu-west-1.amazonaws.com/electronics3/downloads/software/Electronicstars.msi\"\r" +
    "\n" +
    "                                   target=\"_blank\"><i class=\"fa fa-windows\"></i> DOWNLOAD</a>\r" +
    "\n" +
    "                                <!--<h4>DOWNLOAD NOW</h4>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--<ul class=\"download-list\">-->\r" +
    "\n" +
    "                                    <!--<li>-->\r" +
    "\n" +
    "                                        <!--<a href=\"https://s3-eu-west-1.amazonaws.com/electronics3/downloads/software/Electronicstars.msi\"-->\r" +
    "\n" +
    "                                           <!--target=\"_blank\"><i class=\"fa fa-windows\"></i></a>-->\r" +
    "\n" +
    "                                    <!--</li>-->\r" +
    "\n" +
    "                                    <!--<li>-->\r" +
    "\n" +
    "                                        <!--<a class=\"desactivated\"><i class=\"fa fa-linux\"></i></a>-->\r" +
    "\n" +
    "                                    <!--</li>-->\r" +
    "\n" +
    "                                    <!--<li>-->\r" +
    "\n" +
    "                                        <!--<a class=\"desactivated\"><i class=\"fa fa-apple\"></i></a>-->\r" +
    "\n" +
    "                                    <!--</li>-->\r" +
    "\n" +
    "                                <!--</ul>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/error/error.html',
    "<section>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div class=\"error_page\">\n" +
    "                    <img src=\"images/common/error_background.png\" alt=\"error\">\n" +
    "                    <span class=\"error-text col-md-offset-1\">Sorry there is a problem!</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('views/partials/faq/faq.html',
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-2  hidden-xs hidden-print hidden-sm \">\r" +
    "\n" +
    "            <div class=\"faq_side_menu\">\r" +
    "\n" +
    "                <nav class=\"hidden-xs hidden-print hidden-sm \">\r" +
    "\n" +
    "                    <ul class=\"nav nav-stacked\" role=\"tablist\">\r" +
    "\n" +
    "                        <li ng-repeat=\"c in _faq.categories|orderBy:'order'\">\r" +
    "\n" +
    "                            <a href=\"#{{c.name}}\" ng-click=\"c.opened=false\" du-smooth-scroll duration=\"500\"\r" +
    "\n" +
    "                               offset=\"150\" du-scrollspy>\r" +
    "\n" +
    "                                <span ng-repeat=\"title in c.title\" ng-if=\"title.language=='ES'\">\r" +
    "\n" +
    "                                    {{title.content | uppercase}}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </nav>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-4 \" role=\"main\" du-scroll-container>\r" +
    "\n" +
    "            <div class=\"faq-wrapper\">\r" +
    "\n" +
    "                <article id=\"{{c.name}}\" ng-repeat=\"c in _faq.categories|orderBy:'order'\">\r" +
    "\n" +
    "                    <h3 ng-click=\"c.opened = !c.opened\" ng-init=\"c.opened = $index==0 ? true : false\">\r" +
    "\n" +
    "                         <span ng-repeat=\"title in c.title\" ng-if=\"title.language=='ES'\">\r" +
    "\n" +
    "                                    {{title.content}}\r" +
    "\n" +
    "                                </span><i class=\"fa pull-right\"\r" +
    "\n" +
    "                                          ng-class=\"{'fa-chevron-right':c.opened,'fa-chevron-down':!c.opened}\"></i>\r" +
    "\n" +
    "                    </h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"sub-content\" collapse=\"!c.opened\" ng-repeat=\"article in c.articles\">\r" +
    "\n" +
    "                        <div class=\"init-content\"></div>\r" +
    "\n" +
    "                        <div class=\"terms-item\">\r" +
    "\n" +
    "                            <div class=\"item-title\">\r" +
    "\n" +
    "                                <span ng-repeat=\"title in article.title\" ng-if=\"title.language=='ES'\">\r" +
    "\n" +
    "                                    {{title.content}}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div ng-repeat=\"text in article.text\" ng-if=\"text.language=='ES'\"\r" +
    "\n" +
    "                                 ng-bind-html=\"text.content\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </article>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/game-center/index.html',
    "<div class=\"cover-slider\">\r" +
    "\n" +
    "    <slicker class=\"slider\" arrows=\"false\" settings=\"slickConfig\" control=\"slickHandle\" media=\"slidesData\"\r" +
    "\n" +
    "             on-directive-init=\"onDirectiveInit()\" is-image=\"isImage(slidesData)\"\r" +
    "\n" +
    "             is-video=\"isVideo(slidesData)\">\r" +
    "\n" +
    "    </slicker>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "<div class=\"col-md-2\">\r" +
    "\n" +
    "    <section class=\"slider-ctrl-box\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <a class=\"slick-timer-prev\" ng-click=\"sliderPrev()\">\r" +
    "\n" +
    "            prev\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "        <timer\r" +
    "\n" +
    "                interval=\"1000\">\r" +
    "\n" +
    "            <div class=\"timer-box progress active\">\r" +
    "\n" +
    "                <div style=\"width:170px;height: 40px;\">\r" +
    "\n" +
    "                    <div class=\"progress-bar progress-bar-rect\" aria-valuenow=\"0\"\r" +
    "\n" +
    "                         aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: {{counter}}%;\"></div>\r" +
    "\n" +
    "                    <div class=\"progress-bar;red-triangle\" aria-valuenow=\"0\"\r" +
    "\n" +
    "                         aria-valuemin=\"0\" aria-valuemax=\"5\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <span>timer</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </timer>\r" +
    "\n" +
    "        <a class=\"slick-timer-next\" ng-click=\"sliderNext()\">\r" +
    "\n" +
    "            <span>next</span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <section class=\"box-only-header  top-up-now btn btn-danger btn-block\">\r" +
    "\n" +
    "    <a ng-click=\"open_wallet()\">\r" +
    "\n" +
    "            <i class=\"fa fa-credit-card\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <h3>TOP UP NOW!</h3>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--<section class=\"box-with-header \">-->\r" +
    "\n" +
    "        <!--<div class=\"box-header\">-->\r" +
    "\n" +
    "            <!--<i class=\"fa fa-thumbs-o-up\"></i>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <!--<h3>VOTE!</h3>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"box-content vote-to-win\">-->\r" +
    "\n" +
    "            <!--<div class=\"row\">-->\r" +
    "\n" +
    "                <!--<div class=\"col-md-6\">-->\r" +
    "\n" +
    "                    <!--<h4>VOTE TO WIN!</h4>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--<p>Vote for the next game on Electronic Stars!</p>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "            <!--</div>-->\r" +
    "\n" +
    "            <!--<div class=\"row\">-->\r" +
    "\n" +
    "                <!--<div class=\"col-md-3 game\">-->\r" +
    "\n" +
    "                    <!--<a ui-sref=\"game.vote\">-->\r" +
    "\n" +
    "                        <!--<img src=\"images/test/assassin-3.jpg\" class=\"img-responsive\">-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!--<div class=\"text-center \">SELECT GAME</div>-->\r" +
    "\n" +
    "                    <!--</a>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--<div class=\"game-description\">-->\r" +
    "\n" +
    "                        <!--ASSASSIN'S CREED III-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "                <!--<div class=\"col-md-3 game\">-->\r" +
    "\n" +
    "                    <!--<a ui-sref=\"game.vote\">-->\r" +
    "\n" +
    "                        <!--<img src=\"images/test/assassin-3.jpg\" class=\"img-responsive\">-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!--<div class=\"text-center \">SELECT GAME</div>-->\r" +
    "\n" +
    "                    <!--</a>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--<div class=\"game-description\">-->\r" +
    "\n" +
    "                        <!--ASSASSIN'S CREED III-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "            <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <!--<div class=\"box-footer\">-->\r" +
    "\n" +
    "            <!--<button class=\"btn btn-danger btn-lg btn-block\">-->\r" +
    "\n" +
    "                <!--VOTE NOW ! <i class=\"fa fa-chevron-right\"></i>-->\r" +
    "\n" +
    "            <!--</button>-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "    <!--</section>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!--<twitter></twitter>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!--<facebook></facebook>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"col-md-4\">\r" +
    "\n" +
    "    <game-center-nav-tabs>\r" +
    "\n" +
    "        <electronic-games\r" +
    "\n" +
    "                title=\"GAMES\" games=\"games\">\r" +
    "\n" +
    "        </electronic-games>\r" +
    "\n" +
    "        <electronic-games\r" +
    "\n" +
    "                title=\"MY GAMES\" games=\"games\">\r" +
    "\n" +
    "        </electronic-games>\r" +
    "\n" +
    "        <electronic-games\r" +
    "\n" +
    "                title=\"MOST PLAYED\" games=\"games\">\r" +
    "\n" +
    "        </electronic-games>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </game-center-nav-tabs>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <section class=\"games-box\">\r" +
    "\n" +
    "        <div class=\"box-header\">\r" +
    "\n" +
    "            <h3>ALL GAMES</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"secundary-filter-box\">\r" +
    "\n" +
    "                <form class=\"form-inline\" role=\"form\">\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label class=\"filter-label\">FILTER BY</label>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <div dropdown-multiselect options=\"genereDropdown\"\r" +
    "\n" +
    "                             selected-model=\"_genere_filter\"\r" +
    "\n" +
    "                             extra-settings=\"filter_settings\" checkboxes=\"true\"\r" +
    "\n" +
    "                             translation-texts=\"{buttonDefaultText: 'GENERE'}\"></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"form-group pull-right\">\r" +
    "\n" +
    "                        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"Search\" name=\"srch-term\"\r" +
    "\n" +
    "                               id=\"srch-term\" ng-model=\"query\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"table-box\">\r" +
    "\n" +
    "            <div class=\"table-content\">\r" +
    "\n" +
    "                <table class=\"table table-games\">\r" +
    "\n" +
    "                    <thead>\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <th>GAME NAME</th>\r" +
    "\n" +
    "                        <th>FRIENDS</th>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                    </thead>\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                    <tr ng-repeat=\"g in games \">\r" +
    "\n" +
    "                        <td>\r" +
    "\n" +
    "                            <div class=\"col-md-6\">\r" +
    "\n" +
    "                                <div class=\"col-md-2\">\r" +
    "\n" +
    "                                    <div class=\"cover-container\">\r" +
    "\n" +
    "                                        <a ui-sref=\"tournaments.list({ game_slug: g.slug })\">\r" +
    "\n" +
    "                                            <div class=\"box-cover\"></div>\r" +
    "\n" +
    "                                            <img ng-src=\"{{g.box}}\" alt=\"...\">\r" +
    "\n" +
    "                                        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"cover-stars\">\r" +
    "\n" +
    "                                        <span>\r" +
    "\n" +
    "                                             <i class=\"fa fa-star\"></i>\r" +
    "\n" +
    "                                             <i class=\"fa fa-star\"></i>\r" +
    "\n" +
    "                                             <i class=\"fa fa-star-half-full\"></i>\r" +
    "\n" +
    "                                             <i class=\"fa fa-star-o\"></i>\r" +
    "\n" +
    "                                            <i class=\"fa fa-star-o\"></i>\r" +
    "\n" +
    "                                         </span>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"col-md-4 game-name\">\r" +
    "\n" +
    "                                    <a ui-sref=\"tournaments.list({ game_slug: g.slug })\">{{g.name}}</a>\r" +
    "\n" +
    "                                    <span> {{g.description}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                        <td>\r" +
    "\n" +
    "                            <!--<div class=\"frieds-plaing-container\">-->\r" +
    "\n" +
    "                            <!--<div class=\"row\">-->\r" +
    "\n" +
    "                            <!--<span>58</span>-->\r" +
    "\n" +
    "                            <!--</div>-->\r" +
    "\n" +
    "                            <!--<div class=\"row-of-circle\">-->\r" +
    "\n" +
    "                            <!--<span class=\"circle-image\">-->\r" +
    "\n" +
    "                            <!--<img src=\"images/test/tio1.jpg\">-->\r" +
    "\n" +
    "                            <!--</span>-->\r" +
    "\n" +
    "                            <!--<span class=\"circle-image\">-->\r" +
    "\n" +
    "                            <!--<img src=\"images/test/counter_strike.jpg\">-->\r" +
    "\n" +
    "                            <!--</span>-->\r" +
    "\n" +
    "                            <!--<span class=\"circle-image\">-->\r" +
    "\n" +
    "                            <!--<img src=\"images/test/tia2.jpg\">-->\r" +
    "\n" +
    "                            <!--</span>-->\r" +
    "\n" +
    "                            <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!--<div class=\"row\">-->\r" +
    "\n" +
    "                            <!--<div class=\"col-md-6 view-all \">-->\r" +
    "\n" +
    "                            <!--<button class=\"btn dropdown-toggle\" type=\"button\" id=\"allFrieds\"-->\r" +
    "\n" +
    "                            <!--data-toggle=\"dropdown\">-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!--VIEW ALL<span class=\"caret\"></span>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!--</button>-->\r" +
    "\n" +
    "                            <!--<ul dropdown class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"allFrieds\">-->\r" +
    "\n" +
    "                            <!--<li role=\"presentation\">-->\r" +
    "\n" +
    "                            <!--<a role=\"menuitem\" tabindex=\"-1\" href=\"\">-->\r" +
    "\n" +
    "                            <!--<span class=\"circle-image\">-->\r" +
    "\n" +
    "                            <!--<img src=\"images/test/tia2.jpg\">-->\r" +
    "\n" +
    "                            <!--</span>-->\r" +
    "\n" +
    "                            <!--</a>-->\r" +
    "\n" +
    "                            <!--</li>-->\r" +
    "\n" +
    "                            <!--<li role=\"presentation\">-->\r" +
    "\n" +
    "                            <!--<a role=\"menuitem\" tabindex=\"-1\" href=\"\">-->\r" +
    "\n" +
    "                            <!--<span class=\"circle-image\">-->\r" +
    "\n" +
    "                            <!--<img src=\"images/test/tia2.jpg\">-->\r" +
    "\n" +
    "                            <!--</span>-->\r" +
    "\n" +
    "                            <!--</a>-->\r" +
    "\n" +
    "                            <!--</li>-->\r" +
    "\n" +
    "                            <!--<li role=\"presentation\">-->\r" +
    "\n" +
    "                            <!--<a role=\"menuitem\" tabindex=\"-1\" href=\"\">-->\r" +
    "\n" +
    "                            <!--<span class=\" circle-image\">-->\r" +
    "\n" +
    "                            <!--<img src=\"images/test/tia2.jpg\">-->\r" +
    "\n" +
    "                            <!--</span>-->\r" +
    "\n" +
    "                            <!--</a>-->\r" +
    "\n" +
    "                            <!--</li>-->\r" +
    "\n" +
    "                            <!--</ul>-->\r" +
    "\n" +
    "                            <!--</div>-->\r" +
    "\n" +
    "                            <!--</div>-->\r" +
    "\n" +
    "                            <!--</div>-->\r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                        <!--<td>-->\r" +
    "\n" +
    "                        <!--<div class=\"next-tournament col-md-4\">-->\r" +
    "\n" +
    "                        <!--<span class=\"next-date\">12/10/14</span>-->\r" +
    "\n" +
    "                        <!--<span class=\"next-time\">4.30pm</span>-->\r" +
    "\n" +
    "                        <!--</div>-->\r" +
    "\n" +
    "                        <!--</td>-->\r" +
    "\n" +
    "                        <!-- <td>{{t.status}}</td>\r" +
    "\n" +
    "                         <td>{{t.config.maps}}</td> -->\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                </table>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/partials/home/home.html',
    "<div class=\"cover-slider \">\r" +
    "\n" +
    "    <slick dots='false' arrows='false' infinite=true class=\"slide\" slidesToShow=\"1\"\r" +
    "\n" +
    "           fade=\"true\"\r" +
    "\n" +
    "           autoplay=\"true\"\r" +
    "\n" +
    "           autoplaySpeed=\"4000\">\r" +
    "\n" +
    "        <div data-ng-repeat=\"item in _home.home_top_slider\">\r" +
    "\n" +
    "            <img ng-src=\"{{item.cover}}\" class=\"img-responsive\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"content_layout\" ng-repeat=\"content in item.contents | filter:{language:_app.language.key}\">\r" +
    "\n" +
    "                <div ng-bind-html=\"content.content\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </slick>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-2 col-sm-2  hidden-xs\">\r" +
    "\n" +
    "            <!--<div class=\"game-center-box\">-->\r" +
    "\n" +
    "            <!--<a ui-sref=\"game.index\" class=\"btn btn-danger btn-block\">-->\r" +
    "\n" +
    "            <!--<i class=\"fa fa-gamepad\"></i>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <!--<h3>GAME CENTER</h3>-->\r" +
    "\n" +
    "            <!--</a>-->\r" +
    "\n" +
    "            <!--</div>-->\r" +
    "\n" +
    "            <div class=\"download-wrapper\">\r" +
    "\n" +
    "                <a class=\"btn btn-block btn-lg btn-danger btn-download-app-xl\"\r" +
    "\n" +
    "                   href=\"https://s3-eu-west-1.amazonaws.com/electronics3/downloads/software/Electronicstars.msi\"\r" +
    "\n" +
    "                   target=\"_blank\"><i class=\"fa fa-windows pull-left\"></i> DOWNLOAD APP</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <facebook class=\"hidden-xs\"></facebook>\r" +
    "\n" +
    "            <twitter class=\"hidden-xs\"></twitter>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-4 col-sm-4 col-xs-12\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"home_tab_container col-md-6\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-2 col-sm-4 col-xs-6 pull-right\">\r" +
    "\n" +
    "                            <a ui-sref=\"tournaments.list({ game_slug: 'counter-strike-go' })\"\r" +
    "\n" +
    "                               class=\"btn btn-danger btn-lg btn-block\">\r" +
    "\n" +
    "                                PLAY CS:GO NOW!<i class=\"fa fa-chevron-right\"></i>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"inner-container\">\r" +
    "\n" +
    "                                <h3>\r" +
    "\n" +
    "                                    <i class=\"fel fel-fel_win\"></i>\r" +
    "\n" +
    "                                    {{'HOME.MAIN.TITLE.RED'|translate}}\r" +
    "\n" +
    "                                    <span>{{'HOME.MAIN.TITLE.BLACK' | translate }}</span>\r" +
    "\n" +
    "                                </h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"featured-container\">\r" +
    "\n" +
    "                                    <slick dots='true' arrows='true' infinite=true class=\"slide\" slidesToShow=\"1\"\r" +
    "\n" +
    "                                           fade=\"true\"\r" +
    "\n" +
    "                                           autoplay=\"true\"\r" +
    "\n" +
    "                                           autoplaySpeed=\"5000\">\r" +
    "\n" +
    "                                        <div ng-repeat=\"t in _home.featured\" class=\"advert\">\r" +
    "\n" +
    "                                            <img ng-src=\"{{t.featured}}\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"caption\">\r" +
    "\n" +
    "                                                <a ng-click=\"_home.featured_detail(t.id)\"><span class=\"name\">#{{t.modality}} {{t.name}}</span>\r" +
    "\n" +
    "                                        <span class=\"prize\"> {{t.public_prize|number:2}} <i class=\"\"\r" +
    "\n" +
    "                                                                                            ng-class=\"{'fel fel-fel_money_electornic':t.cash_type=='FAKE_CASH','fa fa-eur':t.cash_type=='REAL_CASH'}\"></i> </span>\r" +
    "\n" +
    "                                                </a>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </slick>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div tournament-weekly-winners tournaments=\"_home.last_tournaments_winners\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"news-container\">\r" +
    "\n" +
    "                <slick dots='true' arrows='false' infinite=true class=\"slide\" slidesToShow=\"1\"\r" +
    "\n" +
    "                       fade=\"true\"\r" +
    "\n" +
    "                       autoplay=\"true\"\r" +
    "\n" +
    "                       autoplaySpeed=\"3500\">\r" +
    "\n" +
    "                    <div ng-repeat=\"item in _home.promotions\">\r" +
    "\n" +
    "                        <img ng-src=\"{{item.cover}}\" class=\"img-responsive\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"content_layout\"\r" +
    "\n" +
    "                             ng-repeat=\"content in item.contents | filter:{language:_app.language.key}\">\r" +
    "\n" +
    "                            <div ng-bind-html=\"content.content\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <!--<div class=\"slider-caption\">-->\r" +
    "\n" +
    "                    <!--<div class=\"row\">-->\r" +
    "\n" +
    "                    <!--<div class=\"col-xs-2 col-sm-2 col-md-2\">-->\r" +
    "\n" +
    "                    <!--<h3>-->\r" +
    "\n" +
    "                    <!--PROMOTIONS-->\r" +
    "\n" +
    "                    <!--</h3>-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                </slick>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"news-container\">\r" +
    "\n" +
    "                <slick dots='true' arrows='false' infinite=true class=\"slide\" slidesToShow=\"1\"\r" +
    "\n" +
    "                       fade=\"true\"\r" +
    "\n" +
    "                       autoplay=\"true\"\r" +
    "\n" +
    "                       autoplaySpeed=\"3500\">\r" +
    "\n" +
    "                    <div ng-repeat=\"new in _home.news\">\r" +
    "\n" +
    "                        <a ng-href=\"{{new.url}}\" target=\"_blank\" ng-repeat=\"img in new.attachments\" ng-if=\"$last\">\r" +
    "\n" +
    "                            <img ng-src=\"{{img.url}}\">\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"slider-caption\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-xs-4 col-sm-4 col-md-4\">\r" +
    "\n" +
    "                                    <h3>\r" +
    "\n" +
    "                                        <a ng-href=\"{{new.url}}\" target=\"_blank\">\r" +
    "\n" +
    "                                            {{new.title}}\r" +
    "\n" +
    "                                        </a>\r" +
    "\n" +
    "                                    </h3>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-xs-2 col-sm-2 col-md-2\">\r" +
    "\n" +
    "                                    <a ng-href=\"{{new.url}}\" target=\"_blank\" class=\"btn  btn-danger pull-right\">\r" +
    "\n" +
    "                                        READ MORE\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </slick>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"news-container\">\r" +
    "\n" +
    "                <slick dots='true' arrows='true' infinite=true class=\"slide\" slidesToShow=\"1\"\r" +
    "\n" +
    "                       fade=\"true\"\r" +
    "\n" +
    "                       autoplay=\"true\"\r" +
    "\n" +
    "                       autoplaySpeed=\"3500\">\r" +
    "\n" +
    "                    <div ng-repeat=\"item in _home.news_promotionals\">\r" +
    "\n" +
    "                        <img ng-src=\"{{item.cover}}\" class=\"img-responsive\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"content_layout\"\r" +
    "\n" +
    "                             ng-repeat=\"content in item.contents | filter:{language:_app.language.key}\">\r" +
    "\n" +
    "                            <div ng-bind-html=\"content.content\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </slick>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/partials/invitation/home.html',
    "<form name=\"invitationForm\" novalidate ng-submit=\"requestInvitation()\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <alert ng-repeat=\"alert in messages\" type=\"{{alert.type}}\" close=\"closeMessage($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\"\n" +
    "                 ng-class=\"{ 'has-error': invitationForm.email.$invalid && !invitationForm.email.$pristine }\">\n" +
    "                <label>Email</label>\n" +
    "                <input type=\"email\" name=\"email\" ng-model=\"email\" required class=\"form-control\"\n" +
    "                       placeholder=\"Introduce tu email\">\n" +
    "\n" +
    "                 <span class=\"help-block\" ng-show=\"invitationForm.email.$invalid && !invitationForm.email.$pristine\">Email invalido\n" +
    "                 </span>\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n" +
    "        </div>\n" +
    "</form>"
  );


  $templateCache.put('views/partials/landing/landing.html',
    "<section class=\"black-container\">\r" +
    "\n" +
    "    <div class=\"landing-slider-container\" ng-cloak>\r" +
    "\n" +
    "        <slick infinite=true arrows='false' slidesToShow=\"1\" fade=\"true\" autoplay=\"true\"\r" +
    "\n" +
    "               autoplaySpeed=\"2000\" current-index=\"index\" adaptiveHeight=\"true\" ng-cloak>\r" +
    "\n" +
    "            <div ng-repeat=\"slide in annoucements\">\r" +
    "\n" +
    "                <img ng-src=\"{{slide.cover}}\" class=\"img-responsive\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"content_layout\" ng-repeat=\"content in slide.contents | filter:{language:_app.language.key}\">\r" +
    "\n" +
    "                    <div ng-bind-html=\"content.content\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </slick>\r" +
    "\n" +
    "        <div class=\"red-icon hidden-xs hidden-sm\">\r" +
    "\n" +
    "            <div class=\"container\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-2\">\r" +
    "\n" +
    "                        <div class=\"play-icon\">\r" +
    "\n" +
    "                            <div class=\"login\"></div>\r" +
    "\n" +
    "                            <!-- <h5>{{'LANDING.RED_ICONS_BAR.ICON1' | translate }}</h5>-->\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-2\">\r" +
    "\n" +
    "                        <div class=\"play-icon\">\r" +
    "\n" +
    "                            <div class=\"play\"></div>\r" +
    "\n" +
    "                            <!-- <h5>{{'LANDING.RED_ICONS_BAR.ICON2' | translate }}</h5>-->\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-2\">\r" +
    "\n" +
    "                        <div class=\"play-icon\">\r" +
    "\n" +
    "                            <div class=\"win\"></div>\r" +
    "\n" +
    "                            <!--  <h5>{{'LANDING.RED_ICONS_BAR.ICON3' | translate }}</h5>-->\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- tournament section -->\r" +
    "\n" +
    "<section class=\"landing_section_container landing_tournament_section_title\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\">\r" +
    "\n" +
    "                <div class=\"landing_section_title\">\r" +
    "\n" +
    "                    <div class=\"red-box-title\"></div>\r" +
    "\n" +
    "                            <span>\r" +
    "\n" +
    "                                <span>{{'LANDING.GAMING_TOURNAMENT.TITLE.FIRST_TEXT' | translate }}</span>{{'LANDING.GAMING_TOURNAMENT.TITLE.SECOND_TEXT' | translate }}\r" +
    "\n" +
    "                                <span class=\"text-white\">{{'LANDING.GAMING_TOURNAMENT.TITLE.THIRD_TEXT' | translate }}</span>\r" +
    "\n" +
    "                           </span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<section class=\"tournament_container\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-3 col-sm-12 col-xs-12\">\r" +
    "\n" +
    "                <!-- <div class=\"col-md-3 col-sm-12 col-xs-12\">-->\r" +
    "\n" +
    "                <div class=\"tournament_table\">\r" +
    "\n" +
    "                    <header class=\"tournament_table_header\">\r" +
    "\n" +
    "                        <img src=\"images/logos/logo_loader.png\">\r" +
    "\n" +
    "                        <span>{{'LANDING.GAMING_TOURNAMENT.TABLE.HEADER.TITLE1' | translate }}</span>\r" +
    "\n" +
    "                        <span>{{'LANDING.GAMING_TOURNAMENT.TABLE.HEADER.TITLE2' | translate }}</span>\r" +
    "\n" +
    "                    </header>\r" +
    "\n" +
    "                    <table class=\"table-hover\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td class=\"r_border_lightgrey\">{{'LANDING.GAMING_TOURNAMENT.TABLE.HEAD.COL1'\r" +
    "\n" +
    "                                | translate }}\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"r_border_lightgrey\">\r" +
    "\n" +
    "                                {{'LANDING.GAMING_TOURNAMENT.TABLE.HEAD.COL2' | translate }}\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"r_border_lightgrey\">{{'LANDING.GAMING_TOURNAMENT.TABLE.HEAD.COL3'\r" +
    "\n" +
    "                                | translate }}\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>{{'LANDING.GAMING_TOURNAMENT.TABLE.HEAD.COL4' | translate }}</td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                        <tr data-ng-repeat=\" item in tournamentList | orderBy:date\"\r" +
    "\n" +
    "                            ui-sref=\"tournaments.list({game_slug: 'counter-strike-go'})\">\r" +
    "\n" +
    "                            <td class=\"col-date \">\r" +
    "\n" +
    "                                {{item.date}}\r" +
    "\n" +
    "                                {{item.time}}\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"\">{{item.name}}</td>\r" +
    "\n" +
    "                            <td class=\"col-player \">{{item.playersNumber}}</td>\r" +
    "\n" +
    "                            <td><i class=\"fa fa-star red\"></i> {{item.prize}}</td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!-- close tournament_table -->\r" +
    "\n" +
    "            <!--  <div class=\"col-md-3 col-sm-12 col-xs-12\">-->\r" +
    "\n" +
    "            <div class=\"col-md-3 col-sm-12 col-xs-12\">\r" +
    "\n" +
    "                <div class=\"tournament_slider\">\r" +
    "\n" +
    "                    <slick dots='true' arrows='false' infinite=true class=\"slide\" slidesToShow=\"1\"\r" +
    "\n" +
    "                           fade=\"true\"\r" +
    "\n" +
    "                           autoplay=\"true\"\r" +
    "\n" +
    "                           autoplaySpeed=\"2000\"\r" +
    "\n" +
    "                            >\r" +
    "\n" +
    "                        <div data-ng-repeat=\"item in tournamentSlides\">\r" +
    "\n" +
    "                            <img ng-src=\"{{item.src}}\" alt=\"{{item.alt}}\">\r" +
    "\n" +
    "                            <!-- <img ng-src=\"sprite/landing/tournament_sprite.png\" class=\"s{{$index}}\" alt=\"\">-->\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </slick>\r" +
    "\n" +
    "                    <div class=\"tournament_slider_manager\">\r" +
    "\n" +
    "                        <i class=\"fa fa-gamepad\"></i>\r" +
    "\n" +
    "                        <span>{{'LANDING.GAMING_TOURNAMENT.SLIDER_DOTS_TEXT' | translate }}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- video container -->\r" +
    "\n" +
    "<section class=\"video_container\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-4 col-sm-12 col-xs-12\">\r" +
    "\n" +
    "                <section class=\"landingVideo\">\r" +
    "\n" +
    "                    <video controls autoplay muted>\r" +
    "\n" +
    "                        <source src=\"multimedia/Counter Strike Global Offensive Trailer-SD.mp4\" type=\"video/mp4\">\r" +
    "\n" +
    "                        Your browser does not support the video tag.\r" +
    "\n" +
    "                    </video>\r" +
    "\n" +
    "                </section>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <aside class=\"col-md-2 col-sm-6 col-xs-12\">\r" +
    "\n" +
    "                <ol>\r" +
    "\n" +
    "                    <li><span>{{'LANDING.VIDEO_PROMOTION.TEXT1' | translate }}</span></li>\r" +
    "\n" +
    "                    <li><span>{{'LANDING.VIDEO_PROMOTION.TEXT2' | translate }}</span></li>\r" +
    "\n" +
    "                    <li><span>{{'LANDING.VIDEO_PROMOTION.TEXT3' | translate }}</span></li>\r" +
    "\n" +
    "                    <li><span>{{'LANDING.VIDEO_PROMOTION.TEXT4' | translate }}</span></li>\r" +
    "\n" +
    "                    <li><span>{{'LANDING.VIDEO_PROMOTION.TEXT5' | translate }}</span></li>\r" +
    "\n" +
    "                    <li><span>{{'LANDING.VIDEO_PROMOTION.TEXT6' | translate }}</span></li>\r" +
    "\n" +
    "                </ol>\r" +
    "\n" +
    "                <!--<div class=\"sign-up-container hidden-xs hidden-sm\">\r" +
    "\n" +
    "                    <a ui-sref=\"register\" class=\"btn btn-block btn-danger\" role=\"button\">{{'LANDING.VIDEO_PROMOTION.BUTTON'\r" +
    "\n" +
    "                        | translate }}</a>\r" +
    "\n" +
    "                </div>-->\r" +
    "\n" +
    "            </aside>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- perk players container -->\r" +
    "\n" +
    "<section class=\"landing_section_container\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6 col-xs-12\">\r" +
    "\n" +
    "                <header class=\"landing_section_title\">\r" +
    "\n" +
    "                    <div class=\"red-box-title\"></div>\r" +
    "\n" +
    "                    <span><span>{{'LANDING.PLAYER_PERKS.TITLE.TEXT1' | translate }}</span>{{ 'LANDING.PLAYER_PERKS.TITLE.TEXT2' | translate }}</span>\r" +
    "\n" +
    "                </header>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<section class=\"perks_boxes_container\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <article class=\"col-md-2 col-xs-6 col-sm-3\">\r" +
    "\n" +
    "                <div class=\"perks_box_container\">\r" +
    "\n" +
    "                    <figure>\r" +
    "\n" +
    "                        <img src=\"images/landing/peaks/get_gamingx2_1.png\" class=\"img-responsive\">\r" +
    "\n" +
    "                    </figure>\r" +
    "\n" +
    "                    <header class=\"box-title\">\r" +
    "\n" +
    "                        <h4>{{'LANDING.PLAYER_PERKS.BOX_1.TITLE' | translate }}</h4>\r" +
    "\n" +
    "                    </header>\r" +
    "\n" +
    "                    <div class=\"box-text\">\r" +
    "\n" +
    "                        <p>{{'LANDING.PLAYER_PERKS.BOX_1.TEXT' | translate }}</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </article>\r" +
    "\n" +
    "            <article class=\"col-md-2 col-xs-6 col-sm-3\">\r" +
    "\n" +
    "                <div class=\"perks_box_container\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <figure>\r" +
    "\n" +
    "                        <img src=\"images/landing/peaks/get_gamingx2_2.png\" class=\"img-responsive\">\r" +
    "\n" +
    "                    </figure>\r" +
    "\n" +
    "                    <header class=\"box-title\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h4>{{ 'LANDING.PLAYER_PERKS.BOX_2.TITLE' | translate }}</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </header>\r" +
    "\n" +
    "                    <div class=\"box-text\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <p>{{ 'LANDING.PLAYER_PERKS.BOX_2.TEXT' | translate }}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </article>\r" +
    "\n" +
    "            <article class=\"col-md-2 col-xs-6 col-sm-3\">\r" +
    "\n" +
    "                <div class=\"perks_box_container\">\r" +
    "\n" +
    "                    <figure>\r" +
    "\n" +
    "                        <img src=\"images/landing/peaks/get_gamingx2_3.png\" class=\"img-responsive\">\r" +
    "\n" +
    "                    </figure>\r" +
    "\n" +
    "                    <header class=\"box-title\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h4>{{ 'LANDING.PLAYER_PERKS.BOX_3.TITLE' | translate }}</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </header>\r" +
    "\n" +
    "                    <div class=\"box-text\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <p>{{ 'LANDING.PLAYER_PERKS.BOX_3.TEXT' | translate }}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </article>\r" +
    "\n" +
    "            <article class=\"col-md-2 col-xs-6 col-sm-3\">\r" +
    "\n" +
    "                <div class=\"perks_box_container \">\r" +
    "\n" +
    "                    <figure>\r" +
    "\n" +
    "                        <img src=\"images/landing/peaks/get_gamingx2_4.png\" class=\"img-responsive\">\r" +
    "\n" +
    "                    </figure>\r" +
    "\n" +
    "                    <header class=\"box-title\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h4>{{ 'LANDING.PLAYER_PERKS.BOX_4.TITLE' | translate }}</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </header>\r" +
    "\n" +
    "                    <div class=\"box-text\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <p>{{ 'LANDING.PLAYER_PERKS.BOX_4.TEXT' | translate }}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </article>\r" +
    "\n" +
    "            <article class=\"col-md-2 col-xs-6 col-sm-3\">\r" +
    "\n" +
    "                <div class=\"perks_box_container\">\r" +
    "\n" +
    "                    <figure>\r" +
    "\n" +
    "                        <img src=\"images/landing/peaks/get_gamingx2_5.png\" class=\"img-responsive\">\r" +
    "\n" +
    "                    </figure>\r" +
    "\n" +
    "                    <header class=\"box-title\">\r" +
    "\n" +
    "                        <h4>{{'LANDING.PLAYER_PERKS.BOX_5.TITLE' | translate }}</h4>\r" +
    "\n" +
    "                    </header>\r" +
    "\n" +
    "                    <div class=\"box-text\">\r" +
    "\n" +
    "                        <p>{{ 'LANDING.PLAYER_PERKS.BOX_5.TEXT' | translate }} </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </article>\r" +
    "\n" +
    "            <article class=\"col-md-2 col-xs-6 col-sm-3\">\r" +
    "\n" +
    "                <div class=\"perks_box_container\">\r" +
    "\n" +
    "                    <figure>\r" +
    "\n" +
    "                        <img src=\"images/landing/peaks/get_gamingx2_6.png\" class=\"img-responsive\">\r" +
    "\n" +
    "                    </figure>\r" +
    "\n" +
    "                    <header class=\"box-title\">\r" +
    "\n" +
    "                        <h4>{{ 'LANDING.PLAYER_PERKS.BOX_6.TITLE' | translate }}</h4>\r" +
    "\n" +
    "                    </header>\r" +
    "\n" +
    "                    <div class=\"box-text\">\r" +
    "\n" +
    "                        <p>{{ 'LANDING.PLAYER_PERKS.BOX_6.TEXT' | translate }}</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </article>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- closing row -->\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-2 col-xs-12 col-md-offset-4 signup-title-box\">\r" +
    "\n" +
    "                <a ui-sref=\"register\" class=\"btn btn-block btn-danger signup-title \">\r" +
    "\n" +
    "                    {{'LANDING.PLAYER_PERKS.SIGNUP_BUTTON' | translate }}\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- payment box -->\r" +
    "\n" +
    "<section class=\"payment_background_container\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6 \">\r" +
    "\n" +
    "                <span class=\"payment_title\">{{'LANDING.PAYMENT.TITLE' | translate }}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"payment_container\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-2 col-sm-6 col-xs-6\">\r" +
    "\n" +
    "                            <div id=\"card1\"></div>\r" +
    "\n" +
    "                            <div id=\"card2\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-4\">\r" +
    "\n" +
    "                                    <p>{{'LANDING.PAYMENT.TEXT' | translate }}\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-md-2\">\r" +
    "\n" +
    "                                    <a ui-sref=\"termsandconditions.index\" class=\"btn  btn-danger \">{{'LANDING.PAYMENT.BUTTON'\r" +
    "\n" +
    "                                        | translate }}\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- get me -->\r" +
    "\n" +
    "<section class=\"getme_container hidden-xs hidden-sm\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"image_container\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <!-- <div class=\"col-md-6\">\r" +
    "\n" +
    "                     <div class=\"red_border_bar\"></div>\r" +
    "\n" +
    "                 </div>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"box-landing-1\">\r" +
    "\n" +
    "                    <span>{{'LANDING.GET_ME_STARTED.TITLE.TEXT1' | translate }}</span>\r" +
    "\n" +
    "                    <span>{{'LANDING.GET_ME_STARTED.TITLE.TEXT2' | translate }}</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"box-landing-2\">\r" +
    "\n" +
    "                    <span>{{'LANDING.GET_ME_STARTED.ACCOUNT.TEXT1' | translate }}<span class=\"bold\">{{'LANDING.GET_ME_STARTED.ACCOUNT.TEXT2' | translate }}</span></span>\r" +
    "\n" +
    "                    <a ui-sref=\"register\" class=\"btn  btn-danger\">{{'LANDING.GET_ME_STARTED.ACCOUNT.BUTTON' |\r" +
    "\n" +
    "                        translate }}</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"box-landing-3\">\r" +
    "\n" +
    "                    <span><span class=\"bold\">{{'LANDING.GET_ME_STARTED.CLIENT.TEXT1' | translate }}</span>{{'LANDING.GET_ME_STARTED.CLIENT.TEXT2' | translate }}</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"box-landing-4\">\r" +
    "\n" +
    "                      <span>{{'LANDING.GET_ME_STARTED.STEAM.TEXT1' | translate }}<span\r" +
    "\n" +
    "                              class=\"bold\">{{'LANDING.GET_ME_STARTED.STEAM.TEXT2' | translate }}</span>{{'LANDING.GET_ME_STARTED.STEAM.TEXT3' | translate }}<span\r" +
    "\n" +
    "                              class=\"bold\">{{'LANDING.GET_ME_STARTED.STEAM.TEXT4' | translate }}</span></span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"box-landing-5\">\r" +
    "\n" +
    "                    <div class=\"steam-box\">\r" +
    "\n" +
    "                        <div class=\"steam-icon\"></div>\r" +
    "\n" +
    "                        <span>{{'LANDING.GET_ME_STARTED.PLAY.INSIDE_BOX.TEXT1' | translate }}</span>\r" +
    "\n" +
    "                        <span>{{'LANDING.GET_ME_STARTED.PLAY.INSIDE_BOX.TEXT2' | translate }}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                      <span class=\"text-box\"><span\r" +
    "\n" +
    "                              class=\"bold\">{{'LANDING.GET_ME_STARTED.PLAY.OUTSIDE_BOX.TEXT1' | translate }}</span>{{'LANDING.GET_ME_STARTED.PLAY.OUTSIDE_BOX.TEXT2' | translate }}<span\r" +
    "\n" +
    "                              class=\"bold\">{{'LANDING.GET_ME_STARTED.PLAY.OUTSIDE_BOX.TEXT3' | translate }}</span> {{'LANDING.GET_ME_STARTED.PLAY.OUTSIDE_BOX.TEXT4' | translate }}</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<section class=\"signup_red_container\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6 col-md-6 col-xs-12 \">\r" +
    "\n" +
    "                <form class=\"form-inline\" name=\"emailform\" ng-submit=\"open_modal()\" novalidate>\r" +
    "\n" +
    "                    <input class=\" col-sm-8 col-xs-12\" type=\"email\" name=\"uEmail\"\r" +
    "\n" +
    "                           ng-model=\"emailform.registration_email\"\r" +
    "\n" +
    "                           placeholder=\"{{'LANDING.EMAIL_SIGNUP.PLACEHOLDER' | translate }}\" required>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"error_message_container\">\r" +
    "\n" +
    "                        <span class=\"error animate-show\" ng-show=\" emailform.$error.required && emailform.$submitted\">\r" +
    "\n" +
    "                          <i class=\"fa fa-exclamation-circle\"></i>{{'LANDING.EMAIL_SIGNUP.ERROR_REQUIRED' | translate }}</span>\r" +
    "\n" +
    "                         <span class=\"error animate-show\" ng-show=\"emailform.$error.email && emailform.$submitted\">\r" +
    "\n" +
    "                         <i class=\"fa fa-exclamation-circle\"></i>{{'LANDING.EMAIL_SIGNUP.ERROR_INVALID' | translate }}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"bar hidden-sm hidden-xs\"></div>\r" +
    "\n" +
    "                    <button type=\"submit\"\r" +
    "\n" +
    "                            class=\"btn btn-block btn-default col-sm-4 col-xs-12\">\r" +
    "\n" +
    "                        {{'LANDING.EMAIL_SIGNUP.BUTTON' | translate }}\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/partials/play/game-vote.html',
    "<div class=\"cover-slider \">\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">\n" +
    "\n" +
    "            <section class=\"box-only-header box-red top-up-now\">\n" +
    "                <a ui-sref=\"cashier.user\" href=\"#/cashier\">\n" +
    "                    <i class=\"fa fa-credit-card\"></i>\n" +
    "\n" +
    "                    <h3>TOP UP NOW!</h3>\n" +
    "                </a>\n" +
    "            </section>\n" +
    "\n" +
    "            <section class=\"box-with-header lastplayed-left-box \">\n" +
    "                <div class=\"box-header\">\n" +
    "                    <i class=\"fa fa-gamepad\"></i>\n" +
    "\n" +
    "                    <h3>LAST PLAYED</h3>\n" +
    "                </div>\n" +
    "                <div class=\"game-container\">\n" +
    "                    <div class=\"box-cover\"></div>\n" +
    "                    <img src=\"images/test/counter_strike.jpg\">\n" +
    "                </div>\n" +
    "                <span class=\"game-title\">CS:GLOBAL OFFENSIVE</span>\n" +
    "            </section>\n" +
    "\n" +
    "            <section class=\"box-only-header box-red return-my-games\">\n" +
    "                <i class=\"fa fa-chevron-left\"></i>\n" +
    "            <span>\n" +
    "                <a ui-sref=\"game.index\" href=\"#/game-center\">\n" +
    "                    RETURN TO MY GAMES</a>\n" +
    "            </span>\n" +
    "            </section>\n" +
    "\n" +
    "            <twitter></twitter>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <game-center-nav-tabs class=\"vote-tabs\">\n" +
    "                <vote title=\"VOTE\">\n" +
    "                </vote>\n" +
    "\n" +
    "                <results title=\"RESULTS\">\n" +
    "                </results>\n" +
    "\n" +
    "                <recentadditions title=\"RECENT ADDITIONS\">\n" +
    "                </recentadditions>\n" +
    "            </game-center-nav-tabs>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2 after-tabs\">\n" +
    "            <facebook></facebook>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('views/partials/play/registered_tournaments.html',
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"btn-close-wrapper\">\r" +
    "\n" +
    "        <button class=\"btn btn-close\" ng-click=\"_tour.close()\">x</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-4\">\r" +
    "\n" +
    "            <div class=\"tournament-list-box\">\r" +
    "\n" +
    "                <div class=\"secundary-filter-box\">\r" +
    "\n" +
    "                    <form class=\"form-inline\" role=\"form\">\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "                            <label>Filter By</label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <!--<div class=\"form-group\">-->\r" +
    "\n" +
    "                        <!--<div dropdown-multiselect options=\"example1data\" selected-model=\"_type_filter\"-->\r" +
    "\n" +
    "                        <!--extra-settings=\"filter_settings\" checkboxes=\"true\"-->\r" +
    "\n" +
    "                        <!--translation-texts=\"{buttonDefaultText: 'TYPE'}\"></div>-->\r" +
    "\n" +
    "                        <!--</div>-->\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"table-box\">\r" +
    "\n" +
    "                    <table class=\"table table-tournaments\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <th style=\"width: 26.2%;text-align: left;padding-left: 20px\">track name</th>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <th style=\"width: 15%\">type</th>\r" +
    "\n" +
    "                            <th style=\"width: 10%\">players</th>\r" +
    "\n" +
    "                            <th style=\"width: 12.1%\">prize</th>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <th style=\"width: 20%\">details</th>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                    <div class=\"table-content-scrollable\" scroll-bar>\r" +
    "\n" +
    "                        <table class=\"table table-tournaments\">\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                            <tr ng-repeat=\"t in _tour.tournaments |  filter:_tour._filter_by_name | filter:_tour._filter_by_config | filter:_tour._filter_by_players | filter:_tour._filter_by_status | filter:srch_term | orderBy:_tour.order_by_status\">\r" +
    "\n" +
    "                                <td style=\"width: 27%;text-align: left;padding-left: 10px;\">\r" +
    "\n" +
    "                            <span class=\"circle\"\r" +
    "\n" +
    "                                  ng-class=\"{'in-progress':t.status=='IN_PROGRESS','registering':t.status=='REGISTRATION','finished':t.status=='FINISHED'}\"></span>{{t.name}}\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <td style=\"width: 15.2%\">{{t.modality}}</td>\r" +
    "\n" +
    "                                <td class=\"red\" style=\"width: 10.5%\">\r" +
    "\n" +
    "                                    {{t.registered_players}}/{{t.config.type.num_players\r" +
    "\n" +
    "                                    *t.config.type.num_teams}}\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <span ng-if=\"t.get_modified()=='more'\" class=\"animated flash\"><i\r" +
    "\n" +
    "                                            class=\"fa fa-arrow-up\"></i> </span>\r" +
    "\n" +
    "                            <span ng-if=\"t.get_modified()=='less'\" class=\"animated flash\"><i\r" +
    "\n" +
    "                                    class=\"fa fa-arrow-down\"></i> </span>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td class=\"red\" style=\"width: 10.3%\">{{t.register_amount}}</td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <td style=\"width: 20%\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-tournament-detail\"\r" +
    "\n" +
    "                                            ng-click=\"_tour.tournament_detail(t,false)\">MORE\r" +
    "\n" +
    "                                    </button>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/partials/play/tournament/lobby-free_for_all.html',
    "<div class=\"container\" id=\"match\">\r" +
    "\n" +
    "<div class=\"btn-close-wrapper\">\r" +
    "\n" +
    "    <!--<button class=\"btn btn-close\" ng-click=\"_lobby.close()\">x</button>-->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "<div class=\"col-md-2 col-sm-2 bounceInDown animated\">\r" +
    "\n" +
    "    <div tournament-detail tournament=\"_lobby.tournament\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"col-md-4 col-sm-4 col-xs-6  \" ng-if=\"_lobby.tournament.status == 'FINISHED'\">\r" +
    "\n" +
    "    <div class=\"tournament-close-header\">\r" +
    "\n" +
    "        <h3>\r" +
    "\n" +
    "            {{_lobby.tournament.name}}\r" +
    "\n" +
    "            <span>({{_lobby.tournament.registered_players}}/{{_lobby.tournament.config.type.num_players * _lobby.tournament.config.type.num_teams}})</span>\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"_lobby.close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-detail-box\" back-img=\"{{_lobby.tournament.maps[0].cover}}\">\r" +
    "\n" +
    "        <div class=\"tournament-detail-header\">\r" +
    "\n" +
    "            <div tournament-header current=\"_lobby.tournament\" registered=\"_lobby.registered_tournament\"\r" +
    "\n" +
    "                 register=\"_lobby.register()\"\r" +
    "\n" +
    "                 unregister=\"_lobby.unregister()\" launched=\"_lobby.launched\" launch=\"_lobby.launch()\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div tournament-stats tournament=\"_lobby.tournament\" stats=\"_lobby.stats\"></div>\r" +
    "\n" +
    "        <div tournament-top-player tournament=\"_lobby.tournament\" stats=\"_lobby.stats\"\r" +
    "\n" +
    "             ng-hide=\"_lobby.loading\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-team-detail-wrapper \" ng-show=\"_lobby.show_players\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\" ng-repeat=\"r in _lobby.tournament.ranking\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"table-box\">\r" +
    "\n" +
    "                    <table class=\"table table_free_for_all\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <th style=\"width: 10%\">RANK</th>\r" +
    "\n" +
    "                            <th style=\"width: 36%\">PLAYER NAME</th>\r" +
    "\n" +
    "                            <th style=\"width: 10.2%\">LEVEL</th>\r" +
    "\n" +
    "                            <th style=\"width: 15%\" class=\"hidden-xs hidden-sm\">MULTIPLIER</th>\r" +
    "\n" +
    "                            <th style=\"width: 10%\">SCORE</th>\r" +
    "\n" +
    "                            <th style=\"width: 10%\">KILLS</th>\r" +
    "\n" +
    "                            <th style=\"width: 10%\">PRIZE</th>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                    <div class=\"table-content-scrollable\" scroll-bar>\r" +
    "\n" +
    "                        <table class=\"table table_free_for_all\">\r" +
    "\n" +
    "                            <tbody ng-repeat=\"p in r.rank_players| orderBy:'position'\">\r" +
    "\n" +
    "                            {{p}}\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td class=\"rank\" style=\"width: 10%\">{{p.position | cardinal}}</td>\r" +
    "\n" +
    "                                <td style=\"width: 36%\">\r" +
    "\n" +
    "                                    <div mini-user-resum user=\"p.player.user\"></div>\r" +
    "\n" +
    "                                    <div reputation=\"4\"></div>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td class=\"lvl\" style=\"width: 10.2%\">{{p.player.lvl}}</td>\r" +
    "\n" +
    "                                <td style=\"width: 15%\" class=\"hidden-xs hidden-sm\">\r" +
    "\n" +
    "                                    <div multiplier user=\"p.player.user\"></div>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td class=\"score\" style=\"width: 10%\">{{p.points|number:2}}</td>\r" +
    "\n" +
    "                                <td style=\"width: 10%\">{{p.kills}}</td>\r" +
    "\n" +
    "                                <td class=\"prize\" style=\"width: 10%\">{{p.prize.amount|number:2}}</td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            <tr tournament-player-stats user=\"p.player.user\"\r" +
    "\n" +
    "                                match=\"{{_lobby.tournament.matches[0]}}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-rules-box\" ng-show=\"_lobby.show_rules\">\r" +
    "\n" +
    "        <div class=\"box-header\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <h3 translate=\"LOBBY.TITLES.RULES\"></h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <a class=\"pull-right\" ng-click=\"_lobby.show_players_box()\">\r" +
    "\n" +
    "                    <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"box-content\" scroll-bar>\r" +
    "\n" +
    "            <div class=\"rule-detail\">\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla\r" +
    "\n" +
    "                    rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci\r" +
    "\n" +
    "                    convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie\r" +
    "\n" +
    "                    elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla\r" +
    "\n" +
    "                    rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci\r" +
    "\n" +
    "                    convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie\r" +
    "\n" +
    "                    elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla\r" +
    "\n" +
    "                    rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci\r" +
    "\n" +
    "                    convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie\r" +
    "\n" +
    "                    elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla\r" +
    "\n" +
    "                    rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci\r" +
    "\n" +
    "                    convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie\r" +
    "\n" +
    "                    elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"col-md-4 col-sm-4 col-xs-6 bounceInDown animated\" ng-if=\"_lobby.tournament.status != 'FINISHED'\">\r" +
    "\n" +
    "    <div class=\"tournament-close-header\">\r" +
    "\n" +
    "        <h3>\r" +
    "\n" +
    "            {{_lobby.tournament.name}}\r" +
    "\n" +
    "            <span>({{_lobby.tournament.registered_players}}/{{_lobby.tournament.config.type.num_players * _lobby.tournament.config.type.num_teams}})</span>\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"_lobby.close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-detail-box\" back-img=\"{{_lobby.tournament.maps[0].cover}}\">\r" +
    "\n" +
    "        <div class=\"tournament-detail-header\">\r" +
    "\n" +
    "            <div tournament-header current=\"_lobby.tournament\" registered=\"_lobby.registered_tournament\"\r" +
    "\n" +
    "                 register=\"_lobby.register()\"\r" +
    "\n" +
    "                 unregister=\"_lobby.unregister()\" launched=\"_lobby.launched\" launch=\"_lobby.launch()\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div tournament-top-player tournament=\"_lobby.tournament\" stats=\"_lobby.stats\"\r" +
    "\n" +
    "             ng-hide=\"_lobby.loading\"></div>\r" +
    "\n" +
    "        <div tournament-loader init=\"_lobby.loading\" countdown=\"_lobby.countdown\" match=\"_lobby.tournament\"\r" +
    "\n" +
    "             callback=\"_lobby.launch()\" match=\"_lobby.tournament\" seconds=\"_lobby.timeElapsed\"\r" +
    "\n" +
    "             ng-if=\"_lobby.loading\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-team-detail-wrapper\" ng-show=\"_lobby.show_players\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6 col-sm-6 col-xs-6\" ng-repeat=\"team in _lobby.tournament.teams\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"table-box\">\r" +
    "\n" +
    "                    <table class=\"table table_free_for_all\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <th style=\"width: 10%\">RANK</th>\r" +
    "\n" +
    "                            <th style=\"width: 35%\">PLAYER NAME</th>\r" +
    "\n" +
    "                            <th style=\"width: 10%\">LEVEL</th>\r" +
    "\n" +
    "                            <th style=\"width: 15%\" class='hidden-xs hidden-sm'>MULTIPLIER</th>\r" +
    "\n" +
    "                            <th style=\"width: 15%\">SCORE</th>\r" +
    "\n" +
    "                            <th style=\"width: 15%\">PING</th>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                        <tr ng-repeat=\"p in team.players\">\r" +
    "\n" +
    "                            <td class=\"rank\" style=\"width: 10%\">-</td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <div mini-user-resum user=\"p.user\"></div>\r" +
    "\n" +
    "                                <div reputation=\"4\"></div>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"lvl\">{{p.lvl}}</td>\r" +
    "\n" +
    "                            <td class='hidden-xs hidden-sm'>\r" +
    "\n" +
    "                                <div multiplier user=\"p.user\"></div>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"score\">-</td>\r" +
    "\n" +
    "                            <td>{{p.latency}}</td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <tr ng-repeat=\"i in _lobby.empty\">\r" +
    "\n" +
    "                            <td colspan=\"7\" class=\"text-center\">Waiting for player</td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-rules-box\" ng-show=\"_lobby.show_rules\">\r" +
    "\n" +
    "        <div class=\"box-header\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <h3 translate=\"LOBBY.TITLES.RULES\"></h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <a class=\"pull-right\" ng-click=\"_lobby.show_players_box()\">\r" +
    "\n" +
    "                    <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"box-content\" scroll-bar>\r" +
    "\n" +
    "            <div class=\"rule-detail\">\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla\r" +
    "\n" +
    "                    rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci\r" +
    "\n" +
    "                    convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie\r" +
    "\n" +
    "                    elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla\r" +
    "\n" +
    "                    rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci\r" +
    "\n" +
    "                    convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie\r" +
    "\n" +
    "                    elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla\r" +
    "\n" +
    "                    rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci\r" +
    "\n" +
    "                    convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie\r" +
    "\n" +
    "                    elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla\r" +
    "\n" +
    "                    rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci\r" +
    "\n" +
    "                    convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie\r" +
    "\n" +
    "                    elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/partials/play/tournament/lobby-match.html',
    "<div class=\"container\" id=\"match\">\r" +
    "\n" +
    "<div class=\"btn-close-wrapper\">\r" +
    "\n" +
    "    <!--<button class=\"btn btn-close\" ng-click=\"_lobby.close()\">x</button>-->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "<div class=\"col-md-2 col-sm-2 bounceInDown animated\">\r" +
    "\n" +
    "    <div tournament-detail tournament=\"_lobby.tournament\"></div>\r" +
    "\n" +
    "    <div class=\"tournament-social-box\" ng-if=\"last_tournament_event\">\r" +
    "\n" +
    "        <div class=\"drag-box\">\r" +
    "\n" +
    "            <div><span>PL</span>AY <br>\r" +
    "\n" +
    "                <span>BO</span>X\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"share-box\">\r" +
    "\n" +
    "            <div class=\"share-data\">\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <a href=\"#\">{{last_tournament_event.user}}</a> just {{last_tournament_event.action}}\r" +
    "\n" +
    "                    {{last_tournament_event.quantity}} points in <span>#css</span> on\r" +
    "\n" +
    "                    <span>#electronicStars</span>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"share-by\">\r" +
    "\n" +
    "                <span>SHARE ON : </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"social-sites\">\r" +
    "\n" +
    "                    <i class=\"fa fa-facebook-square\"></i>\r" +
    "\n" +
    "                    <i class=\"fa fa-twitter-square\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"col-md-4 col-sm-4 col-xs-6 \" ng-if=\"_lobby.tournament.status == 'FINISHED'\">\r" +
    "\n" +
    "    <div class=\"tournament-close-header\">\r" +
    "\n" +
    "        <h3>\r" +
    "\n" +
    "            {{_lobby.tournament.name}}\r" +
    "\n" +
    "            <span>({{_lobby.tournament.registered_players}}/{{_lobby.tournament.config.type.num_players * _lobby.tournament.config.type.num_teams}})</span>\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"_lobby.close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-detail-box\" back-img=\"{{_lobby.tournament.maps[0].cover}}\">\r" +
    "\n" +
    "        <div class=\"tournament-detail-header\">\r" +
    "\n" +
    "            <div tournament-header current=\"_lobby.tournament\" registered=\"_lobby.registered_tournament\"\r" +
    "\n" +
    "                 register=\"_lobby.register()\"\r" +
    "\n" +
    "                 unregister=\"_lobby.unregister()\" launched=\"_lobby.launched\" launch=\"_lobby.launch()\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div tournament-stats stats=\"_lobby.stats\"></div>\r" +
    "\n" +
    "        <!--<div tournament-top-player tournament=\"_lobby.tournament\" stats=\"_lobby.stats\"-->\r" +
    "\n" +
    "        <!--ng-hide=\"_lobby.loading\"></div>-->\r" +
    "\n" +
    "        <div tournament-match-round-detail match=\"_lobby.match_id\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-team-detail-wrapper\" ng-show=\"_lobby.show_players\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-3\" ng-repeat=\"r in _lobby.tournament.ranking\">\r" +
    "\n" +
    "                <div class=\"tournament-team-detail-box\" ng-class=\"{second_team:$index==1}\">\r" +
    "\n" +
    "                    <div class=\"overlay\" ng-if=\"r.position == 2\"></div>\r" +
    "\n" +
    "                    <div class=\"team-header\" ng-class=\"{winner:r.position == 1}\">\r" +
    "\n" +
    "                        <h3>\r" +
    "\n" +
    "                            {{'LOBBY.LABEL.TEAM'|translate}} {{r.team.name}}\r" +
    "\n" +
    "                        </h3>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"table-box\">\r" +
    "\n" +
    "                        <table class=\"table table-match\">\r" +
    "\n" +
    "                            <thead>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <th>R</th>\r" +
    "\n" +
    "                                <th>{{'LOBBY.LABEL.PLAYER'|translate}}</th>\r" +
    "\n" +
    "                                <th>L</th>\r" +
    "\n" +
    "                                <th>M</th>\r" +
    "\n" +
    "                                <th>S</th>\r" +
    "\n" +
    "                                <th>{{'LOBBY.LABEL.PRIZE'|translate}}</th>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </thead>\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                            <tr ng-repeat=\"p in r.rank_players\">\r" +
    "\n" +
    "                                <td class=\"rank\">{{p.position | cardinal}}</td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <div mini-user-resum user=\"p.player.user\"></div>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td class=\"lvl\">{{p.player.lvl}}</td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <div reputation=\"{{p.player.user.reputation}}\"></div>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td class=\"score\">{{p.points|number:2}}</td>\r" +
    "\n" +
    "                                <td>{{p.prize.amount|number:2}}</td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-rules-box\" ng-show=\"_lobby.show_rules\">\r" +
    "\n" +
    "        <div class=\"box-header\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <h3 translate=\"LOBBY.TITLES.RULES\"></h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <a class=\"pull-right\" ng-click=\"_lobby.show_players_box()\">\r" +
    "\n" +
    "                    <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"box-content\" scroll-bar>\r" +
    "\n" +
    "            <div class=\"rule-detail\">\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"col-md-4 col-sm-4 col-xs-6 bounceInDown animated\" ng-if=\"_lobby.tournament.status != 'FINISHED'\">\r" +
    "\n" +
    "    <div class=\"tournament-close-header\">\r" +
    "\n" +
    "        <h3>\r" +
    "\n" +
    "            {{_lobby.tournament.name}}\r" +
    "\n" +
    "            <span>({{_lobby.tournament.registered_players}}/{{_lobby.tournament.config.type.num_players * _lobby.tournament.config.type.num_teams}})</span>\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"_lobby.close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-detail-box\" back-img=\"{{_lobby.tournament.maps[0].cover}}\">\r" +
    "\n" +
    "        <div class=\"tournament-detail-header\">\r" +
    "\n" +
    "            <div tournament-header current=\"_lobby.tournament\" registered=\"_lobby.registered_tournament\"\r" +
    "\n" +
    "                 register=\"_lobby.register()\"\r" +
    "\n" +
    "                 unregister=\"_lobby.unregister()\" launched=\"_lobby.launched\" launch=\"_lobby.launch()\"></div>\r" +
    "\n" +
    "            <div class=\"change-team-wrapper\"\r" +
    "\n" +
    "                 ng-if=\"_lobby.registered_tournament.id==_lobby.tournament.id && _lobby.tournament.status == 'REGISTRATION'\">\r" +
    "\n" +
    "                <button class=\"btn btn-block btn-lg btn-swap-team\" ng-click=\"_lobby.swap_team()\">\r" +
    "\n" +
    "                    {{'LOBBY.BUTTON.CHANGE_TEAM'|translate}}<i class=\"fa fa-exchange\"></i>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div tournament-top-player tournament=\"_lobby.tournament\" stats=\"_lobby.stats\"\r" +
    "\n" +
    "             ng-hide=\"_lobby.loading\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div tournament-loader init=\"_lobby.loading\" countdown=\"_lobby.countdown\" match=\"_lobby.tournament\"\r" +
    "\n" +
    "             callback=\"_lobby.launch()\" match=\"_lobby.tournament\" seconds=\"timeElapsed\"\r" +
    "\n" +
    "             ng-if=\"_lobby.loading\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-team-detail-wrapper\" ng-show=\"_lobby.show_players\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-3 col-xs-3\" ng-repeat=\"team in _lobby.tournament.teams\">\r" +
    "\n" +
    "                <div class=\"tournament-team-detail-box\" ng-class=\"{second_team:$index==1}\">\r" +
    "\n" +
    "                    <div class=\"team-header\">\r" +
    "\n" +
    "                        <h3>{{'LOBBY.LABEL.TEAM'|translate}} {{team.name}}</h3>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"table-box\">\r" +
    "\n" +
    "                        <table class=\"table table-match\">\r" +
    "\n" +
    "                            <thead>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <th>R</th>\r" +
    "\n" +
    "                                <th>{{'LOBBY.LABEL.PLAYER'|translate}}</th>\r" +
    "\n" +
    "                                <th>L</th>\r" +
    "\n" +
    "                                <th class='hidden-xs'>M</th>\r" +
    "\n" +
    "                                <th>S</th>\r" +
    "\n" +
    "                                <th>PING</th>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            </thead>\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                            <tr ng-repeat=\"p in team.players\">\r" +
    "\n" +
    "                                <td class=\"rank\">-</td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <div mini-user-resum user=\"p.user\"></div>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td class=\"lvl\">{{p.lvl}}</td>\r" +
    "\n" +
    "                                <td class='hidden-xs'>\r" +
    "\n" +
    "                                    <div reputation=\"{{p.user.reputation}}\"></div>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td class=\"score\">-</td>\r" +
    "\n" +
    "                                <td>{{p.latency}}</td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            <tr ng-repeat=\"i in _lobby.empty[$index]\">\r" +
    "\n" +
    "                                <td colspan=\"7\" class=\"text-center\">{{'LOBBY.LABEL.WAITING_FOR_PLAYER'|translate}}</td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-rules-box\" ng-show=\"_lobby.show_rules\">\r" +
    "\n" +
    "        <div class=\"box-header\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <h3 translate=\"LOBBY.TITLES.RULES\"></h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <a class=\"pull-right\" ng-click=\"_lobby.show_players_box()\">\r" +
    "\n" +
    "                    <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"box-content\" scroll-bar>\r" +
    "\n" +
    "            <div class=\"rule-detail\">\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <h4>LOREM IPMSUM</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis eros eu orci fringilla rutrum\r" +
    "\n" +
    "                    vel at augue. Vestibulum facilisis, velit eu mattis efficitur, turpis est faucibus ex, non\r" +
    "\n" +
    "                    tincidunt felis nibh id leo. Fusce eu auctor nisl. Praesent quis elit ut lacus pretium\r" +
    "\n" +
    "                    ullamcorper. Etiam sodales eu purus in lacinia. Suspendisse sodales diam vitae orci convallis\r" +
    "\n" +
    "                    porttitor. Pellentesque malesuada ex quam, a hendrerit ipsum tempor in. Quisque molestie elit\r" +
    "\n" +
    "                    ex, ut pharetra leo fermentum id.</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/partials/play/tournament/lobby-tournament.html',
    "<div class=\"container\">\r" +
    "\n" +
    "<div class=\"btn-close-wrapper\">\r" +
    "\n" +
    "    <button class=\"btn btn-close\" ng-click=\"_lobby.close()\">x</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "<div class=\"col-md-2 col-sm-2 bounceInDown animated\">\r" +
    "\n" +
    "    <div tournament-detail tournament=\"_lobby.tournament\"></div>\r" +
    "\n" +
    "    <div class=\"tournament-social-box\" ng-if=\"last_tournament_event\">\r" +
    "\n" +
    "        <div class=\"drag-box\">\r" +
    "\n" +
    "            <div><span>PL</span>AY <br>\r" +
    "\n" +
    "                <span>BO</span>X\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"share-box\">\r" +
    "\n" +
    "            <div class=\"share-data\">\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <a href=\"#\">{{last_tournament_event.user}}</a> just {{last_tournament_event.action}}\r" +
    "\n" +
    "                    {{last_tournament_event.quantity}} points in <span>#css</span> on\r" +
    "\n" +
    "                    <span>#electronicStars</span>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"share-by\">\r" +
    "\n" +
    "                <span>SHARE ON : </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"social-sites\">\r" +
    "\n" +
    "                    <i class=\"fa fa-facebook-square\"></i>\r" +
    "\n" +
    "                    <i class=\"fa fa-twitter-square\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"col-md-4 col-sm-4 col-xs-6 \" ng-if=\"_lobby.tournament.status == 'FINISHED'\">\r" +
    "\n" +
    "    <div class=\"tournament-close-header\">\r" +
    "\n" +
    "        <h3>\r" +
    "\n" +
    "            {{_lobby.tournament.name}}\r" +
    "\n" +
    "            <span>({{_lobby.tournament.registered_players}}/{{_lobby.tournament.config.type.num_players * _lobby.tournament.config.type.num_teams}})</span>\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"_lobby.close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-detail-box\" back-img=\"{{_lobby.tournament.maps[0].cover}}\">\r" +
    "\n" +
    "        <div class=\"tournament-detail-header\">\r" +
    "\n" +
    "            <div tournament-header current=\"_lobby.tournament\" registered=\"_lobby.registered_tournament\"\r" +
    "\n" +
    "                 register=\"_lobby.register()\" match=\"_lobby.match\"\r" +
    "\n" +
    "                 unregister=\"_lobby.unregister()\" launched=\"_lobby.launched\" launch=\"_lobby.launch()\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div tournament-match-round-detail match=\"_lobby.match.id\" ng-show=\"_lobby.on_lobby\"></div>\r" +
    "\n" +
    "        <div class=\"row tournament-detail-content\" ng-hide=\"_lobby.loading\">\r" +
    "\n" +
    "            <div ng-hide=\"_lobby.on_lobby\" style=\"position:relative;height: 100%\">\r" +
    "\n" +
    "                <div class=\"tournmanet-description\">\r" +
    "\n" +
    "                    <img src=\"images/logos/shotter_logo.png\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"type\">\r" +
    "\n" +
    "                        <!--Neque porro quisquam est qui dolorem ipsum-->\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"description-type\">\r" +
    "\n" +
    "                        <!--Lorem Ipsum is simply dummy text of the printing and typesetting industry.-->\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div tournament-prizes tournament=\"_lobby.tournament\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-detail-box-title\">\r" +
    "\n" +
    "        <div class=\"box-content\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <h3>{{_lobby.title}}</h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"col-md-2 pull-right\" ng-show=\"_lobby.on_lobby\">\r" +
    "\n" +
    "                    <div class=\"lobby_back_button\" ng-click=\"_lobby.go_brackets()\">\r" +
    "\n" +
    "                        GO TO BRACKETS\r" +
    "\n" +
    "                        <i class=\"fa fa-chevron-right\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-brackets-box\" ng-if=\"_lobby.matches.length > 0\" ng-show=\"_lobby.on_brackets\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\">\r" +
    "\n" +
    "                <div tournament-el-bracket rounds=\"_lobby.rounds\" teams=\"_lobby.tournament.teams\"\r" +
    "\n" +
    "                     matches=\"_lobby.matches\" winner=\"_lobby.winner\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-team-detail-wrapper\" ng-show=\"_lobby.on_lobby\">\r" +
    "\n" +
    "        <div tournament-match match=\"_lobby.match\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"col-md-4 col-sm-4 col-xs-6 bounceInDown animated\" ng-if=\"_lobby.tournament.status != 'FINISHED'\">\r" +
    "\n" +
    "    <div class=\"tournament-close-header\">\r" +
    "\n" +
    "        <h3>\r" +
    "\n" +
    "            {{_lobby.tournament.name}}\r" +
    "\n" +
    "            <span>({{_lobby.tournament.registered_players}}/{{_lobby.tournament.config.type.num_players * _lobby.tournament.config.type.num_teams}})</span>\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"_lobby.close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"tournament-detail-box\" back-img=\"{{_lobby.tournament.maps[0].cover}}\">\r" +
    "\n" +
    "        <div class=\"tournament-detail-header\">\r" +
    "\n" +
    "            <div tournament-header current=\"_lobby.tournament\" registered=\"_lobby.registered_tournament\"\r" +
    "\n" +
    "                 register=\"_lobby.register()\" match=\"_lobby.next_match\"\r" +
    "\n" +
    "                 unregister=\"_lobby.unregister()\" launched=\"_lobby.launched\" launch=\"_lobby.launch()\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div tournament-stats stats=\"_lobby.stats\"></div>\r" +
    "\n" +
    "        <div tournament-match-round-detail match=\"_lobby.match.id\" ng-show=\"_lobby.on_lobby\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"row tournament-detail-content\" ng-hide=\"_lobby.loading\">\r" +
    "\n" +
    "            <div ng-hide=\"_lobby.on_lobby\" style=\"position:relative;height: 100%\">\r" +
    "\n" +
    "                <div class=\"tournmanet-description\">\r" +
    "\n" +
    "                    <img src=\"images/logos/shotter_logo.png\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"type\">\r" +
    "\n" +
    "                        <!--Neque porro quisquam est qui dolorem ipsum-->\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"description-type\">\r" +
    "\n" +
    "                        <!--Lorem Ipsum is simply dummy text of the printing and typesetting industry.-->\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div tournament-prizes tournament=\"_lobby.tournament\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div tournament-loader init=\"_lobby.loading\" countdown=\"_lobby.countdown\"\r" +
    "\n" +
    "             callback=\"_lobby.launch()\" match=\"_lobby.match\" seconds=\"timeElapsed\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-hide=\"_lobby.loading\">\r" +
    "\n" +
    "        <div class=\"tournament-detail-box-title\">\r" +
    "\n" +
    "            <div class=\"box-content\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-3\">\r" +
    "\n" +
    "                        <h3>{{_lobby.title}}</h3>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-if=\"_lobby.tournament.status !='REGISTRATION'\">\r" +
    "\n" +
    "                        <div class=\"col-md-2 pull-right\" ng-show=\"_lobby.on_lobby\">\r" +
    "\n" +
    "                            <div class=\"lobby_back_button\" ng-click=\"_lobby.go_brackets()\">\r" +
    "\n" +
    "                                GO TO BRACKETS\r" +
    "\n" +
    "                                <i class=\"fa fa-chevron-right\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"tournament-teams-box\" ng-if=\"_lobby.matches.length == 0\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div class=\"registered_teams\">\r" +
    "\n" +
    "                        <ul class=\"teams\">\r" +
    "\n" +
    "                            <li class=\"col-md-3\" ng-repeat=\"t in _lobby.tournament.teams\">\r" +
    "\n" +
    "                                <div class=\"bracket-team\" ng-if=\"t.players.length ==0\">\r" +
    "\n" +
    "                                    <div class=\"bracket-team-content\">\r" +
    "\n" +
    "                                        <img class=\" circle\"\r" +
    "\n" +
    "                                             src=\"/images/bgs/teams.png\" alt=\"user\">\r" +
    "\n" +
    "                                        <h4>Team {{t.name}}</h4>\r" +
    "\n" +
    "                                        <h5>waiting for players</h5>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"bracket-team-footer\">\r" +
    "\n" +
    "                                        <div class=\"status\">\r" +
    "\n" +
    "                                            PENDING\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"members\">\r" +
    "\n" +
    "                                            MEMBERS PENDING\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"bracket-team registered\" ng-if=\"t.players.length ==1\">\r" +
    "\n" +
    "                                    <div class=\"bracket-team-content\" ng-init=\"p=t.players[0]\">\r" +
    "\n" +
    "                                        <img class=\" circle\"\r" +
    "\n" +
    "                                             ng-src=\"{{p.user.avatar}}\" profile-tooltip user=\"p.user\" me=\"me\"\r" +
    "\n" +
    "                                             alt=\"user\">\r" +
    "\n" +
    "                                        <h4>Team {{t.name}}</h4>\r" +
    "\n" +
    "                                        <h5>{{p.user.username}}</h5>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"bracket-team-footer registered\">\r" +
    "\n" +
    "                                        <div class=\"status\">\r" +
    "\n" +
    "                                            LVL {{p.lvl}}\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"members\">\r" +
    "\n" +
    "                                            PENDING DRAW\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"tournament-brackets-box\" ng-if=\"_lobby.matches.length > 0\" ng-show=\"_lobby.on_brackets\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div tournament-el-bracket rounds=\"_lobby.rounds\" teams=\"_lobby.tournament.teams\"\r" +
    "\n" +
    "                         matches=\"_lobby.matches\" winner=\"_lobby.tournament.winner\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"tournament-team-detail-wrapper\" ng-show=\"_lobby.on_lobby\">\r" +
    "\n" +
    "            <div tournament-match match=\"_lobby.match\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/partials/play/tournamentList.html',
    "<div class=\"game-detail-container\" back-img=\"{{_tour.game.cover}}\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-xs-3 col-xs-offset-2 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-2\">\r" +
    "\n" +
    "                <div class=\"red-bar\"></div>\r" +
    "\n" +
    "                <div class=\"red-bar\"></div>\r" +
    "\n" +
    "                <div class=\"red-bar\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "<div class=\"col-md-2 hidden-xs hidden-sm\">\r" +
    "\n" +
    "    <div lobby-nav games=\"_app.games\"></div>\r" +
    "\n" +
    "    <div class=\"tournament-social-box\" ng-if=\"last_tournament_event\">\r" +
    "\n" +
    "        <div class=\"drag-box\">\r" +
    "\n" +
    "            <div><span>PL</span>AY <br>\r" +
    "\n" +
    "                <span>BO</span>X\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"share-box\">\r" +
    "\n" +
    "            <div class=\"share-data\">\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <a href=\"#\">{{last_tournament_event.user}}</a> just {{last_tournament_event.action}}\r" +
    "\n" +
    "                    {{last_tournament_event.quantity}} points in <span>#css</span> on\r" +
    "\n" +
    "                    <span>#electronicStars</span>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"share-by\">\r" +
    "\n" +
    "                <span>SHARE ON : </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"social-sites\">\r" +
    "\n" +
    "                    <i class=\"fa fa-facebook-square\"></i>\r" +
    "\n" +
    "                    <i class=\"fa fa-twitter-square\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"col-xs-6 col-sm-6 col-md-4\">\r" +
    "\n" +
    "<div class=\"tournament-advert-box\">\r" +
    "\n" +
    "    <slick dots='true' arrows='true' infinite=true class=\"slide\" slidesToShow=\"1\"\r" +
    "\n" +
    "           fade=\"true\"\r" +
    "\n" +
    "           autoplay=\"true\"\r" +
    "\n" +
    "           autoplaySpeed=\"5000\">\r" +
    "\n" +
    "        <div ng-repeat=\"t in _tour.featured\" class=\"advert\">\r" +
    "\n" +
    "            <img ng-src=\"{{t.featured}}\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"caption\">\r" +
    "\n" +
    "                <div class=\"caption\">\r" +
    "\n" +
    "                    <a ng-click=\"_tour.featured_detail(t.id)\"><span class=\"name\">#{{t.modality}} {{t.name}}</span>\r" +
    "\n" +
    "                                        <span class=\"prize\"> {{t.public_prize|number:2}} <i class=\"\"\r" +
    "\n" +
    "                                                                                            ng-class=\"{'fel fel-fel_money_electornic':t.cash_type=='FAKE_CASH','fel fel-fel_money_euro':t.cash_type=='REAL_CASH'}\"></i> </span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </slick>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div tournament-weekly-winners tournaments=\"_tour.tickets\"></div>\r" +
    "\n" +
    "<div class=\"tournament-list-box \">\r" +
    "\n" +
    "    <div class=\"main-filter-row hidden-xs\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <ul class=\"nav nav-tournament-filter col-md-tercios\" role=\"tablist\">\r" +
    "\n" +
    "                <li ng-class=\"{active:_tour.current_mode=='REAL_CASH'}\"\r" +
    "\n" +
    "                    ng-click=\"_tour.reload_tournament_mode('REAL_CASH')\">\r" +
    "\n" +
    "                    <a translate=\"LOBBY.FILTER.COMPETITIVE\"></a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li ng-class=\"{active:_tour.current_mode=='FAKE_CASH'}\"\r" +
    "\n" +
    "                    ng-click=\"_tour.reload_tournament_mode('FAKE_CASH')\">\r" +
    "\n" +
    "                    <a translate=\"LOBBY.FILTER.TRAINING\"></a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <div class=\"col-md-quarter\">\r" +
    "\n" +
    "                <div class=\"status-legend\">\r" +
    "\n" +
    "                    <h4 translate=\"LOBBY.FILTER.GAME_STATUS\"></h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"btn-group\">\r" +
    "\n" +
    "                        <label class=\"btn\" ng-model=\"_tour._status.open\" btn-checkbox>\r" +
    "\n" +
    "                            <span class=\"circle registering\"></span> {{'LOBBY.FILTER.OPEN' | translate}}\r" +
    "\n" +
    "                        </label>\r" +
    "\n" +
    "                        <label class=\"btn\" ng-model=\"_tour._status.finish\" btn-checkbox>\r" +
    "\n" +
    "                            <span class=\"circle finished\"></span> {{'LOBBY.FILTER.FINISHED' | translate}}\r" +
    "\n" +
    "                        </label>\r" +
    "\n" +
    "                        <label class=\"btn\" ng-model=\"_tour._status.progress\" btn-checkbox>\r" +
    "\n" +
    "                            <span class=\"circle in-progress\"></span> {{'LOBBY.FILTER.IN_PROGRESS' | translate}}\r" +
    "\n" +
    "                        </label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"secundary-filter-box hidden-xs\">\r" +
    "\n" +
    "        <form class=\"form-inline\" role=\"form\">\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label translate=\"LOBBY.FILTER.FILTER_BY\"></label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <div isteven-multi-select max-labels=\"1\" input-model=\"_tour.tournaments_name_filter\"\r" +
    "\n" +
    "                     translation=\"_tour.lang_filter_name\"\r" +
    "\n" +
    "                     output-model=\"_tour._name_filter\"\r" +
    "\n" +
    "                     button-label=\"label\" item-label=\"label\" tick-property=\"ticked\" helper-elements=\"all reset\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <div isteven-multi-select max-labels=\"1\" input-model=\"_tour.tournaments_configs_filter\"\r" +
    "\n" +
    "                     translation=\"_tour.lang_filter_config\"\r" +
    "\n" +
    "                     output-model=\"_tour._config_filter\"\r" +
    "\n" +
    "                     button-label=\"label\" item-label=\"label\" tick-property=\"ticked\" helper-elements=\"all reset\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <div isteven-multi-select max-labels=\"1\" input-model=\"_tour.tournaments_player_filter\"\r" +
    "\n" +
    "                     translation=\"_tour.lang_filter_players\"\r" +
    "\n" +
    "                     output-model=\"_tour._player_filter\"\r" +
    "\n" +
    "                     button-label=\"icon\" item-label=\"icon label\" tick-property=\"ticked\"\r" +
    "\n" +
    "                     helper-elements=\"all reset\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <div isteven-multi-select max-labels=\"1\" input-model=\"_tour.tournaments_bet_filter\"\r" +
    "\n" +
    "                     translation=\"_tour.lang_filter_entry\"\r" +
    "\n" +
    "                     output-model=\"_tour._entry_filter\"\r" +
    "\n" +
    "                     button-label=\"id\" item-label=\"label\" tick-property=\"ticked\" helper-elements=\"all reset\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn btn-sm btn-filter\" ng-model=\"_tour.registered_filter\"\r" +
    "\n" +
    "                        btn-checkbox translate=\"LOBBY.FILTER.WITH_PLAYER\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"table-box\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <table class=\"table table-tournaments\">\r" +
    "\n" +
    "            <thead>\r" +
    "\n" +
    "            <tr>\r" +
    "\n" +
    "                <th class=\"sortable\"\r" +
    "\n" +
    "                    ng-class=\"{'desc':_tour._order_table_head =='name' && !_tour._order_table_revese,'asc':_tour._order_table_head =='name' && _tour._order_table_revese}\"\r" +
    "\n" +
    "                    style=\"width: 24.2%;text-align: left;padding-left: 10px\" ng-click=\"_tour.order_table('name')\">\r" +
    "\n" +
    "                    {{'LOBBY.FILTER.NAME' | translate}}\r" +
    "\n" +
    "                </th>\r" +
    "\n" +
    "                <th class=\"sortable\"\r" +
    "\n" +
    "                    ng-class=\"{'desc':_tour._order_table_head =='entry' && !_tour._order_table_revese,'asc':_tour._order_table_head =='entry' && _tour._order_table_revese}\"\r" +
    "\n" +
    "                    style=\"width: 12.7%\" ng-click=\"_tour.order_table('entry')\">\r" +
    "\n" +
    "                    {{'LOBBY.FILTER.ENTRY' | translate}}\r" +
    "\n" +
    "                </th>\r" +
    "\n" +
    "                <th class=\"sortable\"\r" +
    "\n" +
    "                    ng-class=\"{'desc':_tour._order_table_head =='type' && !_tour._order_table_revese,'asc':_tour._order_table_head =='type' && _tour._order_table_revese}\"\r" +
    "\n" +
    "                    style=\"width: 16.6%\" ng-click=\"_tour.order_table('type')\">\r" +
    "\n" +
    "                    {{'LOBBY.FILTER.TYPE' | translate}}\r" +
    "\n" +
    "                </th>\r" +
    "\n" +
    "                <th class=\"sortable\"\r" +
    "\n" +
    "                    ng-class=\"{'desc':_tour._order_table_head =='players' && !_tour._order_table_revese,'asc':_tour._order_table_head =='players' && _tour._order_table_revese}\"\r" +
    "\n" +
    "                    style=\"width: 12%\" ng-click=\"_tour.order_table('players')\">\r" +
    "\n" +
    "                    {{'LOBBY.FILTER.PLAYERS' | translate}}\r" +
    "\n" +
    "                </th>\r" +
    "\n" +
    "                <th class=\"sortable\"\r" +
    "\n" +
    "                    ng-class=\"{'desc':_tour._order_table_head =='prize' && !_tour._order_table_revese,'asc':_tour._order_table_head =='prize' && _tour._order_table_revese}\"\r" +
    "\n" +
    "                    style=\"width: 12.1%\" ng-click=\"_tour.order_table('prize')\">\r" +
    "\n" +
    "                    {{'LOBBY.FILTER.PRIZE' | translate}}\r" +
    "\n" +
    "                </th>\r" +
    "\n" +
    "                <th style=\"width: 10%\" class=\"hidden-xs\"> {{'LOBBY.FILTER.PLAY' | translate}}</th>\r" +
    "\n" +
    "                <th style=\"width: 20%\"> {{'LOBBY.FILTER.DETAILS' | translate}}</th>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "            </thead>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "        <div class=\"table-content-scrollable\" scroll-bar>\r" +
    "\n" +
    "            <table class=\"table table-tournaments\">\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                <tr ng-repeat=\"t in _tour.tournaments |  filter:_tour._filter_by_name | filter:_tour._filter_by_config | filter:_tour._filter_by_players | filter:_tour._filter_by_status | filter:_tour._filter_by_entry | filter:_tour._filter_by_registered | orderBy:_tour.order_by_status |orderBy:_tour.order_by_paramenter:_tour._order_table_revese\">\r" +
    "\n" +
    "                    <td style=\"width: 29%;text-align: left;padding-left: 10px;\">\r" +
    "\n" +
    "                            <span class=\"circle\"\r" +
    "\n" +
    "                                  ng-class=\"{'in-progress':t.status=='IN_PROGRESS','registering':t.status=='REGISTRATION','finished':t.status=='FINISHED'}\"></span>{{t.name}}\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <td style=\"width: 14%\">{{t.register_amount|number:2}}<i class=\"\"\r" +
    "\n" +
    "                                                                            ng-class=\"{'fel fel-fel_money_electornic':t.cash_type=='FAKE_CASH','fel fel-fel_money_euro':t.cash_type=='REAL_CASH'}\"></i>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td style=\"width: 17.2%\">{{t.modality}}</td>\r" +
    "\n" +
    "                    <td class=\"red\" style=\"width: 14.1%\">\r" +
    "\n" +
    "                        {{t.registered_players}}/{{t.total_players}}\r" +
    "\n" +
    "                                    <span ng-show=\"t.modified=='more'\" class=\"animated flash\"><i\r" +
    "\n" +
    "                                            class=\"fa fa-arrow-up\"></i> </span>\r" +
    "\n" +
    "                            <span ng-show=\"t.modified=='less'\" class=\"animated flash\"><i\r" +
    "\n" +
    "                                    class=\"fa fa-arrow-down\"></i> </span>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"red\" style=\"width: 14.3%\">{{t.public_prize|number:2}} <i class=\"\"\r" +
    "\n" +
    "                                                                                        ng-class=\"{'fel fel-fel_money_electornic':t.cash_type=='FAKE_CASH','fel fel-fel_money_euro':t.cash_type=='REAL_CASH'}\"></i>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"play hidden-xs\" style=\"width: 11%\"><i class=\"fa fa-play-circle-o\"\r" +
    "\n" +
    "                                                                     ng-if=\"t.status=='REGISTRATION'\"\r" +
    "\n" +
    "                                                                     ng-click=\"_tour.tournament_detail(t,true)\"></i>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td style=\"\">\r" +
    "\n" +
    "                        <button class=\"btn btn-tournament-detail\"\r" +
    "\n" +
    "                                ng-click=\"_tour.tournament_detail(t,false)\" translate=\"LOBBY.BUTTON.MORE\">\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-if=\"_tour.last_tournaments != null\" tournament-last-score\r" +
    "\n" +
    "     tournaments=\"_tour.last_tournaments\"></div>\r" +
    "\n" +
    "<div class=\"row\" ng-if=\"_tour.last_tournament != null\">\r" +
    "\n" +
    "    <div class=\"col-md-tercios\" ng-if=\"_tour.last_tournament != null\">\r" +
    "\n" +
    "        <div tournament-post-match tournament=\"_tour.last_tournament\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-quarter pull-right\">\r" +
    "\n" +
    "        <div class=\"top-ranking-box\">\r" +
    "\n" +
    "            <div class=\"header\">\r" +
    "\n" +
    "                <h3>TOP RANKING</h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"content\" scroll-bar>\r" +
    "\n" +
    "                <div top-game-ranking users=\"_tour.top_players\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"footer\">\r" +
    "\n" +
    "                <button class=\"btn btn-block btn-lg btn-danger\" ng-click=\"_tour.show_rank(vm.game)\">\r" +
    "\n" +
    "                    {{'LOBBY.BUTTON.MORE' | translate}} <i class=\"fa fa-angle-right\"></i>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/partials/ranking/index.html',
    "<div class=\"container \">\r" +
    "\n" +
    "    <div class=\"general-ranking-box\">\r" +
    "\n" +
    "        <div class=\"header\">\r" +
    "\n" +
    "            <h3>GLOBAL RANKING<span> {{vm.game.name}}</span></h3>\r" +
    "\n" +
    "            <a class=\"pull-right\" ng-click=\"vm.close()\">\r" +
    "\n" +
    "                <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div user-rank player=\"player\" game=\"vm.game\" ng-repeat=\"player in vm.players\" ng-animate=\" 'card' \"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/partials/registration/index.html',
    "<div class=\"container\">\n" +
    "    <div class=\"btn-close-wrapper-login\">\n" +
    "        <button class=\"btn btn-close\" ng-click=\"close()\">x</button>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 col-md-4 col-md-offset-1\">\n" +
    "            <!--<div ng-hide=\"registration_submitted\" class=\"\">-->\n" +
    "\n" +
    "            <div class=\"user-login-box\">\n" +
    "                <div class=\"header-box\">\n" +
    "                    <h3>CREATE AN ACCOUNT FUCK</h3>\n" +
    "                </div>\n" +
    "                <div class=\"content-box\">\n" +
    "                    <form novalidate=\"novalidate\" name=\"UserRegisterForm\" autocomplete=\"off\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                            <label for=\"username\">Username</label>\n" +
    "                            <input type=\"text\" class=\"form-control\" ng-model=\"user.username\" id=\"username\"\n" +
    "                                   placeholder=\"Introduce tu username\" required>\n" +
    "                        </div>\n" +
    "                        <div class=\"divider\"></div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-3\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Password</label>\n" +
    "                                    <input type=\"password\" class=\"form-control\"\n" +
    "                                           placeholder=\"Password\" required ng-model=\"password\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>RE-ENTER PASSWORD</label>\n" +
    "                                    <input type=\"password\" class=\"form-control\"\n" +
    "                                           placeholder=\"Password\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <div password-strength=\"password\"></div>\n" +
    "                                    <div class=\"password-streght-labels\">\n" +
    "                                        <span>Weak</span>\n" +
    "                                        <span class=\"pull-right\">Strong</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"divider\"></div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-3\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Email Address</label>\n" +
    "                                    <input type=\"email\" class=\"form-control\"\n" +
    "                                           placeholder=\"Email Address...\" ng-modal=\"user.email\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>RE-ENTER Email Address</label>\n" +
    "                                    <input type=\"email\" class=\"form-control\"\n" +
    "                                           placeholder=\"Email Address...\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <p>Electronic Stars will send a confirmation email to this account. Please follow\n" +
    "                                        the link in the mail to verify your email account with Electronic Stars. </p>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"divider\"></div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-3\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Birht Date</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\"\n" +
    "                                           placeholder=\"Password\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                    <div class=\"divider\"></div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <p>\n" +
    "                                Please review the terms and considtions below and agree by selecting the checkbox at the\n" +
    "                                bottom of the page. In order to continue, you must agree with the terms and conditions\n" +
    "                                stated by Electronic Stars below.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"term-box\">\n" +
    "                                <h5>TERMS AND CONDITIONS</h5>\n" +
    "\n" +
    "                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
    "                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
    "                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
    "                                    It has survived not only five centuries, but also the leap into electronic\n" +
    "                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
    "                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
    "                                    with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
    "                                    Ipsum.</p>\n" +
    "\n" +
    "                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
    "                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
    "                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
    "                                    It has survived not only five centuries, but also the leap into electronic\n" +
    "                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
    "                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
    "                                    with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
    "                                    Ipsum.</p>\n" +
    "\n" +
    "                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
    "                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
    "                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
    "                                    It has survived not only five centuries, but also the leap into electronic\n" +
    "                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
    "                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
    "                                    with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
    "                                    Ipsum.</p>\n" +
    "\n" +
    "                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
    "                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
    "                                    unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
    "                                    It has survived not only five centuries, but also the leap into electronic\n" +
    "                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
    "                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
    "                                    with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
    "                                    Ipsum.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <div class=\"checkbox\">\n" +
    "                                <label>\n" +
    "                                    <input type=\"checkbox\"> I agree to the terms & conditions stated above\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <button type=\"submit\" class=\"btn btn-lg btn-danger pull-right\" ng-click=\"join(user)\">CREATE\n" +
    "                                ACCOUNT\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!--<div class=\"user-register page-container\">-->\n" +
    "<!--<div class=\"user-wrapper\">-->\n" +
    "<!--<img src=\"https://estars.s3.amazonaws.com/app/img/red_bg.jpg\" class=\"bg\"/>-->\n" +
    "\n" +
    "<!--<div id=\"login_container\" class=\"signup-container\">-->\n" +
    "\n" +
    "\n" +
    "<!--<h3>Registro Electronic Stars</h3>-->\n" +
    "<!--<span>Descubre todo lo que tu ciudad puede ofrecerte</span>-->\n" +
    "\n" +
    "<!--<form novalidate=\"novalidate\" name=\"UserRegisterForm\" ng-submit=\"register()\">-->\n" +
    "<!--<input type=\"hidden\" name=\"_method\" value=\"POST\">-->\n" +
    "\n" +
    "<!--<div class=\"form-group\">-->\n" +
    "<!--<label for=\"username\">Username</label>-->\n" +
    "<!--<input type=\"text\" class=\"form-control\" ng-model=\"registerModel.username\" id=\"username\"-->\n" +
    "<!--placeholder=\"Introduce tu username\" required>-->\n" +
    "<!--</div>-->\n" +
    "<!--<div class=\"form-group\">-->\n" +
    "<!--<label for=\"password\">Password</label>-->\n" +
    "<!--<input type=\"password\" class=\"form-control\" ng-model=\"registerModel.password\" id=\"password\"-->\n" +
    "<!--placeholder=\"Password\" required>-->\n" +
    "<!--</div>-->\n" +
    "<!--<div class=\"form-group\">-->\n" +
    "<!--<label for=\"firstName\">Nombre</label>-->\n" +
    "<!--<input type=\"text\" class=\"form-control\" id=\"firstName\" ng-model=\"registerModel.first_name\"-->\n" +
    "<!--placeholder=\"Nombre...\" required>-->\n" +
    "<!--</div>-->\n" +
    "<!--<div class=\"form-group\">-->\n" +
    "<!--<label for=\"lastName\">Apellidos</label>-->\n" +
    "<!--<input type=\"text\" class=\"form-control\" id=\"lastName\" ng-model=\"registerModel.last_name\"-->\n" +
    "<!--placeholder=\"Apellidos...\" required>-->\n" +
    "<!--</div>-->\n" +
    "\n" +
    "<!--<div class=\"control-group\">-->\n" +
    "<!--<button type=\"submit\" class=\"btn btn-default btn-lg btn-block\">Registrarse</button>-->\n" +
    "<!--</div>-->\n" +
    "<!--</form>-->\n" +
    "<!--<div class=\"fb-login-container\">-->\n" +
    "<!--<div class=\"divider\">-->\n" +
    "<!--<div>-->\n" +
    "<!--<span>o</span>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<!--<a class=\"btn btn-primary btn-lg btn-block\" ng-click=\"fbLogin()\"><span class=\"fb-btn-icon\"></span>Registro-->\n" +
    "<!--con-->\n" +
    "<!--Facebook</a>-->\n" +
    "<!--<a class=\"btn btn-primary btn-lg btn-block\"><span class=\"fb-btn-icon\"></span>Registro-->\n" +
    "<!--con-->\n" +
    "<!--Twiiter</a>-->\n" +
    "<!--</div>-->\n" +
    "\n" +
    "<!--<span class=\"already-member\">-->\n" +
    "<!--Ya tienes cuenta? <a href=\"signup\">Login</a>-->\n" +
    "<!--</span>-->\n" +
    "\n" +
    "\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('views/partials/signup_confirmation/signup_confirmation.html',
    "<section>\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\">\r" +
    "\n" +
    "                <div class=\"signup_confirmation\">\r" +
    "\n" +
    "                    <p>Estamos trabajando duro para ofrecerte una plataforma donde jugar eSports, y sacar provecho a tus\r" +
    "\n" +
    "                        horas de juego con <span class=\"red clanPro\">premios en metálico</span>.\r" +
    "\n" +
    "                        En estos momentos estamos realizando las últimas pruebas para que puedas disfrutar de tus\r" +
    "\n" +
    "                        deportes\r" +
    "\n" +
    "                        electrónicos favoritos de manera segura en nuestra plataforma.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>¡Queda muy poco para el lanzamiento! Nuestra web estará abierta en breve, con torneos de <span\r" +
    "\n" +
    "                            class=\"red clanPro\">CS:GO</span>,\r" +
    "\n" +
    "                        <span class=\"red clanPro\"> CSS</span> y\r" +
    "\n" +
    "                        <span class=\"red clanPro\">rFactor</span>, en modalidades <span class=\"red clanPro\">1v1</span> y\r" +
    "\n" +
    "                        <span class=\"red clanPro\">Play-and-GO</span>.\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>En cuanto abramos, te recompensaremos por tu espera con créditos gratis, así podrás participar en\r" +
    "\n" +
    "                        nuestras competiciones, y ganar dinero de verdad.\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p>Muy pronto recibirás un email nuestro para que formes parte de los primeros usuarios activos de\r" +
    "\n" +
    "                        <span class=\"red clanPro\">Electronic Stars</span>.\r" +
    "\n" +
    "                        Te animamos a que informes a tus amigos de nuestra existencia, ya que si se registran ahora,\r" +
    "\n" +
    "                        también\r" +
    "\n" +
    "                        recibirán créditos gratis en esta primera fase, y podrán beneficiarse de nuestras promociones de\r" +
    "\n" +
    "                        lanzamiento limitadas.\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <p><span class=\"red clanPro\">Muchísimas gracias</span> por el interés depositado en nosotros,\r" +
    "\n" +
    "                        esperamos verte pronto en nuestros\r" +
    "\n" +
    "                        <span class=\"red clanPro\"> torneos</span>.\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "                    <h4>Saludos cordiales,<br><br>\r" +
    "\n" +
    "                        <span class=\"clanPro\">El Equipo de Electronic Stars</span>\r" +
    "\n" +
    "                    </h4>\r" +
    "\n" +
    "                    <img src=\"images/landing/preview.png\" class=\"img-responsive\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n"
  );


  $templateCache.put('views/partials/termsandconditions/termsandconditions.html',
    "<div class=\"container\">\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "<!--SIDE MENU ---->\r" +
    "\n" +
    "<div class=\"col-md-2  hidden-xs hidden-print hidden-sm \">\r" +
    "\n" +
    "    <div class=\"faq_side_menu\">\r" +
    "\n" +
    "        <nav class=\"hidden-xs hidden-print hidden-sm \">\r" +
    "\n" +
    "            <ul class=\"nav nav-stacked\" role=\"tablist\">\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#service_agreement\" ng-click=\"IsCollapsed1=false\" du-smooth-scroll duration=\"500\"\r" +
    "\n" +
    "                       offset=\"150\" du-scrollspy>\r" +
    "\n" +
    "                        SERVICE AGREEMENT\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"#es_service\" du-smooth-scroll ng-click=\"IsCollapsed2=false\"  duration=\"500\" offset=\"150\" du-scrollspy>\r" +
    "\n" +
    "                        <span class=\"title\">ES SERVICES</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"#es_sport_competitions\" du-smooth-scroll ng-click=\"IsCollapsed3=false\"  duration=\"500\" offset=\"150\" du-scrollspy>\r" +
    "\n" +
    "                        ES ESPORTS COMPETITIONS\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"#your_account\" du-smooth-scroll ng-click=\"IsCollapsed4=false\" duration=\"500\" offset=\"150\" du-scrollspy>\r" +
    "\n" +
    "                        YOUR ACCOUNT\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"#es_obligations\" ng-click=\"IsCollapsed5=false\" du-smooth-scroll duration=\"500\" du-scrollspy>\r" +
    "\n" +
    "                        <span class=\"title\">ES OBLIGATIONS</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#your_obbligations\" ng-click=\"IsCollapsed6=false\" du-scrollspy duration=\"500\" du-smooth-scroll>\r" +
    "\n" +
    "                        <span class=\"title\">YOUR OBLIGATIONS</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"#warnings\" ng-click=\"IsCollapsed7=false\" du-scrollspy du-smooth-scroll duration=\"500\">\r" +
    "\n" +
    "                        <span class=\"title\">ACCOUNT SUSPENSION</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"#termination_by_you\" ng-click=\"IsCollapsed8=false\" du-scrollspy du-smooth-scroll duration=\"500\">\r" +
    "\n" +
    "                        <span class=\"title\">TERMINATION BY YOU</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"#warranty\" ng-click=\"IsCollapsed9=false\" du-scrollspy du-smooth-scroll duration=\"500\">\r" +
    "\n" +
    "                        <span class=\"title\">WARRANTY AND LIABILITY</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#intellectual_property\" ng-click=\"IsCollapsed10=false\"  du-scrollspy du-smooth-scroll duration=\"500\">\r" +
    "\n" +
    "                        <span class=\"title\">INTELLECTUAL PROPERTY</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#privacy_policy\" ng-click=\"IsCollapsed11=false\" du-scrollspy du-smooth-scroll duration=\"500\">\r" +
    "\n" +
    "                        <span class=\"title\">PRIVACY POLICY</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#general_clauses\" ng-click=\"IsCollapsed12=false\" du-scrollspy du-smooth-scroll duration=\"500\">\r" +
    "\n" +
    "                        <span class=\"title\">GENERAL CLAUSES</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </nav>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"col-md-4 \" role=\"main\" du-scroll-container>\r" +
    "\n" +
    "<div class=\"faq-wrapper\">\r" +
    "\n" +
    "<article id=\"service_agreement\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed1 = !IsCollapsed1\">SERVICE AGREEMENT <i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed1,'fa-chevron-down':!IsCollapsed1}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed1\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Your service agreement with electronicstars.com\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>By filling out and accepting ElectronicStars.com’s (the “Site”) online registration form you are\r" +
    "\n" +
    "                accepting our Service Agreement. Our Service Agreement is formed by these terms and conditions (the\r" +
    "\n" +
    "                “T&C”), the Legal Notice, Privacy Policy, Competition Games Rules, Adhoc Legal Notices on the Site\r" +
    "\n" +
    "                and all other additional legal terms, functional terms and usage information that may be provided\r" +
    "\n" +
    "                within the Site (all together referred as the “Service Agreement”). If there is a conflict between\r" +
    "\n" +
    "                any legal documents and terms conforming the Service Agreement the order of preference set out above\r" +
    "\n" +
    "                shall prevail.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>The Service Agreement governs your use of ElectronicStars.com Services (described below) or any\r" +
    "\n" +
    "                portion of them and constitutes an agreement between you and the company ElectronicStars Ltd, with\r" +
    "\n" +
    "                registered address at Unit 2040, Kordin Business Incubation Centre (KBIC), Kordin Industrial Estate,\r" +
    "\n" +
    "                Paola PLA 3000 Malta, duly registered in the Malta Registry with company number C65444 and with\r" +
    "\n" +
    "                contact email address: customersupport@electronicstars.com (hereinafter referred as “ES”). If you\r" +
    "\n" +
    "                have any questions about the Service Agreement or our Services you may contact us at the email\r" +
    "\n" +
    "                address indicated.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>You can access the latest version of these T&C and all other legal conditions forming the Service\r" +
    "\n" +
    "                Agreement at any time on the Site.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>ES reserves the right to change and update any conditions of the Service Agreement from time to time\r" +
    "\n" +
    "                by posting the updated version on the Site. Such change may be due to technical, operational,\r" +
    "\n" +
    "                commercial or legal reasons or to the improvement of our Services. You agree that if you do not\r" +
    "\n" +
    "                accept any amendment to the Service Agreement then you shall immediately stop accessing and/or using\r" +
    "\n" +
    "                our Site and Services. If you continue using our Site and Services you will be at all times obliged\r" +
    "\n" +
    "                to comply with the latest version and applicable Service Agreement which sets out the entire\r" +
    "\n" +
    "                agreement between you and ES concerning ES Services</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"es_service\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed2 = !IsCollapsed2\">ES SERVICES<i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed2,'fa-chevron-down':!IsCollapsed2}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed2\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                ES services\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>ES Services consist in all games information, all content material, social media capabilities and\r" +
    "\n" +
    "                features offered from its Site and in all the technical management of online multiplayer skill games\r" +
    "\n" +
    "                offered with ES’s Electronic Platform combined with ES’s PC Application installed in the users’\r" +
    "\n" +
    "                computer, which ensure the maximum safety and quality in all multiplayer games and in the use of the\r" +
    "\n" +
    "                Site (altogether referred as the “Services”).</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed2\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                ES Site and content\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>The Site will offer the option of competing on multiplayer skill games of different types; with\r" +
    "\n" +
    "                different types and sizes of Playing Fees (as described below), and different types of content\r" +
    "\n" +
    "                materials such as gamers’ profiles, clans profiles, rankings, games results, training tutorials,\r" +
    "\n" +
    "                general information and materials, chat rooms, forums, blogs, online shop, online sponsors,\r" +
    "\n" +
    "                etc..</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed2\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                ES’s Electronic Platform\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>ES offers an online electronic platform (the “Platform” or “Electronic Platform”) by means of which\r" +
    "\n" +
    "                users can compete against each other when playing pure skill video games (also know as electronic\r" +
    "\n" +
    "                sports or esports). ES does not develop or manufacture any skill video games and does not offer its\r" +
    "\n" +
    "                own skill video games in the Site for competition but third party skill video games.[1] </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>The Services provided with the Platform consist in ensuring the maximum safety and quality for all\r" +
    "\n" +
    "                users playing and competing online on pure skill video games. ES Platform achieves such performance\r" +
    "\n" +
    "                by managing and controlling the technical aspects of each game, this is hosting the game on its own\r" +
    "\n" +
    "                servers, ensuring all players upstream bandwidth is sufficient, managing the same levels of\r" +
    "\n" +
    "                downstream bandwidth to all players, same levels of latency to all playersrunning an anti-cheating\r" +
    "\n" +
    "                and antivirus system detection, providing and enforcing just rules for the development of any game,\r" +
    "\n" +
    "                providing unequivocal and automatic registration of all results, audit of results, users, winners,\r" +
    "\n" +
    "                points obtained or real money earned, maximum control of points or real money deposits on users\r" +
    "\n" +
    "                accounts, debiting or crediting points or real money lost or won in the games to each user account.\r" +
    "\n" +
    "                ES provides all technical and functional elements so that the competitions are held with maximum\r" +
    "\n" +
    "                guarantees and fairness and their results are exclusively based on the players skills. All the\r" +
    "\n" +
    "                services above are provided in the same fair way to all players at the same time. However, players\r" +
    "\n" +
    "                have to be aware that their own PCs and internet connections are different and may provide different\r" +
    "\n" +
    "                levels of bandwidth, latency and other characteristics in every single case.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>ES does not calculate any odds on the matches or comment or have knowledge of the probability of one\r" +
    "\n" +
    "                player winning a match versus another player, and makes no representations about an individual\r" +
    "\n" +
    "                player's chances of winning. The games played at ES are dependent on the players pure skills and\r" +
    "\n" +
    "                neither ES or any third party can place bets on the results of the matches using ES Services</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed2\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                ES’s PC Application\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>In order for the Platform to be able to provide all the above Sevices to the user it requires the\r" +
    "\n" +
    "                user to download a ES’s PC Application to its personal computer (“PC”). Such Application will\r" +
    "\n" +
    "                automatically recognize those pure skill games installed in the users’ PC, which are also available\r" +
    "\n" +
    "                in the Site. The Application will recognize when a user chooses to play a particular game against\r" +
    "\n" +
    "                other players on the Site, will launch the game locally and simultaneously on each player’s PC and\r" +
    "\n" +
    "                will manage the multiplayer match with the Platform as explained above. The Application installed in\r" +
    "\n" +
    "                the users’ PC will help on all the functions of the Platform which require exchange of\r" +
    "\n" +
    "                communications with the users’ PC and the users’ locally installed video game. For such purposes the\r" +
    "\n" +
    "                Application will check the hardware and software used in the users PC and its configuration. The\r" +
    "\n" +
    "                Application will also interact with the users PC and the games in order to provide video streaming\r" +
    "\n" +
    "                of any match. The user expressly consents to such video streaming and grants to ES all rights and\r" +
    "\n" +
    "                licenses to generate and provide such video streaming worldwide and without any limitations. You\r" +
    "\n" +
    "                hereby authorize ES to install its Application in your PC and to perform all the functions\r" +
    "\n" +
    "                indicated.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed2\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Third party pure skill video games\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>Users can play on the Site with third party pure skill video games, which have been accepted and set\r" +
    "\n" +
    "                up by ES for competition on the Site. The Site will never offer multiplayer games or competition on\r" +
    "\n" +
    "                games which contain any element of chance whatsoever and, therefore, all available games for\r" +
    "\n" +
    "                competition in the Site will always be of pure skill.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>The skill video games available for competition on the Site have been manufactured by third party\r" +
    "\n" +
    "                manufacturers and ES has no relation with the development or manufacturing of those games. ES\r" +
    "\n" +
    "                Platform manages and controls the multiplayer games undertaken by its users on the Site using those\r" +
    "\n" +
    "                third party skill video games but has no control over the games themselves.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed2\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Playing Fees\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>Playing Fees are the fees played by every player against other players in every particular match. The\r" +
    "\n" +
    "                Playing Fees can be represented in points or real money in Euros. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Whether playing with points Playing Fees or money Playing Fees the user account will be credited or\r" +
    "\n" +
    "                debited with the applicable Playing Fees after each match, depending if the user wins or loses and\r" +
    "\n" +
    "                taking into account the amount of Playing Fees played and the applicable ES Fees. Users can play\r" +
    "\n" +
    "                against each other for free, just using points Playing Fees, and/or with real money using money\r" +
    "\n" +
    "                Playing Fees.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed2\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                ES Fees\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>In exchange for the provision of its Services, ES will charge a fee to all players competing in its\r" +
    "\n" +
    "                Site (“ES Fee”). ES Fee consists on a percentage of the Playing Fees played by every user on every\r" +
    "\n" +
    "                match. ES Fee will be charged in points or in money depending if the Playing Fees are in points or\r" +
    "\n" +
    "                money. ES Fee’s percentage may vary from time to time and from one type of game to another [x5]\r" +
    "\n" +
    "                however, it will be at all times clearly indicated in the Site and before and after each game</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>ES may also charge a fee or a price, depending on the case, for the sale of any physical, virtual or\r" +
    "\n" +
    "                digital products or functions or services from the Site. In all cases, all fees and/or prices will\r" +
    "\n" +
    "                be duly indicated in the Site and particularly before acquiring any physical or virtual product or\r" +
    "\n" +
    "                service. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>All sales by ES to you of virtual or digital products, functions or services are final and ES will\r" +
    "\n" +
    "                not refund any transaction once it has been made. If you live in the European Union you have certain\r" +
    "\n" +
    "                rights to withdraw from distance purchases. However, please note that when you purchase a virtual or\r" +
    "\n" +
    "                digital product, function or services from ES you are only purchasing a license to use such virtual\r" +
    "\n" +
    "                or digital product, function or services and, therefore, the performance of our services begins\r" +
    "\n" +
    "                promptly once your purchase is complete and your right of withdrawal is lost at this point. We\r" +
    "\n" +
    "                reserve the right to control, regulate, change or remove any virtual or digital product, function or\r" +
    "\n" +
    "                service.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>When a user participates in a match, the Playing Fees played are immediately deducted or blocked by\r" +
    "\n" +
    "                ES from his account balance. With the acceptance of this Service Agreement each player expressly\r" +
    "\n" +
    "                instructs ES to hold on to each player’s Playing Fees until there is a final result on the match.\r" +
    "\n" +
    "                Each player also grants an irrevocable authority to ES to pay the winner of the match with the prize\r" +
    "\n" +
    "                associated with such match and only on the basis of the unique valid results, which are those\r" +
    "\n" +
    "                published by ES.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>The prize or prizes associated to each match will be the total Playing Fees less ES Fees unless\r" +
    "\n" +
    "                expressly indicated otherwise for any particular match. The amount of the prize or prizes for each\r" +
    "\n" +
    "                match is displayed in the prize field for such particular game and varies depending on the game, the\r" +
    "\n" +
    "                amount of the Playing Fees, the number of prizes, and the number of people playing in the match. ES\r" +
    "\n" +
    "                may also offer Free Roll competitions where users can play for points and win a money or money worth\r" +
    "\n" +
    "                prize sponsored by ES or any of its sponsors. ES Fees and any sales price in the Site are inclusive\r" +
    "\n" +
    "                of all sales taxes and other charges.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed2\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Gambling and gaming regulations\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>ES Site only offers competitions on video games of pure skill. ES does not offer or allow for any\r" +
    "\n" +
    "                competition on games of chance, lotteries or betting of any type and therefore does not allow for\r" +
    "\n" +
    "                any casino type games or any games which involve random results, dais, cards or similar.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>ES can legally offer competitions with real money given the fact that the games available for\r" +
    "\n" +
    "                competition are exclusively games of pure skill with no element of chance whatsoever. Such pure\r" +
    "\n" +
    "                skill games are excluded from the concept of games of chance, lotteries or betting and therefore are\r" +
    "\n" +
    "                excluded from the concept of gambling and betting.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>ES can legally allow users to play with points and offer money or money worth prizes due to the same\r" +
    "\n" +
    "                reasons stated above. </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"es_sport_competitions\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed3 = !IsCollapsed3\"> ES ESPORTS COMPETITIONS<i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed3,'fa-chevron-down':!IsCollapsed3}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed3\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Esports\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>ES does not develop, copy, reproduce, License or offer any game software, but just the necessary Platform\r" +
    "\n" +
    "                and\r" +
    "\n" +
    "                Services in order to compete with games from third party manufacturers. The applicable license for such\r" +
    "\n" +
    "                games has been previously purchased or legally acquired by the end-user and\r" +
    "\n" +
    "                installed in his PC. At all\r" +
    "\n" +
    "                times the end user must have a legal and valid user license of the relevant game in order to compete on\r" +
    "\n" +
    "                the\r" +
    "\n" +
    "                Site using ES Services.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>The Site offers the option of competing in multiplayer skill games of different types such as shooter\r" +
    "\n" +
    "                games,\r" +
    "\n" +
    "                racing games, strategy games; with a different number of players in head-to-head games such as\r" +
    "\n" +
    "                One-vs-One,\r" +
    "\n" +
    "                Many-vs-Many, Clan-vs-Clan; in different formats such as Sit&Go, Tournaments, Leagues, Free Rolls; with\r" +
    "\n" +
    "                different types of Playing Fees such as points, real money and different sizes of Playing Fees in every\r" +
    "\n" +
    "                case.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> Each particular game or game mode will have its particular Competition Game Rules, which will be\r" +
    "\n" +
    "                published\r" +
    "\n" +
    "                and available on the Site in the Competition Game Rules section. Also, each particular game or game mode\r" +
    "\n" +
    "                may\r" +
    "\n" +
    "                have its particular Adhoc Legal Notices, which will be shown to players before playing.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>All Competition Game Rules form part of the Service Agreement and you agree that you shall comply with\r" +
    "\n" +
    "                them\r" +
    "\n" +
    "                in respect of each individual game you choose to compete with.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>The Platform offers a lobby section with sets of real time matches available for any user to join. The\r" +
    "\n" +
    "                matches offered at the lobby include a broad variety of games, game modes and Playing Fees’s types and\r" +
    "\n" +
    "                sizes. As soon as all necessary players enroll on a game, the Platform will launch such game\r" +
    "\n" +
    "                simultaneously\r" +
    "\n" +
    "                for all players.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>ES has the right to withdraw or modify one or more of our competitions or any other part of our Services\r" +
    "\n" +
    "                (in\r" +
    "\n" +
    "                whole or in part) without liability to you from time to time:</p>\r" +
    "\n" +
    "            <ol type=\"i\">\r" +
    "\n" +
    "                <li>for technical reasons (such as technical difficulties experienced by us or on the internet);</li>\r" +
    "\n" +
    "                <li> to allow us to improve user experience;</li>\r" +
    "\n" +
    "                <li>where we have legal reasons for doing so (including privacy or other legal objections to the content\r" +
    "\n" +
    "                    or\r" +
    "\n" +
    "                    conduct of our Services);\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>because it no longer makes business sense for us to provide the relevant competition or part of our\r" +
    "\n" +
    "                    Services; or\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li> because we have altered the services we provide.</li>\r" +
    "\n" +
    "            </ol>\r" +
    "\n" +
    "            <p>There may also be times when our Services or any part of our Services is not available for technical or\r" +
    "\n" +
    "                maintenance related reasons, whether on a scheduled or unscheduled basis.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>The Site is not responsible for technical, hardware or software malfunctions, lost or unavailable network\r" +
    "\n" +
    "                connections, disconnects from your game play on your platform, or any incorrect or inaccurate results\r" +
    "\n" +
    "                that\r" +
    "\n" +
    "                may be posted on your online competition.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed3\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Prizes\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>All matches will have one or various prizes depending on the type of game. The prize or prizes may be in\r" +
    "\n" +
    "                points, money or money-worth articles. If the prize is in points or money the prize/s associated to each\r" +
    "\n" +
    "                match will be the total Playing Fees less ES Fees, unless indicated expressly otherwise for any\r" +
    "\n" +
    "                particular\r" +
    "\n" +
    "                match. The amount of the prize/s for each match is displayed in the prize field for such particular game\r" +
    "\n" +
    "                at\r" +
    "\n" +
    "                the beginning of any match and varies depending on the game, the amount of the Playing Fees, the number\r" +
    "\n" +
    "                of\r" +
    "\n" +
    "                prizes, and the number of people playing in the match. The prize/s will be deposited directly into\r" +
    "\n" +
    "                winners'\r" +
    "\n" +
    "                accounts once the results have been published by ES.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Your winnings are awarded to you in their entirety, and all federal, provincial, state and local taxes\r" +
    "\n" +
    "                due in\r" +
    "\n" +
    "                connection with any winnings awarded to you are your sole liability and responsibility.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed3\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Result\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>The results and winners of each match offered on the Site will be determined by ES, and such\r" +
    "\n" +
    "                determinations\r" +
    "\n" +
    "                are final. By registering to the Site and/or participating in any match, you agree to be bound by these\r" +
    "\n" +
    "                determinations.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Your winnings are awarded to you in their entirety, and all federal, provincial, state and local taxes\r" +
    "\n" +
    "                due in\r" +
    "\n" +
    "                connection with any winnings awarded to you are your sole liability and responsibility.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>The Platform has an unequivocal and automatic registration of all results, which are hereby accepted by\r" +
    "\n" +
    "                you.\r" +
    "\n" +
    "                All results will be published in the Site during the next 24 hours after a match takes place, unless\r" +
    "\n" +
    "                there\r" +
    "\n" +
    "                has been a technical problem or any investigation opened by ES with regard to such match, in which case\r" +
    "\n" +
    "                the\r" +
    "\n" +
    "                results or the final solution for such match will be available once the technical problem or the\r" +
    "\n" +
    "                investigation has concluded.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Each player grants an irrevocable authority to ES to pay the winner of the match with the prize/s\r" +
    "\n" +
    "                associated\r" +
    "\n" +
    "                with such match and only on the basis of the results published by ES.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed3\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Individual gaming and clan gaming\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>Users will be able to play individually or jointly with a clan, which is a group involving various\r" +
    "\n" +
    "                players\r" +
    "\n" +
    "                whom will play against other clans. When playing with a clan, such clan will have one or various Clan\r" +
    "\n" +
    "                Directors who will set up in the Site the way the clan is going to play and the way winnings and losses\r" +
    "\n" +
    "                need\r" +
    "\n" +
    "                to be allocated by the Site. ES will operate the clan and allocate its winning and loses in the way set\r" +
    "\n" +
    "                up\r" +
    "\n" +
    "                by the Clan Directors and has no involvement in any of the arrangements between the members of the clan,\r" +
    "\n" +
    "                which will be their exclusive responsibility and personal relationship and agreements.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed3\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Cancellations or errors during a match\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>When a running match or competition of any type is stopped by ES or any third party for any reason\r" +
    "\n" +
    "                (technical\r" +
    "\n" +
    "                failure, network failure, cheating, fraud, etc), ES will block all the amounts of Playing Fees from the\r" +
    "\n" +
    "                users accounts and open and immediate investigation for such incident. ES will make its efforts in order\r" +
    "\n" +
    "                to\r" +
    "\n" +
    "                find the source of the problem and reestablish and launch such identical match or competition as soon as\r" +
    "\n" +
    "                possible with the same players and same Playing Fees. If such identical match or competition can not be\r" +
    "\n" +
    "                reestablished, as soon as all investigations by ES have terminated, ES will unblock all Playing Fees\r" +
    "\n" +
    "                allocated by the users to such match or competition without any other liability from ES in relation to\r" +
    "\n" +
    "                such\r" +
    "\n" +
    "                incident.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Notwithstanding the above, any Playing Fees from users who have committed any breach of the Service\r" +
    "\n" +
    "                Agreement\r" +
    "\n" +
    "                will not be unblocked and those users will also be subject to any other measures included in the Service\r" +
    "\n" +
    "                Agreement.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"your_account\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<h3 ng-click=\"IsCollapsed4 = !IsCollapsed4\">YOUR ACCOUNT<i\r" +
    "\n" +
    "        class=\"fa pull-right\"\r" +
    "\n" +
    "        ng-class=\"{'fa-chevron-right':IsCollapsed4,'fa-chevron-down':!IsCollapsed4}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"sub-content\" collapse=\"IsCollapsed4\">\r" +
    "\n" +
    "    <div class=\"init-content\"></div>\r" +
    "\n" +
    "    <div class=\"terms-item\">\r" +
    "\n" +
    "        <div class=\"item-title\">\r" +
    "\n" +
    "            Your account\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <p>You, as the holder of your account, are solely responsible for the compliance with all obligations in this\r" +
    "\n" +
    "            Service Agreement. You may not allow any other person to access your account, access the Site, play in your\r" +
    "\n" +
    "            place, accept any winnings, or participate in any tournament using your account information. Your account is\r" +
    "\n" +
    "            not\r" +
    "\n" +
    "            transferable to any other person. All acts and omissions undertaken under a user's account will be deemed to\r" +
    "\n" +
    "            have been done by such user.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>You agree that you shall take all steps necessary to protect your login details and keep them secret. You\r" +
    "\n" +
    "            agree\r" +
    "\n" +
    "            that you shall not give your login details to anyone else or allow anyone else to use your login details or\r" +
    "\n" +
    "            account. In these terms, references to “login details” or “account” include your login details and account\r" +
    "\n" +
    "            for\r" +
    "\n" +
    "            any social network or platform that you may allow our Services to interact with.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>If you fail to keep your login details secret, or if you share your login details or account with someone\r" +
    "\n" +
    "            else\r" +
    "\n" +
    "            (whether intentionally or unintentionally), you accept full responsibility for the consequences of this\r" +
    "\n" +
    "            (including any unauthorized purchases) and agree to fully compensate us for any losses or harm that may\r" +
    "\n" +
    "            result.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>We will not be responsible to you for any loss that you suffer as a result of an unauthorized person\r" +
    "\n" +
    "            accessing\r" +
    "\n" +
    "            your account and using our Services and we accept no responsibility for any losses or harm resulting from\r" +
    "\n" +
    "            its\r" +
    "\n" +
    "            unauthorized use, whether fraudulently or otherwise.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>Upon registration and/or during the processing of transferring funds into your account, you are\r" +
    "\n" +
    "            required to\r" +
    "\n" +
    "            provide the following information:</p>\r" +
    "\n" +
    "        <ol type=\"i\">\r" +
    "\n" +
    "            <li>an alias that will be your username</li>\r" +
    "\n" +
    "            <li>a password</li>\r" +
    "\n" +
    "            <li>your e-mail address</li>\r" +
    "\n" +
    "            <li>birth date</li>\r" +
    "\n" +
    "            <li>full name</li>\r" +
    "\n" +
    "            <li>permanent residential address</li>\r" +
    "\n" +
    "            <li>phone number</li>\r" +
    "\n" +
    "            <li>credit card or other payment information</li>\r" +
    "\n" +
    "            <li>gender</li>\r" +
    "\n" +
    "        </ol>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>The information provided must be true, accurate, current and complete, as requested. You agree to update the\r" +
    "\n" +
    "            registration data to keep it current and accurate. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>Please note that ES reserves his right of admission of users to the Site, this means that ES could, in its\r" +
    "\n" +
    "            sole\r" +
    "\n" +
    "            discretion, decide to deny access to any particular user including, but not limited to, those users who use\r" +
    "\n" +
    "            proxy servers and/or IP addresses residing in certain geographical areas. In the same way ES is entitled to\r" +
    "\n" +
    "            terminate the Service Agreement and your account for no reason at any time and immediately only sending you\r" +
    "\n" +
    "            a\r" +
    "\n" +
    "            notification and refunding you with all money funds or any other money-worth goods that you may have in our\r" +
    "\n" +
    "            account. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>Please note that the minimum deposit is Euros 10 if you choose to play for money. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>Your account will have points and/or real money. In order to participate in a match you must have points or\r" +
    "\n" +
    "            money\r" +
    "\n" +
    "            in your account so that you can place your Playing Fee in such match. You may use any free points or money\r" +
    "\n" +
    "            bonus\r" +
    "\n" +
    "            funds that ES may have awarded you with for promotional purposes. You can win points and/or money by playing\r" +
    "\n" +
    "            or\r" +
    "\n" +
    "            you can transfer money funds into your account by any of the payment methods permitted by the Site from time\r" +
    "\n" +
    "            to\r" +
    "\n" +
    "            time. Such funds will be deposited into your account only upon actual receipt of funds by ES. Different\r" +
    "\n" +
    "            minimum\r" +
    "\n" +
    "            and maximum limits may be applied to the payments into your account, depending upon your history with the\r" +
    "\n" +
    "            Site,\r" +
    "\n" +
    "            the method of deposit, and other factors as determined solely by ES. No interest is payable on money amounts\r" +
    "\n" +
    "            on\r" +
    "\n" +
    "            deposit in your account. All payments into your account must come from a legitimate and legal business and\r" +
    "\n" +
    "            from\r" +
    "\n" +
    "            payment source on which you are the named account holder. ES also reserves the right to require you to\r" +
    "\n" +
    "            confirm\r" +
    "\n" +
    "            or validate any or all deposits previously made to your account. You acknowledge that in the case of a\r" +
    "\n" +
    "            dispute,\r" +
    "\n" +
    "            your validation may be used by ES as evidence of your account deposits. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>ES uses third-party electronic payment processors and financial institutions (\"Payment Processors\") to\r" +
    "\n" +
    "            process\r" +
    "\n" +
    "            deposits and withdrawals into and from your Account. The information that we provide to and receive from\r" +
    "\n" +
    "            these\r" +
    "\n" +
    "            Payment Processors and the manner in which such information is used and disclosed is described in further\r" +
    "\n" +
    "            detail\r" +
    "\n" +
    "            in the Privacy Policy. You irrevocably authorize ES to instruct such Payment Processors to handle Account\r" +
    "\n" +
    "            deposits and withdrawals from your Account as reasonably required to provide you the Services and you\r" +
    "\n" +
    "            irrevocably agree that ES may give such instructions on your behalf in accordance with your requests as\r" +
    "\n" +
    "            submitted through the Site, or via instructions to Customer Care. You agree to be bound by the terms and\r" +
    "\n" +
    "            conditions of use of each applicable Payment Processor, and in the event of a conflict between this Service\r" +
    "\n" +
    "            Agreement and the Payment Processors' terms and conditions, then these Service Agreement shall prevail. You\r" +
    "\n" +
    "            agree that ES is not liable for any loss caused by any unauthorized use of your credit card or other method\r" +
    "\n" +
    "            of\r" +
    "\n" +
    "            payment by a third-party in connection with your use of the Services or the Site. You have to have full\r" +
    "\n" +
    "            control\r" +
    "\n" +
    "            on the methods of payment you use and in case of loosing such control at any time, you shall immediately\r" +
    "\n" +
    "            cancel\r" +
    "\n" +
    "            those methods of payment. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>The Site may impose Euro amount limitations on the transactions in which you engage to fund your activities\r" +
    "\n" +
    "            on\r" +
    "\n" +
    "            the Site. ES reserves the right to limit your activity on the Site in any way it deems appropriate, in its\r" +
    "\n" +
    "            sole\r" +
    "\n" +
    "            discretion. The Site reserves the right to set expiration dates or other limits on all promotional or bonus\r" +
    "\n" +
    "            funds or credits, including entry-fee bonuses or credits and prize credits applied to your account. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>ES may at any time require any user to provide original or sufficient proof of any required documentation or\r" +
    "\n" +
    "            information to participate in order to continue to allow such user access to the Site and the Services, and\r" +
    "\n" +
    "            each\r" +
    "\n" +
    "            user hereby acknowledges and accepts this condition of their participation as a reasonable measure to ensure\r" +
    "\n" +
    "            the\r" +
    "\n" +
    "            security of the Site. In addition, each user will be required to provide proper identification prior to\r" +
    "\n" +
    "            receiving a prize or the processing by ES of any withdrawal request. Participants may, at their option,\r" +
    "\n" +
    "            pre-register their identification at any time prior to submitting a withdrawal request.\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>You consent to allow ES to access your account information in order to operate the Site and the Services and\r" +
    "\n" +
    "            to\r" +
    "\n" +
    "            investigate any type of complaints, fraud or misuse of the Site in any way. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>We reserve the right to set your account as dormant if no activity is conducted by you in relation to the\r" +
    "\n" +
    "            account\r" +
    "\n" +
    "            for 90 or more days. In such event, we will keep your account as dormant, however, will charge a maintenance\r" +
    "\n" +
    "            fees of Euros 5 each month up until the moment that you contact us in order to reactivate your account or up\r" +
    "\n" +
    "            until the moment your account has no money in deposit in which moment we shall have the right to terminate\r" +
    "\n" +
    "            your\r" +
    "\n" +
    "            account. If your account has any points in deposit those will be lost at the moment the account is\r" +
    "\n" +
    "            terminated. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>You understand that if you terminate your account, or if we terminate your account in accordance with these\r" +
    "\n" +
    "            terms, you will lose access to any data previously associated with your account (including, without\r" +
    "\n" +
    "            limitation,\r" +
    "\n" +
    "            the level or score you have reached in our games and any points and, if applicable, money associated with\r" +
    "\n" +
    "            your\r" +
    "\n" +
    "            account).</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"sub-content\" collapse=\"IsCollapsed4\">\r" +
    "\n" +
    "    <div class=\"init-content\"></div>\r" +
    "\n" +
    "    <div class=\"terms-item\">\r" +
    "\n" +
    "        <div class=\"item-title\">\r" +
    "\n" +
    "            Withdrawal Requests\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <p>Withdrawal of funds will be based on how you have deposited funds into your account in the past. If you have\r" +
    "\n" +
    "            previously deposited via Credit Card, Debit Card, PayPal or ClickandBuy, your card(s) and/or account will be\r" +
    "\n" +
    "            refunded in the amount of and order by which previous charges have been made within 60 days of such deposit.\r" +
    "\n" +
    "            Any balance that exceeds your previous deposit amounts will be sent to you via your preferred PayPal\r" +
    "\n" +
    "            account.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p> Please ensure that any prepaid MasterCards or prepaid Visas that you may use to make transfers to and from\r" +
    "\n" +
    "            your Account are active.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>Most withdrawal requests through Credit Card, Debit Card, PayPal, or ClickandBuy should be in your account\r" +
    "\n" +
    "            within 5-10 business days of our receipt of your request, subject to verification requirements (see below).\r" +
    "\n" +
    "            If you do not receive your withdrawal within 10 business days, please contact customer support or email\r" +
    "\n" +
    "            customer support at customersupport@electronicstars.com</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p> The withdrawal process is designed to minimize customer fees and add an additional element of security to\r" +
    "\n" +
    "            protect ES users. In the ongoing pursuit to prevent fraudulent behavior and account hijacking, ES reserves\r" +
    "\n" +
    "            the right to require the account holder or Credit Card company (if applicable) to submit verification of\r" +
    "\n" +
    "            identification to ascertain the validity of a withdrawal request and the identity of the member. Withdrawal\r" +
    "\n" +
    "            payments will not be made until such verification is received. If ES has not received verification within 10\r" +
    "\n" +
    "            days, the withdrawal request will be cancelled, the account in question will be suspended and an\r" +
    "\n" +
    "            investigation by ES will start, first of all contacting you.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>The minimum withdrawal amount is Euros 20 or the member's entire balance (if less than Euros 20). All\r" +
    "\n" +
    "            withdrawals are subject to a withdrawal fee (\"Withdrawal Fee\") currently Euros 3.01 per withdrawal for\r" +
    "\n" +
    "            withdrawals requested via PayPal or credit card.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>You may request a withdrawal of funds from your available money in the account at any time if you have played\r" +
    "\n" +
    "            at least one time with the money in the account. If you ordered a deposit but it is pending, you must wait\r" +
    "\n" +
    "            until those funds clear before requesting a withdrawal. Withdrawal will also be revoked for security\r" +
    "\n" +
    "            purposes when account fraud is suspected.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>Please note that money bonus can not be withdrawn.</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"sub-content\" collapse=\"IsCollapsed3\">\r" +
    "\n" +
    "    <div class=\"init-content\"></div>\r" +
    "\n" +
    "    <div class=\"terms-item\">\r" +
    "\n" +
    "        <div class=\"item-title\">\r" +
    "\n" +
    "            Currency\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <p>You hereby acknowledge and agree that all transactions (including deposits and payouts) will be denominated\r" +
    "\n" +
    "            in EUROS. As a result, if you make a payment to, or you receive a payment from us in connection with your\r" +
    "\n" +
    "            use of this Site, currency conversion will apply if you do not operate from and Euro account.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>As an information service only, the approximate conversion rates are set out in our cashier, are updated\r" +
    "\n" +
    "            every day and are calculated using the previous day's closing rates provided by the third party Oanda.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>For the purpose of allowing you to deposit to or withdraw money from your Site account, all currency\r" +
    "\n" +
    "            conversions shall be executed by an exchange rate offered by your financial institution. The rate provided\r" +
    "\n" +
    "            by your financial institution may differ from the approximate information rates provided by Oanda; and in\r" +
    "\n" +
    "            every case, it is your responsibility to monitor and accept the exchange rate(s) offered and service\r" +
    "\n" +
    "            charge(s) by your financial institution before proceeding with any transaction with the Site involving an\r" +
    "\n" +
    "            exchange of currency.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>In every case, ES expressly disclaims all warranties of any kind with respect to any currency conversion in\r" +
    "\n" +
    "            connection with this site, including with respect to any posted or actual rates, including without\r" +
    "\n" +
    "            limitation with respect to authenticity, accuracy, completeness, errors, omission, typographic errors,\r" +
    "\n" +
    "            disruption, delay, interruption, failure, deletion, or defect in connection with such rates, and further\r" +
    "\n" +
    "            expressly disclaims all responsibility for any and all losses due to changes in exchange rates which may\r" +
    "\n" +
    "            occur.</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"es_obligations\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed5 = !IsCollapsed5\">ES OBLIGATIONS <i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed5,'fa-chevron-down':!IsCollapsed5}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed5\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Es obligations\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>ES commits to providing the Services in the best way possible at all times and to ensure that all matches\r" +
    "\n" +
    "                are\r" +
    "\n" +
    "                fair, free from cheats and exclusively based on skill. Also ensuring the full security of ES Platform\r" +
    "\n" +
    "                and\r" +
    "\n" +
    "                that all winnings, whether in points or money, are duly credited to the relevant user accounts.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Unless otherwise explicitly permitted, it is not allowed for employees of ES, its subsidiaries or\r" +
    "\n" +
    "                partners,\r" +
    "\n" +
    "                or employees that are in some way connected to a respective match, including sponsors, publishers or\r" +
    "\n" +
    "                game\r" +
    "\n" +
    "                developers, to participate in money or money-worth prize winning matches of any type.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"your_obbligations\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<h3 ng-click=\"IsCollapsed6 = !IsCollapsed6\">YOUR OBLIGATIONS<i\r" +
    "\n" +
    "        class=\"fa pull-right\"\r" +
    "\n" +
    "        ng-class=\"{'fa-chevron-right':IsCollapsed6,'fa-chevron-down':!IsCollapsed6}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"sub-content\" collapse=\"IsCollapsed6\">\r" +
    "\n" +
    "<div class=\"init-content\"></div>\r" +
    "\n" +
    "<div class=\"terms-item\">\r" +
    "\n" +
    "<div class=\"item-title\">\r" +
    "\n" +
    "    Your obligations\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<p>In order to register and maintain an account on the Site, you confirm that, at all times, you\r" +
    "\n" +
    "    comply with all the following requirements:</p>\r" +
    "\n" +
    "<ol type=\"1\">\r" +
    "\n" +
    "    <li>You are a natural person, of at least 18 years old and over the age of majority in the jurisdiction in\r" +
    "\n" +
    "        which you live.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>That all personal data included in your registration form and user account is true, accurate and\r" +
    "\n" +
    "        complete at all times and that you update it as and when necessary for such purpose.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>That you are the only one responsible and on full control of the email address provided to ES and that\r" +
    "\n" +
    "        you review any incoming emails to such email account at least once a day.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>You are responsible for the internet connection charges that you may incur for using our Services.</li>\r" +
    "\n" +
    "    <li>Your PC equipment and broadband access comply with the minimum technical requirements indicated by ES at\r" +
    "\n" +
    "        any and all times, which shall ensure that you can compete in full competitive conditions.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>You are a citizen or resident of a nation estate or federated estate or country (“Territory”) where\r" +
    "\n" +
    "        skill gaming with real money can be legally offered and legally played.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>You are physically located in a Territory in which participation in the Services is allowed by\r" +
    "\n" +
    "        applicable laws;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ol>\r" +
    "\n" +
    "<p>In relation to points 6 and 7 above:</p>\r" +
    "\n" +
    "<ul>\r" +
    "\n" +
    "    <li>ES cannot and does not offer fee-based matches to residents of Quebec (Canadà).</li>\r" +
    "\n" +
    "    <li>ES cannot and does not offer fee-based matches to residents of the following states of the United\r" +
    "\n" +
    "        States of America: Arizona, Arkansas, Connecticut, Delaware, Florida, Illinois, Iowa, Louisiana,\r" +
    "\n" +
    "        Maryland, Montana, Nebraska, South Carolina, South Dakota, Tennessee. The laws governing contests,\r" +
    "\n" +
    "        tournaments and skill gaming with entry fees and/or prizes in the USA are established by each individual\r" +
    "\n" +
    "        state, not by the federal government and that is the reason of this distinction. In case you are a USA\r" +
    "\n" +
    "        resident and your state changes the laws regarding fee-based skill gaming so that you can participate in\r" +
    "\n" +
    "        these type of games we encourage you to contact us so that we can review such regulatory situation.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>If you open an account and/or participate in any match or game offered on the Site while located in a\r" +
    "\n" +
    "        prohibited jurisdiction, you will be in violation of the law of such jurisdiction and this Service\r" +
    "\n" +
    "        Agreement, and be subject to having your account suspended or terminated immediately and all your\r" +
    "\n" +
    "        winnings (if any) voided, amongst other measures to be taken.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>You are subject to all laws of the province, state, and/or country in which you reside and from which\r" +
    "\n" +
    "        you access the Services, and are solely responsible for knowing and obeying those laws. You acknowledge\r" +
    "\n" +
    "        that ES cannot know the laws of the whole world and those of every single state and territory. You agree\r" +
    "\n" +
    "        ES is not and cannot be held liable if laws applicable to you restrict or prohibit your participation.\r" +
    "\n" +
    "        ES makes no representations or warranties, implicit or explicit, as to your legal right to participate\r" +
    "\n" +
    "        in any match offered on the Site nor shall any person affiliated, or claiming affiliation, with ES have\r" +
    "\n" +
    "        authority to make any such representations or warranties.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>\r" +
    "\n" +
    "<p>ES reserves the right to monitor the location from which you access the Site and to block access from any\r" +
    "\n" +
    "    jurisdiction in which participation is illegal or restricted and also reserves the right to report your\r" +
    "\n" +
    "    contact\r" +
    "\n" +
    "    details to the Courts or Governmental Authorities of your jurisdiction which request so in writing to ES.\r" +
    "\n" +
    "</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<p>Your breach of any of the obligations below or any of the obligations in the Service Agreement will suppose a\r" +
    "\n" +
    "    Minor, Major or Serious Breach by you of the Service Agreement and will entail a Warning, Suspension or\r" +
    "\n" +
    "    Termination of your account by ES as explained below in these T&C. You commit to comply with all obligations\r" +
    "\n" +
    "    in the Service Agreement and in particular all the following:</p>\r" +
    "\n" +
    "<ol type=\"1\">\r" +
    "\n" +
    "    <li>Comply with ES Service Agreement.</li>\r" +
    "\n" +
    "    <li>Use our Services complying with any applicable law or regulation;</li>\r" +
    "\n" +
    "    <li>Comply with the laws that apply to you in the location that you access our Services from. If any laws\r" +
    "\n" +
    "        applicable to you restrict or prohibit you from using our Services, you must comply with those legal\r" +
    "\n" +
    "        restrictions or, if applicable, stop accessing and/or using our Services.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to play in the Site or use ES Services using a user license which is not legal in any way. This\r" +
    "\n" +
    "        meaning that the user must, at all times, hold a legal and valid user license of the relevant game in\r" +
    "\n" +
    "        order to compete on the Site using ES Services.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to publish, upload, link, communicate, transmit, refer to or relate in any way to the Site or the\r" +
    "\n" +
    "        Services or include in the users profile, even as a username, any material that is or could reasonably\r" +
    "\n" +
    "        be viewed as being or containing (i) unlawful, harmful, harassing, defamatory, libelous, obscene,\r" +
    "\n" +
    "        slanderous, violent, insulting, threatening or otherwise objectionable contents, (ii) pornography, child\r" +
    "\n" +
    "        pornography, (ii) violence, racism, advocacy against any individual, group, or organization, human\r" +
    "\n" +
    "        tragedy or suffering (iii) promotion of weapons, alcohol, tobacco, medicines, drugs, gambling, betting,\r" +
    "\n" +
    "        lotteries or any related, (iv) offers of illegal products, services or activities, (v) any infringement\r" +
    "\n" +
    "        to another's privacy; (vi) fake documents, copied material, an infringement of any intellectual property\r" +
    "\n" +
    "        right or other proprietary right of others; (vii) personal or business secrets or confidential\r" +
    "\n" +
    "        information, (viii) software viruses or any other computer code, files or programs designed to\r" +
    "\n" +
    "        interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications\r" +
    "\n" +
    "        equipment or network, (ix) any unsolicited or unauthorised communications, spam, advertising,\r" +
    "\n" +
    "        promotional materials, chain letters, or any other form of solicitation.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ol>\r" +
    "\n" +
    "<p>Unsolicited or unauthorized communications or spam is defined as:</p>\r" +
    "\n" +
    "<ul>\r" +
    "\n" +
    "    <li>Electronic communications of any type addressed to a recipient with whom the initiator does not have an\r" +
    "\n" +
    "        existing business or personal relationship or is not sent at the request of, or with the express consent\r" +
    "\n" +
    "        of\r" +
    "\n" +
    "        the recipient;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Messages posted to blogs, forums, chat rooms and message boards that are off-topic (unrelated to the\r" +
    "\n" +
    "        topic\r" +
    "\n" +
    "        of discussion), cross-posted to unrelated message boards or discussion threads, or posted in excessive\r" +
    "\n" +
    "        volume;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>\r" +
    "\n" +
    "<p>\r" +
    "\n" +
    "<ol type=\"1\">\r" +
    "\n" +
    "    <li>You understand and agree that all Information, data, software, sound, photographs, graphics, video,\r" +
    "\n" +
    "        tags, or\r" +
    "\n" +
    "        other materials that you sent, upload, communicate, transmit or otherwise make available via our\r" +
    "\n" +
    "        Services\r" +
    "\n" +
    "        when using our Services, whether publicly posted or privately sent, is your sole responsibility. This\r" +
    "\n" +
    "        means\r" +
    "\n" +
    "        that you, not us, are entirely responsible for all Content that you may upload, communicate, transmit or\r" +
    "\n" +
    "        otherwise make available via our Services.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to harvest, scrape, copy, republish or collect any information about or regarding the Site and its\r" +
    "\n" +
    "        content, the Services, or about any user, ranking, results, list of events or matches, database included\r" +
    "\n" +
    "        in\r" +
    "\n" +
    "        the Site and/or our Services, including, but not limited to any personal data or information by using\r" +
    "\n" +
    "        any\r" +
    "\n" +
    "        software, spyware or in general by any means.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to sell, transfer or try to sell or transfer your account or someone else’s account with us or any\r" +
    "\n" +
    "        part\r" +
    "\n" +
    "        of an account including any points, money, virtual or digital products, functions or services;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to cheat when using our Services in any imaginable way that may suppose that you are acquiring an\r" +
    "\n" +
    "        advantage in front of other users which is not purely due to your skills in playing a particular game.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to cheat or assist in cheating in our Services by using automated means or robots or third party\r" +
    "\n" +
    "        software to play or third persons to play in your place, or to otherwise circumvent technological\r" +
    "\n" +
    "        measures\r" +
    "\n" +
    "        designed to control access to, or elements of our Services, or to do anything else that a reasonable\r" +
    "\n" +
    "        person\r" +
    "\n" +
    "        is likely to believe is not within the spirit of fair play or these terms and that could affect the\r" +
    "\n" +
    "        nature\r" +
    "\n" +
    "        of pure skill in ES matches;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to cheat by acts of collusion, meaning the fact of having an arrangement with a player of the\r" +
    "\n" +
    "        counterpart in a match in order to arrange for a desired result or for any other purpose whatsoever;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to disrupt, alter, violate the normal and fair flow of a match or otherwise act in a manner that is\r" +
    "\n" +
    "        likely to negatively affect other players' ability to compete fairly when playing our games or engaging\r" +
    "\n" +
    "        in\r" +
    "\n" +
    "        real time exchanges; affect the outcome of your online game play on your platform by means of or with\r" +
    "\n" +
    "        the\r" +
    "\n" +
    "        assistance of macros, bots, automated programs, screen analysis utilities, player collusion, any type of\r" +
    "\n" +
    "        modifications, memory readers, telepathy, alien technology or similar methods or to otherwise commit\r" +
    "\n" +
    "        fraud\r" +
    "\n" +
    "        in relation to the Site; not to alter the human skill component of any game played on your platform;\r" +
    "\n" +
    "        intentionally poor play in certain games in order to achieve a broader competitive advantage depending\r" +
    "\n" +
    "        on\r" +
    "\n" +
    "        how rankings or competitions are organized.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to create more than one account in our Services or using another person or entity’s email address in\r" +
    "\n" +
    "        order to sign up to use our Services or using another persons’ account or letting another person using\r" +
    "\n" +
    "        your\r" +
    "\n" +
    "        account with or without such person or your consent.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not using our Services for fraudulent or abusive purposes (including, without limitation, by using our\r" +
    "\n" +
    "        Services to impersonate any person or entity, or otherwise misrepresent your affiliation with a person,\r" +
    "\n" +
    "        entity or our Services);\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not disguising or anonymizing or hiding your IP address or the source of any content that you may upload\r" +
    "\n" +
    "        or\r" +
    "\n" +
    "        any connection you make to our platform by using proxies or other means;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not using our Services for any commercial or business purpose or for the benefit of any third party or\r" +
    "\n" +
    "        to\r" +
    "\n" +
    "        send unsolicited communications, publish advertising or promotion of other companies or URLs.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to take, copy, use, link, publish, remove or amend any proprietary notices or other ownership\r" +
    "\n" +
    "        information from our Site or any other part of our Services;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to interfere with or disrupt in any way our Services our Site, Platform, servers or networks that\r" +
    "\n" +
    "        provide our Services; gain unauthorized access to the Site's systems or any account (other than your\r" +
    "\n" +
    "        own),\r" +
    "\n" +
    "        interfere with the communications, procedures or performance of the Site or deliberately damage or\r" +
    "\n" +
    "        undermine\r" +
    "\n" +
    "        the Site;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not to attempt to decompile, reverse engineer, disassemble or hack any of our Services, or to defeat or\r" +
    "\n" +
    "        overcome any of our encryption technologies or security measures or data transmitted, processed or\r" +
    "\n" +
    "        stored by\r" +
    "\n" +
    "        us;\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Not sharing your personal information (your name, phone number, home address, password) with others on\r" +
    "\n" +
    "        the\r" +
    "\n" +
    "        Site, unless otherwise allowed, or communicate personal identifying information about another member,\r" +
    "\n" +
    "        including real name, address, phone number, e-mail address, etc.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>Provide any false or clearly inaccurate or incorrect identification document to ES.</li>\r" +
    "\n" +
    "    <li>Not providing paper and copies of original identification documents when requested by ES.</li>\r" +
    "\n" +
    "    <li>Not to attempt to defraud the Site and/or ES through the use of credit cards or other methods of\r" +
    "\n" +
    "        payment,\r" +
    "\n" +
    "        regardless of the outcome, not to fail honouring legitimate charges or requests for payment, or\r" +
    "\n" +
    "        confirmation\r" +
    "\n" +
    "        of deposits, not to charge back or deny any of the purchases or deposits that you made on the Site.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ol>\r" +
    "\n" +
    "<p>\r" +
    "\n" +
    "    If you wish to report the breach of any of these obligations by another user please forward all evidence of\r" +
    "\n" +
    "    the\r" +
    "\n" +
    "    breach to customersupport@electronicstars.com. Please refer responsibly and not acting in bad faith towards\r" +
    "\n" +
    "    other users.\r" +
    "\n" +
    "</p>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"warnings\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed7 = !IsCollapsed7\">ACCOUNT SUSPENSION <i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed7,'fa-chevron-down':!IsCollapsed7}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed7\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Warnings\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>You will receive the notification of a Warning by email and as a message in your account whenever you\r" +
    "\n" +
    "                commit\r" +
    "\n" +
    "                a Minor Breach of the Service Agreement. In such Warning we will ask you to correct your behavior or\r" +
    "\n" +
    "                breach\r" +
    "\n" +
    "                immediately and not to repeat it again; we may also decide to temporarily limit or prohibit your\r" +
    "\n" +
    "                participation in any games or using all or part of our Services, as well as decide to remove any post,\r" +
    "\n" +
    "                comment, picture or any other element that ES deems is not in line with the Service Agreement.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Normally breaches of the Service Agreement which are deemed by ES, in its sole discretion, to be\r" +
    "\n" +
    "                unintentional or suppose a low risk or damage, or coming from a first-time-offenders may receive an\r" +
    "\n" +
    "                initial\r" +
    "\n" +
    "                Warning. Repeating offenders will be deemed to be intentionally violating the Service Agreement.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed7\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Termination\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p> You will receive the notification of Termination by email and as a message when trying to access your\r" +
    "\n" +
    "                account whenever you commit a Serious Breach of the Service Agreement. The Termination of you account\r" +
    "\n" +
    "                will\r" +
    "\n" +
    "                imply the following:</p>\r" +
    "\n" +
    "            <ol type=\"i\">\r" +
    "\n" +
    "                <li>You will have to compensate ES, according to law, for all losses, damages, harm, claims and expenses\r" +
    "\n" +
    "                    that may arise from your breach or breaches of the Service Agreement provided ES has notified you of\r" +
    "\n" +
    "                    such losses, damages, harm, claims and expenses even if it is with a preliminary, non-binding,\r" +
    "\n" +
    "                    evaluation.\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li> ES is authorized to apply any money funds in your account as total or partial indemnity to the\r" +
    "\n" +
    "                    losses,\r" +
    "\n" +
    "                    damages, harm, claims and expenses caused.\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li> You will lose all the configuration of your account, any content uploaded, any picture, comment or\r" +
    "\n" +
    "                    material of any type in your account, any virtual or digital product, service or function, which\r" +
    "\n" +
    "                    will\r" +
    "\n" +
    "                    also not be available to any third party. Those will be available to ES, in particular taking into\r" +
    "\n" +
    "                    account that constitute part of the evidence of your breach, who will keep them for the maximum\r" +
    "\n" +
    "                    period\r" +
    "\n" +
    "                    permitted by law.\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>In all cases, Warning, Suspension or Termination, ES will seek to restore the situation trying to\r" +
    "\n" +
    "                    neutralize the effects of your breach. This may imply taking out any winnings from your account due\r" +
    "\n" +
    "                    to,\r" +
    "\n" +
    "                    related to, or consequence of such breach, void your scores, change your rating, seize funds in your\r" +
    "\n" +
    "                    account to repay other users who have been suffered a loss due to your breach, and/or commence legal\r" +
    "\n" +
    "                    proceedings against you. ES may cooperate with legal authorities and third parties in the\r" +
    "\n" +
    "                    investigation\r" +
    "\n" +
    "                    of any suspected or alleged crime or civil wrong against ES or any of its users using the ES\r" +
    "\n" +
    "                    Services.\r" +
    "\n" +
    "                    Your breach of this Service Agreement may result not only in the Termination of your user account\r" +
    "\n" +
    "                    and\r" +
    "\n" +
    "                    forfeiture of all winnings, bonuses and incentives to which you would otherwise be entitled, but\r" +
    "\n" +
    "                    potentially lead to civil and/or criminal prosecution.\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ol>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed7\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Suspension\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>You will receive the notification of Suspension by email and as a message when trying to access your\r" +
    "\n" +
    "                account\r" +
    "\n" +
    "                whenever you commit a Major Breach of the Service Agreement. Such Suspension will imply that your\r" +
    "\n" +
    "                account\r" +
    "\n" +
    "                has been suspended temporally meaning that you can not access it and, therefore, can not use our\r" +
    "\n" +
    "                Services or\r" +
    "\n" +
    "                dispose or withdraw or exchange any points or money funds and you can also not Terminate the account\r" +
    "\n" +
    "                during\r" +
    "\n" +
    "                such period. During the Suspension ES will conduct the relevant and necessary investigations, which may\r" +
    "\n" +
    "                take\r" +
    "\n" +
    "                up to 6 months, in order to determine your implication in the Major Breach or any other breach and\r" +
    "\n" +
    "                finally\r" +
    "\n" +
    "                decide if your account is Terminated given the fact that your breach is a Serious Breach or if the\r" +
    "\n" +
    "                Suspension has to be lifted given the fact that your breach is a Minor Breach. In that case a Warning\r" +
    "\n" +
    "                will\r" +
    "\n" +
    "                be notified to you setting out any necessary corrections, limitations or prohibitions in your\r" +
    "\n" +
    "                account.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"termination_by_you\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed8 = !IsCollapsed8\">TERMINATION BY YOU <i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed8,'fa-chevron-down':!IsCollapsed8}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed8\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Termination by you\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>Unless otherwise stated in the Service Agreement under particular circumstances, you are entitled to\r" +
    "\n" +
    "                terminate your account at any time by withdrawing all your funds in the account and contacting customer\r" +
    "\n" +
    "                support asking to terminate the account. ES will respond to your request within 15 days.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>You will be responsible for any acts and omissions from your account during the time your account had\r" +
    "\n" +
    "                been\r" +
    "\n" +
    "                opened in accordance to the Service Agreement and until the moment that your account has been fully\r" +
    "\n" +
    "                terminated, this means that such termination has been accepted by ES.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>You will not be able to terminate your account once it is under warning or suspension or under any\r" +
    "\n" +
    "                investigation of any type until such investigation has concluded.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Upon ES’s confirmation of your request for the termination of your account and provided you have\r" +
    "\n" +
    "                withdrawn\r" +
    "\n" +
    "                all money funds, ES will proceed with such termination. Please note you will lose all the configuration\r" +
    "\n" +
    "                of\r" +
    "\n" +
    "                your account, any content uploaded, any picture, comment or material of any type in your account, any\r" +
    "\n" +
    "                virtual or digital product, service or function, which will also not be available to any third party.\r" +
    "\n" +
    "                Those\r" +
    "\n" +
    "                will be available to ES, in particular taking into account that may still be necessary for any future\r" +
    "\n" +
    "                investigation, who will keep them for the maximum period permitted by law.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"warranty\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed9 = !IsCollapsed9\">WARRANTY, LIABILITY AND INDEMNIFICATION <i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed9,'fa-chevron-down':!IsCollapsed9}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed9\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Warranty\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>Your use of the services is at your sole risk. The services are provided on an \"as is\" and \"as available\"\r" +
    "\n" +
    "                basis. ES expressly disclaims all warranties of any kind, whether express or implied, including, but not\r" +
    "\n" +
    "                limited to, the implied warranties of merchantability, fitness for a particular purpose and\r" +
    "\n" +
    "                non-infringement. ES makes no warranty that (i) the services will meet your requirements, (ii) the\r" +
    "\n" +
    "                services\r" +
    "\n" +
    "                will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the\r" +
    "\n" +
    "                use of\r" +
    "\n" +
    "                the services will be accurate or reliable, (iv) the quality of any products, services or information\r" +
    "\n" +
    "                purchased or obtained by you through the services will meet your expectations, (v) your messages, data\r" +
    "\n" +
    "                or\r" +
    "\n" +
    "                information, in whatever form or medium, will not be lost, and (vi) any errors will be corrected. Any\r" +
    "\n" +
    "                material downloaded or otherwise obtained through the Services is done at your own discretion and risk,\r" +
    "\n" +
    "                and\r" +
    "\n" +
    "                you will be solely responsible for any damage to your computer system or loss of data that results from\r" +
    "\n" +
    "                the\r" +
    "\n" +
    "                download of any such material. No advice or information, whether oral or written, obtained by you from\r" +
    "\n" +
    "                ES,\r" +
    "\n" +
    "                or through or from the Services will create any warranty unless it is expressly stated in the Service\r" +
    "\n" +
    "                Agreement.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed9\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Liability\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>ES accepts liability for death or personal injury resulting from our willful acts or omissions that of\r" +
    "\n" +
    "                our\r" +
    "\n" +
    "                employees or agents, and for losses or harm caused by willful fraud committed by us, or any other\r" +
    "\n" +
    "                liability\r" +
    "\n" +
    "                which may not be excluded by law.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>For any other damages or losses, we will only be responsible for damages or losses which are produced as\r" +
    "\n" +
    "                a\r" +
    "\n" +
    "                consequence of an act or omission under our sole control and which are a direct consequence of our\r" +
    "\n" +
    "                negligence or breach of the Service Agreement. In that case, our total indemnity to you will be\r" +
    "\n" +
    "                refunding\r" +
    "\n" +
    "                you with the Playing Fees that you have played in any match where the damages or loss has been produced,\r" +
    "\n" +
    "                or\r" +
    "\n" +
    "                restoring you with the virtual product, service or function that may have been damaged or lost or, in\r" +
    "\n" +
    "                any\r" +
    "\n" +
    "                other cases where the above would not be applicable, our maximum indemnity to you will be of Euros 200\r" +
    "\n" +
    "                for\r" +
    "\n" +
    "                all an any damage or loss caused in the same period or in different periods of time.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>ES is not responsible for:</p>\r" +
    "\n" +
    "            <ol type=\"i\">\r" +
    "\n" +
    "                <li> Damages and losses not caused by our breach of the Service Agreement;</li>\r" +
    "\n" +
    "                <li> Damages and losses which are not reasonably foreseeable by you and us at the time of you agreeing\r" +
    "\n" +
    "                    to\r" +
    "\n" +
    "                    this Service Agreement including those losses which happen as a side effect of foreseeable losses.\r" +
    "\n" +
    "                    This\r" +
    "\n" +
    "                    could include loss of data, loss of opportunity, service interruption, computer or other device\r" +
    "\n" +
    "                    failure\r" +
    "\n" +
    "                    or financial loss;\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li> Indirect, incidental, special, consequential or exemplary damages, including but not limited to,\r" +
    "\n" +
    "                    damages for loss of profits, goodwill, use, data or other intangible losses, even if ES has been\r" +
    "\n" +
    "                    advised\r" +
    "\n" +
    "                    of the possibility of such damages.\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li> Any origination or increase of damage or loss resulting from you breaching this Service\r" +
    "\n" +
    "                    Agreement;\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li> Technical failures or the lack of availability of our Site or Services where these are not within\r" +
    "\n" +
    "                    our\r" +
    "\n" +
    "                    reasonable control.\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li> Any content, goods, charges, services provided by third parties which websites are linked from or\r" +
    "\n" +
    "                    to\r" +
    "\n" +
    "                    the Site or by online o physical third parties which advertise, sponsor or have any relation with\r" +
    "\n" +
    "                    our\r" +
    "\n" +
    "                    Site.\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li> Comments, pictures, videos, ratings, content and any material in general posted by any other user\r" +
    "\n" +
    "                    or\r" +
    "\n" +
    "                    third party in the Site. You acknowledge that we do not monitor content that is contributed by users\r" +
    "\n" +
    "                    or\r" +
    "\n" +
    "                    third parties that use our Services and we make no undertaking to do so.\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ol>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed9\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Indemnification\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>By registering and/or participating in the Services, you agree to indemnify, defend, and hold harmless\r" +
    "\n" +
    "                ES,\r" +
    "\n" +
    "                its group companies, affiliates, and the directors, officers, employees, shareholders, vendors,\r" +
    "\n" +
    "                partners,\r" +
    "\n" +
    "                contractors, agents, licensors or other representatives of each of them and all their successors and\r" +
    "\n" +
    "                assigns\r" +
    "\n" +
    "                (collectively, the \"Indemnitees\") in respect of all claims, costs (including legal fees and costs),\r" +
    "\n" +
    "                damages,\r" +
    "\n" +
    "                liabilities, losses and expenses or obligations of any kind, arising out of or in connection with your\r" +
    "\n" +
    "                use\r" +
    "\n" +
    "                or misuse of the Services (including without limitation use of your account, whether or not authorized\r" +
    "\n" +
    "                by\r" +
    "\n" +
    "                you). ES retains the right to assume the exclusive defence and control of any claim supporting\r" +
    "\n" +
    "                indemnification, and in such cases you agree to cooperate with us to defend any such claim. You will not\r" +
    "\n" +
    "                settle any claim covered by this clause or which could in any way affect ES without ES's prior written\r" +
    "\n" +
    "                approval.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"intellectual_property\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed10 = !IsCollapsed10\">INTELLECTUAL PROPERTY<i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed10,'fa-chevron-down':!IsCollapsed10}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed10\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Intelectual property\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p> You acknowledge that all copyright, trade marks, and other intellectual property rights in and relating\r" +
    "\n" +
    "                to\r" +
    "\n" +
    "                our Site, Services and materials therein of any type is owned by or licensed to ES, even if licensed by\r" +
    "\n" +
    "                other users or by yourself in accordance with this Service Agreement.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> Whilst you are in compliance with this Service Agreement, we grant you a non-exclusive,\r" +
    "\n" +
    "                non-transferable,\r" +
    "\n" +
    "                personal, revocable, limited licence to access and use our Site and Services for your own personal\r" +
    "\n" +
    "                private\r" +
    "\n" +
    "                use only as user of the Services in accordance with the Service Agreement. You agree not to use our Site\r" +
    "\n" +
    "                or\r" +
    "\n" +
    "                Services for anything else. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> You must not copy, distribute, scrape, intercept, make available to the public or create any derivative\r" +
    "\n" +
    "                work\r" +
    "\n" +
    "                from our Services or any part of our Services unless we have first agreed to this in writing.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> In particular, and without limiting the application of paragraph 9.3, you must not make available any\r" +
    "\n" +
    "                cheats\r" +
    "\n" +
    "                or technological measures designed to control access to, or elements of our Services.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> You must not copy, distribute, make available to the public or create any derivative work from any\r" +
    "\n" +
    "                Content\r" +
    "\n" +
    "                belonging to any other user of our Services. If you believe that your intellectual property rights have\r" +
    "\n" +
    "                been\r" +
    "\n" +
    "                infringed by someone else over the internet, you may contact us explaining which is your legal title\r" +
    "\n" +
    "                over\r" +
    "\n" +
    "                those rights and why you consider there is an infringement of those rights to\r" +
    "\n" +
    "                info@electronicstars.com.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> If you submit or transmit or stream audio, video, or text materials to the Site, including, but not\r" +
    "\n" +
    "                limited\r" +
    "\n" +
    "                to, comments, questions, suggestions, drawings, or computer programs (collectively, \"Submissions\"), you\r" +
    "\n" +
    "                grant to ES a non-exclusive, worldwide, royalty-free, fully sub-licensable license, to use, distribute,\r" +
    "\n" +
    "                edit, display, archive, publish, sublicense, perform, reproduce, make available, transmit, broadcast,\r" +
    "\n" +
    "                sell,\r" +
    "\n" +
    "                translate and create derivative works of those Submissions, and your name, voice, likeness and other\r" +
    "\n" +
    "                identifying information where part of a Submission, in any form, media, or technology of any kind now\r" +
    "\n" +
    "                known\r" +
    "\n" +
    "                or developed in the future, for any purpose and in particular for the purpose of developing and\r" +
    "\n" +
    "                marketing\r" +
    "\n" +
    "                game products, esports, skill games and tournaments. You hereby waive any moral rights you may have in\r" +
    "\n" +
    "                such\r" +
    "\n" +
    "                Submissions. Submissions shall not be subject to any obligation of confidence on the part of ES.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> You represent and warrant that you have all rights necessary to grant to ES the license above and that\r" +
    "\n" +
    "                none\r" +
    "\n" +
    "                of your Submissions are defamatory, violate any rights of third parties, including, without limitation,\r" +
    "\n" +
    "                any\r" +
    "\n" +
    "                intellectual property rights, or violate applicable laws.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> Any information uploaded by you to the Site or provided to ES, including but not limited to photos,\r" +
    "\n" +
    "                videos,\r" +
    "\n" +
    "                names, links, data, questions, comments, suggestions, or the like, shall be deemed to be\r" +
    "\n" +
    "                non-confidential.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"privacy_policy\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed11 = !IsCollapsed11\">PRIVACY POLICY<i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed11,'fa-chevron-down':!IsCollapsed11}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed11\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Privacy policy\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p> ES is registered with the data protection authority in Malta. </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> ES will only collect, process, use and share your personal information in accordance with our Privacy\r" +
    "\n" +
    "                Policy\r" +
    "\n" +
    "                and as explained in any other part of the Service Agreement. By using our Services, you give your\r" +
    "\n" +
    "                consent to\r" +
    "\n" +
    "                us collecting, processing, using and sharing your personal data in this way. If you do not agree to our\r" +
    "\n" +
    "                Privacy Policy you should not accept it and therefore not access and/or use our Services.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> Any personal information that we collect may also be subject to the policy of any social network that\r" +
    "\n" +
    "                you\r" +
    "\n" +
    "                may agree to link our Services to. If you play in our Site and you agree to allow it to interact with a\r" +
    "\n" +
    "                social network you are giving us permission to use any information which that social network shares with\r" +
    "\n" +
    "                us\r" +
    "\n" +
    "                that will allow us to personally identify you. You are also granting us permission to help your contacts\r" +
    "\n" +
    "                on\r" +
    "\n" +
    "                that network find you so that you can play socially. This is intended to make our Services more\r" +
    "\n" +
    "                enjoyable\r" +
    "\n" +
    "                for you and others that play in our Site. If you do not agree to these practices you should not allow\r" +
    "\n" +
    "                our\r" +
    "\n" +
    "                Services to interact with your social network.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>We may use cookies, or similar technologies (such as HTML5 Local Storage) to store certain types of\r" +
    "\n" +
    "                information each time you use our Services. They may for example be used to help us recognise your\r" +
    "\n" +
    "                computer\r" +
    "\n" +
    "                and to ensure that your account is accessed by the person that inputs the correct username and password\r" +
    "\n" +
    "                for\r" +
    "\n" +
    "                that account. You can find out more about how we use cookies and other similar technologies by reading\r" +
    "\n" +
    "                our\r" +
    "\n" +
    "                Privacy Policy.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed11\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Playing our Games with other users\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>Most of our competitions allow you to play against an opponent or to play socially with other users. You\r" +
    "\n" +
    "                may\r" +
    "\n" +
    "                be able to (i) choose to play against another user or to play socially with another user whom ES selects\r" +
    "\n" +
    "                for\r" +
    "\n" +
    "                you, or (ii) play against, or play socially with one of your contacts on a platform or social network\r" +
    "\n" +
    "                which\r" +
    "\n" +
    "                you have allowed our competitions to interact with. Some of our Services may also allow you to search\r" +
    "\n" +
    "                for\r" +
    "\n" +
    "                your friends (for example, by email address) in order to find them to play against or play socially\r" +
    "\n" +
    "                with. We\r" +
    "\n" +
    "                may also display the display names of your past opponents so that you can easily find them to play\r" +
    "\n" +
    "                again.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Where ES selects another user for you, we may either select at random or use such criteria as we see fit\r" +
    "\n" +
    "                to\r" +
    "\n" +
    "                select your opponent (for example, your past scores, your location or level you have reached in a\r" +
    "\n" +
    "                particular\r" +
    "\n" +
    "                game). We may also use such data from your profile and track record in order to propose you as the\r" +
    "\n" +
    "                potential\r" +
    "\n" +
    "                opponent of another user so that he can solicit to play against you.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>By accessing and/or playing in our Site you agree to your name, scores, profile and other related details\r" +
    "\n" +
    "                being displayed to other users. You also understand and agree that other users may find you by searching\r" +
    "\n" +
    "                for\r" +
    "\n" +
    "                you with your email address or any of the fields in your profile. Please note that we will only show\r" +
    "\n" +
    "                your\r" +
    "\n" +
    "                display name publically, and not your email address; another user must already know your email address\r" +
    "\n" +
    "                in\r" +
    "\n" +
    "                order to search for you.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed11\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Express Consent for Business Purposes\r" +
    "\n" +
    "                and Promotional Activities\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>Most of our competitions allow you to play against an opponent or to play socially with other users. You\r" +
    "\n" +
    "                may\r" +
    "\n" +
    "                be able to (i) choose to play against another user or to play socially with another user whom ES selects\r" +
    "\n" +
    "                for\r" +
    "\n" +
    "                you, or (ii) play against, or play socially with one of your contacts on a platform or social network\r" +
    "\n" +
    "                which\r" +
    "\n" +
    "                you have allowed our competitions to interact with. Some of our Services may also allow you to search\r" +
    "\n" +
    "                for\r" +
    "\n" +
    "                your friends (for example, by email address) in order to find them to play against or play socially\r" +
    "\n" +
    "                with. We\r" +
    "\n" +
    "                may also display the display names of your past opponents so that you can easily find them to play\r" +
    "\n" +
    "                again.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Where ES selects another user for you, we may either select at random or use such criteria as we see fit\r" +
    "\n" +
    "                to\r" +
    "\n" +
    "                select your opponent (for example, your past scores, your location or level you have reached in a\r" +
    "\n" +
    "                particular\r" +
    "\n" +
    "                game). We may also use such data from your profile and track record in order to propose you as the\r" +
    "\n" +
    "                potential\r" +
    "\n" +
    "                opponent of another user so that he can solicit to play against you.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>By accessing and/or playing in our Site you agree to your name, scores, profile and other related details\r" +
    "\n" +
    "                being displayed to other users. You also understand and agree that other users may find you by searching\r" +
    "\n" +
    "                for\r" +
    "\n" +
    "                you with your email address or any of the fields in your profile. Please note that we will only show\r" +
    "\n" +
    "                your\r" +
    "\n" +
    "                display name publically, and not your email address; another user must already know your email address\r" +
    "\n" +
    "                in\r" +
    "\n" +
    "                order to search for you.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "<article id=\"general_clauses\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3 ng-click=\"IsCollapsed12 = !IsCollapsed12\">GENERAL CLAUSES<i\r" +
    "\n" +
    "            class=\"fa pull-right\"\r" +
    "\n" +
    "            ng-class=\"{'fa-chevron-right':IsCollapsed12,'fa-chevron-down':!IsCollapsed12}\"></i></h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed12\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Transferring these terms\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>ES is expressly authorized by you to transfer all or a part of our rights and obligations under the\r" +
    "\n" +
    "                Service\r" +
    "\n" +
    "                Agreement to someone else without obtaining your consent. You agree that we may do so provided that the\r" +
    "\n" +
    "                transfer does not significantly disadvantage you. If you would not agree with such transfer your only\r" +
    "\n" +
    "                remedy\r" +
    "\n" +
    "                would be terminating your account with ES. You may not transfer any of the rights and obligations we\r" +
    "\n" +
    "                have\r" +
    "\n" +
    "                agreed with you under the Service Agreement or your account unless we would expressly agree to this in\r" +
    "\n" +
    "                writing.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed12\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Severability\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>If any part of these terms is held to be invalid or unenforceable under any applicable local laws or by a\r" +
    "\n" +
    "                competent court, that part shall be interpreted in a manner consistent with the applicable law to\r" +
    "\n" +
    "                reflect as\r" +
    "\n" +
    "                nearly as possible our original intentions and the remainder of the Service Agreement shall remain valid\r" +
    "\n" +
    "                and\r" +
    "\n" +
    "                enforceable.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed12\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Waivers of our rights\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>ES failure to exercise or enforce any of our rights under the Service Agreement does not waive our right\r" +
    "\n" +
    "                to\r" +
    "\n" +
    "                enforce such right at any time later. Any waiver of such rights shall only be effective if it is in\r" +
    "\n" +
    "                writing\r" +
    "\n" +
    "                and signed by us.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sub-content\" collapse=\"IsCollapsed12\">\r" +
    "\n" +
    "        <div class=\"init-content\"></div>\r" +
    "\n" +
    "        <div class=\"terms-item\">\r" +
    "\n" +
    "            <div class=\"item-title\">\r" +
    "\n" +
    "                Applicable law and competent courts\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>In case of any conflict or concerns we encourage you to contacting us with a view of solving such\r" +
    "\n" +
    "                situation\r" +
    "\n" +
    "                at customersupport@electronicstars.com.\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p> This Service Agreement is governed by and interpreted in accordance with the laws of Malta. For any\r" +
    "\n" +
    "                matter\r" +
    "\n" +
    "                related to the interpretation or execution of this Service Agreement, the parties expressly waive to\r" +
    "\n" +
    "                submit\r" +
    "\n" +
    "                to any courts which might have jurisdiction over the subject matter, and agree to submit to the sole\r" +
    "\n" +
    "                competence and jurisdiction of the La Valetta Courts. In case your local consumer laws establish the\r" +
    "\n" +
    "                Courts\r" +
    "\n" +
    "                of your domicile as the competent Courts, those Courts will then be competent although Maltese law will\r" +
    "\n" +
    "                still be the applicable law.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</article>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/partials/user/crop/cover-crop.html',
    "<div class=\"close-absolute-btn\">\r" +
    "\n" +
    "    <a ng-click=\"close()\">\r" +
    "\n" +
    "        <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"profile-cover-upload\" crop>\r" +
    "\n" +
    "    <div class=\"user-cover\">\r" +
    "\n" +
    "        <div class=\"inner\" ng-click=\"starCrop()\">\r" +
    "\n" +
    "            <div class=\"upload-bar\">\r" +
    "\n" +
    "                <i class=\"fa fa-camera\"></i>\r" +
    "\n" +
    "                <span>Cambia tu foto de encabezado</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <input type=\"file\" class=\"cropit-image-input\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"cover-options-wrapper\">\r" +
    "\n" +
    "        <div class=\"container\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-offset-2 col-md-4\">\r" +
    "\n" +
    "                    <div class=\"slider-wrapper\">\r" +
    "\n" +
    "                        <div class=\"help\">\r" +
    "\n" +
    "                            <div class=\"slider-title\">\r" +
    "\n" +
    "                                Reposicionar y escalar encabezado\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"slider-subtitle\">\r" +
    "\n" +
    "                                Algunas áreas podrían ser recortadas en pantallas más grandes\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"slider-content\">\r" +
    "\n" +
    "                            <span class=\"icon fa\"></span>\r" +
    "\n" +
    "                            <input type=\"range\" id=\"range\"\r" +
    "\n" +
    "                                   class=\"cropit-image-zoom-input el-slider\"\r" +
    "\n" +
    "                                   min=\"-2\" max=\"2\"\r" +
    "\n" +
    "                                   step=\"0.5\" value=\"0\">\r" +
    "\n" +
    "                            <span class=\"icon large fa\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"slider-buttons\">\r" +
    "\n" +
    "                            <button class=\"btn btn-danger\" ng-click=\"endCrop()\">Guardar</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-2\">\r" +
    "\n" +
    "            <div class=\"profile-avatar-upload\">\r" +
    "\n" +
    "                <div class=\"inner\" ng-click=\"startavatarCrop()\">\r" +
    "\n" +
    "                    <div class=\"upload-bar\">\r" +
    "\n" +
    "                        <i class=\"fa fa-camera\"></i>\r" +
    "\n" +
    "                        <input type=\"file\" file callback=\"avatarCrop\" class=\"avatarCrop\" accept=\"image/*\"/>\r" +
    "\n" +
    "                        <span>Cambia tu foto de perfil\r" +
    "\n" +
    "                        {{avatar}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/user/crop/profile-crop.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h3 class=\"modal-title\">Posiciona y redimensiona tu foto</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"image-editor\">\r" +
    "\n" +
    "        <input type=\"file\" class=\"cropit-image-input\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"cropit-image-preview-container\">\r" +
    "\n" +
    "            <div class=\"cropit-image-preview\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"cover-options-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"slider-wrapper\">\r" +
    "\n" +
    "                <div class=\"slider-content\">\r" +
    "\n" +
    "                    <span class=\"icon fa\"></span>\r" +
    "\n" +
    "                    <input type=\"range\" id=\"range\"\r" +
    "\n" +
    "                           class=\"cropit-image-zoom-input el-slider\"\r" +
    "\n" +
    "                           min=\"-2\" max=\"2\"\r" +
    "\n" +
    "                           step=\"0.5\" value=\"0\">\r" +
    "\n" +
    "                    <span class=\"icon large fa\"></span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancelar</button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"endCrop()\">Aplicar</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/user/edit/password.html',
    "<div class=\"edit-profile-box\" ng-controller=\"user.modal.profile.password as vm\">\r" +
    "\n" +
    "    <div class=\"box-header\">\r" +
    "\n" +
    "        <i class=\"fa fa-pencil\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h3 translate=\"EDIT_PROFILE.PASSWORD.TITLE\"></h3>\r" +
    "\n" +
    "        <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "            <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"box-content\">\r" +
    "\n" +
    "        <form novalidate=\"novalidate\" name=\"passwordForm\" class=\"passwordForm\" autocomplete=\"off\"\r" +
    "\n" +
    "              ng-submit=\"vm.update_password()\">\r" +
    "\n" +
    "            <alert ng-repeat=\"alert in vm.messages\" type=\"{{alert.type}}\" close=\"vm.close_message($index)\">{{alert.msg}}\r" +
    "\n" +
    "            </alert>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <div class=\"form-group\"\r" +
    "\n" +
    "                         ng-class=\"{'has-error':passwordForm.old_password.$error && passwordForm.old_password.$touched }\">\r" +
    "\n" +
    "                        <label translate=\"EDIT_PROFILE.PASSWORD.OLD_PASSWORD_LABEL\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </label>\r" +
    "\n" +
    "                        <input type=\"password\" class=\"form-control\" ng-model=\"vm.user.old_password\" name=\"old_password\"\r" +
    "\n" +
    "                               placeholder=\"{{'EDIT_PROFILE.PASSWORD.OLD_PASSWORD_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                               required>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div ng-messages=\"passwordForm.old_password.$error\" ng-if=\"passwordForm.old_password.$touched\">\r" +
    "\n" +
    "                            <div ng-message=\"required\" class=\"help-block\">\r" +
    "\n" +
    "                                {{'COMMON.ERROR.REQUIRED_TEXT' | translate}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"divider\"></div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <div class=\"form-group\"\r" +
    "\n" +
    "                         ng-class=\"{'has-error':passwordForm.password.$error && passwordForm.password.$touched }\">\r" +
    "\n" +
    "                        <label translate=\"EDIT_PROFILE.PASSWORD.NEW_PASSWORD_LABEL\"></label>\r" +
    "\n" +
    "                        <input type=\"password\" class=\"form-control\" name=\"password\"\r" +
    "\n" +
    "                               placeholder=\"{{'EDIT_PROFILE.PASSWORD.NEW_PASSWORD_PLACEHOLDER' | translate}}\"\r" +
    "\n" +
    "                               minlength=\"8\" required ng-model=\"vm.user.password\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div ng-messages=\"passwordForm.password.$error\"\r" +
    "\n" +
    "                             ng-if=\"passwordForm.password.$touched\">\r" +
    "\n" +
    "                            <div ng-message=\"required\" class=\"help-block\">\r" +
    "\n" +
    "                                <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                                {{'COMMON.ERROR.REQUIRED_TEXT' |\r" +
    "\n" +
    "                                translate}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div ng-message=\"minlength\" class=\"help-block\">\r" +
    "\n" +
    "                                <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                                {{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_ERROR_MINLENGHT' |\r" +
    "\n" +
    "                                translate}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\"\r" +
    "\n" +
    "                         ng-class=\"{'has-error':passwordForm.repeated_password.$error && passwordForm.repeated_password.$touched }\">\r" +
    "\n" +
    "                        <label translate=\"EDIT_PROFILE.PASSWORD.REPEAT_NEW_PASSWORD_LABEL\"></label>\r" +
    "\n" +
    "                        <input type=\"password\" class=\"form-control\" name=\"repeated_password\"\r" +
    "\n" +
    "                               ui-validate=\"{check:'$value==vm.user.password'}\"\r" +
    "\n" +
    "                               ui-validate-watch=\" 'vm.user.password' \"\r" +
    "\n" +
    "                               placeholder=\"{{'EDIT_PROFILE.PASSWORD.REPEAT_NEW_PASSWORD_LABEL' | translate}}\"\r" +
    "\n" +
    "                               required\r" +
    "\n" +
    "                               ng-model=\"vm.user.repeated_password\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div ng-messages=\"passwordForm.repeated_password.$error\"\r" +
    "\n" +
    "                             ng-if=\"passwordForm.repeated_password.$touched\">\r" +
    "\n" +
    "                            <div class=\"help-block\" ng-message=\"check\">\r" +
    "\n" +
    "                                <i class=\"fa fa-exclamation-circle\"></i>\r" +
    "\n" +
    "                                {{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_ERROR_MISMATCH' | translate}}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-md-3\">\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <div password-strength=\"vm.user.password\" class=\"password-streght\"></div>\r" +
    "\n" +
    "                        <div class=\"password-streght-labels\">\r" +
    "\n" +
    "                            <span>{{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_WEAK' | translate}}</span>\r" +
    "\n" +
    "                            <span class=\"pull-right\"> {{'REGISTER_POPUP.REGISTRATION_FORM.PASSWORD_STRONG' | translate}}</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"divider\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-3 pull-right\">\r" +
    "\n" +
    "                    <button type=\"submit\" ng-disabled=\"passwordForm.$invalid\"\r" +
    "\n" +
    "                            class=\"btn btn-lg btn-danger pull-right\"\r" +
    "\n" +
    "                            translate=\"EDIT_PROFILE.PASSWORD.CHANGE_PASSWORD_ACTION\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/partials/user/edit/personal.html',
    "<div class=\"edit-profile-box\" ng-controller=\"user.modal.profile.edit\">\r" +
    "\n" +
    "<div class=\"box-header\">\r" +
    "\n" +
    "    <i class=\"fa fa-pencil\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3>EDIT PERSONAL DETAILS</h3>\r" +
    "\n" +
    "    <a class=\"pull-right\" ng-click=\"close()\">\r" +
    "\n" +
    "        <i class=\"fa fa-times-circle\"></i>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"box-content\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "<ul class=\"personal-info-details\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "<li>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <form>\r" +
    "\n" +
    "            <div class=\"detail-property\">\r" +
    "\n" +
    "                <span>Username</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"detail-value\">\r" +
    "\n" +
    "                <span>{{ user.username }}</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <form editable-form name=\"nameForm\" onaftersave=\"updateData('name')\"\r" +
    "\n" +
    "              ng-class=\"{'edit':nameForm.$visible}\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div class=\"detail-property\">\r" +
    "\n" +
    "                        <span>Real Name</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"detail-value\">\r" +
    "\n" +
    "                        <span ng-show=\"!nameForm.$visible\">{{ user.full_name() }}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "                            <div editable-text=\"user.first_name\" e-name=\"name\" e-required\r" +
    "\n" +
    "                                 e-placeholder=\"firstName..\">\r" +
    "\n" +
    "                                {{ user.firstName || '' }}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "                            <div editable-text=\"user.last_name\" e-name=\"lastName\" e-required\r" +
    "\n" +
    "                                 e-placeholder=\"lastName..\">\r" +
    "\n" +
    "                                {{ user.lastName || '' }}\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit-action\">\r" +
    "\n" +
    "                        <a ng-click=\"nameForm.$show()\" ng-show=\"!nameForm.$visible\">\r" +
    "\n" +
    "                            <i class=\"fa fa-pencil\"></i> EDIT\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div ng-show=\"nameForm.$visible\" class=\"pull-right\">\r" +
    "\n" +
    "                        <button type=\"submit\" class=\"btn btn-danger\" ng-disabled=\"nameForm.$waiting\">\r" +
    "\n" +
    "                            Save\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"nameForm.$waiting\"\r" +
    "\n" +
    "                                ng-click=\"nameForm.$cancel()\">\r" +
    "\n" +
    "                            Cancel\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <form editable-form name=\"ageForm\" onaftersave=\"updateData('age')\"\r" +
    "\n" +
    "              ng-class=\"{'edit':ageForm.$visible}\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div class=\"detail-property\">\r" +
    "\n" +
    "                        <span>Date of birth</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"detail-value\" ng-show=\"!ageForm.$visible\">\r" +
    "\n" +
    "                        {{user.birth_date |date:'dd MMMM, yyyy'}}\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"detail-value\" ng-show=\"ageForm.$visible\">\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "                            <input type=\"text\" class=\"age\" class=\"form-control\"\r" +
    "\n" +
    "                                   ng-model=\"user.birth_date\"\r" +
    "\n" +
    "                                   placeholder=\"Select your Date of birth\"/>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit-action\">\r" +
    "\n" +
    "                        <a ng-click=\"ageForm.$show()\" ng-show=\"!ageForm.$visible\">\r" +
    "\n" +
    "                            <i class=\"fa fa-pencil\"></i> EDIT\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div ng-show=\"ageForm.$visible\" class=\"pull-right\">\r" +
    "\n" +
    "                        <button type=\"submit\" class=\"btn btn-danger\" ng-disabled=\"ageForm.$waiting\">\r" +
    "\n" +
    "                            Save\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"ageForm.$waiting\"\r" +
    "\n" +
    "                                ng-click=\"ageForm.$cancel()\">\r" +
    "\n" +
    "                            Cancel\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <form editable-form name=\"nacionalityForm\" onaftersave=\"updateData('nacionality')\"\r" +
    "\n" +
    "              ng-class=\"{'edit':nacionalityForm.$visible}\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div class=\"detail-property\">\r" +
    "\n" +
    "                        <span>Nationality</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"detail-value\" ng-if=\"!nacionalityForm.$visible\">\r" +
    "\n" +
    "                        <span>{{ user.nacionality.name }}</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"detail-value\" ng-if=\"nacionalityForm.$visible\">\r" +
    "\n" +
    "                        <ui-select ng-model=\"user.nacionality\" theme=\"bootstrap\"\r" +
    "\n" +
    "                                   style=\"width: 300px;\">\r" +
    "\n" +
    "                            <ui-select-match placeholder=\"Select or search a country in the list...\">\r" +
    "\n" +
    "                                {{$select.selected.name}}\r" +
    "\n" +
    "                            </ui-select-match>\r" +
    "\n" +
    "                            <ui-select-choices repeat=\"country in countries | filter: $select.search\">\r" +
    "\n" +
    "                                <span ng-bind-html=\"country.name | highlight: $select.search\"></span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </ui-select-choices>\r" +
    "\n" +
    "                        </ui-select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit-action\">\r" +
    "\n" +
    "                        <a ng-click=\"nacionalityForm.$show()\" ng-show=\"!nacionalityForm.$visible\">\r" +
    "\n" +
    "                            <i class=\"fa fa-pencil\"></i> EDIT\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div ng-show=\"nacionalityForm.$visible\" class=\"pull-right\">\r" +
    "\n" +
    "                        <button type=\"submit\" class=\"btn btn-danger\" ng-disabled=\"nacionalityForm.$waiting\">\r" +
    "\n" +
    "                            Save\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"nacionalityForm.$waiting\"\r" +
    "\n" +
    "                                ng-click=\"nacionalityForm.$cancel()\">\r" +
    "\n" +
    "                            Cancel\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<!--<li>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!--<div class=\"clearfix\">-->\r" +
    "\n" +
    "        <!--<form editable-form name=\"addressForm\" onaftersave=\"updateData('address')\"-->\r" +
    "\n" +
    "              <!--ng-class=\"{'edit':addressForm.$visible}\">-->\r" +
    "\n" +
    "            <!--<div class=\"row\">-->\r" +
    "\n" +
    "                <!--<div class=\"col-md-6\">-->\r" +
    "\n" +
    "                    <!--<div class=\"detail-property\">-->\r" +
    "\n" +
    "                        <!--<span>Address</span>-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                    <!--<div class=\"detail-value\" ng-if=\"!addressForm.$visible\">-->\r" +
    "\n" +
    "                        <!--<span>{{ user.address }}</span>-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                    <!--<div class=\"detail-value\" ng-if=\"addressForm.$visible\">-->\r" +
    "\n" +
    "                        <!--<div class=\"form-group\">-->\r" +
    "\n" +
    "                            <!--<ui-select ng-model=\"user.address.country\" theme=\"bootstrap\"-->\r" +
    "\n" +
    "                                       <!--style=\"width: 300px;\" on-select=\"updateCities($item, $model)\">-->\r" +
    "\n" +
    "                                <!--<ui-select-match placeholder=\"Select or search a country in the list...\">-->\r" +
    "\n" +
    "                                    <!--{{$select.selected.name}}-->\r" +
    "\n" +
    "                                <!--</ui-select-match>-->\r" +
    "\n" +
    "                                <!--<ui-select-choices repeat=\"country in countries | filter: $select.search\">-->\r" +
    "\n" +
    "                                    <!--<span ng-bind-html=\"country.name | highlight: $select.search\"></span>-->\r" +
    "\n" +
    "                                <!--</ui-select-choices>-->\r" +
    "\n" +
    "                            <!--</ui-select>-->\r" +
    "\n" +
    "                        <!--</div>-->\r" +
    "\n" +
    "                        <!--<div class=\"form-group\">-->\r" +
    "\n" +
    "                            <!--<ui-select ng-model=\"user.address.city\" theme=\"bootstrap\"-->\r" +
    "\n" +
    "                                       <!--style=\"width: 300px;\" ng-disabled=\"!cities\">-->\r" +
    "\n" +
    "                                <!--<ui-select-match placeholder=\"Select or search a city in the list...\">-->\r" +
    "\n" +
    "                                    <!--{{$select.selected.name}}-->\r" +
    "\n" +
    "                                <!--</ui-select-match>-->\r" +
    "\n" +
    "                                <!--<ui-select-choices repeat=\"city in cities | filter: $select.search\">-->\r" +
    "\n" +
    "                                    <!--<span ng-bind-html=\"city.name | highlight: $select.search\"></span>-->\r" +
    "\n" +
    "                                <!--</ui-select-choices>-->\r" +
    "\n" +
    "                            <!--</ui-select>-->\r" +
    "\n" +
    "                        <!--</div>-->\r" +
    "\n" +
    "                        <!--<div class=\"form-group\">-->\r" +
    "\n" +
    "                            <!--<input type=\"text\" ng-model=\"user.address.address\" class=\"form-control\"-->\r" +
    "\n" +
    "                                   <!--placeholder=\"You adress...\"/>-->\r" +
    "\n" +
    "                        <!--</div>-->\r" +
    "\n" +
    "                        <!--<div class=\"form-group\">-->\r" +
    "\n" +
    "                            <!--<input type=\"text\" ng-model=\"user.address.postal_code\" class=\"form-control\"-->\r" +
    "\n" +
    "                                   <!--placeholder=\"Postal Code...\"/>-->\r" +
    "\n" +
    "                        <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                    <!--<div class=\"edit-action\">-->\r" +
    "\n" +
    "                        <!--<a ng-click=\"addressForm.$show()\" ng-show=\"!addressForm.$visible\">-->\r" +
    "\n" +
    "                            <!--<i class=\"fa fa-pencil\"></i> EDIT-->\r" +
    "\n" +
    "                        <!--</a>-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <!--</div>-->\r" +
    "\n" +
    "            <!--<div class=\"row\">-->\r" +
    "\n" +
    "                <!--<div class=\"col-md-6\">-->\r" +
    "\n" +
    "                    <!--<div ng-show=\"addressForm.$visible\" class=\"pull-right\">-->\r" +
    "\n" +
    "                        <!--<button type=\"submit\" class=\"btn btn-danger\" ng-disabled=\"addressForm.$waiting\">-->\r" +
    "\n" +
    "                            <!--Save-->\r" +
    "\n" +
    "                        <!--</button>-->\r" +
    "\n" +
    "                        <!--<button type=\"button\" class=\"btn btn-default\" ng-disabled=\"addressForm.$waiting\"-->\r" +
    "\n" +
    "                                <!--ng-click=\"addressForm.$cancel()\">-->\r" +
    "\n" +
    "                            <!--Cancel-->\r" +
    "\n" +
    "                        <!--</button>-->\r" +
    "\n" +
    "                    <!--</div>-->\r" +
    "\n" +
    "                <!--</div>-->\r" +
    "\n" +
    "            <!--</div>-->\r" +
    "\n" +
    "        <!--</form>-->\r" +
    "\n" +
    "    <!--</div>-->\r" +
    "\n" +
    "<!--</li>-->\r" +
    "\n" +
    "<li>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <form editable-form name=\"hardwareForm\"\r" +
    "\n" +
    "              ng-class=\"{'edit':hardwareForm.$visible}\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div class=\"detail-property\">\r" +
    "\n" +
    "                        <span>Hardware</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"detail-value\" ng-show=\"!hardwareForm.$visible\">\r" +
    "\n" +
    "                        <ul ng-if=\"user.hardware.so\">\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                {{user.hardware.so}}\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                {{user.hardware.cpu}}\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                {{user.hardware.gpu}}\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                {{user.hardware.mem | mem}} GB RAM\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"detail-value\" ng-show=\"hardwareForm.$visible\">\r" +
    "\n" +
    "                        <button class=\"btn btn-danger\" ng-disabled=\"!user.sincronized\"\r" +
    "\n" +
    "                                ng-click=\"user.detect_hardware()\">\r" +
    "\n" +
    "                            Detect Computer Hardware\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit-action\">\r" +
    "\n" +
    "                        <a ng-click=\"hardwareForm.$show()\" ng-show=\"!hardwareForm.$visible\">\r" +
    "\n" +
    "                            <i class=\"fa fa-pencil\"></i> EDIT\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div ng-show=\"hardwareForm.$visible\" class=\"pull-right\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"hardwareForm.$waiting\"\r" +
    "\n" +
    "                                ng-click=\"hardwareForm.$cancel()\">\r" +
    "\n" +
    "                            Close\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <form>\r" +
    "\n" +
    "            <div class=\"detail-property\">\r" +
    "\n" +
    "                <span>Games Played</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"detail-value\">\r" +
    "\n" +
    "                <ul class=\"games-played\">\r" +
    "\n" +
    "                    <li ng-repeat=\"lvl in user.games_lvl\">\r" +
    "\n" +
    "                        <div class=\"game-box\" tooltip=\"{{lvl.game.name}}\">\r" +
    "\n" +
    "                            <img ng-src=\"{{lvl.game.miniature}}\"/>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <form editable-form name=\"socialNetworksForm\"\r" +
    "\n" +
    "              ng-class=\"{'edit':socialNetworksForm.$visible}\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div class=\"detail-property\">\r" +
    "\n" +
    "                        <span>Social Networks</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"detail-value\" ng-if=\"socialNetworksForm.$visible\">\r" +
    "\n" +
    "                        <div class=\"network\" ng-repeat=\"network in networks\">\r" +
    "\n" +
    "                            <a class=\"btn btn-block btn-lg btn-social\"\r" +
    "\n" +
    "                               ng-class=\"{'btn-facebook':network.provider =='facebook',\r" +
    "\n" +
    "                               'btn-twitter':network.provider =='twitter',\r" +
    "\n" +
    "                               'btn-google-plus':network.provider =='google',\r" +
    "\n" +
    "                               'btn-twitch':network.provider =='twitch',\r" +
    "\n" +
    "                               'btn-steam':network.provider =='steam'}\"\r" +
    "\n" +
    "                               ng-click=\"sincronize(network.provider)\" ng-if=\"!network.connected\">\r" +
    "\n" +
    "                                <i class=\"fa\" ng-class=\"{'fa-facebook':network.provider =='facebook',\r" +
    "\n" +
    "                                'fa-twitter':network.provider =='twitter',\r" +
    "\n" +
    "                                'fa-google-plus':network.provider =='google',\r" +
    "\n" +
    "                                'fa-twitch':network.provider =='twitch',\r" +
    "\n" +
    "                                'fa-steam':network.provider =='steam'}\"></i>\r" +
    "\n" +
    "                                Sincronize {{network.provider}}\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"connected-provider\" ng-class=\"network.provider\" ng-if=\"network.connected\">\r" +
    "\n" +
    "                                You've connected to your {{network.provider}} account <strong>{{network.name}}</strong>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"detail-value\" ng-if=\"!socialNetworksForm.$visible\">\r" +
    "\n" +
    "                        <a ng-repeat=\"social in user.social_providers\" class=\"btn btn-social-icon\"\r" +
    "\n" +
    "                           ng-class=\"{'btn-steam':social=='steam' ,\r" +
    "\n" +
    "                            'btn-facebook':social=='facebook',\r" +
    "\n" +
    "                            'btn-google-plus':social=='google',\r" +
    "\n" +
    "                            'btn-twitter':social=='twitter',\r" +
    "\n" +
    "                            'btn-twitch':social=='twicth'}\">\r" +
    "\n" +
    "                            <i class=\"fa\"\r" +
    "\n" +
    "                               ng-class=\"{'fa-steam':social=='steam' , 'fa-facebook':social=='facebook', 'fa-google-plus':social=='google','fa-twitter':social=='twitter','fa-twitch':social=='twicth'}\"></i></a>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit-action\">\r" +
    "\n" +
    "                        <a ng-click=\"socialNetworksForm.$show()\" ng-show=\"!socialNetworksForm.$visible\">\r" +
    "\n" +
    "                            <i class=\"fa fa-pencil\"></i> EDIT\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div ng-show=\"socialNetworksForm.$visible\" class=\"pull-right\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                                ng-click=\"socialNetworksForm.$cancel()\">\r" +
    "\n" +
    "                            Close\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/partials/user/profile.html',
    "<div id=\"profile-cover\" back-img=\"{{user.cover}}\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"cover-up-wrapper\">\r" +
    "\n" +
    "            <div class=\"absolut-wrapper\">\r" +
    "\n" +
    "                <a class=\"btn btn-cover-up\" href ng-click=\"doCrop()\" ng-if=\"itsme\">\r" +
    "\n" +
    "                    <i class=\"fa fa-camera\"></i>\r" +
    "\n" +
    "                    <span>\r" +
    "\n" +
    "                        Cambiar imagen fondo\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-2\">\r" +
    "\n" +
    "            <div profile user=\"user\"></div>\r" +
    "\n" +
    "            <twitter></twitter>\r" +
    "\n" +
    "            <facebook></facebook>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-4\">\r" +
    "\n" +
    "            <div class=\"profile-games-box\">\r" +
    "\n" +
    "                <ul class=\"nav nav-tabs\" role=\"tablist\">\r" +
    "\n" +
    "                    <li ng-class=\"{'active':current_game_id == lvl.game.id}\" ng-repeat=\"lvl in user.games_lvl\">\r" +
    "\n" +
    "                        <a ng-click=\"select_game(lvl)\" class=\"game-tab\">{{lvl.game.name}}</a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "                <div class=\"game-box-divider\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div last-tournament user=\"{{user.id}}\" tournament=\"last_tournament\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div user-stats user=\"{{user.id}}\" game=\"{{current_game_id}}\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div user-hardware user=\"user\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
