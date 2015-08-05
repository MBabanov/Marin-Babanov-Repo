/**
 * Created by Miguel on 25/11/2014.
 */
function searchstring(search) {
    var str = "";
    search = search || {};
    for (var property in search)if (search.hasOwnProperty(property)) {
        var prefix = "" === str ? "?" : "&";
        str += prefix + property + "=" + search[property]
    }
    return str
}
function hasModule(moduleName) {
    try {
        return angular.module(moduleName)
    } catch (e) {
        return!1
    }
}
function bootstrap() {
    window.angular && window.$ && angular.bootstrap && hasModule("antwerpOS") && $(function () {
        angular.bootstrap(document.documentElement, ["antwerpOS"])
    })
}
var antwerpOS = angular.module("antwerpOS", ["rendererTemplates", "ngEvents", "ngNav", "ngRoute", "ngResource", "ngAnimate", "ngCookies", "ngSanitize", "angulartics", "angulartics.google.analytics", "angularFileUpload", "chieffancypants.loadingBar", "ui.sortable", "ui.timepicker", "ui.mask", "gettext"]);
antwerpOS.constant("ARCGIS_FEATURESERVER_VERSION", "Astad_20140828"), antwerpOS.config(["$sceDelegateProvider", "$controllerProvider", "$compileProvider", "$routeProvider", "$filterProvider", "$provide", "$locationProvider", "$httpProvider", "cfpLoadingBarProvider", function ($sceDelegateProvider, $controllerProvider, $compileProvider, $routeProvider, $filterProvider, $provide, $locationProvider, $httpProvider, cfpLoadingBarProvider) {
    var checkLanguage = function (routeparam) {
        if (!routeparam)return!1;
        var lang = !1, prop = "", language = {};
        for (prop in window.multiLang.languages)if (language = window.multiLang.languages[prop], language.lang.toLowerCase() === routeparam.toLowerCase()) {
            lang = !0;
            break
        }
        return lang
    };
    cfpLoadingBarProvider.includeSpinner = !1,
        antwerpOS.controllerProvider = $controllerProvider, antwerpOS.compileProvider = $compileProvider, antwerpOS.routeProvider = $routeProvider, antwerpOS.filterProvider = $filterProvider, antwerpOS.provide = $provide, $routeProvider.when("/", {redirectTo: function () {
        return"/" + window.multiLang.current.toLowerCase() + "/home"
    }}).when("/:lang", {redirectTo: function (params, route, search) {
        return multiLang.current && !checkLanguage(params.lang) ? "/" + window.multiLang.current.toLowerCase() + route + searchstring(search) : "/" + window.multiLang.current.toLowerCase() + "/home" + searchstring(search)
    }}).when("/:lang/home", {action: "standard.home"}).when("/:lang/home/uitgelogd", {resolve: {setMessage: function ($q, StatusService, Statusmessage) {
        var msg = new Statusmessage({type: "S", message: "U bent succesvol uitgelogd.", location: "bar", persistance: "timer"});
        StatusService.addMessage(msg);
        var deferred = $q.defer();
        return setTimeout(function () {
            deferred.resolve("Message set")
        }, 100), deferred.promise
    }}, redirectTo: function (params) {
        return"/" + params.lang + "/home"
    }}).when("/:lang/melden", {action: "standard.home", showFeedback: !0}).when("/:lang/redirect", {action: "standard.redirect"}).when("/:lang/login", {action: "standard.login"}).when("/:lang/register", {action: "standard.register"}).when("/:lang/register-check-mail", {action: "standard.registercheckmail"}).when("/:lang/activate-account/:token", {action: "standard.activateaccount"}).when("/:lang/new-password-request", {action: "standard.requestpassword"}).when("/:lang/username-request", {action: "standard.requestusername"}).when("/:lang/reset-check-mail", {action: "standard.resetpasswordcheckmail"}).when("/:lang/username-check-mail", {action: "standard.requestusernamecheckmail"}).when("/:lang/reset-password", {action: "standard.resetpassword"}).when("/:lang/reset-password/:token", {action: "standard.resetpasswordtoken"}).when("/:lang/profile", {action: "standard.profile"}).when("/:lang/medewerkers", {action: "standard.stadsmedewerker"}).when("/:lang/medewerkersprofiel-init", {action: "standard.initstadsmedewerkersprofiel"}).when("/:lang/medewerkersprofiel-aanvullen", {action: "standard.completestadsmedewerkersprofiel"}).when("/:lang/voorkeuren", {redirectTo: "/:lang/voorkeuren/profiel"}).when("/:lang/overzicht", {action: "standard.overzicht"}).when("/:lang/notificaties", {action: "standard.notificaties"}).when("/:lang/voorkeuren/algemeen", {action: "standard.preferences.general"}).when("/:lang/voorkeuren/notificaties", {action: "standard.preferences.notifications"}).when("/:lang/voorkeuren/medewerkerprofiel", {action: "standard.preferences.medewerkerprofiel"}).when("/:lang/voorkeuren/persoonlijkegegevens", {action: "standard.preferences.persoonlijkegegevens"}).when("/:lang/voorkeuren/applicaties", {action: "standard.preferences.apps"}).when("/:lang/voorkeuren/profiel", {action: "standard.preferences.profile"}).when("/:lang/voorkeuren/groepen", {action: "standard.preferences.groups"}).when("/:lang/voorkeuren/toegankelijkheid", {action: "standard.preferences.accessibility"}).when("/:lang/voorkeuren/privacy", {action: "standard.preferences.privacy"}).when("/:lang/voorkeuren/over", {action: "standard.preferences.about"}).when("/:lang/voorkeuren/betaling", {action: "standard.preferences.payment"}).when("/:lang/voorkeuren/geavanceerd", {action: "standard.preferences.advanced"}).when("/:lang/voorkeuren/koppelingen", {action: "standard.preferences.koppelingen"}).when("/:lang/voorkeuren/akaart", {action: "standard.preferences.akaart"}).when("/:lang/voorkeuren/interesses", {action: "standard.preferences.interests"}).when("/:lang/voorkeuren/applicaties/:slug", {action: "standard.preferences.apps.detail"}).when("/:lang/zoeken", {action: "standard.search.overview"}).when("/:lang/zoeken/:app", {action: "standard.search.detail"}).when("/:lang/apps", {action: "standard.apps"}).when("/:lang/apps/:slug", {action: "standard.apps.detail"}).when("/:lang/apps/:slug/recensies", {action: "standard.apps.detail.reviews"}).when("/:lang/apps/:slug/gerelateerd", {action: "standard.apps.detail.related"}).when("/:lang/:slugLaunch", {action: function (params) {
        return checkLanguage(params.lang) ? "standard.apps.launch" : {redirectTo: "/" + window.multiLang.current.toLowerCase() + "/" + params.lang + "/" + params.slugLaunch}
    }}).otherwise({redirectTo: function (params, route, search) {
        var routeSegments = route.split("/"), langSegment = routeSegments[1], appSlug = routeSegments[2], newRoute = route;
        return checkLanguage(langSegment) || (appSlug = routeSegments[1], langSegment = window.multiLang.current.toLowerCase(), newRoute = "/" + langSegment + route), window.deeplink = {route: newRoute, app: appSlug, search: search}, "/" + langSegment + "/" + appSlug
    }}), $locationProvider.html5Mode(!0), $locationProvider.hashPrefix("!"), delete $httpProvider.defaults.headers.common["X-Requested-With"], $httpProvider.defaults.withCredentials = !0, $sceDelegateProvider.resourceUrlWhitelist([/^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?ds\.dev(.*)?$/, /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?dev\.dcs\.antwerpen\.be(.*)?$/, /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?youtube\.com\/embed\/([a-zA-Z0-9\-_]+)(.*)?$/, /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?player\.vimeo\.com\/video\/([a-zA-Z0-9]+)(.*)?$/, "self"]), $httpProvider.responseInterceptors.push("globalErrorHandlingInterceptor")
}]), antwerpOS.run(["$rootScope", "AppService", "gettextCatalog", "_", function ($rootScope, AppService, gettextCatalog, _) {
    gettextCatalog.setCurrentLanguage(multiLang.current.toLowerCase()), $rootScope.currentLanguage = multiLang.current.toLowerCase();
    var languages = new Array;
    _.forIn(multiLang.languages, function (x, y) {
        x.lang = y, languages.push(x)
    }), $rootScope.languages = languages, $rootScope.state = {}, AppService.getApps()
}]), bootstrap(), angular.module("antwerpOS").run(["gettextCatalog", function (gettextCatalog) {
    gettextCatalog.setStrings("en", {"&nbsp;": ["&nbsp;", "(and {{ extraMessagesLength }} others)"], "Cursussen & lezingen": "Courses & lectures", Eetgelegenheid: "Catering", Expo: "Expo", "Klein feest": "Small party", "Podium & literatuur": "Stage & literature", Receptie: "Reception", Repetitie: "Rehearsal", Sport: "Sports", "Uitgaan & feesten": "Nightlife & parties", "DJ-set": "DJ-set", "DVD-BlueRay-speler": "DVD-BlueRay-player", Flipover: "Flipover", Kitchenette: "Kitchenette", Lichtset: "Lightset", Microfoon: "Microfone", "PA-set": "PA-set", Spreekgestoelte: "Lectern", "(dat is ‘nieuws’ in het Noors)": "(that’s the Norwegian word for “news”)", "1 volger": ["1 follower", "{{renderableObject.followers}} followers"], '<i class="icon-search"><span>Zoeken</span></i>': '<i class="icon-search"><span>Search</span></i>', '<span class="link">Klik hier</span>': '<span class="link">Click here</span>', "A-profiel beheren": "Manage A-profile", "A-stad": "A-stad", "Aan het zoeken": "Searching...", Aanmelden: "Log in", "Achtergrond door": "Background by", Afmelden: "Log out", Algemeen: "Common", "Alle blogs": "All data", "Alle data": "All data", "Alle locaties": "All data", "Alle must knows en informatie waar je als student in Antwerpen niet omheen kan, verzameld op GATE15. www.gate15.be": "All must-knows and information that you can't miss as a student in Antwerp, gathered on GATE15. www.gate15.be", Alles: "All", "Alt tag": "Alt tag", Annuleren: "Cancel", "Antwerps studentenoverleg: ook de student heeft een stem en geeft aan wat hij of zij belangrijk vindt. Weten wie jou vertegenwoordigt? Maak hier kennis.": "Antwerp student council: students also have a voice and indicate what they find important. Want to know who represents you? See who’s who here.", "Are you ready for take-off?": "Are you ready for take-off?", Basisgegevens: "Basic info", "Bekijk 1 eerdere reactie": ["View 1 previous comment", "View {{ remainingComments }} previous comments"], "Bekijk foto's": "Pictures", "Beschrijving van je evenement": "Description of your event", Betalend: "Paying", "Bezig met uploaden: {{uploading}}": "Now uploading: {{uploading}}", Bijschrift: "Caption", Blog: "Blog", "Boek een zaal": "Book a venue", Bron: "Source", Campus: "Campus", Center: "Centre", Contactgegevens: "Contact info", Cultuurcheques: "Pick up your culture vouchers", "Cultuurhuizen cultuurcheques": "Pick up your culture vouchers", Dans: "Dance", "Dat kan!": "That's possible!", "De GATE15 kalender voor alle Antwerpse studenten: events, workshops, cultuur, sport, … in zaal Tarmac of elders in Antwerpen. www.gate15.be": "The GATE15 calendar for all students from Antwerp: events, workshops, culture, sports, ... in Tarmac or elsewere in Antwerp. www.gate15.be", "De GATE15-bloggers houden je graag op de hoogte van het reilen en zeilen in hun studentenleven en in Antwerpen. www.gate15.be": "Our bloggers will keep you informed about the goings on in their student life and in Antwerp. ", "De inhoud van deze link kon niet geladen worden.": "Oops! We couldn't load the content at this link.", "De opgevraagde pagina werd niet gevonden": "The requested page was not found", "De resultaten voor de zoekopdracht <b>{{ searchQuery.query }}</b> worden verzameld.": "We are currently assembling results for the search query <b>{{searchQuery.query}}</b>.", "De resultaten voor dit punt worden verzameld.</>": "We are currently assembling results for the search query <b>{{searchQuery.query}}</b>.", "Deel jouw nieuws": "Share your news", "Deze week": "This week", "Dit spelleke was hier niet mogelijk geweest zonder": "This site would not have been possible without", "Dit weekend": "This weekend", Dooplocatie: "Location", "E-mail ons": "Send us an e-mail", "Een antwoord op al je studentenvragen": "An answer to your student questions", "Een bestand uploaden": "Upload a file", "Een externe bron toevoegen": "Add an external source", "Een korte omschrijving": "A short description", "Een suggestie over de website geven": "Suggest a way to improve our website", "Een zaal reserveren": "Renting", "Eigen stekje nodig? We wijzen je de weg naar een kot in Antwerpen.": "Need your own place? We guide you to a nice student house in Antwerp.", Elders: "Elsewhere", "Er bestaat geen gerelateerde content voor dit punt.": "There's no related content for this coordinate.", "Er ging iets mis": "Oops! Something went wrong.", "Er zijn geen instellingen voor deze applicatie...": "There are no settings for this application...", "Er zijn momenteel geen notificaties.": "There are currenly no notifications.", Evenementen: "Events", "Event detail": "Event detail", Events: "Events", "Feedback geven": "Send us feedback", "Feestje, meeting of workshop?": "Party, meeting or workshop?", Film: "Movie", "Filter evenementen": "Filter events", "GATE15 bruist. Er valt voortdurend wat te beleven. Sfeervolle en leerrijke momenten. Hou de kalender in de gaten en noteer meteen in je agenda!": "GATE15 is always buzzing with activity. There’s always something going on. Fun and instructive times. So check the calendar and save the date! ", "Gate 15": "Gate15", Gate15: "Gate15", 'Gate15 maakt deel uit van <a href="http://www.antwerpen.be">A-stad</a>': 'Gate is part of <a href="http://www.antwerpen.be">A-stad</a>', "Gate15 vormt een habitat voor en door studenten.": "Gate15 is a habitat for and by students.", "Gate15, spring eens binnen!": "Gate15, pop in!", "Gate15: - Het antwoord op al je studentenvragen - Reserveer een zaal voor een feestje, workshop of meeting - Spreek af met vrienden in de Tarmac - Gratis Wifi en gebruik computers | Kleine Kauwenberg 15 - 2000 Antwerpen": "Gate15: - The answer to al your student questions - Book a room for a party, workshop or meeting - Meet friends in the Tarmac - Free Wifi and use of computers | Kleine Kauwenberg 15 - 2000 Antwerp", "Geef een prijs in": "Please fill in a price", "Geef hier uw antwoord": "Enter your answer here", "Geen beschikbare blogitems": "No blogitems available", "Geen beschikbare evenementen": "No events available", "Geen beschikbare nieuwsitems": "No news items available", "Geen gerelateerde content": "No related content", "Geen idee waar je verzeild geraakt bent? Pik een plannetje op.": "No idea where you ended up? Then grab a map.", "Geen resultaten": "No results", "Gegevens activiteit": "Activity info", "Gerelateerde content aan het zoeken": "Searching for related content", "Got news?": "Got news?", Gratis: "Free", "Groepswerk of chillen?": "A group assignment or just chilling out?", "Haal je cultuurcheques": "Pick up your culture vouchers", "Heet van de naald, een must know of gewoon droge informatie waar je niet omheen kan? Met dit nieuws ben je weer helemaal up-to-date en kan je meepraten met  je vrienden.": "Hot off the presses, a must-know or just some straightforward information that you can’t ignore? Get up to speed again with the latest news so you can participate in discussions with your friends.  ", "Heet van de naald, een must know of gewoon droge informatie waar je niet omheen kan? Met dit nieuws ben je weer helemaal up-to-date en kan je meepraten met je vrienden.": "Hot off the presses, a must-know or just some straightforward information that you can’t ignore? Get up to speed again with the latest news so you can participate in discussions with your friends.  ", Help: "Help", "Het antwoord op al je studentenvragen.": "The answer to all your student questions.", "Het blogoverzicht": "Weather", "Het opgevraagde blogbericht werd niet gevonden": "The requested blog item was not found", "Het opgevraagde nieuwsartikel werd niet gevonden": "The requested news item was not found", "Het weer": "Weather", "Het weer de komende dagen": "Weather for the next few days", "Het weer vandaag": "Today's weather", "Hier kan je wekelijks de leukste columns terugvinden. Shakaja!": "You can find the coolest weekly columns right here. Shakaja!", "Hier kan je wekelijks de leukste events van Antwerpen terugvinden.": "You can find the nicest events in Antwerp, right here.", "Hipster in hart en nieren? Waar zijn die hotspots? Onze Student Guide & Student Walkbouts wijzen je de weg.": "Are you a true hipster? Where are those hotspots? Our Student Guide & Student Walkabouts will point you in the right direction.", "Hoeveel exemplaren hebt u nodig?": "How many do you need?", Home: "Home", "Honger. Eten. Nu. Alle studentenresto’s en fijne eettentjes op een rijtje.": "Hungry. Food. Now. A list of all the student restaurants and fun places to eat.", "Ik ga akkoord met de <a href='#'>algemene voorwaarden</a>.": 'I agree with the <a href="#">General terms&conditions</a>', Information: "Information", "Internationele dienst": "International service", "Jouw evenement delen?": "Share your event", "Kalender bekijken": "View calendar", "Kies een datum": "Choose a date", "Kies een einduur": "Choose an endtime", "Kies een hoofding voor deze tabel": "Choose a header for this table", "Kies een soort evenement": "Choose event type", "Kies een startuur": "Choose a starttime", "Kijk op de kaart": "Show on map", "Kijk zeker eens hier waar je komende week (het beest) gaat uithangen. Vindt het niet plaats in onze Tarmac, dan ontdek je in de kalender waar dan wel. Met je eigen profiel maak je ook zelf events aan.": "Check this page to see where you will be hanging out (or partying) in the next week. The calendar will tell you where the event takes place if it’s not in our Tarmac. You can also create events yourself through your own profile. ", Klaar: "Finished", "Klassieke muziek": "Classical music", "Klein kot, grote vuilniszak. Wat doe je ermee? En vooral, hoe geraak je verlost van die verschrikkelijke geur in de zomer? Haal bij ons je gratis sorteerpasje, laad het op met een bedrag naar keuze en drop je afval  gewoon in een sorteerstraatje wanneer jij het wil.": "Small digs, large garbage bags. So where do you put it? And most importantly, how to get rid of that terrible smell in summertime? Pick up your free sorting pass, top it up with the amount of your choice and drop off your rubbish at the underground waste drop-off point when you want to. ", "Koppel het nuttige aan het aangename. Steek je koppen bij mekaar, doe een geniale ontdekking en vier je resultaat op een van onze banken. Zoek snel iets op aan een van de beschikbare computers of log in op het gratis wifi-netwerk.": "Combine the pleasant with the useful. Get together, make an amazing discovery and celebrate your result on one of our benches. Do a quick search on one of the available computers or log on to the free Wi-Fi network.  ", Koppelingen: "Links", Left: "Left", Locatie: "Location", "Log dan in en pen zelf jouw primeur neer in de redactie-app": "Then log in and share your scoop in the (news) editor app. ", "Log in op ons gratis wifi-netwerk of gebruik een computer.": "Log on to our free Wi-Fi network or use a computer.", "Lounge of transfer?": "Lounge or transfer?", "Maak een event aan": "Create an event", "Maak een keuze uit de lijst": "Select from list", Medewerker: "Employee", "Meer events": "More events", "Meer lezen": "Read more", "Meer nieuws": "More news", "Meer tonen": "Show all results", "Moeten gasten inkom betalen?": "Do guests have to pay entrance?", Morgen: "Tomorrow", Museum: "Museum", "Must know-adresjes": "Must know addresses", Muziek: "Music", Nieuws: "News", Nieuwsoverzicht: "Newsoverview", Notificaties: "Notifications", Nyheter: "Nyheter", 'Om te reageren moet u zich <a href="/login?fromurl={{currentlocation}}">aanmelden</a>.': 'Please <a href="/login?fromurl={{currentlocation}}">log in</a> to comment.', "Ontdek meer over GATE15": "Find out more about GATE15", "Onze bloggers houden je graag op de hoogte van het reilen en zeilen in hun studentenleven en in Antwerpen.": "Our bloggers will keep you informed about the goings on in their student life and in Antwerp. ", Opslaan: "Save", "Optionele tekst": "Optional text", Opzoeken: "Lookup", Overzicht: "Overview", "Persoonlijke berichten": "Private messages", "Plak hier de link naar het bestand dat u wil toevoegen": "Paste a link to the file you want to add here", Prijs: "Price", "Privacy &amp; OpenData": "Privacy &amp; OpenData", "Processing Image...": "Processing image...", Promo: "Promo", "Quick links": "Quicklinks", "Raak je culturele ei kwijt en selecteer de strafste tentoonstellingen, de indrukwekkendste dansshows of meest meeslepende theaterstukken uit het Antwerpse aanbod. Dankzij de cultuurcheques hou je er geen kater aan over. Althans geen financiële. Een boekje van zeven cultuurcheques is te koop bij ons voor slechts tien euro.": "If you’re a culture vulture then make a selection of the most mind-blowing exhibitions, the most impressive dance performances and the most moving plays in Antwerp’s cultural centres.  Thanks to the culture vouchers you won’t have to break the bank.  You can purchase a booklet with seven culture vouchers from us for just ten euros.", "Rate nieuwe hotspots": "Rate new hotspots", "Reactie aan het plaatsen": "Adding your comment...", "Reacties aan het ophalen": "Fetching comments...", Reageren: "Add a comment", "Redactieteam: jeugdige bloggers die trots vertellen over hun leven als student in Antwerpen. Wil je meedoen? Stuur ons een mailtje en wie weet word je een van onze journalisten.": "Editorial team: young bloggers who share their stories of student life in Antwerp. Do you want to contribute? Then drop us a line and who knows, you may become one of our journalists.", "Reserveer een zaal voor een feestje, een workshop of een meeting.": "Book a venue for a party, a workshop or a meeting.", "Resultaten:": "Results:", Right: "Right", "Ruimte nodig? In GATE15 ben je op je gemak in twee strakke zaaltjes.": "Do you need a venue? Then GATE15’s two sleek event spaces are exactly what you’re looking for.  ", "Ruimte reserveren? In GATE15 kan dat! Tarmac is onze polyvalente zaal, ideaal voor feestjes of workshops. En de vergaderzaal is ideaal voor meetings, als stille ruimte of werkplek. Info en reservatie via www.gate15.be": "Book a room? It's possible at GATE15! Tarmac is our multi-usage room, ideal for parties or workshops. Our meetingroom is ideal for meetings, as a silent room or workspace. Info and reservation via www.gate15.be", "Scoor een sorteerpasje aan onze balie!": "Score a sorting pass at our reception desk!", "Selecteer een aantal": "Select amount", "Selecteer een laag": "Select layer", "Selecteer een punt": "Select point", "Sharing is caring": "Sharing is caring", "Sleep hier een bestand": "Drag a file here", Sluit: "Close", "Sluit dit venster om verder te surfen in A-stad.": "Close this window to continue surfing A-stad.", Sluiten: "Close", "Snel starten": "Quick start", "Sportzalen sportsticker": "Sports hall sticker", "Spreek af met vrienden in de Tarmac.": "Meet your friends in Tarmac. ", Stadslagen: "City layers", "Stel je eigen route samen": "Put together your own route", "Sterkte wachtwoord": "Password strength", Studentenvoorziening: "Student services", Studieruimte: "Study room", "Stuk voor stuk issues waar wij je graag mee verder helpen.": "All issues with which we will gladly assist you.", "Tabel Hoofding": "Table header", "Tags voor je evenement": "Tag for your event", "Tarmac: Deze polyvalente zaal heeft modulaire blokken die je zelf kan schikken naar jouw smaak en voorkeur. Ideaal voor feestjes of workshops.": "Tarmac: This multipurpose room has modular blocks which you can arrange to suit your taste and preferences. The perfect place for a party or a workshop. ", Tel: "Tel", Terug: "Back", Theater: "Theater", Tijd: "Time", Tijdstippen: "Times", Titel: "Title", Toevoegen: "Add", "Toggle Select mode": "Toggle select mode", "Toggle Table Header": "Toggle table header", "Toon 1 reactie op dit artikel": ["Show 1 comment on this article", "Show {{ ngModel.comments.length }} comments on this article"], "Toon help": "Show help", "Typ een locatie": "Type location", "Typ of plak een URL": "Type or paste URL", "U heeft geen berichten.": "You have no messages.", "UU:MM": "HH:MM", Url: "Url", "Uw huisnummer": "Your number", "Uw straat": "Your street", "Van waar/wie komt dit bestand/deze foto?": "Where is this file or photo from?", Vandaag: "Today", "Vandaag open van {{openHoursToday}}": "Open today {{openHoursToday}}", "Verberg 1 reactie op dit artikel.": ["Hide 1 comment on this article.", "Hide {{ ngModel.comments.length }} comments on this article."], "Vergaderzaal: Nood aan een stille ruimte voor een groepswerk of op zoek naar een basiskamp om een groots business plan uit te werken? Dan is deze plek iets voor jou.": "Meeting room: Are you looking for a quiet place for a group assignment or a base camp to develop a grandiose business plan? Then this is just the place you’re looking for.", "Verkooppunt cultuurcheques": "Pick up your culture vouchers", "Verwijder deze {{popupType}}": "Delete this {{popupType}}", "Voeg datum & tijdstip toe": "Add date & time", "Voeg een externe URL toe": "Add external URL", "Voeg een locatie toe": "Add location", "Voeg hier uw intro-tekst in": "Add your introductory text here", "Voeg {{popupType}} toe na deze {{popupType}}": "Add {{popupType}} after this {{popupType}}", "Voeg {{popupType}} toe voor deze {{popupType}}": "Add {{popupType}} before this {{popupType}}", "Voer hier in": "Enter here", Volgende: "Next", "Volgende dertig dagen": "Next thirthy days", "Voor niks": "Free", Voorzieningen: "Provisions", Vorige: "Previous", "Voting wall: beslis mee over bepaalde activiteiten of sprekers.": "Voting wall: vote on certain activities or speakers.", "Vul hier de achternaam in": "Enter the last name here", Waar: "Where", "Waar gaat het evenement door?": "Where does the event take place?", "Waarvoor wilt u naar het stadsloket?": "Why do you want to go to the city-desk?", Wanneer: "When", 'Wat is <span class="here">hier</span> allemaal te doen?': 'What is happening <span class="here">here</span>?', "Wat is hier allemaal te doen?": "What's happening here?", "Wat wilt u vinden?": "What are you trying to find?", "Wat?": "What?", "We konden geen resultaten vinden die aan deze criteria voldoen.": "Oops! We couldn't find any results that match these criteria.", "We konden voor de zoekopdracht <b>{{ search.term }}</b> geen resultaten vinden.": "We couldn't find any results for the search query <b>{{ search.term }}</b>.", Wijzigen: "Update", "Zaal-Reserveren": "Book a room", Zoeken: "Search", "Zoeken naar {{search.term}}...": "Searching for {{search.term}}...", "Zoekertjesmuur: op zoek naar een tennispartner of een boek? Plaats je zoekertje en de gemeenschap doet de rest.": "Listings walls: are you looking for a tennis partner or a book? Then put up your listing here and the community will do the rest.", "aanvraag starten": "begin request", "alle openingsuren": "Show opening hours", "alle resultaten tonen": "show all results", apr: "apr", aug: "aug", bewerken: "edit", "dd/mm/jjjj": "dd/mm/yyyy", dec: "dec", "dit item verwijderen": "delete this item", en: "and", feb: "feb", jan: "jan", jul: "jul", jun: "jun", maa: "mar", max: "max", "meer lezen": "read more", mei: "may", min: "min", "niet meer volgen": "stop following", nov: "nov", 'of klik om te <a href="#">bladeren</a>': 'or click to <a href="#">browse</a>', okt: "oct", sep: "sep", "straat wijzigen": "update street", "toon op kaart": "Show location on map", verwijder: "delete", "verwijder comment": "delete comment", volgen: "follow", "voor meer info": "for more information", wijzigen: "update", "{{blogAuthor.age}} jaar": "{{blogAuthor.age}} years old", "Bedankt voor je reservatie!": "Thanks for your reservation!", "-": "-", "Geen materialen": "No results", "Geen opmerkingen": "No comments", "Geen tags": "No tags", "Gelieve een titel in te vullen": "Please fill in a title", "Gelieve een type te selecteren": "Please choose a type", "Gelieve je achternaam in te vullen": "Enter your last name here", "Gelieve je e-mailadres in te vullen": "Please fill in your e-mail address", "Gelieve je emailadres in te vullen": "Please fill in your e-mail address", "Gelieve je voornaam in te vullen": "Please fill in your first name", '<span class="sr-only">Gate15</span>': '<span class="link">Click here</span>', "Heel de blog": "All blogs", Adres: "Address", "Welk adres wil je toevoegen?": "What address would you like to add?"}), gettextCatalog.setStrings("nl", {"A-stad": "A-stad", "Internationele dienst": "Internationale dienst", "You have {{count}} new message.": ["Je hebt {{count}} nieuw bericht.", "Je hebt {{count}} nieuwe berichten."]})
}]), "function" == typeof addEventListener && window.addEventListener("load", function () {
    new FastClick(document.body)
}, !1), window.cheet("↑ ↑ ↓ ↓ ← → ← → b a", function () {
    window.location.pathname = "/ke/ke/ke"
}), function (ng, aOS) {
    "use strict";
    aOS.controller("aOS.controllers.ImgController", ["$scope", "$element", "$http", "$templateCache", "$compile", "HelperService", "ValidationService", "_", function ($scope, $element, $http, $templateCache, $compile) {
        function initialize() {
            void 0 !== $scope.editable || $scope.editable ? loadTemplate() : watcher = $scope.$watch("editable", function (newValue) {
                void 0 !== newValue && (initialize(), watcher())
            })
        }

        function loadTemplate() {
            {
                var url = "/assets/aOS/js/common/views/img.htm";
                $http.get(url, {cache: $templateCache}).success(function (html) {
                    $element.replaceWith($compile(html)($scope))
                })
            }
        }

        var watcher;
        initialize()
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.controller("InputFieldController", ["$scope", "$element", "$http", "$templateCache", "$compile", "$rootScope", "HelperService", "ValidationService", "_", function ($scope, $element, $http, $templateCache, $compile, $rootScope) {
        function getTemplate(type) {
            var itemTemplate;
            switch (type) {
                case"autocomplete":
                case"checkbox":
                case"checkboxlist":
                case"checkboxtree":
                case"city":
                case"country":
                case"date":
                case"datetime":
                case"radio":
                case"range":
                case"select":
                case"selectize":
                case"street":
                case"textarea":
                case"time":
                case"timepicker":
                case"upload":
                case"pseudo":
                    itemTemplate = "/assets/aOS/js/common/views/inputfields/inputfield-" + type + ".htm";
                    break;
                case"rijksregister":
                case"akaart":
                    itemTemplate = "/assets/aOS/js/common/views/inputfields/inputfield-masked.htm";
                    break;
                default:
                    itemTemplate = "/assets/aOS/js/common/views/inputfields/inputfield-default.htm"
            }
            var templateLoader = $http.get(itemTemplate, {cache: $templateCache});
            return templateLoader
        }

        function initialize() {
            return $scope.currentDate = $rootScope.currentDate, void 0 === $scope.type ? !1 : (type = checkType($scope.type), void 0 !== $scope.ngModel || $scope.lazyload ? void(checkAttrs() && (setDefaults(), renderInputField())) : !1)
        }

        function checkAttrs() {
            switch (type) {
                case"checkboxlist":
                case"checkboxtree":
                case"radio":
                case"select":
                case"selectize":
                case"timepicker":
                    return void 0 === $scope.ngOptions || $scope.ngOptions.length < 1 ? $scope.lazyload ? !0 : !1 : !0;
                case"checkbox":
                    return void 0 === $scope.id || void 0 === $scope.name || void 0 === $scope.label ? !1 : !0;
                default:
                    return void 0 === $scope.id || void 0 === $scope.name ? !1 : !0
            }
        }

        function setDefaults() {
            switch ($scope.label = $scope.label || "", $scope.placeholder = $scope.placeholder || "", $scope.description = $scope.description || "", $scope.delay = $scope.delay || 0, $scope.layout = void 0 !== $scope.layout ? $scope.layout : defaultLayout, $scope.isMini = void 0 !== $scope.isMini ? $scope.isMini : !1, $scope.errorMessage = void 0 !== $scope.validation ? $scope.validation.errorMessage : "", $scope.readonly = void 0 !== $scope.readonly ? $scope.readonly : !1, $scope.disabled = void 0 !== $scope.disabled ? $scope.disabled : !1, $scope.ngModel = null === $scope.ngModel ? "" : $scope.ngModel, $scope.type) {
                case"select":
                    $scope.placeholder = $scope.placeholder || "Maak een keuze…";
                    break;
                case"checkboxlist":
                case"checkboxtree":
                    $scope.ngModel = null === $scope.ngModel ? [] : $scope.ngModel, $scope.ngModel = getCheckboxValues($scope.ngModel, $scope.ngOptions);
                    break;
                case"rijksregister":
                    $scope.mask = "99.99.99-999.99", $scope.validation = $scope.validation || {};
                    break;
                case"akaart":
                    $scope.mask = "9999.9999.9999", $scope.validation = $scope.validation || {};
                    break;
                case"date":
                    if ($scope.pickerMode = {picker: !0, input: !0}, void 0 !== $scope.datepickerMode)switch ($scope.datepickerMode) {
                        case"full":
                            $scope.pickerMode.picker = !0, $scope.pickerMode.input = !0;
                            break;
                        case"inputOnly":
                            $scope.pickerMode.picker = !1, $scope.pickerMode.input = !0;
                            break;
                        case"pickerOnly":
                            $scope.pickerMode.picker = !0, $scope.pickerMode.input = !1
                    }
                    break;
                case"range":
                    $scope.ngModel = void 0 === $scope.ngModel ? [] : $scope.ngModel, $scope.min = void 0 !== $scope.min ? $scope.min : 0, $scope.max = void 0 !== $scope.max ? $scope.max : 100, $scope.step = void 0 !== $scope.step ? $scope.step : 1
            }
        }

        function renderInputField() {
            var loader, promise, el;
            loader = getTemplate(type), promise = loader.success(function (html) {
                el = $compile(html)($scope), $element.replaceWith(el)
            })
        }

        function checkType(type) {
            return pseudoTypes.indexOf(type) > -1 ? "pseudo" : type
        }

        function getCheckboxValues(model, options) {
            if ("string" == typeof model || "number" == typeof model || "boolean" == typeof model) {
                var originalValue = model, i = 0;
                if (model = [], !(options instanceof Array))return model;
                for (i = 0; i < options.length; i += 1) {
                    if (originalValue === options[i].key)return model.push(options[i].key), model;
                    if (void 0 !== options[i].options)for (var j = 0; j < options[i].options.length; j += 1)if (originalValue === options[i].options[j].key)return model.push(options[i].options[j].key), model
                }
                return model
            }
            return model
        }

        var type = "", pseudoTypes = ["url", "phone"], defaultLayout = {fieldClass: "span-full tablet--span-half-1 desktop--span-half-1"};
        initialize()
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.controller("aOS.controllers.PanelController", ["$scope", "$transclude", function ($scope, $transclude) {
        this.renderTemplate = $transclude
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.controller("os.widgets.WidgetController", ["_", "$http", "$templateCache", "$compile", "$scope", "$element", "eventsService", "HelperService", "WidgetService", function (_, $http, $templateCache, $compile, $scope, $element, Events, Helper, WidgetService) {
        function initialize() {
            if (void 0 === $scope.type || $scope.type.length < 1)var watchType = $scope.$watch("type", function (newValue, oldValue) {
                newValue !== oldValue && newValue.length > 0 && (getWidgetDependencies(newValue), watchType())
            }); else getWidgetDependencies($scope.type)
        }

        function getWidgetDependencies(type) {
            return void 0 === type || type.length < 1 ? void initializeWidget() : void WidgetService.getWidget(type, $scope.parameters._id, function (response) {
                return $.isEmptyObject(response) ? ($scope.widgetError = !0, $scope.widgetLoading = !1, void($scope.widgetLoaded = !1)) : ($scope.config = response, void loadWidgetDependencies(response))
            })
        }

        function initializeWidget() {
            $scope.config.isUserEditable = $scope.userEditable || !1, Events.publish("widget.dependenciesLoaded", $scope.config._id)
        }

        var dependencyWatcher, paramWatcher;
        $scope.dependenciesLoaded = {}, $scope.config = {};
        var loadWidgetDependencies = function (config) {
            void 0 !== config.assets ? (void 0 !== config.assets.css ? Helper.includeCss(config.assets.css, function () {
                setDependencyLoaded(config._id, ["css"])
            }) : setDependencyLoaded(config._id, ["css"]), void 0 !== config.assets.js ? Helper.includeJavaScript(config.assets.js, function () {
                setDependencyLoaded(config._id, ["js"])
            }) : setDependencyLoaded(config._id, ["js"]), void 0 !== config.assets.template ? WidgetService.loadTemplate(config.assets.template[0], function () {
                setDependencyLoaded(config._id, ["template"])
            }) : setDependencyLoaded(config._id, ["template"])) : setDependencyLoaded(config._id, ["css", "js", "template"])
        }, setDependencyLoaded = function (id, d) {
            _.forEach(d, function (dependency) {
                void 0 === $scope.dependenciesLoaded[id] && ($scope.dependenciesLoaded[id] = {}), $scope.dependenciesLoaded[id][dependency] = !0
            })
        }, onWidgetDependencyLoaded = function (newValue) {
            if (void 0 !== $scope.config && void 0 !== newValue[$scope.config._id]) {
                var dependenciesObject = newValue[$scope.config._id];
                dependenciesObject.template && dependenciesObject.css && dependenciesObject.js && initializeWidget()
            }
        };
        dependencyWatcher = $scope.$watch("dependenciesLoaded", onWidgetDependencyLoaded, !0), $scope.$on("$destroy", function () {
            dependencyWatcher(), paramWatcher()
        }), paramWatcher = $scope.$watch("parameters", function (newValue, oldValue) {
            if (!angular.equals(newValue, oldValue)) {
                var typeChanged = void 0 !== $scope.config.type && $scope.config.type !== newValue.type, parentChanged = void 0 === oldValue && void 0 !== newValue.parent || void 0 !== oldValue.parent && oldValue.parent !== newValue.parent;
                (typeChanged || parentChanged) && getWidgetDependencies(newValue.type)
            }
        }, !0), initialize()
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.controller("os.widgets.WidgetSettingsController", ["_", "$http", "$templateCache", "$compile", "$scope", "$element", "eventsService", function (_, $http, $templateCache, $compile, $scope, $element, Events) {
        function initialize() {
            return void 0 === $scope.settingsTemplate ? void(watcher = $scope.$watch("settingsTemplate", function (newValue, oldValue) {
                void 0 !== newValue && newValue !== oldValue && (initialize(), watcher())
            })) : void renderWidgetSettings()
        }

        function renderWidgetSettings() {
            if (!(void 0 === $scope.settingsTemplate || $scope.settingsTemplate.length < 1)) {
                var loader, promise;
                loader = $http.get($scope.settingsTemplate, {cache: $templateCache, overrideErrorHandling: !0}), promise = loader.success(function (html) {
                    $element.html(html), $compile($element.contents())($scope), Events.publish("widgetSettings.rendered")
                }).error(function () {
                    $element.html('<div class="box"><h2>Er zijn geen instellingen voor deze widget</h2></div>'), $compile($element.contents())($scope)
                })
            }
        }

        var watcher, viewWatcher;
        viewWatcher = $scope.$watch("settingsTemplate", function (newValue) {
            if (void 0 !== newValue) {
                if (newValue.length < 1)return $element.html(""), void $compile($element.contents())($scope);
                renderWidgetSettings()
            }
        }), $scope.$on("$destroy", function () {
            viewWatcher()
        }), initialize()
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("a", ["_", "$rootScope", "$timeout", "HelperService", function (_, $rootScope, $timeout) {
        return{restrict: "E", link: function (scope, element, attrs) {
            function initialize() {
                void 0 === attrs.href || attrs.socialLink || (attrObserve = attrs.$observe("href", function (newValue) {
                    newValue !== oldValue && (oldValue = newValue, checkUrl())
                }))
            }

            function checkUrl() {
                isExternalUrl(attrs.href) || attrs.external ? "external" !== element.attr("rel") && (element.attr("rel", "external"), element.attr("target", "_blank"), element.append("<i class='icon-ext-link'><span>external</span></i>")) : ("external" === element.attr("rel") && (element.removeAttr("rel"), element.removeAttr("target"), element.find(".icon-ext-link").remove()), $timeout(function () {
                    manipulateLocaleUrl()
                }))
            }

            function manipulateLocaleUrl() {
                var href = attrs.href, hrefSegments = href.split("/"), availableLangs = Object.keys(window.multiLang.languages).map(function (val) {
                    return val.toLowerCase()
                }), langSegment = "";
                "#" === href || href.length < 1 || (hrefSegments[0].indexOf("http") > -1 ? (hrefSegments = hrefSegments.slice(3), href = "/" + hrefSegments.join("/"), langSegment = hrefSegments[0]) : langSegment = hrefSegments[1], "srv" !== langSegment && "assets" !== langSegment && 0 !== href.indexOf("mailto") && 0 !== href.indexOf("javascript") && (_.contains(availableLangs, langSegment.toLowerCase()) || attrs.$set("href", "/" + $rootScope.currentLanguage + href)))
            }

            function isExternalUrl(url) {
                if ("" === url || "/" === url.substring(0, 1) || "#" === url.substring(0, 1) || "mailto:" === url.substring(0, 7) || "javascript:" === url.substring(0, 11))return!1;
                var domain = function (url) {
                    return url.replace("http://", "").replace("https://", "").split("/")[0]
                };
                return domain(location.href) !== domain(url)
            }

            var attrObserve, oldValue;
            initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("autocomplete", ["$timeout", "HelperService", "eventsService", "_", function ($timeout, Helper, Events, _) {
        return{restrict: "A", scope: {autofocus: "=?", id: "@", ngModel: "=", ngOptions: "=", disabled: "=?", ngChange: "=?", ngPicked: "=?", lazyload: "=?", delay: "@?", placeholder: "@?", label: "@?", noResults: "@?"}, templateUrl: "/assets/aOS/js/common/views/autocomplete.htm", replace: !0, link: function (scope) {
            function initialize() {
                return void 0 === scope.ngModel ? void(scope.lazyload && (lazyWatcher = scope.$watch("ngModel", function (newValue, oldValue) {
                    newValue !== oldValue && void 0 !== newValue && initialize()
                }))) : (void 0 !== lazyWatcher && lazyWatcher(), void(void 0 !== scope.ngOptions && (setDefaults(), scope.autofocus && $timeout(function () {
                    $("#" + scope.id).focus()
                }, 0))))
            }

            function setDefaults() {
                scope.disabled = void 0 !== scope.disabled ? scope.disabled : !1, scope.delay = scope.delay || 0, scope.noResults = scope.noResults || "Geen resultaten gevonden."
            }

            function findStringInOptions(string) {
                var results = [], str = Helper.string.flatten(string);
                return _.each(scope.ngOptions, function (option) {
                    var value = option.value.toLowerCase();
                    value.indexOf(str) > -1 && results.push(option)
                }), results
            }

            function scrollToSelectedItem(hiliteIndex) {
                {
                    var item = document.getElementById("result-" + hiliteIndex), itemHeight = item.offsetHeight, itemTop = item.offsetTop, elem = document.getElementById("results"), elemHeight = elem.offsetHeight;
                    elem.scrollTop
                }
                itemHeight + itemTop > elemHeight && (elem.scrollTop = itemHeight + itemTop - elemHeight), itemTop < elem.scrollTop && (elem.scrollTop = 0)
            }

            var lazyWatcher, timer;
            scope.search = {term: "", results: [], layout: {fieldClass: "span-full tablet--span-full desktop--span-full"}}, scope.state = {searching: !1, hiliteIndex: -1}, scope.onFocus = function () {
                scope.search.results = scope.choices
            }, scope.searchString = function () {
                void 0 !== timer && $timeout.cancel(timer), scope.ngChange && scope.ngChange(scope.search.term), timer = $timeout(function () {
                    scope.search.results.length = 0, scope.search.term.length > 0 && (scope.search.results = findStringInOptions(scope.search.term))
                }, scope.delay)
            }, scope.pickChoice = function (choice) {
                choice ? (scope.ngModel = choice.key, scope.displayValue = choice.value) : (scope.ngModel = "", scope.displayValue = ""), scope.ngPicked && scope.ngPicked(choice)
            }, scope.clearChoice = function () {
                var choice = _.find(scope.ngOptions, {key: scope.ngModel});
                scope.search.term = choice.value, scope.ngModel = "", scope.searchString(scope.search.term), $timeout(function () {
                    $("#" + scope.id).focus()
                }, 0)
            }, scope.keydown = function (event) {
                switch (event.which) {
                    case 13:
                        var choice = scope.search.results[scope.state.hiliteIndex];
                        scope.pickChoice(choice), event.preventDefault();
                        break;
                    case 38:
                        scope.state.hiliteIndex > 0 ? scope.state.hiliteIndex -= 1 : scope.state.hiliteIndex = scope.search.results.length - 1, scrollToSelectedItem(scope.state.hiliteIndex);
                        break;
                    case 40:
                        scope.state.hiliteIndex < scope.search.results.length - 1 ? scope.state.hiliteIndex += 1 : scope.state.hiliteIndex = 0, scrollToSelectedItem(scope.state.hiliteIndex);
                        break;
                    case 27:
                        scope.search.results.length = 0, scope.search.term = ""
                }
            }, scope.$watch("ngOptions", function (newValue, oldValue) {
                var diff = _.compareArraysOfObjects(newValue, oldValue, "key");
                diff.length > 0 && (newValue.length > 0 ? (scope.disabled = !1, scope.search.term.length > 0 && scope.searchString(scope.search.term)) : scope.disabled = !0)
            }), Events.subscribe("autocomplete.clear", function () {
                scope.search.term = "", scope.search.results.length = 0
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("autogrow", ["HelperService", function (Helper) {
        return{restrict: "A", scope: !1, link: function (scope, element, attrs) {
            function initResize() {
                resizeAnimation && $(textarea).addClass(textareaClassname), $(textarea).autosize()
            }

            function loadLibrary() {
                jQuery().autosize ? initResize() : Helper.includeJavaScript([jqueryAutosizeLibraryUrl], function () {
                    initResize()
                })
            }

            function initialize() {
                loadLibrary()
            }

            var jqueryAutosizeLibraryUrl = "/assets/aOS/js/vendor/_jqueryautosize/jquery.autosize.min.js", textarea = element[0], textareaClassname = "textarea-resize-animation", resizeAnimation = attrs.resizeAnimation || !1;
            "textarea" === textarea.nodeName.toLowerCase() && (initialize(), scope.$on("$destroy", function () {
                $(textarea).off(), $(textarea).removeClass(textareaClassname), $(textarea).trigger("autosize.destroy")
            }))
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("autoscroll", ["HelperService", "$window", "$document", "$timeout", function (Helper, $window, $document, $timeout) {
        return{restrict: "A", scope: {enabled: "=?", trigger: "@?", offsetTop: "@?", offsetBottom: "@?", offsetLeft: "@?", offsetRight: "@?"}, link: function (scope) {
            function initialize() {
                scope.enabled = void 0 !== scope.enabled ? scope.enabled : !1, scope.trigger = scope.trigger || 50, offset = {top: parseInt(scope.offsetTop, 10) || 0, bottom: parseInt(scope.offsetBottom, 10) || 0, left: parseInt(scope.offsetLeft, 10) || 0, right: parseInt(scope.offsetRight, 10) || 0}, scope.enabled && $($window).bind("mousemove", onMouseMove)
            }

            function getPageHeight() {
                var body = document.body, html = document.documentElement, height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                return height
            }

            function isInTriggerZone(e) {
                windowHeight = $window.innerHeight, windowWidth = $window.innerWidth, pageHeight = getPageHeight(), pageWidth = $(window).width(), scrollTop = $(window).scrollTop(), acc = {}, xMin = trigger + offset.left, xMax = windowWidth - trigger - offset.right, yMin = trigger + offset.top, yMax = windowHeight - trigger - offset.bottom, e.clientX < xMin && pageWidth > windowWidth && (acc.direction = "left", acc.speed = ((trigger + offset.left) / e.clientX).toFixed(2)), e.clientX > xMax && pageWidth > windowWidth && (acc.direction = "right", acc.speed = ((trigger + offset.right) / (e.clientX - xMax)).toFixed(2)), e.clientY < yMin && pageHeight > windowHeight && (acc.direction = "top", acc.speed = ((trigger + offset.top) / e.clientY).toFixed(2)), e.clientY > yMax && pageHeight > windowHeight && (acc.direction = "bottom", acc.speed = ((trigger + offset.bottom) / (parseInt(scope.height, 10) + offset.bottom - (e.clientY - yMax))).toFixed(2))
            }

            function onMouseMove(e) {
                isInTriggerZone(e), void 0 !== acc.direction ? scrollWindow(acc) : null !== scrolldelay && ($timeout.cancel(scrolldelay), scrolldelay = null)
            }

            function scrollWindow() {
                var x = 0, y = 0;
                switch (acc.direction) {
                    case"left":
                        x = -1 * acc.speed;
                        break;
                    case"right":
                        x = 1 * acc.speed;
                        break;
                    case"top":
                        y = -1 * acc.speed;
                        break;
                    case"bottom":
                        y = 1 * acc.speed;
                        break;
                    default:
                        return
                }
                window.scrollBy(x, y), scrolldelay = $timeout(scrollWindow, 5)
            }

            var scrolldelay, acc = {}, offset = {}, scrollTop = 0, windowHeight = 0, windowWidth = 0, pageHeight = 0, pageWidth = 0, xMin = 0, xMax = 0, yMin = 0, yMax = 0, trigger = parseInt(scope.trigger, 10);
            scope.$watch("enabled", function (newValue, oldValue) {
                newValue !== oldValue && (newValue ? $($window).bind("mousemove", onMouseMove) : $($window).unbind("mousemove", onMouseMove))
            }), scope.$on("$destroy", function () {
                $($window).unbind("mousemove", onMouseMove)
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("breadcrumb", ["HelperService", "eventsService", "$http", "$window", function (Helper, eventsService, $http, $window) {
        return{templateUrl: "/assets/aOS/js/common/views/breadcrumb.htm", restrict: "A", replace: !0, scope: {title: "=?", slug: "=?", linkname: "=?"}, link: function (scope) {
            scope.title || "", scope.slug || "", scope.linkname || "";
            scope.goBack = function () {
                $window.history.back()
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("calendar", ["$timeout", "HelperService", "eventsService", "_", function ($timeout, Helper, Events, _) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/calendar.htm", scope: {ngModel: "=", ngEvents: "=", onSelect: "=?", lazyload: "=?", viewMode: "@?", allowClear: "=?"}, link: function (scope) {
            function initialize() {
                if ((void 0 !== scope.ngModel || scope.lazyload) && void 0 !== scope.ngModel) {
                    var check = null !== Helper.date.parse(scope.ngModel);
                    if (scope.viewMode = scope.viewMode || "full", check)getDateInfo(scope.ngModel); else {
                        var today = new Date;
                        getDateInfo(today)
                    }
                }
            }

            function getDateInfo(date) {
                scope.current.date = new Date(Helper.date.parse(date)), scope.current.index = getDateIndex(date);
                var firstDay = new Date(scope.current.date.getTime());
                firstDay.moveToFirstDayOfMonth(), scope.current.day = scope.current.date.getDate(), scope.current.month = scope.current.date.getMonth(), scope.current.year = scope.current.date.getFullYear(), scope.current.weekStart = getWeekStart(firstDay), scope.current.daysInMonth = Date.getDaysInMonth(scope.current.year, scope.current.month), "full" === scope.viewMode && getCalendar(scope.current)
            }

            function getWeekStart(date) {
                var start = date.getDay();
                return start -= 1, 0 > start && (start = 6), start
            }

            function getDateIndex(date) {
                var event, diff = 0, i = 0;
                for (i = 0; i < scope.ngEvents.length; i += 1)if (event = scope.ngEvents[i], diff = Helper.date.diff(event, date), 0 === diff)return i
            }

            function getCalendar(date) {
                var weekcounter = 0, i = 0, j = 0, weeks = [], week = [], day = {}, dummy = {value: null}, dayString = "", today = (new Date).clearTime();
                if (0 !== date.weekStart)for (i = 0; i < date.weekStart; i += 1)week.push(dummy), weekcounter += 1;
                for (i = 0; i < date.daysInMonth; i += 1)if (dayString = i + 1 + "/" + (scope.current.month + 1) + "/" + scope.current.year, day.value = i + 1, day.event = inEvents(dayString), week.push(_.clone(day)), weekcounter += 1, 7 === weekcounter)weeks.push(_.cloneDeep(week)), week.length = 0, weekcounter = 0; else if (i + 1 === date.daysInMonth) {
                    var remaining = 7 - week.length;
                    for (j = 0; remaining > j; j += 1)week.push(dummy);
                    weeks.push(_.cloneDeep(week)), week.length = 0, weekcounter = 0
                }
                scope.current.year === today.getFullYear() && scope.current.month === today.getMonth() && scope.current.day === today.getDate() && _.each(weeks, function (week) {
                    _.each(week, function (day) {
                        day.value === scope.current.day && (day.today = !0)
                    })
                }), scope.weeks = weeks
            }

            function inEvents(date) {
                var i = 0, event = {}, diff = 0, isDate = !1;
                for (i = 0; i < scope.ngEvents.length; i += 1)if (event = scope.ngEvents[i], diff = Helper.date.diff(date, event, !1, !0), 86e3 > diff) {
                    isDate = !0;
                    break
                }
                return isDate
            }

            scope.prevMonth = function () {
                getDateInfo(scope.current.date.addMonths(-1))
            }, scope.nextMonth = function () {
                getDateInfo(scope.current.date.addMonths(1))
            }, scope.prevEvent = function () {
                if (scope.current.index - 1 >= 0) {
                    var date = scope.ngEvents[scope.current.index - 1];
                    date = Helper.date.parse(date), scope.ngModel = date, scope.onSelect && scope.onSelect(date)
                }
            }, scope.nextEvent = function () {
                if (scope.current.index + 1 >= 0) {
                    var date = scope.ngEvents[scope.current.index + 1];
                    date = Helper.date.parse(date), scope.ngModel = date, scope.onSelect && scope.onSelect(date)
                }
            }, scope.selectDay = function (day) {
                if (null !== day.value) {
                    var date = day.value + "/" + (scope.current.month + 1) + "/" + scope.current.year;
                    if (date = Helper.date.parse(date), scope.allowClear && null !== scope.ngModel) {
                        var diff = Helper.date.diff(date, scope.ngModel);
                        if (0 === diff)return scope.ngModel = null, void $timeout(function () {
                            scope.onSelect && scope.onSelect()
                        })
                    }
                    scope.ngModel = date, $timeout(function () {
                        scope.onSelect && scope.onSelect(date)
                    })
                }
            }, scope.isSelected = function (day) {
                return null === scope.ngModel ? !1 : ("object" != typeof scope.ngModel && (scope.ngModel = Helper.date.parse(scope.ngModel)), scope.ngModel.getFullYear() !== scope.current.year ? !1 : scope.ngModel.getMonth() !== scope.current.month ? !1 : scope.ngModel.getDate() === day.value)
            };
            var watcher, eventsWatcher;
            scope.weekDays = ["ma", "di", "wo", "do", "vr", "za", "zo"], scope.months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], scope.weeks = [], scope.current = {date: null, day: null, month: null, year: null, index: -1}, watcher = scope.$watch("ngModel", function (newValue, oldValue) {
                void 0 !== newValue && Helper.date.diff(newValue, oldValue) > 0 && initialize()
            }), eventsWatcher = scope.$watch("ngEvents", function (newValue, oldValue) {
                void 0 === newValue || angular.equals(newValue, oldValue) || getDateInfo(scope.ngModel)
            }), scope.$on("$destroy", function () {
                watcher()
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("catchClick", ["$document", "eventsService", function ($document, eventsService) {
        var CatchClick = function (scope, element) {
            function isDescendant(parent, child) {
                for (var node = child.parentNode; null !== node;) {
                    if (node === parent)return!0;
                    node = node.parentNode
                }
                return!1
            }

            var onPageClick = function (event) {
                var clickedHere = event.target;
                isDescendant(element[0], clickedHere) || element[0] === clickedHere || eventsService.publish("header.catchclick", element[0])
            };
            setTimeout(function () {
                $document.bind("click", onPageClick)
            }, 0), scope.$on("$destroy", function () {
                $document.unbind("click", onPageClick)
            })
        };
        return{restrict: "A", scope: !1, link: CatchClick}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("checkStrength", ["$rootScope", "$document", "eventsService", function () {
        return{replace: !1, restrict: "EACM", link: function (scope, iElement, iAttrs) {
            var strength = {colors: ["#cc0000", "#ec9300", "#24b933", "#24b933", "#24b933"], mesureStrength: function (p) {
                var _force = 0, _regex = /[$-/:-?{-~!^_`\[\]]/g, _lowerLetters = /[a-z]+/.test(p), _upperLetters = /[A-Z]+/.test(p), _numbers = /[0-9]+/.test(p), _symbols = _regex.test(p), _flags = [_lowerLetters, _upperLetters, _numbers, _symbols], _passedMatches = $.grep(_flags, function (el) {
                    return el === !0
                }).length;
                return _force += 2 * p.length + (p.length >= 10 ? 1 : 0), _force += 10 * _passedMatches, _force = p.length <= 6 ? Math.min(_force, 10) : _force, _force = 1 === _passedMatches ? Math.min(_force, 10) : _force, _force = 2 === _passedMatches ? Math.min(_force, 20) : _force, _force = 3 === _passedMatches ? Math.min(_force, 40) : _force
            }, getColor: function (s) {
                var idx = 0;
                return idx = 10 >= s ? 0 : 20 >= s ? 1 : 30 >= s ? 2 : 40 >= s ? 3 : 4, {idx: idx + 1, col: this.colors[idx]}
            }};
            scope.$watch(iAttrs.checkStrength, function () {
                if ("" === scope.ngModel)iElement.css({display: "none"}); else {
                    var c = strength.getColor(strength.mesureStrength(scope.ngModel));
                    iElement.css({display: "inline"}), iElement.children("li").css({background: "#DDD"}).slice(0, c.idx).css({background: c.col})
                }
            })
        }, template: '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>'}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("citysearch", ["$http", "HelperService", "$timeout", function ($http, Helper, $timeout) {
        return{restrict: "A", scope: {ngModel: "=", disabled: "=", ngChange: "=", cityData: "=?", lazyload: "=?"}, templateUrl: "/assets/aOS/js/common/views/citysearch.htm", replace: !0, link: function (scope, element, attr) {
            function initialize() {
                scope.inputFieldId = attr.id || "", scope.isVisible = !1, scope.placeholder = attr.placeholder || " ", scope.autoCompleteResults = [], scope.hiliteItem = void 0, element.bind("keydown", onKeyDown), void 0 !== scope.cityData && selectLocation(scope.cityData)
            }

            function selectLocation(city, init) {
                hiliteIndex = -1, scope.ngModel = city.city + " " + city.zipCode, scope.city = "(" + city.zipCode + ") " + city.city, scope.locationSearch.results.length = 0, init || $timeout(function () {
                    void 0 !== scope.ngChange && scope.ngChange()
                })
            }

            function onKeyDown(e) {
                if (13 === e.which && (e.preventDefault(), scope.hiliteItem && selectLocation(scope.hiliteItem), scope.locationSearch.results.length = 0), 38 === e.which || 40 === e.which) {
                    switch (e.which) {
                        case 38:
                            hiliteIndex > -1 && (hiliteIndex -= 1);
                            break;
                        case 40:
                            hiliteIndex < scope.locationSearch.results.length - 1 && (hiliteIndex += 1)
                    }
                    if (scope.hiliteItem = scope.locationSearch.results[hiliteIndex], scope.hiliteItem) {
                        {
                            var item = document.getElementById(scope.hiliteItem.id), itemHeight = item.offsetHeight, itemTop = item.offsetTop, elem = document.getElementById("results"), elemHeight = elem.offsetHeight;
                            elem.scrollTop
                        }
                        itemHeight + itemTop > elemHeight && (elem.scrollTop = itemHeight + itemTop - elemHeight), itemTop < elem.scrollTop && (elem.scrollTop = 0)
                    }
                }
                scope.$$phase || scope.$apply()
            }

            if (void 0 !== scope.ngModel) {
                var requestTimer, requestTimeout = 400, hiliteIndex = -1;
                scope.cityInputHasFocus = !1, scope.locationSearch = {term: "", results: []}, scope.searchLocation = function () {
                    hiliteIndex = -1, scope.locationSearch.term.length > 2 ? (void 0 !== requestTimer && clearTimeout(requestTimer), requestTimer = setTimeout(function () {
                        $http.get("/srv/d/astad/city/search/" + scope.locationSearch.term).success(function (response) {
                            if (response.success) {
                                var results = Helper.verifyNamespace("data", response) || [];
                                scope.locationSearch.results = results
                            }
                        })
                    }, requestTimeout)) : (scope.locationSearch.results = null, void 0 !== requestTimer && (clearTimeout(requestTimer), requestTimer = void 0))
                }, scope.pickLocation = selectLocation, scope.editLocation = function () {
                    scope.locationSearch.term = "", scope.ngModel = "", scope.selectedLocation = null, scope.searchLocation(), $timeout(function () {
                        $("#citySearch_" + scope.inputFieldId).focus(), void 0 !== scope.ngChange && scope.ngChange()
                    })
                }, scope.$on("$destroy", function () {
                    element.unbind("keydown", onKeyDown)
                }), scope.$watch("cityData", function () {
                }), scope.$watch("ngModel", function () {
                }), initialize()
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS, CKEDITOR, enquire) {
    "use strict";
    aOS.directive("ckEditor", ["HelperService", "eventsService", "$timeout", function (Helper, Events, $timeout) {
        return{restrict: "A", require: "?ngModel", scope: {editMode: "=", template: "=?", ngChange: "=?"}, link: function (scope, elm, attr, ngModel) {
            function initialize() {
                scope.editMode && createInstance()
            }

            function createInstance() {
                ngModel && scope.editMode && ("undefined" == typeof CKEDITOR ? Helper.includeJavaScript(["/assets/aOS/js/vendor/_ckeditor/ckeditor.js"], function () {
                    CKEDITOR = window.CKEDITOR, newCK()
                }) : newCK())
            }

            function newCK() {
                if ("undefined" != typeof CKEDITOR) {
                    var config = {};
                    switch (scope.template) {
                        case"A":
                            config = {toolbar: "Intro", allowedContent: "p", bodyClass: "intro"}
                    }
                    config.contentsCss = CKEDITOR.basePath + "skins/aos/content.css", ck = CKEDITOR.appendTo(elm[0], config, ngModel.$viewValue), ck.on("pasteState", function () {
                        scope.$apply(function () {
                            var data = ck.getData(), oldData = ngModel.$viewValue;
                            ngModel.$setViewValue(data), oldData !== data && Events.publish("ckeditor.change"), scope.ngChange && scope.ngChange(ngModel.$viewValue)
                        })
                    }), ngModel.$render = function () {
                        ck.setData(ngModel.$viewValue)
                    }, elm.bind("$destroy", function () {
                        ck.destroy()
                    });
                    var toolbarWatcher = scope.$watch(function () {
                        return $(elm).find(".cke_top")[0]
                    }, function (newValue) {
                        void 0 !== newValue && $timeout(function () {
                            toolbar.elm = $(elm).find(".cke_top"), toolbar.width = $(toolbar.elm).width(), toolbar.height = $(toolbar.elm).height(), contents.elm = $(elm).find(".cke_contents"), contents.height = $(contents.elm).height();
                            var offset = $(contents.elm).offset();
                            contents.top = offset.top, elmHeight = $(elm).height() + toolbar.height, toolbarScrollAndResize(toolbar), registerEnquire(), toolbarWatcher()
                        })
                    })
                }
            }

            function toolbarScrollAndResize(toolbar) {
                var offset, height, width, scroll, top, bottom;
                $(window).on("scroll", function () {
                    toolbar.fixed || (offset = $(contents.elm).offset(), height = $(contents.elm).height(), contents.top !== offset.top && (contents.top = offset.top), contents.height !== height && (contents.height = height), 0 === toolbar.width && (width = $(toolbar.elm).width(), toolbar.width = width)), scroll = $(window).scrollTop(), top = contents.top - toolbar.offset, bottom = top + contents.height, scroll > top && bottom > scroll ? toolbar.fixed || (toolbar.fixed = !0, toolbar.css = {top: toolbar.elm.css("top"), position: toolbar.elm.css("position"), width: toolbar.elm.css("width"), "z-index": toolbar.elm.css("z-index")}, toolbar.elm.css({top: toolbar.offset + "px", position: "fixed", width: toolbar.width, "z-index": 1e4})) : toolbar.fixed && (toolbar.fixed = !1, toolbar.elm.css({top: toolbar.css.top, position: toolbar.css.position, width: toolbar.css.width, "z-index": toolbar.css["z-index"]}))
                }).on("resize", function () {
                    toolbar.fixed && (resizeTimer && $timeout.cancel(resizeTimer), resizeTimer = $timeout(function () {
                        toolbar.width = toolbar.elm.width(), toolbar.fixed && toolbar.elm.css("width", toolbar.width)
                    }, 150))
                })
            }

            function registerEnquire() {
                enquire.register("screen and (min-width:480px)", {match: function () {
                    toolbar.offset = 70, toolbar.fixed && toolbar.elm.css("top", toolbar.offset)
                }, unmatch: function () {
                    toolbar.offset = 50, toolbar.fixed && toolbar.elm.css("top", toolbar.offset)
                }}).register("screen and (min-width:960px)", {match: function () {
                    toolbar.offset = 90, toolbar.fixed && toolbar.elm.css("top", toolbar.offset)
                }})
            }

            if (void 0 !== ngModel) {
                var elmHeight, resizeTimer, ck = null, toolbar = {bottom: 0, css: {}, elm: null, fixed: !1, height: 0, position: 0, width: 0, offset: 50}, contents = {elm: null, top: 0, height: 0, bottom: 0};
                scope.template = scope.template || "B", scope.$watch("editMode", function (newValue, oldValue) {
                    newValue !== oldValue && scope.editMode && void 0 === ck.element && createInstance()
                }), scope.$watch("template", function (newValue, oldValue) {
                    newValue !== oldValue && (void 0 !== ck.element && ck.destroy(), createInstance())
                }), initialize()
            }
        }}
    }])
}(angular, antwerpOS, window.CKEDITOR, window.enquire), function (ng, aOS) {
    "use strict";
    aOS.directive("closeOverlay", ["$rootScope", "eventsService", function ($rootScope, eventsService) {
        return{scope: {redirecturl: "="}, restrict: "A", priority: 100, link: function (scope, elm) {
            elm.bind("click", function (e) {
                if (!($(e.target).hasClass("dialog") || $(e.target).parents(".dialog").length > 0)) {
                    var redirectUrl = scope.redirecturl;
                    eventsService.publish("overlay.close", $(e.target), redirectUrl)
                }
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS, window) {
    "use strict";
    aOS.directive("comments", ["_", "$http", "$rootScope", "$templateCache", "$compile", "$timeout", "HelperService", "eventsService", "DialogService", function (_, $http, $rootScope, $templateCache, $compile, $timeout, Helper, eventsService) {
        return{restrict: "A", scope: {ngModel: "=", contentId: "=", totalNumberOfComments: "=?", postCommentCallback: "=?", loadMoreCommentsCallback: "=?", allowAdminDelete: "=?", deleteCommentCallback: "=?"}, templateUrl: "/assets/aOS/js/common/views/comments.htm", link: function (scope, element, attrs) {
            function initialize() {
                scope.user = $rootScope.user, scope.loggedIn = $rootScope.loggedIn, scope.newComment.label = attrs.newCommentLabel || "Reageer op dit artikel:"
            }

            function getBool(val) {
                return void 0 !== val ? !(!+val && !String(val).toLowerCase().replace(!1, "")) : void 0
            }

            function calculateRemainingComments() {
                scope.ngModel && (scope.remainingComments = scope.totalNumberOfComments - scope.ngModel.comments.length)
            }

            function onCommentPostSuccess(response) {
                response.id === scope.contentId && (scope.newComment.content = "", scope.commentPostIsLoading = !1, eventsService.unsubscribe(commentPostSuccessEvent))
            }

            function onCommentLoadSuccess(response) {
                response.id === scope.contentId && (scope.commentFetchIsLoading = !1, eventsService.unsubscribe(commentLoadSuccessEvent), calculateRemainingComments())
            }

            var commentPostSuccessEvent, commentLoadSuccessEvent, onCommentsWatch = scope.$watch("ngModel.comments", function () {
                calculateRemainingComments()
            });
            if (scope.allowComments = void 0 === attrs.allowComments ? !0 : getBool(attrs.allowComments), scope.allowToggle = void 0 === attrs.allowToggle ? !0 : getBool(attrs.allowToggle), scope.limit = void 0 === attrs.limit ? 10 : attrs.limit, scope.commentsVisible = !0, scope.currentlocation = window.location.href, scope.newComment = {content: "", label: ""}, scope.remainingComments = 0, scope.commentPostIsLoading = !1, scope.commentFetchIsLoading = !1, scope.allowComments && void 0 === scope.postCommentCallback)throw new Error("A postCommentCallback is required.");
            scope.toggleCommentsVisibility = function () {
                scope.commentsVisible = !scope.commentsVisible
            }, scope.loadMoreComments = function () {
                scope.commentFetchIsLoading || (scope.loadMoreCommentsCallback(), commentLoadSuccessEvent = eventsService.subscribe("comment.loadSuccess", onCommentLoadSuccess, scope), scope.commentFetchIsLoading = !0)
            }, scope.submitComment = function () {
                if (scope.newComment.content.length > 0) {
                    commentPostSuccessEvent = eventsService.subscribe("comment.postSuccess", onCommentPostSuccess, scope), scope.commentPostIsLoading = !0;
                    var comment = {contentId: scope.contentId, body: scope.newComment.content};
                    scope.postCommentCallback(comment)
                }
            }, scope.$on("$destroy", function () {
                onCommentsWatch()
            }), initialize()
        }}
    }])
}(angular, antwerpOS, window), function (ng, aOS) {
    "use strict";
    aOS.directive("contenteditablefield", ["eventsService", function (Events) {
        return{restrict: "A", require: "?ngModel", link: function (scope, element, attrs, ngModel) {
            function readViewText() {
                var html = element.html();
                attrs.stripBr && "<br>" === html && (html = ""), html !== ngModel.$viewValue && (ngModel.$setViewValue(html), void 0 !== attrs.event && Events.publish(attrs.event))
            }

            ngModel && (ngModel.$render = function () {
                element.html(ngModel.$viewValue || "")
            }, element.bind("blur keyup change", function () {
                scope.$apply(readViewText)
            }))
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("countryselect", ["$document", "HelperService", function () {
        return{restrict: "A", scope: {id: "@", ngModel: "=", choices: "=", disabled: "=", onSelect: "=", placeholder: "="}, templateUrl: "/assets/aOS/js/common/views/countryselect.htm", replace: !0, link: function (scope, element, attr) {
            function applyScope() {
                scope.$$phase && scope.$apply()
            }

            if (void 0 !== scope.choices && void 0 !== scope.ngModel) {
                var watchers = [];
                scope.defaultValue = attr.defaultvalue, scope.otherCountryHasFocus = !1, scope.defaultDisplay = function () {
                    for (var i in scope.choices)if (scope.defaultValue === scope.choices[i].key)return scope.choices[i].value;
                    return""
                }, scope.ngModel !== scope.defaultValue && (scope.selectedOtherCountry = scope.ngModel || ""), scope.selectDefault = function () {
                    scope.ngModel = scope.defaultValue, scope.selectedOtherCountry = "", applyScope()
                }, scope.onOtherCountryClicked = function () {
                    scope.ngModel && scope.ngModel !== scope.defaultValue || scope.autoCompleteIsVisible || (scope.ngModel = "", scope.selectedOtherCountry = "", scope.autoCompleteIsVisible = !0, scope.otherCountryHasFocus = !0)
                }, scope.otherCountrySelected = function (callbackData) {
                    scope.ngModel = callbackData.key, scope.autoCompleteIsVisible = !1, applyScope()
                }, watchers[watchers.length] = scope.$watch("ngModel", function (newValue, oldValue, scope) {
                    scope.selected = newValue
                }), scope.$on("$destroy", function () {
                    for (var i = 0; i < watchers.length; i += 1)watchers[i].call()
                }), scope.getDisplayForValue = function (value) {
                    for (var i in scope.choices)if (value === scope.choices[i].key)return scope.choices[i].value
                }
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("dateinputfield", ["HelperService", function (Helper) {
        return{restrict: "A", require: "^ngModel", scope: !1, link: function (scope, element, attr, ctrl) {
            var time;
            attr.$observe("ngModel", function () {
                ctrl.$modelValue = new Date(ctrl.$setViewValue)
            }), ctrl.$formatters.unshift(function (modelValue) {
                time = modelValue;
                var formatted = Helper.date.parseToString(modelValue, "date");
                return formatted
            }), ctrl.$parsers.unshift(function (viewValue) {
                if (viewValue.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
                    var date = Helper.date.parse(viewValue);
                    if (null !== date)return date.setHours(time.getHours(), time.getMinutes()), time = date, date
                }
                return time
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("datepicker", ["_", "$timeout", "eventsService", "HelperService", function (_, $timeout, Events, Helper) {
        return{restrict: "A", require: "^ngModel", priority: 100, scope: {ngModel: "=", picked: "=?", showPickedDate: "=?", availableDates: "=?"}, templateUrl: "/assets/aOS/js/common/views/datepicker.htm", link: function (scope) {
            function initialize() {
                setPickedDate()
            }

            function setPickedDate() {
                if (null !== Helper.date.parse(scope.ngModel)) {
                    var picked = Helper.date.parse(scope.ngModel) || new Date;
                    scope.pickedDate.dd = picked.getDate(), scope.pickedDate.mm = picked.getMonth() + 1, scope.pickedDate.yyyy = picked.getFullYear()
                }
            }

            function populateCalendar(date) {
                var i = 0, cells = [], weeks = [
                    []
                ], week = 0, firstDay = new Date(date.yyyy, date.mm - 1, 1), offset = 0 === firstDay.getDay() ? 6 : firstDay.getDay() - 1, daysInMonth = new Date(date.yyyy, date.mm, 0).getDate();
                for (i = 0; offset > i; i += 1)cells.push({label: "", link: !1, value: null});
                for (i = 0; daysInMonth > i; i += 1)cells.push({label: i + 1, link: !1, value: formatDate({d: i + 1, m: date.mm, y: date.yyyy}), date: {dd: i + 1, mm: date.mm, yyyy: date.yyyy}});
                var pollyfill = 7 - cells.length % 7;
                for (i = 0; pollyfill > i; i += 1)cells.push({label: "", link: !1, value: null});
                for (i = 0; i < cells.length; i += 1)weeks[week].push(cells[i]), weeks[week].length % 7 === 0 && (weeks.push([]), week += 1);
                return weeks
            }

            function formatDate(date) {
                return("0" + date.d).slice(-2) + "/" + ("0" + date.m).slice(-2) + "/" + date.y
            }

            if (void 0 !== scope.ngModel) {
                var showCurrentDate = scope.showPickedDate;
                showCurrentDate = void 0 === showCurrentDate ? !0 : showCurrentDate;
                var today = new Date;
                scope.ngModel && showCurrentDate && (today = Helper.date.parse(scope.ngModel)), scope.pickedDate = {}, scope.today = {dd: today.getDate(), mm: today.getMonth() + 1, yyyy: today.getFullYear()}, scope.calendar = {current: scope.today, monthNames: ["", "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], cells: populateCalendar(scope.today)}, scope.setDate = function (value) {
                    return scope.availableDates && !scope.isAvailable(value) ? !1 : (scope.ngModel = value, Events.publish("datepicker.pickedDate", value), void $timeout(function () {
                        void 0 !== scope.picked && scope.picked(value)
                    }, 0))
                }, scope.nextMonth = function (value) {
                    clearTimeout(scope.timer);
                    var date = {dd: value.dd, mm: 12 === value.mm ? 1 : value.mm + 1, yyyy: 12 === value.mm ? value.yyyy + 1 : value.yyyy};
                    scope.calendar.current = date, scope.calendar.cells = populateCalendar(date)
                }, scope.prevMonth = function (value) {
                    clearTimeout(scope.timer);
                    var date = {dd: value.dd, mm: 1 === value.mm ? 12 : value.mm - 1, yyyy: 1 === value.mm ? value.yyyy - 1 : value.yyyy};
                    scope.calendar.current = date, scope.calendar.cells = populateCalendar(date)
                }, scope.nextYear = function (value) {
                    clearTimeout(scope.timer);
                    var date = {dd: value.dd, mm: value.mm, yyyy: value.yyyy + 1};
                    scope.calendar.current = date, scope.calendar.cells = populateCalendar(date)
                }, scope.prevYear = function (value) {
                    clearTimeout(scope.timer);
                    var date = {dd: value.dd, mm: value.mm, yyyy: value.yyyy - 1};
                    scope.calendar.current = date, scope.calendar.cells = populateCalendar(date)
                }, scope.isToday = function (today, day) {
                    return day.date ? today.dd === day.date.dd && today.mm === day.date.mm && today.yyyy === day.date.yyyy : !1
                }, scope.isPickedDate = function (pickedDate, day) {
                    return day.date ? void 0 !== day.date.dd && pickedDate.dd === day.date.dd && pickedDate.mm === day.date.mm && pickedDate.yyyy === day.date.yyyy : !1
                }, scope.isAvailable = function (day) {
                    if (!day)return!1;
                    var tempIndex = -1, tempDate = day;
                    return day.value && (tempDate = day.value), scope.availableDates && (tempIndex = _.findIndex(scope.availableDates, function (date) {
                        return tempDate === date
                    })), -1 !== tempIndex
                }, initialize()
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("datetimePicker", ["$timeout", "$rootScope", "eventsService", "HelperService", function ($timeout, $rootScope, Events, Helper) {
        return{restrict: "A", priority: 100, require: "^ngModel", scope: {id: "@?", name: "@?", ngChange: "=?", ngModel: "="}, templateUrl: "/assets/aOS/js/common/views/datetimepicker.htm", link: function (scope) {
            function initialize() {
                scope.ngModel = Helper.date.parse(scope.ngModel)
            }

            void 0 !== scope.ngModel && (scope.currentDate = $rootScope.currentDate, scope.state = {picker: !1}, scope.toggleDatepicker = function () {
                scope.state.picker = !scope.state.picker
            }, scope.pickedDate = function (value) {
                var newDate = Helper.date.parse(value);
                if (null === scope.ngModel)scope.ngModel = newDate; else {
                    var diff = {years: newDate.getFullYear() - scope.ngModel.getFullYear(), months: newDate.getMonth() - scope.ngModel.getMonth(), days: newDate.getDate() - scope.ngModel.getDate()};
                    scope.ngModel = Helper.date.add(diff, scope.ngModel)
                }
                scope.ngChange && scope.ngChange(value), scope.state.picker = !1
            }, scope.pickedTime = function (value) {
                scope.ngChange && scope.ngChange(value)
            }, initialize())
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("dateTimeStartEndPicker", ["HelperService", "_", function (Helper, _) {
        return{templateUrl: "/assets/aOS/js/common/views/datetimestartendpicker.htm", restrict: "A", replace: !0, scope: {ngChange: "=?", ngModel: "=", startTime: "=?", endTime: "=?", startDate: "=?", step: "=?", description: "@?"}, link: function (scope) {
            function initialize() {
                if (_.isObject(scope.ngModel) && "" !== scope.ngModel.begin && "" !== scope.ngModel.end) {
                    if (scope.ngModel.begin = Helper.date.parse(scope.ngModel.begin), scope.ngModel.end = Helper.date.parse(scope.ngModel.end), null === scope.ngModel.begin || null === scope.ngModel.end)return;
                    scope.startTime = addLeadingZero(scope.ngModel.begin.getHours() + ":" + scope.ngModel.begin.getMinutes()), scope.endTime = addLeadingZero(scope.ngModel.end.getHours() + ":" + scope.ngModel.end.getMinutes());
                    var day = scope.ngModel.begin.getDate();
                    1 === day.toString().length && (day = "0" + day);
                    var month = scope.ngModel.begin.getMonth() + 1;
                    1 === month.toString().length && (month = "0" + month), datum = scope.startDate = day + "/" + month + "/" + scope.ngModel.begin.getFullYear()
                }
            }

            function addLeadingZero(string) {
                var time = string.split(":");
                string = "";
                for (var i = 0; 2 > i; i += 1)string += 1 === time[i].toString().length ? "0" + time[i] : time[i], 0 === i && (string += ":");
                return string
            }

            if (void 0 !== scope.ngModel) {
                var datum;
                scope.toggleDatepicker = function () {
                    scope.state.picker = !scope.state.picker
                }, scope.parseModel = function () {
                    var beginTime = "00:00";
                    beginTime = scope.startTime.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/) ? scope.startTime.split(":") : beginTime.split(":");
                    var endTime = "23:59";
                    if (endTime = scope.endTime.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/) ? scope.endTime.split(":") : endTime.split(":"), scope.startDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
                        datum = scope.startDate;
                        var beginDate = Helper.date.parse(datum), endDate = Helper.date.parse(datum);
                        beginDate.setHours(beginTime[0], beginTime[1]), endDate.setHours(endTime[0], endTime[1]), endTime[0] < beginTime[0] ? endDate.addDays(1) : endTime[0] === beginTime[0] && endTime[1] <= beginTime[1] && endDate.addDays(1), scope.ngModel.begin = beginDate, scope.ngModel.end = endDate, scope.ngChange && scope.ngChange(scope.ngModel)
                    }
                }, scope.pickedDate = function (value) {
                    var newDate = Helper.date.parse(value);
                    if (null === scope.ngModel)scope.ngModel = newDate; else {
                        var diff = {years: newDate.getFullYear() - scope.ngModel.begin.getFullYear(), months: newDate.getMonth() - scope.ngModel.begin.getMonth(), days: newDate.getDate() - scope.ngModel.begin.getDate()};
                        scope.ngModel = Helper.date.add(diff, scope.ngModel.begin)
                    }
                    scope.state.picker = !1
                }, scope.startTime = "", scope.endTime = "", scope.startDate = "", scope.fieldLayout = {fieldClass: "span-full tablet--span-full desktop--span-full"}, scope.state = {picker: !1, timePicker: !0}, scope.date = {required: !0}, scope.date.validators = [
                    {name: "Date"}
                ], scope.time1 = {required: !0}, scope.time1.match = {pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/}, scope.time2 = {required: !0}, scope.time2.match = {pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/}, initialize()
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("dialogBox", ["$rootScope", "$http", "$compile", "$templateCache", "DialogService", "eventsService", "QueueService", function ($rootScope, $http, $compile, $templateCache, Dialog, Events, Queue) {
        var getTemplate = function (name) {
            var templateLoader, templateMap = {login: "/srv/user/t/login", register: "/srv/user/t/register", confirm: "/assets/aOS/js/common/views/dialogs/confirm.htm", requestpassword: "/srv/user/t/new-password-request", requestusername: "/srv/user/t/username-request", registercheckmail: "/srv/user/t/register-check-mail", requestusernamecheckmail: "/srv/user/t/username-check-mail", activateaccount: "/srv/user/t/activate-account", resetpassword: "/srv/user/t/reset-password", resetpasswordtoken: "/srv/user/t/reset-password", resetpasswordcheckmail: "/srv/user/t/reset-check-mail", photoeditor: "/assets/aOS/js/common/views/dialogs/photoeditor.htm"}, templateUrl = templateMap[name];
            return templateLoader = $http.get(templateUrl, {cache: $templateCache})
        }, linker = function (scope, element, attrs) {
            var config = scope.$parent.config;
            scope.conf = config;
            {
                var loader = getTemplate(attrs.type);
                loader.success(function (html) {
                    element.replaceWith($compile(html)(scope))
                })
            }
            switch (attrs.type) {
                case"login":
                    Events.subscribe("user.auth", function (data) {
                        data && (Queue.runQueue(!0), Dialog.closeDialog(scope))
                    }, scope);
                    break;
                case"confirm":
                    Events.subscribe("dialog.confirm", function (data) {
                        data ? (config.confirm && config.confirm(data), Dialog.closeDialog(scope)) : (config.deny && config.deny(data), Dialog.closeDialog(scope))
                    }, scope)
            }
            scope.$on("$destroy", function () {
                $rootScope.fix = !1
            })
        };
        return{restrict: "A", scope: {config: "="}, link: linker}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("draggable", ["$rootScope", "$document", "$window", "eventsService", "_", function ($rootScope, $document, $window, Events) {
        return{restrict: "A", scope: {delay: "=?", copy: "=?", startDrag: "=?", stopDrag: "=?", offsetLeft: "=?", offsetTop: "=?"}, link: function (scope, element, attrs) {
            function getPosition() {
                var rect = dragger.getBoundingClientRect();
                return{x: rect.left, y: rect.top}
            }

            function cloneDragger() {
                clone = dragger.cloneNode(!0), $(dragger).after(clone)
            }

            function backupDragger() {
                orig.position = getPosition(), orig.style = {position: dragger.style.position, height: dragger.style.height, width: dragger.style.width, top: dragger.style.top, left: dragger.style.left, zIndex: dragger.style.zIndex}, dragger.style.width = dragger.offsetWidth + "px", dragger.style.height = dragger.offsetHeight + "px", dragger.style.zIndex = 1e4
            }

            function resetDragger() {
                updatePosition(orig.position), dragger.style.position = orig.style.position, dragger.style.height = orig.style.height, dragger.style.width = orig.style.width, dragger.style.top = orig.style.top, dragger.style.left = orig.style.left, dragger.style.zIndex = orig.style.zIndex, $(dragger).removeClass("drag"), offsetLeft = void 0 !== scope.offsetLeft ? scope.offsetLeft : 0, offsetTop = void 0 !== scope.offsetTop ? scope.offsetTop : 0
            }

            function updatePosition(pos) {
                "fixed" !== dragger.style.position && (dragger.style.position = "fixed"), dragger.style.top = pos.clientY - offsetTop + "px", dragger.style.left = pos.clientX - offsetLeft + "px"
            }

            function setOffset(e) {
                var rect = dragger.getBoundingClientRect(), offsetX = e.clientX - rect.left, offsetY = e.clientY - rect.top;
                offsetLeft = void 0 !== scope.offsetLeft ? scope.offsetLeft : offsetX, offsetTop = void 0 !== scope.offsetTop ? scope.offsetTop : offsetY
            }

            function onMouseDown(e) {
                if (1 === e.which) {
                    var grabberCheck = !1;
                    void 0 !== attrs.grabber ? e.target.id === attrs.grabber && (grabberCheck = !0) : grabberCheck = !0, grabberCheck && (e.preventDefault(), $document.bind("mouseup", onMouseUp), dragTimer = window.setTimeout(function () {
                        state.mousedown = !0, backupDragger(), setOffset(e), $(dragger).addClass("drag"), Events.publish("dragging.start", dragger), scope.startDrag && scope.startDrag(dragger), state.copy && Events.subscribe("dropping.updateDom", function () {
                            $(clone).attr("class", $(dragger).attr("class"))
                        }), $document.bind("mousemove", onMouseMove), $($window).bind("scroll", onWindowScroll)
                    }, scope.delay))
                }
            }

            function onMouseMove(e) {
                state.mousedown && (!state.cloned && scope.copy && (cloneDragger(), state.cloned = !0), updatePosition(e))
            }

            function onMouseUp(e) {
                void 0 !== dragTimer && window.clearTimeout(dragTimer), state.mousedown && (Events.publish("dragging.dropped", {event: e, elem: dragger}), resetDragger(), scope.copy && null !== clone && ($(clone).remove(), state.cloned = !1, clone = null), state.dragging = !1, $document.unbind("mousemove", onMouseMove), $document.unbind("mouseup", onMouseUp), $($window).unbind("scroll", onWindowScroll), scope.stopDrag && scope.stopDrag(dragger))
            }

            function onWindowScroll() {
                null !== scrollTimer && clearTimeout(scrollTimer), scrollTimer = setTimeout(function () {
                    Events.publish("dropping.updateDom")
                }, 150)
            }

            function initialize() {
                $(dragger).bind("mousedown", onMouseDown)
            }

            if (void 0 !== attrs.id && 0 !== attrs.id.length) {
                $(element).addClass("draggable"), scope.copy = void 0 !== scope.copy ? scope.copy : !1, scope.delay = scope.delay || 0;
                var clone, dragTimer, scrollTimer, offsetLeft, offsetTop, dragger = element[0], orig = {position: {}, style: {}}, state = {cloned: !1, mousedown: !1};
                scope.$on("$destroy", function () {
                    $(dragger).unbind("mousedown", onMouseDown)
                }), initialize()
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("droppable", ["$rootScope", "$document", "eventsService", function ($rootScope, $document, Events) {
        return{scope: {drop: "=", dragOver: "=", dragLeave: "="}, link: function (scope, element, attrs) {
            function getField() {
                var rect = dropper.getBoundingClientRect();
                field.xMin = rect.left, field.xMax = rect.right, field.yMin = rect.top, field.yMax = rect.bottom
            }

            function readyForDrop(e) {
                state.dragging && (e.clientX >= field.xMin && e.clientX <= field.xMax && e.clientY >= field.yMin && e.clientY <= field.yMax ? ($(dropper).addClass("over"), Events.publish("dropping.ready", dropper), scope.dragOver && scope.dragOver()) : ($(dropper).hasClass("over") && ($(dropper).removeClass("over"), Events.publish("dropping.standby", dropper)), scope.dragLeave && scope.dragLeave()))
            }

            function inField(e) {
                return e.clientX >= field.xMin && e.clientX <= field.xMax && e.clientY >= field.yMin && e.clientY <= field.yMax ? !0 : !1
            }

            function initialize() {
                Events.subscribe("dragging.start", function () {
                    state.dragging = !0, getField(dropper), $document.bind("mousemove", readyForDrop)
                }, scope), Events.subscribe("dragging.dropped", function (data) {
                    inField(data.event) && (scope.drop && scope.drop(data.elem, dropper), $(dropper).removeClass("over")), $document.unbind("mousemove", readyForDrop)
                }, scope), Events.subscribe("dropping.updateDom", function (id) {
                    void 0 !== id ? id === attrs.id && getField() : getField()
                }, scope)
            }

            if (void 0 !== attrs.id && 0 !== attrs.id.length) {
                var dropper = element[0], field = {}, state = {dragging: !1};
                initialize()
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("equalHeight", ["$window", function ($window) {
        return{restrict: "A", scope: {}, link: function (scope, element) {
            function adjustHeight() {
                var cw = element.width();
                element.css({height: cw + "px"})
            }

            angular.element($window).bind("resize", function () {
                adjustHeight()
            }), adjustHeight()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("flip", ["$rootScope", function () {
        return{scope: {redirecturl: "="}, restrict: "A", link: function (scope, elm) {
            elm.bind("click", function () {
                elm.parents(".front").length > 0 ? elm.parents(".box-news").addClass("flipped") : elm.parents(".box-news").removeClass("flipped")
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("focus", ["$rootScope", "$timeout", function ($rootScope, $timeout) {
        return{scope: {trigger: "=focus"}, link: function (scope, element) {
            scope.$watch("trigger", function (value) {
                value === !0 && $timeout(function () {
                    element[0].focus(), scope.trigger = !1
                })
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("form", ["_", "eventsService", function (_, eventsService) {
        return{restrict: "E", compile: function () {
            return function (scope, element, attrs) {
                function initialize() {
                    attrs.ngSubmit && setTimeout(function () {
                        element.unbind("submit").submit(function (e) {
                            e.preventDefault();
                            var inputs = element.find("input, textarea, select");
                            _.each(inputs, function (input) {
                                var type = $(input).attr("type");
                                "file" !== type && $(input).trigger("input").trigger("change").trigger("keydown")
                            }), eventsService.publish("form.submit", attrs.name), scope.$apply(attrs.ngSubmit)
                        })
                    }, 0)
                }

                initialize()
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("gate15.calendarweek", ["$timeout", "HelperService", "eventsService", "gettextCatalog", "_", function ($timeout, Helper, Events, gettextCatalog, _) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/gate15-calendar-week.htm", scope: {ngViewDate: "=?", ngModel: "=", ngTempModel: "=?", ngOnDateChange: "=?"}, link: function (scope) {
            function initialize() {
                scope.ngViewDate = void 0 === scope.ngViewDate ? new Date : null === Helper.date.parse(scope.ngViewDate) ? Helper.date.parseISOString(scope.ngViewDate) : Helper.date.parse(scope.ngViewDate), setWeekBeginAndEnd(scope.ngViewDate), currentYear = scope.ngViewDate.getFullYear(), fillHours(), setCalendar(scope.ngViewDate), scope.yearModel = getYearModel(new Date(currentYear, 0, 1))
            }

            function setWeekBeginAndEnd(date) {
                weekBegin = date.clone(), weekBegin.addDays(-weekBegin.getDay() + 1), weekBegin.setHours(0, 0, 0), weekEnd = weekBegin.clone(), weekEnd.addDays(6), weekEnd.setHours(23, 59, 59)
            }

            function fillHours() {
                for (var cnt = 0, i = 0; 24 > i; i += 2) {
                    var hour = "" + i;
                    hour.length < 2 && (hour = "0" + hour);
                    var minutes = "00";
                    scope.hours.push({text: hour + ":" + minutes}), cnt += 1
                }
                divisionFactor = 86400 / cnt
            }

            function parseEvents(events) {
                var ev = [];
                return _.forEach(events, function (event) {
                    if ("string" == typeof event.BeginDateTime && (event.BeginDateTime = new Date(Helper.date.parseISOString(event.BeginDateTime)), event.EndDateTime = new Date(Helper.date.parseISOString(event.EndDateTime))), event.BeginDateTime.between(weekBegin, weekEnd) || event.EndDateTime.between(weekBegin, weekEnd)) {
                        var eventList = splitEventPerDay(event);
                        _.forEach(eventList, function (evt) {
                            var tmpEvent = {}, beginDateTime = evt.BeginDateTime, endDateTime = evt.EndDateTime, beginOfDay = new Date(beginDateTime);
                            beginOfDay.clearTime(), tmpEvent.offset = Helper.date.diff(beginDateTime, beginOfDay) / divisionFactor, tmpEvent.duration = Helper.date.diff(beginDateTime, endDateTime) / divisionFactor, tmpEvent.description = evt.Description, tmpEvent.leftOffset = beginDateTime.getDay(), 0 === tmpEvent.leftOffset && (tmpEvent.leftOffset = 7), tmpEvent.leftOffset -= 1, ev.push(tmpEvent)
                        })
                    }
                }), ev
            }

            function calculateDaysBetweenDates(dateOne, dateTwo) {
                return dateOne = _.clone(dateOne, !0), dateTwo = _.clone(dateTwo, !0), dateOne.clearTime(), dateTwo.clearTime(), Helper.date.diff(dateOne, dateTwo) / 86400 + 1
            }

            function splitEventPerDay(event) {
                var events = [], beginDateTime = _.clone(event.BeginDateTime, !0), endDateTime = _.clone(event.EndDateTime, !0), days = calculateDaysBetweenDates(beginDateTime, endDateTime);
                if (1 === days)return event.BeginDateTime = beginDateTime, event.EndDateTime = endDateTime, events.push(event), events;
                for (var i = 0; days > i; i += 1) {
                    var evt = {};
                    0 === i ? (evt.BeginDateTime = _.clone(beginDateTime, !0), evt.EndDateTime = _.clone(beginDateTime, !0), evt.EndDateTime.clearTime(), evt.EndDateTime.setDate(beginDateTime.getDate() + 1)) : i === days - 1 ? (evt.EndDateTime = _.clone(endDateTime, !0), evt.BeginDateTime = _.clone(endDateTime, !0), evt.BeginDateTime.clearTime(), evt.BeginDateTime.setDate(endDateTime.getDate())) : (evt.BeginDateTime = _.clone(beginDateTime, !0), evt.BeginDateTime.clearTime(), evt.BeginDateTime.setDate(beginDateTime.getDate() + i), evt.EndDateTime = _.clone(beginDateTime, !0), evt.EndDateTime.clearTime(), evt.EndDateTime.setDate(beginDateTime.getDate() + i + 1)), evt.Description = event.Description, evt.Comment = event.Comment, events.push(evt)
                }
                return events
            }

            function setCalendar(date) {
                scope.current.date = new Date(date), scope.tmp = new Date(date), scope.tmp.setHours(0), scope.tmp.setMinutes(0), scope.current.offset = Helper.date.diff(scope.current.date, scope.tmp) / divisionFactor, scope.start = new Date(date), scope.end = new Date(date), scope.start.addDays(-scope.current.date.getDay() + 1), scope.end.addDays(-scope.current.date.getDay() + 7), scope.startDay = scope.start.getDate(), scope.startMonth = scope.months[scope.start.getMonth()], scope.startYear = scope.start.getFullYear(), scope.endDay = scope.end.getDate(), scope.endMonth = scope.months[scope.end.getMonth()], scope.endYear = scope.end.getFullYear(), scope.weekDays = [];
                for (var i = 0; 7 > i; i += 1) {
                    var tmp = new Date(scope.start);
                    tmp.addDays(i);
                    var object = {text: scope.days[i], day: tmp.getDate(), month: tmp.getMonth() + 1, year: tmp.getFullYear()};
                    scope.weekDays.push(object)
                }
            }

            function getYearModel(date) {
                for (var viewYear = date.getFullYear(), day = new Date(viewYear, 0, 1), weekNumber = 0, monthNumber = 0, yearModel = {year: viewYear, months: []}; day.getFullYear() === viewYear;) {
                    monthNumber !== day.getMonth() && (weekNumber = 0, monthNumber = day.getMonth());
                    var d = {date: new Date(day.getFullYear(), day.getMonth(), day.getDate()), weekDayNumber: (day.getDay() + 6) % 7};
                    yearModel.months[monthNumber] = yearModel.months[monthNumber] || [], yearModel.months[monthNumber][weekNumber] = yearModel.months[monthNumber][weekNumber] || [], yearModel.months[monthNumber][weekNumber].push(d), 6 === d.weekDayNumber && (weekNumber += 1), day.addDays(1)
                }
                return yearModel
            }

            var watcher, eventsWatcher, tmpEventsWatcher, currentYear, weekBegin, weekEnd, divisionFactor;
            scope.days = ["M", "D", "W", "D", "V", "Z", "Z"], scope.months = [gettextCatalog.getString("jan"), gettextCatalog.getString("feb"), gettextCatalog.getString("maa"), gettextCatalog.getString("apr"), gettextCatalog.getString("mei"), gettextCatalog.getString("jun"), gettextCatalog.getString("jul"), gettextCatalog.getString("aug"), gettextCatalog.getString("sep"), gettextCatalog.getString("okt"), gettextCatalog.getString("nov"), gettextCatalog.getString("dec")], scope.hours = [], scope.weekDays = [], scope.current = {date: null, day: null, month: null, year: null, index: -1, offset: null}, scope.weekViewIsVisible = !0, scope.prevWeek = function () {
                scope.ngViewDate.addWeeks(-1), setCalendar(scope.ngViewDate), setWeekBeginAndEnd(scope.ngViewDate), void 0 !== scope.ngOnDateChange && scope.ngOnDateChange(scope.ngViewDate)
            }, scope.nextWeek = function () {
                scope.ngViewDate.addWeeks(1), setCalendar(scope.ngViewDate), setWeekBeginAndEnd(scope.ngViewDate), void 0 !== scope.ngOnDateChange && scope.ngOnDateChange(scope.ngViewDate)
            }, scope.prevYear = function () {
                currentYear -= 1, scope.yearModel = getYearModel(new Date(currentYear, 0, 1))
            }, scope.nextYear = function () {
                currentYear += 1, scope.yearModel = getYearModel(new Date(currentYear, 0, 1))
            }, scope.setWeek = function (date) {
                scope.ngViewDate = date;
                var tmp = new Date;
                scope.ngViewDate.setHours(tmp.getHours(), tmp.getMinutes()), setCalendar(scope.ngViewDate), setWeekBeginAndEnd(scope.ngViewDate), scope.weekViewIsVisible = !0, void 0 !== scope.ngOnDateChange && scope.ngOnDateChange(scope.ngViewDate)
            }, scope.toggleView = function () {
                scope.yearModel = getYearModel(scope.ngViewDate), scope.weekViewIsVisible = !scope.weekViewIsVisible
            }, watcher = scope.$watch("ngViewDate", function (newValue, oldValue) {
                void 0 !== newValue && newValue !== oldValue && (setCalendar(scope.ngViewDate), scope.events = parseEvents(scope.ngModel), scope.customEvents = parseEvents(scope.ngTempModel))
            }, !0), eventsWatcher = scope.$watch("ngModel", function (newValue, oldValue) {
                void 0 === newValue || angular.equals(newValue, oldValue) || (scope.events = parseEvents(scope.ngModel), scope.customEvents = parseEvents(scope.ngTempModel))
            }, !0), tmpEventsWatcher = scope.$watch("ngTempModel", function (newValue, oldValue) {
                void 0 === newValue || angular.equals(newValue, oldValue) || (scope.events = parseEvents(scope.ngModel), scope.customEvents = parseEvents(scope.ngTempModel))
            }, !0), scope.$on("$destroy", function () {
                watcher()
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("gate15EventTagsPicker", ["HelperService", "Gate15", "_", function (Helper, Gate15, _) {
        return{templateUrl: "/assets/aOS/js/common/views/gate15eventtagspicker.htm", restrict: "A", replace: !0, scope: {selectedValues: "=ngModel", ngChange: "&"}, link: function (scope) {
            scope.randomName = "gate15eventtagspicker" + Math.floor(999999999 * Math.random() + 1), Gate15.getAllTags(function (tagcategories) {
                scope.categories = _.map(tagcategories, function (category) {
                    return{name: category.translatedName, options: _.map(category.tags, function (tag) {
                        return{key: tag.translatedName.toLowerCase(), value: tag.translatedName}
                    })}
                })
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("gate15EventTypePicker", ["HelperService", "PlanonService", "_", function (Helper, PlanonService, _) {
        return{templateUrl: "/assets/aOS/js/common/views/gate15eventtypepicker.htm", restrict: "A", replace: !0, scope: {selectedValue: "=ngModel", idsAsValue: "@", ngChange: "=?", validation: "=?"}, link: function (scope) {
            scope.randomName = "gate15eventtypepicker" + Math.floor(999999999 * Math.random() + 1), scope.idsAsValue = scope.idsAsValue && (_.isString(scope.idsAsValue) && "true" === scope.idsAsValue.toLowerCase() || _.isBoolean(scope.idsAsValue) && scope.idsAsValue), PlanonService.getActivityTypesAsKeyValuePairs(scope.idsAsValue, function (keyValuePairs) {
                scope.options = keyValuePairs
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("gate15ProvisionsPicker", ["HelperService", "PlanonService", "_", function (Helper, PlanonService, _) {
        return{templateUrl: "/assets/aOS/js/common/views/gate15provisionspicker.htm", restrict: "A", replace: !0, scope: {selectedValues: "=ngModel", ngChange: "&", idsAsValue: "@"}, link: function (scope) {
            scope.randomName = "gate15provisionspicker" + Math.floor(999999999 * Math.random() + 1), scope.idsAsValue = scope.idsAsValue && (_.isString(scope.idsAsValue) && "true" === scope.idsAsValue.toLowerCase() || _.isBoolean(scope.idsAsValue) && scope.idsAsValue), PlanonService.getProvisionsAsKeyValuePairs(scope.idsAsValue, function (keyValuePairs) {
                scope.options = keyValuePairs
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("helpBubble", ["$rootScope", function () {
        return{templateUrl: "/assets/aOS/js/common/views/helpbubble.htm", restrict: "A", scope: {key: "=?", text: "=?"}, link: function () {
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("helpInline", ["UserService", function () {
        return{templateUrl: "/assets/aOS/js/common/views/helpinline.htm", restrict: "A", scope: {title: "=?", text: "=?"}, link: function () {
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("hoverClass", [function () {
        return{restrict: "A", scope: !1, link: function (scope, element, attrs) {
            var hoverClass = attrs.hoverClass, toggleClass = attrs.toggleClass, bindOnce = void 0 !== attrs.bindOnce && !!attrs.bindOnce;
            hoverClass && (element.on("mouseenter", function () {
                element.addClass(hoverClass), toggleClass && element.removeClass(toggleClass)
            }).on("mouseleave", function () {
                element.removeClass(hoverClass), toggleClass && element.addClass(toggleClass)
            }), bindOnce || (attrs.$observe("hoverClass", function (newValue) {
                element.hasClass(hoverClass) && (element.removeClass(hoverClass), element.addClass(newValue)), hoverClass = newValue
            }), attrs.$observe("toggleClass", function (newValue) {
                element.hasClass(toggleClass) && (element.removeClass(toggleClass), element.addClass(newValue)), toggleClass = newValue
            })))
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("icon", ["$timeout", function ($timeout) {
        return{templateUrl: "/assets/aOS/js/common/views/icon.htm", restrict: "A", link: function (scope, element, attrs) {
            void 0 !== attrs.spriteName && $timeout(function () {
                scope.id = attrs.id, scope.width = attrs.width, scope.height = attrs.height, scope.spriteName = attrs.spriteName
            }, 0)
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("img", ["_", "$http", "$templateCache", "$compile", "HelperService", "eventsService", "DialogService", "ImagePreloader", function (_, $http, $templateCache, $compile, Helper, Events, Dialog, ImagePreloader) {
        return{restrict: "E", controller: "aOS.controllers.ImgController", scope: {editable: "=?", source: "=?", preload: "=?", finishRender: "@?", conf: "=?", ngChange: "=?", id: "@?"}, link: function (scope, element, attrs) {
            function initialize() {
                (void 0 !== scope.preload || scope.preload) && preload(), (void 0 !== attrs.src && "" !== attrs.src || void 0 !== scope.source) && (scope.id = attrs.id, scope.src = void 0 !== scope.source ? scope.source : attrs.src, scope.alt = attrs.alt, scope.title = attrs.title)
            }

            function preload() {
                ImagePreloader.preloadImage(attrs.ngSrc).then(function () {
                    void 0 !== scope.finishRender && scope.finishRender.length > 0 && Events.publish(scope.finishRender)
                }, function () {
                }, function () {
                })
            }

            scope.state = {editing: !1}, scope.openEditor = function () {
                scope.state.editing = !0, Events.publish("photoeditor.open", scope.id), Events.subscribe("photoeditor.saved", function (url) {
                    scope.state.editing = !1, scope.src = url, scope.source = url, Events.unsubscribe("photoeditor.saved"), Events.unsubscribe("photoeditor.cancel"), Events.publish("photoeditor.close", scope.id), scope.ngChange && scope.ngChange(url)
                }, scope), Events.subscribe("photoeditor.cancel", function () {
                    scope.state.editing = !1, Events.unsubscribe("photoeditor.saved"), Events.unsubscribe("photoeditor.cancel"), Events.publish("photoeditor.close", scope.id)
                }, scope)
            };
            var watcher = scope.$watch("ngSrc", function (newValue, oldValue) {
                newValue !== oldValue && void 0 !== newValue && attrs.preload && preload()
            });
            scope.$on("$destroy", function () {
                watcher()
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("inputField", ["$timeout", "$compile", "$templateCache", "$http", "eventsService", "HelperService", "ValidationService", "_", function ($timeout, $compile, $templateCache, $http, Events, Helper, Validation, _) {
        return{restrict: "A", require: "?ngModel", scope: {autofocus: "=?", availableDates: "=?", datepickerMode: "@", delay: "@?", image: "=?", description: "@?", disabled: "=?", fieldStyle: "@?", forceError: "=?", id: "@", isBusy: "=?", isMini: "=?", isPrivate: "=?", label: "@?", layout: "=?", lazyload: "=?", loadingplaceholder: "@?", loadRemoteOptions: "=?", max: "@?", maxFileSize: "@?", min: "@?", multiple: "=?", name: "@", ngBlur: "=?", ngChange: "=?", ngClick: "=?", ngFocus: "=?", ngModel: "=?", ngOptions: "=?", ngDistrictCode: "=?", ngPicked: "=?", noResults: "@?", placeholder: "@?", readonly: "=?", remoteOptions: "=?", step: "@?", streetData: "=?", cityData: "=?", type: "@", tabindex: "@", url: "@?", validation: "=?", showPickedDate: "=?", timeStep: "=?"}, controller: "InputFieldController", link: function (scope, element, attrs, ctrl) {
            function checkLazyload() {
                void 0 === scope.ngModel ? scope.lazyload && (modelWatch = scope.$watch("ngModel", function () {
                    void 0 !== scope.ngModel && (initialize(), modelWatch())
                })) : initialize()
            }

            function initialize() {
                switch (scope.type) {
                    case"autocomplete":
                    case"checkboxlist":
                    case"checkboxtree":
                    case"country":
                    case"radio":
                    case"select":
                    case"selectize":
                    case"timepicker":
                        if (!scope.ngOptions) {
                            if (!scope.lazyload)return;
                            scope.state.printLoadingText = !0, placeholder = scope.placeholder || "Maak een keuze", scope.placeholder = scope.loadingPlaceholder || "Laden...", watchers.push(scope.$watch("ngOptions", function (newValue, oldValue) {
                                var valueChangedAndOptionsNotUndefinedAndOneOrMoreOptions = newValue !== oldValue && void 0 !== newValue && newValue.length > 0;
                                scope.state.printLoadingText = !valueChangedAndOptionsNotUndefinedAndOneOrMoreOptions, valueChangedAndOptionsNotUndefinedAndOneOrMoreOptions && (scope.placeholder = placeholder, validateInput(!1))
                            })), validateInput(!0)
                        }
                }
                var readOnlyOrDisabled = checkReadOnlyOrDisabled();
                readOnlyOrDisabled || (String(scope.ngModel).length > 0 ? (setDirty(element), validateInput(!0)) : validateInput(!1), checkParentForm(), checkAutofocus(), checkMatches())
            }

            function checkMatches() {
                var before = Helper.verifyNamespace("validation.date.before", scope) || null, after = Helper.verifyNamespace("validation.date.after", scope) || null, match = Helper.verifyNamespace("validation.match.element", scope) || null;
                (null !== before || null !== after || null !== match) && Events.subscribe("input.change", function (response) {
                    (response === before || response === after || response === match) && validateInput()
                })
            }

            function checkAutofocus() {
                scope.autofocus && "autocomplete" !== scope.type && $timeout(function () {
                    $("#" + scope.id).focus()
                }, 250), scope.availableDates && "date" === scope.type && $timeout(function () {
                    $("#" + scope.id).on("focus", function () {
                        scope.state.picker = !0, scrollToDatePicker()
                    })
                }, 250)
            }

            function checkReadOnlyOrDisabled() {
                return scope.readonly || scope.disabled ? !0 : !1
            }

            function checkParentForm() {
                Events.subscribe("form.submit", function (form) {
                    parentform = $("#" + scope.id).closest("form").attr("name") || "", form === parentform && (scope.state.hasBeenValid = !0, scope.state.dirty = !0, validateInput(!0, !0))
                }, scope)
            }

            function setDirty() {
                ctrl.$pristine = !1, ctrl.$dirty = !0, scope.state.dirty = !0, ("date" === scope.type || "datetime" === scope.type) && (scope.state.hasBeenValid = !0)
            }

            function toggleValue(value) {
                switch (scope.type) {
                    case"checkboxtree":
                        toggleTree(value);
                        break;
                    case"checkboxlist":
                        scope.ngModel.length > 0 && scope.ngModel.indexOf(value) > -1 ? _.remove(scope.ngModel, function (val) {
                            return val === value
                        }) : scope.ngModel.push(value)
                }
                validateInput()
            }

            function toggleTree(value) {
                var child, parent = _.find(scope.ngOptions, {key: value});
                if (void 0 === parent) {
                    if (parent = _.find(scope.ngOptions, function (opt) {
                        return child = _.find(opt.options, {key: value}), void 0 !== child
                    }), void 0 === child)return;
                    if (void 0 !== scope.ngModel[parent.key])if (parent.options.length === scope.ngModel[parent.key].length)_.remove(scope.ngModel[parent.key], function (child) {
                        return child === value
                    }); else {
                        var index = scope.ngModel[parent.key].indexOf(value);
                        index > -1 ? (scope.ngModel[parent.key].splice(index, 1), 0 === scope.ngModel[parent.key].length && delete scope.ngModel[parent.key]) : scope.ngModel[parent.key].push(value)
                    } else scope.ngModel[parent.key] = [], scope.ngModel[parent.key].push(value)
                } else void 0 === scope.ngModel[value] ? (scope.ngModel[value] = [], _.each(parent.options, function (child) {
                    scope.ngModel[value].push(child.key)
                })) : void 0 === parent.options || scope.ngModel[value].length === parent.options.length ? delete scope.ngModel[value] : (scope.ngModel[value].length = 0, _.each(parent.options, function (child) {
                    scope.ngModel[value].push(child.key)
                }))
            }

            function evaluateLength() {
                var result = Validation.evaluateLength(scope.ngModel, scope.validation.length);
                scope.remainingChars = result.details.remaining ? result.details.remaining : void 0, result.valid ? result.details.percent <= 20 ? result.details.percent <= 10 ? (scope.state.critical = !0, scope.state.warning = !1) : (scope.state.warning = !0, scope.state.critical = !1) : (scope.state.warning = !1, scope.state.critical = !1) : void 0 !== scope.validation.length.trimText && (scope.ngModel = scope.ngModel.slice(0, result.details.max), scope.remainingChars = 0)
            }

            function toggleDatepicker() {
                scope.pickerMode.picker && (scope.state.picker = !scope.state.picker, scope.state.picker === !0 && scrollToDatePicker())
            }

            function toggleTimepicker() {
                scope.state.timePicker = !scope.state.timePicker
            }

            function scrollToDatePicker() {
                $timeout(function () {
                    var datePickerElement = $("#" + scope.id).parent().parent().find(".datepicker"), destination = $("body").scrollTop() + datePickerElement.height();
                    $("html,body").animate({scrollTop: destination}, 250)
                }, 250)
            }

            function pickedDate(value) {
                scope.state.picker = !1, scope.ngModel = value, scope.onChange(), scope.$$phase || scope.$apply()
            }

            function pickedTime(value) {
                scope.ngModel = value, scope.onChange()
            }

            function validateInput(validationVisual, formSubmit) {
                scope.state.validating = !0;
                var isValid = {valid: !0};
                validationVisual = void 0 !== validationVisual ? validationVisual : !0, void 0 !== scope.validation && (isValid = Validation.validateInputfield(scope.validation, scope.ngModel, scope.type, scope.id)), availableMasks.indexOf(scope.type) > -1 && checkMask(scope.type, isValid, formSubmit), isValid.valid ? (ctrl.$setValidity("valid", !0), validationVisual && (scope.state.isValid = !0, scope.state.hasBeenValid = !0, scope.validation && (scope.validation.isValid = !0))) : (ctrl.$setValidity("valid", !1), validationVisual && (scope.state.isValid = !1, scope.errorMessage = isValid.message, scope.validation && (scope.validation.isValid = !1)))
            }

            function checkMask(type, isValid, formSubmit) {
                var errorMessage = "";
                switch (type) {
                    case"rijksregister":
                        isValid.valid = Validation.evaluateNationalNumber(scope.ngModel), errorMessage = "Voer een geldig rijksregisternummer in.";
                        break;
                    case"akaart":
                        isValid.valid = Validation.evaluateACard(scope.ngModel), errorMessage = "Voer een geldig a-kaartnummer in."
                }
                if (!formSubmit) {
                    if (scope.hasBeenValid || (isValid.valid = !scope.ngModel || scope.ngModel.length < 1 || isValid.valid, scope.state.isValid = isValid.valid), isValid.valid)return void(scope.hasBeenValid || (scope.state.dirty = !1));
                    isValid.message = errorMessage, scope.hasBeenValid || (isValid.valid = scope.validation && scope.validation.required && scope.ngModel.length < 1 ? !0 : isValid.valid, scope.state.isValid = isValid.valid)
                }
            }

            var timer, modelWatch, parentform = "", watchers = [], placeholder = "", availableMasks = ["rijksregister", "akaart"];
            Events.subscribe("form.submit.fieldErrors", function (fieldName) {
                fieldName === scope.id && (ctrl.$setValidity("valid", !1), scope.state.isValid = !1)
            }, scope), scope.state = {critical: !1, dirty: !1, hasBeenValid: !1, isValid: !1, picker: !1, printLoadingText: !1, timePicker: !1, validating: !1, warning: !1}, scope.validateInput = validateInput, scope.evaluateChecked = function (value) {
                var checked = Validation.evaluateCheckbox(value, scope.ngModel, scope.ngOptions, scope.type);
                return checked
            }, scope.evaluateTreeParent = function (value) {
                var checked = Validation.evaluateCheckboxTreeParent(value, scope.ngModel, scope.ngOptions);
                return checked
            }, scope.toggleDatepicker = toggleDatepicker, scope.toggleTimepicker = toggleTimepicker, scope.pickedDate = pickedDate, scope.pickedTime = pickedTime, scope.onChange = function (value) {
                switch (scope.type) {
                    case"checkbox":
                    case"checkboxlist":
                    case"checkboxtree":
                        toggleValue(value);
                        break;
                    case"date":
                    case"datetime":
                    case"timepicker":
                        scope.state.hasBeenValid = !0, validateInput();
                        break;
                    case"text":
                    case"textarea":
                        void 0 !== scope.validation && void 0 !== scope.validation.length && evaluateLength(), validateInput();
                        break;
                    default:
                        validateInput()
                }
                void 0 !== timer && $timeout.cancel(timer), value = void 0 !== value ? value : scope.ngModel, timer = $timeout(function () {
                    void 0 !== scope.ngChange && scope.ngChange(scope.name, value), Events.publish("input.change", scope.name)
                }, scope.delay)
            }, scope.onFocus = function (event) {
                void 0 !== scope.ngFocus && scope.ngFocus(event)
            }, scope.onClick = function (event) {
                void 0 !== scope.ngClick && scope.ngClick(event)
            }, scope.onBlur = function (event) {
                void 0 !== scope.ngBlur && scope.ngBlur(event)
            }, watchers.push(scope.$watch("disabled", function (newValue, oldValue) {
                var valueChangedAndNotReadOnlyAndNotDisabled = newValue !== oldValue && !scope.readonly && !newValue;
                valueChangedAndNotReadOnlyAndNotDisabled && checkParentForm()
            })), watchers.push(scope.$watch("readonly", function (newValue, oldValue) {
                newValue === oldValue || newValue || scope.disabled || checkParentForm()
            })), watchers.push(scope.$watch("validation", function (newValue, oldValue) {
                if (!angular.equals(newValue, oldValue) && !scope.disabled) {
                    if (scope.state.validating)return void(scope.state.validating = !1);
                    validateInput(!0), setDirty(element)
                }
            }, !0)), scope.$on("$destroy", function () {
                _.each(watchers, function (watcher) {
                    watcher()
                })
            }), checkLazyload()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("loading", ["_", "$http", "$templateCache", "$compile", "HelperService", "RenderService", function () {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/loading.htm", scope: {loadingStatus: "="}, link: function (scope) {
            function initialize() {
                scope.loadingComplete = !scope.loadingStatus
            }

            scope.loadingComplete = !1;
            scope.$watch("loadingStatus", function (newValue, oldValue) {
                void 0 !== newValue && newValue !== oldValue && initialize()
            });
            initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    var directiveId = "ngMatch";
    aOS.directive(directiveId, ["$parse", function () {
        return{require: "ngModel", link: function (scope, elm, attrs, ctrl) {
            var validator = function (value) {
                var temp = $("#" + attrs[directiveId]).val(), v = value === temp;
                return ctrl.$setValidity("match", v), value
            };
            ctrl.$parsers.unshift(validator), ctrl.$formatters.push(validator), attrs.$observe(directiveId, function () {
                validator(ctrl.$viewValue)
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("mediaEmbed", ["_", "$http", "$templateCache", "$compile", "$sce", function (_, $http, $templateCache, $compile) {
        return{restrict: "A", scope: {src: "=", caption: "@?"}, link: function (scope, element) {
            var loadTemplate = function () {
                {
                    var url = "/assets/aOS/js/common/views/mediaembed.htm";
                    $http.get(url, {cache: $templateCache}).success(function (html) {
                        element.replaceWith($compile(html)(scope))
                    })
                }
            }, parseUrl = function (url) {
                if (void 0 !== url && -1 === url.indexOf("embed") && -1 === url.indexOf("player")) {
                    var parsedUrl = "", type = "", id = "";
                    switch (url.indexOf("youtu") > -1 ? type = "yt" : url.indexOf("vimeo") > -1 && (type = "vim"), type) {
                        case"yt":
                            if (url.indexOf("youtube") > -1) {
                                id = url.split("v=")[1];
                                var ampersand = id.indexOf("&");
                                ampersand > -1 && (id = id.substring(0, ampersand))
                            } else id = url.split("/").pop();
                            parsedUrl = "https://www.youtube.com/embed/" + id + "?rel=0&showinfo=0&autohide=1";
                            break;
                        case"vim":
                            id = url.split("/").pop(), parsedUrl = "https://player.vimeo.com/video/" + id;
                            break;
                        default:
                            return url
                    }
                    return parsedUrl
                }
                if (url.indexOf("youtu") > -1) {
                    var rel = url.indexOf("rel") > -1, autohide = url.indexOf("autohide") > -1, showinfo = url.indexOf("showinfo") > -1, params = url.split("/").pop(), pars = params.indexOf("?") > -1;
                    pars || (url += "?"), autohide || showinfo || rel ? (rel || (url += "&rel=0"), autohide || (url += "&autohide=1"), showinfo || (url += "&showinfo=0")) : (pars && (url += "&"), url += "rel=0&autohide=1&showinfo=0")
                }
                return url
            }, setDefaults = function () {
                scope.embed = parseUrl(scope.src)
            };
            void 0 !== scope.src && scope.src.length > 0 && (loadTemplate(), setDefaults()), scope.$watch("src", function () {
                loadTemplate(), setDefaults()
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("mediaItem", [function () {
        return{templateUrl: "/assets/aOS/js/common/views/mediaitem.htm", restrict: "A", scope: {file: "=", showDescription: "=?", showCopy: "=?", finishRenderEvent: "@?", editable: "=?", aspectRatio: "@?", editorConf: "=?", id: "@?"}, link: function (scope) {
            function initialize() {
                switch ((void 0 === scope.file || $.isEmptyObject(scope.file)) && (scope.file = {src: "/assets/nieuws/gfx/placeholder.svg", alt: "", description: "", originalSource: "", type: "image"}), scope.file.type) {
                    case"external":
                        if (scope.file.src.indexOf("youtu") > -1 || scope.file.src.indexOf("vimeo") > -1)scope.mediaType = "embed"; else {
                            var extension = scope.file.src.split("/").pop().split(".").pop(), imageExtensions = ["jpg", "jpeg", "png", "gif"];
                            scope.mediaType = void 0 !== extension && imageExtensions.indexOf(extension) > -1 ? "image" : "file"
                        }
                        break;
                    default:
                        scope.mediaType = scope.file.type
                }
                scope.showDescription = void 0 !== scope.showDescription ? scope.showDescription : !0, scope.showCopy = void 0 !== scope.showCopy ? scope.showCopy : !0
            }

            scope.mediaType = "", initialize()
        }}
    }])
}(angular, antwerpOS, window.Modernizr), function (ng, aOS, enquire) {
    "use strict";
    aOS.directive("navigation", ["$rootScope", "$timeout", "$location", "$document", "$window", "_", function ($rootScope, $timeout, $location, $document, $window, _) {
        return{restrict: "A", scope: {ngLinks: "=", ngModel: "=", ngNavigate: "=?", orientation: "@?", redirect: "=?"}, templateUrl: "/assets/aOS/js/common/views/navigation.htm", link: function (scope, element) {
            function initialize() {
                return scope.ngModel ? scope.ngLinks ? (setActiveLink(scope.ngModel), scope.orientation && "h" !== scope.orientation ? scope.state.vertical = !0 : scope.state.horizontal = !0, enquire.register(enquireQuery, enquireQueryHandler, !0), scope.visibleLinks = scope.ngLinks, scope.state.horizontal && (scope.state.mobile || $timeout(showOrHideLinks)), checkAction(), modelWatcher = scope.$watch("ngModel", function (newValue, oldValue) {
                    void 0 === oldValue || angular.equals(newValue, oldValue) || (checkAction(), !scope.state.mobile && scope.state.horizontal && showOrHideLinks())
                }, !0), void(linksWatcher = scope.$watch("ngLinks", function (newValue, oldValue) {
                    if (void 0 !== oldValue && !angular.equals(newValue, oldValue)) {
                        checkAction(), !scope.state.mobile && scope.state.horizontal && showOrHideLinks();
                        var model = _.find(scope.ngLinks, {slug: scope.ngModel.slug});
                        model || setActiveLink()
                    }
                }, !0))) : void(linksWatcher = scope.$watch("ngLinks", function (newValue) {
                    void 0 !== newValue && (linksWatcher(), initialize())
                })) : (scope.state.loading = !0, void(modelWatcher = scope.$watch("ngModel", function (newValue) {
                    void 0 !== newValue && (modelWatcher(), initialize(), scope.state.loading = !1)
                })))
            }

            function checkAction() {
                var action = _.find(scope.ngLinks, function (link) {
                    return void 0 !== link.ngClick
                });
                scope.actionLink = action
            }

            function setActiveLink(link) {
                return link && link.slug ? (scope.ngModel = link, void(scope.state.horizontal && (showOrHideLinks(), scope.state.showHidden && scope.toggleHiddenLinks()))) : void(scope.ngModel = scope.ngLinks[0])
            }

            function calcItems(index) {
                var menu, action, actionIndex, actionWidth, menuWidth = 0, links = [], i = 0, l = 0, linkWidth = 0, combinedWidth = 100, count = 0;
                if (menu = $(element).find(".navigationDirective"), menuWidth = $(menu).outerWidth(), links = $(menu).find(".navLink"), l = links.length, action = _.find(scope.ngLinks, function (link, index) {
                    return void 0 !== link.ngClick ? (actionIndex = index, !0) : !1
                }), l !== scope.ngLinks.length)return null;
                for (actionWidth = $(links[actionIndex]).outerWidth(), combinedWidth += actionWidth, i = 0; l > i; i += 1)if (i !== actionIndex) {
                    if (index && index > i && (linkWidth = $(links[index]).outerWidth(), 0 > menuWidth - (combinedWidth + linkWidth))) {
                        count = i - 1;
                        break
                    }
                    if (linkWidth = $(links[i]).outerWidth(), 0 > menuWidth - (combinedWidth + linkWidth)) {
                        count = i - 1;
                        break
                    }
                    count = i, combinedWidth += linkWidth
                }
                return count === l - 1 && (count = l), count
            }

            function showOrHideLinks() {
                var modelIndex, count, visibleLinks, hiddenLinks, model, hiddenIndex;
                return scope.visibleLinks = scope.ngLinks, scope.hiddenLinks.length = 0, scope.ngModel.slug && (modelIndex = scope.ngModel.slug ? _.findIndex(scope.ngLinks, {slug: scope.ngModel.slug}) : -1), count = calcItems(modelIndex), null === count ? void $timeout(function () {
                    showOrHideLinks()
                }) : (visibleLinks = scope.ngLinks.slice(0, count), hiddenLinks = scope.ngLinks.slice(count, scope.ngLinks.length), modelIndex >= count && (hiddenIndex = modelIndex - visibleLinks.length, model = _.cloneDeep(hiddenLinks[hiddenIndex]), hiddenLinks.splice(hiddenIndex, 1), visibleLinks.push(model)), scope.visibleLinks = visibleLinks, void(scope.hiddenLinks = hiddenLinks))
            }

            function toggleResizeWatcher(value) {
                value ? $($window).on("resize", function () {
                    resizeTimer && $timeout.cancel(resizeTimer), resizeTimer = $timeout(function () {
                        showOrHideLinks()
                    }, 100)
                }) : $($window).off("resize")
            }

            var modelWatcher, resizeTimer, linksWatcher = function () {
            }, enquireQuery = "screen and (min-width:640px)", enquireQueryHandler = {match: function () {
                $timeout(function () {
                    scope.state.mobile = !1, scope.state.collapsed = !1, scope.state.horizontal && (showOrHideLinks(), toggleResizeWatcher(!0))
                })
            }, unmatch: function () {
                $timeout(function () {
                    scope.state.mobile = !0, scope.state.collapsed = !0, scope.state.horizontal && (scope.visibleLinks = scope.ngLinks, scope.hiddenLinks.length = 0, toggleResizeWatcher(!1))
                })
            }};
            scope.state = {collapsed: !0, mobile: !0, horizontal: !1, vertical: !1, showHidden: !1, actionLink: !1}, scope.hiddenLinks = [], scope.visibleLinks = [], scope.navigate = function (slug, e) {
                e && (e.preventDefault(), e.stopPropagation());
                var link = _.find(scope.ngLinks, {slug: slug});
                if (link) {
                    if (link.ngClick)return void link.ngClick();
                    setActiveLink(link), scope.state.mobile && scope.collapseToggle(), scope.ngNavigate && $timeout(function () {
                        scope.ngNavigate(link)
                    }), (void 0 === scope.redirect || scope.redirect) && $location.path("/" + $rootScope.currentLanguage + link.url)
                }
            }, scope.collapseToggle = function (e) {
                return scope.state.collapsed = !scope.state.collapsed, e ? (e.preventDefault(), e.stopPropagation(), void(scope.state.collapsed ? $($document).off("click") : $($document).on("click", function (e) {
                    var id = "navDir-" + scope.$id;
                    e.target.id === id || $(e.target).parents("#" + id).size() || $timeout(function () {
                        scope.collapseToggle()
                    })
                }))) : void $($document).off("click")
            }, scope.activeFilter = function (link) {
                return scope.state.mobile ? link && link.slug !== scope.ngModel.slug : !0
            }, scope.actionFilter = function (link) {
                return!link.ngClick
            }, scope.toggleHiddenLinks = function (e) {
                return scope.state.showHidden = !scope.state.showHidden, e ? (e.preventDefault(), e.stopPropagation(), void(scope.state.showHidden ? $($document).on("click", function (e) {
                    var id = "hiddenLinks-" + scope.$id;
                    e.target.id === id || $(e.target).parents("#" + id).size() || $timeout(function () {
                        scope.toggleHiddenLinks()
                    })
                }) : $($document).off("click"))) : void $($document).off("click")
            }, scope.$on("$destroy", function () {
                $timeout.cancel(resizeTimer), modelWatcher(), linksWatcher(), $($document).off("click")
            }), initialize()
        }}
    }])
}(angular, antwerpOS, window.enquire), function (ng, aOS) {
    "use strict";
    aOS.directive("newsCols", ["$rootScope", function () {
        return function (scope, element, attrs) {
            var desktopOneThird, desktopOneThirdClass, desktopTwoThirds, desktopTwoThirdsClass, tabletOneHalf, tabletOneHalfClass, columns = attrs.columns || 3;
            switch (columns) {
                case"2":
                    desktopOneThirdClass = "desktop--one-half", desktopTwoThirdsClass = "desktop--one-whole", tabletOneHalfClass = "tablet--one-half";
                    break;
                default:
                    desktopOneThirdClass = "desktop--one-third", desktopTwoThirdsClass = "desktop--two-thirds", tabletOneHalfClass = "tablet--one-half"
            }
            desktopOneThird = 1 === scope.article.type.cols, desktopTwoThirds = 2 === scope.article.type.cols, tabletOneHalf = desktopOneThird, element.toggleClass(desktopOneThirdClass, desktopOneThird), element.toggleClass(desktopTwoThirdsClass, desktopTwoThirds), element.toggleClass(tabletOneHalfClass, tabletOneHalf)
        }
    }])
}(angular, antwerpOS), function (ng, aOS, Packery, getSize, enquire) {
    "use strict";
    aOS.directive("packery", ["_", "$timeout", "HelperService", "eventsService", function (_, $timeout, Helper, eventsService) {
        return{restrict: "A", scope: {ngModel: "=", feedCols: "@?", feedMeta: "=", renderType: "@?", customConfig: "=?", loadingContent: "=?"}, templateUrl: "/assets/aOS/js/common/views/packery.htm", transclude: !0, replace: !0, link: function (scope, element, attrs) {
            var packeryInstance, rerenderTimer, feedLayoutEvent, feedDataEvent, packeryLibraryUrl = "/assets/aOS/js/vendor/_packery/packery.pkgd.min.js", getSizeLibraryUrl = "/assets/aOS/js/vendor/_getsize/get-size.js", getStylePropertyLibraryUrl = "/assets/aOS/js/vendor/_getstyleproperty/get-style-property.js", jqueryActualLibraryUrl = "/assets/aOS/js/vendor/_jqueryactual/jquery.actual.min.js", containerId = "#feed-container", container = element[0].querySelector(containerId), itemSelector = ".feed-item", packeryIsAllowed = !1, loadMoreTriggered = !1, options = (void 0 !== attrs.allowItemExpansion, {});
            void 0 === scope.customConfig && (scope.customConfig = {}), options.transitionDuration = scope.customConfig.transitionDuration || "0.4s", options.itemSelector = scope.customConfig.itemSelector || itemSelector, options.layoutMode = scope.customConfig.layoutMode || "masonry", options.sortBy = scope.customConfig.sortBy || "original-order";
            var enquireQueryTablet = "screen and (min-width:640px)", enquireQueryTabletHandler = {setup: function () {
                packeryIsAllowed = enquire.queries[enquireQueryTablet].mql.matches, scope.feedVisible = !enquire.queries[enquireQueryTablet].mql.matches
            }, match: function () {
                packeryIsAllowed = !0, scope.feedVisible = !1, scope.renderFinished && scope.layoutFeed()
            }, unmatch: function () {
                packeryIsAllowed = !1, scope.feedVisible = !0, scope.renderFinished && destroyGrid()
            }};
            scope.itemsDisplayedInList = scope.ngModel.length, scope.feedVisible = !1, scope.hasMore = !1, scope.renderFinished = !1, scope.loadingContent = !0;
            var initializeGrid = function () {
                packeryInstance = new Packery(container, options), scope.layoutFeed()
            }, destroyGrid = function () {
                void 0 !== packeryInstance && (packeryInstance.unbindResize(), $timeout(function () {
                    void 0 !== packeryInstance && (packeryInstance.destroy(), packeryInstance = void 0), eventsService.unsubscribe(feedLayoutEvent, feedDataEvent)
                }, 100))
            }, loadPackeryLibrary = function (fn) {
                "undefined" == typeof Packery ? Helper.includeJavaScript([getStylePropertyLibraryUrl, getSizeLibraryUrl, jqueryActualLibraryUrl, packeryLibraryUrl], function () {
                    Packery = window.Packery, getSize = window.getSize, fn && fn()
                }) : (Packery = window.Packery, fn && fn())
            }, onRenderFinished = function () {
                scope.renderFinished = !0, scope.layoutFeed(), loadMoreTriggered = !1
            }, initialize = function () {
                loadPackeryLibrary(function () {
                    void 0 !== scope.ngModel && scope.ngModel.length > 0 && onRenderFinished()
                }), enquire.register(enquireQueryTablet, enquireQueryTabletHandler, !0), feedLayoutEvent = eventsService.subscribe("feed.layout", function () {
                    onRenderFinished()
                }, scope)
            };
            scope.layoutFeed = function () {
                void 0 !== rerenderTimer && $timeout.cancel(rerenderTimer), rerenderTimer = $timeout(function () {
                    0 === scope.itemsDisplayedInList && (scope.itemsDisplayedInList = scope.ngModel.length), void 0 !== Packery && packeryIsAllowed && (void 0 !== packeryInstance ? (packeryInstance.reloadItems(), packeryInstance.stamp($(".feed-stamp")), packeryInstance.layout(), $timeout(function () {
                        scope.feedVisible = !0
                    }, 0)) : initializeGrid()), scope.loadingContent = !1
                }, 300)
            }, scope.$on("$destroy", function () {
                enquire.unregister(enquireQueryTablet, enquireQueryTabletHandler), destroyGrid()
            }), scope.$watch("ngModel", function (newValue, oldValue) {
                angular.equals(newValue, oldValue) || scope.layoutFeed()
            }, !0), $(window).scroll(function () {
                $(window).scrollTop() + $(window).height() === $(document).height() && (loadMoreTriggered || (loadMoreTriggered = !0, $timeout(function () {
                }, 500)))
            }), initialize()
        }}
    }])
}(angular, antwerpOS, window.Packery, window.getSize, window.enquire), function (ng, aOS) {
    "use strict";
    aOS.directive("panel", [function () {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/panel.htm", transclude: !0, controller: "aOS.controllers.PanelController", scope: !1, link: function (scope, element, attrs) {
            function initialize() {
                return(state = scope[attrs.state]) ? (getPanels(state.current), void(watcher = scope.$watch(attrs.state + ".current", function (newValue, oldValue) {
                    angular.equals(newValue, oldValue) || getPanels(newValue)
                }, !0))) : void(watcher = scope.$watch(attrs.state, function (newValue, oldValue) {
                    angular.equals(newValue, oldValue) || (initialize(), watcher())
                }, !0))
            }

            function getPanels(currState) {
                if (scope.single = currState instanceof Array ? !1 : !0, scope.single)scope.panel = state.states[currState]; else {
                    var i = 0, l = currState.length, s = "", panel = {};
                    for (scope.panels.length = 0, i = 0; l > i; i += 1)s = currState[i], panel = state.states[s], panel && scope.panels.push(panel)
                }
            }

            var watcher, state;
            scope.panel = {}, scope.panels = [], scope.single = !0, initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("panelContent", [function () {
        return{restrict: "A", require: "^panel", scope: !1, link: function (scope, element, attrs, controller) {
            controller.renderTemplate(scope, function (dom) {
                element.append(dom)
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS, Caman) {
    "use strict";
    aOS.directive("photoEditor", ["_", "HelperService", "eventsService", "UploadService", "$window", "$timeout", "$http", function (_, Helper, Events, Upload, $window, $timeout) {
        return{templateUrl: "/assets/aOS/js/common/views/photoeditor.htm", restrict: "A", scope: {id: "@", title: "@", src: "=", alt: "@", conf: "="}, link: function (scope) {
            function initialize() {
                loadCamanJS()
            }

            function loadCamanJS() {
                "undefined" == typeof Caman ? Helper.includeJavaScript([jcropLibraryUrl, camanjsLibraryUrl], function () {
                    Caman = window.Caman, Caman.remoteProxy = "/assets/aOS/js/vendor/_camanjs/proxies/caman_proxy.php", openPhotoEditor()
                }) : openPhotoEditor()
            }

            function openPhotoEditor() {
                if (camanjs = Caman("#caman-js-editor", scope.src), camanjs.renderBlocks = 8, resizeEditor(), Caman.Event.listen("processStart", function () {
                }), Caman.Event.listen(camanjs, "processComplete", function () {
                }), Caman.Event.listen("renderFinished", function () {
                    scope.state.rendering = !1
                }), Caman.Event.listen(camanjs, "blockStarted", function () {
                }), Caman.Event.listen(camanjs, "blockFinished", function () {
                }), Upload.getMimeType(scope.src), jCroptions = {onSelect: saveCoordinates}, scope.conf) {
                    if (scope.conf.aspectRatio) {
                        var parts = scope.conf.aspectRatio.split("/");
                        1 === parts.length ? jCroptions.aspectRatio = scope.conf.aspectRatio : 2 === parts.length && (jCroptions.aspectRatio = parseInt(parts[0], 10) / parseInt(parts[1]))
                    }
                    scope.conf.minSize && (jCroptions.minSize = scope.conf.minSize), scope.conf.maxSize && (jCroptions.maxSize = scope.conf.maxSize)
                }
            }

            function resizeEditor(height, width) {
                var editor = $("#caman-js-editor");
                dimensions = {width: width || editor.width(), height: height || editor.height()}, camanjs.resize(dimensions)
            }

            function saveCoordinates(c) {
                jCropCoords = c
            }

            if (!(void 0 === scope.src || scope.src.length < 1)) {
                var jCrop, jCropCoords, jCroptions, camanjs, windowResizeTimer, dimensions, camanjsLibraryUrl = "/assets/aOS/js/vendor/_camanjs/dist/caman.full.min.js", jcropLibraryUrl = "/assets/aOS/js/vendor/_jcrop/js/jquery.Jcrop.min.js";
                scope.filters = {brightness: 50, contrast: 50}, scope.state = {rendering: !1, cropping: !1, saving: !1}, scope.cropImage = function () {
                    resizeEditor(), scope.state.cropping = !scope.state.cropping, scope.state.cropping ? (jCrop || $("#caman-js-editor").Jcrop(jCroptions, function () {
                        jCrop = this
                    }), jCrop.enable()) : jCrop && (jCrop.release(), jCrop.disable())
                }, scope.saveImage = function () {
                    scope.state.saving = !0, jCrop && (jCrop.release(), jCrop.disable()), jCropCoords || (jCropCoords = {w: null, h: null, x: null, y: null});
                    var params = {width: jCropCoords.w, height: jCropCoords.h, x: jCropCoords.x, y: jCropCoords.y, canvasWidth: dimensions.width};
                    Upload.imageManipulation(scope.src, params, function (response) {
                        Events.publish("photoeditor.saved", response.url), scope.state.saving = !1
                    })
                }, scope.cancelChanges = function () {
                    Events.publish("photoeditor.cancel")
                }, $($window).on("resize", function () {
                    windowResizeTimer && $timeout.cancel(windowResizeTimer), windowResizeTimer = $timeout(function () {
                        resizeEditor()
                    }, 150)
                }), initialize()
            }
        }}
    }])
}(angular, antwerpOS, window.Caman), function (ng, aOS) {
    "use strict";
    aOS.directive("poiContent", ["PoiService", function (Poi) {
        function link(scope) {
            function onContentFetched(error, apps) {
                return error ? (scope.state = "noResultsFound", void(scope.apps = [])) : (scope.state = "resultsFound", void(scope.apps = apps))
            }

            scope.state = "init", scope.expanded = null, scope.$watch("poiIds", function () {
                scope.state = "fetching", Poi.fetchContentForPoiIds(scope.poiIds, onContentFetched)
            }, !0)
        }

        return{restrict: "EA", scope: {poiIds: "="}, templateUrl: "/assets/aOS/js/common/views/poi-content.htm", link: link}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("range", ["$timeout", function ($timeout) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/range.htm", scope: {id: "@", min: "@", max: "@", step: "@", ngModel: "=", disabled: "=?", ngChange: "=?", hideLabels: "=?"}, link: function (scope) {
            function initialize() {
                if (void 0 !== scope.id) {
                    if (void 0 === scope.ngModel)return void(watcher = scope.$watch("ngModel", function (newValue) {
                        void 0 !== newValue && (initialize(), watcher())
                    }));
                    scope.min = void 0 !== scope.min ? parseInt(scope.min, 10) : 0, scope.max = void 0 !== scope.max ? parseInt(scope.max, 10) : 100, scope.ngModel = scope.ngModel instanceof Array ? 2 !== scope.ngModel.length ? [scope.min, scope.max] : scope.ngModel : scope.ngModel.toString().length > 0 ? parseInt(scope.ngModel, 10) : scope.max / 2, scope.step = void 0 !== scope.step ? scope.step : 1, scope.disabled = void 0 !== scope.disabled ? scope.disabled : !1, $timeout(function () {
                        var slider = $("#" + scope.id);
                        slider.slider({animate: "fast", disabled: scope.disabled, min: scope.min, max: scope.max, step: 1, start: function () {
                            scope.state.sliding = !0
                        }, slide: function (event, ui) {
                            if (scope.ngModel instanceof Array) {
                                for (var i = 0; i < ui.values.length; i += 1)"number" == typeof ui.values[i] && (scope.ngModel[i] = ui.values[i]);
                                slideLabels(ui.values)
                            } else scope.ngModel = ui.value, slideLabels(ui.value);
                            scope.$$phase || scope.$apply()
                        }, stop: function () {
                            scope.state.sliding = !1, scope.ngChange && scope.ngChange()
                        }}), scope.ngModel instanceof Array ? (slider.slider("option", "values", scope.ngModel), slider.slider("option", "range", !0)) : slider.slider("option", "value", scope.ngModel), slideLabels(scope.ngModel)
                    }, 0)
                }
            }

            function slideLabels(value) {
                var left = 0, right = 0;
                value instanceof Array ? (left = Math.round(parseInt(value[0], 10) / scope.max * 100), scope.state.left = left, right = Math.round(parseInt(value[1], 10) / scope.max * 100), scope.state.right = right) : (left = Math.round(parseInt(value, 10) / scope.max * 100), scope.state.left = left)
            }

            var watcher;
            scope.state = {sliding: !1, left: 0, right: 100}, initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("rating", ["_", "HelperService", function (_, Helper) {
        return{templateUrl: "/assets/aOS/js/common/views/rating.htm", restrict: "A", priority: 100, scope: {ngModel: "=", rating: "=", stars: "=", editable: "="}, link: function (scope, element) {
            var updateStars, star, i, editable = scope.editable || !1, rating = scope.rating || 0, stars = scope.stars || 5, starsList = [];
            for (rating = Helper.parseInt(rating), stars = Helper.parseInt(stars), updateStars = function (val) {
                _.each(scope.starsList, function (s) {
                    s.filled = s.nr <= val
                })
            }, scope.setRating = function (val) {
                scope.ngModel = val
            }, scope.$watch("ngModel", function (newValue) {
                updateStars(newValue)
            }), i = 0; stars > i; i += 1)star = {nr: i + 1, filled: rating > i}, starsList.push(star);
            scope.starsList = starsList, scope.interactive = editable, editable && (element.on("mouseenter", ".star", function () {
                var el = $(this), prev = el.parents("li:first").prevAll();
                el.add(prev.find(".star")).addClass("hover")
            }), element.on("mouseleave", ".star", function () {
                $(this).parents("ul:first").find(".hover").removeClass("hover")
            }))
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("renderer", ["_", "$http", "$rootScope", "$templateCache", "$compile", "HelperService", "RenderService", "eventsService", function (_, $http, $rootScope, $templateCache, $compile, Helper, Renderer, Events) {
        return{restrict: "A", scope: {ngModel: "=?", type: "@", viewMode: "@", replaceHtml: "=?", renderType: "@?", onFinishRender: "@?", customConfig: "=?"}, link: function (scope, element, attrs) {
            function initialize() {
                renderModel = scope.ngModel, renderModel && (scope.user = $rootScope.user, (void 0 === scope.renderType || scope.renderType.length < 1) && (scope.renderType = void 0 === renderModel.typeName ? attrs.type : angular.lowercase(renderModel.typeName)), scope.renderViewMode = void 0 !== renderModel.viewMode ? renderModel.viewMode : scope.viewMode, replaceHtml = void 0 !== scope.replaceHtml ? getBool(scope.replaceHtml) : !0, determineTemplateOrder(), renderTemplateName = scope.renderType + "-" + scope.renderViewMode + ".htm", renderTemplateUrl = templateUrl + "/" + scope.renderType + "/" + renderTemplateName, parseObjectAndLoadTemplate())
            }

            function determineTemplateOrder() {
                renderTemplates = [templateUrl + "/" + scope.renderType + "/" + scope.renderType + "-" + scope.renderViewMode + ".htm", templateUrl + "/" + scope.renderType + "/" + scope.renderViewMode + ".htm", templateUrl + "/" + scope.renderType + "/" + scope.renderType + ".htm", templateUrl + "/" + scope.renderViewMode + ".htm"]
            }

            function loadTemplate() {
                var html = $templateCache.get(renderTemplates[0]);
                if (void 0 === html) {
                    if (0 === renderTemplates.length)throw new Error("No template was found to render. Did you run the Grunt Task?");
                    renderTemplates.shift(), loadTemplate()
                } else replaceHtml ? element.replaceWith($compile(html)(scope)) : element.html($compile(html)(scope))
            }

            function getBool(val) {
                return void 0 !== val ? !(!+val && !String(val).toLowerCase().replace(!1, "")) : void 0
            }

            function parseObjectAndLoadTemplate() {
                scope.renderableObject = Renderer.renderItem(scope.renderType, renderModel, scope.renderViewMode, scope.customConfig), void 0 !== scope.renderableObject && loadTemplate()
            }

            var renderModel, renderTemplateName, renderTemplateUrl, replaceHtml, templateUrl = "assets/aOS/js/common/views/content-types", renderTemplates = [];
            scope.renderableObject = {}, scope.renderViewMode = "", scope.rootElement = element[0].localName, scope.filterInputFields = function (field) {
                return void 0 !== field.spec.attributes.display && "submit" !== field.spec.attributes.display && "hidden" !== field.spec.attributes.display
            }, scope.publishEvent = function (event, value) {
                Events.publish(event, value)
            };
            var watcher = scope.$watch("ngModel", function (newVal, oldVal) {
                angular.equals(newVal, oldVal) || initialize()
            }, !0);
            if (scope.$on("$destroy", function () {
                watcher()
            }), void 0 === scope.ngModel)var unregister = scope.$watch("ngModel", function (newVal) {
                void 0 !== newVal && (initialize(), unregister())
            }); else initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("scroll", ["$window", function ($window) {
        return{restrict: "A", scope: {}, link: function (scope, element) {
            angular.element($window).bind("scroll", function () {
                var theOffset = 0;
                this.pageYOffset > theOffset ? element.addClass("scroll") : element.removeClass("scroll"), scope.$apply()
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("scrolldiv", ["$timeout", function ($timeout) {
        return{restrict: "A", scope: {offset: "="}, link: function (scope, elm, attrs) {
            var selector = attrs.selector;
            $timeout(function () {
                $(selector).scrollTop(scope.offset)
            }, 50)
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("scrollTo", [function () {
        return{restrict: "A", scope: {speed: "=?"}, link: function (scope, elm, attrs) {
            elm.on("click", function () {
                var selector = attrs.scrollTo;
                selector = selector.replace(/(:|\.|\[|\])/g, "\\$1");
                var heightOfHeader = $(".header").height(), adjustOffset = $(selector).offset().top - heightOfHeader - 20, speed = scope.speed || $(selector).offset().top / 4;
                $("body, html").animate({scrollTop: adjustOffset}, speed)
            })
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("selectize", ["$timeout", "_", function ($timeout, _) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/selectize.htm", require: "ngModel", scope: {ngModel: "=", ngChoices: "=", placeholder: "@?", loadingPlaceholder: "@?", multiple: "=?", lazyload: "=?", remoteOptions: "=?", loadOptions: "=?", ngChange: "=?", max: "@?", disabled: "=?", style: "@?", layout: "=?"}, link: function (scope, element) {
            function initialize() {
                if (placeholder = scope.placeholder || "Maak een keuze", loadingPlaceholder = void 0 !== scope.loadingPlaceholder && scope.loadingPlaceholder.length > 0 ? scope.loadingPlaceholder : "Laden...", void 0 === scope.ngModel) {
                    if (!scope.lazyload)return;
                    $timeout(function () {
                        scope.state.loading = !0
                    }), lazyWatcher = scope.$watch("ngModel", function (newValue) {
                        newValue && ($timeout(function () {
                            scope.state.loading = !1
                        }), initialize(), lazyWatcher())
                    }, !0)
                }
                if (!scope.ngChoices) {
                    if (!scope.lazyload)return;
                    $timeout(function () {
                        scope.state.loading = !0
                    }), lazyWatcher = scope.$watch("ngChoices", function (newValue) {
                        newValue && ($timeout(function () {
                            scope.state.loading = !1
                        }), initialize(), lazyWatcher())
                    })
                }
                $timeout(function () {
                    scope.state.watching || ($timeout(function () {
                        initSelectize()
                    }), watchers.push(scope.$watch("ngModel", function (newValue, oldValue) {
                        state.inputChange || angular.equals(newValue, oldValue) || (updateSelectedItems(), newValue || scope.clearSelection())
                    }, !0)), watchers.push(scope.$watch("ngChoices", function (newValue, oldValue) {
                        angular.equals(newValue, oldValue) || refreshOptions(newValue)
                    }, !0)), scope.state.watching = !0)
                })
            }

            function initSelectize() {
                var options = getOptions(), elm = $(element).find(".selectize-" + scope.$id);
                elm[0] && ($select = elm.selectize(options), selectize = $select[0].selectize, (scope.state.loading || scope.disabled) && selectize.disable(), updateSelectedItems(!0), selectize.on("load", function (data) {
                    $timeout(function () {
                        scope.ngChoices = data
                    })
                }), selectize.on("change", function (data) {
                    scope.state.hasData = data ? !0 : !1
                }), element.on("keydown", function (event) {
                    if (selectize.isFocused && (40 === event.which || 38 === event.which)) {
                        var dropdown = $("#selectize-" + scope.$id + " .selectize-dropdown");
                        dropdown.scrollTop(dropdown.scrollTop() + $(dropdown).find(".option.active").position().top)
                    }
                }), selectize.on("item_remove", function (data) {
                    $timeout(function () {
                        _.remove(scope.ngModel, function (item) {
                            return item === data
                        })
                    })
                }), element.on("click", ".delete", function (event) {
                    var value = $(event.target).data();
                    selectize.removeItem(value.value), element.find("input").focus(), $timeout(function () {
                        _.remove(scope.ngModel, function (item) {
                            return item === value.value
                        })
                    })
                }))
            }

            function updateSelectedItems(create) {
                var choice;
                if (scope.ngModel instanceof Array)_.each(scope.ngModel, function (value) {
                    if (choice = _.find(scope.ngChoices, {key: value}), !choice) {
                        if (!create)return;
                        selectize.addOption({key: value, value: value})
                    }
                    selectize.addItem(value)
                }); else if (String(scope.ngModel).length > 0) {
                    if (choice = _.find(scope.ngChoices, {key: String(scope.ngModel)}), !choice) {
                        if (!create)return;
                        selectize.addOption({key: String(scope.ngModel), value: String(scope.ngModel)})
                    }
                    selectize.addItem(String(scope.ngModel))
                }
            }

            function getOptions() {
                var opts = {};
                if (scope.multiple && (opts.maxItems = scope.max ? scope.max : null), opts.options = scope.ngChoices, opts.render = {option: function (data, escape) {
                    return'<div class="option" data-value="' + escape(data.key) + '">' + escape(data.value) + "</div>"
                }, item: function (data, escape) {
                    return'<span class="item" data-value="' + escape(data.key) + '"><span class="value">' + escape(data.value) + '<span class="delete" data-value="' + escape(data.key) + '">&#215;</span></span></span>'
                }}, scope.remoteOptions) {
                    var remoteLoad = scope.loadOptions || function (query, callback) {
                        return callback()
                    };
                    opts.load = remoteLoad
                }
                return opts.onItemAdd = onSelectItem, opts.sortField = "value", opts.labelField = "key", opts.valueField = "key", opts.searchField = ["value"], opts.dataAttr = "data-value", opts.placeholder = scope.state.loading ? loadingPlaceholder : placeholder, opts.plugins = ["fast_click"], opts
            }

            function refreshOptions(options) {
                var exists, remaining = [];
                return selectize.clearOptions(), _.each(options, function (option) {
                    selectize.addOption(option)
                }), void 0 === scope.ngModel ? void(scope.state.loading = !1) : (scope.ngModel instanceof Array ? (_.remove(scope.ngModel, function (item) {
                    return(exists = _.find(scope.ngChoices, {key: item})) ? (remaining.push(exists), !1) : !0
                }), selectize.refreshOptions(!1), remaining.length > 0 && _.each(remaining, function (item) {
                    selectize.addItem(item.key)
                })) : (selectize.refreshOptions(!1), exists = _.find(scope.ngChoices, {key: String(scope.ngModel)}), exists && selectize.addItem(String(scope.ngModel))), void(scope.state.loading = !1))
            }

            function onSelectItem(item) {
                state.inputChange = !0;
                var choice = _.find(scope.ngChoices, function (choice) {
                    return choice.key.toString() === item.toString()
                });
                void 0 !== choice && $timeout(function () {
                    if (scope.ngModel instanceof Array) {
                        var exists = _.find(scope.ngModel, item);
                        exists || scope.ngModel.push(choice.key)
                    } else scope.ngModel = choice.key;
                    $timeout(function () {
                        scope.ngChange && (scope.ngChange(choice.key), selectize.blur())
                    }), state.inputChange = !1
                })
            }

            var $select, selectize, lazyWatcher, watchers = [], state = {inputChange: !1}, placeholder = "", loadingPlaceholder = "";
            scope.state = {loading: !1, watching: !1, hasData: !1}, scope.clearSelection = function () {
                selectize.clear(), scope.ngModel = "string" == typeof scope.ngModel ? "" : [], $timeout(function () {
                    scope.ngChange && scope.ngChange()
                })
            }, watchers.push(scope.$watch("state.loading", function (newValue, oldValue) {
                angular.equals(newValue, oldValue) || (newValue ? selectize && (selectize.settings.placeholder = loadingPlaceholder, selectize.updatePlaceholder(), selectize.disable()) : selectize && (selectize.settings.placeholder = placeholder, selectize.updatePlaceholder(), selectize.enable()))
            })), watchers.push(scope.$watch("disabled", function (newValue, oldValue) {
                newValue !== oldValue && (newValue ? selectize && selectize.disable() : selectize && selectize.enable())
            })), scope.$on("$destroy", function () {
                _.each(watchers, function (watcher) {
                    watcher()
                })
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("shareButtons", ["_", function (_) {
        return{templateUrl: "/assets/aOS/js/common/views/sharebuttons.htm", restrict: "A", scope: {url: "@", sharetitle: "@?", picture: "@?", shareTo: "@?"}, link: function (scope) {
            function initialize() {
                if (scope.sharetitle = scope.sharetitle || scope.url.split("/").pop(), scope.picture = scope.picture || "", shareUrl = getUrl(), void 0 !== scope.shareTo) {
                    scope.channels = {};
                    var channels = scope.shareTo.split("-").toLowerCase();
                    _.each(channels, function (channel) {
                        scope.channels[channel] = !0
                    })
                }
            }

            function getUrl() {
                var checkTrailingSlash = function (string) {
                    var str = string;
                    return"/" === str.substring(-1) && (str = string.substring(0, string.length - 1)), str
                }, url = checkTrailingSlash(scope.url);
                return url = domain + url
            }

            function facebookUrl() {
                var redirectUrl = domain + "/assets/aOS/js/os/views/redirect.htm", url = "http://www.facebook.com/dialog/feed?app_id=" + fbAppId + "&link=" + shareUrl + "&picture=" + scope.picture + "&name=" + encodeURIComponent(scope.sharetitle) + "&caption=" + escape("A-stad nieuws") + "&redirect_uri=" + redirectUrl + "&display=popup";
                return url
            }

            function twitterUrl() {
                var url = "http://twitter.com/share?url=" + shareUrl + "&text=", remaining = 140 - shareUrl.length, sharetitle = encodeURIComponent(scope.sharetitle.substring(0, remaining - 4) + "...");
                return url += sharetitle
            }

            var fbAppId = "794267690598559", domain = "https://www.antwerpen.be", shareUrl = "", urls = {facebook: facebookUrl, twitter: twitterUrl};
            scope.channels = {facebook: !0, twitter: !0}, scope.shareUrls = {facebook: ""}, scope.redirectToShare = function (type) {
                var url = urls[type]();
                window.open(url, "feedDialog", "toolbar=0,status=0,width=626,height=436")
            }, initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("slideshow", ["$interval", "_", function ($interval, _) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/slideshow.htm", scope: {slides: "=", delay: "=?", direction: "=?", controls: "=?", autostart: "=?"}, link: function (scope, element) {
            function initialize() {
                void 0 !== scope.slides && (scope.delay = void 0 !== scope.delay ? parseInt(scope.delay, 10) : 5e3, scope.autostart = void 0 !== scope.autostart ? scope.autostart : !0, scope.controls = void 0 !== scope.controls ? scope.controls : !1, _.each(scope.slides, function (slide) {
                    slide.visible = !1
                }), scope.slides[0].visible = !0, scope.autostart && slide())
            }

            function slide() {
                $interval.cancel(timer), timer = $interval(function () {
                    nextSlide()
                }, scope.delay)
            }

            function resetTimer() {
                void 0 !== timer && $interval.cancel(timer)
            }

            function nextSlide() {
                scope.currentIndex < scope.slides.length - 1 ? scope.currentIndex += 1 : scope.currentIndex = 0
            }

            function previousSlide() {
                scope.currentIndex > 0 ? scope.currentIndex -= 1 : scope.currentIndex = scope.slides.length - 1
            }

            var timer;
            scope.currentIndex = 0, scope.next = function () {
                resetTimer(), nextSlide(), slide()
            }, scope.previous = function () {
                resetTimer(), previousSlide(), slide()
            }, scope.$watch("currentIndex", function (newValue, oldValue) {
                newValue !== oldValue && (_.each(scope.slides, function (slide) {
                    slide.visible = !1
                }), scope.slides[scope.currentIndex].visible = !0)
            }), scope.$on("$destroy", function () {
                $interval.cancel(timer), element.off("mouseenter"), element.off("mouseleave")
            }), element.on("mouseenter", function () {
                resetTimer()
            }), element.on("mouseleave", function () {
                slide()
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("snippet", ["$http", "$compile", "$templateCache", "eventsService", "ValidationService", "_", function ($http, $compile, $templateCache, Events, Validation, _) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/snippet.htm", scope: {content: "=", type: "=", editing: "=", ident: "=", allowExternal: "=?", multipleUpload: "=?", showDescription: "=?", maxLength: "@?", editorConf: "=?"}, link: function (scope, elm) {
            function initialize() {
                void 0 !== scope.content.evnt && "string" == typeof scope.content.evnt && (scope.content.evnt = jQuery.parseJSON(scope.content.evnt)), "media" === type && (scope.allowExternal = void 0 !== scope.allowExternal ? scope.allowExternal : !0, scope.content.data.length > 1 && (scope.state.external = !1), _.each(scope.content.data, function (media) {
                    "image" !== media.type && (scope.content.slideshow = !1)
                }), scope.multipleUpload = void 0 !== scope.multipleUpload ? scope.multipleUpload : !0, scope.showDescription = void 0 !== scope.showDescription ? scope.showDescription : !0), "intro" === type && (scope.layout = "A", type = "wysiwyg"), scope.template = {url: "/assets/aOS/js/common/views/snippets/" + type + ".htm"}
            }

            function updateTemplate(type) {
                var url = "/assets/aOS/js/common/views/snippets/" + type + ".htm";
                return url
            }

            var type = scope.type, watchers = [];
            scope.state = {external: !1, upload: !0, critical: !1, warning: !1, photoEditor: !1}, scope.remaining = scope.maxLength, scope.formField = {full: {fieldLayout: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}, validation: {required: !0}}, scope.newFile = [], scope.newExternalFile = {src: "", description: "", alt: "", originalSource: "", type: "external"}, scope.uploaded = function (file, type) {
                if (scope.content.data instanceof Array) {
                    var newFile = {src: file.url, alt: "", description: "", originalSource: "", type: type};
                    scope.content.data.push(newFile), scope.newFile.length = 0, scope.state.external = !1
                } else scope.content.data = file.url
            }, scope.removeFile = function (item) {
                _.remove(scope.content.data, {src: item.src})
            }, scope.toggleExternalFile = function () {
                var type = scope.content.data.type;
                scope.state.external = !scope.state.external, scope.content.data.type = scope.state.external ? "external" : type
            }, scope.toggleUpload = function () {
                scope.editing && (scope.state.embedding = !1, scope.content.data.type = "")
            }, scope.addExternalFile = function () {
                scope.newExternalFile.src.length < 1 || (scope.newExternalFile.alt = scope.newExternalFile.src.split("/").pop(), scope.content.data.push(_.cloneDeep(scope.newExternalFile)), scope.newExternalFile.src = "", scope.newExternalFile.alt = "", scope.newExternalFile.description = "")
            }, scope.checkMaxLength = function (value) {
                if (scope.maxLength) {
                    var validation = {min: 0, max: scope.maxLength}, result = Validation.evaluateLength(value, validation);
                    scope.remaining = result.details.remaining, result.valid && (result.details.percent <= 20 ? result.details.percent <= 10 ? (scope.state.critical = !0, scope.state.warning = !1) : (scope.state.warning = !0, scope.state.critical = !1) : (scope.state.warning = !1, scope.state.critical = !1))
                }
            }, watchers.push(scope.$watch("content", function () {
                Events.publish("snippet.change", elm)
            }, !0)), watchers.push(scope.$watch("type", function (newValue, oldValue) {
                newValue !== oldValue && (scope.template.url = updateTemplate(scope.type), Events.publish("snippet.change", elm))
            })), scope.$on("destroy", function () {
                for (var i = 0; i < watchers.length; i += 1)watchers[i]()
            }), Events.subscribe("photoeditor.open", function (id) {
                id.split("-").pop() === scope.ident && (scope.state.photoEditor = !0)
            }, scope), Events.subscribe("photoeditor.close", function (id) {
                id.split("-").pop() === scope.ident && (scope.state.photoEditor = !1)
            }, scope), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("snippetPicker", ["$timeout", "SnippetService", "eventsService", function ($timeout, Snippet, Events) {
        return{templateUrl: "/assets/aOS/js/common/views/snippetpicker.htm", restrict: "A", scope: !1, link: function (scope, element, attrs) {
            function initialize() {
                $timeout(function () {
                    "contact" === attrs.type ? $("#contact-picker").focus() : $("#general-picker").focus()
                }, 0)
            }

            scope.search = {term: "", searchResults: [], contact: {firstName: "", lastName: ""}}, scope.labels = {"e-loket": "Zoek naar een aanvraag", contact: "Zoek naar een contactpersoon", uit: "Zoek naar een evenement"}, scope.placeholders = {"e-loket": "bv. geboorteakte", uit: "bv. Antwerpen Zingt"}, scope.fieldLayout = {fieldClass: "span-full tablet--span-full desktop--span-full"}, scope.state = {searching: !1, noResults: !1}, scope.snippetSearch = function () {
                var term = "contact" === scope.content.type ? scope.search.contact : scope.search.term, type = scope.content.type;
                scope.state.searching = !0, scope.state.noResults = !1, scope.search.searchResults.length = 0, (scope.search.term.length > 2 || "contact" === scope.content.type) && Snippet.snippetSearch(term, type, function (response) {
                    scope.search.searchResults = response, response.length < 1 && (scope.state.noResults = !0)
                })
            }, scope.pickSnippet = function (snippetData) {
                Snippet.getSnippet(scope.content.type, snippetData, function (snippet) {
                    Events.publish("snippet.picked", {id: scope.ident, body: snippet.body})
                })
            }, scope.clearSearch = function () {
                scope.state.noResults = !1, scope.state.searching = !1
            }, initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS, Spinner) {
    "use strict";
    aOS.directive("spinner", ["$rootScope", function () {
        return{restrict: "A", link: function (scope, elm) {
            {
                var opts = {lines: 13, length: 7, width: 3, radius: 9, corners: 1, rotate: 0, direction: 1, color: "#fff", speed: 1, trail: 60, shadow: !1, hwaccel: !1, className: "spinner", left: "0"};
                new Spinner(opts).spin(elm[0])
            }
        }}
    }])
}(angular, antwerpOS, window.Spinner), function (ng, aOS, Leaflet, enquire) {
    "use strict";
    aOS.directive("stadsmap", ["$timeout", "$window", "MapService", "LayerService", "PoiService", "eventsService", "_", function ($timeout, $window, MapService, LayerService, POI, Events, _) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/stadsmap.htm", replace: !0, scope: {id: "@", ngModel: "=", showControls: "=?", editMode: "=?", visibleLayersOnly: "=?", layersEnabled: "=?", crowdsourceEnabled: "=?", searchEnabled: "=?", sidebar: "=?", sidebarToggle: "=?", fullscreen: "=?", grouped: "=?", sidebarHidden: "=?"}, link: function (scope, element) {
            function initMap() {
                scope.crowdsourceEnabled = void 0 !== scope.crowdsourceEnabled ? scope.crowdsourceEnabled : !0, scope.layersEnabled = void 0 !== scope.layersEnabled ? scope.layersEnabled : !0, scope.showControls = void 0 !== scope.showControls ? scope.showControls : !0, scope.sidebar = void 0 !== scope.sidebar ? scope.sidebar : !0, scope.grouped = void 0 !== scope.grouped ? scope.grouped : !0, scope.visibleLayersOnly = scope.visibleLayersOnly || !1, scope.sidebarToggle = scope.sidebarToggle || !1, scope.fullscreen = scope.fullscreen || !1, scope.editMode = scope.editMode || !1, scope.state.sidebar = scope.sidebarHidden ? !1 : !0, enquire.register(enquireQueryTablet, enquireQueryTabletHandler, !0), $timeout(function () {
                    var mapOptions = {id: scope.id, elm: element.find("#map-" + scope.id)[0], controls: scope.showControls};
                    MapService.newMap(scope.ngModel, mapOptions, function () {
                        scope.map = scope.mapService.maps[scope.id], $.isEmptyObject(scope.map.address) || scope.addLocation(scope.map.address), toggleEditMode(scope.editMode), LayerService.getLayers(function (response) {
                            scope.map.layers = LayerService.parseLayers(response, scope.map, scope.grouped)
                        }), scope.map.L.on("zoomend", function (e) {
                            scope.state.mapInteraction = !0, $timeout(function () {
                                scope.map.zoom = e.target._zoom
                            })
                        }), scope.map.L.on("moveend", function () {
                            scope.state.mapInteraction = !0, $timeout(function () {
                                var latlng = scope.map.L.getCenter();
                                scope.map.latitude = latlng.lat, scope.map.longitude = latlng.lng, scope.ngModel.zoom = scope.map.zoom, scope.ngModel.latitude = scope.map.latitude, scope.ngModel.longitude = scope.map.longitude
                            })
                        });
                        var layerswatcher = scope.$watch("map.layers", function (newValue) {
                            void 0 !== newValue && (_.each(scope.map.visibleLayers, function (id) {
                                var layer = _.find(scope.map.layers, function (lyr) {
                                    return lyr.layerId === id
                                });
                                layer || _.each(scope.map.layers, function (lyr) {
                                    return lyr.children && (layer = _.find(lyr.children, function (child) {
                                        return child.layerId === id
                                    })) ? !1 : void 0
                                }), $timeout(function () {
                                    layer && layer.data.toggle(scope.map)
                                })
                            }), layerswatcher())
                        });
                        if (scope.sidebarToggle && scope.fullscreen) {
                            var sidebar = $(".sidebar")[0], width = $(window).outerWidth();
                            sidebar.offsetLeft + sidebar.offsetWidth >= width && (scope.state.sidebarToggle = !0)
                        } else scope.state.sidebarToggle = !0;
                        window.map = scope.map.L
                    })
                })
            }

            function toggleWatchResize(value) {
                value ? $(window).on("resize", function () {
                    var sidebar = $(".sidebar")[0], width = $(window).outerWidth();
                    sidebar.offsetLeft + sidebar.offsetWidth >= width ? scope.state.sidebarToggle || (scope.state.sidebarToggle = !0) : scope.state.sidebarToggle && (scope.state.sidebarToggle = !1, scope.state.sidebar = !0)
                }) : $(window).off("resize")
            }

            function switchTab(tab) {
                switch (tab) {
                    case"city":
                        if (scope.state.cityLayers) {
                            if (!scope.state.mobile)return;
                            return scope.state.popup = !scope.state.popup, void(scope.state.cityLayers = !1)
                        }
                        !scope.state.ownLayers && scope.state.mobile && (scope.state.popup = !scope.state.popup), scope.state.cityLayers = !0, scope.state.ownLayers = !1;
                        break;
                    case"own":
                        if (scope.state.ownLayers) {
                            if (!scope.state.mobile)return;
                            return scope.state.popup = !scope.state.popup, void(scope.state.ownLayers = !1)
                        }
                        !scope.state.cityLayers && scope.state.mobile && (scope.state.popup = !scope.state.popup), scope.state.ownLayers = !0, scope.state.cityLayers = !1
                }
            }

            function toggleEditMode(value) {
                MapService.toggleEditMode(scope.id, value)
            }

            var modelWatcher, editModeWatcher, groupedWatcher, timer, enquireQueryTablet = "screen and (min-width:640px)", enquireQueryTabletHandler = {match: function () {
                scope.state.mobile = !1, scope.state.popup = !1, scope.sidebarToggle && scope.fullscreen && toggleWatchResize(!0), scope.state.cityLayers || scope.state.ownLayers || (scope.state.cityLayers = !0)
            }, unmatch: function () {
                scope.state.mobile = !0, scope.state.cityLayers = !1, scope.state.ownLayers = !1, scope.state.sidebar = !0, scope.state.popup = !1, scope.sidebarToggle && scope.fullscreen && toggleWatchResize(!1)
            }};
            scope.mapService = MapService, scope.map = {}, scope.state = {mapInteraction: !1, cityLayers: !1, ownLayers: !1, mobile: !0, popup: !1, sidebar: !0, sidebarToggle: !1, poiIds: []}, scope.search = {value: "", searching: !1, results: [], layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, scope.poi = {}, scope.findStreet = function (fieldname, value) {
                return scope.search.searching = !0, timer && $timeout.cancel(timer), 0 === value.length ? (scope.search.searching = !1, scope.search.results.length = [], void(scope.search.value = "")) : void(timer = $timeout(function () {
                    MapService.findStreet(value, function (response) {
                        scope.search.results = response, scope.search.searching = !1
                    })
                }, 300))
            }, scope.addLocation = function (location) {
                MapService.search(location, function (response) {
                    response.length < 1 || MapService.removeMarker(scope.id, scope.ngModel, function (success) {
                        if (success) {
                            scope.ngModel.address && delete scope.ngModel.address;
                            var point = {lat: response[0].Location.Lat_WGS84, lng: response[0].Location.Lon_WGS84, address: response[0].FormattedAddress};
                            window.point = point, MapService.addMarker(scope.id, point, function (success) {
                                success && (scope.ngModel.address = location, scope.ngModel.lat = parseFloat(response.latitude), scope.ngModel.lng = parseFloat(response.longitude), scope.search.searching = !1, scope.search.results.length = [], scope.search.value = "", $timeout(function () {
                                    scope.map.L.panTo([point.lat, point.lng], {animate: !0, duration: 1, easeLinearity: .5}), scope.state.mobile || scope.map.L.panBy([150, 90])
                                }))
                            })
                        }
                    })
                })
            }, scope.removeLocation = function (location) {
                MapService.removeMarker(scope.id, location, function (success) {
                    success && delete scope.ngModel.address
                })
            }, scope.toggleLayer = function (layer) {
                MapService.toggleLayer(layer, scope.id), scope.ngModel.layers = scope.map.visibleLayers
            }, scope.childrenVisible = function (children) {
                var index = _.findIndex(children, {isVisible: !0});
                return index > -1
            }, scope.layersVisible = function () {
                return function (layer) {
                    if (!scope.visibleLayersOnly)return!0;
                    if (scope.visibleLayersOnly) {
                        if (scope.editMode)return!0;
                        if (scope.ngModel.layers.indexOf(layer.layerId) > -1)return!0;
                        if (!layer.children)return!1;
                        var found = !1;
                        return _.each(layer.children, function (child) {
                            return scope.ngModel.layers.indexOf(child.layerId) > -1 ? (found = !0, !1) : void 0
                        }), found
                    }
                }
            }, scope.iconClass = function (layer) {
                return scope.grouped ? layer.group ? "icon-stadsmap-layer_" + layer.group : "icon-stadsmap-layer_" + layer.key : layer.group ? "icon-stadsmap-layer_" + layer.group : "icon-stadsmap-layer_" + layer.key
            }, scope.toggleSidebar = function () {
                scope.state.sidebar = !scope.state.sidebar
            }, scope.switchTab = switchTab, scope.closePOIDetail = function () {
                scope.state.poiIds = []
            }, modelWatcher = scope.$watch("ngModel", function (newValue, oldValue) {
                return scope.state.mapInteraction ? void(scope.state.mapInteraction = !1) : void(angular.equals(newValue, oldValue) || (scope.map.setPosition([newValue.latitude, newValue.longitude], newValue.zoom), newValue.address ? scope.addLocation(newValue.address) : oldValue.location && scope.removeLocation(oldValue)))
            }, !0), editModeWatcher = scope.$watch("editMode", function (newValue, oldValue) {
                void 0 !== newValue && newValue !== oldValue && toggleEditMode(newValue)
            }), groupedWatcher = scope.$watch("grouped", function (newValue, oldValue) {
                void 0 !== newValue && newValue !== oldValue && (scope.map.layers = LayerService.parseLayers(LayerService.layers, scope.map, newValue))
            }), scope.$on("$destroy", function () {
                modelWatcher(), editModeWatcher(), groupedWatcher(), MapService.destroyMap(scope.id)
            }), Events.subscribe("marker.clicked", function (poi) {
                var poiIds = poi.id ? [String(poi.layerid), poi.id] : [String(poi.layerid)];
                ng.equals(scope.state.poiIds, poiIds) || $timeout(function () {
                    scope.state.poiIds = poiIds, scope.poi = poi.data
                }), scope.state.sidebar = !0, scope.state.cityLayers = !0, scope.state.ownLayers = !1, scope.state.mobile && (scope.state.popup = !0), scope.$apply()
            }), initMap()
        }}
    }])
}(angular, antwerpOS, window.L, window.enquire), function (ng, aOS) {
    "use strict";
    aOS.directive("staticInclude", ["$http", "$templateCache", "$compile", function ($http, $templateCache, $compile) {
        return function (scope, element, attrs) {
            function getTemplate() {
                $http.get(templatePath, {cache: $templateCache}).success(function (response) {
                    var contents = element.html(response).contents();
                    $compile(contents)(scope)
                })
            }

            var templatePath = attrs.staticInclude;
            attrs.$observe("staticInclude", function (newValue) {
                templatePath !== newValue && (templatePath = newValue, getTemplate())
            }), getTemplate()
        }
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("statusMessage", ["StatusService", "_", function (StatusService, _) {
        return{restrict: "A", priority: 100, templateUrl: "/assets/aOS/js/common/views/statusmessage.htm", link: function (scope, element, attrs) {
            function initialize() {
                scope.filters = {locations: attrs.locations ? JSON.parse(attrs.locations) : ["form"]}
            }

            scope.statusservice = StatusService, scope.messageFilter = function (m) {
                return _.contains(scope.filters.locations, m.location)
            }, initialize()
        }}
    }])
}(angular, antwerpOS, window.enquire), function (ng, aOS) {
    "use strict";
    aOS.directive("stepIndicator", [function () {
        return{templateUrl: "/assets/aOS/js/common/views/step-indicator.htm", scope: {steps: "=", active: "="}}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("sticky", [function () {
        return{restrict: "A", scope: {top: "@", disabled: "=?"}, link: function (scope, element) {
            function initialize() {
                void 0 !== scope.top && (rect = element[0].getBoundingClientRect(), backup = {position: $(element).css("position"), top: $(element).css("top"), left: $(element).css("left"), right: $(element).css("right"), bottom: $(element).css("bottom"), width: $(element).css("width")}, position = {top: scope.top, left: rect.left}, scope.disabled || $(window).bind("scroll", onWindowScroll))
            }

            function onWindowScroll() {
                var scroll = $(window).scrollTop();
                0 > scroll || (offset = scope.top - scroll, fixed ? fixed && offset > scroll && (resetElement(), fixed = !1) : scroll > offset && ($(element).css({position: "fixed", top: scope.top + "px", left: position.left + "px", width: rect.right - rect.left + "px"}), fixed = !0))
            }

            function resetElement() {
                $(element).css({position: backup.position, top: backup.top, left: backup.left, right: backup.right, bottom: backup.bottom, width: backup.width})
            }

            var backup, position, offset, rect, fixed = !1;
            scope.$on("$destroy", function () {
                $(window).unbind("scroll", onWindowScroll)
            }), scope.$watch("disabled", function (oldValue, newValue) {
                oldValue !== newValue && (newValue ? $(window).bind("scroll", onWindowScroll) : ($(window).unbind("scroll", onWindowScroll), resetElement()))
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("streetsearch", ["$http", "HelperService", "$timeout", function ($http, Helper, $timeout) {
        return{restrict: "A", scope: {ngModel: "=", disabled: "=", ngDistrictCode: "=", ngChange: "=", streetData: "=?", lazyload: "=?", state: "=?", errorMessage: "=?"}, templateUrl: "/assets/aOS/js/common/views/streetsearch.htm", replace: !0, link: function (scope, element, attr) {
            function initialize() {
                scope.inputFieldId = attr.id || "", scope.isVisible = !1, scope.placeholder = attr.placeholder || " ", scope.autoCompleteResults = [], scope.hiliteItem = void 0, element.bind("keydown", onKeyDown), void 0 !== scope.streetData && selectLocation(scope.streetData)
            }

            function selectLocation(location, init) {
                hiliteIndex = -1, scope.ngModel = location.splCode, scope.selectedLocation = location, scope.ngDistrictCode = scope.selectedLocation.districtCode, scope.locationSearch.results.length = 0, init || $timeout(function () {
                    void 0 !== scope.ngChange && scope.ngChange()
                })
            }

            function onKeyDown(e) {
                if (13 === e.which && (e.preventDefault(), scope.hiliteItem && selectLocation(scope.hiliteItem), scope.locationSearch.results.length = 0), 38 === e.which || 40 === e.which) {
                    switch (e.which) {
                        case 38:
                            hiliteIndex > -1 && (hiliteIndex -= 1);
                            break;
                        case 40:
                            hiliteIndex < scope.locationSearch.results.length - 1 && (hiliteIndex += 1)
                    }
                    if (scope.hiliteItem = scope.locationSearch.results[hiliteIndex], scope.hiliteItem) {
                        {
                            var item = document.getElementById(scope.hiliteItem.id), itemHeight = item.offsetHeight, itemTop = item.offsetTop, elem = document.getElementById("results"), elemHeight = elem.offsetHeight;
                            elem.scrollTop
                        }
                        itemHeight + itemTop > elemHeight && (elem.scrollTop = itemHeight + itemTop - elemHeight), itemTop < elem.scrollTop && (elem.scrollTop = 0)
                    }
                }
                scope.$$phase || scope.$apply()
            }

            if (void 0 !== scope.ngModel) {
                var requestTimer, requestTimeout = 400, hiliteIndex = -1;
                scope.streetInputHasFocus = !1, scope.locationSearch = {term: "", results: []}, scope.searchLocation = function () {
                    hiliteIndex = -1, scope.locationSearch.term.length > 2 ? (void 0 !== requestTimer && clearTimeout(requestTimer), requestTimer = setTimeout(function () {
                        $http.get("/srv/d/astad/location/search/" + scope.locationSearch.term).success(function (response) {
                            if (response.success) {
                                var results = Helper.verifyNamespace("data", response) || [];
                                scope.locationSearch.results = results
                            }
                        })
                    }, requestTimeout)) : (scope.locationSearch.results = null, void 0 !== requestTimer && (clearTimeout(requestTimer), requestTimer = void 0))
                }, scope.pickLocation = selectLocation, scope.editLocation = function () {
                    scope.locationSearch.term = "", scope.ngModel = "", scope.selectedLocation = null, scope.searchLocation(), $timeout(function () {
                        $("#streetSearch_" + scope.inputFieldId).focus(), void 0 !== scope.ngChange && scope.ngChange()
                    })
                }, scope.$on("$destroy", function () {
                    element.unbind("keydown", onKeyDown)
                }), scope.$watch("streetData", function () {
                }), scope.$watch("ngModel", function () {
                }), initialize()
            }
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("switch", [function () {
        return{templateUrl: "/assets/aOS/js/common/views/switch.htm", restrict: "A", priority: 100, replace: !0, scope: {ngModel: "=", ngChange: "&?", switchId: "=?", switchTitle: "=?", className: "=?", labelLeft: "=?", labelRight: "=?"}, link: function (scope) {
            scope.switchId, scope.switchTitle || "", scope.labelLeft || "", scope.className || "switch", scope.labelRight || ""
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("table", ["$timeout", "eventsService", "_", function ($timeout, Events, _) {
        return{templateUrl: "/assets/aOS/js/common/views/table.htm", restrict: "A", scope: {editMode: "=", tableData: "="}, link: function (scope, element, attrs) {
            function initialize() {
                scope.tableData = check ? templateTableData : scope.tableData, check = jQuery.isEmptyObject(scope.tableData), check && (scope.tableData.tableHeaderData = _.cloneDeep(scope.tableData.head)), editMode = void 0 === scope.editMode || scope.editMode, scope.controlsEnabled = void 0 !== attrs.controlsEnabled ? attrs.controlsEnabled : !0, scope.controlsEnabled && element.bind("click", function (event) {
                    return $(event.target).hasClass("colControl") || $(event.target).hasClass("rowControl") ? !1 : void($(event.target).hasClass("tablePopupControl") || (scope.popupPosition.display = "none", scope.$$phase || scope.$apply()))
                })
            }

            function adjustRowIndexStartingAtIndexWithDirection(index, action, direction) {
                var tempRows = _.filter(scope.tableData.rows, function (row) {
                    switch (direction) {
                        case"up":
                            return row.id > index;
                        case"down":
                            return row.id < index
                    }
                });
                _.forEach(tempRows, function (row) {
                    switch (action) {
                        case"increment":
                            row.id += 1;
                            break;
                        case"decrement":
                            row.id -= 1
                    }
                })
            }

            function adjustColIndexStartingAtIndexWithDirection(index, action, direction, collection) {
                var tempCols = _.filter(collection, function (col) {
                    switch (direction) {
                        case"up":
                            return col.id > index;
                        case"down":
                            return col.id < index
                    }
                });
                _.forEach(tempCols, function (tempCol) {
                    switch (action) {
                        case"increment":
                            tempCol.id += 1;
                            break;
                        case"decrement":
                            tempCol.id -= 1
                    }
                })
            }

            function incrementColIndex(index, collection, newElement) {
                var tempCols = _.filter(collection, function (col) {
                    return col.id > index
                });
                _.forEach(tempCols, function (tempCol) {
                    tempCol.id += 1
                }), collection.splice(index, 0, newElement)
            }

            function removeTableRow(index) {
                _.remove(scope.tableData.rows, function (row) {
                    return row.id === index
                }), adjustRowIndexStartingAtIndexWithDirection(index, "decrement", "up")
            }

            function prependTableRow(index) {
                if (scope.tableData.rows.length + 1 <= TABLE_MAX_ROWS) {
                    var newRow = _.cloneDeep(scope.rowModel);
                    newRow.id = index, adjustRowIndexStartingAtIndexWithDirection(index - 1, "increment", "up"), scope.tableData.rows.splice(index - 1, 0, newRow), Events.publish("table.change")
                } else scope.errorMessage = "You have reached the maximum allowed row size."
            }

            function appendTableRow(index) {
                if (scope.tableData.rows.length + 1 <= TABLE_MAX_ROWS) {
                    var newRow = _.cloneDeep(scope.rowModel);
                    newRow.id = index + 1, adjustRowIndexStartingAtIndexWithDirection(index, "increment", "up"), scope.tableData.rows.splice(index, 0, newRow), Events.publish("table.change")
                } else scope.errorMessage = "You have reached the maximum allowed row size."
            }

            function removeTableCol(index) {
                _.forEach(scope.tableData.rows, function (row) {
                    _.remove(row.cols, function (col) {
                        return col.id === index
                    }), adjustColIndexStartingAtIndexWithDirection(index - 1, "decrement", "up", row.cols)
                }), _.remove(scope.tableData.head.cols, function (col) {
                    return col.id === index
                }), adjustColIndexStartingAtIndexWithDirection(index - 1, "decrement", "up", scope.tableData.head.cols), _.remove(scope.rowModel.cols, function (col) {
                    return col.id === index
                }), adjustColIndexStartingAtIndexWithDirection(index - 1, "decrement", "up", scope.rowModel.cols)
            }

            function prependTableCol(index) {
                if (scope.rowModel.cols.length + 1 <= TABLE_MAX_COLS) {
                    var newCol, colId = index;
                    _.forEach(scope.tableData.rows, function (row) {
                        newCol = _.cloneDeep(scope.colModel), newCol.id = colId, incrementColIndex(index - 1, row.cols, newCol)
                    }), newCol = _.cloneDeep(scope.colModel), newCol.id = colId, incrementColIndex(index - 1, scope.tableData.head.cols, newCol), newCol = _.cloneDeep(scope.colModel), newCol.id = colId, incrementColIndex(index - 1, scope.rowModel.cols, newCol), Events.publish("table.change")
                } else alert("You have reached the maximum allowed column size.")
            }

            function appendTableCol(index) {
                if (scope.rowModel.cols.length + 1 <= TABLE_MAX_COLS) {
                    var newCol, colId = index + 1;
                    _.forEach(scope.tableData.rows, function (row) {
                        newCol = _.cloneDeep(scope.colModel), newCol.id = colId, incrementColIndex(index, row.cols, newCol)
                    }), newCol = _.cloneDeep(scope.colModel), newCol.id = colId, incrementColIndex(index, scope.tableData.head.cols, newCol), newCol = _.cloneDeep(scope.colModel), newCol.id = colId, incrementColIndex(index, scope.rowModel.cols, newCol), Events.publish("table.change")
                } else alert("You have reached the maximum allowed column size.")
            }

            var TABLE_MAX_COLS = 7, TABLE_MAX_ROWS = 100, TABLE_ALLOWED_COLORS = ["#C5E6D5", "#C8DED5", "#AAE1E6", "#EBCBC7", "#DBC5A9", "#F5C5AB", "#F0786F"], templateTableData = {head: {id: 0, bgColor: "2", cols: [
                {id: 1, content: "Hoofding", style: {align: "left"}},
                {id: 2, content: "Hoofding", style: {align: "left"}}
            ]}, rows: [
                {id: 1, cols: [
                    {id: 1, content: "Cel", style: {align: "left"}},
                    {id: 2, content: "Cel", style: {align: "left"}}
                ]},
                {id: 2, cols: [
                    {id: 1, content: "Cel", align: "left", style: {align: "left"}},
                    {id: 2, content: "Cel", align: "left", style: {align: "left"}}
                ]}
            ], tableHeadVisible: !0, tableHeaderData: []}, check = jQuery.isEmptyObject(scope.tableData), editMode = !1;
            scope.tableAllowedColors = TABLE_ALLOWED_COLORS, scope.colModel = {id: 1, content: "Kolom", align: "left", isBeingEdited: !1, isSelected: !1}, scope.rowModel = {id: 1, cols: [
                {id: 1, content: "Kolom", align: "left", isBeingEdited: !1},
                {id: 2, content: "Kolom", align: "left", isBeingEdited: !1}
            ]}, scope.selectModeEnabled = !1, scope.selectedTableCells = [], scope.popupPosition = {left: "200px", top: "100px"}, scope.popupType = "", scope.referenceIndex = "", scope.errorMessage = "", scope.state = {id: scope.$id}, scope.saveTableContent = function (column) {
                column.isBeingEdited = !1, Events.publish("table.change")
            }, scope.addColumn = function () {
                scope.rowModel.cols.length + 1 <= TABLE_MAX_COLS && appendTableCol(scope.rowModel.cols.length)
            }, scope.addRow = function () {
                scope.tableData.rows.length + 1 <= TABLE_MAX_ROWS && appendTableRow(scope.tableData.rows.length)
            }, scope.displayTableManipulationControls = function (event, type, index) {
                var offset = $(element).find(".snippet-table").offset(), topOffset = 20, leftOffset = 0;
                scope.popupPosition.left = event.clientX - offset.left + leftOffset, scope.popupPosition.top = event.pageY - offset.top + topOffset, scope.popupPosition.display = "block", scope.popupType = type, scope.referenceIndex = index
            }, scope.prependTableAction = function () {
                switch (scope.popupType) {
                    case"kolom":
                        prependTableCol(scope.referenceIndex);
                        break;
                    case"rij":
                        prependTableRow(scope.referenceIndex)
                }
                scope.popupPosition.display = "none"
            }, scope.appendTableAction = function () {
                switch (scope.popupType) {
                    case"kolom":
                        appendTableCol(scope.referenceIndex);
                        break;
                    case"rij":
                        appendTableRow(scope.referenceIndex)
                }
                scope.popupPosition.display = "none"
            }, scope.removeTableAction = function () {
                switch (scope.popupType) {
                    case"kolom":
                        removeTableCol(scope.referenceIndex);
                        break;
                    case"rij":
                        removeTableRow(scope.referenceIndex)
                }
                scope.popupPosition.display = "none"
            }, scope.changeCellAlignment = function (alignment) {
                _.forEach(scope.selectedTableCells, function (cell) {
                    cell.align = alignment
                })
            }, scope.toggleTableHeader = function () {
                scope.tableData.tableHeadVisible = !scope.tableData.tableHeadVisible, scope.tableData.tableHeadVisible === !1 ? (scope.tableData.tableHeaderData = _.cloneDeep(scope.tableData.head), scope.tableData.head = null) : scope.tableData.head = scope.tableData.tableHeaderData
            }, scope.setTableHeaderColor = function (index) {
                scope.tableData.tableHeadVisible && (scope.tableData.head.bgColor = index + 1)
            }, scope.toggleSelectMode = function () {
                scope.selectModeEnabled = !scope.selectModeEnabled, scope.selectModeEnabled === !1 && (_.forEach(scope.selectedTableCells, function (cell) {
                    cell.isSelected = !1
                }), scope.selectedTableCells = [])
            }, scope.selectTableCell = function (column, rowId) {
                if (void 0 !== scope.selectModeEnabled && scope.selectModeEnabled)column.isSelected = !column.isSelected, column.isSelected === !0 ? scope.selectedTableCells.push(column) : _.remove(scope.selectedTableCells, function (col) {
                    return col === column
                }); else if (void 0 !== scope.editMode && scope.editMode) {
                    column.isBeingEdited = !0;
                    var input = $("#cell-" + scope.$id + "-" + rowId + "-" + column.id);
                    $timeout(function () {
                        input.focus()
                    }, 0)
                }
            }, Events.subscribe("table.move", function (config) {
                var direction = (config.id, config.direction), row = config.id.split("-")[2], table = config.id.split("-")[1], column = config.id.split("-").pop(), newColumn = "", newRow = "", toFocus = "", rowLength = scope.tableData.head ? scope.tableData.rows.length + 1 : scope.tableData.rows.length, colLength = scope.tableData.head ? scope.tableData.head.cols.length : scope.tableData.rows[0].cols.length;
                if (table === scope.$id) {
                    switch (direction) {
                        case"left":
                            if (newColumn = parseInt(column, 10) - 1, 0 > newColumn)return;
                            toFocus = "cell-" + scope.$id + "-" + row + "-" + newColumn;
                            break;
                        case"right":
                            if (newColumn = parseInt(column, 10) + 1, newColumn >= colLength)return;
                            toFocus = "cell-" + scope.$id + "-" + row + "-" + newColumn;
                            break;
                        case"up":
                            if (newRow = parseInt(row, 10) - 1, 0 > newRow)return;
                            toFocus = "cell-" + scope.$id + "-" + newRow + "-" + column;
                            break;
                        case"down":
                            if (newRow = parseInt(row, 10) + 1, newRow >= rowLength)return;
                            toFocus = "cell-" + scope.$id + "-" + newRow + "-" + column
                    }
                    Events.publish("tablecell.focus", toFocus)
                }
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("tableCell", ["$timeout", "eventsService", "_", function ($timeout, Events) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/tablecell.htm", scope: {id: "@", style: "=?", ngModel: "=", editAllowed: "=?"}, link: function (scope, elm) {
            function initialize() {
                void 0 === scope.ngModel || void 0 === scope.id
            }

            scope.editing = !1, scope.toggleEdit = function () {
                scope.editAllowed && (scope.editing = !scope.editing, scope.editing && $timeout(function () {
                    var input = $("#" + scope.id);
                    input.focus()
                }, 0))
            }, elm.on("keydown", function (e) {
                if (scope.editing)switch (e.which) {
                    case 9:
                        e.shiftKey ? (Events.publish("table.move", {id: scope.id, direction: "left"}), e.preventDefault()) : (Events.publish("table.move", {id: scope.id, direction: "right"}), e.preventDefault());
                        break;
                    case 13:
                        e.shiftKey ? (Events.publish("table.move", {id: scope.id, direction: "up"}), e.preventDefault()) : (Events.publish("table.move", {id: scope.id, direction: "down"}), e.preventDefault());
                        break;
                    case 27:
                        $timeout(function () {
                            var input = $("#" + scope.id);
                            input.blur()
                        })
                }
            }), Events.subscribe("tablecell.focus", function (id) {
                scope.id === id && ($timeout(function () {
                    scope.editing = !0
                }), $timeout(function () {
                    var input = $("#" + scope.id);
                    input.focus()
                }))
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("timepicker", ["_", "$timeout", "eventsService", "HelperService", function (_, $timeout) {
        return{restrict: "A", priority: 100, scope: {id: "@", label: "=?", layout: "=?", ngModel: "=", availableTimeslots: "=", ngChange: "=?"}, templateUrl: "/assets/aOS/js/common/views/timepicker.htm", link: function (scope, element) {
            function initialize() {
                scope.layout = scope.layout || {fieldClass: "span-full tablet-span-full desktop--span-full"}
            }

            void 0 !== scope.ngModel && void 0 !== scope.availableTimeslots && (scope.hourValue = scope.minuteValue = "", scope.availableMinutes = [], scope.onHourChanged = function () {
                var index = _.findIndex(scope.availableTimeslots, function (option) {
                    return option.value === scope.hourValue
                });
                scope.availableMinutes = scope.availableTimeslots[index] ? scope.availableTimeslots[index].availableMinutes : [], $timeout(function () {
                    $(element).find('select[name="minuteSelect"]').focus()
                }, 0)
            }, scope.onMinutesSelected = function () {
                $timeout(function () {
                    scope.ngChange && scope.ngChange(scope.ngModel)
                })
            }, initialize())
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("timepicker2", ["HelperService", "_", function (Helper, _) {
        return{templateUrl: "/assets/aOS/js/common/views/timepicker2.htm", restrict: "A", replace: !0, scope: {ngModel: "=?", picked: "=?", step: "=?"}, link: function (scope) {
            function initialize() {
                scope.times = getTimes()
            }

            function getTimes() {
                var hour = 0, minute = 0, times = [], object = {hh: "00", mm: "00", current: !1};
                times.push(_.clone(object, !0));
                for (var i = 0; 1440 > i; i += scope.step)minute += scope.step, minute >= 60 && (minute = 0, hour += 1), object.hh = hour.toString(), 1 === hour.toString().length && (object.hh = "0" + hour.toString()), object.mm = minute.toString(), 1 === minute.toString().length && (object.mm = "0" + minute.toString()), object.hh >= 24 && 1 !== scope.step && (object.hh = 23, object.mm = 59), object.current = !1, times.push(_.clone(object, !0));
                return times
            }

            void 0 === scope.step && (scope.step = 5), scope.setTime = function (value) {
                _.forEach(scope.times, function (time) {
                    time.current = !1
                }), scope.ngModel = value.hh + ":" + value.mm, value.current = !0, scope.picked && scope.picked(scope.ngModel)
            }, initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS, Modernizr) {
    "use strict";
    aOS.directive("upload", ["$timeout", "eventsService", "UploadService", function ($timeout, Events, Upload) {
        return{templateUrl: "/assets/aOS/js/common/views/upload.htm", restrict: "A", scope: {ngModel: "=", isPrivate: "=?", onUpload: "=?", onFileError: "=?", onUploadClosure: "=", editMode: "=?", type: "=?", multiple: "=?", maxFileSize: "@?", url: "@?", fieldName: "@?", deleteFileOnServer: "=?"}, link: function (scope, element) {
            function initialize() {
                void 0 !== scope.ngModel && (Modernizr.filereader && (scope.filereader = !0), scope.isPrivate = void 0 !== scope.isPrivate ? scope.isPrivate : !1, scope.multipleUpload = scope.multiple && scope.ngModel instanceof Array ? !0 : !1, scope.maxFileSize = void 0 !== scope.maxFileSize && scope.maxFileSize.toString().length > 0 ? scope.maxFileSize : 10, scope.editMode && bindDragnDrop(), maxFileSize = parseInt(scope.maxFileSize, 10), scope.name = void 0 !== scope.name ? scope.name : "toBeUploaded", getMimeTypes(scope.type))
            }

            function getMimeTypes(type) {
                switch (type) {
                    case"image":
                        validMimeTypes = ["image/jpeg", "image/png", "image/pjpeg", "image/gif"], validExtensions = [".jpg", ".png", ".gif"];
                        break;
                    case"file":
                        validMimeTypes = ["application/msword", "application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/msword", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf", "image/jpeg", "image/png", "image/pjpeg", "image/gif", "text/csv", "text/plain", "text/vcard", "text/xml", "text/x-markdown"], validExtensions = ["doc", "xls", "ppt", ".docx", ".xlsx", ".pptx", ".pdf", ".jpg", ".png", ".gif", ".csv", ".txt", ".vcf", ".xml", ".md"];
                        break;
                    case"standardEloketAttachment":
                        validMimeTypes = ["application/msword", "application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/msword", "application/vnd.oasis.opendocument.text-master", "application/vnd.oasis.opendocument.text-template", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.oasis.opendocument.text", "application/pdf", "image/jpeg", "image/png", "image/pjpeg"], validExtensions = ["doc", "xls", "ppt", ".docx", ".xlsx", ".pptx", ".odt", ".ott", ".oth", ".odm", ".pdf", ".jpg", ".png"];
                        break;
                    default:
                        validMimeTypes = ["application/msword", "application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/msword", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf", "image/jpeg", "image/png", "image/pjpeg", "image/gif", "text/csv", "text/plain", "text/vcard", "text/xml", "text/x-markdown", "application/zip"], validExtensions = ["doc", "xls", "ppt", ".docx", ".xlsx", ".pptx", ".pdf", ".jpg", ".png", ".gif", ".csv", ".vcf", ".xml", ".md", ".zip"]
                }
            }

            function getTypeFromMimeType(mimeType) {
                return mimeType.indexOf("image") > -1 ? "image" : ""
            }

            function bindDragnDrop() {
                element.bind("dragover", processDragOverOrEnter), element.bind("dragenter", processDragOverOrEnter), element.bind("drop", onDrop)
            }

            function removeDragnDrop() {
                element.unbind("dragover", processDragOverOrEnter), element.unbind("dragenter", processDragOverOrEnter), element.unbind("drop", onDrop)
            }

            function onDrop(event) {
                if (scope.editMode) {
                    {
                        scope.isPrivate || !1
                    }
                    null !== event && event.preventDefault();
                    var $file = event.originalEvent.dataTransfer.files[0];
                    if (void 0 === scope.type && (scope.type = getTypeFromMimeType($file.type)), checkSize($file.size) && isTypeValid($file.type)) {
                        var file = {data: $file, formDataName: formDataName}, type = $file.type;
                        scope.uploading = $file.name, (void 0 === scope.type || null === scope.type || scope.type.length < 1) && (scope.type = type.indexOf("image") > -1 ? "image" : "file"), void 0 !== scope.onUpload && Upload.upload(file, scope.url, scope.isPrivate, function (file) {
                            scope.onUpload(file, scope.type), scope.uploading = "", scope.uploadSuccess = !0, Events.publish("media.upload")
                        })
                    }
                }
                return!1
            }

            var validMimeTypes = [], validExtensions = [], maxFileSize = 4, formDataName = scope.fieldName || "toBeUploaded", onUploadFileComplete = function (file) {
                void 0 !== file ? (void 0 !== scope.onUploadClosure ? scope.onUploadClosure.onUpload.apply(scope.onUploadClosure, [file]) : void 0 !== scope.onUpload && scope.onUpload(file, scope.type), scope.multipleUpload ? scope.ngModel.push(file.url) : scope.ngModel = file.url, scope.uploading = "", scope.preview.src = "", scope.uploadSuccess = !0, Events.publish("media.upload")) : (scope.uploading = "", scope.uploadSuccess = !1), scope.errorMessage = ""
            }, processDragOverOrEnter = function (event) {
                return null !== event ? !1 : (event.originalEvent.dataTransfer.effectAllowed = "copy", !1)
            }, checkSize = function (size) {
                return maxFileSize > size / 1024 / 1024 ? !0 : (scope.errorMessage = "Dit bestand is te groot (maximum " + maxFileSize + "MB toegelaten).", !1)
            }, isTypeValid = function (type) {
                return validMimeTypes.indexOf(type) > -1 ? !0 : (scope.errorMessage = "Dit bestandstype is niet toegelaten (toegelaten extensies: " + validExtensions.join(", ") + ").", !1)
            }, removeFile = function (index) {
                if (void 0 !== index) {
                    var fileUrl = scope.ngModel[index];
                    if (scope.deleteFileOnServer) {
                        var splittedFileUrl = fileUrl.split("/"), filename = splittedFileUrl[splittedFileUrl.length - 2], name = splittedFileUrl[splittedFileUrl.length - 1];
                        return void Upload.deleteFile(filename, name, function () {
                            scope.ngModel.splice(index, 1)
                        })
                    }
                    scope.ngModel.splice(index, 1)
                } else scope.ngModel = ""
            }, previewFile = function (file, type) {
                switch (type) {
                    case"image":
                        var oFReader = new FileReader;
                        oFReader.readAsDataURL(file), oFReader.onload = function (oFREvent) {
                            scope.preview.src = oFREvent.target.result
                        }
                }
            };
            scope.mediaDescription = "", scope.fileType = "", scope.uploading = "", scope.uploadSuccess = !1, scope.multipleUpload = !1, scope.preview = {}, scope.filereader = !1, scope.onFileSelect = function ($files) {
                for (var type, i = 0; i < $files.length; i += 1) {
                    var $file = $files[i], sizeIsValid = checkSize($file.size), typeIsValid = isTypeValid($file.type), file = {};
                    void 0 === scope.type && (scope.type = getTypeFromMimeType($file.type)), sizeIsValid && typeIsValid ? (file = {data: $file, formDataName: formDataName}, type = $file.type, (void 0 === scope.type || null === scope.type || scope.type.length < 1) && (scope.type = type.indexOf("image") > -1 ? "image" : "file"), scope.uploading = file.data.name, scope.filereader && previewFile($file, scope.type), Upload.upload(file, scope.url, scope.isPrivate, onUploadFileComplete)) : (file = {data: $file, formDataName: formDataName, errorMessage: ""}, sizeIsValid || (file.errorMessage += "Het opgeladen bestand is te groot."), typeIsValid || (file.errorMessage.length > 0 && (file.errorMessage += "<br>"), file.errorMessage += "Dit bestandstype is niet toegelaten."), void 0 !== scope.onFileError && scope.onFileError(file))
                }
            }, scope.browseFiles = function (e) {
                var target = $(e.target);
                if (target.hasClass("delete"))if (e.preventDefault(), scope.multipleUpload) {
                    var index = target.attr("data-index");
                    removeFile(index)
                } else removeFile(); else setTimeout(function () {
                    if (void 0 === scope.editMode || scope.editMode) {
                        var dropzone = $(element).find(".fileInput");
                        dropzone.click()
                    }
                }, 0)
            }, scope.$watch("editMode", function (newValue, oldValue) {
                newValue !== oldValue && (scope.editMode ? bindDragnDrop() : removeDragnDrop())
            }), initialize()
        }}
    }])
}(angular, antwerpOS, window.Modernizr), function (ng, aOS) {
    "use strict";
    aOS.directive("userAvatar", ["HelperService", "eventsService", "UserService", function (Helper, eventsService) {
        return{templateUrl: "/assets/aOS/js/common/views/user-avatar.htm", restrict: "A", priority: 100, replace: !0, scope: {hide: "=", width: "=", height: "=", showStatus: "=", user: "=", allowClickAction: "=", assetFormat: "=", size: "@?", lazyload: "=?", customAvatar: "@?"}, link: function (scope) {
            function initialize() {
                return lazyload ? void(lazyWatcher = scope.$watch("user", function (newValue) {
                    void 0 !== newValue && (lazyload = !1, initialize())
                }, !0)) : (void 0 !== lazyWatcher && lazyWatcher(), online = scope.user && "string" != typeof scope.user ? "invisible" !== scope.user.status : !1, scope.user && (scope.user.currentRoles && scope.user.currentRoles.indexOf("helpdesk_admin") > -1 ? (scope.helpdeskAdmin = !0, scope.userTitle = scope.user.firstName + " " + scope.user.lastName + " - Webteam Stad Antwerpen") : scope.userTitle = scope.user.firstName + " " + scope.user.lastName), width = Helper.parseInt(width), height = Helper.parseInt(height), scope.styling = {width: Helper.parseInt(width) + "px", height: Helper.parseInt(height) + "px"}, void setAvatar())
            }

            function setAvatar() {
                return scope.customAvatar ? void(scope.avatarUrl = scope.customAvatar) : void(null !== scope.user.avatarUrl && void 0 !== scope.user.avatarUrl && (scope.sizeParam = void 0 !== scope.size ? "/" + scope.size : "/" + assetFormat))
            }

            var lazyWatcher, width = scope.width || 50, height = scope.height || 50, allowClickAction = (scope.showStatus || !1, void 0 === scope.allowClickAction || scope.allowClickAction), assetFormat = scope.assetFormat || "profile_dropdownsettings", online = (scope.hide || !1, !1), lazyload = void 0 !== scope.lazyload ? scope.lazyload : !1;
            scope.userClickAction = function () {
                allowClickAction && eventsService.publish("chat.open", scope.user)
            };
            var avatarWatch = scope.$watch(["user.avatarUrl", "customAvatar"], function (newValue, oldValue) {
                newValue !== oldValue && setAvatar()
            });
            scope.$on("$destroy", function () {
                avatarWatch()
            }), scope.isOnline = !0, scope.placeholder = "/assets/aOS/gfx/gui/missing-user.svg", scope.helpdeskAdmin = !1, scope.userTitle = "", scope.avatarUrl = "", initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("visualSearch", ["$timeout", "eventsService", "_", function ($timeout, Events, _) {
        return{templateUrl: "/assets/aOS/js/common/views/visualsearch.htm", restrict: "A", scope: {searchable: "=", ngModel: "=", onFilter: "=?", doSearch: "=?"}, link: function (scope, element, attrs) {
            function initialize() {
                void 0 !== scope.searchable && void 0 !== scope.ngModel && (scope.search.kResults = findKey(""), scope.placeholder = attrs.placeholder || "Typ hier om te zoeken.")
            }

            var randomId = function () {
                var id = "" + Math.floor(1e6 * Math.random());
                return id
            }, findKey = function (str) {
                var results = [];
                for (var prop in scope.searchable) {
                    var value = prop.toLowerCase();
                    (value.indexOf(str.toLowerCase()) > -1 || 0 === str.length) && results.push({key: randomId(), value: value})
                }
                return results
            }, findValue = function (str, arr) {
                for (var results = [], i = 0; i < arr.length; i += 1) {
                    var value = arr[i].value.toLowerCase();
                    (value.indexOf(str.toLowerCase()) > -1 || 0 === str.length) && results.push(arr[i])
                }
                return results
            }, clearFilter = function () {
                scope.search.term = "", scope.search.key = "", scope.search.value = "", scope.search.vResults.length = 0, scope.search.kResults = findKey("")
            }, crawl = function (keycode, obj) {
                if (38 === keycode || 40 === keycode)switch (keycode) {
                    case 38:
                        scope.state.highlightIndex > -1 ? scope.state.highlightIndex - 1 >= 0 && (scope.state.highlightIndex -= 1) : scope.state.highlightIndex = obj.length;
                        break;
                    case 40:
                        scope.state.highlightIndex > -1 ? scope.state.highlightIndex + 2 <= obj.length && (scope.state.highlightIndex += 1) : scope.state.highlightIndex = 0
                }
            };
            scope.search = {key: "", value: "", term: "", kResults: [], vResults: []}, scope.state = {choicesPopup: !1, highlightIndex: -1}, scope.togglePopup = function (show) {
                $timeout(function () {
                    scope.state.choicesPopup = void 0 !== show ? show : !scope.state.choicesPopup
                }, 250)
            }, scope.searchValue = function () {
                var results = [];
                scope.search.key.length > 0 ? scope.search.term.length > 0 && (scope.doSearch ? scope.doSearch(scope.search.key, scope.search.term, function () {
                    results = findValue(scope.search.term, scope.searchable[scope.search.key]) || [], scope.search.vResults = results
                }) : (results = findValue(scope.search.term, scope.searchable[scope.search.key]) || [], scope.search.vResults = results)) : scope.search.term.length > 0 ? (results = findKey(scope.search.term) || [], scope.search.kResults = results) : (results = findKey(""), scope.search.kResults = results)
            }, scope.selectKey = function (key) {
                scope.search.key = key, $timeout(function () {
                    var newFilter = $(".newFilter")[0];
                    $(".vSearchResults").css("padding-left", newFilter.offsetWidth + "px"), $("#vSearch").focus()
                }, 0), scope.search.term = "", scope.search.kResults.length = 0, scope.state.highlightIndex = -1, "titel" !== key && (scope.search.vResults = findValue(scope.search.term, scope.searchable[scope.search.key]) || [])
            }, scope.addFilter = function (filter) {
                var check = _.find(scope.ngModel, {value: filter.value, type: scope.search.key});
                if (void 0 !== check)return clearFilter(), void $timeout(function () {
                    $(".vSearchResults").css("padding-left", 0), $("#vSearch").focus()
                }, 0);
                var fltr = {key: filter.key, value: filter.value, type: scope.search.key};
                scope.ngModel.push(fltr), clearFilter(), scope.state.highlightIndex = -1, $timeout(function () {
                    $(".vSearchResults").css("padding-left", 0), $("#vSearch").focus()
                }, 0), Events.publish("visualSearch.filter", filter), scope.onFilter && scope.onFilter()
            }, scope.removeFilter = function (filter) {
                void 0 !== filter ? (_.remove(scope.ngModel, {value: filter.value, type: filter.type}), Events.publish("visualSearch.remove", filter), scope.onFilter && scope.onFilter()) : clearFilter()
            }, scope.clearFilters = function () {
                clearFilter(), scope.ngModel.length = 0, Events.publish("visualSearch.cleared"), scope.onFilter && scope.onFilter()
            }, scope.searchTerm = function () {
                var value = scope.search.term;
                scope.selectKey("titel");
                var filter = {key: "titel", value: value};
                scope.addFilter(filter)
            }, element.on("keydown", function (e) {
                if (13 === e.which) {
                    if (scope.search.vResults.length > 0 && scope.state.highlightIndex > -1) {
                        var filter = scope.search.vResults[scope.state.highlightIndex];
                        scope.addFilter(filter)
                    } else if (scope.search.kResults.length > 0 && scope.state.highlightIndex > -1) {
                        var key = scope.search.kResults[scope.state.highlightIndex];
                        scope.selectKey(key.value)
                    } else scope.search.kResults.length + scope.search.vResults.length < 1 && scope.search.term.length > 0 && scope.searchTerm();
                    scope.state.choicesPopup = !0
                }
                27 === e.which && (clearFilter(), scope.state.choicesPopup = !1, $timeout(function () {
                    $(".vSearchResults").css("padding-left", 0), $("#vSearch").blur()
                })), scope.search.vResults.length > 0 ? crawl(e.which, scope.search.vResults) : scope.search.kResults.length > 0 ? crawl(e.which, scope.search.kResults) : scope.search.vResults.length + scope.search.kResults < 1 && scope.search.term.length > 0 && (38 === e.which || 40 === e.which) && (scope.state.highlightIndex = -2 === scope.state.highlightIndex ? -1 : -2), scope.$$phase || scope.$apply()
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("weatherWidget", ["HelperService", "eventsService", "$http", function (Helper, eventsService, $http) {
        return{templateUrl: "/assets/aOS/js/common/views/weather-widget.htm", restrict: "A", replace: !0, scope: {weathertype: "="}, link: function (scope, element, attrs) {
            function initialize() {
                scope.getWeather(scope.weathertype)
            }

            scope.getWeatherText = function (code) {
                var text = "";
                switch (code) {
                    case 200:
                        text = "Onweer met lichte regen";
                        break;
                    case 201:
                        text = "Onweer met regen";
                        break;
                    case 202:
                        text = "Onweer met hevige regen";
                        break;
                    case 210:
                        text = "Licht onweer";
                        break;
                    case 211:
                        text = "Onweer";
                        break;
                    case 211:
                        text = "Zwaar onweer";
                        break;
                    case 211:
                        text = "Zeer zwaar onweer";
                        break;
                    case 211:
                        text = "Onweer met lichte motregen";
                        break;
                    case 211:
                        text = "Oweer met motregen";
                        break;
                    case 211:
                        text = "Onweer met zware motregen";
                        break;
                    case 300:
                        text = "Lichte motregen";
                        break;
                    case 301:
                        text = "Motregen";
                        break;
                    case 302:
                        text = "Zware motregen";
                        break;
                    case 310:
                        text = "Lichte regenval";
                        break;
                    case 311:
                        text = "Regenval";
                        break;
                    case 312:
                        text = "Zware regenval";
                        break;
                    case 321:
                        text = "Bui met regen";
                        break;
                    case 500:
                        text = "Lichte regen";
                        break;
                    case 501:
                        text = "Regen";
                        break;
                    case 502:
                        text = "Hevige regen";
                        break;
                    case 503:
                        text = "Erg hevige regen";
                        break;
                    case 504:
                        text = "Extreme regenval";
                        break;
                    case 511:
                        text = "Hagel";
                        break;
                    case 520:
                        text = "Lichte regenval";
                        break;
                    case 521:
                        text = "Regenval";
                        break;
                    case 522:
                        text = "Zware regenval";
                        break;
                    case 600:
                        text = "Lichte sneeuwval";
                        break;
                    case 601:
                        text = "Sneeuwval";
                        break;
                    case 602:
                        text = "Hevige sneeuwval";
                        break;
                    case 611:
                        text = "Smeltende sneeuw";
                        break;
                    case 621:
                        text = "Sneeuwstorm";
                        break;
                    case 701:
                        text = "Nevel";
                        break;
                    case 711:
                        text = "Rook";
                        break;
                    case 721:
                        text = "Smog";
                        break;
                    case 731:
                        text = "Zandstorm";
                        break;
                    case 741:
                        text = "Mist";
                        break;
                    case 800:
                        text = "Heldere hemel";
                        break;
                    case 801:
                        text = "Enkele wolken";
                        break;
                    case 802:
                        text = "Licht bewolkt";
                        break;
                    case 803:
                        text = "Bewolkt met opklaringen";
                        break;
                    case 804:
                        text = "Zwaar bewolkt";
                        break;
                    case 900:
                        text = "Tornado";
                        break;
                    case 901:
                        text = "Tropische storm";
                        break;
                    case 902:
                        text = "Orkaan";
                        break;
                    case 903:
                        text = "Koud";
                        break;
                    case 904:
                        text = "Warm";
                        break;
                    case 905:
                        text = "Winderig";
                        break;
                    case 906:
                        text = "Hagel"
                }
                return text
            }, scope.weathertype = attrs.weathertype || "weather", scope.switchView = function (selectedView) {
                scope.weathertype = selectedView, scope.getWeather(selectedView)
            }, scope.getWeather = function (weathertype) {
                var actionUrl = "/srv/weather/d/" + weathertype;
                $http({method: "GET", url: actionUrl}).success(function (result) {
                    scope.weather = result.data
                }).error(function () {
                })
            }, initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("widget", ["_", "$templateCache", "$http", "$compile", "HelperService", "eventsService", "WidgetService", function (_, $templateCache, $http, $compile, Helper, Events) {
        return{restrict: "A", templateUrl: "/assets/aOS/js/common/views/widget.htm", replace: !0, controller: "os.widgets.WidgetController", scope: {config: "=?", parameters: "=?", userEditable: "=?", type: "@"}, link: function ($scope, element) {
            function evaluateWidgetId(id) {
                return void 0 !== $scope.config._id && $scope.config._id === id
            }

            function onWidgetDependenciesLoaded(widgetId) {
                evaluateWidgetId(widgetId) ? ($scope.widgetLoaded = !0, $scope.widgetLoading = !1, $scope.widgetError = !1, Events.unsubscribe("widget.dependenciesLoaded", onWidgetDependenciesLoaded), $http.get($scope.config.assets.template[0], {cache: $templateCache}).success(function (response) {
                    var el = $compile(response)($scope), target = $(element[0]).find(".widget-actual");
                    target.html(el)
                })) : ($scope.widgetLoading = !1, $scope.widgetLoaded = !0, $scope.widgetError = !0)
            }

            function onWidgetStartLoading(widgetId) {
                evaluateWidgetId(widgetId) && ($scope.widgetLoaded = !1, $scope.widgetLoading = !0)
            }

            function onWidgetFinishLoading(widgetId) {
                evaluateWidgetId(widgetId) && ($scope.widgetLoading = !1, $scope.widgetLoaded = !0)
            }

            function onWidgetDestroy(widgetId) {
                if (evaluateWidgetId(widgetId)) {
                    var target = $(element[0]).find(".widget-actual");
                    target.html("")
                }
            }

            $scope.widgetLoading = !0, $scope.widgetLoaded = !1, $scope.widgetError = !1, $scope.template = {url: ""}, Events.subscribe("widget.dependenciesLoaded", onWidgetDependenciesLoaded, $scope), Events.subscribe("widget.startLoading", onWidgetStartLoading, $scope), Events.subscribe("widget.finishloading", onWidgetFinishLoading, $scope), Events.subscribe("widget.destroy", onWidgetDestroy, $scope)
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("widgetSettings", ["TagsService", "ContentService", "eventsService", "_", function (Tags, Content, Events, _) {
        return{restrict: "A", scope: {ngModel: "=", settingsTemplate: "@", type: "@", channel: "="}, controller: "os.widgets.WidgetSettingsController", link: function (scope) {
            function initialize() {
                switch (scope.type) {
                    case"content":
                        0 === scope.options.tags.length && loadTags(), scope.ngModel.tags instanceof Array || (scope.ngModel.tags = []), 0 === scope.options.contentType.length && loadContentTypes();
                        break;
                    case"calendar":
                        break;
                    case"rss":
                        scope.ngModel.custom = scope.ngModel.custom || {};
                        break;
                    case"showcase":
                        break;
                    case"tabs":
                        scope.ngModel.tabs = scope.ngModel.tabs || []
                }
            }

            function loadTags() {
                Tags.getTags(function (response) {
                    var option, options = [];
                    _.each(response.data.tags, function (data) {
                        data instanceof Array ? _.each(data, function (tag) {
                            option = {key: tag.name, value: tag.name}, options.push(option)
                        }) : (option = {key: data.name, value: data.name}, options.push(option))
                    }), scope.options.tags = options
                })
            }

            function loadContentTypes() {
                Content.getContentTypes(function (response) {
                    var options = [], option = {};
                    _.each(response, function (type) {
                        option = {key: type.key, value: type.value.title}, options.push(option)
                    }), scope.options.contentType = options
                })
            }

            scope.state = {customRSS: !1}, scope.options = {tags: [], contentType: [], viewMode: [
                {key: "feed", value: "Feed"},
                {key: "list", value: "Lijst"}
            ], tabs: []}, scope.validation = {viewMode: {required: !0, errorMessage: "Gelieve een type te kiezen."}, tabContent: {required: !0, errorMessage: "Gelieve een item te kiezen."}}, scope.toggleCustomRSS = function () {
                scope.state.customRSS = !scope.state.customRSS
            }, scope.addTab = function () {
                scope.editingTab = {title: "Nieuw Item", contentType: "", contentId: "", contentTitle: ""}
            }, scope.removeTab = function (index) {
                scope.ngModel.tabs.splice(index, 1), scope.editingTab = {}
            }, scope.fetchContent = function (query, callback) {
                if (0 === query.length)return void(scope.options.tabs.length = 0);
                var filters = {title: [
                    {key: query, value: query, type: "titel"}
                ], status: [
                    {key: 5, value: "Gepubliceerd", type: "status"}
                ], kanaal: [
                    {key: scope.channel._id, value: scope.channel.name, type: "kanaal"}
                ]};
                Content.search(filters, function (response) {
                    var options = [];
                    _.each(response, function (item) {
                        var option = {key: item.id, value: item.title};
                        options.push(option)
                    }), callback(options)
                })
            }, scope.selectContentItem = function (fieldName, value) {
                var item = _.find(scope.options.tabs, {key: value}), exists = _.find(scope.ngModel.tabs, {contentId: value});
                item && !exists && (scope.editingTab.contentId = item.key, scope.editingTab.contentTitle = item.value, scope.editingTab.title = item.value, scope.ngModel.tabs.push(_.cloneDeep(scope.editingTab)), scope.editingTab = {})
            }, Events.subscribe("widgetSettings.rendered", initialize)
        }}
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.directive("windowResize", ["$timeout", "$window", function ($timeout, $window) {
        return{restrict: "A", transclude: !0, scope: {onResize: "=", direction: "@"}, template: "<div ng-transclude></div>", link: function (scope) {
            function initialize() {
                var newWidth = 0, newHeight = 0;
                switch (height = $window.outerHeight, width = $window.outerWidth, scope.direction) {
                    case"horizontal":
                        checkDirections = function () {
                            return newWidth = $window.outerWidth, newWidth !== width
                        };
                        break;
                    case"vertical":
                        checkDirections = function () {
                            return newHeight = $window.outerHeight, newHeight !== height
                        };
                        break;
                    default:
                        checkDirections = function () {
                            return newHeight = $window.outerHeight, newWidth = $window.outerWidth, newHeight !== height || newWidth !== width
                        }
                }
            }

            var checkDirections, timer, width = 0, height = 0;
            $window.onresize = function (e) {
                checkDirections() && (void 0 !== timer && $timeout.cancel(timer), $timeout(function () {
                    scope.onResize && scope.onResize(e), scope.$$phase || scope.$apply()
                }, 500))
            }, scope.$on("$destroy", function () {
                $timeout.cancel(timer)
            }), initialize()
        }}
    }])
}(angular, antwerpOS), function (ng, aOS, Leaflet) {
    "use strict";
    aOS.factory("LayerFactory", ["$http", "$cookies", "$interpolate", "eventsService", "HelperService", "PoiService", "_", function ($http, $cookies, $interpolate, Events, Helper, POI, _) {
        function Layer(settings, config) {
            this.css = "marker-" + settings.key, this.cluster = null, this.crowdsourced = settings.crowdsourced || !1, this.filter = settings.filter || "1=1", this.icon = settings.iconPath, this.label = settings.value, this.name = settings.key, this.radius = settings.radius || 100, this.tags = settings.tags || [], this.template = settings.template, this.type = settings.type || "esriGeometryPoint", this.url = config.mapArcGisService + settings.layerId + "/", this.layerId = settings.layerId, this.pointIdAttribute = settings.pointIdAttribute, this.isDisabled = settings.disabled || !1, this.isLoading = !1, this.isVisible = !1
        }

        var CustomMarker = Leaflet.Marker.extend({html: "", options: {layerId: "layerId", markerId: "markerId"}}), getPOIDetails = function (event, layer, poi) {
            var layerId = Helper.verifyNamespace("target.options.layerId", event), markerId = Helper.verifyNamespace("target.options.markerId", event), poiId = POI.createPoiId(layerId, markerId), expression = $interpolate(layer.template), template = expression(poi.properties);
            Events.publish("marker.clicked", {id: poiId, layerid: layerId, data: template})
        };
        return Layer.prototype.toggle = function (map, visible) {
            visible ? this.unset(map.L) : this.set(map.L)
        }, Layer.prototype.set = function (LObject) {
            switch (this.type) {
                case"esriGeometryPoint":
                    this.cluster = this.clusteredFeatureLayer(), this.cluster.addTo(LObject);
                    break;
                case"esriGeometryPolygon":
                    this.cluster = this.getFeatureLayer(), this.cluster.addTo(LObject);
                    break;
                case"astadCrowdsourcePoint":
                    this.cluster = this.getCrowdsourceLayer(), this.cluster.addTo(LObject)
            }
        }, Layer.prototype.unset = function (LObject) {
            LObject.removeLayer(this.cluster)
        }, Layer.prototype.clusteredFeatureLayer = function () {
            var self = this, icon = Leaflet.icon({iconUrl: this.icon, iconSize: [40, 40], iconAnchor: [17.5, 13.5], popupAnchor: [0, -11]}), fl = new Leaflet.esri.clusteredFeatureLayer(this.url, {cluster: new Leaflet.MarkerClusterGroup({maxClusterRadius: this.radius, iconCreateFunction: function (cluster) {
                return new Leaflet.DivIcon({html: "<div><span>" + cluster.getChildCount() + "</span></div>", className: "marker-cluster marker-cluster-medium cluster-" + self.css, iconSize: Leaflet.point(40, 40)})
            }}), createMarker: function (feature, latlng) {
                var point = {attributes: feature.properties}, foo = new CustomMarker(latlng, {icon: icon, layerId: self.layerId, markerId: POI.getPointId(self, point)});
                return foo
            }, onEachMarker: function (feature, marker) {
                _.forIn(feature.properties, function (prop, key, collection) {
                    (null === prop || "/" === prop) && (collection[key] = "")
                }), marker.on("click", function (e) {
                    getPOIDetails(e, self, feature)
                })
            }, where: this.filter});
            return fl
        }, Layer.prototype.getFeatureLayer = function () {
            var self = this, fl = new Leaflet.esri.featureLayer(this.url, {style: function (feature) {
                return{color: self.getColor(feature), weight: 2, opacity: 1, fillOpacity: .5}
            }, onEachFeature: function (feature, polygon) {
                polygon.options.layerId = self.layerId, polygon.options.markerId = POI.getPointId(self, {attributes: feature.properties}), polygon.on("click", function (e) {
                    getPOIDetails(e, self, feature)
                })
            }});
            return fl
        }, Layer.prototype.getCrowdsourceLayer = function () {
        }, Layer.prototype.getColor = function (feature) {
            var color = "#219dc8", colors = {Rood: "#c3012f", Geel: "#fdcc00", Oranje: "#f8b42b", Blauw: "#089ad7", Lichtgroen: "#97c006", Donkergroen: "#009d81"};
            return feature.properties && feature.properties.TARIEFKLEUR && (color = colors[feature.properties.TARIEFKLEUR]), color
        }, Layer.prototype.update = function (fn) {
            if (this.crowdsourced) {
                var self = this;
                self.name = self.label, $http({method: "PUT", url: "/srv/stadsmap/api/crowdsourcelayer/" + this._id, data: self, AOS: $cookies.AOS}).success(function (response) {
                    fn(response)
                })
            }
        }, Layer.prototype.remove = function (fn) {
            this.crowdsourced && $http({method: "DELETE", url: "/srv/stadsmap/api/crowdsourcelayer/" + this._id}).success(function (response) {
                fn(response)
            })
        }, Layer.prototype.addMarker = function () {
        }, Layer.prototype.removeMarker = function () {
        }, Layer
    }])
}(angular, antwerpOS, window.L), function (ng, aOS, Leaflet) {
    "use strict";
    aOS.factory("MapFactory", ["$http", "$location", "$timeout", "_", function ($http, $location, $timeout, _) {
        function Map(config, appConfig, options) {
            var self = this;
            this.address = config.address || {}, this.latitude = config.latitude || appConfig.defaults.point.lat, this.longitude = config.longitude || appConfig.defaults.point.lng, this.modus = "view", this.zoom = config.zoom || appConfig.defaults.zoom, this.appConfig = _.cloneDeep(appConfig), this.visibleLayers = config.layers || [], this.editMode = void 0 !== config.editMode ? config.editMode : !1, this.addedMarkers = [], this.L = Leaflet.map(options.elm, {zoomControl: !1}).setView([this.latitude, this.longitude], this.zoom), Leaflet.esri.basemapLayer("Gray").addTo(self.L), Leaflet.esri.basemapLayer("GrayLabels").addTo(self.L);
            var tiledMap = new Leaflet.esri.TiledMapLayer(self.appConfig.mapTileLayerUrl, {attribution: self.appConfig.mapAttribution || "", opacity: self.appConfig.mapOpacity || 1, minZoom: self.appConfig.mapMinZoom || 10, maxZoom: self.appConfig.mapMaxZoom || 19, bounds: [
                [51.150574051317115, 4.2262017084086585],
                [51.38000365439694, 4.490560228916116]
            ]});
            tiledMap.addTo(self.L), options.controls && self.setMapControl()
        }

        return Map.prototype.setMapControl = function () {
            var self = this, control = Leaflet.control.zoom({position: "bottomleft"}), buttonCurrPos = control._createButton('<i class="icon-stadsmap-locateme"></i>', "Toon huidige positie", "leaflet-control-current-position", null, function () {
                buttonCurrPos.classList.add("searching"), self.L.on("locationfound", self.onLocationFound), self.L.on("locationerror", self.onLocationError), self.L.locate({setView: !0, maxZoom: 18})
            });
            $timeout(function () {
                var container = control.getContainer();
                container.appendChild(buttonCurrPos)
            }, 2e3), control.addTo(this.L)
        }, Map.prototype.setPosition = function (position, zoom) {
            position[0] = position[0] || this.appConfig.defaults.point.lat, position[1] = position[1] || this.appConfig.defaults.point.lng, zoom = zoom || this.appConfig.defaults.zoom, this.L.setView(position, zoom)
        }, Map.prototype.getCurrentPosition = function () {
            if (navigator.geolocation)return navigator.geolocation.getCurrentPosition(this.setPosition), {label: this.appConfig.defaults.currentPosition, latLng: null, css: "loading"};
            var latLng = this.appConfig.defaults.point.lat + "," + this.appConfig.defaults.point.lng;
            return{label: this.appConfig.defaults.point.label, latLng: latLng, css: "latlng-valid"}
        }, Map.prototype.setCurrentPosition = function () {
            this.route.startPoint = this.getCurrentPosition()
        }, Map.prototype.addMarker = function (point) {
            var icon = Leaflet.icon({iconUrl: "/assets/stadsmap/gfx/markers/marker.svg", iconSize: [40, 40], iconAnchor: [17.5, 13.5], popupAnchor: [0, -11]}), latlong = {lat: parseFloat(point.lat), lng: parseFloat(point.lng)}, self = this, marker = _.find(self.addedMarkers, function (mrk) {
                return mrk.lat === latlong.lat && mrk.lng === latlong.lng
            });
            marker || (marker = Leaflet.marker(latlong, {icon: icon}), self.addedMarkers.push(marker), marker.addTo(self.L).bindPopup(point.address).openPopup())
        }, Map.prototype.removeMarker = function (point) {
            var self = this, marker = _.findIndex(self.addedMarkers, function (mrk) {
                return mrk._latlng.lat === point.lat && mrk._latlng.lng === point.lng
            });
            marker > -1 && (self.L.removeLayer(self.addedMarkers[marker]), self.addedMarkers.splice(marker, 1))
        }, Map.prototype.onLocationFound = function (e) {
            var radius = e.accuracy / 2, icon = Leaflet.icon({iconUrl: "/assets/stadsmap/gfx/markers/marker.svg", iconSize: [40, 40], iconAnchor: [17.5, 13.5], popupAnchor: [0, -11]}), control = e.target.getContainer(), buttons = control.getElementsByTagName("a"), self = this;
            Leaflet.marker(e.latlng, {icon: icon}).addTo(self).bindPopup("U bevindt zich binnen " + radius + " meter van dit punt").openPopup(), _.each(buttons, function (btn) {
                if (btn.className.indexOf("leaflet-control-current-position") > -1) {
                    btn.classList.remove("searching");
                    var icon = $(btn).find(".icon-stadsmap-locateme");
                    icon && icon.removeClass("icon-stadsmap-locateme").addClass("icon-stadsmap-locateme_active")
                }
            })
        }, Map.prototype.onLocationError = function (e) {
            var control = e.target.getContainer(), buttons = control.getElementsByTagName("a");
            _.each(buttons, function (btn) {
                if (btn && btn.className.indexOf("leaflet-control-current-position") > -1) {
                    btn.classList.remove("searching");
                    var icon = $(btn).find(".icon-stadsmap-locateme_active");
                    icon && icon.removeClass("icon-stadsmap-locateme_active").addClass("icon-stadsmap-locateme")
                }
            })
        }, Map
    }])
}(angular, antwerpOS, window.L), function (ng, aOS, Leaflet) {
    "use strict";
    aOS.factory("MarkerFactory", ["$http", "_", "AppConfig", function ($http, _) {
        function Marker(params) {
            params = arguments[0] || {}, this._id = params._id || null, this.description = params.description || "", this.latitude = params.latitude || null, this.longitude = params.longitude || null, this.picture = params.picture || null
        }

        return Marker.prototype.set = function (layer, points) {
            var icon = Leaflet.icon({iconUrl: "/assets/stadsmap/gfx/markers/marker.svg", iconSize: [40, 40], iconAnchor: [17.5, 13.5], popupAnchor: [0, -11]});
            return _.each(points, function (point) {
                var marker = new Leaflet.Marker(new Leaflet.LatLng(point.latitude, point.longitude), {icon: icon, title: point.description});
                marker.bindPopup("<div><h3>" + point.description + "</h3></div>"), layer.addLayer(marker)
            }), layer
        }, Marker.prototype.unset = function () {
        }, Marker.prototype.create = function (layerid, fn) {
            $http({method: "POST", url: "/srv/stadsmap/api/crowdsourcelayer/" + layerid + "/points/", data: {points: [
                {latitude: this.latitude, longitude: this.longitude, description: this.description, picture: ""}
            ]}}).success(function (response) {
                fn(response)
            })
        }, Marker.prototype.update = function () {
        }, Marker.prototype.remove = function (layerid, fn) {
            var self = this;
            $http({method: "DELETE", url: "/srv/stadsmap/api/crowdsourcelayer/" + layerid + "/points/" + self._id}).success(function (response) {
                fn(response)
            })
        }, Marker
    }])
}(angular, antwerpOS, window.L), function () {
    "use strict";
    antwerpOS.factory("ImagePreloader", ["$q", "$timeout", function ($q, $timeout) {
        function Preloader(imageLocation) {
            this.imageLocation = imageLocation, this.states = {pending: 1, loading: 2, resolved: 3, rejected: 4}, this.state = this.states.pending, this.deferred = $q.defer(), this.promise = this.deferred.promise
        }

        return Preloader.preloadImage = function (imageLocation) {
            var preloader = new Preloader(imageLocation);
            return preloader.load()
        }, Preloader.prototype = {constructor: Preloader, isInitiated: function () {
            return this.state !== this.states.pending
        }, isRejected: function () {
            return this.state === this.states.rejected
        }, isResolved: function () {
            return this.state === this.states.resolved
        }, load: function () {
            return this.isInitiated() ? this.promise : (this.state = this.states.loading, this.loadImageLocation(this.imageLocation), this.promise)
        }, handleImageError: function (imageLocation) {
            this.isRejected() || (this.state = this.states.rejected, this.deferred.reject(imageLocation))
        }, handleImageLoad: function () {
            this.isRejected() || (this.state = this.states.resolved, this.deferred.resolve(this.imageLocation))
        }, loadImageLocation: function (imageLocation) {
            var preloader = this, image = $(new Image).load(function (event) {
                $timeout(function () {
                    preloader.handleImageLoad(event.target.src), preloader = image = event = null
                })
            }).error(function (event) {
                $timeout(function () {
                    preloader.handleImageError(event.target.src), preloader = image = event = null
                })
            }).prop("src", imageLocation)
        }}, Preloader
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.factory("StateFactory", ["eventsService", "_", function (Events) {
        function State(config) {
            var self = this;
            for (var prop in config)self[prop] = config[prop];
            config.events && Events.subscribe("state.transition", function (state, name, data) {
                if (self.states[state]) {
                    if (name && self.name !== name)return;
                    self.states[state].data = data, self.transitionTo(state)
                }
            })
        }

        return State.prototype.transitionTo = function (state, permissions, fn) {
            var canTransitionTo = !1;
            if ("string" == typeof this.current) {
                if ("string" != typeof state)return;
                canTransitionTo = this.canTransitionTo(state, permissions), canTransitionTo ? (this.states[state].onEnter && this.states[state].onEnter(), this.current = state) : null === canTransitionTo && (Events.publish("state.transition", state), canTransitionTo = !1), fn && fn(canTransitionTo)
            } else {
                if (!state instanceof Array)return;
                this.current.length = [];
                var i = 0, l = state.length;
                for (i = 0; l > i; i += 1)this.current.indexOf(state[i]) > -1 || (canTransitionTo = this.canTransitionTo(state[i]), canTransitionTo && this.current.push(state[i]));
                fn && fn()
            }
        }, State.prototype.canTransitionTo = function (state, permissions) {
            var s = this.states[state];
            if (!s)return null;
            if (!s.permissions)return!0;
            if ("function" == typeof s.permissions)return s.permissions(permissions);
            if (!permissions)return!1;
            if ("function" == typeof permissions)return permissions(s);
            var i = 0, l = s.permissions.length;
            for (i = 0; l > i && !(permissions.indexOf(s.permissions[i]) < 0); i += 1);
            return i !== l ? !1 : !0
        }, State
    }])
}(angular, antwerpOS), function () {
    "use strict";
    antwerpOS.factory("Statusmessage", ["_", function (_) {
        return function (input) {
            function initialize(input) {
                "string" == typeof input ? _msg.setText(input) : _msg.setMessage(input)
            }

            var message = {location: "bar", message: "", type: "E", persistance: "page"}, _msg = this;
            _msg.setLocation = function (location) {
                var whitelist = ["bar", "form", "manual"], locationAllowed = _.contains(whitelist, location);
                return locationAllowed ? (message.location = location, _msg) : new Error("Unacceptable location")
            }, _msg.getLocation = function () {
                return message.location
            }, _msg.setPersistance = function (persistance) {
                var whitelist = ["timer", "page", "app", "forever", ""], persistanceAllowed = _.contains(whitelist, persistance);
                return persistanceAllowed ? (message.persistance = persistance, _msg) : new Error("Unacceptable persistance")
            }, _msg.getPersistance = function () {
                return message.persistance
            }, _msg.setText = function (input) {
                return"string" != typeof input ? new Error("Message must be a string") : (message.message = input, _msg)
            }, _msg.getText = function () {
                return message.message
            }, _msg.setType = function (msgType) {
                var whitelist = ["E", "W", "S", "I"], typeAllowed = _.contains(whitelist, msgType);
                return typeAllowed ? (message.type = msgType, _msg) : new Error("Unacceptable message type")
            }, _msg.getType = function () {
                return message.type
            }, _msg.getMessage = function () {
                return _.extend({}, message)
            }, _msg.setMessage = function (msg) {
                return msg.location = msg.location || "bar", msg.persistance = msg.persistance || "", msg.type = msg.type || "W", _msg.setText(msg.message || ""), _msg.setType(msg.type), _msg.setPersistance(msg.persistance), _msg.setLocation(msg.location), _msg
            }, initialize(input)
        }
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.filter("capitalize", function () {
        return function (input, eachWord) {
            return"undefined" != typeof input ? eachWord ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            }) : input.charAt(0).toUpperCase() + input.substring(1).toLowerCase() : input
        }
    })
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.filter("datetimestring", ["HelperService", function (Helper) {
        return function (datestring, format) {
            return void 0 !== datestring ? Helper.date.parseToString(datestring, format) : void 0
        }
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.filter("filename", function () {
        return function (url) {
            if ("string" == typeof url) {
                if (void 0 === url)return;
                var lastPart = url.split("/").pop();
                return lastPart
            }
            return url
        }
    })
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.filter("highlight", ["HelperService", function () {
        return function (text, string, highlightClass) {
            if (void 0 !== text) {
                if (!string)return text;
                var re = new RegExp(string, "gi");
                return highlightClass = highlightClass || "textHighlight", text.replace(re, function (s) {
                    return'<span class="' + highlightClass + '">' + s + "</span>"
                })
            }
        }
    }])
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.filter("newlines", function () {
        return function (input) {
            return"undefined" != typeof input ? input.replace(/\n/g, "<br/>") : input
        }
    })
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.filter("orderObjectBy", function () {
        return function (items, field, reverse) {
            var filtered = [];
            return angular.forEach(items, function (item) {
                filtered.push(item)
            }), filtered.sort(function (a, b) {
                return a[field] > b[field]
            }), reverse && filtered.reverse(), filtered
        }
    })
}(angular, antwerpOS), function (ng, aOS) {
    "use strict";
    aOS.filter("plainText", function () {
        return function (text, minimize) {
            if (void 0 !== text) {
                var str = "";
                return str = void 0 !== minimize && minimize ? String(text).replace(/&nbsp;/gm, "").replace(/[^a-z0-9]/gi, "-").toLowerCase() : String(text).replace(/\&nbsp\;|<(?:.|\n)*?>/gm, "")
            }
        }
    })
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.filter("removespaces", function () {
        return function (input) {
            return input ? input.replace(/ /g, "") : ""
        }
    })
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.filter("reverse", function () {
        return function (items) {
            return items.slice().reverse()
        }
    })
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.filter("slice", function () {
        return function (arr, start, end) {
            return arr.slice(start, end)
        }
    })
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.filter("truncate", function () {
        return function (text, length, end) {
            var endChars = [" ", ".", ",", "?", "!", ";", ":"];
            if (void 0 !== text) {
                if (isNaN(length) && (length = 10), void 0 === end && (end = ""), text.length <= length || text.length - end.length <= length)return text;
                var l = length - end.length - 1, str = String(text).substring(0, l), nextchar = String(text).substring(l, l + 1);
                if (endChars.indexOf(nextchar) > -1)return str.substring(0, str.length - 2) + end;
                var parts = str.split(" ");
                parts.splice(parts.length - 1, 1), str = parts.join(" ");
                var lastchar = str.substring(str.length - 1, str.length);
                return endChars.indexOf(lastchar) > -1 ? str.substring(0, str.length - 2) + " " + end : str + " " + end
            }
        }
    })
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.filter("unsafe", function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val)
        }
    })
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("CalendarService", ["$http", "HelperService", "_", function ($http, Helper) {
        function getCalendarsFromService(fn) {
            $http.get(calendarServiceUrl).success(function (response) {
                var calendars = [];
                response.success && (calendars = Helper.verifyNamespace("data.calendars", response) || [], API.calendars = []), fn && fn(calendars)
            })
        }

        function getCalendarFromService(slug, fn) {
            var serviceUrl = calendarServiceUrl + "/" + slug;
            $http.get(serviceUrl).success(function (response) {
                var calendar = {};
                response.success && (calendar = Helper.verifyNamespace("data", response), API.calendar = calendar), fn && fn(calendar)
            })
        }

        var calendarServiceUrl = "/srv/kalender/d/feeds", API = {calendars: [], calendar: {}};
        return API.getCalendars = getCalendarsFromService, API.getCalendar = getCalendarFromService, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("ChannelsService", ["$http", "_", "HelperService", function ($http, _, Helper) {
        function searchChannelsInService(term, fn) {
            $http.get(serviceUrl).success(function (response) {
                if (response.success) {
                    var channels = Helper.verifyNamespace("data", response) || [], matchingChannels = filterChannelsBySearchTerm(channels, term);
                    fn && fn(_.map(matchingChannels, function (channel) {
                        return{id: channel._id, name: channel.name}
                    }))
                }
            })
        }

        function filterChannelsBySearchTerm(channels, searchTerm) {
            var filtered = [];
            return _.forEach(channels, function (channel) {
                channel.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 && filtered.push(channel)
            }), filtered
        }

        var serviceUrl = "/srv/kanalen/d/channels", API = {channels: []};
        return API.search = searchChannelsInService, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("ContentService", ["$http", "_", "HelperService", "$q", function ($http, _, Helper) {
        function getItemsFromService(fn) {
            var serviceUrl = contentServiceUrl + "list";
            $http.get(serviceUrl).success(function (response) {
                var items = [];
                response.success && (items = Helper.verifyNamespace("data.items", response) || [], _.remove(items, {title: null}), API.items = items), fn && fn(items)
            })
        }

        function getFilteredItemsFromService(filters, fn) {
            var serviceUrl = contentServiceUrl + "content-type/";
            if (void 0 !== filters.type) {
                serviceUrl += filters.type;
                var start = filters.start || 0, limit = filters.limit || 12, tags = filters.tags || [];
                serviceUrl += "/start/" + start, serviceUrl += "/limit/" + limit, tags.length > 0 && (serviceUrl += "/tags/" + tags.join(",")), $http.get(serviceUrl).success(function (response) {
                    var responseObject = {};
                    response.success && (responseObject.meta = Helper.verifyNamespace("meta", response) || [], responseObject.items = Helper.verifyNamespace("data", response) || []), fn && fn(responseObject)
                })
            }
        }

        function getItemFromService(id, successfn, errorfn) {
            successfn = successfn || function () {
            }, errorfn = errorfn || function () {
            };
            var serviceUrl = contentServiceUrl + "detail/id/" + id;
            $http.get(serviceUrl, {overrideErrorHandling: void 0 !== errorfn}).success(function (response) {
                var item = {};
                response.success ? (item = Helper.verifyNamespace("data", response) || {}, API.item = item, successfn(item)) : errorfn(response, 404)
            }).error(function (data, status) {
                errorfn(data, status)
            })
        }

        function getChannelData(ids, successfn, errorfn) {
            if (successfn = successfn || function () {
            }, errorfn = errorfn || function () {
            }, ids && !(ids.length <= 0)) {
                var serviceUrl = channelApiServiceUrl + ids.join(",");
                $http.get(serviceUrl).success(function (response) {
                    var items = {};
                    response.success && (items = Helper.verifyNamespace("data", response) || [], successfn(items))
                }).error(function (data, status) {
                    errorfn(data, status)
                })
            }
        }

        function getItemFromServiceBySlug(slug, successfn, errorfn) {
            var serviceUrl = contentServiceUrl + "detail/slug/" + slug;
            $http.get(serviceUrl, {overrideErrorHandling: void 0 !== errorfn}).success(function (response) {
                var item = Helper.verifyNamespace("data", response) || {};
                response.success && (API.item = item), successfn && successfn(item)
            }).error(function (data, status) {
                errorfn && errorfn(data, status)
            })
        }

        function getCommentsFromItemBySlugService(slug, filters, fn) {
            var serviceUrl = contentServiceUrl + "detail/slug/" + slug + "/comments";
            if (void 0 !== filters) {
                var start = filters.start || 0, limit = filters.limit || 12;
                serviceUrl += "/start/" + start, serviceUrl += "/limit/" + limit
            }
            $http.get(serviceUrl).success(function (response) {
                var comments = {};
                response.success && (comments = Helper.verifyNamespace("data", response) || []), fn && fn(comments)
            })
        }

        function getRelatedContentByIdService(id, filters, fn) {
            var serviceUrl = contentServiceUrl + "recent/" + id;
            if (void 0 !== filters) {
                var start = filters.start || 0, limit = filters.limit || 10;
                serviceUrl += "/start/" + start, serviceUrl += "/limit/" + limit
            }
            $http.get(serviceUrl).success(function (response) {
                var items = [];
                response.success && (items = Helper.verifyNamespace("data", response) || [], API.items = items), fn && fn(items)
            })
        }

        function addCommentToItem(id, comment, fn) {
            var serviceUrl = commentServiceUrl + "add/" + id;
            $http.post(serviceUrl, comment).success(function (response) {
                var comment = {};
                response.success && (comment = Helper.verifyNamespace("data", response) || {}), fn && fn(comment)
            })
        }

        function deleteCommentFromItem(id, comment, fn) {
            var serviceUrl = commentServiceUrl + "delete/" + comment.id, comment = "";
            $http.post(serviceUrl).success(function () {
                fn && fn(comment)
            })
        }

        function likeItemInService(id, fn) {
            var serviceUrl = personalizationServiceUrl + "like/" + id;
            $http.get(serviceUrl).success(function (response) {
                fn && fn(response)
            })
        }

        function neutralizeItemInService(id, fn) {
            var serviceUrl = personalizationServiceUrl + "neutralize/" + id;
            $http.get(serviceUrl).success(function (response) {
                fn && fn(response)
            })
        }

        function dislikeItemInService(id, fn) {
            var serviceUrl = personalizationServiceUrl + "dislike/" + id;
            $http.get(serviceUrl).success(function (response) {
                fn && fn(response)
            })
        }

        function getTypesFromService(fn) {
            var serviceUrl = contentServiceUrl + "type-list", types = [];
            $http.get(serviceUrl).success(function (response) {
                response.success && (types = Helper.verifyNamespace("data", response) || [], API.types = types), fn && fn(types)
            })
        }

        function getHomepageContentService(filters, fn) {
            var serviceUrl = homepageServiceUrl;
            filters && (filters.start && (serviceUrl += filters.start), filters.limit && (serviceUrl += filters.start ? "/" + filters.limit : "0/" + filters.limit)), $http.get(serviceUrl).success(function (response) {
                var responseObject = {};
                response.success && (responseObject.meta = Helper.verifyNamespace("meta", response) || [], responseObject.items = Helper.verifyNamespace("data", response) || []), fn && fn(responseObject)
            })
        }

        function getChannelContent(channel, options, fn) {
            var channelServiceUrl = "/srv/kanalen/d/channels/" + channel, start = options.start || 0, limit = options.limit || 10, type = options.type;
            $http.get(channelServiceUrl).success(function (response) {
                var channelId = Helper.verifyNamespace("data._id", response) || null;
                null !== channelId ? getFilteredContentByChannelFromService(channelId, {type: type, start: start, limit: limit}, function (response) {
                    fn && fn(response)
                }) : fn && fn([])
            }).error(function () {
                fn && fn([])
            })
        }

        function getFilteredContentByChannelFromService(channelId, filters, fn) {
            var serviceUrl = contentServiceUrl + "channel/" + channelId + "/";
            if (void 0 !== filters.type) {
                serviceUrl += "content-type/" + filters.type;
                var tags = filters.tags || [];
                tags.length > 0 && (serviceUrl += "string" == typeof tags ? "/tags/" + tags : "/tags/" + tags.join(",")), serviceUrl += "/start/" + filters.start, serviceUrl += "/limit/" + filters.limit, $http.get(serviceUrl).success(function (response) {
                    var responseObject = {};
                    response.success && (responseObject.meta = Helper.verifyNamespace("meta", response) || [], responseObject.items = Helper.verifyNamespace("data", response) || []), fn && fn(responseObject)
                })
            }
        }

        function searchItemsInService(filters, fn) {
            {
                var serviceUrl = "/srv/content/d/search";
                filters.start
            }
            void 0 !== filters.start && (serviceUrl += "/start/" + filters.start, delete filters.start), void 0 !== filters.limit && (serviceUrl += "/limit/" + filters.limit, delete filters.limit);
            for (var prop in filters)0 === filters[prop].length && delete filters[prop];
            $http.post(serviceUrl, filters).success(function (response) {
                var items = [];
                response.success && (items = Helper.verifyNamespace("data", response) || []), fn && fn(items)
            })
        }

        function getEventDatesForChannelFromServer(channel, fn) {
            var serviceUrl = contentServiceUrl + "event/dates/channel/" + channel;
            $http.get(serviceUrl).success(function (response) {
                var dates = [];
                response.success && (dates = Helper.verifyNamespace("data.dates", response) || []), fn && fn(dates)
            })
        }

        function getEventsForChannelFromServer(channel, filters, fn) {
            var serviceUrl = contentServiceUrl + "event", keys = ["types", "district", "street", "startdate", "enddate", "isfree", "limit", "start"];
            channel ? serviceUrl += "/filter/channel/" + channel : void 0 === filters || $.isEmptyObject(filters) || (serviceUrl += "/filter"), _.each(keys, function (key) {
                filters[key] && (serviceUrl += "/" + key + "/" + filters[key])
            }), $http.get(serviceUrl).success(function (response) {
                var events = [], meta = {};
                response.success && (events = Helper.verifyNamespace("data", response) || [], meta = Helper.verifyNamespace("meta", response) || {}), fn && fn(events, meta)
            })
        }

        function getDistrictsFromService(fn) {
            var serviceUrl = contentServiceUrl + "event/districts";
            $http.get(serviceUrl).success(function (response) {
                var districts = [];
                response.success && (districts = Helper.verifyNamespace("data", response) || []), fn && fn(districts)
            })
        }

        function getEventTypesFromService(fn) {
            var serviceUrl = contentServiceUrl + "event/types";
            $http.get(serviceUrl).success(function (response) {
                var types = [];
                response.success && (types = Helper.verifyNamespace("data.type", response) || []), fn && fn(types)
            })
        }

        function toggleFollowChannelInService(slug, fn) {
            var serviceUrl = channelServiceUrl + "/" + slug + "/togglefollow";
            $http.post(serviceUrl, {slug: slug}).success(function (response) {
                response.success && fn && fn(response.data)
            })
        }

        var contentServiceUrl = "/srv/content/d/", commentServiceUrl = "/srv/redactie/d/comments/", personalizationServiceUrl = "/srv/user/d/personalization/content/", homepageServiceUrl = "/srv/kanalen/d/homefeed/", channelServiceUrl = "/srv/kanalen/d/channels", channelApiServiceUrl = "/srv/info/d/channels/", API = {items: [], item: {}};
        return API.getContent = getItemsFromService, API.getFilteredContent = getFilteredItemsFromService, API.getFilteredContentByChannel = getFilteredContentByChannelFromService, API.getItem = getItemFromService, API.getItemBySlug = getItemFromServiceBySlug, API.getRelatedContentById = getRelatedContentByIdService, API.getCommentsFromItemBySlug = getCommentsFromItemBySlugService, API.postComment = addCommentToItem, API.deleteComment = deleteCommentFromItem, API.likeItem = likeItemInService, API.neutralizeItem = neutralizeItemInService, API.dislikeItem = dislikeItemInService, API.getContentTypes = getTypesFromService, API.getChannelContent = getChannelContent, API.getChannelData = getChannelData, API.getHomepageContent = getHomepageContentService, API.search = searchItemsInService, API.getEventDatesForChannel = getEventDatesForChannelFromServer, API.getEventsForChannel = getEventsForChannelFromServer, API.getDistricts = getDistrictsFromService, API.getEventTypes = getEventTypesFromService, API.toggleFollowChannel = toggleFollowChannelInService, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("DialogService", ["$document", "$location", "$compile", "$rootScope", "eventsService", "_", function ($document, $location, $compile, $rootScope, Events) {
        function addDialog(type, config, scope) {
            scope.closeDialogFromOverlay = function (e) {
                e.target.classList.contains("overlay") && Events.publish("dialog.confirm", !1)
            }, scope.closeDialog = closeDialog, scope.config = config || {};
            var overlay = angular.element('<div class="overlay" data-ng-click="closeDialogFromOverlay($event)"></div>');
            dialog = angular.element("<div dialog-box></div>"), dialog.attr("type", type), overlay.append(dialog), dialogEl = $compile(overlay)(scope), body.append(dialogEl), $rootScope.activeDialog = {name: type}
        }

        function closeDialog(scope) {
            if (void 0 !== $rootScope.activeDialog) {
                var dialog = $rootScope.activeDialog.name || "", dClass = "";
                "" !== dialog && (dClass = "." + dialog), $rootScope.activeDialog = {}, $rootScope.fix = !1, scope && scope.$destroy(), $(".dialogBox" + dClass + ", .overlay").remove()
            }
        }

        var dialog, dialogEl, body = $document.find("body").eq(0);
        return{addDialog: addDialog, closeDialog: closeDialog}
    }])
}(angular, antwerpOS),function (ng, aOS, $script, $style) {
    "use strict";
    aOS.service("HelperService", ["_", function (_) {
        function getPossessionSuffix(string) {
            var lastCharacters, attached, appAndS, appNoS, result = string, possibilities = [], i = 0;
            for (lastCharacters = [string.substring(string.length - 1), string.substring(string.length - 2), string.substring(string.length - 3), string.substring(string.length - 4)], attached = ["é", "ou", "eu", "ey", "ez", "oux", "eaux"], appAndS = ["a", "e", "i", "o", "u", "y"], appNoS = ["s", "ce", "x", "z", "as"], i = 0; i < lastCharacters.length; i += 1)appAndS.indexOf(lastCharacters[i]) > -1 && possibilities.push("'s"), appNoS.indexOf(lastCharacters[i]) > -1 && possibilities.push("'"), attached.indexOf(lastCharacters[i]) > -1 && possibilities.push("s");
            return result += possibilities.length > 0 ? possibilities[possibilities.length - 1] : "s"
        }

        function parseDate(date) {
            var dateObj = Date.parse(date);
            return dateObj
        }

        function extractDateFromMongo(date) {
            var timestamp, parsed;
            return timestamp = date.toString().substring(0, 8), parsed = new Date(1e3 * parseInt(timestamp, 16))
        }

        function parseISODateString(string) {
            var regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?", d = string.match(new RegExp(regexp)), offset = 0, date = new Date(d[1], 0, 1);
            d[3] && date.setMonth(d[3] - 1), d[5] && date.setDate(d[5]), d[7] && date.setHours(d[7]), d[8] && date.setMinutes(d[8]), d[10] && date.setSeconds(d[10]), d[12] && date.setMilliseconds(1e3 * Number("0." + d[12])), d[14] && (offset = 60 * Number(d[16]) + Number(d[17]), offset *= "-" === d[15] ? 1 : -1), offset -= date.getTimezoneOffset();
            var time = Number(date) + 60 * offset * 1e3;
            return date.setTime(Number(time)), date
        }

        function parseDateToString(date, style) {
            if (!parseDate(date))return date;
            var clearTime, remainingTime, diff, today, yesterday, thisWeek, hours, minutes, dateObj = Date.parse(date), now = new Date, weekStart = new Date.monday, string = "";
            switch (style) {
                case"prettydate":
                    string = dateObj.toString("d MMMM yyyy");
                    break;
                case"gate15event":
                    string = dateObj.toString("dd/MM/yyyy HH:mm");
                    break;
                case"gate15date":
                    string = dateObj.toString("dd/MM/yyyy");
                    break;
                case"gate15time":
                    string = dateObj.toString("HH:mm");
                    break;
                case"date":
                    string = dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear();
                    break;
                case"time":
                    minutes = dateObj.getMinutes(), minutes = 10 > minutes ? "0" + minutes : minutes, string = dateObj.getHours() + ":" + minutes;
                    break;
                case"full":
                    string = dateObj.toUTCString();
                    break;
                case"ISO":
                    string = dateObj.toString("yyyy-MM-ddTHH:mm:ss.sssZ");
                    break;
                case"stamp":
                    string = +new Date(dateObj) / 1e3;
                    break;
                default:
                    if (clearTime = dateObj.clone().clearTime(), remainingTime = 86400 - dateTimeDiff(date, clearTime), diff = dateTimeDiff(date, now), today = remainingTime > diff, yesterday = 86400 > diff && diff > remainingTime, thisWeek = Date.compare(weekStart, dateObj) < 0, hours = dateObj.getHours(), minutes = dateObj.getMinutes(), minutes = 10 > minutes ? "0" + minutes : minutes, today)string = "Vandaag, " + hours + ":" + minutes; else if (yesterday)string = "Gisteren, " + hours + ":" + minutes; else if (thisWeek) {
                        var weekday = dateObj.toString("dddd");
                        weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1), string = weekday + ", " + hours + "u" + minutes
                    } else string = dateObj.toString("d MMMM yyyy") + ", " + hours + ":" + minutes
            }
            return string
        }

        function dateIsInThePast(dateString) {
            var checkDate = parseDate(dateString), now = new Date;
            return now.isAfter(checkDate)
        }

        function evaluateDates(dates) {
            if (!(dates.length < 1)) {
                var response = !0;
                if (1 === dates.length)response = !dateIsInThePast(dates[0]); else for (var i = dates.length - 1; i > 0; i -= 1) {
                    var fromDate = parseDate(dates[i - 1]), toDate = parseDate(dates[i]);
                    if (null === fromDate || null === toDate)return!0;
                    if (Date.compare(fromDate, toDate) > 0)return response = !1
                }
                return response
            }
        }

        function msToString(ms) {
            var seconds = ms / 1e3, minutes = seconds / 60, hours = minutes / 60, days = hours / 24, months = days / 365 * 12, years = days / 365, string = "";
            return string = years > 1 ? Math.floor(years) + " jaar" : months > 1 ? months > 2 ? Math.floor(months) + " maanden" : Math.floor(months) + " maand" : days > 1 ? days > 2 ? Math.floor(days) + " dagen" : Math.floor(days) + " dag" : hours > 1 ? Math.floor(hours) + " uur" : minutes > 1 ? minutes > 2 ? Math.floor(minutes) + " minuten" : Math.floor(minutes) + " minuut" : Math.floor(seconds) + " seconden", "" !== string ? string : !1
        }

        function dateTimeDiff(from, to, strict, inDays) {
            var first = parseDate(from), second = parseDate(to);
            if (!first || !second)return 0;
            var diff;
            return inDays && (first.clearTime(), second.clearTime()), diff = strict ? (second - first) / 1e3 : Date.compare(first, second) > 0 ? (first - second) / 1e3 : (second - first) / 1e3
        }

        function sinceThen(dateString) {
            var now = new Date, date = parseDate(dateString), diff = dateTimeDiff(date, now, !0);
            return diff
        }

        function untilThen(dateString) {
            var now = new Date, date = parseDate(dateString), diff = dateTimeDiff(now, date, !0);
            return diff
        }

        function sortDates(dateArr, asc, strict) {
            var res, date, dates, diff, response = [], i = 0, j = 0;
            for (strict = void 0 !== strict ? strict : !1, dates = _.cloneDeep(dateArr), i = 0; i < dates.length; i += 1)if (date = dates[i], 0 !== response.length)if (asc)for (j = response.length - 1; j >= 0; j -= 1) {
                if (res = response[j], diff = dateTimeDiff(res, date, !0, strict), diff > 0) {
                    response.splice(j, 0, date);
                    break
                }
                if (0 === diff && strict)break;
                0 === j && response.unshift(date)
            } else for (j = response.length - 1; j >= 0; j -= 1) {
                if (res = response[j], diff = dateTimeDiff(date, res, !0, strict), 0 > diff) {
                    response.splice(j, 0, date);
                    break
                }
                if (0 === diff && strict)break;
                0 === j && response.push(date)
            } else response.push(date);
            return response
        }

        function addToDate(toAdd, date) {
            var adder = {addMilliseconds: toAdd.milliseconds, addSeconds: toAdd.seconds, addMinutes: toAdd.minutes, addHours: toAdd.hours, addDays: toAdd.days, addMonths: toAdd.months, addYears: toAdd.years}, newDate = new Date(date), prop = "";
            for (prop in adder)void 0 !== adder[prop] && newDate[prop](adder[prop]);
            return newDate
        }

        function formatDateyymmdd(dateIn) {
            var year = dateIn.getFullYear(), month = dateIn.getMonth(), day = dateIn.getDate();
            return new Date(year, month, day)
        }

        function isExternalUrl(href) {
            var domain = function (url) {
                return url.replace("http://", "").replace("https://", "").split("/")[0]
            };
            return domain(location.href) !== domain(href)
        }

        function generateGUID() {
            var d = (new Date).getTime(), uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = (d + 16 * Math.random()) % 16 | 0;
                return d = Math.floor(d / 16), ("x" === c ? r : 7 & r | 8).toString(16)
            });
            return uuid
        }

        function stripTags(input, allowed) {
            allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return input.replace(commentsAndPhpTags, "").replace(tags, function ($0, $1) {
                return allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
            })
        }

        var includeJavaScriptFile = function (jsFiles, callback) {
            if (callback = callback || function () {
            }, !_.isArray(jsFiles)) {
                if (!_.isString(jsFiles))return;
                jsFiles = [jsFiles]
            }
            0 === jsFiles.length && callback(), $script(jsFiles, function () {
                callback()
            })
        }, includeJavaScriptFileSynced = function (jsFiles, callback) {
            if (callback = callback || function () {
            }, !_.isArray(jsFiles)) {
                if (!_.isString(jsFiles))return;
                jsFiles = [jsFiles]
            }
            0 === jsFiles.length && callback();
            var i = 0, loadScript = function () {
                $script(jsFiles[i], function () {
                    i += 1, i < jsFiles.length ? loadScript(jsFiles[i + 1]) : callback()
                })
            };
            loadScript()
        }, includeCssFile = function (cssFiles, callback) {
            if (!_.isArray(cssFiles)) {
                if (!_.isString(cssFiles))return;
                cssFiles = [cssFiles]
            }
            var i, nrOfFiles = cssFiles.length;
            for (i = 0; nrOfFiles > i; i += 1)$style.url(cssFiles[i]);
            void 0 !== callback && callback()
        }, verifyNamespace = function (namespace, data) {
            var i, pieces = namespace.split("."), current = data, numberOfPieces = pieces.length;
            if (void 0 === data || "object" != typeof data)return null;
            for (i = 0; numberOfPieces > i; i += 1)if (current = current[pieces[i]], void 0 === current)return null;
            return current
        }, updateObject = function (oldObject, newObject, cleanup) {
            if (void 0 !== newObject) {
                if (void 0 === oldObject)return void(oldObject = newObject);
                var prop = "";
                for (prop in oldObject)void 0 !== newObject[prop] ? oldObject[prop] = newObject[prop] : cleanup && delete oldObject[prop];
                for (prop in newObject)void 0 === oldObject[prop] && (oldObject[prop] = newObject[prop])
            }
        }, defaultToWhiteSpace = function (characters) {
            return null === characters ? "\\s" : characters.source ? characters.source : "[" + String(characters).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "]"
        }, nativeTrim = String.prototype.trim, stringTrim = function (str, characters) {
            return null === str ? "" : !characters && nativeTrim ? nativeTrim.call(str) : (characters = defaultToWhiteSpace(characters), String(str).replace(new RegExp("^" + characters + "+|" + characters + "+$", "g"), ""))
        }, nativeTrimLeft = String.prototype.trimLeft, stringLtrim = function (str, characters) {
            return null === str ? "" : !characters && nativeTrimLeft ? nativeTrimLeft.call(str) : (characters = defaultToWhiteSpace(characters), String(str).replace(new RegExp("^" + characters + "+"), ""))
        }, nativeTrimRight = String.prototype.trimRight, stringRtrim = function (str, characters) {
            return null === str ? "" : !characters && nativeTrimRight ? nativeTrimRight.call(str) : (characters = defaultToWhiteSpace(characters), String(str).replace(new RegExp(characters + "+$"), ""))
        }, stringFormat = function () {
            var args = arguments, str = args[0];
            return str.replace(/{(\d+)}/g, function (match, number) {
                var argIsUndefined = "undefined" != typeof args[number];
                return argIsUndefined ? args[number] : match
            })
        }, stringStartsWith = function (str, start) {
            return 0 === str.indexOf(start)
        }, stringEndsWith = function (str, end) {
            return str.slice(-end.length) === end
        }, newParseInt = function (str) {
            return parseInt(str, 10)
        }, stringToTitleCase = function (str) {
            return str.replace(/\w\S*/g, stringCapitalize)
        }, stringCapitalize = function (str) {
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
        }, flattenString = function (str) {
            var defaultDiacriticsRemovalMap = [
                {base: "A", letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
                {base: "AA", letters: /[\uA732]/g},
                {base: "AE", letters: /[\u00C6\u01FC\u01E2]/g},
                {base: "AO", letters: /[\uA734]/g},
                {base: "AU", letters: /[\uA736]/g},
                {base: "AV", letters: /[\uA738\uA73A]/g},
                {base: "AY", letters: /[\uA73C]/g},
                {base: "B", letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
                {base: "C", letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
                {base: "D", letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
                {base: "DZ", letters: /[\u01F1\u01C4]/g},
                {base: "Dz", letters: /[\u01F2\u01C5]/g},
                {base: "E", letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
                {base: "F", letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
                {base: "G", letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
                {base: "H", letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
                {base: "I", letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
                {base: "J", letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g},
                {base: "K", letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
                {base: "L", letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
                {base: "LJ", letters: /[\u01C7]/g},
                {base: "Lj", letters: /[\u01C8]/g},
                {base: "M", letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
                {base: "N", letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
                {base: "NJ", letters: /[\u01CA]/g},
                {base: "Nj", letters: /[\u01CB]/g},
                {base: "O", letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
                {base: "OI", letters: /[\u01A2]/g},
                {base: "OO", letters: /[\uA74E]/g},
                {base: "OU", letters: /[\u0222]/g},
                {base: "P", letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
                {base: "Q", letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
                {base: "R", letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
                {base: "S", letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
                {base: "T", letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
                {base: "TZ", letters: /[\uA728]/g},
                {base: "U", letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
                {base: "V", letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
                {base: "VY", letters: /[\uA760]/g},
                {base: "W", letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
                {base: "X", letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
                {base: "Y", letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
                {base: "Z", letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
                {base: "a", letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
                {base: "aa", letters: /[\uA733]/g},
                {base: "ae", letters: /[\u00E6\u01FD\u01E3]/g},
                {base: "ao", letters: /[\uA735]/g},
                {base: "au", letters: /[\uA737]/g},
                {base: "av", letters: /[\uA739\uA73B]/g},
                {base: "ay", letters: /[\uA73D]/g},
                {base: "b", letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
                {base: "c", letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
                {base: "d", letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
                {base: "dz", letters: /[\u01F3\u01C6]/g},
                {base: "e", letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
                {base: "f", letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
                {base: "g", letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
                {base: "h", letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
                {base: "hv", letters: /[\u0195]/g},
                {base: "i", letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
                {base: "j", letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
                {base: "k", letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
                {base: "l", letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
                {base: "lj", letters: /[\u01C9]/g},
                {base: "m", letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
                {base: "n", letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
                {base: "nj", letters: /[\u01CC]/g},
                {base: "o", letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
                {base: "oi", letters: /[\u01A3]/g},
                {base: "ou", letters: /[\u0223]/g},
                {base: "oo", letters: /[\uA74F]/g},
                {base: "p", letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
                {base: "q", letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
                {base: "r", letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
                {base: "s", letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
                {base: "t", letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
                {base: "tz", letters: /[\uA729]/g},
                {base: "u", letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
                {base: "v", letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
                {base: "vy", letters: /[\uA761]/g},
                {base: "w", letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
                {base: "x", letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
                {base: "y", letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
                {base: "z", letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g},
                {base: "", letters: /[\s\-]/g}
            ];
            if (str) {
                for (var i = 0; i < defaultDiacriticsRemovalMap.length; i += 1)str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
                str = str.toLowerCase()
            }
            return str
        };
        return{includeJavaScript: includeJavaScriptFile, includeJavaScriptSync: includeJavaScriptFileSynced, includeCss: includeCssFile, verifyNamespace: verifyNamespace, updateObject: updateObject, parseInt: newParseInt, generateGUID: generateGUID, string: {stripTags: stripTags, trim: stringTrim, ltrim: stringLtrim, rtrim: stringRtrim, startsWith: stringStartsWith, endsWith: stringEndsWith, toTitleCase: stringToTitleCase, capitalize: stringCapitalize, format: stringFormat, flatten: flattenString, possession: getPossessionSuffix}, date: {add: addToDate, parse: parseDate, parseToString: parseDateToString, hasPassed: dateIsInThePast, evaluate: evaluateDates, diff: dateTimeDiff, sinceThen: sinceThen, sort: sortDates, untilThen: untilThen, parseMongo: extractDateFromMongo, parseISOString: parseISODateString, msToString: msToString, formatDateyymmdd: formatDateyymmdd}, isExternalUrl: isExternalUrl}
    }])
}(angular, antwerpOS, window.$script, window.$style),function (ng, aOS) {
    "use strict";
    aOS.service("LayerService", ["$http", "_", "HelperService", "LayerFactory", function ($http, _, Helper, Layer) {
        function getLayersFromService(fn) {
            $http.get(layersServiceUrl).success(function (response) {
                var layers = [];
                response.success && (layers = Helper.verifyNamespace("data", response) || [], API.layers = layers), fn && fn(layers)
            })
        }

        function parseLayers(layers, map, grouped) {
            var parsed = [], pLayer = {};
            return _.each(layers, function (layer) {
                var layerData = new Layer(layer, map.appConfig), visible = map.visibleLayers.indexOf(layer.layerId) > -1 || !1;
                pLayer = {key: layer.key, layerId: layer.layerId, data: layerData, isVisible: visible}, layer.group && (pLayer.group = _.pluck(layer.group, "id")), grouped && layer.group ? _.each(layer.group, function (layerGroup) {
                    var group = _.find(parsed, {key: layerGroup.id});
                    group ? group.children.push(pLayer) : (group = {key: layerGroup.id, children: [pLayer], label: layerGroup.title}, parsed.push(group))
                }) : parsed.push(pLayer)
            }), parsed = _.each(parsed, function (parsedLayer) {
                parsedLayer.children && (parsedLayer.children = _.sortBy(parsedLayer.children, function (l) {
                    return l.data.label
                }))
            })
        }

        var layersServiceUrl = "/srv/stadsmap/d/layers", API = {layers: [], layer: {}};
        return API.getLayers = getLayersFromService, API.parseLayers = parseLayers, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("MapService", ["_", "HelperService", "MapFactory", "LayerService", "$timeout", "ARCGIS_FEATURESERVER_VERSION", "$http", function (_, Helper, Map, LayerService, $timeout, ARCGIS_FEATURESERVER_VERSION, $http) {
        function createNewMapInService(config, options, fn) {
            var map = new Map(config, API.config, options);
            API.maps[options.id] = map, fn && fn()
        }

        function destroyMapInService(id) {
            delete API.maps[id]
        }

        function toggleLayerInMap(layer, id) {
            var map = API.maps[id];
            if (map) {
                if (map.editMode) {
                    var index = map.visibleLayers.indexOf(layer.layerId);
                    0 > index ? map.visibleLayers.push(layer.layerId) : map.visibleLayers.splice(index, 1)
                }
                layer.data.toggle(map, layer.isVisible), layer.isVisible = !layer.isVisible
            }
        }

        function toggleEditMode(id, value) {
            var map = API.maps[id];
            map && (map.editMode = value)
        }

        function findStreetInService(term, fn) {
            var serviceUrl = "//loc.geopunt.be/geolocation/suggestion?q=" + encodeURIComponent(term + " Antwerpen") + "&callback=JSON_CALLBACK&" + (new Date).getTime();
            $http.jsonp(serviceUrl, {withCredentials: !1, overrideErrorHandling: !0}).success(function (response) {
                var results = Helper.verifyNamespace("SuggestionResult", response) || [];
                fn && fn(results)
            })
        }

        function searchAdressInService(address, fn) {
            var serviceUrl = "//loc.geopunt.be/geolocation/location?q=" + encodeURIComponent(address) + "&callback=JSON_CALLBACK&" + (new Date).getTime();
            $http.jsonp(serviceUrl, {withCredentials: !1, overrideErrorHandling: !0}).success(function (response) {
                var results = Helper.verifyNamespace("LocationResult", response) || [];
                fn && fn(results)
            })
        }

        function addMarker(id, point, fn) {
            var map = API.maps[id], success = !1;
            map && (map.addMarker(point), success = !0), fn && fn(success)
        }

        function removeMarker(id, point, fn) {
            var map = API.maps[id], success = !1;
            map && (map.removeMarker(point), success = !0), fn && fn(success)
        }

        var API = {config: {appName: "StadsPlan", appRoot: "/stadsmap/", serviceUrl: "/srv/stadsmap/d/", mapTileLayerUrl: "//tiles.arcgis.com/tiles/1KSVSmnHT2Lw9ea6/arcgis/rest/services/basemap_stadsplan_v6/MapServer", mapArcGisService: "//services.arcgis.com/1KSVSmnHT2Lw9ea6/ArcGIS/rest/services/" + ARCGIS_FEATURESERVER_VERSION + "/FeatureServer/", mapAttribution: "Stad Antwerpen", mapMinZoom: 10, mapMaxZoom: 19, mapOpacity: 1, defaults: {currentPosition: "huidige locatie", point: {label: "Stadhuis", lat: 51.220978, lng: 4.399258}, zoom: 13}}, maps: {}};
        return API.newMap = createNewMapInService, API.destroyMap = destroyMapInService, API.toggleLayer = toggleLayerInMap, API.toggleEditMode = toggleEditMode, API.search = searchAdressInService, API.addMarker = addMarker, API.removeMarker = removeMarker, API.findStreet = findStreetInService, API
    }])
}(angular, antwerpOS, window.L),function (ng, aOS) {
    "use strict";
    aOS.service("OphaalkalenderService", ["$http", "_", "HelperService", function ($http, _, Helper) {
        function searchOphaalkalender(address, fn, override) {
            var serviceUrl = kalenderServiceUrl + "?street=" + address.street + "&housenumber=" + address.housenumber + "&zipcode=" + address.zipcode;
            $http.get(serviceUrl, {overrideErrorHandling: !!override}).success(function (response) {
                var kalender = {};
                response.success && (kalender = Helper.verifyNamespace("data", response) || {}), fn && fn(kalender, response)
            })
        }

        function findStreetInService(term, fn) {
            $http.get("/srv/d/astad/location/search/" + term).success(function (response) {
                var results = [];
                response.success && (results = Helper.verifyNamespace("data", response) || []), fn && fn(results)
            })
        }

        var kalenderServiceUrl = "/srv/ophaalkalender/d/district/", API = {calendars: []};
        return API.search = searchOphaalkalender, API.findStreetInService = findStreetInService, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("PlanonService", ["$resource", "_", "HelperService", "gettextCatalog", function ($resource, _, Helper, gettextCatalog) {
        function getEvents(filters, fn) {
            resources.events.get(filters).$promise.then(function (response) {
                fn && fn(response)
            })
        }

        function getActivityTypes(fn) {
            fetchStatesRegistry.activities === fetchStates.fetching ? subscribers.activities.push(fn) : fetchStatesRegistry.activities === fetchStates.fetched ? fn && fn(API.activities) : (fetchStatesRegistry.activities = fetchStates.fetching, resources.activities.get().$promise.then(function (response) {
                fetchStatesRegistry.activities = fetchStates.fetched;
                for (var activities = response.data && response.data.activities && response.data.activities.activity ? response.data.activities.activity : []; API.activities.length > 0;)API.activities.pop();
                for (_.each(activities, function (activity) {
                    activity.formattedName = activity.name.replace("ASS:", "").trim(), API.activities.push(activity)
                }), fn && fn(API.activities); subscribers.activities.length > 0;) {
                    var subscriber = subscribers.activities.pop();
                    subscriber(API.activities)
                }
            }))
        }

        function getActivityTypesAsKeyValuePairs(useIdsAsValue, fn) {
            getActivityTypes(function (activities) {
                if (fn) {
                    var keyValuePairs = _.map(activities, function (activity) {
                        return{value: gettextCatalog.getString(activity.formattedName), key: useIdsAsValue ? activity.id : gettextCatalog.getString(activity.formattedName)}
                    });
                    fn(keyValuePairs)
                }
            })
        }

        function getProvisions(fn) {
            fetchStatesRegistry.provisions === fetchStates.fetching ? subscribers.provisions.push(fn) : fetchStatesRegistry.provisions === fetchStates.fetched ? fn && fn(API.provisions) : (fetchStatesRegistry.provisions = fetchStates.fetching, resources.provisions.get().$promise.then(function (response) {
                fetchStatesRegistry.provisions = fetchStates.fetched;
                for (var provisions = response.data && response.data.provisions && response.data.provisions.provision ? response.data.provisions.provision : []; API.provisions.length > 0;)API.provisions.pop();
                for (_.each(provisions, function (provision) {
                    provision.formattedName = provision.name.replace("ASS:", "").trim(), API.provisions.push(provision)
                }), fn && fn(API.provisions); subscribers.provisions.length > 0;) {
                    var subscriber = subscribers.provisions.pop();
                    subscriber(API.provisions)
                }
            }))
        }

        function getProvisionsAsKeyValuePairs(useIdsAsValue, fn) {
            getProvisions(function (provisions) {
                if (fn) {
                    var keyValuePairs = _.map(provisions, function (provision) {
                        return{value: gettextCatalog.getString(provision.formattedName), key: useIdsAsValue ? provision.id : gettextCatalog.getString(provision.formattedName)}
                    });
                    fn(keyValuePairs)
                }
            })
        }

        function getNameForActivityId(id) {
            var activity = _.find(API.activities, function (activity) {
                return activity.id === id
            });
            return _.isObject(activity) ? activity.formattedName : ""
        }

        function getNameForProvisionId(id) {
            var provision = _.find(API.provisions, function (provision) {
                return provision.id === id
            });
            return _.isObject(provision) ? provision.formattedName : ""
        }

        function sendTarmacData(object, fn) {
            resources.sendTarmacData.save(object).$promise.then(function (response) {
                fn && fn(response)
            })
        }

        var fetchStates = {toFetch: 0, fetching: 1, fetched: 2}, fetchStatesRegistry = {activities: fetchStates.toFetch, provisions: fetchStates.toFetch}, subscribers = {activities: [], provisions: []}, resources = {activities: $resource("/srv/gate15/d/zaalreservering/get-activities", {}, {}), provisions: $resource("/srv/gate15/d/zaalreservering/get-voorzieningen", {}, {}), events: $resource("/srv/gate15/d/zaalreservering/get-timetable/:zaalId/:startTime/:endTime", {}, {}), sendTarmacData: $resource("/srv/gate15/d/zaalreservering/reserve", {}, {})}, API = {activities: [], provisions: [], events: []};
        return API.getActivityTypes = getActivityTypes, API.getActivityTypesAsKeyValuePairs = getActivityTypesAsKeyValuePairs, API.getEvents = getEvents, API.getProvisions = getProvisions, API.getProvisionsAsKeyValuePairs = getProvisionsAsKeyValuePairs, API.getNameForActivityId = getNameForActivityId, API.sendTarmacData = sendTarmacData, API.getNameForProvisionId = getNameForProvisionId, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("PluralizationService", [function () {
        function getCollection() {
            var collection = {};
            return collection = {antwoorden: {0: "antwoorden", 1: "antwoord", other: "antwoorden"}, hebben: {0: "heeft", 1: "heeft", other: "hebben"}, lagen: {0: "lagen", 1: "laag", other: "lagen"}, mensen: {0: "mensen", 1: "persoon", other: "mensen"}, reacties: {0: "reacties", 1: "reactie", other: "reacties"}, vinden: {0: "vinden", 1: "vindt", other: "vinden"}, volgen: {0: "volgen", 1: "volgt", other: "volgen"}, volgers: {0: "volgers", 1: "volger", other: "volgers"}, zijn: {0: "is", 1: "is", other: "zijn"}}
        }

        return{getCollection: getCollection}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("PoiService", ["$http", "HelperService", "$interpolate", "ARCGIS_FEATURESERVER_VERSION", "_", function ($http, Helper, $interpolate, ARCGIS_FEATURESERVER_VERSION, _) {
        function fetchLayers(callback) {
            $http.get(layersServiceUrl, {cache: !0}).success(function (response) {
                var layers = [];
                response.success && (layers = Helper.verifyNamespace("data", response) || []), callback && callback(layers)
            })
        }

        function fetchRelatablePointsLayers(callback) {
            fetchLayers(function (layers) {
                if (!layers)return callback(!1);
                var attributableLayers = _.filter(layers, function (layer) {
                    return canPointsBeRelated(layer)
                });
                return attributableLayers.length ? void callback(attributableLayers) : callback(!1)
            })
        }

        function canPointsBeRelated(layer) {
            return _.has(layer, "pointIdAttribute")
        }

        function getLayer(layers, layerid) {
            var layer = _.filter(layers, function (layer) {
                return layer.layerId == layerid
            });
            return layer.length ? layer[0] : !1
        }

        function fetchPointsForLayer(layerid, callback) {
            $http.get(createUrlForLayer(layerid), {withCredentials: !1}).success(function (response) {
                var features = response.features || [];
                callback && callback(features)
            })
        }

        function getPointForLayer(layer, points, pointid) {
            var pointIdAttribute = layer.pointIdAttribute;
            if (pointIdAttribute) {
                var _points = _.filter(points, function (point) {
                    return point.attributes[pointIdAttribute] == pointid
                });
                if (_points.length)return _points[0]
            }
            return!1
        }

        function getPointId(layer, point) {
            return _.has(layer, "pointIdAttribute") ? void 0 === point.attributes[layer.pointIdAttribute] ? !1 : point.attributes[layer.pointIdAttribute] : !1
        }

        function createPoiId(layerid, pointid) {
            function isValid(input) {
                return _.isString(input) || _.isNumber(input)
            }

            return 1 === arguments.length ? isValid(layerid) ? "" + layerid : !1 : isValid(layerid) && isValid(pointid) ? layerid + "::" + pointid : !1
        }

        function getComponentIdsFromPoiId(poiId) {
            var matches = /(.+)::(.+)/.exec(poiId);
            return matches ? {layerid: matches[1], pointid: matches[2], layerOnly: !1} : _.isString(poiId) && poiId.length > 0 && !/.*::.*/.exec(poiId) ? {layerid: poiId, pointid: void 0, layerOnly: !0} : !1
        }

        function fetchComponentsFromPoiId(poiId, cb) {
            var componentIds = getComponentIdsFromPoiId(poiId);
            return componentIds ? void fetchLayers(function (layers) {
                var layerid = componentIds.layerid, pointid = componentIds.pointid, layerOnly = componentIds.layerOnly, layer = getLayer(layers, layerid), poi = {point: void 0, layer: void 0, layerOnly: !1};
                return layer ? layerOnly ? (poi.layer = layer, poi.layerOnly = !0, cb(poi)) : void fetchPointsForLayer(layerid, function (points) {
                    return poi.layer = layer, poi.point = getPointForLayer(layer, points, pointid), cb(poi.point ? poi : !1)
                }) : cb(!1)
            }) : cb(!1)
        }

        function createLabelForPoi(poi) {
            var expression, layerOnly = _.has(poi, "layerOnly") ? poi.layerOnly : !(_.has(poi, "point") && void 0 !== poi.point);
            return layerOnly ? {layerid: poi.layer.layerId, layerLabel: poi.layer.value, pointid: void 0, pointLabel: void 0, layerOnly: layerOnly} : (expression = $interpolate(poi.layer.pointSelectOptionTpl), {layerid: poi.layer.layerId, layerLabel: poi.layer.value, pointid: poi.point.attributes[poi.layer.pointIdAttribute], pointLabel: expression(poi.point.attributes), layerOnly: layerOnly})
        }

        function createPointSelectOptions(layer, points, pointidsToExclude) {
            var pointSelectOptions, expression = $interpolate(layer.pointSelectOptionTpl);
            return pointSelectOptions = _.map(points, function (point) {
                var attributes = point.attributes;
                return{key: attributes[layer.pointIdAttribute], value: expression(attributes)}
            }), pointSelectOptions = _.filter(pointSelectOptions, function (point) {
                return!(_.isUndefined(point.key) || _.isNull(point.key) || _.isString(point.key) && 0 === point.key.length)
            }), pointidsToExclude && (pointSelectOptions = _.filter(pointSelectOptions, function (selectOption) {
                return!_.contains(pointidsToExclude, selectOption.key)
            })), pointSelectOptions
        }

        function createLayerSelectOptions(layers) {
            return _.map(layers, function (layer) {
                return{key: layer.layerId, value: layer.value}
            })
        }

        function fetchContentForPoiIds(poiIds, cb) {
            poiIds = _.isArray(poiIds) ? poiIds : [poiIds], $http({method: "POST", url: poiSearchUrl, params: {"poi[]": poiIds, limit: 10, timeout: 5e3}, dataType: "json"}).success(function (data) {
                data.success ? cb(null, data.results) : cb("No results", null)
            }).error(function () {
                cb("Error fetching content", null)
            })
        }

        function createUrlForLayer(layerid) {
            return argcisServiceUrl + "/FeatureServer/" + layerid + "/query?where=1=1&outFields=*&f=pjson"
        }

        var layersServiceUrl = "/srv/stadsmap/d/layers", argcisServiceUrl = "//services.arcgis.com/1KSVSmnHT2Lw9ea6/ArcGIS/rest/services/" + ARCGIS_FEATURESERVER_VERSION, poiSearchUrl = "/srv/search/d/search-pois", API = {};
        return API.fetchLayers = fetchLayers, API.fetchRelatablePointsLayers = fetchRelatablePointsLayers, API.getLayer = getLayer, API.getPointsForLayer = fetchPointsForLayer, API.getPointForLayer = getPointForLayer, API.getPointId = getPointId, API.createPoiId = createPoiId, API.getComponentIdsFromPoiId = getComponentIdsFromPoiId, API.fetchComponentsFromPoiId = fetchComponentsFromPoiId, API.createLayerSelectOptions = createLayerSelectOptions, API.createPointSelectOptions = createPointSelectOptions, API.createLabelForPoi = createLabelForPoi, API.fetchContentForPoiIds = fetchContentForPoiIds, API.canPointsBeRelated = canPointsBeRelated, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("QueueService", ["$http", "$rootScope", "$q", "eventsService", function ($http, $rootScope, $q, Events) {
        function addToQueue(call) {
            if (void 0 !== call) {
                var d = $q.defer();
                "login" === call.type ? API.authQueue.push({c: call, d: d}) : API.queue.push({c: call, d: d})
            }
        }

        function runQueue(auth) {
            var execNext = function () {
                var task;
                task = auth ? API.authQueue[0] : API.queue[0];
                var call = task.c.call || {}, cData = task.c.data || {}, onSucc = task.c.then, onErr = task.c.err, promise = (task.c.type || "", task.d);
                $http(call, cData).then(function (data) {
                    void 0 !== onSucc && onSucc(data), API.authQueue.shift(), promise.resolve()
                }, function (err) {
                    void 0 !== onErr && onErr(err), promise.reject(err)
                })
            };
            auth ? API.authQueue.length > 0 && execNext() : API.queue.length > 0 && execNext()
        }

        function emptyQueue(auth) {
            auth ? API.authQueue.length = 0 : API.queue.length = 0
        }

        var API = {queue: [], authQueue: []};
        return Events.subscribe("user.auth", function () {
            API.authQueue.length > 0 && runQueue()
        }), {addToQueue: addToQueue, runQueue: runQueue, emptyQueue: emptyQueue}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("RenderService", ["_", "HelperService", function (_, Helper) {
        function renderItem(type, originalObject, style, config) {
            var object = _.cloneDeep(originalObject);
            if (customConfig = config, type in handleRendering)return style in handleRendering[type] ? handleRendering[type][style](object) : handleRendering[type](object, style);
            if (style in handleRendering)return handleRendering[style](type, object);
            throw new Error("Object type or style not defined in the Renderer Service.")
        }

        function truncateString(string, params) {
            var lines = Math.ceil(params.title.length / params.titleLPR) + 1, availableHeight = params.availableHeight - lines * params.titleLH, availableTextLines = Math.floor(availableHeight / params.textLH), truncateCharCount = availableTextLines * params.textLPR;
            return string.substring(0, truncateCharCount) + "..."
        }

        function contentUrlForType(type) {
            var url = "";
            return url = type in urlPaths ? urlPaths[type] : "/" + type + "/"
        }

        function getLocation(event) {
            var location = "";
            return event ? (event.street && null !== event.street && (location += event.street, event.housenumber && null !== event.housenumber && (location += " " + event.housenumber)), event.districtName && null !== event.districtName && (event.street && null !== event.street && (location += ", "), location += event.districtName), location) : location
        }

        function getDuration(event) {
            var duration = "";
            if (!event)return duration;
            var start = Helper.date.parse(event.startDate), end = Helper.date.parse(event.endDate);
            return start && end ? duration = Helper.date.parseToString(start, "time") + " - " + Helper.date.parseToString(end, "time") : duration
        }

        function renderRedactieSnippets(item, object, bannerType) {
            if (item.snippets = [], item.comments = object.comments || [], item.creator = object.creator, item.numberOfComments = object.numberOfComments, item.tags = object.tags, item.likeStatus = object.likeStatus, item.socialImage = "https://assets.antwerpen.be/srv/assets/api/image/662385b9-c3bb-4108-9145-67318e2382e5/antwerpenregistratielogo.png", bannerType = bannerType || "/newsdetail_1columns", _.remove(item.tags, function (tag) {
                return"homepage" === tag || "burger" === tag || "medewerker" === tag
            }), renderBanner(item, object.snippets, bannerType), renderIntro(item, object.snippets), void 0 !== item.image) {
                var url = item.image.src.replace(item.image.src.substr(item.image.src.lastIndexOf("/")), "");
                item.socialImage = url + "/social_image"
            }
            return _.each(object.snippets, function (snippet) {
                var snip = renderSnippetItem(snippet);
                item.snippets.push(snip)
            }), item
        }

        function renderBanner(item, snippets, size) {
            var snippet, first, i = 0, l = snippets.length;
            for (i = 0; l > i; i += 1)if (snippet = snippets[i], "media" === snippet.type) {
                if (snippet.body.banner) {
                    snippet.body.data && snippet.body.data.length > 0 && (item.image = snippet.body.data[0], snippets.splice(i, 1));
                    break
                }
                void 0 === first && snippet.body.data && snippet.body.data.length > 0 && (first = snippet)
            }
            void 0 === item.image && void 0 !== first && (item.image = first.body.data[0], _.remove(snippets, {id: first.id})), void 0 !== item.image && (item.image.src += size)
        }

        function renderIntro(item, snippets) {
            var snippet, i = 0, l = snippets.length;
            for (i = 0; l > i; i += 1)if (snippet = snippets[i], "wysiwyg" === snippet.type && "A" === snippet.template) {
                item.intro = snippet.body.text, snippets.splice(i, 1);
                break
            }
        }

        function renderSnippetItem(snippet) {
            var snippetItem = {id: snippet.id};
            switch (snippet.type) {
                case"media":
                    snippetItem = renderSnippetMediaItem(snippet);
                    break;
                case"wysiwyg":
                    snippetItem = renderSnippetWYSIWYGItem(snippet);
                    break;
                case"table":
                case"hours":
                    snippetItem = renderSnippetTableItem(snippet);
                    break;
                default:
                    snippetItem = renderSnippetDefaultItem(snippet)
            }
            return snippetItem
        }

        function renderSnippetMediaItem(object) {
            return _.each(object.body.data, function (media) {
                if ("image" === media.type) {
                    var extension = media.src.split(".").pop();
                    extension.indexOf("/") < 0 && (media.src += "/newsfeed_1columns")
                } else object.slideshow = !1
            }), object
        }

        function renderSnippetWYSIWYGItem(object) {
            return object.content = {body: object.body.text}, "A" === object.template && (object.content.body = "<p class='lead'>" + object.body.text.replace(/(<([^>]+)>)/gi, "") + "</p>"), object
        }

        function renderSnippetTableItem(object) {
            return object.content = {title: object.body.title, data: object.body.data}, object
        }

        function renderSnippetDefaultItem(object) {
            return object.content = {data: object.body}, object
        }

        function renderFullItem(type, object) {
            var item = {id: object.id, title: object.title, slug: object.slug, date: Helper.date.parseToString(object.publishedAt), type: object.typeName.toLowerCase(), url: object.url, permalink: object.permalink};
            return renderRedactieSnippets(item, object)
        }

        function renderTeaserItem(type, object) {
            var itemBaseUrl = contentUrlForType(type), item = {id: object.id, title: object.title.substring(0, 50) + "...", slug: object.slug, url: itemBaseUrl + object.slug, date: Helper.date.parseToString(object.publishedAt)};
            return renderBanner(item, object.snippets, "/newsdetail_related_thumbnail"), item
        }

        function renderTeaserListItem(type, object) {
            var item = {id: object.id, title: object.title, slug: object.slug, url: object.url, permalink: object.permalink, date: Helper.date.parseToString(object.publishedAt)};
            return item
        }

        function renderTeaserFeedItem(type, object) {
            var item = {id: object.id, title: object.title, slug: object.slug, url: object.url, permalink: object.permalink, date: Helper.date.parseToString(object.publishedAt), type: type};
            return void 0 !== object.humanChannels && (item.channel = object.humanChannels[0], item.channel.thumbnail = item.channel.thumbnail && item.channel.thumbnail.length > 0 ? item.channel.thumbnail + "/profile_previewupload" : ""), renderIntro(item, object.snippets), renderBanner(item, object.snippets, "/newsfeed_1columns"), item
        }

        function renderTeaserFeedHighlightItem(type, object) {
            var itemBaseUrl = "/" + type + "/", item = {id: object.id, title: object.title, slug: object.slug, url: itemBaseUrl + object.slug, date: Helper.date.parseToString(object.publishedAt)}, truncationParameters = {titleLPR: 25, titleLH: 38, availableHeight: 230, textLH: 23, textLPR: 47, title: item.title};
            return item.viewMode = "teaser-feed-highlight", renderIntro(item, object.snippets), renderBanner(item, object.snippets, "/newsfeed_2columns"), "string" == typeof item.content && (item.content = truncateString(item.content, truncationParameters)), item
        }

        function renderTicket(object, style) {
            var ticketItemBaseUrl = "/ticket/tickets/", item = {id: object.id, ticketId: object.caseId, type: object.detail.type, category: object.themes[0], url: ticketItemBaseUrl + object.id, status: object.status, date: object.creationDate.date};
            switch (null !== object.createdBy && (item.author = object.createdBy.firstName + " " + object.createdBy.lastName), style) {
                case"teaser":
                    break;
                case"detail":
                    item.formSections = object.form.sections
            }
            return item
        }

        function renderInputField(object, style) {
            var item = {isVisible: !0};
            if (void 0 !== object.spec.attributes.isVisible && object.spec.attributes.isVisible === !1)return item.isVisible = !1, item;
            switch (style) {
                case"fieldset":
                    item = object;
                    break;
                case"number":
                case"text":
                    object.spec && object.spec.data && object.spec.data.district && (item.district = object.spec.data.district), object.spec && object.spec.data && object.spec.data.district && (item.zipcode = object.spec.data.zipCode), item.label = object.spec && object.spec.options ? object.spec.options.label : "", item.value = object.spec.attributes.mapValue;
                    break;
                case"radio":
                    item.label = object.spec && object.spec.options ? object.spec.options.label : "", item.key = object.spec.attributes.mapValue, _.each(object.spec.options.value_options, function (option) {
                        return String(option.key) === item.key ? (item.value = option.value, !1) : void(item.value = item.key)
                    });
                    break;
                case"textarea":
                    item.label = object.spec && object.spec.options ? object.spec.options.label : "", item.value = object.spec.attributes.mapValue;
                    break;
                case"date":
                    item.label = object.spec && object.spec.options ? object.spec.options.label : "", item.value = object.spec.attributes.mapValue;
                    break;
                case"checkbox":
                    item.label = object.spec && object.spec.options ? object.spec.options.label : "", item.value = object.spec.attributes.mapValue;
                    break;
                case"select":
                    item.label = object.spec && object.spec.options ? object.spec.options.label : "", item.key = object.spec.attributes.mapValue, _.each(object.spec.options.value_options, function (option) {
                        return String(option.key) === item.key ? (item.value = option.value, !1) : void(item.value = item.key)
                    })
            }
            return item
        }

        function renderSearchResult(type, object) {
            object = "undefined" != typeof object ? object : type;
            var item = object;
            return item.thumb && /.*?(srv)(\/)(assets)(\/)(api)/i.test(item.thumb) && (item.thumb = item.thumb + "/searchresults_news_thumbnail"), item
        }

        function renderRSSItem(object) {
            var item = {title: object.title, description: object.description, link: object.description, pubDate: object.pubDate}, prop = "";
            if (customConfig)for (prop in customConfig)item[prop] = Helper.verifyNamespace(customConfig[prop], object) || void 0;
            return item
        }

        function renderUserItem(object) {
            var item = object;
            return item.fullName = object.firstName + " " + object.lastName, item
        }

        function renderEventItem(object) {
            var item = {id: object.id, title: object.title, slug: object.slug, date: Helper.date.parseToString(object.publishedAt), type: object.typeName.toLowerCase(), free: void 0 === object.event ? !1 : object.event.isFree, location: getLocation(object.event), duration: getDuration(object.event), organisation: void 0 === object.event ? "" : object.event.organisation, start: void 0 === object.event ? null : Helper.date.parseToString(object.event.startDate, "date"), end: void 0 === object.event ? null : Helper.date.parseToString(object.event.endDate, "date"), url: object.url, permalink: object.permalink};
            return renderRedactieSnippets(item, object)
        }

        function renderEventTeaserFeedItem(object, type) {
            var item = {id: object.id, title: object.title, slug: object.slug, date: Helper.date.parseToString(object.publishedAt), type: type, location: getLocation(object.event), start: void 0 === object.event ? null : Helper.date.parseToString(object.event.startDate, "date"), end: void 0 === object.event ? null : Helper.date.parseToString(object.event.endDate, "date"), url: object.url, permalink: object.permalink};
            return void 0 !== object.humanChannels && (item.channel = object.humanChannels[0]), renderIntro(item, object.snippets), renderBanner(item, object.snippets, "/newsfeed_1columns"), item
        }

        function renderChannelTeaserFeedItem(object) {
            var item = {id: object._id, name: object.name, background: object.image.background && object.image.background.length > 0 ? object.image.background + "/newsfeed_1columns" : "", thumbnail: object.image.thumbnail && object.image.thumbnail.length > 0 ? object.image.thumbnail + "/profile_previewupload" : "", slug: object.slug, description: object.description, followers: object.followers, owner: object.createdBy, isFollowing: object.isFollowing, hasEditPrivileges: object.hasEditPrivileges};
            return item
        }

        function renderChannelTeaserListItem(object) {
            var item = {id: object._id, name: object.name, thumbnail: object.image.thumbnail && object.image.thumbnail.length > 0 ? object.image.thumbnail + "/profile_previewupload" : "", slug: object.slug, followers: object.followers, owner: object.createdBy, isFollowing: object.isFollowing};
            return item
        }

        function renderChannelTabsItem(object) {
            return renderFullItem(null, object)
        }

        function renderNewsItem(object) {
            var item = {title: object.title, url: object.uriPrefix + "/" + object.slug, publishedAt: object.publishedAt}, diff = 1e3 * Helper.date.diff(Helper.date.parse(item.publishedAt), new Date);
            item.date = Helper.date.msToString(diff) + " geleden";
            var tmp = {};
            return renderIntro(tmp, object.snippets), "undefined" != typeof tmp.intro && (item.intro = tmp.intro), renderBanner(tmp, object.snippets, "/gate15_banner_small"), "undefined" != typeof tmp.image && (item.image = tmp.image), item.body = "", _.each(object.snippets, function (snippet) {
                "wysiwyg" === snippet.type && "B" === snippet.template && (item.body += snippet.body.text)
            }), item
        }

        function renderNewsSlideshow(object) {
            var item = {title: object.title, publishedAt: object.publishedAt}, diff = 1e3 * Helper.date.diff(Helper.date.parse(item.publishedAt), new Date);
            item.date = Helper.date.msToString(diff) + " geleden";
            var tmp = {};
            return renderBanner(tmp, object.snippets, ""), "undefined" != typeof tmp.image && (item.image = tmp.image), item
        }

        function renderNewsDetail(object) {
            var item = {title: object.current.title, publishedAt: object.current.publishedAt};
            return item.date = Helper.date.parseToString(item.publishedAt, "prettydate"), item.author = {avatarUrl: object.current.creator.avatarUrl, firstName: Helper.string.toTitleCase(object.current.creator.firstName), lastName: Helper.string.toTitleCase(object.current.creator.lastName)}, "undefined" != typeof object.previous && null !== object.previous && (item.previous = object.previous.slug), "undefined" != typeof object.next && null !== object.next && (item.next = object.next.slug), renderRedactieSnippets(item, object.current, "/gate15_banner_large")
        }

        function renderBlogItem(object) {
            var item = {title: object.title, url: object.uriPrefix + "/" + object.slug, showAuthor: object.showAuthor}, tmp = {};
            return renderBanner(tmp, object.snippets, "/gate15_banner_small"), "undefined" != typeof tmp.image && (item.image = tmp.image), item.author = {avatarUrl: object.creator.avatarUrl, firstName: Helper.string.toTitleCase(object.creator.firstName), lastName: Helper.string.toTitleCase(object.creator.lastName)}, item.body = "", item.intro = "", _.each(object.snippets, function (snippet) {
                "wysiwyg" === snippet.type && "A" === snippet.template && (item.intro += snippet.body.text)
            }), item
        }

        function renderBlogDetail(object) {
            var item = {title: object.current.title, publishedAt: object.current.publishedAt}, diff = 1e3 * Helper.date.diff(Helper.date.parse(item.publishedAt), new Date);
            return item.date = Helper.date.msToString(diff) + " geleden", item.author = {id: object.current.creator.id, avatarUrl: object.current.creator.avatarUrl, firstName: Helper.string.toTitleCase(object.current.creator.firstName), lastName: Helper.string.toTitleCase(object.current.creator.lastName)}, "undefined" != typeof object.previous && null !== object.previous && (item.previous = object.previous.slug), "undefined" != typeof object.next && null !== object.next && (item.next = object.next.slug), renderRedactieSnippets(item, object.current, "/gate15_banner_large")
        }

        function renderInfoFiche(object) {
            var item = {title: object.title};
            return item.body = "", _.each(object.snippets, function (snippet) {
                "wysiwyg" === snippet.type && "B" === snippet.template && (item.body += snippet.body.text)
            }), item.author = {firstName: Helper.string.toTitleCase(object.creator.firstName), lastName: Helper.string.toTitleCase(object.creator.lastName), img: object.creator.avatarUrl}, item.slug = object.slug, renderRedactieSnippets(item, object, "/gate15_content_large")
        }

        function renderGate15Event(object) {
            var item = {title: object.title, url: "/" + window.multiLang.current.toLowerCase() + object.uriPrefix + "/" + object.slug, date: object.publishedAt};
            item.body = "", _.each(object.snippets, function (snippet) {
                if ("event" === snippet.type) {
                    item.body += snippet.body.description, item.location = snippet.body.venue, snippet.body.dates.sort(function (a, b) {
                        return Helper.date.parse(a.begin).getTime() - Helper.date.parse(b.begin).getTime()
                    });
                    for (var date = new Date, i = 0; i < snippet.body.dates.length; i += 1) {
                        date = Helper.date.parse(snippet.body.dates[i].begin);
                        var today = new Date;
                        if (today.setHours(0, 0, 0), date.getDate() >= today.getDate())break
                    }
                    item.date = date
                }
            });
            var tmp = {};
            return renderIntro(tmp, object.snippets), "undefined" != typeof tmp.intro && (item.intro = tmp.intro), item
        }

        function renderGate15Image(object) {
            var item = {};
            return void 0 !== object.creator && (item.fullName = Helper.string.toTitleCase(object.creator.firstName + " " + object.creator.lastName)), renderBanner(item, object.snippets, ""), item
        }

        var API = {}, customConfig = {}, handleRendering = {snippet: {table: renderSnippetTableItem, hours: renderSnippetTableItem, stadsmap: renderSnippetDefaultItem, media: renderSnippetMediaItem, wysiwyg: renderSnippetWYSIWYGItem, "e-loket": renderSnippetDefaultItem, uit: renderSnippetDefaultItem, url: renderSnippetDefaultItem, related: renderSnippetDefaultItem, event: renderSnippetDefaultItem}, user: {teaser: renderUserItem}, ticket: renderTicket, inputfield: renderInputField, evenement: {"teaser-feed": renderEventTeaserFeedItem, full: renderEventItem, "search-result": renderSearchResult}, channel: {"teaser-feed": renderChannelTeaserFeedItem, "teaser-list": renderChannelTeaserListItem, tabs: renderChannelTabsItem}, full: renderFullItem, rss: renderRSSItem, teaser: renderTeaserItem, "teaser-list": renderTeaserListItem, "teaser-feed": renderTeaserFeedItem, "teaser-feed-highlight": renderTeaserFeedHighlightItem, "search-result": renderSearchResult, "gate15-news": {detail: renderNewsDetail, overview: renderNewsItem, inthepicture: renderNewsItem, homepage: renderNewsItem, "homepage-big": renderNewsItem, slideshow: renderNewsSlideshow}, "gate15-blog": {detail: renderBlogDetail, overview: renderBlogItem, homepage: renderBlogItem}, "gate15-infofiche": {detail: renderInfoFiche}, "gate15-event": {inthepicture: renderGate15Event}, "gate15-image": {inthepicture: renderGate15Image}}, urlPaths = {infofiche: "/infofiches/detail/"};
        return API.renderItem = renderItem, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    function randomID() {
        var id = "" + Math.floor(1e6 * Math.random());
        return id
    }

    aOS.service("SnippetService", ["$http", "HelperService", "RedactieContentService", "RenderService", "_", function ($http, Helper, Content, Renderer, _) {
        function searchSnippetsInApi(term, type, fn) {
            var serviceUrl = searchUrl(type);
            switch (type) {
                case"contact":
                    serviceUrl += "firstname=" + term.firstName + "&lastname=" + term.lastName, searchSnippetData(serviceUrl, type, fn);
                    break;
                case"related":
                    searchContentItems(term, fn);
                    break;
                default:
                    serviceUrl += "q=" + term, searchSnippetData(serviceUrl, type, fn)
            }
        }

        function searchContentItems(term, fn) {
            var filters = {titel: [
                {key: term, value: term, type: "titel"}
            ], status: [
                {key: 5, value: "Gepubliceerd", type: "status"}
            ], limit: 10};
            Content.search(filters, function (response) {
                var result, results = [];
                _.each(response, function (item) {
                    result = {body: {title: item.title, id: item.id}}, results.push(result)
                }), API.results = results, fn && fn(results)
            }, !1)
        }

        function searchSnippetData(serviceUrl, type, fn) {
            API.results.length = 0;
            var snippets = [], parsed = [];
            $http.get(serviceUrl).success(function (response) {
                response.success && (snippets = Helper.verifyNamespace("data", response) || [], parsed = parseSnippets(type, snippets), API.results = parsed), fn && fn(parsed)
            })
        }

        function parseSnippets(type, snippets) {
            var snippet = {}, parsed = [];
            switch (type) {
                case"uit":
                    _.each(snippets.events, function (event) {
                        snippet = {body: event}, parsed.push(snippet)
                    });
                    break;
                case"contact":
                    _.each(snippets.users, function (user) {
                        snippet = {body: user}, parsed.push(snippet)
                    });
                    break;
                case"e-loket":
                    _.each(snippets, function (snip) {
                        snippet = {body: snip}, snippet.body.title = snip.name, parsed.push(snippet)
                    })
            }
            return parsed
        }

        function getSnippetFromService(type, data, fn) {
            var serviceUrl, snippet, snippetType;
            if ("undefined" === data || $.isEmptyObject(data))switch (type) {
                case"contact":
                case"uit":
                case"e-loket":
                case"related":
                    snippetType = "picker";
                    break;
                default:
                    snippetType = type
            }
            if (void 0 !== base[snippetType])snippet = _.cloneDeep(base[snippetType]), "picker" === snippetType && (snippet.body.type = type), snippet.id = randomID(), fn && fn(snippet); else switch (type) {
                case"uit":
                    serviceUrl = buildServiceUrl(type) + data.cdbid, getSnippetData(serviceUrl, type, fn);
                    break;
                case"contact":
                    serviceUrl = buildServiceUrl(type) + data.p_id, getSnippetData(serviceUrl, type, fn);
                    break;
                case"e-loket":
                    serviceUrl = buildServiceUrl(type) + data.slug, getSnippetData(serviceUrl, type, fn);
                    break;
                case"related":
                    getContentData(data.id, type, fn)
            }
        }

        function getContentData(id, type, fn) {
            Content.getFeedItem(id, function (response) {
                var item = Renderer.renderItem(response.typeName, response, "teaser-feed"), snippet = {};
                snippet = {id: randomID(), template: "B", type: type, isInternal: !1, body: item}, fn && fn(snippet)
            })
        }

        function getSnippetData(serviceUrl, type, fn) {
            var snippet = {};
            $http.get(serviceUrl).success(function (response) {
                if (response.success) {
                    snippet = {id: randomID(), template: "B", type: type, isInternal: !1};
                    var result = Helper.verifyNamespace("data", response) || {};
                    switch (type) {
                        case"uit":
                            snippet.body = result.event;
                            break;
                        case"contact":
                            snippet.body = result.user;
                            break;
                        case"e-loket":
                            snippet.body = result
                    }
                }
                fn && fn(snippet)
            })
        }

        var searchUrl = function (type) {
            var url = "/srv/" + type + "/d/snippetsearch?";
            return url
        }, buildServiceUrl = function (type) {
            var url = "";
            switch (type) {
                case"related":
                    url = "/srv/content/d/detail/";
                    break;
                default:
                    url = "/srv/" + type + "/d/snippetdata?q="
            }
            return url
        }, API = {results: [], snippet: {}}, base = {picker: {body: {type: ""}, type: "picker", isInternal: !1}, wysiwyg: {body: {text: ""}, type: "wysiwyg", isInternal: !1, template: "B"}, table: {body: {title: "", data: {}}, type: "table", isInternal: !1}, media: {body: {data: []}, type: "media", isInternal: !1}, stadsmap: {body: {zoom: 13, latitude: 0, longitude: 0, layers: []}, type: "stadsmap", isInternal: !1}, url: {body: {url: "", title: "", alt: ""}, type: "url", isInternal: !1}, hours: {body: {title: "Openingsuren", data: {head: {id: 0, bgColor: "4", cols: [
            {id: 1, content: "Dag", align: "left", isBeingEdited: !1, isSelected: !1},
            {id: 2, content: "Uur", align: "left", isBeingEdited: !1, isSelected: !1}
        ]}, rows: [
            {id: 1, cols: [
                {id: 1, content: "Maandag", isBeingEdited: !1, isSelected: !1},
                {id: 2, content: "7u00 - 21u30", align: "left", isBeingEdited: !1, isSelected: !1}
            ]},
            {id: 2, cols: [
                {id: 1, content: "Dinsdag", isBeingEdited: !1, isSelected: !1},
                {id: 2, content: "7u00 - 21u30", align: "left", isBeingEdited: !1, isSelected: !1}
            ]},
            {id: 3, cols: [
                {id: 1, content: "Woensdag", isBeingEdited: !1, isSelected: !1},
                {id: 2, content: "7u00 - 21u30", align: "left", isBeingEdited: !1, isSelected: !1}
            ]},
            {id: 4, cols: [
                {id: 1, content: "Donderdag", isBeingEdited: !1, isSelected: !1},
                {id: 2, content: "7u00 - 21u30", align: "left", isBeingEdited: !1, isSelected: !1}
            ]},
            {id: 5, cols: [
                {id: 1, content: "Vrijdag", isBeingEdited: !1, isSelected: !1},
                {id: 2, content: "7u00 - 21u30", align: "left", isBeingEdited: !1, isSelected: !1}
            ]},
            {id: 6, cols: [
                {id: 1, content: "Zaterdag", isBeingEdited: !1, isSelected: !1},
                {id: 2, content: "8u00 - 13u00", align: "left", isBeingEdited: !1, isSelected: !1}
            ]},
            {id: 7, cols: [
                {id: 1, content: "Zondag", isBeingEdited: !1, isSelected: !1},
                {id: 2, content: "8u00 - 13u00", align: "left", isBeingEdited: !1, isSelected: !1}
            ]}
        ], tableHeadVisible: !0, tableHeaderData: [], caption: ""}, type: ""}, type: "hours", isInternal: !1}, event: {body: {type: "", tags: [], description: "", venue: "", dates: [
            {begin: new Date, end: new Date}
        ], isFree: !0, price: 0, url: ""}, type: "event", isInternal: !1}};
        return API.snippetSearch = searchSnippetsInApi, API.getSnippet = getSnippetFromService, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("TagsService", ["$http", "_", "HelperService", function ($http, _, Helper) {
        function getCategoriesFromService(fn) {
            var serviceUrl = categoriesServiceUrl + "list";
            $http.get(serviceUrl).success(function (response) {
                var categories = [];
                response.success && (categories = Helper.verifyNamespace("data.tagcategories", response) || [], API.categories = categories), fn && fn(categories)
            })
        }

        function saveCategoryInService(cat, fn) {
            var serviceUrl = categoriesServiceUrl;
            serviceUrl += void 0 !== cat.id ? "edit/" + cat.id : "create", $http.post(serviceUrl, cat).success(function (response) {
                if (response.success) {
                    var category = Helper.verifyNamespace("data", response) || {};
                    if (!$.isEmptyObject(category))if (void 0 !== cat.id) {
                        var _cat = _.find(API.categories, {id: cat.id});
                        for (var prop in category)_cat[prop] = category[prop]
                    } else API.categories.push(category);
                    fn && fn()
                }
            }), fn && fn(cat)
        }

        function removeCategoryFromService(id, fn) {
            var serviceUrl = categoriesServiceUrl + "delete/" + id;
            $http.post(serviceUrl).success(function (response) {
                response.success && _.remove(API.categories, {id: id})
            }), fn && fn()
        }

        function getTagsFromService(fn) {
            $http.get(tagsServiceUrl).success(function (response) {
                if (response.success) {
                    var tags = Helper.verifyNamespace("data.tags", response) || [];
                    API.tags = tags
                }
                fn && fn(response)
            })
        }

        function saveTagInService(tag) {
            var serviceUrl = "";
            serviceUrl = void 0 !== tag.id ? editTagUrl + tag.id : newTagUrl, $http.post(serviceUrl, tag).success(function () {
            })
        }

        function removeTagFromService(id) {
            var serviceUrl = removeTagUrl + id;
            $http.post(serviceUrl).success(function (data) {
                data.success && _.remove(API.tags, {id: id})
            })
        }

        function findTagInService(term, me, fn) {
            $http.post(searchUrl, term).success(function (data) {
                var tags = Helper.verifyNamespace("data.tags", data);
                data.success && (_.remove(tags, {name: me}), fn && fn(tags))
            })
        }

        function searchTagsInService(term, fn) {
            var serviceUrl = searchUrl + "/" + term;
            $http.get(serviceUrl).success(function (response) {
                if (response.success) {
                    var tags = Helper.verifyNamespace("data", response) || [];
                    fn && fn(tags)
                }
            })
        }

        var categoriesServiceUrl = "/srv/tag-beheer/category/d/", tagsServiceUrl = "/srv/tag-beheer/d/list", newTagUrl = "/srv/tag-beheer/d/create", editTagUrl = "/srv/tag-beheer/d/edit/", removeTagUrl = "/srv/tag-beheer/d/delete/", searchUrl = "/srv/tag-beheer/d/search", API = {tags: [], categories: []};
        return API.getCategories = getCategoriesFromService, API.saveCategory = saveCategoryInService, API.removeCategory = removeCategoryFromService, API.getTags = getTagsFromService, API.saveTag = saveTagInService, API.removeTag = removeTagFromService, API.findTag = findTagInService, API.search = searchTagsInService, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("UploadService", ["$http", "$upload", "$q", "HelperService", function ($http, $upload, $q, Helper) {
        function uploadFile(file, url, isPrivate, fn) {
            var pr = isPrivate ? 1 : 0, serviceUrl = "";
            if (void 0 !== url && url.length > 0)serviceUrl = url; else switch (file.data.type) {
                case"image/jpeg":
                case"image/png":
                case"image/pjpeg":
                case"image/gif":
                    serviceUrl = imgUploadServiceUrl;
                    break;
                default:
                    serviceUrl = uploadServiceUrl
            }
            $upload.upload({url: serviceUrl, data: {isPrivate: pr}, file: file.data, fileFormDataName: file.formDataName}).success(function (response) {
                var data = Helper.verifyNamespace("data", response) || {};
                fn && fn(data)
            })
        }

        function deleteFile(filename, name, fn) {
            $http.get(deleteFileUrl + "/" + filename + "/" + name).success(function (response) {
                var data = Helper.verifyNamespace("data", response) || {};
                fn && fn(data)
            })
        }

        function uploadBase64(string, mimeType, fn) {
            $http.post(base64Url, {base64: string, mimeType: mimeType}).success(function (response) {
                var data = Helper.verifyNamespace("data", response) || {};
                fn && fn(data)
            })
        }

        function getMimeTypeFromUrl(url, fn) {
            $http.head(url).success(function (data, status, headers) {
                var h = headers(), mimeType = Helper.verifyNamespace("content-type", h) || "";
                fn && fn(mimeType)
            })
        }

        function imageManipulation(url, params, fn) {
            $http.post("/srv/assets/api/imagemanipulation", {imageUrl: url, filters: params}).success(function (response) {
                var data = Helper.verifyNamespace("data", response) || {};
                fn && fn(data)
            })
        }

        var uploadServiceUrl = "/srv/assets/api/upload", imgUploadServiceUrl = "/srv/assets/api/image", base64Url = "/srv/assets/api/imageBase64", deleteFileUrl = "/srv/assets/api/delete";
        return{upload: uploadFile, deleteFile: deleteFile, uploadBase64: uploadBase64, getMimeType: getMimeTypeFromUrl, imageManipulation: imageManipulation}
    }])
}(angular, antwerpOS),function (ng, aOS, IBAN) {
    "use strict";
    aOS.service("ValidationService", ["HelperService", "_", function (Helper, _) {
        function evaluateRequired(val) {
            return"boolean" == typeof val ? val : void 0 === val || null === val ? !1 : 0 === val.toString().length ? !1 : !0
        }

        function evaluatePattern(val, pattern) {
            var regExp;
            "string" == typeof pattern ? (0 === pattern.indexOf("/") && (pattern = pattern.substring(1, pattern.length)), pattern.lastIndexOf("/") === pattern.length - 1 && (pattern = pattern.substring(0, pattern.length - 1)), regExp = new RegExp(pattern)) : regExp = pattern;
            var mtch = val && val.match(regExp);
            return null !== mtch
        }

        function evaluateNationalNumber(val) {
            if (null === val || void 0 === val)return!1;
            if ("" === val)return!0;
            var rrnr = val.replace(/\.|-|\s/g, ""), dobNr = rrnr.substr(0, 6), counterNr = rrnr.substr(6, 3), controlNr = rrnr.substr(9, 2), isPostY2K = !1, isValidDobNr = !0, isValidCounterNumber = !0;
            if (null === rrnr.match(/^\d{11}$/))return!1;
            var validationNr = 97 - parseInt(dobNr.toString() + counterNr.toString(), 10) % 97;
            if (validationNr !== parseInt(controlNr, 10)) {
                if (validationNr = 97 - parseInt("2" + dobNr.toString() + counterNr.toString(), 10) % 97, validationNr !== parseInt(controlNr, 10))return!1;
                isPostY2K = !0
            }
            var dateOfBirth;
            return dateOfBirth = isPostY2K ? "20" + dobNr : "19" + dobNr, isValidDobNr = dateOfBirth.substr(4, 2) <= 12 && dateOfBirth.substr(4, 2) >= 0 && dateOfBirth.substr(6, 2) <= 31 && dateOfBirth.substr(6, 2) >= 0, isValidCounterNumber = 0 < parseInt(counterNr, 10) < 997, isValidDobNr && isValidCounterNumber
        }

        function evaluateUrl(str) {
            if (null === str || void 0 === str || "" === str)return!0;
            var valid = evaluatePattern(str, /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
            return valid
        }

        function evaluateEmail(str) {
            if (null === str || void 0 === str || "" === str)return!0;
            var validatePattern = evaluatePattern(str, /\S+@\S+\.\S+/);
            return validatePattern === !0 && str.length <= 100 ? !0 : !1
        }

        function evaluateDate(str) {
            if (null === str || void 0 === str || "" === str)return!0;
            var validformat = /^\d{2}\/\d{2}\/\d{4}$/;
            if (!validformat.test(str))return!1;
            var dayfield = str.split("/")[0], monthfield = str.split("/")[1], yearfield = str.split("/")[2], dayobj = new Date(yearfield, monthfield - 1, dayfield);
            return dayobj.getMonth() + 1 !== parseInt(monthfield, 10) || dayobj.getDate() !== parseInt(dayfield, 10) || dayobj.getFullYear() !== parseInt(yearfield, 10) ? !1 : !0
        }

        function evaluateDateNewdate(d, operator) {
            if (null === d || void 0 === d || "" === d || null === operator || void 0 === operator || "" === operator)return!0;
            var dateNow = new Date(Date.now());
            dateNow = Helper.date.formatDateyymmdd(dateNow);
            var dmy = d.split("/"), date = new Date(dmy[2], dmy[1] - 1, dmy[0]), state = !1;
            switch (operator) {
                case">":
                    state = date > dateNow;
                    break;
                case">=":
                    state = date >= dateNow;
                    break;
                case"<":
                    state = dateNow > date;
                    break;
                case"<=":
                    state = dateNow >= date;
                    break;
                case"=":
                    state = date === dateNow
            }
            return state
        }

        function evaluatePhone(str) {
            if (null === str || void 0 === str || "" === str)return!0;
            var valid = evaluatePattern(str, /^(((((0032|\+32){1})|0)([0-9]{1}){1}(\s)?)){1}([0-9]{3}(\s)?){1}([0-9]{2}(\s)?){1}([0-9]{2}){1}$|^((((0032|\+32){1})|0)([0-9]{1}){2}(\s)?){1}([0-9]{2}(\s)?){2}([0-9]{2}){1}$|^((((0032|\+32){1})|0)4([0-9]{2}){1}(\s)?){1}((([0-9]{2}(\s)?){2}([0-9]{2}){1})|(([0-9]{3}(\s){1}){1}([0-9]{3}){1}))$/);
            return valid
        }

        function evaluateIban(str) {
            return null === str || void 0 === str || "" === str ? !0 : IBAN.isValid(str)
        }

        function evaluateBelgianBankAccount(str) {
            if (null === str || void 0 === str || "" === str)return!0;
            if (str = str.replace(/\s|\-/g, ""), str = str.toUpperCase(), str.match(/^BE[0-9]{14}$/))return IBAN.isValid(str);
            if (str.match(/^[0-9]{12}$/)) {
                var mainNumber = parseInt(str.substr(0, 10), 10), controlNumber = parseInt(str.substr(10, 2), 10);
                return mainNumber % 97 === controlNumber
            }
            return!1
        }

        function evaluateEidNumber(n) {
            if (n = "string" == typeof n ? n : n.toString(), 11 !== n.length)return!1;
            var checkDigit = n.substr(n.length - 2, 2), modFunction = function (nr) {
                return 97 - nr % 97
            }, nrToCheck = parseInt(n.substr(0, 9), 10);
            return modFunction(nrToCheck) === parseInt(checkDigit, 10) ? !0 : (nrToCheck = parseInt("2" + n.substr(0, 9), 10), modFunction(nrToCheck) === checkDigit)
        }

        function evaluateACard(n) {
            n = "string" == typeof n ? n : n.toString();
            for (var len = n.length, mul = 0, prodArr = [
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
            ], sum = 0; len--;)sum += prodArr[mul][parseInt(n.charAt(len), 10)], mul ^= 1;
            return sum % 10 === 0 && sum > 0
        }

        function validateInputfield(validation, model, type) {
            if (!validation.required)switch (type) {
                case"phone":
                    return{valid: evaluatePhone(model), message: "Voer een geldig Belgisch telefoonnummer in."};
                case"email":
                    return{valid: evaluateEmail(model), message: "Voer een geldig emailadres in."}
            }
            var validators = {length: checkLength, required: checkRequired, match: checkMatch, date: checkDate, validators: checkValidator}, checks = {}, validator = "", check = "", errorMessage = "";
            for (validator in validators)if (checks[validator] = validators[validator](validation[validator], model, type), !checks[validator])break;
            for (check in checks)if (!checks[check])return validation.errorMessage = void 0 !== validation.errorMessage ? validation.errorMessage : "", errorMessage = void 0 !== validation[check] && void 0 !== validation[check].errorMessage ? validation[check].errorMessage : validation.errorMessage, {valid: !1, message: errorMessage};
            return{valid: !0}
        }

        function evaluateCheckbox(value, model, options, type) {
            var check = !1;
            switch (type) {
                case"checkboxlist":
                    return model.length > 0 ? model.indexOf(value) > -1 : !1;
                case"checkboxtree":
                    if (void 0 !== model[value]) {
                        var option = _.find(options, {key: value});
                        return void 0 === option.options ? !0 : model[value].length !== option.options.length ? !1 : !0
                    }
                    for (var prop in model)if (check = model[prop].indexOf(value) > -1)break;
                    return check
            }
        }

        function evaluateCheckboxTreeParent(value, model, options) {
            var option = _.find(options, {key: value});
            if (void 0 !== model[value]) {
                if (void 0 === option.options)return!1;
                if (model[value].length !== option.options.length)return!0
            }
            return!1
        }

        function evaluateDigits(val) {
            var regExp = new RegExp("^[0-9]+$"), mtch = val && val.match(regExp);
            return null !== mtch
        }

        function checkRequired(validation, value) {
            if (void 0 !== validation && validation) {
                var check = evaluateRequired(value);
                return check
            }
            return!0
        }

        function checkLength(validation, value) {
            if (void 0 !== validation) {
                var min = 0, max = 0, length = 0;
                return min = validation.min || 0, max = validation.max || Number.POSITIVE_INFINITY, length = null === value ? 0 : value.length, length >= min && max >= length
            }
            return!0
        }

        function checkMatch(validation, value, type) {
            if (void 0 !== validation) {
                if (void 0 !== validation.element) {
                    var check = $("#" + validation.element);
                    return void 0 !== check && value === check.val()
                }
                if (void 0 !== validation.pattern)return evaluatePattern(value, validation.pattern);
                switch (type) {
                    case"url":
                        return evaluateUrl(value);
                    case"email":
                        return evaluateEmail(value);
                    case"phone":
                        return evaluatePhone(value);
                    default:
                        return!0
                }
            }
            return!0
        }

        function checkDate(validation, value, type) {
            if ("date" !== type && "datetime" !== type)return!0;
            if (void 0 !== validation) {
                var pastCheck, check = !0;
                return void 0 !== validation.hasPassed && (pastCheck = Helper.date.hasPassed(value), check = validation.hasPassed ? pastCheck : !pastCheck), void 0 !== validation.before && (check = checkChronologic(value, validation.before, "before")), void 0 !== validation.after && (check = checkChronologic(value, validation.after, "after")), check
            }
            return!0
        }

        function checkValidator(validation, value) {
            var result = !0;
            if (void 0 !== validation)for (var v in validation) {
                var validator = validation[v];
                switch (validator.name) {
                    case"RijksregisterNummerValidator":
                        evaluateNationalNumber(value) || (result = !1);
                        break;
                    case"Date":
                        evaluateDate(value) || (result = !1);
                        break;
                    case"PastDateValidator":
                        evaluateDateNewdate(value, "<") || (result = !1);
                        break;
                    case"FutureDateValidator":
                        var operator = ">";
                        validator.options && validator.options.inclusive === !0 && (operator = ">="), evaluateDateNewdate(value, operator) || (result = !1);
                        break;
                    case"Iban":
                        evaluateIban(value) || (result = !1);
                        break;
                    case"BelgianBankAccountValidator":
                        evaluateBelgianBankAccount(value) || (result = !1);
                        break;
                    case"BicValidator":
                        value.match(/^[a-zA-Z]{4}[a-zA-Z]{2}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/) || (result = !1);
                        break;
                    case"EmailAddress":
                        evaluateEmail(value) || (result = !1);
                        break;
                    case"BelgianEidNumberValidator":
                        evaluateEidNumber(value) || (result = !1);
                        break;
                    case"Digits":
                        evaluateDigits(value) || (result = !1);
                        break;
                    case"ACardValidator":
                        evaluateACard(value) || (result = !1)
                }
            }
            return result
        }

        function checkChronologic(value, validation, before) {
            var date = Helper.date.parse(validation[before]), check = !0;
            if (void 0 === date || null === date || isNaN(date.getTime())) {
                var elm = $("#" + validation[before])[0];
                void 0 !== elm && null !== elm ? "before" === before ? check = Helper.date.evaluate([value, elm.value]) : "after" === before && (check = Helper.date.evaluate([elm.value, value])) : check = !Helper.date.hasPassed(value)
            } else check = !Helper.date.evaluate([validation[before], value]);
            return check
        }

        function evaluateLength(value, validation) {
            var length = 0, result = {};
            return length = null === value ? 0 : value.length, result = {valid: !1, details: {min: validation.min, max: validation.max, length: length, remaining: validation.max - length, percent: 0}}, length > validation.max || length < validation.min ? (result.valid = !1, result) : (result.valid = !0, result.details.percent = Math.round((validation.max - (length + 1)) / validation.max * 100), result)
        }

        var urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/, regexTemplates = {url: urlPattern};
        return{regexTemplates: regexTemplates, evaluateRequired: evaluateRequired, evaluatePattern: evaluatePattern, evaluateNationalNumber: evaluateNationalNumber, evaluateUrl: evaluateUrl, evaluateEmail: evaluateEmail, evaluateDate: evaluateDate, evaluatePhone: evaluatePhone, evaluateIban: evaluateIban, evaluateBelgianBankAccount: evaluateBelgianBankAccount, evaluateEidNumber: evaluateEidNumber, validateInputfield: validateInputfield, evaluateCheckbox: evaluateCheckbox, evaluateCheckboxTreeParent: evaluateCheckboxTreeParent, evaluateLength: evaluateLength, evaluateACard: evaluateACard}
    }])
}(angular, antwerpOS, window.IBAN),function (ng, aOS) {
    "use strict";
    aOS.service("WidgetService", ["_", "HelperService", "$http", "$templateCache", function (_, Helper, $http, $templateCache) {
        function loadTemplateFile(templateFiles, callback) {
            $http.get(templateFiles, {cache: $templateCache}).success(function (html) {
                return callback(html)
            })
        }

        function getWidgetsFromService(fn) {
            $http.get(widgetServiceUrl).success(function (response) {
                var widgets = [];
                response.success && (widgets = Helper.verifyNamespace("data", response) || [], API.options = widgets), fn && fn(widgets)
            })
        }

        function loadWidget(widget) {
            var check = void 0 !== _.find(API.widgets, {parent: widget.parent});
            check || API.widgets.push(widget)
        }

        function getWidgetFromService(type, id, fn) {
            var widget = _.find(API.loadedWidgets, {type: type});
            if (void 0 !== widget)return void 0 !== id && id.length > 0 && (widget.parent = id), loadWidget(widget), void(fn && fn(widget));
            var serviceUrl = widgetServiceUrl + "/" + type;
            $http.get(serviceUrl).success(function (response) {
                widget = {}, response.success && (widget = Helper.verifyNamespace("data", response) || {}, widget.parent = id, void 0 === API.loadedWidgets[type] && (API.loadedWidgets[type] = widget), loadWidget(widget)), fn && fn(widget)
            })
        }

        var widgetServiceUrl = "/srv/kanalen/d/widgets", API = {options: [], loadedWidgets: {}, widgets: []};
        return API.getWidgets = getWidgetsFromService, API.getWidget = getWidgetFromService, API.loadTemplate = loadTemplateFile, API
    }])
}(angular, antwerpOS),angular.module("rendererTemplates", []).run(["$templateCache", function ($templateCache) {
    "use strict";
    $templateCache.put("assets/aOS/js/common/views/content-types/channel/channel-tabs.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<div data-ng-if="renderableObject.image !== undefined" media-item data-file="renderableObject.image" data-show-description="false"></div>\n		<article>\n			<header>\n				<span class="date">\n					<time>{{ renderableObject.date | date:\'dd/MM/yyyy - HH:mm\' }}</time>\n					<span class="favorite like-{{renderableObject.likeStatus}}" data-ng-click="toggleLiking()"></span>\n				</span>\n				<h1>{{ renderableObject.title }}</h1>\n			</header>\n			<section>\n				<p class="lead">{{renderableObject.intro | plainText}}</p>\n			</section>\n			<div class="news-content-snippets" ng-repeat="snippet in renderableObject.snippets">\n				<div renderer\n					 ng-model="snippet"\n					 type="snippet"\n					 view-mode="{{snippet.type}}">\n				</div>\n			</div>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/channel/channel-teaser-feed.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="channel-teaser box">\n		<header>\n			<div class="channel-banner">\n				<img data-ng-src="{{renderableObject.background}}" src="/assets/kanalen/gfx/banner-placeholder.svg" alt="{{renderableObject.name}}" />\n			</div>\n			<div class="channel-thumb">\n				<img class="rounded" data-ng-src="{{renderableObject.thumbnail}}" src="/assets/kanalen/gfx/no-thumbnail.svg" alt="{{renderableObject.name}}" />\n			</div>\n		</header>\n\n		<section class="channel-info">\n			<h2><a href="/kanalen/{{renderableObject.slug}}" title="{{renderableObject.name}}">{{renderableObject.name}}</a></h2>\n			<p>{{renderableObject.description}}</p>\n		</section>\n\n		<footer class="channel-followers">\n			<p translate translate-n="renderableObject.followers" translate-plural="{{renderableObject.followers}} volgers">1 volger</p>\n			<div data-ng-if="user">\n				<button data-ng-if="user.id !== renderableObject.owner && !renderableObject.hasEditPrivileges" class="button-transparent button-small" data-ng-click="publishEvent(\'channel.toggleFollow\', renderableObject.slug)" ng-show="renderableObject.isFollowing">{{ \'niet meer volgen\' | translate }}</button>\n				<button data-ng-if="user.id !== renderableObject.owner && !renderableObject.hasEditPrivileges" class="button-transparent button-small" data-ng-click="publishEvent(\'channel.toggleFollow\', renderableObject.slug)" ng-hide="renderableObject.isFollowing">{{\'volgen\' | translate}}</button>\n				<button data-ng-if="user.id === renderableObject.owner || renderableObject.hasEditPrivileges" class="button-small" data-ng-click="publishEvent(\'channel.edit\', renderableObject.slug)">{{\'bewerken\' | translate}}</button>\n			</div>\n		</footer>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/channel/channel-teaser-list.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="channel-teaser list clear">\n		<div class="channel-thumb">\n			<img class="rounded" data-ng-src="{{renderableObject.thumbnail}}" src="/assets/kanalen/gfx/no-thumbnail.svg" alt="{{renderableObject.name}}" />\n		</div>\n\n		<div class="channel-info clear">\n			<div class="followWrapper" data-ng-if="user">\n				<button data-ng-if="user.id !== renderableObject.owner && !renderableObject.hasEditPrivileges" class="button-transparent button-small" data-ng-click="publishEvent(\'channel.toggleFollow\', renderableObject.slug)" ng-show="renderableObject.isFollowing">{{ \'niet meer volgen\' | translate }}</button>\n				<button data-ng-if="user.id !== renderableObject.owner && !renderableObject.hasEditPrivileges" class="button-transparent button-small" data-ng-click="publishEvent(\'channel.toggleFollow\', renderableObject.slug)" ng-hide="renderableObject.isFollowing">{{\'volgen\' | translate}}</button>\n			</div>\n			<div class="titleWrapper">\n				<span class="channel-title text-bold"><a href="/kanalen/{{ renderableObject.slug }}" title="{{renderableObject.name}}">{{ renderableObject.name }}</a></span>\n				<span class="small" translate translate-n="renderableObject.followers" translate-plural="{{renderableObject.followers}} volgers">1 volger</span>\n			</div>\n		</div>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/evenement/evenement-full.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<div data-ng-if="renderableObject.image !== undefined" media-item data-file="renderableObject.image" data-show-description="false"></div>\n		<article>\n			<header>\n				<h1>{{ renderableObject.title }}</h1>\n				<div class="eventInfo" data-ng-if="(renderableObject.start.length + renderableObject.location.length + renderableObject.duration.length) > 0">\n					<p data-ng-if="renderableObject.start.length > 0" class="date">{{renderableObject.start}}</p>\n					<p data-ng-if="renderableObject.location.length > 0" class="location">{{renderableObject.location}}</p>\n				</div>\n			</header>\n			<section>\n				<div>\n					<p class="lead">{{renderableObject.intro | plainText}}</p>\n				</div>\n			</section>\n			<section>\n				<div class="news-content-snippets" ng-repeat="snippet in renderableObject.snippets">\n					<div renderer\n						 ng-model="snippet"\n						 type="snippet"\n						 view-mode="{{snippet.type}}">\n					</div>\n				</div>\n			</section>\n			<footer class="personalisation">\n				<div share-buttons data-url="{{renderableObject.permalink}}" data-sharetitle="{{renderableObject.title}}" data-picture="{{renderableObject.socialImage}}"></div>\n			</footer>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/evenement/evenement-teaser-feed.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<a data-ng-if="renderableObject.image !== undefined" href="{{renderableObject.url}}" class="image">\n			<div media-item file="renderableObject.image" show-description="false" show-copy="false" finish-render-event="{{onFinishRender}}"></div>\n		</a>\n		<article>\n			<div data-ng-if="renderableObject.channel.slug.length > 0" class="meta">\n				<a href="/kanalen/{{renderableObject.channel.slug}}" class="channel-origin" data-ng-if="renderableObject.channel">\n					<img class="channel-thumb rounded" src="{{renderableObject.channel.thumbnail}}"/>\n					<span>{{ renderableObject.channel.name }}</span>\n				</a>\n			</div>\n\n			<h1><a href="{{renderableObject.url}}">{{ renderableObject.title }}</a></h1>\n			<div class="eventInfo" data-ng-if="(renderableObject.start.length + renderableObject.location.length) > 0">\n				<p data-ng-if="renderableObject.start.length" class="date">{{renderableObject.start}}</p>\n				<p data-ng-if="renderableObject.location.length > 0" class="location">{{renderableObject.location}}</p>\n			</div>\n			<div>\n				<p class="lead">{{renderableObject.intro | plainText | truncate:250:\'...\'}}</p>\n			</div>\n\n			<div class="actions">\n				<p><a class="plus" href="{{renderableObject.url}}" translate>meer lezen</a></p>\n			</div>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/full.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<div data-ng-if="renderableObject.image !== undefined" media-item data-file="renderableObject.image" data-show-description="false"></div>\n		<article>\n			<header>\n				<span class="date">\n					<time>{{ renderableObject.date | date:\'dd/MM/yyyy - HH:mm\' }}</time>\n					<span class="favorite like-{{renderableObject.likeStatus}}" data-ng-click="toggleLiking()"></span>\n				</span>\n				<h1>{{ renderableObject.title }}</h1>\n			</header>\n			<section>\n				<p class="lead" data-ng-bind-html="renderableObject.intro"></p>\n			</section>\n			<section>\n				<div class="news-content-snippets" ng-repeat="snippet in renderableObject.snippets">\n					<div renderer\n						 ng-model="snippet"\n						 type="snippet"\n						 view-mode="{{snippet.type}}">\n					</div>\n				</div>\n			</section>\n			<footer class="personalisation">\n				<div share-buttons data-type="{{renderableObject.type}}" data-url="{{renderableObject.permalink}}" data-sharetitle="{{renderableObject.title}}" data-picture="{{renderableObject.socialImage}}"></div>\n			</footer>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/gate15-blog/gate15-blog-homepage.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}} gate15-blog">\n	<a class="gate15-blog-box" href="{{ renderableObject.url }}">\n		<header>\n			<div media-item data-ng-if="renderableObject.image !== undefined" file="renderableObject.image" show-description="false" show-copy="false" finish-render-event="{{onFinishRender}}" class="image"></div>\n			<div class="meta">\n				<div>\n					<p><span>{{renderableObject.author.firstName}}</span></p>\n					<h1><span>{{renderableObject.title}}</span></h1>\n				</div>\n			</div>\n		</header>\n		<article>\n			<p data-ng-bind-html="renderableObject.intro"></p>\n		</article>\n		<div class="author">\n			<div user-avatar asset-format="\'profile_previewupload\'" allow-click-action="false" lazyload="true" user="renderableObject.author"></div>\n			<p>{{renderableObject.author.firstName}}</p>\n		</div>\n	</a>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/gate15-blog/gate15-blog-overview.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a class="gate15-blog-box" href="{{ renderableObject.url }}">\n		<header>\n			<div media-item data-ng-if="renderableObject.image !== undefined" file="renderableObject.image" show-description="false" show-copy="false" finish-render-event="{{onFinishRender}}" class="image"></div>\n			<div class="meta">\n				<div>\n					<p><span>{{renderableObject.author.firstName}}</span></p>\n					<h1><span>{{renderableObject.title}}</span></h1>\n				</div>\n			</div>\n		</header>\n		<article>\n			<p data-ng-bind-html="renderableObject.intro"></p>\n		</article>\n		<div class="author">\n			<div user-avatar asset-format="\'profile_previewupload\'" allow-click-action="false" lazyload="true" user="renderableObject.author"></div>\n			<p data-ng-if="renderableObject.showAuthor">{{renderableObject.author.firstName}}</p>\n		</div>\n	</a>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/gate15-event/gate15-event.htm", '<a href="{{renderableObject.url}}" class="borderBox eventsInThePicture span-full tablet--span-4-1 desktop--span-3-1 type-{{renderType}} view-mode-{{renderViewMode}}">\n	<h1>{{renderableObject.title}}</h1>\n	<div data-ng-bind-html="renderableObject.body | truncate:250:\'...\'"></div>\n	<p><span translate><span class="link">Klik hier</span></span> <span translate>voor meer info</span></p>\n</a>'), $templateCache.put("assets/aOS/js/common/views/content-types/gate15-news/gate15-news-homepage-big.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a class="gate15-news-box" href="{{ renderableObject.url }}">\n		<div media-item data-ng-if="renderableObject.image !== undefined" file="renderableObject.image" show-description="false" show-copy="false" finish-render-event="{{onFinishRender}}" class="image"></div>\n		<article>\n			<h1><span>{{ renderableObject.title }}</span></h1>\n			<time datetime="{{ renderableObject.publishedAt }}">{{renderableObject.date}}</time>\n			<div data-ng-bind-html="renderableObject.body | truncate:250:\'...\'"></div>\n		</article>\n	</a>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/gate15-news/gate15-news-homepage.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a class="gate15-news-box" href="{{ renderableObject.url }}">\n		<article>\n			<h1><span>{{ renderableObject.title }}</span></h1>\n			<time datetime="{{ renderableObject.publishedAt }}">{{renderableObject.date}}</time>\n			<div data-ng-bind-html="renderableObject.intro | truncate:250:\'...\'"></div>\n		</article>\n	</a>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/gate15-news/gate15-news-overview.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a class="gate15-news-box" href="{{ renderableObject.url }}">\n		<div media-item data-ng-if="renderableObject.image !== undefined" file="renderableObject.image" show-description="false" show-copy="false" finish-render-event="{{onFinishRender}}" class="image"></div>\n		<article>\n			<h1><span>{{ renderableObject.title }}</span></h1>\n			<time datetime="{{ renderableObject.publishedAt }}">{{renderableObject.date}}</time>\n			<div data-ng-bind-html="renderableObject.body | truncate:250:\'...\'"></div>\n		</article>\n	</a>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/gate15-news/gate15-news.htm", '<a href="{{renderableObject.url}}" class="borderBox newsInThePicture span-full tablet--span-4-1 desktop--span-3-4 type-{{renderType}} view-mode-{{renderViewMode}}">\n	<h1>{{renderableObject.title}}</h1>\n	<div data-ng-bind-html="renderableObject.intro"></div>\n	<p><span translate><span class="link">Klik hier</span></span> <span translate>voor meer info</span></p>\n</a>'), $templateCache.put("assets/aOS/js/common/views/content-types/infofiche/infofiche-full.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<div data-ng-if="renderableObject.image !== undefined" media-item data-file="renderableObject.image" data-show-description="false"></div>\n		<article>\n			<header>\n				<span class="date">\n					<time>{{ renderableObject.date | date:\'dd/MM/yyyy - HH:mm\' }}</time>\n				</span>\n				<h1>{{ renderableObject.title }}</h1>\n			</header>\n			<section>\n				<p class="lead" data-ng-bind-html="renderableObject.intro"></p>\n			</section>\n			<section>\n				<div class="news-content-snippets" ng-repeat="snippet in renderableObject.snippets">\n					<div renderer\n						 ng-model="snippet"\n						 type="snippet"\n						 view-mode="{{snippet.type}}">\n					</div>\n				</div>\n			</section>\n			<footer class="personalisation">\n				<div share-buttons data-type="{{renderableObject.type}}" data-url="{{renderableObject.slug}}" data-sharetitle="{{renderableObject.title}}" data-picture="{{renderableObject.socialImage}}"></div>\n			</footer>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/infofiche/infofiche-teaser-feed.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<a data-ng-if="renderableObject.image !== undefined" href="{{ renderableObject.url }}" class="image">\n			<div media-item file="renderableObject.image" show-description="false" show-copy="false" finish-render-event="{{onFinishRender}}"></div>\n		</a>\n		<article>\n			<h1><a href="{{ renderableObject.url }}">{{ renderableObject.title }}</a></h1>\n			<div>\n				<p class="lead">{{renderableObject.intro | plainText | truncate:250:\'...\'}}</p>\n			</div>\n			<a class="plus" href="{{ renderableObject.url }}" translate>meer lezen</a>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/infofiche/infofiche-teaser.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a href="{{ renderableObject.url }}">\n		<div class="teaser-content">\n			<time>{{ renderableObject.date | date:\'dd/MM/yyyy - HH:mm\' }}</time>\n			<span>{{ renderableObject.title }}</span>\n		</div>\n	</a>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/inputfield/inputfield-checkbox.htm", '<div data-ng-if="renderableObject.isVisible !== false" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<p>\n		<span class="label span-full tablet--span-half-1 desktop--span-half-1" data-ng-if="renderableObject.label.length !== 0">{{ renderableObject.label }}: </span>\n		<span class="value span-full tablet--span-half-2 desktop--span-half-2">{{ renderableObject.value }}</span>\n	</p>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/inputfield/inputfield-date.htm", ' <div data-ng-if="renderableObject.isVisible !== false" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<p>\n		<span class="label span-full tablet--span-half-1 desktop--span-half-1" data-ng-if="renderableObject.label.length !== 0">{{ renderableObject.label }}: </span>\n		<span class="value span-full tablet--span-half-2 desktop--span-half-2">{{ renderableObject.value }}</span>\n	</p>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/inputfield/inputfield-fieldset.htm", '<div data-ng-if="renderableObject.title.length !== 0" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n\n	<h4>{{ renderableObject.title }}</h4>\n\n	<div renderer\n		 type="inputfield"\n		 view-mode="{{ field.spec.type }}"\n		 ng-model="field"\n		 data-ng-repeat="field in renderableObject.fields | filter:filterInputFields">\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/inputfield/inputfield-number.htm", '<div data-ng-if="renderableObject.isVisible !== false" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<p>\n		<span class="label span-full tablet--span-half-1 desktop--span-half-1" data-ng-if="renderableObject.label.length !== 0">{{ renderableObject.label }}: </span>\n		<span class="value span-full tablet--span-half-2 desktop--span-half-2">{{ renderableObject.value }}</span>\n	</p>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/inputfield/inputfield-radio.htm", '<div data-ng-if="renderableObject.isVisible !== false" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<p>\n		<span class="label span-full tablet--span-half-1 desktop--span-half-1" data-ng-if="renderableObject.label.length !== 0">{{ renderableObject.label }}: </span>\n		<span class="value span-full tablet--span-half-2 desktop--span-half-2">{{ renderableObject.value }}</span>\n	</p>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/inputfield/inputfield-select.htm", '<div data-ng-if="renderableObject.isVisible !== false" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<p>\n		<span class="label span-full tablet--span-half-1 desktop--span-half-1" data-ng-if="renderableObject.label.length !== 0">{{ renderableObject.label }}: </span>\n		<span class="value span-full tablet--span-half-2 desktop--span-half-2">{{ renderableObject.value }}</span>\n	</p>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/inputfield/inputfield-text.htm", '<div data-ng-if="renderableObject.isVisible !== false" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<p>\n		<span class="label span-full tablet--span-half-1 desktop--span-half-1" data-ng-if="renderableObject.label.length !== 0">{{ renderableObject.label }}: </span>\n		<span class="value span-full tablet--span-half-2 desktop--span-half-2">\n			{{ renderableObject.value }} \n			<span data-ng-if="renderableObject.zipcode && renderableObject.district" > \n				({{ renderableObject.zipcode }} {{ renderableObject.district }})\n			</span>\n		</span>\n	</p>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/inputfield/inputfield-textarea.htm", '<div data-ng-if="renderableObject.isVisible !== false" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<p>\n		<span class="label span-full tablet--span-half-1 desktop--span-half-1" data-ng-if="renderableObject.label.length !== 0">{{ renderableObject.label }}: </span>\n		<span class="value span-full tablet--span-half-2 desktop--span-half-2">{{ renderableObject.value }}</span>\n	</p>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/nieuws/nieuws-full.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<div data-ng-if="renderableObject.image !== undefined" media-item data-file="renderableObject.image" data-show-description="false"></div>\n		<article>\n			<header>\n				<span class="date">\n					<time>{{ renderableObject.date | date:\'dd/MM/yyyy - HH:mm\' }}</time>\n					<span class="favorite like-{{renderableObject.likeStatus}}" data-ng-click="toggleLiking()"></span>\n				</span>\n				<h1>{{ renderableObject.title }}</h1>\n			</header>\n			<section>\n				<p class="lead" data-ng-bind-html="renderableObject.intro"></p>\n			</section>\n			<section>\n				<div class="news-content-snippets" ng-repeat="snippet in renderableObject.snippets">\n					<div renderer\n						 ng-model="snippet"\n						 render-type="snippet"\n						 view-mode="{{snippet.type}}">\n					</div>\n				</div>\n			</section>\n			<footer class="personalisation">\n				<div share-buttons data-type="{{renderableObject.type}}" data-url="{{renderableObject.permalink}}" data-sharetitle="{{renderableObject.title}}" data-picture="{{renderableObject.socialImage}}"></div>\n			</footer>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/nieuws/nieuws-teaser-feed-highlight.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<a data-ng-if="renderableObject.image !== undefined" href="{{ renderableObject.url }}" class="image span-full tablet--half-1 desktop--span-8-1">\n			<div media-item file="renderableObject.image" show-description="false" show-copy="false"></div>\n		</a>\n		<article class="span-full tablet--half-2 desktop--span-4-9">\n			<time datetime="{{ renderableObject.date }}">{{ renderableObject.date | date:\'dd-MM-yyyy\' }}</time>\n			<h1><a href="{{ renderableObject.url }}">{{ renderableObject.title }}</a></h1>\n			<div>\n				<p class="lead">{{renderableObject.intro | plainText | truncate:250:\'...\'}}</p>\n			</div>\n			<a class="plus" href="{{ renderableObject.url }}" translate>meer lezen</a>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/nieuws/nieuws-teaser.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a href="{{ renderableObject.url }}">\n		<div class="image-container">\n			<div media-item file="renderableObject.image" show-description="false" show-copy="false"></div>\n		</div>\n		<div class="teaser-content">\n			<time>{{ renderableObject.date | date:\'dd/MM/yyyy - HH:mm\' }}</time>\n			<span>{{ renderableObject.title }}</span>\n		</div>\n	</a>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/rss/rss-teaser-feed.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<article>\n			<time datetime="{{ renderableObject.pubDate }}">{{ renderableObject.pubDate | date:\'dd-MM-yyyy\' }}</time>\n			<h3>{{ renderableObject.title }}</h3>\n			<p>{{renderableObject.description | plainText | truncate:250:\'...\'}}</p>\n			<p><a href="{{ renderableObject.link }}" target="_blank">{{renderableObject.link}}</a></p>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/search-result.htm", '<li class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a href="{{renderableObject.url}}">\n		<span data-ng-if="renderType === \'helpcenter\'" class="help"><i class="thumbs-up"></i>{{renderableObject.likes}}</span>\n		<span data-ng-if="renderType === \'helpcenter\'" class="help"><i class="comment"></i>{{renderableObject.answers}}</span>\n		<h2><i data-ng-if="renderableObject.correct" class="ok"></i>{{renderableObject.title}}</h2>\n		<div class="body" data-ng-if="renderableObject.image.length || renderableObject.text.length">\n			<div class="image" data-ng-if="renderableObject.thumb.length">\n				<img src="{{renderableObject.thumb}}" />\n			</div>\n			<div class="content" data-ng-if="renderableObject.text.length">\n				<p class="short" data-ng-bind-html="renderableObject.text"></p>\n			</div>\n		</div>\n	</a>\n</li>'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-default.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="snippet" snippet type="renderableObject.type" content="renderableObject.content.data" layout="renderableObject.template" editing="false"></div>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-e-loket.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="snippet" snippet type="renderableObject.type" content="renderableObject.content.data" layout="renderableObject.template" editing="false"></div>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-hours.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<h2 data-ng-if="renderableObject.content.title.length > 0">{{renderableObject.content.title}}</h2>\n	<div class="snippet-table">\n		<table>\n			<thead>\n				<tr data-ng-show="renderableObject.content.data.tableHeadVisible">\n					<th class="headerColor-{{renderableObject.content.data.head.bgColor}}" align="{{col.align}}" data-ng-repeat="col in renderableObject.content.data.head.cols">\n						<span data-ng-bind-html="col.content"></span>\n					</th>\n				</tr>\n			</thead>\n\n			<tbody>\n			<tr data-ng-repeat="row in renderableObject.content.data.rows">\n				<td align="left" data-ng-repeat="col in row.cols">\n					<span data-ng-bind-html="col.content"></span>\n				</td>\n			</tr>\n			</tbody>\n		</table>\n		<p data-ng-bind="renderableObject.content.data.caption"></p>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-media.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}} view-mode-{{renderViewMode}}-{{renderableObject.body.data.type}}">\n	<div data-ng-if="renderableObject.body.data.length === 1" media-item data-file="renderableObject.body.data[0]" data-show-description="true"></div>\n	<div data-ng-if="renderableObject.body.data.length > 1">\n		<div data-ng-if="renderableObject.slideshow !== false">\n			<div slideshow data-slides="renderableObject.body.data" data-controls="true" data-autostart="true"></div>\n		</div>\n		<div data-ng-if="renderableObject.slideshow === false">\n			<p data-ng-repeat="object in renderableObject.body.data" media-item data-file="object" data-show-description="true"></p>\n		</div>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-related.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="snippet" snippet type="renderableObject.type" content="renderableObject.content.data" layout="renderableObject.template" editing="false"></div>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-stadsmap.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="snippet" snippet ident="renderableObject.id" type="renderableObject.type" content="renderableObject.content.data" layout="renderableObject.template" editing="false"></div>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-table.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<h3 data-ng-if="renderableObject.content.title.length > 0">{{renderableObject.content.title}}</h3>\n	<div table edit-mode="false" table-data="renderableObject.content.data"></div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-uit.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="snippet" snippet type="renderableObject.type" content="renderableObject.content.data" layout="renderableObject.template" editing="false"></div>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-url.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="snippet-url">\n		<a data-ng-href="{{renderableObject.body.url}}" title="{{renderableObject.body.title}}">\n			{{renderableObject.body.title}}\n		</a>\n	</div>\n</div>'), $templateCache.put("assets/aOS/js/common/views/content-types/snippet/snippet-wysiwyg.htm", '<div data-ng-class="{\'is-internal\': renderableObject.isInternal}" class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div data-ng-bind-html="renderableObject.content.body"></div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/teaser-feed.htm", '<div class="feed-item type-{{renderType}} view-mode-{{renderViewMode}}">\n	<div class="box-media">\n		<a data-ng-if="renderableObject.image !== undefined" href="{{ renderableObject.url }}" class="image">\n			<div media-item file="renderableObject.image" show-description="false" show-copy="false" finish-render-event="{{onFinishRender}}"></div>\n		</a>\n		<article>\n			<div data-ng-if="renderableObject.channel.slug.length > 0" class="meta">\n				<a href="/kanalen/{{renderableObject.channel.slug}}" class="channel-origin" data-ng-if="renderableObject.channel">\n					<img class="channel-thumb rounded" src="{{renderableObject.channel.thumbnail}}"/>\n					<span>{{ renderableObject.channel.name }}</span>\n\n				</a>\n			</div>\n\n			<time datetime="{{ renderableObject.date }}">{{ renderableObject.date | date:\'dd-MM-yyyy\' }}</time>\n			<h1><a href="{{ renderableObject.url }}">{{ renderableObject.title }}</a></h1>\n			<div data-ng-bind-html="renderableObject.intro | truncate:250:\'...\'"></div>\n\n			<div class="actions">\n				<p><a class="plus" href="{{ renderableObject.url }}" translate>meer lezen</a></p>\n			</div>\n		</article>\n	</div>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/teaser-list.htm", '<li class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a href="{{ renderableObject.url }}">\n		<strong>{{ renderableObject.title }}</strong>\n	</a>\n</li>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/ticket/ticket-detail.htm", '<section class="type-{{renderType}} view-mode-{{renderViewMode}} datasection" data-ng-repeat="section in renderableObject.formSections" data-ng-class="{\'hidden\': section.isvisible == false}">\n	<div data-ng-if="section.isvisible !== false">\n		<h2 data-ng-show="section.title.length > 0">{{section.title}}</h2>\n		<p class="footnote" data-ng-bind-html="section.note" data-ng-if="section.note.length > 0" class="sectionNote"></p>\n		<div data-ng-switch on="field.spec.attributes.display" data-ng-repeat="field in section.fields | filter:filterInputFields">\n\n			<!-- FILE INFO -->\n			<div  data-ng-switch-when="file">\n\n\n				<span class="label span-full tablet--span-half-1 desktop--span-half-1">{{field.spec.options.label}}</span>\n\n\n				<span class="value span-full tablet--span-half-2 desktop--span-half-2" data-ng-if="!field.spec.options.imageShow">\n					<p data-ng-if="field.file_metadata.name"><a href="{{\'/srv/ticket/d/file/\' + field.spec.attributes.mapValue}}" target="_blank">{{ field.file_metadata.name }}</a> ({{ field.file_metadata.size }})</p>\n					<p data-ng-if="!field.file_metadata.name">-</p>\n				</span>\n				<span class="value span-full tablet--span-half-2 desktop--span-half-2" data-ng-if="field.spec.options.imageShow">\n					<img data-ng-src="{{\'/srv/ticket/d/file/\' + field.spec.attributes.mapValue}}" alt="{{ field.file_metadata.name }}">\n				</span>\n			</div>\n\n			<!-- CHECKBOX LIST VALUES -->\n\n			<ul data-ng-if="field.spec.attributes.isVisible !== false" data-ng-switch-when="checkboxlist" class="value span-full tablet--span-half-2 desktop--span-half-2">\n				<li class="plus" data-ng-repeat="value in field.spec.attributes.mapValue">{{ value }}</li>\n			</ul>\n\n			<!-- COLLECTION -->\n			<ul data-ng-if="field.spec.attributes.isVisible !== false" data-ng-switch-when="collection" class="value span-full tablet--span-half-2 desktop--span-half-2">\n				<li data-ng-repeat="repeat in field.spec.attributes.mapValue">\n					<strong data-ng-if="repeat.elementLabel">{{ repeat.elementLabel }}</strong>\n					<ul>\n						<li data-ng-repeat="field2 in repeat.fields">\n							{{ field2.label }}: {{ field2.value }}\n						</li>\n					</ul>\n				</li>\n			</ul>\n			<!-- DEFAULT -->\n			<div data-ng-switch-default renderer\n				 type="inputfield"\n				 view-mode="{{ field.spec.type }}"\n				 ng-model="field">\n			</div>\n\n		</div>\n	</div>\n</section>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/ticket/ticket-teaser.htm", '<div class="type-{{renderType}} view-mode-{{renderViewMode}}">\n	<a href="{{ renderableObject.url }}">\n		<span class="hexagon hexagon-{{renderableObject.category}}">&#x2B22;</span>\n\n		<div class="{{renderType}}-content">\n			<h3>{{ renderableObject.type }}</h3>\n			<ul class="meta">\n				<li class="author">{{ renderableObject.author }}</li>\n				<li class="date">{{ renderableObject.date }}</li>\n			</ul>\n			<span class="status status-{{renderableObject.status}}">{{ renderableObject.status }}</span>\n		</div>\n	</a>\n</div>\n'), $templateCache.put("assets/aOS/js/common/views/content-types/user/user-teaser.htm", '<div class="type-user view-mode-{{renderViewMode}}">\n	<div user-avatar data-width="30" data-height="30" data-allow-click-action="false" data-show-status="true" data-user="renderableObject" data-size="profile_balk"></div>\n	<span>{{ renderableObject.fullName }}</span>\n</div>\n')
}]),function (ng, aOS) {
    "use strict";
    aOS.controller("os.apps.LaunchController", ["UserService", "$rootScope", "$scope", "$http", "$routeParams", "AppService", "HelperService", "eventsService", "_", "requestContext", "$route", "AppContext", function (User, $rootScope, $scope, $http, $routeParams, AppService, Helper, eventsService, _, requestContext, $route, AppContext) {
        var appPreloaded = function () {
            $scope.app.appTemplate = $scope.appServiceUrl + "/t/index", $scope.$apply()
        }, getAppScripts = function () {
            $http.get($scope.appServiceUrl + "/d/config").success(function (data) {
                if (data.success === !0) {
                    var scriptList = Helper.verifyNamespace("data.scripts", data), stylesList = Helper.verifyNamespace("data.styles", data), routeList = Helper.verifyNamespace("data.routes", data), paramsList = Helper.verifyNamespace("data.parameters", data);
                    Helper.includeCss(stylesList), loadAppRoutes(routeList), $scope.app.parameters = paramsList, AppContext.setParams(paramsList), Helper.includeJavaScript(scriptList, function () {
                        appPreloaded()
                    })
                }
            })
        }, loadAppRoutes = function (routeList) {
            routeList = routeList || [];
            var route, routeUrl, routeAction, numberOfRoutes = routeList.length, i = 0;
            if (_.isArray(routeList))for (i = 0; numberOfRoutes > i; i += 1)route = routeList[i], routeUrl = "/:lang/" + $routeParams.slugLaunch + "/" + Helper.string.ltrim(route.route, "/"), routeAction = "standard.apps.launch." + route.action, aOS.routeProvider.when(routeUrl, {app: $rootScope.activeApp.slug, action: routeAction})
        }, bootApplication = function () {
            var appSlug = $routeParams.slugLaunch;
            if (void 0 === appSlug) {
                var path = Helper.string.ltrim($route.current.originalPath, "/"), segments = path.split("/");
                appSlug = segments[1]
            }
            return $scope.app.data = AppService.getAppFromSlug(appSlug) || {}, $scope.app.data.url ? (eventsService.publish("app.started", appSlug), AppContext.setCurrent(AppService.getAppFromSlug(appSlug)), $scope.appServiceUrl = $scope.app.data.url.replace(/\/+$/, ""), $rootScope.activeApp = {id: $scope.app.data.id || "", name: $scope.app.data.name || "", slug: appSlug || ""}, getAppScripts(), void $rootScope.nameSpaceHTML()) : void($scope.app = {appTemplate: "/srv/apps/t/pagenotfound"})
        }, renderContext = requestContext.getRenderContext("standard.apps.launch", "slugLaunch");
        $scope.appServiceUrl = "", $scope.app = {}, $scope.$on("requestContextChanged", function () {
            if (renderContext.isChangeRelevant()) {
                var appSlug = $routeParams.slugLaunch;
                if (void 0 === appSlug) {
                    var path = Helper.string.ltrim($route.current.originalPath, "/"), segments = path.split("/");
                    appSlug = segments[1]
                }
                $scope.slugLaunch = appSlug;
                var oldAppSlug = AppContext.getSlug();
                oldAppSlug !== appSlug && ($scope.app = {}, bootApplication())
            }
        }), $scope.$on("$destroy", function () {
            eventsService.publish("app.stopped", AppContext.getCurrent().slug), AppContext.stopApp(), $rootScope.activeApp = null, $rootScope.nameSpaceHTML()
        }), _.isArray(AppService.apps) && 0 === AppService.apps.length || void 0 === AppService.apps ? AppService.getApps(bootApplication) : bootApplication()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.AppsnavController", ["$rootScope", "$scope", "UserService", "eventsService", "AppService", function ($rootScope, $scope, User, eventsService) {
        function toggleApps(state) {
            $rootScope.loggedIn && (state = state || !$rootScope.state.appsnav, $rootScope.state.appsnav = state)
        }

        function startTour() {
            $rootScope.firstLogin = !0, toggleApps()
        }

        $scope.toggleApps = toggleApps, $scope.startTour = startTour;
        var events = [];
        events.push(eventsService.subscribe("toggleSomething", function (toggleThis) {
            "apps" === toggleThis && toggleApps()
        })), $scope.$on("$destroy", function () {
            var i = 0, numberOfEvents = events.length;
            for (i = 0; numberOfEvents > i; i += 1)eventsService.unsubscribe(events[i])
        })
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.apps.store.DetailController", ["$rootScope", "$scope", "$http", "$routeParams", "AppService", "requestContext", "_", function ($rootScope, $scope, $http, $routeParams, AppService, requestContext) {
        function initialize() {
            $scope.getReviews()
        }

        $scope.getReviews = function () {
            $http.get("/srv/apps/d/review/list/" + $scope.appDetail.id + "/" + $scope.reviews.list.length + "/" + $scope.reviews.pageSize).success(function (result) {
                $scope.reviews.list = $scope.reviews.list.length ? $scope.reviews.list.concat(result.data) : result.data
            })
        }, $scope.linkApp = function (appId) {
            AppService.linkApp(appId, function () {
                $scope.appDetail.isInstalled = !0
            })
        }, $scope.unlinkApp = function (appId) {
            AppService.unlinkApp(appId, function () {
                $scope.appDetail.isInstalled = !1
            })
        }, $scope.submitReview = function () {
            var appId = $scope.appDetail.id;
            $http.post("/srv/apps/d/review/add/" + appId, $scope.reviews.current).success(function (data) {
                $scope.reviews.current.body = "", $scope.reviews.current.rating = 0, $scope.reviews.list.unshift(data.data), $scope.appDetail.reviewcount += 1
            })
        }, $scope.showMoreReviews = function () {
            $scope.reviews.page = $scope.reviews.page + 1, $scope.getReviews()
        };
        var renderContext = requestContext.getRenderContext("standard.apps.detail");
        $scope.appService = AppService, $scope.appDetail = AppService.getAppFromSlug($routeParams.slug) || {}, $rootScope.fix = !0, $scope.subview = renderContext.getNextSection(), $scope.reviews = {list: [], current: {}, pageSize: 2}, $scope.currentUser = $rootScope.user, $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        }), initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.apps.StoreController", ["$scope", "$http", "AppService", function ($scope, $http, AppService) {
        $scope.linkApp = AppService.linkApp, $scope.unlinkApp = AppService.unlinkApp, $scope.appService = AppService
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.BetaController", ["$rootScope", "$scope", "$http", "eventsService", function ($rootScope, $scope, $http, eventsService) {
        $scope.getAllPosts = function () {
            $http.get("/srv/a-stad-plus/d/articles/").success(function (response) {
                $scope.posts = response.data
            })
        }, $scope.sendEmail = function () {
            $scope.betaForm.isBusy = !0, eventsService.publish("form.submit", "emailForm"), $http.post(addEmailURL, {email: $scope.betaForm.email.value}, {overrideErrorHandling: !1}).success(function (response) {
                response.success && ($scope.betaForm.isDone = !0), $scope.betaForm.isBusy = !1
            })
        };
        var addEmailURL = "/srv/user/d/add-email-beta";
        $scope.betaForm = {email: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig e-mailadres in te vullen."}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, isBusy: !1, isDone: !1}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.ConfirmController", ["$scope", "eventsService", function ($scope, Events) {
        $scope.confirm = function () {
            Events.publish("dialog.confirm", !0)
        }, $scope.deny = function () {
            Events.publish("dialog.confirm", !1)
        }
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.DialogController", ["$scope", "eventsService", function ($scope, Events) {
        $scope.closeForm = function () {
            Events.publish("dialog.confirm", !1)
        }
    }])
}(angular, antwerpOS),function (ng, aOS, enquire) {
    "use strict";
    aOS.controller("os.HeaderController", ["$rootScope", "$scope", "requestContext", "UserService", "eventsService", "AppService", "NotificationService", "socket", "_", function ($rootScope, $scope, requestContext, User, eventsService, AppService, NotificationService, socket) {
        function getUser(callback) {
            User.getUser(function (user) {
                user.isLogged && ($rootScope.user = user.data, User.hasRole("stadsmedewerker", function (hasRole) {
                    $rootScope.isMedewerker = hasRole
                }), $rootScope.loggedIn = user.isLogged, AppService.getMyApps(function () {
                    $rootScope.userApps = user.apps, callback && callback(user)
                }))
            }, !0)
        }

        function toggleMenu(menu) {
            switch (menu) {
                case"profile":
                    var profileTemplate = "/assets/aOS/js/os/views/profile.htm";
                    $scope.tmpl.popupTemplate === profileTemplate ? ($scope.tmpl.popupTemplate = "", $scope.hideOverlay()) : ($scope.tmpl.popupTemplate = profileTemplate, $scope.displayOverlay());
                    break;
                case"languages":
                    var languageTemplate = "/assets/aOS/js/os/views/languages.htm";
                    $scope.tmpl.popupTemplate === languageTemplate ? ($scope.tmpl.popupTemplate = "", $scope.hideOverlay()) : ($scope.tmpl.popupTemplate = languageTemplate, $scope.displayOverlay());
                    break;
                case"notifications":
                    var notificationsTemplate = "/assets/aOS/js/os/views/notifications.htm";
                    $scope.tmpl.popupTemplate === notificationsTemplate ? ($scope.tmpl.popupTemplate = "", $scope.hideOverlay()) : ($scope.tmpl.popupTemplate = notificationsTemplate, $scope.displayOverlay());
                    break;
                default:
                    $scope.tmpl.popupTemplate = "", $scope.hideOverlay()
            }
        }

        function initTooltipTexts() {
            $rootScope.tooltipTexts = {helpStateButton: "Klik hier om de helpfunctie aan te zetten. Ga met uw muis over een item om hulp te krijgen.", astadLogo: "Klik op de A om terug naar het begin van A-stad te gaan.", overzicht: "Klik hier om een overzicht te krijgen van alles wat in A-stad zit.", notificaties: "Hier ziet u hoeveel notificaties u heeft. Klik op het cijfer om de notificaties te zien.", profiel: "Hier krijgt u toegang tot uw A-profiel en uw persoonlijke instellingen.", zoeken: "Vul een trefwoord in om zoekresultaten te vinden.", bookmarksMenuEdit: "U kan dit menu aanpassen volgens uw voorkeuren.", bookmarksMenu: "Via deze knoppen krijgt u snel toegang tot onderdelen van A-stad.", gegevensAanpassen: "Klik hier om uw gegevens aan te passen.", wachtwoordAanpassen: "Klik hier om uw wachtwoord te wijzigen.", koppelingen: "Klik hier om uw eID, A-kaart en meer te koppelen.", aProfiel: "Klik hier om uw persoonlijke gegevens, e-mailadres of wachtwoord te wijzigen.", aProfielMenu: "Kies in dit menu een item dat u wil wijzigen.", suggestieMedewerker: "Klik hier om feedback te geven over deze website.", suggestieUser: "Klik hier om een suggestie te geven over deze website."}
        }

        $scope.displayOverlay = function () {
            var mobileOverlayShow;
            enquire.register("screen and (max-width:640px)", {match: function () {
                mobileOverlayShow = eventsService.subscribe("overlay.display", $scope.displayOverlay, $scope), eventsService.unsubscribe(mobileOverlayShow), "" !== $scope.tmpl.popupTemplate && ($rootScope.fix = !0)
            }, unmatch: function () {
                eventsService.unsubscribe(mobileOverlayShow), $rootScope.fix = !1
            }}, !1)
        }, $scope.hideOverlay = function () {
            $rootScope.fix = !1
        }, $scope.displaySearch = function (elementClass) {
            eventsService.publish("search.display", elementClass)
        }, $scope.closeSearch = function () {
            eventsService.publish("search.hide")
        }, $scope.toggleMenu = toggleMenu, $scope.toggleHelpState = function () {
            $rootScope.helpState = !$rootScope.helpState
        }, $scope.currentlocation = window.location.href, $scope.changeLanguage = function (language) {
            var oldLang = $rootScope.currentLanguage, curLang = language.lang.toLowerCase();
            oldLang !== curLang && (window.location = window.location.pathname.replace(oldLang, curLang))
        };
        var firstlogin = !0;
        $rootScope.loggedIn = User.isLogged, $scope.profile = {chatStatus: !0}, $scope.tmpl = {popupTemplate: ""}, $rootScope.$watch("loggedIn", function () {
            $rootScope.loggedIn ? (socket.reconnect(), getUser(function (user) {
                user.isLogged && eventsService.publish("user.loggedin", $rootScope.user.id)
            }), firstlogin && (firstlogin = !1, NotificationService.init())) : socket.disconnect()
        }), $scope.$on("requestContextChanged", function () {
            $scope.currentlocation = window.location.href, $scope.tmpl.popupTemplate = ""
        }), eventsService.subscribe("header.catchclick", function () {
            $scope.tmpl.popupTemplate = "", $scope.$apply()
        }, $scope), eventsService.subscribe("user.disconnected", function () {
            $rootScope.user = {}, $rootScope.loggedIn = !1
        }, $scope), eventsService.on("socket.user.updated", function () {
            User.refreshUser(void 0, !0)
        }), getUser(), initTooltipTexts()
    }])
}(angular, antwerpOS, window.enquire),function (ng, aOS) {
    "use strict";
    aOS.controller("os.HomeController", ["_", "$scope", "$rootScope", "$location", "$route", "$timeout", "requestContext", "eventsService", "ContentService", "RenderService", "BookmarkService", "HelperService", "UserService", function (_, $scope, $rootScope, $location, $route, $timeout, requestContext, eventsService, Content, Renderer, BookmarkService, Helper, UserService) {
        function initialize() {
            eventsService.publish("context.update", homeContext), $scope.isLoadingFeed = !0, updateFeedData(), UserService.hasRole("stadsmedewerker", function (response) {
                response && (BookmarkService.toggleMedewerker("collaborator"), BookmarkService.getAppsList())
            }), $rootScope.showFeedback = !!$route.current.showFeedback
        }

        function getUrl(item) {
            var url = "/info/" + item.id + "/" + item.slug;
            return url
        }

        var feedFilters = {type: 10, tags: [], limit: 10, start: 0}, homeContext = {app: "aos", appContext: "home", slug: "", header: {h1: "Welkom"}}, renderContext = requestContext.getRenderContext("splash.home"), loadingStatus = {feed: !0};
        Object.defineProperties(loadingStatus, {feedStatus: {get: function () {
            return this.feed
        }, set: function (x) {
            this.feed = x, x ? ($scope.loadingFeedComplete = !1, $scope.isLoadingFeed = !0) : ($scope.loadingFeedComplete = !0, $timeout(function () {
                $scope.isLoadingFeed = !1
            }, 500))
        }}});
        var goToRegisterPage = function () {
            $location.path("/" + $rootScope.currentLanguage + "/register")
        }, updateApplist = function () {
            BookmarkService.getAppsList()
        }, updateFeedData = function () {
            $scope.fetchingMoreContent = !0, feedFilters.start = $scope.feedCollection.length, Content.getHomepageContent(feedFilters, function (response) {
                _.each(response.items, function (newsItem) {
                    newsItem.url = getUrl(newsItem), newsItem.permalink = "/info/" + newsItem.id + "/" + newsItem.slug, $scope.feedCollection.push(newsItem)
                });
                var itemLength = 0, hasMore = !1;
                void 0 !== response && (void 0 !== response.items && (itemLength = response.items.length), void 0 !== response.meta && (hasMore = response.meta.length)), $scope.feedMeta = response.meta, $scope.fetchingMoreContent = !1, $scope.isLoadingFeed = !1
            })
        };
        $rootScope.isAnonymousHome = !0, $scope.$on("$destroy", function () {
            $rootScope.isAnonymousHome = !1
        }), $scope.loadMore = updateFeedData, $scope.subview = renderContext.getNextSection(), $scope.fetchingMoreContent = !1, $scope.isLoadingFeed = !1, $scope.loadingFeedComplete = !1, $scope.intro = {}, $scope.BookmarkService = BookmarkService, BookmarkService.getQuickStartLinks("default"), BookmarkService.getOverviewLinks("default"), $scope.register = goToRegisterPage, $scope.feedCollection = [], $scope.feedMeta = {}, eventsService.subscribe("feed.append", updateFeedData, $scope), $scope.$watch(function () {
            return $rootScope.isMedewerker
        }, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                var type = $rootScope.isMedewerker ? "collaborator" : "default";
                BookmarkService.toggleMedewerker(type), _.isUndefined(oldValue) || ($scope.feedCollection = [], updateFeedData(), updateApplist())
            }
        }), $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        }), initialize()
    }])
}(angular, antwerpOS, window.enquire),function (ng, aOS) {
    "use strict";
    aOS.controller("os.AppsController", ["$scope", "requestContext", "_", function ($scope, requestContext) {
        var renderContext = requestContext.getRenderContext("standard.apps");
        $scope.subview = renderContext.getNextSection(), $scope.showStore = "launch" !== $scope.subview, $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection(), $scope.showStore = "launch" !== $scope.subview)
        })
    }])
}(angular, antwerpOS),function (g, aOS) {
    "use strict";
    aOS.controller("layouts.StandardController", ["$scope", "requestContext", "_", function ($scope, requestContext) {
        var renderContext = requestContext.getRenderContext("standard");
        $scope.subview = renderContext.getNextSection(), $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        })
    }])
}(angular, antwerpOS),function (ng, aOS, Modernizr) {
    "use strict";
    aOS.controller("os.MainController", ["$scope", "$rootScope", "$route", "$routeParams", "$location", "requestContext", "_", "eventsService", "StatusService", "gettextCatalog", function ($scope, $rootScope, $route, $routeParams, $location, requestContext, _, eventsService, StatusService) {
        function initialize() {
            $scope.isHomepage = isHomepage(), $scope.isEmployeeScreen = isEmployeeScreen(), $rootScope.nameSpaceHTML(), $rootScope.currentDate = new Date, checkModernizrFeatures(), eventsService.subscribe("context.update", setPlatformContext, $scope)
        }

        function isRouteRedirect(route) {
            return!route.current.action
        }

        function onSearchStatusChange(variables) {
            $scope.fix = variables.status
        }

        function setBackGroundImage(bgImage) {
            $scope.theBackgroundImage = "" !== bgImage ? {"background-image": "url('" + bgImage + "')"} : {}
        }

        function setPlatformContext(context) {
            context = context || {}, $rootScope.context = context, context && (setPageTitle(context), setPageDescription(context))
        }

        function isHomepage() {
            var urlSegments = $location.url().split("/");
            return"home" === urlSegments[2]
        }

        function isEmployeeScreen() {
            return $location.url().match(/\/medewerkers/)
        }

        function checkModernizrFeatures() {
            if (void 0 !== Modernizr) {
                var breakingFeatures = ["backgroundsize", "multiplebgs", "svg"];
                _.forEach(breakingFeatures, function (feature) {
                    return Modernizr[feature] ? void 0 : ($scope.unSupportedBrowser = !0, !1)
                })
            }
        }

        function setLanguage(currentLanguage) {
            $rootScope.currentLanguage = currentLanguage
        }

        function setPageTitle(data) {
            return data = data || {}, data.header = data.header || {}, data.appName = data.appName || "", _.isObject(data.appName) || _.isString(data.header) || _.isNumber(data.header) || _.isObject(data.header.h1) || _.isObject(data.header.h2) || _.isObject(data.header.h3) ? !1 : ($scope.titleString = "", $scope.siteName = "A-stad", $scope.pageTitle = "", void 0 !== data.header.h1 && null !== data.header.h1 && "" !== data.header.h1 && ($scope.titleString += String(data.header.h1) + " | "), void 0 !== data.header.h2 && null !== data.header.h2 && "" !== data.header.h2 && ($scope.titleString += String(data.header.h2) + " | "), void 0 !== data.header.h3 && null !== data.header.h3 && "" !== data.header.h3 && ($scope.titleString += String(data.header.h3) + " | "), void 0 !== data.appName && null !== data.appName && "" !== data.appName && ($scope.titleString += String(data.appName) + " | "), "" === $scope.titleString && ($scope.pageTitle = $scope.siteName), void("" !== $scope.titleString && ($scope.pageTitle += $scope.titleString + $scope.siteName)))
        }

        $rootScope.context = {app: "aos", appContext: "", slug: "", title: ""}, $scope.getInstanceTime = function () {
            var now = new Date, timeString = now.toTimeString(), instanceTime = timeString.match(/\d+:\d+:\d+/i);
            return instanceTime[0]
        };
        var setPageDescription = function (context) {
            var description = context.description || "", maxLength = 170, desc = description;
            if (description.length > maxLength) {
                var trimmedDescription = description.substr(0, maxLength);
                trimmedDescription = trimmedDescription.substr(0, Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(" "))), desc = trimmedDescription + "..."
            }
            $scope.pageMetaDescription = desc
        };
        $rootScope.nameSpaceHTML = function () {
            $scope.appContext = "aos", void 0 !== $rootScope.activeApp && null !== $rootScope.activeApp && "" !== $rootScope.activeApp.slug && void 0 !== $rootScope.activeApp.slug && ($scope.appContext = "aos-" + $rootScope.activeApp.slug)
        }, $rootScope.toggleFeedback = function () {
            $rootScope.showFeedback || $("html, body").animate({scrollTop: 0}, "slow"), $rootScope.showFeedback = !$rootScope.showFeedback
        }, $scope.generateError = function (type, message, location, persistance) {
            var msg = {type: type, message: message, location: location, persistance: persistance};
            StatusService.addMessage(msg)
        };
        var renderContext = requestContext.getRenderContext();
        $scope.isHomepage = !0, $scope.isEmployeeScreen = !1, $scope.subview = renderContext.getNextSection(), $scope.unSupportedBrowser = !1, $scope.theBackgroundImage = {"background-image": "none"}, $rootScope.showFeedback = !1, $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        }), $scope.$on("$routeChangeSuccess", function () {
            isRouteRedirect($route) || ($scope.isHomepage = isHomepage(), requestContext.setContext($route.current.action, $routeParams), $scope.$broadcast("requestContextChanged", requestContext), $rootScope.showFeedback = !1, setLanguage($routeParams.lang))
        }), eventsService.subscribe("search.status", onSearchStatusChange, $scope), eventsService.subscribe("html.backgroundImage", setBackGroundImage), eventsService.subscribe("overlay.close", function (element, redirectUrl) {
            $rootScope.fix = !1, $rootScope.$apply(), "" !== redirectUrl && void 0 !== redirectUrl && ($location.path("/" + $rootScope.currentLanguage + redirectUrl), $scope.$apply())
        }), initialize()
    }])
}(angular, antwerpOS, window.Modernizr),function (ng, aOS) {
    "use strict";
    aOS.value("RenderContext", function (requestContext, actionPrefix, paramNames) {
        function getNextSection() {
            return requestContext.getNextSection(actionPrefix)
        }

        function isChangeLocal() {
            return requestContext.startsWith(actionPrefix)
        }

        function isChangeRelevant() {
            return requestContext.startsWith(actionPrefix) ? requestContext.hasActionChanged() ? !0 : paramNames.length && requestContext.haveParamsChanged(paramNames) : !1
        }

        return{getNextSection: getNextSection, isChangeLocal: isChangeLocal, isChangeRelevant: isChangeRelevant}
    })
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.Search.DetailController", ["$scope", "$routeParams", "requestContext", "AppService", function ($scope, $routeParams) {
        function initialize() {
            $scope.searchCategory = $routeParams.app
        }

        $scope.filters = {filter1: {collapsed: !0, list: {value: [], options: [
            {key: "today", value: "Vandaag"},
            {key: "tomorrow", value: "Morgen"},
            {key: "thisweek", value: "Deze week"},
            {key: "lastweek", value: "Vorige week"},
            {key: "thismonth", value: "Deze maand"},
            {key: "lastmonth", value: "Vorige maand"}
        ]}}, filter2: {collapsed: !0, list: {value: [], options: [
            {key: "today", value: "Vandaag"},
            {key: "tomorrow", value: "Morgen"},
            {key: "thisweek", value: "Deze week"},
            {key: "lastweek", value: "Vorige week"},
            {key: "thismonth", value: "Deze maand"},
            {key: "lastmonth", value: "Vorige maand"}
        ]}}}, $scope.search = {success: !0, limit: "5", results: {content: {app: "content", results: [
            {details: "#", image: ".", title: "Ik ben resultaat 1 met afbeelding", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante tristique, lacinia risus et, facilisis massa. Fusce consectetur consequat ante, elementum vulputate arcu gravida id. Aliquam ultricies cursus orci et ornare. Vivamus volutpat non sapien ac rutrum."},
            {details: "#", title: "Ik ben resultaat 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante tristique, lacinia risus et, facilisis massa. Fusce consectetur consequat ante, elementum vulputate arcu gravida id. Aliquam ultricies cursus orci et ornare. Vivamus volutpat non sapien ac rutrum."},
            {details: "#", title: "Ik ben resultaat 3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante tristique, lacinia risus et, facilisis massa. Fusce consectetur consequat ante, elementum vulputate arcu gravida id. Aliquam ultricies cursus orci et ornare. Vivamus volutpat non sapien ac rutrum."},
            {details: "#", title: "Ik ben resultaat 4", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante tristique, lacinia risus et, facilisis massa. Fusce consectetur consequat ante, elementum vulputate arcu gravida id. Aliquam ultricies cursus orci et ornare. Vivamus volutpat non sapien ac rutrum."},
            {details: "#", title: "Ik ben resultaat 5", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante tristique, lacinia risus et, facilisis massa. Fusce consectetur consequat ante, elementum vulputate arcu gravida id. Aliquam ultricies cursus orci et ornare. Vivamus volutpat non sapien ac rutrum."}
        ], total: 18}}, query: "te"}, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.Search.IndexController", ["$scope", "$location", "requestContext", "AppService", function ($scope, $location, requestContext, AppService) {
        function initialize() {
            void 0 !== $location.search().q && ($scope.searchString = $location.search().q)
        }

        var renderContext = requestContext.getRenderContext("standard.search");
        $scope.searchString = "", $scope.subview = renderContext.getNextSection(), $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        }), AppService.initDeeplink(initialize())
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("os.Search.OverviewController", ["$scope", "$location", "SearchService", "_", function ($scope, $location, SearchService, _) {
        var initialize = function () {
            $scope.search.term = $location.search().term || "", 0 === SearchService.results.length && $scope.doSearch()
        };
        $scope.doSearch = function (group, offset) {
            var searchOptions = {term: $location.search().term, group: group || "", offset: offset};
            group ? (SearchService.showLoadMoreSpinner[group] = !0, searchOptions.callback = function () {
                SearchService.showLoadMoreSpinner[group] = !1
            }, "externe zoekresultaten" === group ? SearchService.searchExternalStr(searchOptions) : SearchService.searchStr(searchOptions)) : SearchService.searchAll(searchOptions)
        }, $scope.loadMore = function (group) {
            var searchGroup = _.filter($scope.search.results, function (r) {
                return r.app === group
            }), offset = searchGroup[0].results.length || 5;
            $scope.doSearch(group, offset)
        }, $scope.search = SearchService, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS, enquire) {
    "use strict";
    aOS.controller("os.SearchController", ["$rootScope", "_", "$scope", "$location", "$route", "$timeout", "SearchService", "eventsService", "$document", function ($rootScope, _, $scope, $location, $route, $timeout, SearchService, eventsService, $document) {
        function initialize() {
            var mobileDisplayEvent, mobileHideEvent;
            enquire.register("screen and (min-width:640px)", {match: function () {
                eventsService.unsubscribe(mobileDisplayEvent, mobileHideEvent)
            }, unmatch: function () {
                mobileDisplayEvent = eventsService.subscribe("search.display", $scope.displaySearchMobile, $scope), mobileHideEvent = eventsService.subscribe("search.hide", $scope.hideSearchMobile, $scope)
            }, setup: function () {
                mobileDisplayEvent = eventsService.subscribe("search.display", $scope.displaySearchMobile, $scope), mobileHideEvent = eventsService.subscribe("search.hide", $scope.hideSearchMobile, $scope)
            }}, !1)
        }

        function toggleClick(value) {
            value ? $document.on("click", function (e) {
                $(e.target).is(".searchAction *, .searchAction") || $scope.hideSearch()
            }) : $document.off("click")
        }

        function doSearch() {
            $scope.showSearch(), $scope.searchQuery.query.length > 1 ? (void 0 !== timerId && $timeout.cancel(timerId), timerId = $timeout(function () {
                var searchOptions = {term: $scope.searchQuery.query, group: "", limit: 5, offset: 0};
                SearchService.results = [], SearchService.externalResults = [], SearchService.localResults = [], SearchService.searchAll(searchOptions)
            }, 800)) : void 0 !== timerId && ($timeout.cancel(timerId), timerId = void 0)
        }

        $scope.search = SearchService, $scope.searchQuery = {query: ""}, $scope.searchStatus = {showSearchResults: !1, showMobileSearch: !1}, $scope.displaySearchMobile = function () {
            $scope.searchStatus.showMobileSearch = !0
        }, $scope.hideSearchMobile = function () {
            $scope.emptySearchHard(), $scope.searchStatus.showMobileSearch = !1
        }, $scope.showSearch = function () {
            $scope.searchStatus.showSearchResults = !0, toggleClick(!0)
        }, $scope.hideSearch = function () {
            $timeout(function () {
                $scope.searchStatus.showSearchResults = !1, toggleClick(!1)
            })
        }, $scope.emptySearchHard = function () {
            $scope.searchQuery.query = ""
        }, $scope.submitSearch = function () {
            $location.url().indexOf("/zoeken") >= 0 && $location.path("/" + $rootScope.currentLanguage + "/zoeken").search("term", $scope.searchQuery.query)
        }, $scope.searchOverview = function () {
            $location.path("/" + $rootScope.currentLanguage + "/zoeken").search("term", $scope.searchQuery.query), $scope.submitSearch(), $scope.searchStatus.showSearchResults = !1
        }, $scope.doSearch = doSearch, $scope.loadMore = doSearch;
        var timerId;
        initialize()
    }])
}(angular, antwerpOS, window.enquire),function (ng, aOS) {
    "use strict";
    aOS.controller("os.StatusbarController", ["$scope", "eventsService", "StatusService", "requestContext", "_", "gettext", "gettextCatalog", function ($scope, eventsService, StatusService, requestContext) {
        var renderContext = requestContext.getRenderContext();
        $scope.statusservice = StatusService, $scope.getRidOfErrorMessage = function (id) {
            StatusService.clearMessage(id)
        }, $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && StatusService.clearMessagesFromPersistance("page")
        })
    }])
}(angular, antwerpOS),function () {
    "use strict";
    antwerpOS.factory("globalErrorHandlingInterceptor", ["$q", "StatusService", "$location", "$injector", "$rootScope", "$timeout", "eventsService", "Statusmessage", "_", function ($q, StatusService, $location, $injector, $rootScope, $timeout, eventsService, Statusmessage) {
        return function (promise) {
            return promise.then(function (response) {
                var cnfg = response.config;
                cnfg.data = cnfg.data || {};
                var skipErrorhandling = cnfg.overrideErrorHandling === !0 || cnfg.data.overrideErrorHandling === !0;
                if (skipErrorhandling)return response;
                var hasData = (response.data.success === !1, "object" == typeof response.data), dataHasMessages = hasData && void 0 !== response.data.msgs && response.data.msgs.length > 0;
                return dataHasMessages && StatusService.addMessage(response.data.msgs), response
            }, function (response) {
                var cnfg = response.config;
                cnfg.data = cnfg.data || {};
                var skipErrorhandling = cnfg.overrideErrorHandling === !0 || cnfg.data.overrideErrorHandling === !0;
                if (skipErrorhandling)return $q.reject(response);
                var statusCode = response.status;
                statusCode >= 500 && 600 > statusCode && (statusCode = 500);
                var path = "";
                switch (statusCode) {
                    case 500:
                        var msg500 = new Statusmessage({type: "E", message: 'Er ging iets mis met aOS. <a href="/" title="Ga terug naar start">Ga naar de homepage</a>.', location: "bar", persistance: "page"});
                        return StatusService.addMessage(msg500), $q.reject(response);
                    case 401:
                        var User = $injector.get("UserService");
                        return User.isLoggedIn() ? (User.clear(), eventsService.publish("user.disconnected"), $location.path("/" + $rootScope.currentLanguage + "/login"), $timeout(function () {
                            var msg = new Statusmessage({type: "W", message: "Uw sessie is verlopen. Meld u opnieuw aan om door te gaan.", location: "bar", persistance: "page"});
                            StatusService.addMessage(msg)
                        }, 1e3)) : (path = window.location.href, $location.path("/" + $rootScope.currentLanguage + "/home"), $timeout(function () {
                            var msg = new Statusmessage({type: "W", message: 'Om verder te gaan moet u <a href="/login?fromurl=' + path + '">aangemeld zijn</a>.', location: "bar", persistance: "page"});
                            StatusService.addMessage(msg)
                        }, 1e3)), $q.reject(response);
                    case 403:
                        return path = window.location.href, $location.path("/" + $rootScope.currentLanguage + "/home"), $timeout(function () {
                            var msg = new Statusmessage({type: "W", message: 'U hebt niet de juiste machtigingen om deze pagina te zien, <a href="/login?fromurl=' + path + '">meld u aan met meer machtigingen</a>.', location: "bar", persistance: "page"});
                            StatusService.addMessage(msg)
                        }, 1e3), $q.reject(response);
                    default:
                        var msgDefault = new Statusmessage({type: "E", message: "Er is iets misgegaan: " + response.status, location: "bar", persistance: "page"}), messages = response.data.msgs || [msgDefault];
                        return StatusService.addMessage(messages), $q.reject(response)
                }
            })
        }
    }])
}(angular, antwerpOS),function (ng, aOS, io) {
    "use strict";
    aOS.factory("socket", ["$rootScope", "eventsService", "$cookies", "HelperService", "$injector", "ServiceRoutesConfig", function ($rootScope, eventsService, $cookies, Helper, $injector, ServiceRoutesConfig) {
        var oldEmit, $oldEmit, _socket, _connected = !1;
        if (ServiceRoutesConfig) {
            var socketServer = ServiceRoutesConfig.socketServer.route, ssl = !!ServiceRoutesConfig.socketServer.useSSL;
            return _socket = io.connect(socketServer, {resource: "srv/websocket/socket.io", secure: ssl}), oldEmit = _socket.emit, _socket.emit = function () {
                oldEmit.apply(_socket, arguments)
            }, $oldEmit = _socket.$emit, _socket.$emit = function () {
                var arr = Array.prototype.slice.call(arguments), socketEvent = arr[0], socketArgs = arr[1];
                eventsService.publish("socket." + socketEvent, socketArgs), $oldEmit.apply(_socket, arguments)
            }, _socket.on("connect", function () {
                _connected = !0
            }), _socket.on("disconnect", function () {
                _connected = !1
            }), eventsService.subscribe("user.auth", function (data) {
                data && _socket.emit("setUser", {user_id: $rootScope.user.id})
            }), eventsService.subscribe("user.loggedin", function (data) {
                data && _socket.emit("setUser", {user_id: $rootScope.user.id})
            }), {isConnected: function () {
                return _connected
            }, disconnect: function () {
                _connected && _socket.disconnect()
            }, reconnect: function () {
                return _connected ? !1 : void _socket.socket.connect()
            }, events: _socket.$events}
        }
    }])
}(angular, antwerpOS, window.io),function (ng, aOS) {
    "use strict";
    aOS.service("AppContext", [function () {
        var _app, _params = {};
        return{setParams: function (params) {
            _params = params
        }, getParams: function () {
            return _params
        }, setCurrent: function (app) {
            _app = {name: app.name, slug: app.slug, serviceUrl: app.url}
        }, getCurrent: function () {
            return _app
        }, stopApp: function () {
            _app = void 0, _params = {}
        }, getSlug: function () {
            return _app.slug
        }}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("AppService", ["$http", "$rootScope", "_", "eventsService", "UserService", "$location", "HelperService", function ($http, $rootScope, _, eventsService, UserService, $location, Helper) {
        function getMyAppsFromService(fn) {
            _promises.myApps || (_promises.myApps = $http.get(myAppsServiceUrl)["finally"](function () {
                _promises.fetchuser = void 0
            })), _promises.myApps.then(function (data) {
                var apps = Helper.verifyNamespace("data", data.data) || [];
                UserService.setMyApps(apps), fn && fn()
            })
        }

        function getAppsFromService(fn) {
            _promises.allApps || (_promises.allApps = $http.get(appsServiceUrl)["finally"](function () {
                _promises.allApps = void 0
            })), _promises.allApps.then(function (data) {
                API.apps = Helper.verifyNamespace("data", data.data) || [], fn && fn(data)
            })
        }

        function getAppFromSlug(slug) {
            var app = _.find(API.apps, {slug: slug});
            return app
        }

        function getAppFromId(appId) {
            var app = _.find(API.apps, {id: appId});
            return app
        }

        function initDeeplink(fn, skipInitWhenDeeplink) {
            var hasDeeplink = !1;
            if (Helper.verifyNamespace("deeplink.route", window)) {
                var route = window.deeplink.route, srch = window.deeplink.search;
                window.deeplink = void 0, $location.path(route).replace().search(srch), hasDeeplink = !0
            }
            hasDeeplink && skipInitWhenDeeplink || fn && fn()
        }

        function linkApp(appId, fn) {
            $http.get("/srv/apps/d/link/" + appId).success(function (data) {
                API.getApps(), API.getMyApps(), fn && fn(data)
            })
        }

        function unlinkApp(appId, fn) {
            $http.get("/srv/apps/d/unlink/" + appId).success(function (data) {
                API.getApps(), API.getMyApps(), fn && fn(data)
            })
        }

        var myAppsServiceUrl = "/srv/apps/d/list/me", appsServiceUrl = "/srv/apps/d/list", API = {apps: []}, _promises = {myApps: void 0, allApps: void 0};
        return eventsService.subscribe("user.auth", function (success) {
            success && (getAppsFromService(), getMyAppsFromService())
        }), API.getMyApps = getMyAppsFromService, API.getApps = getAppsFromService, API.getAppFromSlug = getAppFromSlug, API.getAppFromId = getAppFromId, API.initDeeplink = initDeeplink, API.linkApp = linkApp, API.unlinkApp = unlinkApp, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("BookmarkService", ["$http", "$rootScope", "_", function ($http, $rootScope, _) {
        function getQuickStartLinks(type) {
            switch (type) {
                case"collaborator":
                    API.quickStartLinks = [
                        {title: "Mijn tijden", "class": "", url: "https://tijdsregistratie.antwerpen.be/xtremis"},
                        {title: "Vraag aan Info+", "class": "", url: "/info/53983264aea8a7eb428b4581/vraag-aan-info"},
                        {title: "Melding maken", "class": "", clickAction: $rootScope.toggleFeedback},
                        {title: "Nuttige links", "class": "", url: "/info/5375eebbb1a8a7b0188b4573/nuttige-links"}
                    ];
                    break;
                default:
                    API.quickStartLinks = [
                        {title: "Ik wil contact met de stad opnemen", "class": "", url: "/kanalen/adressen-en-openingsuren/detail/contacteer-stad-antwerpen"},
                        {title: "Ik wil een afspraak maken", "class": "", url: "/e-loket/afspraak-maken"},
                        {title: "Ik wil een suggestie geven over deze website", "class": "", url: "/suggesties"},
                        {title: "Ik wil een probleem melden", "class": "", clickAction: $rootScope.toggleFeedback}
                    ]
            }
            return API.quickStartLinks
        }

        function getOverviewLinks(type) {
            switch (type) {
                case"collaborator":
                    $http({method: "GET", url: bookmarkUrl + "index", params: {}, overrideErrorHandling: !0}).success(function () {
                        $http({method: "GET", url: bookmarkUrl + "index", params: {}, overrideErrorHandling: !0}).success(function (response) {
                            response.success && (API.overviewLinks = response.data, API.isLoading = !1)
                        })
                    });
                    break;
                default:
                    API.overviewLinks = [
                        {title: "Nieuws", "class": "", url: "/kanalen/a-nieuws", collection: "list1"},
                        {title: "StadsPlan", "class": "", url: "/stadsmap", collection: "list2"},
                        {title: "Info & diensten", "class": "", url: "/kanalen", collection: "list1"},
                        {title: "Babbelbox", "class": "#", url: "/babbelbox", collection: "list2"},
                        {title: "Districten", "class": "", url: "/kanalen/", collection: "list1"},
                        {title: "Toerisme - Tourism", "class": "", rel: "external", url: "http://www.visitantwerpen.be", collection: "list2"},
                        {title: "Ondernemen - Business", "class": "", rel: "external", url: "http://www.ondernemeninantwerpen.be", collection: "list2"},
                        {title: "Aanvragen & documenten", "class": "", url: "/e-loket", collection: "list1"},
                        {title: "Vrijetijdskalender (UiT)", "class": "", url: "/vrijetijdskalender", collection: "list1"},
                        {title: "Studenten - Students", "class": "", rel: "external", url: "http://www.gate15.be", collection: "list2"}
                    ]
            }
            return API.overviewLinks
        }

        function toggle() {
            API.editView = !API.editView
        }

        function add(collection) {
            var isExternalLink = "http://" === API.selectedItem.slug.substring(0, 7) || "https://" === API.selectedItem.slug.substring(0, 8), linkPrefix = isExternalLink ? "" : "/";
            $http({method: "POST", url: bookmarkUrl + "create", data: {title: API.selectedItem.name, url: linkPrefix + API.selectedItem.slug, collection: collection}}).success(function (response) {
                response.success && (API.overviewLinks.push(response.data), API.selectedItem = null)
            })
        }

        function remove(obj) {
            $http({method: "POST", url: bookmarkUrl + "delete", data: {bookmark: obj.id}}).success(function (response) {
                response.success && _.remove(API.overviewLinks, {id: obj.id})
            })
        }

        function drop(draggable, droppable) {
            var mapObj = {"drop-before-": "", "drop-after-": ""}, targetID = droppable.id.replace(/drop-before-|drop-after-/gi, function (matched) {
                return mapObj[matched]
            }), item = _.find(API.overviewLinks, {id: draggable.id.replace("drag-", "")}), target = _.find(API.overviewLinks, {id: targetID});
            if (droppable.id.indexOf("-first-") > 0) {
                var collection = droppable.id.replace("drop-first-", "");
                return item.collection = collection, void API.rearrange(collection)
            }
            if (item.collection === target.collection || _.filter(API.overviewLinks, {collection: target.collection}).length < 5) {
                item = _.remove(API.overviewLinks, {id: item.id}), item[0].collection = target.collection;
                var index = droppable.id.indexOf("-before-") > 0 ? _.findIndex(API.overviewLinks, {id: targetID}) : _.findIndex(API.overviewLinks, {id: targetID}) + 1;
                API.overviewLinks.splice(index, 0, item[0]), API.rearrange(target.collection)
            } else alert("Er kunnen geen items meer toegevoegd worden.")
        }

        function rearrange(collection) {
            var bookmarks = {};
            _.map(_.where(API.overviewLinks, {collection: collection}), function (item, index) {
                bookmarks[item.id] = index
            }), $http({method: "POST", url: bookmarkUrl + "updatepositions", data: {bookmarks: bookmarks, collection: collection}}).success(function (response) {
                !response.success
            })
        }

        function getAppsList() {
            API.appsList = [
                {name: "Aanvraag Computer Toegang (ACT)", slug: "http://stad.antwerpen.be/act/"},
                {name: "Aanvraag evenementen (AGEV)", slug: "http://www.agev.local/"},
                {name: "Aanvraag materiaal Antwerpen", slug: "http://www.aanvraagmateriaal.local/NieuweAanvraag.aspx"},
                {name: "Antenne", slug: "kanalen/antenne-1"},
                {name: "ARIS platform", slug: "https://bpm.antwerpen.be/"},
                {name: "Atlas", slug: "http://stad.antwerpen.be/atlas/"},
                {name: "Beeldbank", slug: "https://beeldbank.antwerpen.be/"},
                {name: "Bestuurszaken", slug: "http://stad.antwerpen.be/sd/bz/"},
                {name: "Brandweer Intranet", slug: "http://intranet.brandweerantwerpen.be"},
                {name: "Bureau voor integriteit", slug: "http://stad.antwerpen.be/BI/"},
                {name: "Catalogus GAC", slug: "http://portaal.gfp.local/"},
                {name: "CRM", slug: "http://www.crm.local"},
                {name: "Cultuur, sport, jeugd & onderwijs", slug: "https://intranetcs.antwerpen.be"},
                {name: "Den Bell", slug: "https://denbell.antwerpen.be/"},
                {name: "Dienstnota’s en reglementen", slug: "http://stad.antwerpen.be/dienstnota/"},
                {name: "Digipolis Nieuws", slug: "https://digipolisnieuws.antwerpen.be/"},
                {name: "E-maaltijdcheque", slug: "https://www.myedenred.be/Views/MultiSelection.aspx"},
                {name: "Districts- en loketwerking", slug: "http://stad.antwerpen.be/default.asp?IntranetID=85"},
                {name: "Docushare", slug: "http://docushare.antwerpen.be/docushare/dsweb/HomePage"},
                {name: "E-loket medewerkers", slug: "e-loket"},
                {name: "E-loonbrief", slug: "https://stadantwerpen.mysalary.be/up/login.seam"},
                {name: "eBesluit", slug: "http://stad.antwerpen.be/ebesluit/ebesluit.htm"},
                {name: "eFloris", slug: "https://efloris.antwerpen.be/zHome/Home.aspx"},
                {name: "EPM", slug: "http://stad.antwerpen.be/EPM/EPM.htm"},
                {name: "Felixarchief", slug: "https://felixarchief.antwerpen.be/"},
                {name: "Financiën", slug: "https://intranetfi.antwerpen.be/"},
                {name: "FM.NET", slug: "http://stad.antwerpen.be/fmn/"},
                {name: "Gemeenschappelijk Financieel Platform (GFP)", slug: "http://www.gfp.local/"},
                {name: "Gemeenschappelijke aankoopcentrale (GAC)", slug: "https://intranetocmw.antwerpen.be/gac/gac_frame.asp?org=stad"},
                {name: "GPD", slug: "http://gpd.antwerpen.be/"},
                {name: "Hoera", slug: "http://stad.antwerpen.be/hoera/"},
                {name: "ICT-loket", slug: "https://ictloket.antwerpen.be/"},
                {name: "IT van A tot Z", slug: "https://itvanatotz.wiki.antwerpen.be/Home+Page"},
                {name: "KennisManagement Antwerpen (KMA)", slug: "https://kma.antwerpen.be/index.htm"},
                {name: "Kinderopvang", slug: "http://intranetkop.antwerpen.be/user/login?destination=r4032login"},
                {name: "Medewerkersnieuws", slug: "kanalen/medewerkersnieuws"},
                {name: "Mijn gegevens", slug: "https://mijngegevens.antwerpen.be"},
                {name: "Mijn loopbaan", slug: "https://successfactors.antwerpen.be/"},
                {name: "NDC", slug: "http://ndc.antwerpen.be/"},
                {name: "Notulus", slug: "http://intraright.antwerpen.be/notulus/"},
                {name: "OCMW", slug: "https://intranetocmw.antwerpen.be/"},
                {name: "Ondernemen & stadsmarketing", slug: "https://intranetos.antwerpen.be"},
                {name: "Ontwikkel je competenties", slug: "kanalen/ontwikkel-je-competenties"},
                {name: "Personeelsinfo", slug: "kanalen/personeel"},
                {name: "Portaal Mensura", slug: "https://klantenzone.mensura.be/WD150AWP/WD150Awp.exe/CONNECT/OnlineCare_V15"},
                {name: "Redactie", slug: "redactie"},
                {name: "Samen leven", slug: "http://stad.antwerpen.be/default.asp?IntranetID=65"},
                {name: "Stad in kaart", slug: "http://stadinkaart.gis.local/"},
                {name: "Stadsbeheer", slug: "https://intranetsb.antwerpen.be/"},
                {name: "Stadsontwikkeling", slug: "http://stad.antwerpen.be/default.asp?IntranetID=80"},
                {name: "StadsPlan", slug: "stadsmap"},
                {name: "STAT", slug: "http://www.antwerpen.buurtmonitor.be/"},
                {name: "STIP", slug: "http://stad.antwerpen.be/stip/v2/index.htm"},
                {name: "Strategische coördinatie", slug: "https://intranetsc.antwerpen.be/"},
                {name: "Sodipa", slug: "http://www.sodipa.be/"},
                {name: "Vakbib", slug: "https://denbell.antwerpen.be/IDB/IDB-Intranet-Den-Bell/Intranet-Den-Bell/Vakbib-Den-Bell.html"},
                {name: "Viewer Antwerpen (VIA)", slug: "https://via.antwerpen.be/"},
                {name: "VIP14", slug: "http://www.vip14.local/"},
                {name: "Virtuele klok", slug: "https://virtueleklok.antwerpen.be/"},
                {name: "Wachtwoord wijzigen", slug: "https://paswoord.antwerpen.be/showLogin.cc"},
                {name: "Webmail", slug: "https://webmailsso.antwerpen.be/"},
                {name: "Wiki", slug: "https://www.wiki.antwerpen.be/"},
                {name: "Yammer", slug: "https://www.yammer.com/"}
            ], API.appsList.sort(function (a, b) {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                return nameB > nameA ? -1 : nameA > nameB ? 1 : 0
            })
        }

        function toggleMedewerker(type) {
            API.quickStartLinks = [], API.overviewLinks = [], API.isLoading = !0, API.getQuickStartLinks(type), API.getOverviewLinks(type)
        }

        var bookmarkUrl = "/srv/snellinks/d/", API = {appsList: [], editView: !1, list: [], overviewLinks: [], quickStartLinks: [], selectedItem: null, isLoading: !1};
        return API.getQuickStartLinks = getQuickStartLinks, API.getOverviewLinks = getOverviewLinks, API.toggleView = toggle, API.add = add, API.remove = remove, API.drop = drop, API.rearrange = rearrange, API.getAppsList = getAppsList, API.toggleMedewerker = toggleMedewerker, API
    }])
}(angular, antwerpOS),function (ng, aOS, _) {
    "use strict";
    aOS.factory("_", [function () {
        return _.filterWithProperty = function (collection, name, value) {
            var result = _.filter(collection, function (item) {
                return item[name] === value
            });
            return result
        }, _.findWithProperty = function (collection, name, value) {
            var result = _.find(collection, function (item) {
                return item[name] === value
            });
            return result
        }, _.sortOnProperty = function (collection, name, direction) {
            var indicator = "asc" === direction.toLowerCase() ? -1 : 1;
            return collection.sort(function (a, b) {
                return a[name] < b[name] ? indicator : a[name] > b[name] ? -indicator : 0
            }), collection
        }, _.compareArraysOfObjects = function (arr1, arr2, key) {
            if (void 0 === arr1 && void 0 !== arr2)return arr2;
            if (void 0 === arr2 && void 0 !== arr1)return arr1;
            if (void 0 === arr1 && void 0 === arr2)return[];
            var ids = {};
            return arr2.forEach(function (obj) {
                ids[obj[key]] = obj
            }), arr1.filter(function (obj) {
                return!(obj[key]in ids)
            })
        }, _
    }])
}(angular, antwerpOS, window._.noConflict()),function (ng, aOS) {
    "use strict";
    aOS.service("NotificationService", ["$http", "$rootScope", "eventsService", "_", "$cookies", function ($http, $rootScope, eventsService, _, $cookies) {
        function init() {
            function populateNotifications(element) {
                var note = {seen: element.read, link: element.link, message: element.message, date: element.creationDate, id: element._id};
                $rootScope.notifications.unshift(note)
            }

            $rootScope.user.id && ($rootScope.notifications = [], getAllNotifications(function (notifications) {
                for (var i = 0; i < notifications.length; i++)populateNotifications(notifications[i])
            }))
        }

        function getAllNotifications(fn) {
            var notifications = [];
            $http({method: "GET", url: "/srv/notification/d/unread"}).success(function (data) {
                notifications = data.data, fn && fn(notifications)
            })
        }

        function setReadStatus(notifid, fn) {
            $http({method: "POST", url: "/srv/notification/d/setreadstatus", data: {id: notifid, AOS: $cookies.AOS}}).success(function (response) {
                fn && fn(response)
            })
        }

        var API = {};
        return $rootScope.notifications = [], eventsService.on("notification.read.preferences", function (id) {
            $rootScope.notifications = _.map($rootScope.notifications, function (note) {
                return note.id === id && (note.seen = !0), note
            })
        }), eventsService.on("socket.notification", function (data) {
            "notification" === data.type && ($rootScope.notifications.unshift({message: data.content[0].message, seen: data.content[0].read, link: data.content[0].link, date: data.content[0].creationDate, id: data.content[0]._id}), eventsService.publish("notification.new", data.content))
        }), eventsService.on("socket.notification.read", function (data) {
            $rootScope.notificationsLength - data.read
        }), eventsService.on("socket.hasUser", function () {
            init()
        }), API.init = init, API.setReadStatus = setReadStatus, API.getAll = getAllNotifications, API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("requestContext", ["RenderContext", "$location", "_", function (RenderContext, $location, _) {
        function getAction(newAction, newParams) {
            var act = void 0 !== newAction ? newAction : action, par = void 0 !== newParams ? newParams : params;
            return angular.isFunction(act) ? act(par) : act
        }

        function getNextSection(prefix) {
            var depth;
            return startsWith(prefix) ? "" === prefix ? sections[0] : (depth = prefix.split(".").length, depth === sections.length ? null : sections[depth]) : null
        }

        function getParam(name, defaultValue) {
            return ng.isUndefined(defaultValue) && (defaultValue = null), params[name] || defaultValue
        }

        function getParamAsInt(name, defaultValue) {
            var valueAsInt = 1 * getParam(name, defaultValue || 0);
            return isNaN(valueAsInt) ? defaultValue || 0 : valueAsInt
        }

        function getRenderContext(requestActionLocation, paramNames) {
            return requestActionLocation = requestActionLocation || "", paramNames = paramNames || [], _.isArray(paramNames) || (paramNames = [paramNames]), new RenderContext(this, requestActionLocation, paramNames)
        }

        function hasActionChanged() {
            var act = getAction();
            return act !== previousAction
        }

        function hasParamChanged(paramName, paramValue) {
            return ng.isUndefined(paramValue) ? !previousParams.hasOwnProperty(paramName) && params.hasOwnProperty(paramName) ? !0 : previousParams.hasOwnProperty(paramName) && !params.hasOwnProperty(paramName) ? !0 : previousParams[paramName] !== params[paramName] : !isParam(paramName, paramValue)
        }

        function haveParamsChanged(paramNames) {
            var i = 0, length = paramNames.length;
            for (i = 0; length > i; i += 1)if (hasParamChanged(paramNames[i]))return!0;
            return!1
        }

        function isParam(paramName, paramValue) {
            return params.hasOwnProperty(paramName) && params[paramName] === paramValue ? !0 : !1
        }

        function setContext(newAction, newRouteParams) {
            var act = getAction(newAction, newRouteParams);
            return act.redirectTo ? void $location.path(act.redirectTo) : (previousAction = action, previousParams = params, params = ng.copy(newRouteParams), action = act, void(sections = action.split(".")))
        }

        function startsWith(prefix) {
            var act = getAction();
            return prefix.length && act !== prefix && 0 !== act.indexOf(prefix + ".") ? !1 : !0
        }

        var action = "", sections = [], params = {}, previousAction = "", previousParams = {};
        return{getNextSection: getNextSection, getParam: getParam, getParamAsInt: getParamAsInt, getRenderContext: getRenderContext, hasActionChanged: hasActionChanged, hasParamChanged: hasParamChanged, haveParamsChanged: haveParamsChanged, isParam: isParam, setContext: setContext, startsWith: startsWith}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("SearchService", ["_", "$http", "$q", function (_, $http, $q) {
        function localSearch(options) {
            var term = options.term || API.term, limit = options.limit || API.limit, group = "" === options.group || options.group.length > 0 ? options.group : API.group, offset = void 0 !== options.offset ? options.offset : API.offset, callback = options.callback || function () {
            };
            return 0 === group.length && (API.searching = !0), "" !== API.cancelRequest && API.cancelRequest.resolve(), API.cancelRequest = $q.defer(), $http({url: searchUrl, method: "POST", params: {searchString: term, limit: limit, group: group, offset: offset, timeout: API.cancelRequest}, dataType: "JSON"}).success(function (data) {
                if (API.cancelRequest = "", group.length > 0 && API.localResults.length > 0) {
                    var resultGroupToMerge = _.filter(data.results, function (r) {
                        return r.app === group
                    });
                    0 !== resultGroupToMerge.length && (API.localResults = _.map(API.localResults, function (r) {
                        return r.app === group && (r.results = r.results.concat(resultGroupToMerge[0].results)), r
                    }))
                } else API.localResults = data.results;
                var appkeys = _.keys(API.results);
                _.each(appkeys, function (ak) {
                    API.apps[ak] && (API.results[ak].searchURL = API.apps[ak])
                }), API.offset = offset, API.group = group, API.limit = limit, API.term = term, callback(data)
            })
        }

        function externalSearch(options) {
            var term = options.term || API.term, limit = options.limit || API.limit, group = "" === options.group || options.group.length > 0 ? options.group : API.group, offset = void 0 !== options.offset ? options.offset : API.offset, callback = options.callback || function () {
            };
            return 0 === group.length && (API.searching = !0), "" !== API.cancelExternalRequest && API.cancelExternalRequest.resolve(), API.cancelExternalRequest = $q.defer(), $http({url: externalSearchUrl, method: "POST", params: {searchString: term, limit: limit, group: group, offset: offset, timeout: API.cancelExternalRequest}, dataType: "JSON"}).success(function (data) {
                API.cancelExternalRequest = "", API.externalResults.results ? 0 !== data.results.results.length && (API.externalResults.results = API.externalResults.results.concat(data.results.results)) : API.externalResults = data.results;
                var appkeys = _.keys(API.externalResults);
                _.each(appkeys, function (ak) {
                    API.apps[ak] && (API.externalResults[ak].searchURL = API.apps[ak])
                }), API.offset = offset, API.group = group, API.limit = limit, API.term = term, callback(data)
            })
        }

        function searchAll(options) {
            $q.all([localSearch(options), externalSearch(options)]).then(function () {
                mergeResults(), API.searching = !1
            })
        }

        function mergeResults() {
            API.results = API.localResults.concat(API.externalResults)
        }

        var searchUrl = "/srv/search/d/search-solr", externalSearchUrl = "/srv/search/d/search-solr-external", appsWithSearchpages = {helpcenter: "/helpcenter", vraagenantwoord: "/vraagenantwoord", betacenter: "/betacenter", bettycenter: "/bettycenter", medewerkerscenter: "/medewerkerscenter"}, API = {results: "", externalResults: [], localResults: [], term: "", limit: 5, offset: 0, group: "", searching: !1, apps: appsWithSearchpages, cancelRequest: "", cancelExternalRequest: "", searchStr: localSearch, searchExternalStr: externalSearch, searchAll: searchAll, showLoadMoreSpinner: {}};
        return API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("StatusService", ["HelperService", "eventsService", "$timeout", "_", function (Helper, Events, $timeout, _) {
        var API = {queue: []};
        return API.addMessage = function (msg) {
            msg instanceof Array || (msg = [msg]), msg = _.map(msg, function (m) {
                return"function" == typeof m.getMessage && (m = m.getMessage()), m
            });
            for (var i = msg.length - 1; i >= 0; i -= 1) {
                var newMsg = {message: msg[i].message, location: msg[i].location, persistance: msg[i].persistance, type: msg[i].type, id: Helper.generateGUID(), posted: Date.now()};
                "timer" === newMsg.persistance ? (API.queue.unshift(newMsg), API.clearMessage(newMsg.id, 5e3)) : API.queue.push(newMsg)
            }
        }, API.clearAll = function () {
            API.queue.length = 0
        }, API.clearMessage = function (msgId, timeout) {
            timeout = "undefined" != typeof timeout ? timeout : 0, $timeout(function () {
                var length = _.filter(API.queue, {location: "bar"}).length;
                1 === length ? (_.map(API.queue, function (m) {
                    return m.id === msgId && (m.fadeout = !0), !0
                }), $timeout(function () {
                    _.remove(API.queue, {id: msgId})
                }, 500)) : _.remove(API.queue, {id: msgId})
            }, timeout)
        }, API.clearMessagesFromType = function (msgType) {
            msgType = msgType || "";
            _.remove(API.queue, {type: msgType})
        }, API.clearMessagesFromLocation = function (msgLocation) {
            msgLocation = msgLocation || "";
            _.remove(API.queue, {location: msgLocation})
        }, API.clearMessagesFromPersistance = function (msgPersistance) {
            msgPersistance = msgPersistance || "", _.remove(API.queue, {persistance: msgPersistance})
        }, Events.subscribe("app.stopped", function () {
            API.clearMessagesFromPersistance("app")
        }), Events.subscribe("form.submit", function () {
            API.clearMessagesFromPersistance("page"), API.clearMessagesFromLocation("form")
        }), API
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.ActivateAccountController", ["$rootScope", "$scope", "$location", "$routeParams", "HelperService", "UserService", function ($rootScope, $scope, $location, $routeParams, Helper, User) {
        function activateAccount() {
            User.activateAccount($routeParams.token, function (data) {
                $scope.activateData = data.data
            })
        }

        $scope.activated = function () {
            var url = Helper.verifyNamespace("activateData.buttonLink", $scope);
            $location.path("/" + $rootScope.currentLanguage + url)
        }, activateAccount()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.completeprofilemedewerkerController", ["$scope", "$rootScope", "requestContext", "$http", "$location", "_", "eventsService", "UserService", "AppService", "StatusService", function ($scope, $rootScope, requestContext, $http, $location, _, eventsService, User, AppService, StatusService) {
        var initialize = function () {
            $scope.user = User
        };
        $scope.submitForm = function (isLogged) {
            if ($scope.employeeForm.$valid) {
                var userObj = {adUsername: $scope.formInfo.inputNr.value, adPassword: $scope.formInfo.inputPasw.value, adDomain: $scope.formInfo.inputDomain.value, lastName: $scope.formInfo.inputName.value, firstName: $scope.formInfo.inputFirstName.value, email: $scope.formInfo.inputEmail.value}, getUser = function () {
                    User.getUser(function (user) {
                        if (user.isLogged) {
                            $rootScope.user = user.data, $rootScope.userApps = user.apps, $rootScope.loggedIn = user.isLogged;
                            var setMedewerker = function (hasRoleMedewerker) {
                                $rootScope.isMedewerker = hasRoleMedewerker
                            };
                            User.hasRole("stadsmedewerker", setMedewerker), AppService.getMyApps(), $rootScope.fix = !1, $location.path("/" + $rootScope.currentLanguage + "/home")
                        }
                        eventsService.publish("user.auth", user.isLogged)
                    })
                };
                isLogged ? User.completeEmployee(userObj, function (data) {
                    data.success ? getUser() : StatusService.addMessage(data.msgs)
                }) : User.registerEmployee(userObj, function (data) {
                    data.success ? getUser() : StatusService.addMessage(data.msgs)
                })
            }
        };
        var renderContext = requestContext.getRenderContext("standard.completestadsmedewerkersprofiel");
        $scope.subview = renderContext.getNextSection(), $scope.formInfo = {inputDomain: {id: "domain", name: "domain", placeholder: "Kies je AD-domein", value: "", type: "select", label: "AD-domein", options: [
            {key: "aeis", value: "AEIS"},
            {key: "ica", value: "ICA"},
            {key: "domocmw", value: "DOMOCMW"},
            {key: "so", value: "SO"}
        ], validation: {required: !0, errorMessage: "Kies een domein"}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, inputNr: {id: "employeenr", name: "employeenr", placeholder: "bv: SA00001", value: "", type: "text", label: "Medewerkersnummer", validation: {required: !0, errorMessage: "Vul uw medewerkersnummer in"}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, inputPasw: {id: "employeepass", name: "employeepass", placeholder: "Wachtwoord van uw medewerkersnummer", value: "", type: "password", label: "Wachtwoord", validation: {required: !0, errorMessage: "Vul het wachtwoord van uw medewerkersnummer in."}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, inputName: {id: "name", name: "name", placeholder: "Vul hier uw achternaam in", value: "", type: "text", label: "Achternaam", validation: {required: !0, errorMessage: "Vul uw achternaam in.", match: {pattern: "^['A-Za-z- À-ſ]{1,}$"}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, inputFirstName: {id: "firstName", name: "firstName", placeholder: "Vul hier uw voornaam in", value: "", type: "text", label: "Voornaam", validation: {required: !0, errorMessage: "Vul uw voornaam in.", match: {pattern: "^['A-Za-z- À-ſ]{1,}$"}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, inputEmail: {id: "email", name: "email", placeholder: "Vul hier uw e-mailadres in", value: "", type: "email", label: "E-mailadres", validation: {required: !0, errorMessage: "Vul uw e-mailadres in.", validators: {emailValidator: {name: "EmailAddress"}}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}}, $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        }), initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.initprofilemedewerkerController", ["$scope", "$rootScope", "requestContext", "$http", "$location", "_", "UserService", function ($scope, $rootScope, requestContext, $http, $location, _, User) {
        $scope.user = User, $scope.medewerkersComplete = function () {
            window.location = $rootScope.loggedIn ? "/medewerkersprofiel-aanvullen" : "/login?fromurl=/medewerkersprofiel-aanvullen"
        }, $scope.medewerkersCreate = function () {
            $rootScope.loggedIn || (window.location = "/medewerkersprofiel-aanvullen")
        };
        var renderContext = requestContext.getRenderContext("standard.medewerker");
        $scope.subview = renderContext.getNextSection(), $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        })
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.LoginController", ["$rootScope", "$scope", "$location", "eventsService", "UserService", "AppService", "DialogService", "Statusmessage", "StatusService", "HelperService", function ($rootScope, $scope, $location, eventsService, User, AppService, Dialog, Statusmessage, StatusService, HelperService) {
        function initialize() {
            eventsService.publish("context.update", loginContext), $rootScope.isBeta && ($rootScope.isBeta = !1)
        }

        $scope.loginUser = function () {
            if ($scope.login.$valid) {
                $scope.isEditVisible = !1, $scope.loginForm.isBusy = !0;
                var userObj = {username: $scope.loginForm.username.value, password: $scope.loginForm.password.value};
                userObj.rememberMe = $scope.loginForm.rememberMe.value[0] === !0, User.login(userObj, function (data) {
                    if (data.success) {
                        if (void 0 !== $location.search().fromurl)return void(window.location = $location.search().fromurl);
                        User.getUser(function (user) {
                            if (user.isLogged) {
                                $rootScope.user = user.data, $rootScope.userApps = user.apps, $rootScope.loggedIn = user.isLogged, AppService.getMyApps(), $rootScope.fix = !1;
                                var loc = $location.path();
                                HelperService.string.endsWith(loc, "/login") && $location.path("/" + $rootScope.currentLanguage + "/home"), Dialog.closeDialog()
                            }
                            eventsService.publish("user.auth", user.isLogged)
                        })
                    }
                    $scope.loginForm.isBusy = !1
                })
            } else {
                var msg = new Statusmessage({message: "Gelieve uw gegevens in te vullen om aan te melden.", type: "E", location: "form", persistance: "timer"});
                StatusService.addMessage(msg)
            }
        };
        var loginContext = {app: "aos", appContext: "login", slug: "", header: {h1: "Aanmelden"}};
        $scope.loginForm = {username: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldige gebruikersnaam in te vullen.", length: {min: 5, max: 50, errorMessage: "Uw gebruikersnaam moet minimaal 5 en maximaal 50 tekens bevatten"}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full"}}, password: {value: "", validation: {required: !0, errorMessage: "Gelieve een correct wachtwoord in te vullen."}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full"}}, rememberMe: {value: "", layout: {fieldClass: "span-full tablet--span-full desktop--span-full"}}, isBusy: !1}, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.medewerkerController", ["$scope", "$rootScope", "requestContext", "$http", "$cookies", "$location", "_", "eventsService", "UserService", "AppService", function ($scope, $rootScope, requestContext, $http, $cookies, $location, _, eventsService, User, AppService) {
        var initialize = function () {
            User.getUser(function (user) {
                if (user.isLogged) {
                    var redirectUser = function (hasRoleMedewerker) {
                        hasRoleMedewerker && void 0 !== $cookies.MRHSession && $location.path("/" + $rootScope.currentLanguage + "/home")
                    };
                    User.hasRole("stadsmedewerker", redirectUser)
                }
            }, !0)
        };
        $scope.loginEmployee = function () {
            $scope.isEditVisible = !1, $scope.userLoginForm.isBusy = !0;
            var userObj = {username: $scope.userLoginForm.username.value, password: $scope.userLoginForm.password.value};
            User.loginEmployee(userObj, function (data) {
                data.success && User.getUser(function (user) {
                    if (user.isLogged) {
                        if ($rootScope.user = user.data, $rootScope.userApps = user.apps, $rootScope.loggedIn = user.isLogged, AppService.getMyApps(), $rootScope.fix = !1, void 0 !== $location.search().fromurl)return void(window.location = $location.search().fromurl);
                        $location.path("/" + $rootScope.currentLanguage + "/home")
                    }
                    eventsService.publish("user.auth", user.isLogged)
                }), $scope.userLoginForm.isBusy = !1
            })
        };
        var renderContext = requestContext.getRenderContext("standard.initstadsmedewerkersprofiel");
        $scope.userLoginForm = {username: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig medewerkersnummer in te vullen.", match: {pattern: /^[a-zA-Z]{1,2}\d{5,6}$/, errorMessage: "Uw medewerkersnummer moet 1 of 2 letters en 5 of 6 cijfers bevatten."}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, password: {value: "", validation: {required: !0, errorMessage: "Gelieve een correct wachtwoord in te vullen.", match: {pattern: /^(?=.*[0-9))|([!?@_+#\$%\^\&*\]])(?=.*[A-Z]).{8,}$/}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, isBusy: !1}, $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        }), initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.RequestPasswordController", ["$scope", "$rootScope", "$location", "UserService", "StatusService", function ($scope, $rootScope, $location, User, StatusService) {
        $scope.requestPassword = function () {
            if ($scope.newpasswordrequest.$valid) {
                $scope.passWordRequestForm.isBusy = !0;
                var userObj = {username: $scope.passWordRequestForm.username.value};
                User.requestPassword(userObj, function (data) {
                    data.success === !0 ? $location.path("/" + $rootScope.currentLanguage + "/reset-check-mail") : StatusService.addMessage(data.msgs), $scope.passWordRequestForm.isBusy = !1
                })
            }
        }, $scope.passWordRequestForm = {username: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldige gebruikersnaam in te vullen."}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, isBusy: !1}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.NotificationsController", ["$scope", "$rootScope", "$location", "NotificationService", "eventsService", function ($scope, $rootScope, $location, NotificationService, EventsService) {
        function initialize() {
        }

        $scope.markAsRead = function (notification) {
            NotificationService.setReadStatus(notification.id, function (response) {
                if (response.success) {
                    EventsService.publish("notification.read.header", notification.id);
                    var Arrtemp = $rootScope.notifications, idx = Arrtemp.indexOf(notification);
                    -1 !== idx && Arrtemp.splice(idx, 1), $rootScope.notifications = Arrtemp, $location.path(void 0 !== notification.link ? "/" + $rootScope.currentLanguage + notification.link : "/" + $rootScope.currentLanguage + "/" + notification.app)
                }
            })
        }, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.overzichtController", ["$scope", "$rootScope", "requestContext", "$http", "_", "UserService", function ($scope, $rootScope, requestContext, $http, _, User) {
        $scope.user = User;
        var renderContext = requestContext.getRenderContext("standard.overzicht");
        $scope.subview = renderContext.getNextSection(), $rootScope.isOverzicht = !0, $scope.$on("$destroy", function () {
            $rootScope.isOverzicht = !1
        }), $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        })
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.AkaartController", ["$rootScope", "$scope", "$http", "$window", "$timeout", "_", "HelperService", "UserService", "eventsService", function ($rootScope, $scope, $http, $window, $timeout, _, HelperService, User) {
        function initialize() {
            getAkaart(), User.getAkaartDetails(function (response) {
                $scope.page.isLoadingDetails = !1, response.success ? ($scope.akaartDetails = response.data, $scope.aKaartTransferForm.fields.akaartnrFrom.value = $scope.akaartDetails.cardnumber) : $scope.page.failedToLoadDetails = !0
            })
        }

        function hidemessages() {
            $timeout(function () {
                $scope.messages = {negative: [], positive: []}
            }, 5e3)
        }

        function getAkaart() {
            User.getAkaart(function (response) {
                if ($scope.page.isLoading = !1, response.success) {
                    $scope.akaart = response.data;
                    for (var tempoptions = [], i = 1; i <= $scope.akaart.points; i += 1)tempoptions.push({key: i, value: i});
                    $scope.aKaartTransferForm.fields.points.options = tempoptions
                } else $scope.page.failedToLoad = !0
            })
        }

        $scope.toggleAkaartForm = function () {
            $scope.showAkaartForm = !$scope.showAkaartForm
        }, $scope.transferAkaartPoints = function () {
            $scope.aKaartTransferForm.isBusy = !0;
            var requestObject = {tocard: $scope.aKaartTransferForm.fields.akaartnrTo.value, points: $scope.aKaartTransferForm.fields.points.value};
            User.transferAkaartPoints(requestObject, function (response) {
                response.success !== !0 ? (_.forEach(response.data.msgs, function (msg) {
                    $scope.messages.negative.push(msg.message)
                }), hidemessages()) : ($scope.messages.positive.push("Uw punten zijn correct overgezet"), hidemessages(), getAkaart(), $scope.toggleAkaartForm(), $scope.confirmation = !0), $scope.aKaartTransferForm.isBusy = !1
            })
        }, $scope.confirmation = !1, $scope.showAkaartForm = !1, $scope.page = {isLoading: !0, isLoadingDetails: !0}, $scope.aKaartTransferForm = {fields: {points: {value: "", options: [], validation: {required: !0, errorMessage: "Selecteer een puntenaantal."}}, akaartnrTo: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig A-kaartnummer in te vullen.", match: {pattern: "^[0-9]{12}$"}}}, akaartnrFrom: {value: "", validation: {required: !1, errorMessage: "Gelieve een geldig A-kaartnummer in te vullen."}}}, isVisible: !1, isBusy: !1}, $scope.messages = {negative: [], positive: []}, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.AppDetailController", ["$rootScope", "$scope", "requestContext", "UserService", "AppService", "HelperService", "$templateCache", "$http", function ($rootScope, $scope, requestContext, User, AppService, Helper, $templateCache, $http) {
        function loadAppTemplate(appSlug) {
            $scope.app.data = AppService.getAppFromSlug(appSlug) || {};
            var templateUrl = $scope.app.data.url.replace(/\/+$/, "") + "/t/settings";
            $http.get(templateUrl).success(function (template) {
                appSlug === $scope.settingsSlug && ($templateCache.put(templateUrl, template), loadSettings(function () {
                    $scope.app.template = templateUrl, $scope.$apply()
                }))
            }).error(function () {
                appSlug === $scope.settingsSlug && ($scope.app.template = "/assets/aOS/js/os/views/no-settings.htm")
            })
        }

        function loadSettings(fn) {
            var appSettingsController = $scope.app.data.url.replace(/\/+$/, "") + "/js/controllers/settings.js";
            Helper.includeJavaScript(appSettingsController, fn)
        }

        function initialize() {
            loadAppTemplate($scope.settingsSlug)
        }

        var renderContext = requestContext.getRenderContext("standard.preferences.apps.detail", "slug");
        $scope.subview = renderContext.getNextSection(), $scope.settingsSlug = requestContext.getParam("slug"), $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.settingsSlug = requestContext.getParam("slug"), requestContext.haveParamsChanged(["slug"]) && loadAppTemplate($scope.settingsSlug))
        }), initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.AppController", ["$rootScope", "$scope", "requestContext", "UserService", "$routeParams", function ($rootScope, $scope, requestContext, User, $routeParams) {
        var renderContext = requestContext.getRenderContext("standard.preferences.apps", "slug");
        $scope.subview = renderContext.getNextSection(), $scope.selectedApp = $routeParams.slug, $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection(), $scope.selectedApp = $routeParams.slug)
        })
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.GeneralController", ["$rootScope", "$scope", "UserService", function ($rootScope, $scope, User) {
        function getSessionCount() {
            User.getSessionCount(function (response) {
                response.success && ($scope.settings.sessionCount = response.data.sessionCount)
            })
        }

        $scope.logMeOut = function () {
            User.logOutEverywhere(function (response) {
                response.success && ($scope.settings.sessionCount = 0)
            })
        }, $scope.settings = {sessionCount: 0}, getSessionCount()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.GroepenController", ["$rootScope", "$scope", "$http", "$window", "_", "HelperService", "UserService", function () {
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.InterestsController", ["$rootScope", "$scope", "$http", "$timeout", "UserService", "eventsService", "_", function ($rootScope, $scope, $http, $timeout, User, eventsService, _) {
        function initialize() {
            getUserInterests()
        }

        function getUserInterests() {
            User.getInterests(function (response) {
                response.success && ($scope.interests = response.data)
            })
        }

        var timer, interests = [];
        $scope.isBusy = !1, $scope.changeInterests = function (interest) {
            var intrst = _.find($scope.interests, {name: interest.name});
            if (void 0 !== intrst) {
                var check = _.find(interests, {name: interest.name});
                void 0 !== check && check.checked !== interest.checked ? check.checked = interest.checked : interests.push(_.cloneDeep(interest)), void 0 !== timer && $timeout.cancel(timer), timer = $timeout(function () {
                    $scope.isBusy = !0, User.changeInterests(interests, function (response) {
                        response.success ? interests.length = 0 : eventsService.publish("error.message", response.msgs)
                    }), $scope.isBusy = !1
                }, 1e3)
            }
        }, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.KoppelingenController", ["$rootScope", "$scope", "$http", "$window", "_", "HelperService", "UserService", "eventsService", function ($rootScope, $scope, $http, $window, _, HelperService, User, eventsService) {
        function initialize() {
            getAllKoppelingen(), "gate15" === window.dsSiteName && getGate15Verenigingen()
        }

        function getAllKoppelingen() {
            User.getKoppelingen(function (response) {
                response.success && ($scope.koppelingen = response.data)
            })
        }

        function getGate15Verenigingen() {
            User.GateOrganisations.get().$promise.then(function (res) {
                res.success && ($scope.organisations = [], res.data.forEach(function (org) {
                    $scope.organisations.push({key: org.id, value: org.vereniging})
                })), $scope.state.loading = !1
            }, function () {
                $scope.saveError = !0
            })
        }

        $scope.toggleKoppeling = function (koppeling) {
            koppeling.linked === !0 ? koppeling.enabled === !0 ? User.removeKoppeling(koppeling.name, function (response) {
                response.success && (getAllKoppelingen(), User.refreshUser(function () {
                    User.hasRole("stadsmedewerker", function (hasRole) {
                        $rootScope.isMedewerker = hasRole
                    })
                }), "akaart" === koppeling.name ? eventsService.publish("akaart.linked", !1) : "student" === koppeling.name && eventsService.publish("student.linked", !1))
            }) : User.enableKoppeling(koppeling.name, function (response) {
                response.success && (getAllKoppelingen(), User.refreshUser(function () {
                    User.hasRole("stadsmedewerker", function (hasRole) {
                        $rootScope.isMedewerker = hasRole
                    })
                }), "akaart" === koppeling.name ? eventsService.publish("akaart.linked", !0) : "student" === koppeling.name && eventsService.publish("student.linked", !0))
            }) : $scope.activateKoppeling(koppeling.name)
        }, $scope.koppelingForms = {}, $scope.activateAKaart = function () {
            $scope.aKaartForm.isBusy = !0;
            var requestObject = {birthday: $scope.aKaartForm.fields.birthday.value, kaartnummer: $scope.aKaartForm.fields.akaartnr.value};
            $scope.koppelingForms.aKaartFormActivate.$valid ? User.activateAKaart(requestObject, function (response) {
                response.success ? (getAllKoppelingen(), $scope.aKaartForm.isVisible = !1, eventsService.publish("akaart.linked", !0)) : eventsService.publish("error.message", response.msgs), $scope.aKaartForm.isBusy = !1
            }) : $scope.aKaartForm.isBusy = !1
        }, $scope.activateKoppeling = function (koppeltype) {
            switch (koppeltype) {
                case"akaart":
                    $scope.aKaartForm.isVisible = !0;
                    break;
                case"yammer":
                    $window.location.href = "/srv/user/d/account/yammer/login";
                    break;
                case"eid":
                    $window.location.href = "/srv/user/d/account/eid/activate";
                    break;
                case"student":
                    $scope.studentForm.isVisible = !0;
                    break;
                case"gate15_organisation":
                    $scope.organisationForm.isVisible = !0
            }
        }, $scope.cancelAkaart = function () {
            $scope.aKaartForm.isVisible = !1
        }, $scope.activateStudent = function () {
            $scope.studentForm.isBusy = !0;
            var requestObject = {studentnr: $scope.studentForm.fields.studentnr.value, onderwijsinstelling: $scope.studentForm.fields.onderwijsinstelling.value};
            $scope.koppelingForms.studentFormActivate.$valid ? User.activateStudent(requestObject, function (response) {
                response.success ? (getAllKoppelingen(), $scope.studentForm.isVisible = !1, eventsService.publish("student.linked", !0)) : eventsService.publish("error.message", response.msgs), $scope.studentForm.isBusy = !1
            }) : $scope.studentForm.isBusy = !1
        }, $scope.cancelOrganisation = function () {
            $scope.organisationForm.isVisible = !1
        }, $scope.activateOrganisation = function () {
            $scope.organisationForm.isBusy = !0;
            var requestObject = {organisation: $scope.organisationForm.fields.organisation.value};
            $scope.koppelingForms.organisationFormActivate.$valid ? User.activateOrganisation(requestObject, function (response) {
                response.success ? (getAllKoppelingen(), $scope.organisationForm.isVisible = !1, eventsService.publish("organisation.linked", !0)) : eventsService.publish("error.message", response.msgs), $scope.organisationForm.isBusy = !1
            }) : $scope.organisationForm.isBusy = !1
        }, $scope.cancelOrganisation = function () {
            $scope.organisationForm.isVisible = !1
        }, $scope.aKaartForm = {fields: {birthday: {value: "", validation: {required: !0, errorMessage: "Gelieve uw geboortedatum in te vullen.", match: {pattern: "^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)[0-9][0-9]$"}}}, akaartnr: {value: "", validation: {required: !0, errorMessage: "Gelieve uw A-kaartnummer in te vullen.", match: {pattern: "^[0-9]{12}$"}}}}, isVisible: !1, isBusy: !1}, $scope.studentForm = {fields: {onderwijsinstelling: {value: "", validation: {required: !0, errorMessage: "Gelieve jouw onderwijsinstelling te kiezen"}}, studentnr: {value: "", validation: {required: !0, errorMessage: "Gelieve jouw studentnummer in te vullen.", length: {min: 1, max: 24, errorMessage: "Ongeldig formaat studentennummer "}}}}, isVisible: !1, isBusy: !1}, $scope.onderwijsinstellingen = [
            {key: "AMS", value: "Antwerp Management School", validation: /^1\d{7}$/},
            {key: "AP More", value: "Artesis Plantijn Hogeschool", validation: /^\d{5,6}$/},
            {key: "HZS", value: "Hogere Zeevaartschool", validation: /^s201\d{6}$/},
            {key: "ITG", value: "Instituut voor Tropische Geneeskunde", validation: /^4\d{3}$/},
            {key: "KDG", value: "Karel de Grote Hogeschool", validation: /^\d{7}-\d{2}$/},
            {key: "Thomas More", value: "Thomas More Antwerpen", validation: /^\d{6}$/},
            {key: "UA", value: "Universiteit Antwerpen", validation: /^201\d{5}$/}
        ], $scope.organisationForm = {fields: {organisation: {value: "", validation: {required: !0, errorMessage: "Gelieve jouw organisatie te kiezen"}}}, isVisible: !1, isBusy: !1}, $scope.organisations = [
            {key: "", value: "Kies een organisatie"}
        ], initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.MedewerkerprofielController", ["$scope", "UserService", "$rootScope", function ($scope, User) {
        function initialize() {
            getCRSMedewerker()
        }

        function getCRSMedewerker() {
            $scope.isLoadingCRSMedewerker = !0, User.getCRSMedewerker().success(function (response) {
                $scope.isLoadingCRSMedewerker = !1, response.success && ($scope.crsMedewerker = response.data.crsmedewerker)
            })
        }

        $scope.processingBankAccount = !1, $scope.state = {medewerkerInfo: "work"}, $scope.saveProfile = function () {
        };
        initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.NotificationsController", ["$scope", "$location", "UserService", "_", "NotificationService", "StatusService", "eventsService", function ($scope, $location, User, _, Notification, Status, EventsService) {
        function initialize() {
            Notification.getAll(function (notifications) {
                _.each(notifications, function (i) {
                    var notification = {};
                    notification.name = i.app, notification.date = i.creationDate, notification.message = i.message, notification.id = i._id, notification.read = i.read, notification.link = i.link, $scope.notifications.push(notification)
                })
            })
        }

        $scope.markAsRead = function (notification, link) {
            notification.read || Notification.setReadStatus(notification.id, function (response) {
                if (response.success)$scope.notifications = _.map($scope.notifications, function (note) {
                    if (note.id === notification.id) {
                        if (!link) {
                            var msg = {message: "Melding is gemarkeerd als gelezen.", type: "S", location: "bar", persistance: "page"};
                            Status.addMessage(msg)
                        }
                        note.read = !0, EventsService.publish("notification.read.preferences", notification.id)
                    }
                    return note
                }); else {
                    var msg = {message: "Er is iets misgegaan met de service.", type: "E", location: "bar", persistance: "page"};
                    Status.addMessage(msg)
                }
            }), link && $location.path(link)
        }, $scope.notifications = [], EventsService.on("notification.read.header", function (id) {
            $scope.notifications = _.map($scope.notifications, function (note) {
                return note.id === id && (note.read = !0), note
            })
        }), initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.PersoonlijkegegevensController", ["$scope", "UserService", "eventsService", "Statusmessage", "StatusService", "_", function ($scope, User, eventsService, Statusmessage, StatusService, _) {
        function initialize() {
            getCRSPersoon(), getLightProfile(), User.refreshUser(function (usr) {
                $scope.personalProfileForm.fields.voornaam.value = usr.data.firstName, $scope.personalProfileForm.fields.naam.value = usr.data.lastName, $scope.personalProfileForm.fields.birthdate.value = usr.data.birthDate, $scope.personalProfileForm.fields.birthplace.value = usr.data.birthPlace, $scope.personalProfileForm.fields.maritalstate.value = usr.data.maritalStatus, $scope.personalProfileForm.fields.gender.value = usr.data.gender, $scope.originalProfileForm = _.cloneDeep($scope.personalProfileForm.fields)
            })
        }

        function getLightProfile() {
            $scope.isLoadingSocial = !0;
            var overrideErrorHandling = !0;
            User.getLightProfile(overrideErrorHandling).success(function (response) {
                $scope.isLoadingSocial = !1, response.success && ($scope.profileSocialMediaForm.fields.twitter.value = response.data.light.customer.social_media.twitter, $scope.profileSocialMediaForm.fields.facebook.value = response.data.light.customer.social_media.facebook, $scope.profileSocialMediaForm.fields.linkedin.value = response.data.light.customer.social_media.linkedin, $scope.profileSocialMediaForm.fields.blog.value = response.data.light.customer.social_media.blogurl, $scope.originalSocialMediaForm = _.cloneDeep($scope.profileSocialMediaForm.fields))
            })
        }

        function getCRSPersoon() {
            $scope.isLoadingCRSPersoon = !0, User.getCRSPersoon().success(function (response) {
                $scope.isLoadingCRSPersoon = !1, response.success && ($scope.eidUser = response.data.crspersoon.customer.person, $scope.eidLinked = !1)
            })
        }

        function toggleEditSocialMediaForm() {
            $scope.permissions.showChangeSocialMediaForm = !$scope.permissions.showChangeSocialMediaForm
        }

        function toggleEditProfileForm() {
            $scope.permissions.showEditProfileForm = !$scope.permissions.showEditProfileForm
        }

        $scope.toggleEditProfileForm = toggleEditProfileForm, $scope.toggleEditSocialMediaForm = toggleEditSocialMediaForm, $scope.eidLinked = !1, $scope.profileSocialMediaForm = {fields: {twitter: {value: "", validation: {required: !1, errorMessage: "Gelieve een geldige twitter gebruikersnaam in te vullen."}}, facebook: {value: "", validation: {required: !1, errorMessage: "Gelieve een geldige facebook gebruikersnaam in te vullen."}}, blog: {value: "", validation: {required: !1, errorMessage: "Gelieve een geldige blog url in te vullen."}}, linkedin: {value: "", validation: {required: !1, errorMessage: "Gelieve een geldige linkedin gebruiker in te vullen."}}}, isVisible: !0, isBusy: !1}, $scope.personalProfileForm = {fields: {voornaam: {value: "", validation: {required: !0, errorMessage: "Gelieve uw voornaam in te vullen.", match: {pattern: /^[A-Za-z-' \u00C0-\u017F]{2,}$/}}}, naam: {value: "", validation: {required: !0, errorMessage: "Gelieve uw achternaam in te vullen.", match: {pattern: /^[A-Za-z-' \u00C0-\u017F]{2,}$/}}}, gender: {value: "", options: [
            {key: "m", value: "Man"},
            {key: "v", value: "Vrouw"}
        ], validation: {required: !1, errorMessage: "Selecteer uw geslacht."}}, birthplace: {value: "", validation: {required: !1, errorMessage: "Selecteer uw geboorteplaats."}}, birthdate: {value: "", validation: {required: !1, errorMessage: "Selecteer uw geboortedatum."}}, maritalstate: {value: "", options: [
            {key: "samenwonend", value: "Samenwonend"},
            {key: "ongehuwd", value: "Ongehuwd"},
            {key: "gehuwd", value: "Gehuwd"},
            {key: "weduwnaar", value: "Weduwnaar / Weduwe"},
            {key: "gescheiden", value: "Gescheiden"},
            {key: "onbepaald", value: "Onbepaald"}
        ], validation: {required: !1, errorMessage: "Selecteer uw burgerlijke staat."}}}, isVisible: !0, isBusy: !1}, $scope.originalProfileForm = {}, $scope.permissions = {showChangeSocialMediaForm: !1, showEditProfileForm: !1}, $scope.saveSocialMediaProfile = function () {
            $scope.profileSocialMediaForm.isBusy = !0;
            var social = {facebook: $scope.profileSocialMediaForm.fields.facebook.value, twitter: $scope.profileSocialMediaForm.fields.twitter.value, linkedin: $scope.profileSocialMediaForm.fields.linkedin.value, blog: $scope.profileSocialMediaForm.fields.blog.value};
            User.saveSocialMediaLinks(social, function (data) {
                if (data.success !== !0)StatusService.addMessage(data.msgs); else {
                    var msg = new Statusmessage({type: "S", message: "Social media links opgeslagen.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg), toggleEditSocialMediaForm(), $scope.originalProfileForm = _.cloneDeep($scope.personalProfileForm.fields)
                }
                $scope.profileSocialMediaForm.isBusy = !1
            })
        }, $scope.savePersonalProfile = function () {
            $scope.personalProfileForm.isBusy = !0, $scope.preferencesPersonalProfileForm.$valid ? ($scope.user.firstName = $scope.personalProfileForm.fields.voornaam.value, $scope.user.lastName = $scope.personalProfileForm.fields.naam.value, $scope.user.birthDate = $scope.personalProfileForm.fields.birthdate.value, $scope.user.birthPlace = $scope.personalProfileForm.fields.birthplace.value, $scope.user.maritalStatus = $scope.personalProfileForm.fields.maritalstate.value, $scope.user.gender = $scope.personalProfileForm.fields.gender.value, User.saveUser($scope.user, function (data) {
                if (data.success !== !0)StatusService.addMessage(data.msgs); else {
                    var msg = new Statusmessage({type: "S", message: "De wijzigingen in uw profiel zijn goed opgeslagen.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg), User.refreshUser(toggleEditProfileForm), $scope.originalProfileForm = _.cloneDeep($scope.personalProfileForm.fields)
                }
                $scope.personalProfileForm.isBusy = !1
            })) : $scope.personalProfileForm.isBusy = !1
        }, $scope.resetForm = function () {
            angular.copy($scope.originalProfileForm, $scope.personalProfileForm.fields), toggleEditProfileForm()
        }, $scope.resetSocialMediaForm = function () {
            angular.copy($scope.originalSocialMediaForm, $scope.profileSocialMediaForm.fields), toggleEditSocialMediaForm()
        }, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.ProfileController", ["$scope", "$timeout", "_", "UserService", "eventsService", "StatusService", "Statusmessage", function ($scope, $timeout, _, User, eventsService, StatusService, Statusmessage) {
        function initialize() {
            User.refreshUser(function (usr) {
                $scope.profileForm.fields.username.value = usr.data.username, $scope.profileForm.fields.voornaam.value = usr.data.firstName, $scope.profileForm.fields.naam.value = usr.data.lastName, $scope.profileForm.fields.email.value = usr.data.email, $scope.profileForm.fields.avatarUrl.value = usr.data.avatarUrl, $scope.originalProfileForm = _.cloneDeep($scope.profileForm.fields)
            })
        }

        $scope.removeEmail = function (email) {
            User.removeEmail(email, function () {
                User.refreshUser(function (usr) {
                    $scope.user.secondaryEmails = usr.data.secondaryEmails;
                    var msg = new Statusmessage({type: "S", message: "E-mailadres verwijderd.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg)
                })
            })
        }, $scope.removePhone = function (phone) {
            User.removePhone(phone, function () {
                User.refreshUser(function (usr) {
                    $scope.user.secondaryPhones = usr.data.secondaryPhones;
                    var msg = new Statusmessage({type: "S", message: "Telefoonnummer verwijderd.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg)
                })
            })
        }, $scope.makePrimary = function (email) {
            User.setPrimaryEmail(email, function () {
                User.refreshUser(function (usr) {
                    $scope.user.email = usr.data.email, $scope.user.secondaryEmails = usr.data.secondaryEmails;
                    var msg = new Statusmessage({type: "S", message: "Uw primair e-mailadres werd gewijzigd.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg)
                })
            })
        }, $scope.makePrimaryPhone = function (phone) {
            User.setPrimaryPhone(phone, function () {
                User.refreshUser(function (usr) {
                    $scope.user.phone = usr.data.phone, $scope.user.secondaryPhones = usr.data.secondaryPhones;
                    var msg = new Statusmessage({type: "S", message: "Uw primair telefoonnummer werd gewijzigd.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg)
                })
            })
        }, $scope.resendActivationEmail = function (email) {
            User.resendActivation(email)
        }, $scope.switchUserAvatar = function (file) {
            void 0 !== file.url && ($scope.profileForm.fields.avatarUrl.value = file.url, $scope.demoavatar.url = file.url)
        }, $scope.saveProfile = function () {
            $scope.profileForm.isBusy = !0, $scope.preferencesProfileForm.$valid ? ($scope.user.firstName = $scope.profileForm.fields.voornaam.value, $scope.user.lastName = $scope.profileForm.fields.naam.value, $scope.user.username = $scope.profileForm.fields.username.value, $scope.user.email = $scope.profileForm.fields.email.value, $scope.user.avatarUrl = $scope.profileForm.fields.avatarUrl.value, User.saveUser($scope.user, function (data) {
                if (data.success !== !0)StatusService.addMessage(data.msgs), $scope.demoavatar = ""; else {
                    var msg = new Statusmessage({type: "S", message: "De wijzigingen in uw profiel zijn goed opgeslagen.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg), User.refreshUser($scope.toggleEditProfileForm), $scope.permissions.showAddEmailForm && $scope.saveEmail(), $scope.permissions.showAddPhoneForm && $scope.savePhone()
                }
                $scope.profileForm.isBusy = !1
            })) : $scope.profileForm.isBusy = !1
        }, $scope.resetForm = function () {
            angular.copy($scope.originalProfileForm, $scope.profileForm.fields), $scope.toggleEditProfileForm()
        }, $scope.saveEmail = function () {
            if ($scope.profileEmailForm.fields.newEmail.value.length > 0) {
                $scope.profileEmailForm.isBusy = !0;
                var msg = {};
                User.addEmail($scope.profileEmailForm.fields.newEmail.value, !0, function (data) {
                    data.success !== !0 ? (msg = new Statusmessage({type: "E", message: "Er was een probleem bij het opslaan van uw e-mailadres. Probeer het opnieuw.", location: "bar", persistance: "timer"}), $scope.profileEmailForm.isBusy = !1) : (msg = new Statusmessage({type: "S", message: "Uw nieuw e-mailadres is opgeslagen.", location: "bar", persistance: "timer"}), $scope.profileEmailForm.fields.newEmail.value = "", $scope.profileEmailForm.fields.newEmail.isInvalid = !0, User.refreshUser(function (usr) {
                        $scope.user.secondaryEmails = usr.data.secondaryEmails, $scope.toggleEmailForm(), $scope.profileEmailForm.isBusy = !1
                    })), StatusService.addMessage(msg)
                })
            }
        }, $scope.savePhone = function () {
            if ($scope.profilePhoneForm.fields.newPhone.value.length > 0) {
                $scope.profilePhoneForm.isBusy = !0;
                var dirtyHackCleanedPhoneUntillTheESBAcceptsOtherCharacters = $scope.profilePhoneForm.fields.newPhone.value, msg = {};
                User.addPhone(dirtyHackCleanedPhoneUntillTheESBAcceptsOtherCharacters, !0, function (data) {
                    data.success !== !0 ? (msg = new Statusmessage({type: "E", message: "Er was een probleem bij het opslaan van uw telefoonnummer. Probeer het opnieuw.", location: "bar", persistance: "timer"}), $scope.profilePhoneForm.isBusy = !1) : (msg = new Statusmessage({type: "S", message: "Uw nieuw telefoonnummer is opgeslagen.", location: "bar", persistance: "timer"}), $scope.profilePhoneForm.fields.newPhone.value = "", $scope.profilePhoneForm.fields.newPhone.isInvalid = !0, User.refreshUser(function (usr) {
                        $scope.user.phone = usr.data.phone, $scope.user.secondaryPhones = usr.data.secondaryPhones, $scope.togglePhoneForm(), $scope.profilePhoneForm.isBusy = !1
                    })), StatusService.addMessage(msg)
                })
            }
        }, $scope.savePassword = function () {
            $scope.profilePasswordForm.isBusy = !0;
            var msg = {};
            User.changePassword($scope.profilePasswordForm.fields.newPass.value, $scope.profilePasswordForm.fields.verifyNewPass.value, $scope.profilePasswordForm.fields.oldPass.value, !0, function (data) {
                data.success !== !0 ? (msg = new Statusmessage({type: "E", message: "Er was een probleem bij het opslaan van uw wachtwoord. Probeer het opnieuw.", location: "bar", persistance: "timer"}), $scope.profilePasswordForm.isBusy = !1) : (msg = new Statusmessage({type: "S", message: "Uw nieuw wachtwoord is opgeslagen.", location: "bar", persistance: "timer"}), $scope.profilePasswordForm.fields.oldPass.value = "", $scope.profilePasswordForm.fields.newPass.value = "", $scope.profilePasswordForm.fields.verifyNewPass.value = "", User.refreshUser($scope.toggleNewPassForm), $scope.profilePasswordForm.isBusy = !1), StatusService.addMessage(msg)
            })
        }, $scope.toggleEmailForm = function () {
            $scope.permissions.showAddEmailForm = !$scope.permissions.showAddEmailForm, $scope.profileEmailForm.fields.newEmail.value = ""
        }, $scope.togglePhoneForm = function () {
            $scope.permissions.showAddPhoneForm = !$scope.permissions.showAddPhoneForm, $scope.profilePhoneForm.fields.newPhone.value = ""
        }, $scope.toggleEmailEditForm = function () {
            $scope.permissions.showAddEmailEditForm = !$scope.permissions.showAddEmailEditForm
        }, $scope.togglePhoneEditForm = function () {
            $scope.permissions.showAddPhoneEditForm = !$scope.permissions.showAddPhoneEditForm
        }, $scope.toggleEditProfileForm = function () {
            $scope.permissions.showEditProfileForm = !$scope.permissions.showEditProfileForm
        }, $scope.removeAvatar = function () {
            $scope.user.avatarUrl = null, User.saveUser($scope.user, function (data) {
                if (data.success !== !0)StatusService.addMessage(data.msgs), $scope.demoavatar = ""; else {
                    var msg = new Statusmessage({type: "S", message: "Uw profielfoto werd succesvol verwijderd.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg), User.refreshUser()
                }
                $scope.profileForm.isBusy = !1
            })
        }, $scope.toggleNewPassForm = function () {
            $scope.permissions.showChangePasswordForm = !$scope.permissions.showChangePasswordForm, $scope.profilePasswordForm.fields.oldPass.value = "", $scope.profilePasswordForm.fields.newPass.value = "", $scope.profilePasswordForm.fields.verifyNewPass.value = ""
        }, $scope.profilePasswordForm = {fields: {newPass: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig wachtwoord in te vullen.", match: {pattern: /^(?=.*[0-9))|([!?@_+#\$%\^\&*\]])(?=.*[A-Z]).{8,}$/}, pwdstrength: "newPass"}}, verifyNewPass: {value: "", validation: {required: !0, errorMessage: "De wachtwoorden komen niet overeen.", match: {element: "newPass"}}}, oldPass: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig wachtwoord in te vullen.", match: {pattern: /^(?=.*[0-9|!?@_+#\$%\^\&*\])(?=.*[A-Z]).{8,}$/}}}}, isVisible: !0, isBusy: !1}, $scope.profileEmailForm = {fields: {newEmail: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig e-mailadres in te vullen.", validators: {emailValidator: {name: "EmailAddress"}}}}}, isVisible: !0, isBusy: !1}, $scope.profilePhoneForm = {fields: {newPhone: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig telefoonnummer in te vullen."}}}, isVisible: !0, isBusy: !1}, $scope.profileForm = {fields: {voornaam: {value: "", validation: {required: !0, errorMessage: "Gelieve uw voornaam in te vullen.", match: {pattern: /^[A-Za-z-' \u00C0-\u017F]{2,}$/}}}, naam: {value: "", validation: {required: !0, errorMessage: "Gelieve uw achternaam in te vullen.", match: {pattern: /^[A-Za-z-' \u00C0-\u017F]{2,}$/}}}, username: {value: "", validation: {required: !0, errorMessage: "Gelieve een correcte gebruikersnaam in te vullen.", match: {pattern: /^[[a-zA-Z0-9-.@+_]+$/}, length: {min: 5, max: 50, errorMessage: "Uw gebruikersnaam moet minimaal 5 en maximaal 50 tekens bevatten"}}}, email: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig e-mailadres in te vullen."}}, avatarUrl: {value: ""}}, isVisible: !0, isBusy: !1}, $scope.originalProfileForm = {}, $scope.permissions = {showAddEmailForm: !1, showAddEmailEditForm: !1, showAddPhoneForm: !1, showAddPhoneEditForm: !1, showChangePasswordForm: !1, showEditProfileForm: !1}, $scope.demoavatar = {url: ""}, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.Preferences.StudentController", ["$scope", "$timeout", "_", "UserService", "eventsService", "StatusService", "Statusmessage", function ($scope, $timeout, _, User, eventsService, StatusService, Statusmessage) {
        function initialize() {
            User.getStudentInfo("", function (usr) {
                $scope.profileForm.fields.bio.value = usr.data.bio ? usr.data.bio : "voorbeeld bio", $scope.profileForm.fields.workDescription.value = usr.data.workDescription ? usr.data.workDescription : "work description", $scope.profileForm.fields.studentPictureUrl.value = usr.data.studentPictureUrl, $scope.originalProfileForm = _.cloneDeep($scope.profileForm.fields)
            })
        }

        $scope.switchUserAvatar = function (file) {
            void 0 !== file.url && ($scope.profileForm.fields.studentPictureUrl.value = file.url, $scope.demoavatar.url = file.url)
        }, $scope.saveProfile = function () {
            $scope.profileForm.isBusy = !0, $scope.preferencesProfileForm.$valid ? ($scope.user.bio = $scope.profileForm.fields.bio.value, $scope.user.workDescription = $scope.profileForm.fields.workDescription.value, $scope.user.studentPictureUrl = $scope.profileForm.fields.studentPictureUrl.value, User.setStudentInfo($scope.user, function (data) {
                if (data.success !== !0)StatusService.addMessage(data.msgs), $scope.demoavatar = ""; else {
                    var msg = new Statusmessage({type: "S", message: "De wijzigingen in uw profiel zijn goed opgeslagen.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg), User.getStudentInfo("", $scope.toggleEditProfileForm)
                }
                $scope.profileForm.isBusy = !1
            })) : $scope.profileForm.isBusy = !1
        }, $scope.resetForm = function () {
            angular.copy($scope.originalProfileForm, $scope.profileForm.fields), $scope.toggleEditProfileForm()
        }, $scope.toggleEditProfileForm = function () {
            $scope.permissions.showEditProfileForm = !$scope.permissions.showEditProfileForm
        }, $scope.removeAvatar = function () {
            $scope.user.studentPictureUrl = null, User.saveUser($scope.user, function (data) {
                if (data.success !== !0)StatusService.addMessage(data.msgs), $scope.demoavatar = ""; else {
                    var msg = new Statusmessage({type: "S", message: "Uw profielfoto werd succesvol verwijderd.", location: "bar", persistance: "timer"});
                    StatusService.addMessage(msg), User.refreshUser()
                }
                $scope.profileForm.isBusy = !1
            })
        }, $scope.profileForm = {fields: {bio: {value: "", validation: {required: !1, errorMessage: "Gelieve uw bio in te vullen."}}, studentPictureUrl: {value: ""}, workDescription: {value: ""}}, isVisible: !0, isBusy: !1}, $scope.originalProfileForm = {}, $scope.permissions = {showEditProfileForm: !1}, $scope.demoavatar = {url: ""}, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.PreferencesController", ["$scope", "requestContext", "$http", "$location", "$anchorScroll", "_", "UserService", "HelperService", "$rootScope", "eventsService", function ($scope, requestContext, $http, $location, $anchorScroll, _, User, Helper, $rootScope, EventsService) {
        function initialize() {
            checkAkaartKoppeling(), checkStudentKoppeling(), getSessionCount(), -1 !== $rootScope.user.roles.indexOf("stadsmedewerker") && ($scope.showCRSSwitch = !0)
        }

        function getSessionCount() {
            var sessionUrl = "/srv/user/d/session-count";
            $http.get(sessionUrl).success(function (response) {
                response.success && ($scope.settings.sessionCount = response.data.sessionCount)
            })
        }

        function checkAkaartKoppeling() {
            User.getKoppeling("akaart", function (response) {
                if (response.success) {
                    var enabled = Helper.verifyNamespace("data.enabled", response);
                    $scope.isAkaartEnabled = enabled
                }
            })
        }

        function checkStudentKoppeling() {
            User.getKoppeling("student", function (response) {
                if (response.success) {
                    var enabled = Helper.verifyNamespace("data.enabled", response);
                    $scope.isStudentEnabled = enabled
                }
            })
        }

        $scope.toggleMedewerker = function () {
            $rootScope.isMedewerker ? User.disableKoppeling("crsklant", function (response) {
                response.success && User.refreshUser(function () {
                    User.hasRole("stadsmedewerker", function (hasRole) {
                        $rootScope.isMedewerker = hasRole
                    })
                })
            }) : User.enableKoppeling("crsklant", function (response) {
                response.success && User.refreshUser(function () {
                    User.hasRole("stadsmedewerker", function (hasRole) {
                        $rootScope.isMedewerker = hasRole
                    })
                })
            })
        }, $scope.logMeOut = function () {
            var logoutUrl = "/srv/user/d/logout-other";
            $http.get(logoutUrl).success(function (response) {
                response.success && ($scope.settings.sessionCount = 0)
            })
        };
        var renderContext = requestContext.getRenderContext("standard.preferences");
        $scope.showCRSSwitch = !1, $scope.isAkaartEnabled = !1, $scope.isStudentEnabled = !1, $scope.showNav = !1, $scope.subview = renderContext.getNextSection(), $scope.profile = {chatStatus: !0}, $scope.settings = {sessionCount: 0}, $scope.toggleSection = function (section) {
            switch (section) {
                case"prefsnav":
                    $scope.showNav = !$scope.showNav
            }
        }, $scope.$on("requestContextChanged", function () {
            renderContext.isChangeRelevant() && ($scope.subview = renderContext.getNextSection())
        }), $scope.settingsNavigate = function () {
            $scope.showNav = !1, $location.hash("searchTop"), $anchorScroll()
        }, EventsService.on("akaart.linked", function (link) {
            $scope.isAkaartEnabled = !!link
        }, $scope), EventsService.on("student.linked", function (link) {
            $scope.isStudentEnabled = !!link
        }, $scope), User.refreshUser(initialize)
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.ProfileController", ["$rootScope", "$scope", "$http", "_", "HelperService", "UserService", "eventsService", function ($rootScope, $scope, $http, _, HelperService, User, Events) {
        function initialize() {
            -1 !== $rootScope.user.roles.indexOf("stadsmedewerker") && ($scope.showCRSSwitch = !0)
        }

        function logout() {
            User.logout(function () {
                window.location = "/" + $rootScope.currentLanguage + "/home/uitgelogd"
            })
        }

        function toggleMedewerker() {
            $rootScope.isMedewerker ? User.disableKoppeling("crsklant", function () {
                User.refreshUser(function () {
                    User.hasRole("stadsmedewerker", function (hasRole) {
                        $rootScope.isMedewerker = hasRole, Events.publish("user.rolesChanged")
                    })
                })
            }, !0) : User.enableKoppeling("crsklant", function () {
                User.refreshUser(function () {
                    User.hasRole("stadsmedewerker", function (hasRole) {
                        $rootScope.isMedewerker = hasRole, Events.publish("user.rolesChanged")
                    })
                })
            }, !0)
        }

        $scope.logout = logout, $scope.toggleMedewerker = toggleMedewerker, $scope.showCRSSwitch = !1, initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.RegisterController", ["$rootScope", "$scope", "$location", "UserService", "eventsService", "Statusmessage", "StatusService", "gettext", function ($rootScope, $scope, $location, User, EventsService, Statusmessage, StatusService, gettext) {
        function init() {
            EventsService.publish("context.update", registerContext)
        }

        $scope.setFormScope = function (scope) {
            this.formScope = scope
        }, $scope.registerUser = function () {
            if ($scope.registerForm.isBusy = !0, this.formScope.register.$valid) {
                var userObj = {firstName: $scope.registerForm.firstName.value, lastName: $scope.registerForm.lastName.value, email: $scope.registerForm.email.value, plainPassword: $scope.registerForm.password.value, inviteCode: $scope.registerForm.inviteCode.value, username: $scope.registerForm.username.value};
                User.register(userObj, function (response) {
                    response.success ? $location.path("/" + $rootScope.currentLanguage + "/register-check-mail") : ($scope.registerForm.username.visible = !0, response.data && response.data.duplicateEmail && ($scope.alreadyregistered = !0)), $scope.registerForm.isBusy = !1
                })
            } else $scope.registerForm.isBusy = !1
        }, $scope.toggleDisplayForm = function () {
            $scope.registerFormIsDisplayed = !$scope.registerFormIsDisplayed
        };
        var registerContext = {app: "aos", appContext: "register", slug: "", header: {h1: "Registreren"}};
        $scope.registerFormIsDisplayed = !1, $scope.registerForm = {firstName: {value: "", validation: {required: !0, errorMessage: "Vul je voornaam in.", match: {pattern: /^['A-Za-z-' \u00C0-\u017F]{1,}$/}}, layout: {fieldClass: "span-full tablet--span-half-1 desktop--span-half-1"}}, lastName: {value: "", validation: {required: !0, errorMessage: "Vul je achternaam in.", match: {pattern: /^['A-Za-z-' \u00C0-\u017F]{1,}$/}}, layout: {fieldClass: "span-full tablet--span-half-2 desktop--span-half-2"}}, email: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig e-mailadres in te vullen.", validators: {emailValidator: {name: "EmailAddress"}}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, username: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldige gebruikersnaam in te vullen.", match: {pattern: /^[[a-zA-Z0-9-.@+_]+$/}, length: {min: 5, max: 50, errorMessage: "Uw gebruikersnaam moet minimaal 5 en maximaal 50 tekens bevatten"}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, password: {value: "", validation: {required: !0, errorMessage: "Gelieve een correct wachtwoord in te vullen.", match: {pattern: /^(?=.*[0-9))|([!?@_+#\$%\^\&*\]])(?=.*[A-Z]).{8,}$/}, pwdstrength: "password"}, layout: {fieldClass: "span-full tablet--span-half-1 desktop--span-half-1"}}, verifyPassword: {value: "", validation: {required: !0, errorMessage: "De wachtwoorden komen niet overeen.", match: {element: "password"}}, layout: {fieldClass: "span-full tablet--span-half-2 desktop--span-half-2"}}, inviteCode: {value: "", validation: {errorMessage: "Vul een uitnodigingscode in."}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full"}}, termsAndAgreements: {value: "", label: gettext("Ik ga akkoord met de <a href='#'>algemene voorwaarden</a>."), layout: {fieldClass: "span-full tablet--span-full desktop--span-full"}}, isBusy: !1}, init()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.ResetPasswordController", ["$rootScope", "$scope", "UserService", "$location", "$routeParams", "eventsService", function ($rootScope, $scope, User, $location, $routeParams, eventsService) {
        $scope.resetPassword = function () {
            $scope.isEditVisible = !1, $scope.showSpinner = !1, $scope.resetPasswordForm.isBusy = !0;
            var userObj = {plainPassword: $scope.resetPasswordForm.password.value, plainPasswordConfirm: $scope.resetPasswordForm.passwordConfirm.value};
            User.resetPassword(userObj, $routeParams.token, function (data) {
                data.success === !0 ? ($location.path("/" + $rootScope.currentLanguage + "/login"), eventsService.publish("error.message", [
                    {type: "S", message: "Je wachtwoord werd met succes gewijzigd."}
                ])) : eventsService.publish("form.submit", "resetpassword"), $scope.resetPasswordForm.isBusy = !1
            })
        }, $scope.resetPasswordForm = {password: {value: "", validation: {required: !0, errorMessage: "Gelieve een correct wachtwoord in te vullen.", match: {pattern: "^(?=.*[0-9])(?=.*[A-Z])(?=\\S+$).{8,}$"}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, passwordConfirm: {value: "", validation: {required: !0, errorMessage: "De wachtwoorden komen niet overeen.", match: {element: "password"}}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}}, $scope.resetPasswordForm.isBusy = !1
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("auth.RequestUsernameController", ["$scope", "$rootScope", "$location", "UserService", "StatusService", function ($scope, $rootScope, $location, User, StatusService) {
        $scope.requestUsername = function () {
            if ($scope.usernamerequest.$valid) {
                $scope.usernameRequestForm.isBusy = !0;
                var userObj = {email: $scope.usernameRequestForm.email.value};
                User.requestUsername(userObj, function (data) {
                    data.success === !0 ? $location.path("/" + $rootScope.currentLanguage + "/username-check-mail") : StatusService.addMessage(data.msgs), $scope.usernameRequestForm.isBusy = !1
                })
            }
        }, $scope.usernameRequestForm = {email: {value: "", validation: {required: !0, errorMessage: "Gelieve een geldig e-mailadres in te vullen."}, layout: {fieldClass: "span-full tablet--span-full desktop--span-full", errorClass: "span-full tablet--span-full desktop--span-full"}}, isBusy: !1}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("UserService", ["$http", "eventsService", "_", "$resource", function ($http, eventsService, _, $resource) {
        function isLoggedIn() {
            return!!User.isLogged
        }

        function register(user, fn) {
            $http.post(registerUrl, user, {overrideErrorHandling: !1}).success(function (data) {
                fn && fn(data)
            })
        }

        function registerEmployee(user, fn) {
            $http.post(registerEmployeeUrl, user, {overrideErrorHandling: !0}).success(function (data) {
                data.success && void 0 !== data.data && setUser(data.data, void 0 !== data.data), fn && fn(data)
            })
        }

        function completeEmployee(user, fn) {
            $http.post(completeEmployeeUrl, user, {overrideErrorHandling: !0}).success(function (data) {
                data.success && void 0 !== data.data && setUser(data.data, void 0 !== data.data), fn && fn(data)
            })
        }

        function login(user, fn) {
            $http.post(loginUrl, user).success(function (data) {
                data.success && void 0 !== data.data && setUser(data.data, void 0 !== data.data), fn && fn(data)
            })
        }

        function loginEmployee(user, fn) {
            $http.post(loginEmployeeUrl, user).success(function (data) {
                data.success && void 0 !== data.data && setUser(data.data, void 0 !== data.data), fn && fn(data)
            })
        }

        function activateAccount(token, fn) {
            var serviceUrl = activateUrl + token;
            $http.get(serviceUrl).success(function (data) {
                fn && fn(data)
            })
        }

        function logout(fn) {
            $http.get(logoutUrl).success(function (data) {
                data.success && clearUser(), fn && fn(data)
            })
        }

        function clearUser() {
            User.data = {}, User.isLogged = !1
        }

        function requestPassword(user, fn) {
            $http.post(requestPasswordUrl, user, {overrideErrorHandling: !0}).success(function (data) {
                fn && fn(data)
            })
        }

        function requestUsername(user, fn) {
            $http.post(requestUsernameUrl, user, {overrideErrorHandling: !0}).success(function (data) {
                fn && fn(data)
            })
        }

        function changePassword(newPassword1, newPassword2, oldPassword, override, fn) {
            override = override || !1, $http.post(changePasswordUrl, {newPassword1: newPassword1, newPassword2: newPassword2, oldPassword: oldPassword, overrideErrorHandling: override}).success(function (data) {
                fn && fn(data)
            })
        }

        function refreshUser(fn, override) {
            fn = fn || new Function, fetchUser(override).then(function (data) {
                fn(User.isLogged ? User : data)
            }, function (data, status, headers, config) {
                fn(data, status, headers, config)
            })
        }

        function getUser(fn, override) {
            return fn = fn || function () {
            }, User.isLogged ? fn(User) : void refreshUser(fn, override)
        }

        function setUser(user, loggedIn) {
            loggedIn = loggedIn || !1, User.isLogged = loggedIn, User.data = user, User.data.isFirstLogin && eventsService.publish("guide.firstLogin")
        }

        function fetchUser(override) {
            return override = !!override, _promises.fetchuser || (_promises.fetchuser = $http.get(userServiceUrl, {overrideErrorHandling: override}).success(function (data) {
                data.success && setUser(data.data, data.success)
            }).error(function () {
                setUser({}, !1)
            })["finally"](function () {
                _promises.fetchuser = void 0
            })), _promises.fetchuser
        }

        function fetchUserInfo(userid) {
            return $http.get(userInfoServiceUrl + "/" + userid, {overrideErrorHandling: !0})
        }

        function saveUser(user, fn) {
            $http.post(saveUserUrl, user, {overrideErrorHandling: !0}).success(function (data) {
                fn && fn(data)
            })
        }

        function saveSocialMediaLinks(social, fn) {
            $http.post(saveSocialMediaLinksUrl, social, {overrideErrorHandling: !0}).success(function (data) {
                fn && fn(data)
            })
        }

        function setStatus(status) {
            User.data.status = status
        }

        function addEmail(email, override, fn) {
            override = override || !1, $http.post(addEmailUrl, {email: email, overrideErrorHandling: override}).success(function (data) {
                data.success && (void 0 === User.data.secondaryEmails && (User.data.secondaryEmails = []), User.data.secondaryEmails.push({id: data.data.id, email: data.data.email, enabled: data.data.enabled})), fn && fn(data)
            })
        }

        function addPhone(phone, override, fn) {
            override = override || !1, $http.post(addPhoneUrl, {phone: phone, overrideErrorHandling: override}).success(function (data) {
                data.success && (void 0 === User.data.secondaryPhones && (User.data.secondaryPhones = []), User.data.secondaryPhones.push({id: data.data.id, phone: data.data.phone, enabled: data.data.enabled})), fn && fn(data)
            })
        }

        function setSecondaryEmailAsPrimaryEmail(secondaryEmail, fn) {
            $http.post(setPrimaryEmail, {id: secondaryEmail.id}).success(function (data) {
                if (data.success === !0) {
                    var secondary = _.find(User.data.secondaryEmails, {id: secondaryEmail.id});
                    if (secondary) {
                        var temp = secondary.email;
                        secondary.email = User.data.email, User.data.email = temp
                    }
                }
                fn && fn(data)
            })
        }

        function setSecondaryPhoneAsPrimaryPhone(secondaryPhone, fn) {
            $http.post(setPrimaryPhone, {id: secondaryPhone.id}).success(function (data) {
                if (data.success === !0) {
                    var secondary = _.find(User.data.secondaryPhones, {id: secondaryPhone.id});
                    if (secondary) {
                        var temp = secondary.phone;
                        secondary.phone = User.data.phone, User.data.phone = temp
                    }
                }
                fn && fn(data)
            })
        }

        function removeEmail(email, fn) {
            $http.post(removeEmailUrl, {id: email.id}).success(function (data) {
                data.success === !0 && _.remove(User.data.secondaryEmails, {id: email.id}), fn && fn(data)
            })
        }

        function removePhone(phone, fn) {
            $http.post(removePhoneUrl, {id: phone.id}).success(function (data) {
                data.success === !0 && _.remove(User.data.secondaryPhones, {id: phone.id}), fn && fn(data)
            })
        }

        function resendActivationMail(email, fn) {
            $http.post(resendActivationMailUrl, {id: email.id}).success(function (data) {
                fn && fn(data)
            })
        }

        function resendActivation(username) {
            return $http.post(resendActivationUrl, {username: username || ""})
        }

        function resetPassword(user, token, fn) {
            var serviceUrl = resetPasswordUrl + token;
            $http.post(serviceUrl, user).success(function (data) {
                fn && fn(data)
            })
        }

        function setMyApps(apps, fn) {
            if (void 0 !== apps && apps.length > 0) {
                User.apps.splice(0, User.apps.length);
                for (var i = 0; i < apps.length; i += 1)User.apps.push(apps[i])
            }
            fn && fn()
        }

        function getUserSessionCount(fn) {
            $http.get(sessionUrl).success(function (response) {
                response.success && fn && fn(response)
            })
        }

        function terminateAllSessions(fn) {
            $http.get(logoutEverywhereUrl).success(function (response) {
                response.success && fn && fn(response)
            })
        }

        function getAkaart(fn) {
            $http.post(akaartUrl).success(function (response) {
                fn && fn(response)
            })
        }

        function getAkaartDetails(fn) {
            $http.post(getAkaartDetailsUrl).success(function (response) {
                fn && fn(response)
            })
        }

        function getUserKoppelingen(fn) {
            $http.post(koppelingenUrl).success(function (response) {
                response.success && fn && fn(response)
            })
        }

        function getUserKoppeling(linkName, fn) {
            var url = singleKoppelingUrl + linkName;
            $http.post(url, "", {overrideErrorHandling: !0}).success(function (response) {
                fn && fn(response)
            })
        }

        function enableUserKoppeling(name, fn, force) {
            var serviceUrl = enableKoppelingenUrl + name;
            $http.post(serviceUrl).success(function (response) {
                (response.success || force) && fn && fn(response)
            })
        }

        function disableUserKoppeling(name, fn, force) {
            var serviceUrl = disableKoppelingenUrl + name;
            $http.post(serviceUrl).success(function (response) {
                (response.success || force) && fn && fn(response)
            })
        }

        function removeUserKoppeling(name, fn) {
            var serviceUrl = removeKoppelingenUrl + name;
            $http.post(serviceUrl).success(function (response) {
                response.success && fn && fn(response)
            })
        }

        function activateAKaartKoppeling(data, fn) {
            $http({method: "POST", url: activateAKaartUrl, data: data}).success(function (response) {
                fn && fn(response)
            })
        }

        function transferAkaartPoints(data, fn) {
            $http({method: "POST", url: transferAkaartPointsUrl, data: data}).success(function (response) {
                fn && fn(response)
            })
        }

        function activateStudentKoppeling(data, fn) {
            $http({method: "POST", url: activateStudentUrl, data: data}).success(function (response) {
                fn && fn(response)
            })
        }

        function activateOrganisationKoppeling(data, fn) {
            $http({method: "POST", url: activateOrganisationUrl, data: data}).success(function (response) {
                fn && fn(response)
            })
        }

        function getCRSKlant() {
            return $http.post(CRSKlantUrl)
        }

        function getCRSMedewerker() {
            return $http.post(CRSMedewerkerUrl)
        }

        function getCRSPersoon(fn) {
            return $http.post(CRSPersoonUrl, "", {overrideErrorHandling: !0}).success(function (response) {
                fn && fn(response)
            })
        }

        function getLightProfile(override) {
            return override = override || !1, $http.post(LightProfileUrl, {overrideErrorHandling: override})
        }

        function getInterests(fn) {
            $http.post(interestsUrl).success(function (response) {
                fn && fn(response)
            })
        }

        function changeInterests(data, fn) {
            $http.post(changeInterestsUrl, data).success(function (response) {
                fn && fn(response)
            })
        }

        function saveUserNotificationsPreferences(data, fn) {
            $http.post(saveNotificationsUrl, data).success(function (response) {
                response.success && fn && fn(response)
            })
        }

        function getUserNotificationsPreferences(data, fn) {
            $http.post(getNotificationsUrl, "").success(function (response) {
                fn && fn(response)
            })
        }

        function getRolesFromService(fn) {
            $http.post(getRolesUrl, "").success(function (response) {
                fn && fn(response)
            })
        }

        function addRole(roleId, usr) {
            return usr = usr || User.data.id, $http.post(addRoleUrl + "/" + usr, {role: roleId})
        }

        function deleteRole(roleId, usr) {
            return usr = usr || User.data.id, $http.post(deleteRoleUrl + "/" + usr, {role: roleId})
        }

        function activateUser(usr) {
            return $http.post(activateUserUrl + "/" + usr)
        }

        function deactivateUser(usr) {
            return $http.post(deactivateUserUrl + "/" + usr)
        }

        function autocompleteUsers(str, fn) {
            $http.get(autocompleteUrl + "/" + str).success(function (result) {
                fn && fn(result.data)
            })
        }

        function autocompleteUsersForRoot(str, fn) {
            $http.get(autocompleteUrlForRoot + "/" + str).success(function (result) {
                fn && fn(result.data, result.meta)
            })
        }

        function autocompleteUsersForRootLoadMore(str, skip, limit, fn) {
            $http.get(autocompleteUrlForRoot + "/" + str + "/skip/" + skip + "/limit/" + limit).success(function (result) {
                fn && fn(result.data, result.meta)
            })
        }

        function hasPermission(appSlug, permission, fn) {
            var serviceUrl = permissionsUrl + appSlug + "/" + permission;
            $http.post(serviceUrl).success(function (response) {
                fn && fn(response)
            })
        }

        function hasRole(role, fn) {
            getUser(function () {
                return User.isLogged ? void(fn && fn(_.contains(User.data.currentRoles, role))) : void fn(!1)
            }, !0)
        }

        function fetchInlineHelpText(slug) {
            var serviceUrl = inlineHelpTextUrl + "/" + slug;
            return $http.get(serviceUrl, {overrideErrorHandling: !0})
        }

        function setInlineHelpTextToRead(data, fn) {
            var serviceUrl = inlineHelpTextUrl + "/" + data.slug + "/read";
            $http({method: "POST", url: serviceUrl, data: data}).success(function (response) {
                fn && fn(response)
            })
        }

        function getStudentInfo(id, fn) {
            var serviceUrl = getStudentInfoUrl;
            "" !== id && (serviceUrl += "/" + id), $http.get(serviceUrl, {}).success(function (response) {
                fn && fn(response)
            })
        }

        function setStudentInfo(data, fn) {
            var serviceUrl = setStudentInfoUrl;
            $http({method: "POST", url: serviceUrl, data: data}).success(function (response) {
                fn && fn(response)
            })
        }

        var userServiceUrl = "/srv/user/d/me", userInfoServiceUrl = "/srv/usermgmt/d/get-user", registerUrl = "/srv/user/d/create", loginUrl = "/srv/user/d/auth", loginEmployeeUrl = "/srv/user/d/auth/employee", activateUrl = "/srv/user/d/activate-account/", logoutUrl = "/srv/user/d/logout", requestPasswordUrl = "/srv/user/d/new-password-request", requestUsernameUrl = "/srv/user/d/username-request", resetPasswordUrl = "/srv/user/d/reset-password/", saveUserUrl = "/srv/user/d/save-profile", addEmailUrl = "/srv/user/d/add-email", removeEmailUrl = "/srv/user/d/remove-email", setPrimaryEmail = "/srv/user/d/change-primary-email", addPhoneUrl = "/srv/user/d/add-phone", removePhoneUrl = "/srv/user/d/remove-phone", setPrimaryPhone = "/srv/user/d/change-primary-phone", resendActivationMailUrl = "/srv/user/d/resend-activation-email", resendActivationUrl = "/srv/user/d/resend-activation", changePasswordUrl = "/srv/user/d/change-password", sessionUrl = "/srv/user/d/session-count", logoutEverywhereUrl = "/srv/user/d/logout-other", akaartUrl = "/srv/user/d/account/akaart/info", koppelingenUrl = "/srv/user/d/account/get-all", singleKoppelingUrl = "/srv/user/d/account/get/", enableKoppelingenUrl = "/srv/user/d/account/enable/", disableKoppelingenUrl = "/srv/user/d/account/disable/", removeKoppelingenUrl = "/srv/user/d/account/remove/", activateAKaartUrl = "/srv/user/d/account/akaart/activate", transferAkaartPointsUrl = "/srv/user/d/account/akaart/transfer", getAkaartDetailsUrl = "/srv/user/d/account/get/akaart", CRSKlantUrl = "/srv/user/d/account/get/crsklant", CRSMedewerkerUrl = "/srv/user/d/account/crsklant/info", CRSPersoonUrl = "/srv/user/d/account/crsklant/crspersoon", LightProfileUrl = "/srv/user/d/account/crsklant/light", interestsUrl = "/srv/user/d/personalization/category-list", saveSocialMediaLinksUrl = "/srv/user/d/save-social-media-links", changeInterestsUrl = "/srv/user/d/personalization/category-list/save", saveNotificationsUrl = "/srv/user/d/set-preferences", getNotificationsUrl = "/srv/user/d/get-preferences", getRolesUrl = "/srv/usermgmt/d/get-roles", addRoleUrl = "/srv/usermgmt/d/add-role", deleteRoleUrl = "/srv/usermgmt/d/delete-role", activateUserUrl = "/srv/usermgmt/d/enable-user", deactivateUserUrl = "/srv/usermgmt/d/disable-user", autocompleteUrl = "/srv/user/d/autocomplete", autocompleteUrlForRoot = "/srv/usermgmt/d/autocomplete", permissionsUrl = "/srv/apps/d/permission/", inlineHelpTextUrl = "/srv/user/d/help", completeEmployeeUrl = "/srv/user/d/employeehandler/upgrade", registerEmployeeUrl = "/srv/user/d/employeehandler", activateStudentUrl = "/srv/user/d/account/student/activate", getStudentInfoUrl = "/srv/user/d/account/student/get", setStudentInfoUrl = "/srv/user/d/account/student/set", activateOrganisationUrl = "/srv/user/d/account/gate15_organisation/activate", User = {isLogged: !1, apps: [], data: {}, status: "online"}, _promises = {fetchuser: void 0}, resources = {verenigingen: $resource("/srv/gate15/d/organisations", {}, {})};
        return{clear: clearUser, activateAccount: activateAccount, addEmail: addEmail, addPhone: addPhone, isLoggedIn: isLoggedIn, login: login, loginEmployee: loginEmployee, logout: logout, register: register, completeEmployee: completeEmployee, registerEmployee: registerEmployee, removeEmail: removeEmail, removePhone: removePhone, setPrimaryEmail: setSecondaryEmailAsPrimaryEmail, setPrimaryPhone: setSecondaryPhoneAsPrimaryPhone, requestPassword: requestPassword, requestUsername: requestUsername, resendActivation: resendActivationMail, resendAccountActivation: resendActivation, resetPassword: resetPassword, changePassword: changePassword, saveUser: saveUser, setMyApps: setMyApps, setStatus: setStatus, getUser: getUser, refreshUser: refreshUser, getOtherUserInfo: fetchUserInfo, setUser: setUser, getSessionCount: getUserSessionCount, logOutEverywhere: terminateAllSessions, getKoppelingen: getUserKoppelingen, getKoppeling: getUserKoppeling, enableKoppeling: enableUserKoppeling, disableKoppeling: disableUserKoppeling, removeKoppeling: removeUserKoppeling, activateAKaart: activateAKaartKoppeling, activateStudent: activateStudentKoppeling, activateOrganisation: activateOrganisationKoppeling, getCRSKlant: getCRSKlant, getCRSMedewerker: getCRSMedewerker, getCRSPersoon: getCRSPersoon, getLightProfile: getLightProfile, getInterests: getInterests, changeInterests: changeInterests, saveSocialMediaLinks: saveSocialMediaLinks, saveNotificationsPrefs: saveUserNotificationsPreferences, getNotificationsPrefs: getUserNotificationsPreferences, getRoles: getRolesFromService, addRole: addRole, deleteRole: deleteRole, activateUser: activateUser, deactivateUser: deactivateUser, autocomplete: autocompleteUsers, autocompleteUsersForRoot: autocompleteUsersForRoot, autocompleteUsersForRootLoadMore: autocompleteUsersForRootLoadMore, hasPermission: hasPermission, hasRole: hasRole, getAkaart: getAkaart, getAkaartDetails: getAkaartDetails, transferAkaartPoints: transferAkaartPoints, fetchInlineHelpText: fetchInlineHelpText, setInlineHelpTextToRead: setInlineHelpTextToRead, getStudentInfo: getStudentInfo, setStudentInfo: setStudentInfo, GateOrganisations: resources.verenigingen}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("feedback.FeedbackController", ["$scope", "$rootScope", "$http", "$routeParams", "$location", "HelperService", "eventsService", "ReportService", "_", function ($scope, $rootScope, $http, $routeParams, $location, Helper, Events, Report, _) {
        function getChoices() {
            Report.getChoices().then(function (response) {
                var choices = Helper.verifyNamespace("data", response) || {};
                $scope.rawChoices = choices, getChoicesOptions(choices)
            }, function () {
                $scope.rawChoices = null
            })
        }

        function getMostPopular() {
            $scope.state.loading = !0, Report.getMostPopular().then(function (res) {
                $scope.state.loading = !1, res.data.length > 0 ? ($scope.popularReports = res.data, $scope.popularReports.noData = "") : ($scope.popularReports = {}, $scope.popularReports.noData = "Er zijn geen meest gemelde problemen gevonden")
            }, function () {
                $scope.popularReports = null
            })
        }

        function getMostPopularByTheme(theme) {
            $scope.state.loading = !0, Report.getMostPopularByTheme(theme).then(function (res) {
                $scope.state.loading = !1, res.data.length > 0 ? ($scope.popularReports = res.data, $scope.popularReports.noData = "") : ($scope.popularReports = {}, $scope.popularReports.noData = "Er zijn geen meest gemelde problemen gevonden")
            }, function () {
                $scope.popularReportsByType = null
            })
        }

        function findChoice(level) {
            var result;
            return _.find($scope.rawChoices, function (c) {
                c.slug === $scope.selectors.primary && (level > 1 ? _.find(c.children, function (cc) {
                    cc.slug === $scope.selectors.secondary && (level > 2 ? void 0 !== cc.children && _.find(cc.children, function (ccc) {
                        ccc.slug === $scope.selectors.tertiary && (result = ccc)
                    }) : result = cc)
                }) : result = c)
            }), result
        }

        function getChoicesOptions(choices) {
            var primary = [], secondary = {}, tertiary = {};
            for (var prop in choices) {
                var c = choices[prop], choice = {key: c.slug, value: c.name};
                if (primary.push(choice), void 0 !== c.children) {
                    secondary[c.slug] = [];
                    for (var pop in c.children) {
                        var cc = c.children[pop], child = {key: cc.slug, value: cc.name};
                        if (secondary[c.slug].push(child), void 0 !== cc.children) {
                            tertiary[cc.slug] = [];
                            for (var p in cc.children) {
                                var ccc = cc.children[p], third = {key: ccc.slug, value: ccc.name};
                                tertiary[cc.slug].push(third)
                            }
                        }
                    }
                }
            }
            $scope.choices.primary = primary, $scope.choices.secondary = secondary, $scope.choices.tertiary = tertiary
        }

        function initialize() {
            $scope.selectors = {primary: "", secondary: "", tertiary: ""}, $scope.choice = {}, $scope.choices = {primary: [], secondary: {}, tertiary: {}}, $scope.state = {loading: !1}, $scope.layout = {fieldClass: "span-full tablet--span-9-1 desktop--span-9-1"}, getChoices(), getMostPopular()
        }

        $scope.selectPrimary = function () {
            $scope.popularReports = {}, getMostPopularByTheme($scope.selectors.primary), $scope.selectors.secondary = "", $scope.selectors.tertiary = ""
        }, $scope.selectSecondary = function () {
            $scope.selectors.tertiary = "", $scope.choice = findChoice(2)
        }, $scope.selectTertiary = function () {
            $scope.choice = findChoice(3)
        }, $scope.checkContext = function (form) {
            void 0 !== $routeParams.form && $routeParams.form === form && ($rootScope.showFeedback = !1)
        }, $scope.redirectToUrl = function (url, slug, name) {
            $location.path("/" + $rootScope.currentLanguage + url), Events.publish("report.new", {slug: slug, name: name})
        }, $scope.$on("$destroy", function () {
            $rootScope.showFeedback = !1, Events.unsubscribe("report.toggle"), Events.unsubscribe("user.rolesChanged")
        }), Events.subscribe("user.rolesChanged", function () {
            initialize()
        }), initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.service("ReportService", ["$http", "$resource", "HelperService", "_", function ($http, $resource) {
        function getMostPopularReportsFromService() {
            return reports.getMostPopularReports().$promise
        }

        function getReportChoicesFromService() {
            return reports.getReportChoices().$promise
        }

        function getMostPopularReportsByThemeFromService(theme) {
            return reports.getMostPopularReportsByTheme({theme: theme}).$promise
        }

        var reports = $resource("/srv/report/d/:firstParam/:secondParam/:theme", {firstParam: "@firstParam", secondParam: "@secondParam", theme: "@theme"}, {getReportChoices: {method: "GET", params: {firstParam: "list-themes"}}, getMostPopularReports: {method: "GET", params: {firstParam: "forms", secondParam: "popular"}}, getMostPopularReportsByTheme: {method: "GET", params: {firstParam: "forms", secondParam: "popular"}}});
        return{getChoices: getReportChoicesFromService, getMostPopular: getMostPopularReportsFromService, getMostPopularByTheme: getMostPopularReportsByThemeFromService}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.controller("chat.ChatController", ["$scope", "$rootScope", "$http", "$cookies", "_", "eventsService", "UserService", function ($scope, $rootScope, $http, $cookies, _, eventsService, UserService) {
        function initialize() {
        }

        function renderChat(friends, id, minimized) {
            {
                var friendNames;
                $rootScope.user
            }
            switch (friends.length) {
                case 1:
                    friendNames = "Jij en " + friends[0].firstName;
                    break;
                case 2:
                    friendNames = "Jij, " + friends[0].firstName + "en " + friends.length + " andere.";
                    break;
                default:
                    friendNames = "Jij, " + friends[0].firstName + "en " + friends.length + " anderen."
            }
            minimized = minimized || !1;
            var newChat = {id: id, friends: friends, state: "invitation", friendNames: friendNames, minimized: minimized, chatlog: []};
            return $scope.chat.list.push(newChat), newChat
        }

        function getChatInstance(instanceId) {
            return _.find($scope.chat.list, function (o) {
                return o.id === instanceId
            })
        }

        function getChatSession(sessionId) {
            return _.find(chatSessions, function (o) {
                return o.name === sessionId
            })
        }

        function getChatSessionByChannelId(channelId) {
            return _.find(chatSessions, function (o) {
                return o._id === channelId
            })
        }

        function filterSelf(usersAndMe) {
            var me = UserService.data;
            if (void 0 === me)return usersAndMe;
            var withoutMe = _.filter(usersAndMe, function (f) {
                return f._id !== me._id
            });
            return withoutMe
        }

        var chatServiceUrl = "/srv/chat", chatSessions = [];
        $scope.chat = {list: []}, $scope.chat.minimized = !1, $scope.chat.send = function (instanceId) {
            var instance = getChatInstance(instanceId), session = getChatSession(instanceId);
            if (instance.message) {
                var user = $rootScope.user;
                $http({method: "post", url: chatServiceUrl + "/d/send", data: {channel_id: session._id, user: {id: user.id, name: user.firstName}, message: instance.message, AOS: $cookies.AOS}}).success(function () {
                    instance.message = ""
                }).error(function () {
                })
            }
        }, $scope.chat.minimizeAll = function () {
            $scope.chat.minimized = !$scope.chat.minimized
        }, $scope.chat.close = function (instanceId) {
            _.remove($scope.chat.list, function (o) {
                return o.id === instanceId
            })
        }, $scope.chat.reject = function (instanceId) {
            var instance = getChatInstance(instanceId);
            instance.state = "rejected"
        }, $scope.chat.accept = function (instanceId) {
            var instance = getChatInstance(instanceId);
            instance.state = "accepted"
        }, $scope.chat.minimize = function (instanceId) {
            for (var instance = getChatInstance(instanceId), numberOfChats = $scope.chat.list.length, i = 0; numberOfChats > i; i += 1) {
                var o = $scope.chat.list[i], state = o.id === instanceId;
                o.minimized = !state, state && (o.newMessages = !1)
            }
            instance.minimized || (instance.newMessages = !1)
        }, eventsService.on("socket.chat", function (socketMessage) {
            var channel_id = socketMessage.channel_id, session = getChatSessionByChannelId(channel_id), instance = void 0 !== session ? getChatInstance(session.name) : session;
            if (void 0 === session && (session = {name: _.uniqueId("channel_"), _id: channel_id, users: [
                {id: socketMessage.data.user.id, firstName: socketMessage.data.user.name},
                $rootScope.user
            ]}, chatSessions.push(session)), void 0 === instance) {
                var friends = filterSelf(session.users);
                instance = renderChat(friends, session.name, !1)
            }
            instance.chatlog.push(socketMessage.data), instance.newMessages = instance.minimized, eventsService.publish("app.chat.message.new", instance.id)
        }, $scope), eventsService.subscribe("chat.open", function (user) {
            if (user) {
                var channelName = _.uniqueId("channel_");
                UserService.getUser(function (self) {
                    $http({method: "post", url: chatServiceUrl + "/d/channel/create", data: {channelname: channelName, users: [user.id, self.data.id]}}).success(function (data) {
                        if (data.success) {
                            var session = data.data;
                            chatSessions.push(session);
                            var friends = filterSelf(session.users);
                            renderChat(friends, session.name, !1)
                        }
                    }).error(function () {
                    })
                })
            }
        }, $scope), initialize()
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.directive("perfectScrollbar", ["$rootScope", function () {
        return{restrict: "A", link: function (scope, elm) {
            elm.perfectScrollbar()
        }}
    }])
}(angular, antwerpOS),function (ng, aOS) {
    "use strict";
    aOS.directive("scrollDown", ["$rootScope", "$timeout", "eventsService", function ($rootScope, $timeout, eventsService) {
        return{restrict: "A", link: function (scope, elm) {
            eventsService.subscribe("app.chat.message.new", function () {
                $timeout(function () {
                    elm.scrollTop(elm[0].scrollHeight)
                }, 0, !1)
            })
        }}
    }])
}(angular, antwerpOS);