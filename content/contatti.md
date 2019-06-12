---
title: "Contatti e informazioni su Riccardo Palombo"
date: 2019-05-06T18:41:00+02:00
description: "Contatti Riccardo Palombo. Informazioni di contatto per inviare email o messaggi a Riccardo Palombo."
contatti: current-menu-item
---

<div class="main-scroll">

<div class="row ">
            <div class="col-md-2"></div>
            <div class="col-md-4 no-padding-left col-sm-6">
                <div class="promo-box ">
                   <h1>Info e contatti</h1>
                    <span class="small-title">Usa il modulo sotto per proposte e idee.</span>
                </div>
            </div>
            <div class="col-md-4 no-padding col-sm-6">
       <div class="videoWrapper embed-responsive embed-responsive-4by3" style="padding-top:0;padding-bottom: 68.25%!important;margin-top:0;" data-yt-url="https://www.youtube.com/embed/T1WfeoSXKvU?autoplay=1">
            <img src="../img/video-riccardo-palombo.jpg" async class="play-youtube-video lazyload" alt="Video Riccardo Palombo">
        </div>
            </div>


<div class="col-md-2 "></div>
            </div>
<div class="row-col-12">
            <div class="col-md-8 col-md-push-2 no-padding-left">             
<p>Mi occupo di contenuti digitali: produco foto, video e testi per agenzie e siti web. Negli ultimi cinque anni ho lavorato per HDblog, poi ho <a href="/podcast/il-mordente-25/" title="Ascolta: perché ho cambiato lavoro e per fare cosa">voluto cambiare</a>. Così a dicembre 2018 ho aperto un podcast: Il Mordente, e a giugno 2019 ho messo online il sito internet che stai leggendo.</p>
</div>
        </div>

<div class="google-map-wrapper" id="map"></div>

<div class="row-col-12">
            <div class="col-md-8 col-md-push-2 no-padding-left">             
<p>Adesso ho quasi 40 anni, niente figli. Cerco il silenzio e quindi giro per musei, parchi o chiese silenziose. Appena posso leggo. <a href="https://www.strava.com/athletes/12993620" title="Riccardo Palombo su Strava">Ogni mattina corro</a>.</p>
<p>
Usa il modulo contatti a seguire per scrivermi di un'idea, di un suggerimento, di una proposta di collaborazione; di solito rispondo ai messaggi dopo poche ore.
Oppure mi trovi sui principali social network, ad eccezione di Facebook, e al numero di telefono del podcast: <strong>3518516089</strong> (solo messaggi Whatsapp o Telegram).
</p>
</div>
        </div>

<!-- Form Contatti-->			  
<div class="row extended-row-contatti">
        <div class="row-overlay"></div>
        <div class="col-md-2 ">
        </div>
        <div class="col-md-8 col-sm-10 no-padding">
<form name="formcontatti" method="post" data-netlify="true" autocomplete="off" action="/conferma">
  <p class="hidden">
    <label>NON riempire questo spazio se SEI UMANO: <input name="bot-field" /></label>
  </p>
					<div>
						<label for="name">Il tuo nome</label>
						<input type="text" name="nome">
					</div>
					<div>
						<label for="email">Il tuo indirizzo email</label>
						<input type="email" name="email">
					</div>
					<div>
						<label for="message">Messaggio</label>
						<textarea name="messaggio"></textarea>
					</div>
					<div>
						<button type="submit" style="width:100%">INVIA
					</div>
				</form>
        </div>
    </div>

<!-- Fine Form Contatti-->
                    
</div> <!-- main-scroll -->

<div class="grid-bg row">
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
</div>

<!-- Init Google Maps API -->
<script>
    function initMap() {

        // Specify features and elements to define styles.
        var styleArray = [
            {
                featureType: "all",
                stylers: [
                    { saturation: -100 }
                ]
            }
        ];

        var myLatLng = {lat: 41.917910, lng: 12.511263};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: false,
            draggable: true,
            gestureHandling: 'cooperative',
            styles: styleArray,
            fullscreenControl: false,
            streetViewControl: true,
            zoom: 14,
            styles: [
                        {"elementType":"geometry","stylers":[{"color":"#f9f9f9"}]},
                        {"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                        {"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},
                        {"elementType":"labels.text.stroke","stylers":[{"color":"#f9f9f9"}]},
                        {"featureType":"administrative.land_parcel", "elementType":"labels.text.fill", "stylers":[{"color":"#bdbdbd"}]},
                        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},
                        {"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},
                        {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},
                        {"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},
                        {"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},
                        {"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},
                        {"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},
                        {"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},
                        {"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},
                        {"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},
                        {"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},
                        {"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},
                        {"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},
                      ]
        });

    }
    
</script>
 
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDjlqXzXnP_4JpheqI40He2dM1H-43cGw4&callback=initMap"></script>