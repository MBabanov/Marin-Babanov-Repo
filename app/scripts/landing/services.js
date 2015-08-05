/* this service is used to bind the email user inserted in last input section of landing page to the modal register
*
 */

estars.factory("sharedEmail", [ function () {

    var email = []
    var sharedEmail = {
        get_email: get_email,
        set_email: set_email,
        remove_email: remove_email
    };
    return sharedEmail;

    function get_email() {
        return _.first(email);
    }

    function set_email(val) {
        email.push(val)
    }

    function remove_email() {
        email.splice(0, 1)
        return email
    }
}])
/* we are not usign that

 */
estars.factory("landingData", ['Restangular', function (Restangular) {

    return {
        $getTopSlider: function () {
            // return Restangular.all('social/twitter').getList();
            var topSlider = [
                {
                 htmlString: '<div class="ganar_dinero_counter_strike_electronicstars"><img src="images/landing/top-slider/ganar_dinero_counter_strike_electronicstars.jpg" alt="ganar dinero counter strike electronicstars"><div class="row"><div><a ui-sref="register" class="btn btn-lg btn-danger red-button">SING UP</a></div></div></div>'
                 },
                {
                    htmlString: '<div class="ganar_dinero_jugando_videojuegos_electronicstars"><img src="images/landing/top-slider/ganar_dinero_jugando_videojuegos_electronicstars.jpg" alt="ganar dinero jugando videojuegos electronicstars"><div><span class="sm-text">Join Now & Play Your Favorite Games Daily</span><span class="md-text">CS:GO TOURNAMENTS</span><a ui-sref="register" class="btn btn-lg btn-danger red-button">DOWNLOAD & PLAY</a></div></div>'
                },
                {
                 htmlString: '<div class="ganar_dinero_videojuegos_electronicstars"><img src="images/landing/top-slider/ganar_dinero_videojuegos_electronicstars.jpg" alt="ganar dinero videojuegos electronicstars"><div ><span class="sm-text">SACALE <span class="red_text">PROVECHO </span><span class="distance">A TUS </span></span><span class="md-text"><span class="red_text">HORAS DE JUEGO</span></span></div></div>'
                },
                {
                    htmlString: '<div class="servidor_rFactor_gratis_electronicstars"><img src="images/landing/top-slider/servidor_rFactor_gratis_electronicstars.jpg" alt="servidor rFactor gratis electronicstars"><div ><span class="sm-text">NO SEAS EL ULTIMO!</span><span class="md-text">PARTICIPA EN TORNEOS <span class="red-text">DIARIO</span></span></div></div>'
                },
                 {
                 htmlString: '<div class="ingresos_jugando_videojuegos_electronic_stars"><img src="images/landing/top-slider/ingresos_jugando_videojuegos_electronic_stars.jpg" alt="ingresos jugando videojuegos electronic stars"><div ><span class="sm-text">conviertete</span><span class="md-text"> en un pro<br> gamer</span><a ui-sref="register" class="btn btn-lg btn-danger red-button" >REGISTRATE AHORA </a></div></div>'
                 }

            ];
            return topSlider;


        },
        $getTournamentSlider: function () {
            var tournamentSlider = {};
            return tournamentSlider;
        }


    }
}])