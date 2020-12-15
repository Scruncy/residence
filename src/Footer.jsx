import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';

import $ from 'jquery';


  $(document).ready(function(){
    var larghezza = ($(document).width());

  if (larghezza > 991){
      $(".mappa").css("height", larghezza/4);
  } else {
      $(".mappa").css("height", larghezza/2.5);
  }


$( window ).resize(function() {
  var larghezza = ($(document).width());

  if (larghezza > 991){
      $(".mappa").css("height", larghezza/4);
  } else {
      $(".mappa").css("height", larghezza/2.5);
  }

});
});

function Footer(){
  return (
    <div className="container-fluid barranavigazione contatti">
  <div className="row">
    <div className="col-lg-6 center2 allineatore">

      <p className="contattami testo"> <MailOutlineIcon /> info@residencesaratrieste.com </p>
      <p className="contattami testo"> <PhoneIcon /> +39 3274475405 </p>
      <p className="contattami testo"> <LocationOnIcon /> Piazza Trauner 1 (Trieste, Italy, Friuli-Venezia Giulia) </p>
      <p className="contattami testo"> <FacebookIcon /> <a className="contattami" href="https://www.facebook.com/sara.residence.7/"> Resicence Sara </a> </p>
     </div>
    <div className="col-lg-6 mappa">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.15116740036!2d13.766155115823938!3d45.64778592919506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b6b71337478d5%3A0x110e424de738af4!2sResidence%20Sara!5e0!3m2!1sit!2sit!4v1607365480680!5m2!1sit!2sit" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
</div>
  )
}

export default Footer;
