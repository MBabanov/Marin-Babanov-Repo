
/**
 * Created by davide on 03/02/2015.
 */
/* this service manage the language in the application
 */
estars.factory('LanguageService', function(){
    'use strict';
    //default language
    var language ={name: 'ENGLISH', flag: 'gb', key: 'en'};
    return{
        language:language,
        get_language : get_language,
        set_language:set_language,
        get_language_local: get_language_local
    }

    function get_language(){
        return this.language
    }
    function set_language(language){
        this.language = language

    }

    function get_language_local(){
        //if local
        //set language
        return language
    }



} )